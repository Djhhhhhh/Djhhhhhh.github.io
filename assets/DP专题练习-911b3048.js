const n={},t=`<h2>A. Cut Ribbon</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/189">Codeforces Round 119 (Div. 2)</a></p>
<h4>思路</h4>
<p>​	可以转变为多重背包问题。丝带长度为背包容量，三种线段为物品且数量无限。在初始化的时候，将背包各个状态下的最大容量设置为-1，然后我们按照背包来写即可。且注意，对于一个长度为0的丝带，我们不管怎样，切的都是0段，所以初始化背包容量为0的时候为0。</p>
<h4>状态方程</h4>
<p>$$
dp[j]=max(dp[j-val[i]]+1,dp[j])
$$</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    vector&lt;ll&gt;line(3);
    cin &gt;&gt; line[0] &gt;&gt; line[1] &gt;&gt; line[2];
    vector&lt;ll&gt;dp(n+2, -1);
    dp[0] = 0;
    for (int i = 0; i &lt; 3; i++) {
        for (int j = line[i]; j &lt;= n; j++) {
            if (dp[j - line[i]] != -1) {
                dp[j] = max(dp[j - line[i]] + 1, dp[j]);
            }
        }
    }
    cout &lt;&lt; dp[n] &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>C. Mortal Kombat Tower</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/1418">Educational Codeforces Round 95 (Rated for Div. 2)</a></p>
<h4>思路</h4>
<p>​	两个人轮流取数，要求让先手取得的1尽量小。</p>
<h4>状态方程</h4>
<p>$$
dp[i][1]=min(dp[i-1][0]+val[i],dp[i-2][0]+val[i-1]+val[i])
$$</p>
<p>$$
dp[i][0]=min(dp[i-1][1],dp[i-2][1])
$$</p>
<p>第一个方程表示：取完i个数之后，且最后一次为先手时，先手能取得最少1的数量。</p>
<p>第二个方程表示：取完i个数之后，且最后一次为后手时，先手能取得最少1的数量。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">ll dp[210000][2];
void solve() {
    ll n; cin &gt;&gt; n;
    vector&lt;ll&gt;val(n+2);
    dp[0][0] = dp[0][1] = 0x3f;
    for (int i = 1; i &lt;= n; i++) {
        cin &gt;&gt; val[i];
        dp[i][0] =dp[i][1] = 0x3f;
    }
    dp[1][1] = val[1];
    dp[0][0] = 0;
    for (int i = 2; i &lt;= n; i++) {
        dp[i][1] = min(dp[i - 1][0] + val[i], dp[i - 2][0] + val[i - 1] + val[i]);
        dp[i][0] = min(dp[i - 1][1], dp[i - 2][1]);
    }
    cout &lt;&lt; min(dp[n][1], dp[n][0]) &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>C. Journey</h2>
<h4>题目来源</h4>
<p><a href="https://codeforces.com/contest/839">	Codeforces Round 428 (Div. 2)</a></p>
<h4>思路</h4>
<p>​	注意，n个结点，n-1条边，那么该图为一颗树。</p>
<p>​	对于我么在第一个城市上了之后，可能会去到与第一个城市连接的任何一个城市，此时我们考虑树上dp与概率dp。</p>
<p>​	我们在树上深搜，从最后结点往上找就行，并计算结点期望值。</p>
<h4>状态方程</h4>
<p>$$
dp[x]=dp[y]+1.0(每次加1.0是作为求期望的权值)
$$</p>
<p>​	(期望:dp[x]/=cnt(从根到现在的节点数))</p>
<p>​	期望=概率*权值</p>
<p>​	每一个点的期望长度就是到根节点的概率和权值,相乘相加</p>
<p>​	概率=1.0/该点的子节点个数</p>
<h4>代码实现</h4>
<pre><code class="language-c++">vector&lt;ll&gt;tree[210000];
double dp[210000];
void dfs(ll x, ll fa) {
    ll cnt = 0;
    for (auto y : tree[x]) {
        if (y == fa)continue;
        dfs(y, x);
        dp[x] += dp[y] + 1.0;
        cnt++;
    }
    if (cnt)dp[x] /= cnt;
}
void solve() {
    ll n; cin &gt;&gt; n;
    for (int i = 1; i &lt; n; i++) {
        ll x, y; cin &gt;&gt; x &gt;&gt; y;
        tree[x].push_back(y);
        tree[y].push_back(x);
    }
    dfs(1, -1);
    printf(&quot;%.15f\\n&quot;, dp[1]);
}
</code></pre>
<h2>C. Air Conditioner</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/1304">Codeforces Round 620 (Div. 2)</a></p>
<h4>思路</h4>
<p>​	对于客户来，只需要考虑在上次可以达到的左右区间</p>
<p>​	判断左区间是否超过右区间即可判断是否存在。</p>
<h4>状态方程</h4>
<p>$$
dp[i][0]=max(dp[i-1][0]-(t[i]-t[i-1]),l);
$$</p>
<p>$$
dp[i][1]=max(dp[i-1][1]+(t[i]-t[i-1]),r);
$$</p>
<h4>代码实现</h4>
<pre><code class="language-c++">struct k {
    ll t, l, r;
};
ll dp[210][2];
void solve() {
    ll n, m; cin &gt;&gt; n &gt;&gt; m;
    vector&lt;k&gt;o(n+2);
    dp[0][0] = dp[0][1] = m;
    for (int i = 1; i &lt;= n; i++) {
        cin &gt;&gt; o[i].t &gt;&gt; o[i].l &gt;&gt; o[i].r;
    }
    for (int i = 1; i &lt;= n; i++) {
        dp[i][0] = max(dp[i - 1][0] - (o[i].t - o[i - 1].t), o[i].l);
        dp[i][1] = min(dp[i - 1][1] + (o[i].t - o[i - 1].t), o[i].r);
        if (dp[i][0] &gt; dp[i][1]) {
            cout &lt;&lt; &quot;No\\n&quot;;
            return;
        }
    }
    cout &lt;&lt; &quot;YES\\n&quot;;
}
</code></pre>
<h2>D. Remove One Element</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/1272">Codeforces Round 605 (Div. 3)</a></p>
<h4>思路</h4>
<p>​	正扫一遍保留上升子串长度，反扫一遍保留下降子串长度。</p>
<p>​	然后在判断删中间值之后，两遍的正反扫组成的最长子串。</p>
<h4>状态方程</h4>
<p>$$
if (o[i] &gt; o[i - 1])\\ \\ dp[i][0] = dp[i - 1][0] + 1;
else\\ \\ dp[i][0] = 1;
$$</p>
<p>$$
if (o[i + 1] &gt; o[i])\\ \\ dp[i][1] = dp[i + 1][1] + 1;
else\\ \\ dp[i][1] = 1;
$$</p>
<h4>代码实现</h4>
<pre><code class="language-c++">ll dp[2100000][2];
void solve() {
    ll n; cin &gt;&gt; n;
    vector&lt;ll&gt;o(n + 2);
    for (int i = 1; i &lt;= n; i++)cin &gt;&gt; o[i];
    for (int i = 1; i &lt;= n; i++) {
        if (o[i] &gt; o[i - 1])dp[i][0] = dp[i - 1][0] + 1;
        else dp[i][0] = 1;
    }
    for (int i = n; i &gt;= 1; i--) {
        if (o[i + 1] &gt; o[i])dp[i][1] = dp[i + 1][1] + 1;
        else dp[i][1] = 1;
    }
    ll ans = 0;
    for (int i = 1; i &lt;= n; i++) {
        ans = max(ans, dp[i][1]);
        if (o[i - 1] &lt; o[i + 1])
            ans = max(ans, dp[i - 1][0] + dp[i + 1][1]);
    }
    cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>C. Maximum width</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/1492">Codeforces Round 704 (Div. 2)</a></p>
<h4>思路</h4>
<p>​	跟上题类似的思路，我们只需要找到每个字符第一个出现的位置和最后可能出现的位置，然后求相邻的最大值即可。</p>
<h4>状态方程</h4>
<p>$$
dp[id][0] = i;
$$</p>
<p>$$
dp[id][1] = i;
$$</p>
<p>$$
ans = max(ans, dp[i + 1][1] - dp[i][0]);
$$</p>
<h4>代码实现</h4>
<pre><code class="language-c++">ll dp[210000][2];
void solve() {
    ll n, m; cin &gt;&gt; n &gt;&gt; m;
    string s; cin &gt;&gt; s;
    string t; cin &gt;&gt; t;
    ll id = 0;
    for (int i = 0; i &lt; n; i++) {
        if (s[i] == t[id]) {
            dp[id][0] = i;
            id++;
            if (id == m)break;
        }
    }
    id = m - 1;
    for (int i = n-1; i &gt;=0; i--) {
        if (s[i] == t[id]) {
            dp[id][1] = i;
            id--;
            if (id == -1)break;
        }
    }
    ll ans = 0;
    for (int i = 0; i &lt; m-1; i++) {
        ans = max(ans, dp[i + 1][1] - dp[i][0]);
    }
    cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
`;export{n as attributes,t as html};
