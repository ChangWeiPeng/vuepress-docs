---
title: VocabShoot 核心算法
permalink: /blog/algorithm/
createTime: 2026/03/29 14:51:33
---

# VocabShoot 核心算法文档

> 本文档系统阐述 VocabShoot 三个核心算法模块的数学原理与推导过程。

---

## 目录

1. [单词坐标分配](#1-单词坐标分配)
2. [子弹落点采样](#2-子弹落点采样)
3. [子弹命中判定](#3-子弹命中判定)

---

## 1 单词坐标分配

### 1.1 设计目标

将词库中每个单词映射到极坐标系的某个位置，使得**熟练度越低的单词越靠近中心**，便于后续采样时以更高概率命中它们。

### 1.2 环级映射

给定单词熟练度 $m \in [0, 1]$ 与总环数 $N$，定义**环级**：

$$
\ell = \left\lfloor m \cdot N \right\rfloor, \quad \ell \in \{0, 1, \ldots, N-1\}
$$

特别地，当 $m = 1$ 时需截断到 $N-1$：

$$
\ell = \min\left(\left\lfloor m \cdot N \right\rfloor,\ N-1\right)
$$

**性质**：$m$ 越小 $\Rightarrow$ $\ell$ 越小 $\Rightarrow$ 单词越靠近原点。

### 1.3 环内极角分配

设第 $\ell$ 环内共有 $n$ 个单词，按熟练度升序排列，第 $i$ 个单词（$i = 0, 1, \ldots, n-1$）的极角为：

$$
\theta_i = \frac{i}{n} \cdot 2\pi
$$

各单词在环内**均匀分布**，相邻单词角间距恒为 $\dfrac{2\pi}{n}$。

### 1.4 极径固定

令环宽为 $w$（默认 $w = 3.0$），将单词固定在**环的中线**处：

$$
r = \left(\ell + \frac{1}{2}\right) \cdot w
$$

第 $\ell$ 环的内径为 $\ell w$，外径为 $(\ell+1)w$，中线即两者的平均值。

### 1.5 极坐标转直角坐标

$$
\begin{cases}
x = r\cos\theta \\
y = r\sin\theta
\end{cases}
$$

### 1.6 小结

完整映射流程：

$$
m \;\xrightarrow{\text{环级}}\; \ell \;\xrightarrow{\text{极径}}\; r = \left(\ell+\tfrac{1}{2}\right)w \;\xrightarrow{\text{极角}}\; \theta_i = \frac{i}{n}\cdot 2\pi \;\xrightarrow{\text{转换}}\; (x, y)
$$

---

## 2 子弹落点采样

### 2.1 设计目标

每发子弹的落点 $(r_\text{shot}, \theta_\text{shot})$ 需满足：**极径集中在小值附近**（内圈即低熟练度单词获得更多命中机会），极角均匀覆盖全方向。

### 2.2 极角采样

极角在全圆均匀采样：

$$
\theta_\text{shot} \sim \mathrm{Uniform}(0,\, 2\pi)
$$

### 2.3 极径采样：半正态分布

#### 2.3.1 目标分布

希望极径 $r \geq 0$ 服从**半正态分布**，其概率密度函数为：

$$
f(r) = \frac{\sqrt{2}}{\sigma\sqrt{\pi}} \exp\!\left(-\frac{r^2}{2\sigma^2}\right), \quad r \geq 0
$$

这等价于取标准正态变量的绝对值再乘以 $\sigma$：

$$
r = \sigma\,|Z|, \quad Z \sim \mathcal{N}(0, 1)
$$

#### 2.3.2 问题：如何生成标准正态随机数？

计算机只能直接生成均匀分布随机数 $U \sim \mathrm{Uniform}(0,1)$，需要一种方法将其转换为正态分布。

#### 2.3.3 Box-Muller 方法

**核心思路**：利用二维标准正态分布在极坐标下的可分离性。

设 $X, Y$ 独立同分布于 $\mathcal{N}(0,1)$，其联合密度为：

$$
f(x, y) = \frac{1}{2\pi} \exp\!\left(-\frac{x^2 + y^2}{2}\right)
$$

令 $r^2 = x^2 + y^2$，$\theta = \arctan(y/x)$，转换到极坐标后联合密度变为：

$$
f(r, \theta) = \underbrace{\frac{1}{2\pi}}_{\theta \text{ 的分布}}  \underbrace{\exp\!\left(-\frac{r^2}{2}\right)}_{r \text{ 的分布}}
$$

可以看出 $r$ 与 $\theta$ **独立**，且：

- $\theta \sim \mathrm{Uniform}(0, 2\pi)$
- $r^2 \sim \mathrm{Exponential}\!\left(\tfrac{1}{2}\right)$，CDF 为 $F(t) = 1 - e^{-t/2}$

**逆变换法**生成 $r$：令 $U_1 \sim \mathrm{Uniform}(0,1)$，由 $U_1 = 1 - e^{-r^2/2}$ 解出：

$$
r = \sqrt{-2\ln U_1}
$$

将 $r$ 与 $\theta = 2\pi U_2$ 还原回直角坐标，即得到两个独立标准正态随机数：

$$
\boxed{
Z_1 = \sqrt{-2\ln U_1}\cos(2\pi U_2), \quad
Z_2 = \sqrt{-2\ln U_1}\sin(2\pi U_2)
}
$$

**注意**：$Z_1, Z_2$ 是正态分布是因为 $(r, \theta)$ 的联合分布与二维正态的极坐标形式完全吻合——这是一个充要关系，而非 $r$ 或 $\cos\theta$ 单独服从正态分布。

#### 2.3.4 最终采样

取 $Z_1$ 并截取绝对值：

$$
r_\text{shot} = \sigma\,|Z_1| = \sigma\left|\sqrt{-2\ln U_1}\cos(2\pi U_2)\right|
$$

此时 $r_\text{shot}$ 服从参数为 $\sigma$ 的半正态分布。

#### 2.3.5 注意：$r = \sqrt{-2\ln U_1}$ 不是半正态分布

此处 $r$ 服从的是**瑞利分布**（Rayleigh distribution），其密度为：

$$
f_\text{Rayleigh}(r) = r\exp\!\left(-\frac{r^2}{2}\right), \quad r \geq 0
$$

与半正态密度 $f(r) \propto \exp(-r^2/2\sigma^2)$ 相比，多了一个因子 $r$，导致其峰值不在 $0$ 而是在 $r = \sigma$。两者**不可混用**。

### 2.4 参数 $\sigma$ 的影响

$\sigma$ 控制子弹的集中程度。设环宽 $w$，第 $k$ 环（$k = 0, 1, \ldots$）的命中概率为：

$$
P(\text{ring}\;k) = F\!\left(\frac{(k+1)w}{\sigma\sqrt{2}}\right) - F\!\left(\frac{kw}{\sigma\sqrt{2}}\right)
$$

其中 $F(x) = \mathrm{erf}(x)$ 为误差函数（半正态分布的 CDF）。

| $\sigma$ | 前 3 环命中概率 | 特点 |
|:---:|:---:|:---|
| 6.0 | ~68% | 高度集中于内圈 |
| 9.0 | ~52% | 平衡分布 |
| 12.0 | ~42% | 较均匀 |

---

## 3 子弹命中判定

### 3.1 设计目标

给定子弹落点 $(r_\text{shot}, \theta_\text{shot})$，判断它命中了哪个单词（若有）。需要解决两个问题：

1. **定位到哪一环**：用径向区间判定
2. **防止稀疏环被过度命中**：用角度阈值过滤

### 3.2 径向区间判定

根据极径确定环级：

$$
\ell_\text{shot} = \mathrm{clamp}\!\left(\left\lfloor \frac{r_\text{shot}}{w} \right\rfloor,\ 0,\ N-1\right)
$$

子弹落入第 $\ell_\text{shot}$ 环，候选单词集合为 $\mathcal{W}_{\ell_\text{shot}}$。

### 3.3 角向最近邻匹配

对每个候选单词 $j \in \mathcal{W}_{\ell_\text{shot}}$（排除已命中单词），计算**圆周角度差**（考虑 $2\pi$ 周期性）：

$$
\Delta\theta_j = \min\!\left(|\theta_j - \theta_\text{shot}|,\ 2\pi - |\theta_j - \theta_\text{shot}|\right)
$$

选取角度差最小的单词：

$$
j^* = \arg\min_{j \in \mathcal{W}_{\ell_\text{shot}}} \Delta\theta_j
$$

### 3.4 角度阈值判定

设最大允许角度差为 $\Delta\theta_\text{max}$：

$$
\text{命中} \iff \Delta\theta_{j^*} \leq \Delta\theta_\text{max}
$$

否则判定为未命中（miss）。

### 3.5 角度阈值的必要性

**问题**：外圈单词稀少（如只有 1–2 个），子弹只要落在该环内就必然命中，导致外圈单词被过度复习。

**解决方案**：引入 $\Delta\theta_\text{max}$，要求子弹必须落在单词的**角度邻域**内。

设第 $\ell$ 环有 $n$ 个单词，相邻单词角间距为 $2\pi/n$。角度阈值 $\Delta\theta_\text{max}$ 实际上限定了子弹的"有效扇形区域"面积，使得**稀疏环中每个单词的实际命中概率**正比于：

$$
P_\text{hit}(\ell) \propto P(\text{ring}\;\ell) \cdot \frac{\Delta\theta_\text{max}}{\pi}
$$

从而避免了稀疏环的过度命中。

| $\Delta\theta_\text{max}$ | 模式 | 适用场景 |
|:---:|:---:|:---|
| 30° | 严格 | 单词密度高，防止误命中 |
| 45° | 平衡 | 通用默认 |
| 60° | 宽松 | 单词数量少 |

---

## 附录：完整算法流程

```
输入：words（含 mastery）, N, w, σ, numBullets, Δθ_max

─── 阶段 1：单词坐标分配 ───────────────────────────────────────
for each word:
    ℓ = clamp(⌊m · N⌋, 0, N-1)
    将 word 加入 rings[ℓ]

for each ring ℓ:
    按 mastery 升序排列
    for i, word in enumerate(rings[ℓ]):
        θᵢ = (i / n) · 2π
        r  = (ℓ + 0.5) · w
        word.pos = (r·cos θᵢ, r·sin θᵢ)

─── 阶段 2：子弹采样 ────────────────────────────────────────────
for _ in range(numBullets):
    u₁, u₂ ~ Uniform(0, 1)
    Z  = √(-2 ln u₁) · cos(2π u₂)    # Box-Muller
    r_shot = σ · |Z|                   # 半正态极径
    θ_shot ~ Uniform(0, 2π)            # 均匀极角
    记录 (r_shot, θ_shot)

─── 阶段 3：命中判定 ────────────────────────────────────────────
for each bullet (r_shot, θ_shot):
    ℓ_shot = clamp(⌊r_shot / w⌋, 0, N-1)
    candidates = rings[ℓ_shot] \ already_hit
    if candidates is empty: continue
    j* = argmin_j Δθ(j, shot)
    if Δθ(j*, shot) ≤ Δθ_max:
        hit(j*)

输出：hitWords, missCount
```

---

## 符号表

| 符号 | 含义 | 默认值 |
|:---:|:---|:---:|
| $m$ | 单词熟练度 | $\in [0,1]$ |
| $N$ | 总环数 | 10 |
| $w$ | 环宽 | 3.0 |
| $\ell$ | 环级 | — |
| $\sigma$ | 半正态分布参数 | 9.0 |
| $\Delta\theta_\text{max}$ | 最大角度差阈值 | 45° |
| $n$ | 环内单词数 | — |
