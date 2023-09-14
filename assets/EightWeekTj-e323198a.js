import{A as o,M as c,O as n,J as e,ai as t,u as s}from"./index-c4572e8b.js";import{c as r,d as u,a as g}from"./el-main-b88ed798.js";/* empty css               */const h=`<h2><a href="https://vjudge.net/problem/CodeForces-124A">A - The number of positions</a></h2>
<h4>思路</h4>
<p>​	给定一个长度为n的队，求站他前面的人不少于a人，站他后面的人不超过b人的情况有多少种。根据a，b设定值不同，能站在的最前面的位置和后面位置数量确定，求出两种位置可能性数量较小的就是答案。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">int main() {
	fastread();
	int n, a, b;
	cin &gt;&gt; n &gt;&gt; a &gt;&gt; b;
	cout &lt;&lt; min(b + 1, n - a) &lt;&lt; &quot;\\n&quot;;
	return 0;
}
</code></pre>
<h2><a href="https://vjudge.net/problem/CodeForces-1521A">B - Nastia and Nearly Good Numbers</a></h2>
<h4>思路</h4>
<p>​	让我们构造一个三元组，满足题干中的条件。我们可以写出三元组的其中两个一个为a是接近好的数，另一个数是ab是好的数，我们只需要构造另一个接近好的数，并且三个数中两个数相加等于第三个数，我们可以发现，a+a<em>b=a</em>(b+1)我们发现右边的数字在不等于1的情况下必然不可能被b整除且必然可以被a整除，那么我们只需要判断b是否为1，不为一则直接输出。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">int main() {
	fastread();
	int t;
	cin &gt;&gt; t;
	while (t--) {
		ll a, b;
		cin &gt;&gt; a &gt;&gt; b;
		if (b != 1) {
			cout &lt;&lt; &quot;YES\\n&quot; &lt;&lt; a &lt;&lt; &quot; &quot; &lt;&lt; a * b &lt;&lt; &quot; &quot; &lt;&lt; (b + 1) * a &lt;&lt; &quot;\\n&quot;;
		}
		else {
			cout &lt;&lt; &quot;NO\\n&quot;;
		}
	}
	return 0;
}
</code></pre>
<h2><a href="https://vjudge.net/problem/CodeForces-1353C">C - Board Moves</a></h2>
<h4>思路</h4>
<pre><code>给定一个二维数字的边长大小。我们多花几个图可以发现，因为给定的边长均为奇数，必然会存在一个最中间的位置，最中间的数字距离所有数字的距离均为理论最小值。所以我们只需要将外围的每圈数字按照距离一次一次加上就能得出答案。
</code></pre>
<h4>代码实现</h4>
<pre><code class="language-c++">int main() {
	fastread();
	int t;
	cin &gt;&gt; t;
	while (t--) {
		ll n;
		cin &gt;&gt; n;
		ll ans = 0;
		for (ll i = 1; i &lt;= n/2; i++) {
			ans += i * 8 * i;
		}
		cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
	}
	return 0;
}
</code></pre>
<h2><a href="https://vjudge.net/problem/CodeForces-1476A">D - K-divisible Sum</a></h2>
<h4>思路</h4>
<p>​	给定两个数字，一个n一个k，要求我们构造出一个长度为n的数列，使得数列总和可以被k整除，要求我们输出可能存在的数列中的最大的数字。我们只需要让n的总和大小是k的倍数然后用n除就可以。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">int main() {
    fastread();
    ll t;
    cin&gt;&gt;t;
    while(t--){
        ll n,k;
        cin&gt;&gt;n&gt;&gt;k;
        k=ceil(n*1.0/k)*k;
        cout&lt;&lt;(ll)ceil(k*1.0/n)&lt;&lt;&quot;\\n&quot;;
    }
    return 0;
}
</code></pre>
<h2><a href="https://vjudge.net/problem/CodeForces-1857D">E - Strong Vertices</a></h2>
<h4>思路</h4>
<p>​	对于题目中给出的au−av≥bu−bv，我们只需要把他变化一下，就可以发现只是在比较两组序列中各个位置的差值大小，在各个差值中必然存在一个最大值，差值为最大值的数字必然是其余所有点的指向点。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">ll o[200010];
int main() {
    fastread();
    ll t;
    cin&gt;&gt;t;
    while(t--){
        int n;
        cin&gt;&gt;n;
        for(int i=1;i&lt;=n;i++)cin&gt;&gt;o[i];
        ll k;
        ll maxx=-MAXN;
        for(int i=1;i&lt;=n;i++){
            cin&gt;&gt;k;
            o[i]-=k;
            maxx=max(o[i],maxx);
        }
        ll cnt=0;
        for(int i=1;i&lt;=n;i++){
            if(o[i]==maxx)cnt++;
        }
        cout&lt;&lt;cnt&lt;&lt;&quot;\\n&quot;;
        for(int i=1;i&lt;=n;i++){
            if(o[i]==maxx)cout&lt;&lt;i&lt;&lt;&quot; &quot;;
        }
        cout&lt;&lt;&quot;\\n&quot;;
    }
    return 0;
}
</code></pre>
<h2><a href="https://vjudge.net/problem/CodeForces-1851D">F - Prefix Permutation Sums</a></h2>
<h4>思路</h4>
<p>​	给定一组前缀和序列，问你在该前缀和序列中是否允许由多一个前缀和数字的序列组成不重的原序列。我们可以将前缀和逆向运算求出每个值为多少，然后记录数据访问，然后我们只需要遍历1-n的所有数字，没访问过的数字求出一个总和，求出过的数字访问减除一次以便后续可能会使用到。如果只有一个数字没有访问过就输出YES如果超过两个访问不到就输出NO，如果访问的cnt为2次则判断求出的总和是否被访问过，如果被访问过则代表可以分解输出YES，否则输出NO</p>
<h4>代码实现</h4>
<pre><code class="language-c++">#include &lt;iostream&gt;
#include &lt;algorithm&gt;
#include &lt;queue&gt;
#include &lt;cmath&gt;
#include &lt;deque&gt;
#include &lt;stack&gt;
#include &lt;cstring&gt;
#include &lt;map&gt;
#define ll long long
#define MAXN 0x7fffffff
using namespace std;
void fastread() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
}
ll o[200010];
int main() {
    fastread();
    ll t;
    cin&gt;&gt;t;
    while(t--){
        ll n;
        cin&gt;&gt;n;
        o[0]=0;
        map&lt;ll,ll&gt;p;
        for(int i=1;i&lt;n;i++){
            cin&gt;&gt;o[i];
            p[o[i]-o[i-1]]++;
        }
        ll cnt=0;
        ll sum=0;
        for(int i=1;i&lt;=n;i++){
            if(p[i]==0){
                cnt++;
                sum+=i;
            }else{
                p[i]--;
            }
        }
        if(cnt==1){
            cout&lt;&lt;&quot;YES\\n&quot;;
        }else if(cnt&gt;2){
            cout&lt;&lt;&quot;NO\\n&quot;;
        }
    }
    return 0;
}
</code></pre>
<h2><a href="https://vjudge.net/problem/CodeForces-1844C">G - Particles</a></h2>
<h4>思路</h4>
<p>​	给定你一组数字序列，给你一种操作。我们可以发现，能合在一起的位置只有奇数位的和偶数位的，然后负值对于结果只有坏影响，所以我们只需要对于整组序列在求值的时候求出一个最大值，并且将非负数的位置全部加到对应的ans里面，三者取最大值。注意奇数偶数位的ans可能为0我们需要判断一下，如果为0赋值为最小值。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">ll o[NN];
int main() {
	fastread();
	int t;
	cin &gt;&gt; t;
	while (t--) {
		ll n;
		cin &gt;&gt; n;
		for (int i = 1; i &lt;= n; i++)cin &gt;&gt; o[i];
		ll ans1 = 0;
		ll ans2 = 0;
		ll ans = -MAXN;
		for (int i = 1; i &lt;= n; i++) {
			ans = max(ans, o[i]);
			if (o[i] &lt; 0)continue;
			if (i % 2 == 0) {
				ans2 += o[i];
			}
			else {
				ans1 += o[i];
			}
		}
		cout &lt;&lt; max(ans, max((ans1 == 0) ? -MAXN : ans1, (ans2 == 0) ? -MAXN : ans2)) &lt;&lt; &quot;\\n&quot;;
	}
	return 0;
}
</code></pre>
`;const d=t("div",{class:"glass"},[t("h2",null,"作者碎碎念"),t("h4",null,"本周题目难度适中，数学题比较多")],-1),p=["innerHTML"],k={__name:"EightWeekTj",setup(f){return(m,_)=>{const l=u,i=g,a=r;return o(),c(a,null,{default:n(()=>[e(l,{width:"200px"},{default:n(()=>[d]),_:1}),e(i,null,{default:n(()=>[t("div",{innerHTML:s(h),class:"a"},null,8,p)]),_:1})]),_:1})}}};export{k as default};
