const n={},t=`<h2>E. Accidental Victory</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/1490">Codeforces Round 702 (Div. 3)</a></p>
<h4>思路</h4>
<p>​	对于每个人的硬币与他的id是绑定的，所以在将数据排序的时候也需要将id进行排序，此处可以用结构体代替。对于每个人的硬币，他可以拿所有比它小的硬币，那么做一个前缀和重复处理即可，二分去查可以拿的最大值，直到两次选取的位置一样停下操作，判断是否为最后一个位置，输出序号即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    vector&lt;ll&gt;o(n);
    for (int i = 0; i &lt; n; i++)cin &gt;&gt; o[i];
    vector&lt;int&gt;id(n);
    iota(id.begin(), id.end(), 0);
    sort(id.begin(), id.end(), [&amp;](ll a, ll b) {
        return o[a] &lt; o[b];
        });
    sort(o.begin(), o.end(), cmps);
    vector&lt;ll&gt;sum(n);
    for (int i = 0; i &lt; n; i++) {
        if (i == 0)sum[i] = o[i];
        else sum[i] = sum[i - 1] + o[i];
    }
    vector&lt;ll&gt;ans;
    for (int i = 0; i &lt; n; i++) {
        ll be = 0;
        ll mid = sum[i];
        while (be != (upper_bound(o.begin(), o.end(), mid) - o.begin()-1)) {
            be = upper_bound(o.begin(), o.end(), mid) - o.begin()-1;
            mid = sum[be];
        }
        if (be + 1 == n)ans.push_back(id[i] + 1);
    }
    sort(ans.begin(), ans.end(), cmps);
    cout &lt;&lt; ans.size() &lt;&lt; &quot;\\n&quot;;
    for (int i = 0; i &lt; ans.size(); i++)cout &lt;&lt; ans[i] &lt;&lt; &quot; &quot;;
    cout &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>A. Learning Languages</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/277">Codeforces Round 170 (Div. 1)</a></p>
<h4>思路</h4>
<p>​	对于两个来说，只要中间存在一条中间人翻译的链接，即使语言差太多也能进行沟通。我们可以把该问题抽象为图，也就是意思在图内任意两点只要存在一条通路即可进行翻译。所以我们只需要判断连通的块数即可，用并查集抽象该问题。对于会语言为0的同学，我们只需要为他创建一个全新的语言块即可，即m+1。对于所有人都不会说话的情况，特判输出人数即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">ll n, m;
ll f[210000];//父节点数组
ll h[210000];//高度节点数组
void Init() { //初始化
	for (int i = 1; i &lt;= 210; i++) {
		f[i] = i;
		h[i] = 0;
	}
}
int Find(int x) {//查询优化  路径压缩
	return f[x] == x ? f[x] : f[x] = Find(f[x]);//使元素直接指向树的根 
}
void merge(int a, int b) {//合并优化 避免退化（按秩合并）
	int fa = Find(a);
	int fb = Find(b);
	if (fa == fb) return;
	if (h[fa] &lt; h[fb]) {  //如果元素 a对应的树的高度比 b小 
		f[fa] = fb;  //使元素 a的根指向元素 b的根 
	}
	else {
		f[fb] = fa;  //否则让元素 b的根指向元素 a的根 
		if (h[fa] == h[fb]) h[fa]++;// 如果两者对应的树的高度相同，则使新生成的树高度 +1 
	}
}
void solve() {
    cin &gt;&gt; n &gt;&gt; m;
	Init();
	map&lt;ll, ll&gt;p;
	bool u = 1;
	for (int i = 1; i &lt;= n; i++) {
		ll x; cin &gt;&gt; x;
		if (x == 0) {
			m++;
			p[m]++;
		}
		else {
			u = 0;
			vector&lt;ll&gt;o(x);
			for (int i = 0; i &lt; x; i++) {
				cin &gt;&gt; o[i];
				p[o[i]]++;
				if (i != 0) {
					merge(o[i - 1], o[i]);
				}
			}
		}
	}
	ll ans = 0;
	if (u) {
		cout &lt;&lt; n &lt;&lt; &quot;\\n&quot;;
		return;
	}
	for (int i = 1; i &lt;= m; i++) {
		if (i == Find(i)&amp;&amp;p[i]!=0) {
			ans++;
		}
	}
	cout &lt;&lt; ans-1 &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>B. Quasi Binary</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/538">Codeforces Round 300</a></p>
<h4>思路</h4>
<p>​	按数字拆就完事了，最多就9*10^6^ 次。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    vector&lt;ll&gt;ans;
    while (n) {
        ll x = n;
        ll cnt = 1;
        ll sum = 0;
        while (x) {
            if((x % (ll)pow(10, cnt))!=0) sum += pow(10, cnt - 1);
            x -= (x % (ll)pow(10, cnt));
            cnt++;
        }
        n -= sum;
        ans.push_back(sum);
    }
    cout &lt;&lt; ans.size() &lt;&lt; &quot;\\n&quot;;
    for (int i = 0; i &lt; ans.size(); i++)cout &lt;&lt; ans[i] &lt;&lt; &quot; &quot;;
}
</code></pre>
<h2>D. Game With Array</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/1355">Codeforces Round 643 (Div. 2)</a></p>
<h4>思路</h4>
<p>​	贪心，我们将数组中元素中的种类尽可能减小，也就是除了最后一个以外均为1。然后对于剩下那个数字的数值我们确定，我们就可以得到一个可以组成的区间值。然后判断是否大于n即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n, m; cin &gt;&gt; n &gt;&gt; m;
    if (m - (n - 1) &gt; n) {
        cout &lt;&lt; &quot;YES\\n&quot;;
        for (int i = 0; i &lt; n - 1; i++) {
            cout &lt;&lt; &quot;1 &quot;;
        }
        cout &lt;&lt; m - (n - 1) &lt;&lt; &quot;\\n&quot; &lt;&lt; n &lt;&lt; &quot;\\n&quot;;
    }
    else {
        cout &lt;&lt; &quot;NO\\n&quot;;
    }
}
</code></pre>
<h2>A. k-th divisor</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/762">Educational Codeforces Round 17</a></p>
<h4>思路</h4>
<p>​	用类似于质数筛的试除法，我们只需要找出1至sqrt(n)的因数即可，剩下的所有因数可以由已有的因数得到。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n, k; cin &gt;&gt; n &gt;&gt; k;
    vector&lt;ll&gt;ans;
    for (ll i = 1; i * i &lt;= n; i++) {
        if (n % i)continue;
        ans.push_back(i);
        if (i * i != n)ans.push_back(n / i);
    }
    sort(ans.begin(),ans.end(), cmps);
    if (k &gt; ans.size()) {
        cout &lt;&lt; &quot;-1\\n&quot;;
        return;
    }
    cout &lt;&lt; ans[k - 1] &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>D. Divide by three, multiply by two</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/977">Codeforces Round 479 (Div. 3)</a></p>
<h4>思路</h4>
<p>​	100个数字，爆搜。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">ll n;
ll o[2100];
ll ans[2100];
ll v[210000];
bool u = 0;
void dfs(ll x, ll id) {
    if (u)return;
    if (id == n-1 ) {
        u = 1;
        for (int i = 0; i &lt; n; i++)cout &lt;&lt; ans[i] &lt;&lt; &quot; &quot;;
        cout &lt;&lt; &quot;\\n&quot;;
        return;
    }
    v[x] = 1;
    for (int i = 0; i &lt; n; i++) {
        if (v[i] != 1 &amp;&amp; (o[i] == ans[id] * 2 || o[i] * 3 == ans[id])) {
            ans[id + 1] = o[i];
            dfs(i, id + 1);
        }
    }
    v[x] = 0;
}
void solve() {
    u = 0;
    cin &gt;&gt; n;
    for (int i = 0; i &lt; n; i++)cin &gt;&gt; o[i];
    for (int i = 0; i &lt; n; i++) {
        ans[0] = o[i];
        memset(v, 0, sizeof(v));
        dfs(i, 0);
    }
}
</code></pre>
<h2>B. Composite Coloring</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/1332">Codeforces Round 630 (Div. 2)</a></p>
<h4>思路</h4>
<p>​	对于每个数字，它可以看他可以最小被多少的数字给分解，然后按照最小因子来规划他的颜色。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    vector&lt;ll&gt;o(n);
    set&lt;ll&gt;u;
    for (int i = 0; i &lt; n; i++) {
        ll x = 2;
        cin &gt;&gt; o[i];
        while (o[i] % x != 0)x++;
        o[i] = x;
        u.insert(x);
    }
    vector&lt;ll&gt;ans(u.begin(), u.end());
    cout &lt;&lt; ans.size() &lt;&lt; &quot;\\n&quot;;
    for (int i = 0; i &lt; n; i++) {
        cout &lt;&lt; lower_bound(ans.begin(), ans.end(), o[i]) - ans.begin() + 1 &lt;&lt; &quot; &quot;;
    }
    cout &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
`;export{n as attributes,t as html};
