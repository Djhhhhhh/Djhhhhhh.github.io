const n={},t=`<h2>A. Satisfying Constraints</h2>
<h4>思路</h4>
<p>​	先求最终可以得到的区间，然后将该区间内被删除的点取出。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    vector&lt;ll&gt;l;
    vector&lt;ll&gt;r;
    vector&lt;ll&gt;no;
    for (int i = 0; i &lt; n; i++) {
        ll a; cin &gt;&gt; a;
        if (a == 1) {
            ll x; cin &gt;&gt; x;
            l.push_back(x);
        }
        else if(a==2) {
            ll x; cin &gt;&gt; x;
            r.push_back(x);
        }
        else if (a == 3) {
            ll x; cin &gt;&gt; x;
            no.push_back(x);
        }
    }
    sort(l.begin(), l.end(), cmpb);
    sort(r.begin(), r.end(), cmps);
    ll ans = r.front() - l.front() + 1;
    for (int i = 0; i &lt; no.size(); i++) {
        if (no[i] &gt;= l.front() &amp;&amp; no[i] &lt;= r.front())ans--;
    }
    cout &lt;&lt; max(ans,0ll) &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>B. Summation Game</h2>
<h4>思路</h4>
<p>​	对于B来说，他尽可能的把数字变成负的才是最优，所以我们不用管B的操作数量，这时候我们只需要暴力跑一遍A的可能的操作即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n, k, x; cin &gt;&gt; n &gt;&gt; k &gt;&gt; x;
    vector&lt;ll&gt;o(n);
    for (int i = 0; i &lt; n; i++) {
        cin &gt;&gt; o[i];
    }
    sort(o.begin(), o.end(), cmps);
    vector&lt;ll&gt;sum(n+1);
    sum[0] = 0;
    for (int i = 1; i &lt;= n; i++) {
        sum[i] = sum[i - 1] + o[i - 1];
    }
    ll ans = sum[n] - 2*(sum[n] - sum[n - x]);
    for (int i = 1; i &lt;= k; i++) {
        ans = max(ans, sum[n - i] - 2*(sum[n - i] - sum[max(n - i - x,0ll)]));
    }
    cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
`;export{n as attributes,t as html};
