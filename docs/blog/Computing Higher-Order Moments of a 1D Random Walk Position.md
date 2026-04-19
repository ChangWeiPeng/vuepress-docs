---
title: Computing Higher-Order Moments of a 1D Random Walk Position
permalink: /blog/2026/04/18/Computing_Higher-Order_Moments_of_a_1D_Random_Walk_Position/
createTime: 2026/04/18 23:41:51
---

在一条直线上，一个人从原点出发,每一次可以往左或者往右走一步.每次往左走的概率为p,往右走的概率为q.设他一共走了总步数N, 设最终所处的位置为m,设p=q,求$\overline m$,$\overline {m^2}$,$\overline {m^3}$,$\overline {m^4}$.

任何物理量的平均值都是这样算的：$\overline X=\sum_i P(X=x_i)x_i$.在行走问题里概率该怎么算？分步乘法、排列组合。如果往左走了$n_1$步，往右走了$n_2$步，那么平均值就是$\overline m=\sum (n_1-n_2) \cdot C_N^{n_1}p^{n_1}q^{n_2}$.因为$m$和$n_1$或$n_2$的取值是一一对应的,所以原则上我们已经"做完"了。但是，这不是一个很informative的形式.我们是否能化简？

往左走和往右走是对称的。相应的我们可以这样算：$\overline m=\overline {n_1}-\overline {n_2}$.考虑其中一个，$\overline {n_1}=\sum_{n_1=0}^N n_1 \cdot C_N^{n_1}p^{n_1}q^{N-n_1}$.你可能会注意到，$p=q=\cfrac 1 2$，带入得到

$$
\overline {n_1}=\sum_{n_1=0}^N n_1 \cdot C_N^{n_1}(\cfrac 1 2)^N
$$

我们卡在了这里。而且，这个结果并没有比上面的那条更informative.

>[!note] "量纲"修改
>常数能进行加减乘除等初等运算。但是，函数还可以求导、积分。只要自变量取特定值，函数值就是一个普通的常数。所以，我们可以先把情形推广，用函数来运算，然后取特定自变量值得到常数下的结果。

我们把$p$看成自变量。如果你足够幸运，就可以联想到:$\sum_{n_1=0}^{N}C_N^{n_1}p^{n_1}q^{N-n_1}=(p+q)^N$.
对比$f(p)=\sum_{n_1=0}^N n_1 \cdot C_N^{n_1}p^{n_1}q^{N-n_1}$只需要改成

$$
\begin{align}
f(p)&=\sum_{n_1=0}^N n_1 \cdot C_N^{n_1}p^{n_1}q^{N-n_1}\\
&=\sum_{n_1=0}^NC_N^{n_1}(\cfrac {\partial}{\partial p}p^{n_1})\cdot p\
\cdot q^{N-n_1}\\
&=p\cfrac {\partial}{\partial p}\sum_{n_1=0}^NC_N^{n_1}p^n_1q^{N-n_1}\\
&=p\cfrac {\partial}{\partial p}(p+q)^N\\
&=Npq(p+q)^{N-1}
\end{align}
$$

所以当$p+q=1$,

$$
f(p)=Npq
$$

特别的，对于$p=q$,$\overline {n_1}=\cfrac 1 4 N$,进而$\overline m=0$.

我们如法炮制求解$\overline {m^2}$:$f(p)=\sum_{n_1=0}^N n_1^2 \cdot C_N^{n_1}p^{n_1}q^{N-n_1}$.如何消去$n_1$的平方项呢？

注意到二次求导$(\cfrac {\partial}{\partial p})^2p^{n_1}=n_1^2p^{n_1-2}-n_1p_1^{n_1-2}$,我们可以改写$f(p)$为

$$
\begin{align}
f(p)&=\sum_{n_1=0}^N n_1^2 \cdot C_N^{n_1}p^{n_1}q^{N-n_1}\\
&=\sum_{n_1=0}^N C_N^{n_1}\big (n_1p^{n_1}+p^2(\cfrac {\partial}{\partial p})^2p^{n_1}\big )q^{N-n_1}\\
&=\overline {n_1}+p^2(\cfrac {\partial}{\partial p})^2(p+q)^N\\
&=\overline {n_1}+p^2N(N-1)(p+q)^{N-2}
\end{align}
$$

带入走路问题

$$
\overline {n_1^2}=\cfrac 1 4 N^2+\cfrac 1 4 N
$$

换一种思路，我们把求导看成算符。算符可以移动位置,于是

$$
\begin{align}
f(p)&=\sum_{n_1=0}^N n_1^2 \cdot C_N^{n_1}p^{n_1}q^{N-n_1}\\
&=(p\cfrac {\partial}{\partial p})\sum_{n_1=0}^NC_N^{n_1}n_1p^{n_1}q^{N-n_1}\\
&=(p\cfrac {\partial}{\partial p})^2\sum_{n_1=0}^NC_N^{n_1}p^{n_1}q^{N-n_1}\\
&=(p\cfrac {\partial}{\partial p})^2(p+q)^{N}
\end{align}
$$

容易验证，最后可以得到$\overline {n_1^2}$的相同结果.

上面的计算中，我们是这样打括号的：$(p\cfrac {\partial}{\partial p})$,而不是这样：$p(\cfrac {\partial}{\partial p})$.你可能回想，这有什么区别吗？
在我们的推导中，$p\cfrac {\partial}{\partial p}$的意思是"对$p^{n_1}$求导，然后乘上$p$"。我们把这个整体的操作移到了求和号外面。显然，这里求导和乘法的顺序是不能交换的。如果我们多次执行"求导，然后乘上$p$"，就应该写成

$$
(p\cfrac {\partial}{\partial p})(p\cfrac {\partial}{\partial p})(p\cfrac {\partial}{\partial p})\cdots
$$

很显然，$p(\cfrac {\partial}{\partial p})$很容易诱导我们写出错误的表达式：

$$
p\cdot p\cdot p\cdots(\cfrac {\partial}{\partial p})\cdot(\cfrac {\partial}{\partial p})\cdot(\cfrac {\partial}{\partial p})\cdots
$$

对于三次方和四次方，做法是类似的。

在求解位置均值时我们使用了"量纲"修改的技巧

$$
\text{常数}\to\text{自变量}\to\text{常数}
$$

这种变换思想应用广泛。在热统中，我们把离散量看成是连续的，进而可以使用求导运算，其合法性由热力学极限保证[这里是例子]；在电动力学中，我们把向量改写成指标，进而可以使用指标运算规则同时操作多个分量[这里是例子]。
进一步推广，我们可以把直角坐标改写成球坐标来适配球形边界，可以把矩阵看成张量进行运算...每当卡壳，"量纲修改"给我们提供了一种不断变通、寻找出路方向。

在求解高次均值时我们写出了

$$
(\cfrac {\partial}{\partial p})^2p^{n_1}=n_1^2p^{n_1-2}-n_1p_1^{n_1-2}
$$

这种环环相扣的计算思路出现在各种高次方求和问题中。例如，求解$\sum_{i=1}^Ni^k$,$k\in Z^+$。对$k=2$,考虑到

$$
(i+1)^3=i^3+3i^2+3i+1
$$

移项求和

$$
(N+1)^3-1=3\sum_{i=1}^Ni^2+3\sum_{i=1}^N i+N
$$

于是可以求$\sum_{i=1}^Ni^2$.
