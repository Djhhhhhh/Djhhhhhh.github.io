const n={},t=`<h2>A. Boredom</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/455">Codeforces Round 260 (Div. 1)</a></p>
<h4>思路</h4>
<p>​	dp，将数字最大值取出来后，按照数字算值即可，看当前值是否全取。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">ll dp[210000];
void solve() {
    ll n; cin &gt;&gt; n;
    map&lt;ll, ll&gt;p;
    ll mx = 0;
    for (int i = 0; i &lt; n; i++) {
        ll x; cin &gt;&gt; x;
        p[x]++;
        mx = max(x, mx);
    }
    dp[1] = p[1];
    for (int i = 2; i &lt;= mx; i++) {
        dp[i] = max(dp[i - 1], dp[i - 2] + p[i] * i);
    }
    cout &lt;&lt; dp[mx] &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>C. Kefa and Park</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/580">Codeforces Round 321 (Div. 2)</a></p>
<h4>思路</h4>
<p>​	搜满足的叶子结点个数即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">ll val[210000];
vector&lt;ll&gt;to[210000];
ll ans = 0;
ll n, m;
void dfs(ll id, ll sum,ll fa) {
    if (sum &gt; m)return;
    ll u = 1;
    for (auto x :to[id]) {
        if (x == fa)continue;
        u = 0;
        dfs(x, (val[x] ? sum + 1 : 0), id);
    }
    ans += u;
}
void solve() {
    cin &gt;&gt; n &gt;&gt; m;
    for (int i = 1; i &lt;= n; i++) {
        cin &gt;&gt; val[i];
    }
    for (int i = 0; i &lt; n - 1; i++) {
        ll x, y; cin &gt;&gt; x &gt;&gt; y;
        to[x].push_back(y);
        to[y].push_back(x);
    }
    dfs(1, val[1], 0);
    cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>A. Two Substrings</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/550">Codeforces Round 306 (Div. 2)</a></p>
<h4>思路</h4>
<p>​	先复制一遍串，然后先找AB替换，然后再找BA；如果没找到再反着来一遍。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    string k; cin &gt;&gt; k;
    string kk = k;
    if (k.find(&quot;AB&quot;) != string::npos) {
        k = k.replace(k.find(&quot;AB&quot;), 2, &quot;..&quot;);
        if (k.find(&quot;BA&quot;) != string::npos) {
            cout &lt;&lt; &quot;YES\\n&quot;;
            return;
        }
    }
    if (kk.find(&quot;BA&quot;) != string::npos) {
        kk = kk.replace(kk.find(&quot;BA&quot;), 2, &quot;..&quot;);
        if (kk.find(&quot;AB&quot;) != string::npos) {
            cout &lt;&lt; &quot;YES\\n&quot;;
            return;
        }
    }
    cout &lt;&lt; &quot;NO\\n&quot;;
}
</code></pre>
<h2>C. Divisibility by Eight</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/550">Codeforces Round 306 (Div. 2)</a></p>
<h4>思路</h4>
<p>​	可知，前三位数中可以被8整除的数才能被8整除。暴力。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    string k; cin &gt;&gt; k;
    for (int i = 0; i &lt; k.size(); i++) {
        for (int j = i + 1; j &lt; k.size(); j++) {
            for (int z = j + 1; z &lt; k.size(); z++) {
                ll x = (k[i] - '0') * 100 + (k[j] - '0') * 10 + (k[z] - '0');
                if (x % 8 == 0) {
                    cout &lt;&lt; &quot;YES\\n&quot; &lt;&lt; x &lt;&lt; &quot;\\n&quot;;
                    return;
                }
            }
            ll x = (k[i] - '0') * 10 + (k[j] - '0');
            if (x % 8 == 0) {
                cout &lt;&lt; &quot;YES\\n&quot; &lt;&lt; x &lt;&lt; &quot;\\n&quot;;
                return;
            }
        }
        ll x = (k[i] - '0');
        if (x % 8 == 0) {
            cout &lt;&lt; &quot;YES\\n&quot; &lt;&lt; x &lt;&lt; &quot;\\n&quot;;
            return;
        }
    }
    cout &lt;&lt; &quot;NO\\n&quot;;
}
</code></pre>
`;export{n as attributes,t as html};
