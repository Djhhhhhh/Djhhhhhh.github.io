const n={},t=`<h2><strong>A - Long Loong</strong></h2>
<h4>思路</h4>
<p>​	读题。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    cout &lt;&lt; &quot;L&quot;;
    for (int i = 0; i &lt; n; i++)cout &lt;&lt; &quot;o&quot;;
    cout &lt;&lt; &quot;ng&quot;;
}
</code></pre>
<h2><strong>B - CTZ</strong></h2>
<h4>思路</h4>
<p>​	lowbit求位数然后求0个数。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    ll x = (n &amp; -n);
    ll cnt = 0;
    while (x) {
        cnt++;
        x /= 2;
    }
    cout &lt;&lt; cnt-1 &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2><strong>C - Even Digits</strong></h2>
<h4>思路</h4>
<p>​	类似于进制的思路，在求初始值的时候注意进位。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    vector&lt;ll&gt;ans;
    map&lt;ll,ll&gt;p;
    p[0] = 0;
    p[1] = 2;
    p[2] = 4;
    p[3] = 6;
    p[4] = 8;
    if (n % 5 == 0) {
        ans.push_back(8);
        n -= 5;
    }
    else {
        ans.push_back(p[n % 5 - 1]);
    }
    n /= 5;
    while (n) {
        ans.push_back(p[n % 5]);
        n /= 5;
    }
    for (int i = ans.size() - 1; i &gt;= 0; i--)cout &lt;&lt; ans[i];
    cout &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2><strong>D - Pyramid</strong></h2>
<h4>思路</h4>
<p>​	不知道赛时代码哪里有问题，就是从左边求一次，在右边求一次然后找中间满足的值。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    n += 2;
    vector&lt;ll&gt;o(n);
    for (int i = 1; i &lt; n-1; i++)cin &gt;&gt; o[i];
    vector&lt;ll&gt;you(n);
    vector&lt;ll&gt;zuo(n);
    for (int i = 1; i &lt; n; i++) {
        you[i] = min(you[i - 1] + 1, o[i]);
    }
    for (int i = n-2; i &gt;= 0; i--) {
        zuo[i] = min(zuo[i + 1] + 1, o[i]);
    }
    ll ans = 0;
    for (int i = 0; i &lt; n; i++) {
        ans = max(ans, min(zuo[i], you[i]));
    }
    cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
`;export{n as attributes,t as html};
