const n={},t=`<h2>A. Kefa and First Steps</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/580">Codeforces Round 321 (Div. 2)</a></p>
<h4>思路</h4>
<p>​	求数组中最长不降子串，注意是子串，连续的。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    vector&lt;ll&gt;o(n);
    for (int i = 0; i &lt; n; i++)cin &gt;&gt; o[i];
    deque&lt;ll&gt;p;
    p.push_back(o[0]);
    ll ans = 0;
    for (int i = 1; i &lt; n; i++) {
        if (o[i] &gt;= p.back()) {
            p.push_back(o[i]);
        }
        else {
            ans = max(ans, (ll)p.size());
            p.clear();
            p.push_back(o[i]);
        }
    }
    cout &lt;&lt; max(ans, (ll)p.size()) &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>B. Interesting drink</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/706">Codeforces Round 367 (Div. 2)</a></p>
<h4>思路</h4>
<p>​	排序，二分查位置即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    vector&lt;ll&gt;o(n);
    for (int i = 0; i &lt; n; i++)cin &gt;&gt; o[i];
    sort(o.begin(), o.end(), cmps);
    ll x; cin &gt;&gt; x;
    while (x--) {
        ll q; cin &gt;&gt; q;
        cout &lt;&lt; upper_bound(o.begin(), o.end(), q) - o.begin() &lt;&lt; &quot;\\n&quot;;
    }
}
</code></pre>
`;export{n as attributes,t as html};
