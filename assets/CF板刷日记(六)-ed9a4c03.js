const n={},t=`<h2>A. Winner</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/2">Codeforces Beta Round 2</a></p>
<h4>思路</h4>
<p>​	题意就是一坨。总结下来意思就是，求出所有人最终得分中的最高分，然后找在最后得到最高得分的人最先得到最高得分以上的是谁。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    vector&lt;pair&lt;string, ll&gt;&gt;k(n);
    map&lt;string, ll&gt;p;
    map&lt;string, ll&gt;pp;
    for (int i = 0; i &lt; n; i++) {
        cin &gt;&gt; k[i].first &gt;&gt; k[i].second;
        p[k[i].first] = k[i].second + p[k[i].first];
    }
    ll mx = -pow(2, 30);
    for (auto x : p) {
        mx = max(mx, x.second);
    }
    for (int i = 0; i &lt; n; i++) {
        pp[k[i].first] += k[i].second;
        if (pp[k[i].first] &gt;= mx&amp;&amp;p[k[i].first]==mx) {
            cout &lt;&lt; k[i].first &lt;&lt; &quot;\\n&quot;;
            return;
        }
    }
}
</code></pre>
<h2>C. Little Girl and Maximum Sum</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/276">Codeforces Round 169 (Div. 2)</a></p>
<h4>思路</h4>
<p>​	就是求区间覆盖子次数，按最高次数来计算。根据给定的区间，求出对应的差分数组，然后求出前缀和数组，然后排序该前缀和数组和原数组计算即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n, m; cin &gt;&gt; n &gt;&gt; m;
    vector&lt;ll&gt;o(n);
    for (int i = 0; i &lt; n; i++)cin &gt;&gt; o[i];
    vector&lt;ll&gt;cha(n + 1, 0);
    for (int i = 0; i &lt; m; i++) {
        ll l, r; cin &gt;&gt; l &gt;&gt; r;
        cha[l-1]++;
        cha[r]--;
    }
    for (int i = 0; i &lt; n; i++) {
        if (i != 0)cha[i] += cha[i - 1];
    }
    sort(cha.begin(), cha.end(), cmpb);
    sort(o.begin(), o.end(), cmpb);
    ll ans = 0;
    for (int i = 0; i &lt; n; i++)ans += o[i] * cha[i];
    cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>A. Powered Addition</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/1338">Codeforces Round 633 (Div. 1)</a></p>
<h4>思路</h4>
<p>​	倍增思路，用最大值开始加上去，然后判断是否超过前一个数，不超过的话证明能需要加进去。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    vector&lt;ll&gt;o(n);
    for (int i = 0; i &lt; n; i++) {
        cin &gt;&gt; o[i];
    }
    ll mx = 0;
    for (int i = 1; i &lt; n; i++) {
        if (o[i] &lt; o[i - 1]) {
            for (ll j = 63; j &gt;= 0; j--) {
                if (o[i] + pow(2, j) &lt;= o[i - 1]) {
                    mx = max(mx, j + 1);
                    o[i] += pow(2, j);
                }
            }
        }
    }
    cout &lt;&lt; mx &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
`;export{n as attributes,t as html};
