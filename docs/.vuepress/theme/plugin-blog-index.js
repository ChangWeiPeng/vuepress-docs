/**
 * VuePress plugin: generate blog post index at build time
 * - onPrepared: auto-write permalink back to .md files if missing, then write blog-index.js
 */
import { fs } from 'vuepress/utils'

const normArr = (val) => {
  if (!val) return []
  return Array.isArray(val) ? val : [val]
}

const extractExcerpt = (content, maxLen = 300) => {
  let text = content.replace(/^---[\s\S]*?---\n?/, '')
  text = text.replace(/<style[\s\S]*?<\/style>/gi, '')
  text = text.replace(/<[^>]+>/g, '')
  text = text.replace(/^#{1,6}\s+.*/gm, '')
  text = text.replace(/!\[.*?\]\(.*?\)/g, '')
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
  text = text.replace(/```[\s\S]*?```/g, '')
  text = text.replace(/`[^`]+`/g, '')
  text = text.replace(/\$\$[\s\S]*?\$\$/g, '[formula]')
  text = text.replace(/\$[^$\n]+\$/g, '[formula]')
  text = text.replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1')
  text = text.replace(/^[-*_]{3,}\s*$/gm, '')
  text = text.replace(/\n+/g, ' ').replace(/\s+/g, ' ').trim()
  if (text.length <= maxLen) return text
  const truncated = text.slice(0, maxLen)
  const lastSpace = truncated.lastIndexOf(' ')
  return (lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated) + '…'
}

/**
 * Generate permalink: /blog/YYYY/MM/DD/Article_Title/
 */
const generatePermalink = (title, dateStr) => {
  const d = new Date(String(dateStr || '').replace(/\//g, '-'))
  const year = isNaN(d.getTime()) ? new Date().getFullYear() : d.getFullYear()
  const month = isNaN(d.getTime()) ? '01' : String(d.getMonth() + 1).padStart(2, '0')
  const day = isNaN(d.getTime()) ? '01' : String(d.getDate()).padStart(2, '0')
  const slug = (title || 'untitled')
    .replace(/\s+/g, '_')
    .replace(/[^\w\u4e00-\u9fff\u3040-\u30ff-]/g, '')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '')
  return `/blog/${year}/${month}/${day}/${slug}/`
}

export const blogIndexPlugin = () => ({
  name: 'vuepress-plugin-blog-index',

  onPrepared: async (app) => {
    const posts = []

    for (const page of app.pages) {
      const rel = page.filePathRelative || ''
      if (!rel.startsWith('blog/') || rel === 'blog/README.md' || rel === 'blog/index.md') continue

      const fm = page.frontmatter || {}
      const dateStr = fm.createTime || fm.date || ''
      const title = page.title || fm.title || ''

      // Check if permalink is missing or empty
      const existingPermalink = fm.permalink ? String(fm.permalink).trim() : ''
      let permalink = existingPermalink || generatePermalink(title, dateStr)

      // Write permalink back to .md file if it was missing/empty
      if (!existingPermalink && page.filePath) {
        try {
          let fileContent = await fs.readFile(page.filePath, 'utf-8')
          // Replace empty permalink: field with generated value
          if (/^permalink:\s*$/m.test(fileContent)) {
            fileContent = fileContent.replace(/^permalink:\s*$/m, `permalink: ${permalink}`)
          } else if (/^---/.test(fileContent)) {
            // Insert permalink after first ---
            fileContent = fileContent.replace(/^(---\n)/, `$1permalink: ${permalink}\n`)
          }
          await fs.writeFile(page.filePath, fileContent, 'utf-8')
        } catch (e) {
          // Non-fatal: just log
          console.warn(`[blog-index] Could not write permalink to ${page.filePath}: ${e.message}`)
        }
      }

      posts.push({
        routePath: page.path,
        path: permalink,
        title,
        date: dateStr,
        categories: normArr(fm.categories),
        tags: normArr(fm.tags),
        excerpt: extractExcerpt(page.content || '', 300),
      })
    }

    posts.sort((a, b) => {
      const da = String(a.date).replace(/\//g, '-')
      const db = String(b.date).replace(/\//g, '-')
      return db.localeCompare(da)
    })

    await app.writeTemp(
      'blog-index.js',
      `export const blogPosts = ${JSON.stringify(posts, null, 2)}\n`
    )
  },
})
