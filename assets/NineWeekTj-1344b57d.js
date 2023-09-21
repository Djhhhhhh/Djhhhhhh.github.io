import{A as a,M as c,O as t,J as l,ai as n,u as s}from"./index-a5b235af.js";import{c as r,d as p,a as u}from"./el-main-029f4d07.js";/* empty css               */const g=`<h2><a href="https://vjudge.net/problem/CodeForces-1844B">A - Permutations &amp; Primes</a></h2>
<h4>思路</h4>
<p>​	我们找到一个排列，使排列的MEX是质数的数对的数目最多。我们先列出质数中的前几个数字：2，3，5，7。我们根据观察可以发现如果我们想要在一组序列中的MEX为质数的数量最多，如果我们序列中存在质数为5的MEX序列，那么必然会缺少许多组质数为3或2的MEX序列组。所以我们在一开始只需要将3与2分别放在数列的头和尾，在数列的最中间放1，其余位置数字随意，即可得到最大组数的排列。</p>
<h4>代码实现</h4>
<pre><code class="language-c++"> ll t;
    cin&gt;&gt;t;
    while(t--){
        ll n;
        cin&gt;&gt;n;
        ll cnt=3;
        if(n==1){
            cout&lt;&lt;&quot;1\\n&quot;;
            continue;
        }else if(n==2){
            cout&lt;&lt;&quot;2 1\\n&quot;;
            continue;
        }
        for(int i=1;i&lt;=n;i++){
            if(i==1){
                cout&lt;&lt;&quot;2 &quot;;
            }else if(i==ceil(n/2.0)){
                cout&lt;&lt;&quot;1 &quot;;
            }else if(i==n){
                cout&lt;&lt;&quot;3 &quot;;
            }else{
                cout&lt;&lt;++cnt&lt;&lt;&quot; &quot;;
            }
        }
        cout&lt;&lt;&quot;\\n&quot;;
    }
    return 0;
</code></pre>
<h2><a href="https://vjudge.net/problem/CodeForces-1844B">B - Hamon Odyssey</a></h2>
<h4>思路</h4>
<p>​	首先让我们来总结一下&amp;的性质，对于一组序列来说，&amp;会使整组序列呈现不增的状态，则我们要找到价值最小，组数划分最多的方法，即在序列中寻找有多少组可以组成0序列。当整组不能为0的时候，将一组所有数据全部&amp;的值必然是最小的。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">ll o[210000];
int main() {
	fastread();
	ll t;
	cin &gt;&gt; t;
	while (t--) {
		ll n; cin &gt;&gt; n;
		for (int i = 1; i &lt;= n; i++)cin &gt;&gt; o[i];
		ll cnt = 0;
		ll now = o[1];
		for (int i = 1; i &lt;= n; i++) {
			now &amp;= o[i];
			if (now == 0) {
				cnt++;
				now = o[i + 1];
			}
		}
		cout &lt;&lt; max(cnt, (ll)1) &lt;&lt; &quot;\\n&quot;;
	}
	return 0;
}
</code></pre>
<h2><a href="https://vjudge.net/problem/CodeForces-1842B">C - Tenzing and Books</a></h2>
<h4>思路</h4>
<p>​	这道题让我们先总结一下 | 的性质，| 操作对于一组序列来说，会让整组序列逐渐呈现不降的的状态。我们为了从三组数种凑出目标数据，我们只需要将所有组数的数字与目标数字进行 | 操作，如果进行该操作后数字没有改变，则证明该数字一定不会对最后的答案进行负作用，让该数字 | 上ans，如果进行所有操作之后ans的值与目标数值相同则证明一定可以凑出。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">ll o1[110000];
ll o2[110000];
ll o3[110000];
int main() {
	fastread();
	ll t;
	cin &gt;&gt; t;
	while (t--) {
		ll n, m;
		cin &gt;&gt; n &gt;&gt; m;
		ll ans = 0;
		for (int i = 1; i &lt;= n; i++) {
			cin &gt;&gt; o1[i];
		}
		for (int i = 1; i &lt;= n; i++) {
			cin &gt;&gt; o2[i];
		}
		for (int i = 1; i &lt;= n; i++) {
			cin &gt;&gt; o3[i];

		}
		for (int i = 1; i &lt;= n; i++) {
			if ((o1[i] | m) == m) {
				ans |= o1[i];
			}
			else break;
		}
		for (int i = 1; i &lt;= n; i++) {
			if ((o3[i] | m) == m) {
				ans |= o3[i];
			}
			else break;
		}
		for (int i = 1; i &lt;= n; i++) {
			if ((o2[i] | m) == m) {
				ans |= o2[i];
			}
			else break;
		}
		if (ans == m)cout &lt;&lt; &quot;YES\\n&quot;;
		else cout &lt;&lt; &quot;NO\\n&quot;;
	}
	return 0;
}
</code></pre>
<h2><a href="https://vjudge.net/problem/CodeForces-1839B">D - Lamps</a></h2>
<h4>思路</h4>
<p>​	给定你灯的寿命和他所应有的价值，我们只需要对他们的寿命进行从到大小排序，然后对于寿命相同的对他们的价值从大到小排序。我们在循环灯泡的操作中，我们只取对应每种寿命的前该寿命个灯，即可得出答案。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">struct k {
	ll val;
	ll id;
}o[210000];
bool cmp(k a, k b) {
	if (a.id != b.id)return a.id &lt; b.id;
	return a.val &gt; b.val;
}
int main() {
	fastread();
	ll t;
	cin &gt;&gt; t;
	while (t--) {
		ll n;
		cin &gt;&gt; n;
		map&lt;ll, ll&gt;p;
		for (int i = 1; i &lt;= n; i++) {
			cin &gt;&gt; o[i].id &gt;&gt; o[i].val;
		}
		o[n + 1].val = 0;
		sort(o + 1, o + 1 + n,cmp);
		ll cnt = 0;
		ll ans = 0;
		ll last = o[1].id;
		for (int i = 1; i &lt;= n; i++) {
			if (o[i].id == last &amp;&amp; cnt &lt; last) {
				cnt++;
				ans += o[i].val;
			}
			else {
				while (o[i].id == last &amp;&amp; i &lt;= n)i++;
				cnt = 0;
				last = o[i].id;
				i--;
			}
		}
		cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
	}
	return 0;
}
</code></pre>
<h2><a href="https://vjudge.net/problem/CodeForces-1850F">E - We Were Both Children</a></h2>
<h4>思路</h4>
<p>​	很简单的DP题目，对于人来说，他所能放置的陷阱必然在前n个内，n的最大值为2*1e5个位置。对于每个青蛙来说，如果在初始跳的位置在n的范围之内，则他有可能被陷阱抓到至少1次，其余位置则是青蛙能跳的倍数，则对于青蛙来说，陷阱可以放置的位置为倍增的，所以我们只需要枚举每个位置上是否存在青蛙，并且他所能跳的所有位置上的陷阱数目加上他这个位置上的青蛙个数。</p>
<p>​	注意：这道题目中用vector的原因在于dp需要每次进行清空操作，用memset操作初始化数组时间复杂度过高容易暴毙。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">vector&lt;ll&gt;dp;
vector&lt;ll&gt;num;
int main() {
	fastread();
	ll t;
	cin &gt;&gt; t;
	while (t--) {
		dp.clear();
		num.clear();
		ll n;
		cin &gt;&gt; n;
		dp.assign(n + 1, 0);
		num.assign(n + 1, 0);
		ll maxx = 0;
		ll o;
		for (int i = 1; i &lt;= n; i++) {
			cin &gt;&gt; o;
			if (o &gt; n)continue;
			num[o]++;
		}
		for (int i = 1; i &lt;= n; i++) {
			for (int j = i; j &lt;= n; j += i) {
				dp[j] += num[i];
			}
			maxx = max(dp[i], maxx);
		}
		cout &lt;&lt; maxx &lt;&lt; &quot;\\n&quot;;
	}
	return 0;
}
</code></pre>
<h2><a href="https://vjudge.net/problem/CodeForces-1837C">F - Best Binary String</a></h2>
<h4>思路</h4>
<p>​	是一道字符串构造题目，对于每个问好位置，我们只需要判断与他最近的那个数字是什么，让他与最近的一个数字相同组成一组即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">int main() {
	fastread();
	ll t;
	cin &gt;&gt; t;
	while (t--) {
		string k; cin &gt;&gt; k;
		k = &quot;0&quot; + k;
		for (int i = 1; i &lt; k.size(); i++) {
			if (k[i] == '?') {
				cout &lt;&lt; k[i - 1];
				k[i] = k[i - 1];
			}
			else cout &lt;&lt; k[i];
		}
		cout &lt;&lt; &quot;\\n&quot;;
	}
	return 0;
}
</code></pre>
<h2><a href="https://vjudge.net/problem/CodeForces-1843D">G - Apple Tree</a></h2>
<h4>思路</h4>
<p>​	该题目是一道简单图论题，题目思路比较好像，只需要记录每个节点可以到最终下落的位置个数即可，对于查询只需要将节点的数据相乘即可。建图比较费劲，本人也不大会所以该代码借鉴于网络并加以修改。本人借此学习到了一种较好的存储方式，利用vector和其中的assign函数来扩展。对于代码自己写了注释以便后续理解。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">vector&lt;vector&lt;ll&gt;&gt;p;
vector&lt;ll&gt;pp;
void dfs(ll a, ll b) {  //a为搜到了哪个点  b为a的父节点
	if (p[a].size() == 1 &amp;&amp; p[a][0] == b) {  //满足该条件则属于末尾点 数字值为1
		pp[a] = 1;
	}
	else {
		for (int i = 0; i &lt; p[a].size();i++) {  //遍历数组中的点
			if (p[a][i] != b) {  //若该点的父节点不是上个点的父节点
				dfs(p[a][i], a); //则搜索改点位置
				pp[a] += pp[p[a][i]];  //并且将该店的数值加上去
			}
		}
	}
}
int main() {
	fastread();
	ll t;
	cin &gt;&gt; t;
	while (t--) {
		ll n;
		cin &gt;&gt; n;
		p.assign(n, vector&lt;ll&gt;());  //扩展数组空间
		for (int i = 1; i &lt; n; i++) { //建树操作
			ll x, y;
			cin &gt;&gt; x &gt;&gt; y;  
			x--; y--;  //将给定的坐标减一以此来对应数组下标
			p[x].push_back(y);  //邻接表存储
			p[y].push_back(x);
		}
		pp.assign(n, 0);  //扩展用于存储数字数组
		dfs(0, -1);  //以从1 也就是对应下标为0的位置搜索
		ll q;
		cin &gt;&gt; q;
		while (q--) {
			ll x, y;
			cin &gt;&gt; x &gt;&gt; y;
			cout &lt;&lt; pp[--x] * pp[--y] &lt;&lt; &quot;\\n&quot;; //ans为两点的lcm
		}
	}
	return 0;
}
</code></pre>
`;const h=n("div",{class:"glass"},[n("h2",null,"作者碎碎念")],-1),d=["innerHTML"],x={__name:"NineWeekTj",setup(m){return(f,q)=>{const i=p,e=u,o=r;return a(),c(o,null,{default:t(()=>[l(i,{width:"200px"},{default:t(()=>[h]),_:1}),l(e,null,{default:t(()=>[n("div",{innerHTML:s(g),class:"a"},null,8,d)]),_:1})]),_:1})}}};export{x as default};
