const n={},t=`<h2>B. Regular Bracket Sequence</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/26">Codeforces Beta Round 26</a></p>
<h4>思路</h4>
<p>​	括号序列，拿栈模拟即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    string k; cin &gt;&gt; k;
    stack&lt;char&gt;u;
    ll ans = 0;
    for (int i = 0; i &lt; k.size(); i++) {
        if (k[i] == '(')u.push(k[i]);
        else {
            if (u.size()) {
                u.pop(); ans += 2;
            }
        }
    }
    cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>B. Applejack and Storages</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/1393">Codeforces Round 662 (Div. 2)</a></p>
<h4>思路</h4>
<p>​	模拟即可，计数优先记四个相同，看剩下的能不能组一对。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    set&lt;ll&gt;o;
    map&lt;ll, ll&gt;p;
    for (int i = 0; i &lt; n; i++) {
        ll x; cin &gt;&gt; x;
        o.insert(x); p[x]++;
    }
    ll four = 0;
    ll two = 0;
    for (auto x : o) {
        four += p[x] / 4;
        two += p[x] % 4 / 2;
    }
    ll t; cin &gt;&gt; t;
    while (t--) {
        char c; cin &gt;&gt; c;
        if (c == '+') {
            ll x; cin &gt;&gt; x; o.insert(x); p[x]++;
            four -= (p[x]-1) / 4;
            two -= (p[x]-1) % 4 / 2;
            four += p[x] / 4;
            two += p[x] % 4 / 2;
        }
        else {
            ll x; cin &gt;&gt; x; p[x]--; if (p[x] == 0)o.erase(x);
            four -= (p[x] + 1) / 4;
            two -= (p[x] + 1) % 4 / 2;
            four += p[x] / 4;
            two += p[x] % 4 / 2;
        }
        if (four &gt;= 1 &amp;&amp; (two &gt;= 2 || four &gt;= 2)) {
            cout &lt;&lt; &quot;YES\\n&quot;;
        }else cout &lt;&lt; &quot;NO\\n&quot;;
    }
}
</code></pre>
`;export{n as attributes,t as html};
