const n={},t=`<h2>C. Valera and Tubes</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/441">Codeforces Round 252 (Div. 2)</a></p>
<h4>思路</h4>
<p>​	只需要在每一行上两个点坐标差值为1，我们只需要交替输出j即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n, m, k; cin &gt;&gt; n &gt;&gt; m &gt;&gt; k;
    bool u = 1;
    ll cnt = n * m / k;
    for (int i = 1; i &lt;= n; i++) {
        for (int j = 1; j &lt;= m; j++) {
            if (((i - 1) * m + j) % cnt == 1&amp;&amp;k&gt;=1) {
                k--;
                if (k &gt;= 1)cout &lt;&lt; cnt &lt;&lt; &quot; &quot;;
                else cout &lt;&lt; n * m - ((i - 1) * m + j) + 1 &lt;&lt; &quot; &quot;;
            }
            if (u) {
                cout &lt;&lt; i &lt;&lt; &quot; &quot; &lt;&lt; j &lt;&lt; &quot; &quot;;
            }
            else {
                cout &lt;&lt; i &lt;&lt; &quot; &quot; &lt;&lt; (m - j + 1) &lt;&lt; &quot; &quot;;
            }
        }
        u = !u;
    }
}
</code></pre>
<h2>C. Vladik and fractions</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/743">Codeforces Round 384 (Div. 2)</a></p>
<h4>思路</h4>
<p>​	数学题，除了当n等于1的时候，均可分解为n，n+1，n*(n+1)。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    if (n != 1)
        cout &lt;&lt; n &lt;&lt; &quot; &quot; &lt;&lt; n + 1 &lt;&lt; &quot; &quot; &lt;&lt; n * (n + 1) &lt;&lt; &quot;\\n&quot;;
    else
        cout &lt;&lt; &quot;-1\\n&quot;;
}
</code></pre>
<h2>C. Make Equal With Mod</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/1656">CodeTON Round 1 (Div. 1 + Div. 2, Rated, Prizes!)</a></p>
<h4>思路</h4>
<p>​	当0和1同时存在时，是no；当1不存在的时候，必然可以全都变成0；若以上两种均不满足，则判断，相邻两组之间是否差值为1，如果存在差值为1的，则no，否则yes。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    bool one = 0;
    bool zero = 0;
    vector&lt;ll&gt;o(n);
    for (int i = 0; i &lt; n; i++) {
        cin &gt;&gt; o[i];
        if (o[i] == 1)one = 1;
        else if (o[i] == 0) zero = 1;
    }
    if ((zero &amp;&amp; one))cout &lt;&lt; &quot;NO\\n&quot;;
    else {
        if (one == 0) {
            cout &lt;&lt; &quot;YES\\n&quot;;
            return;
        }
        sort(o.begin(), o.end());
        unique(o.begin(), o.end());
        for (int i = 1; i &lt; o.size(); i++) {
            if (o[i] - o[i - 1] == 1) {
                cout &lt;&lt; &quot;NO\\n&quot;; return;
            }
        }
        cout &lt;&lt; &quot;YES\\n&quot;;
    }
}
</code></pre>
<h2>B. Make Almost Equal With Mod</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/1909">Pinely Round 3 (Div. 1 + Div. 2)</a></p>
<h4>思路</h4>
<p>​	暴力，拿着第一个余数，找第二种，然后再找看看有没有第三种。按照题意判断即可。模二的倍数的原因在于，模二的倍数之后只可能出现奇数和偶数两种，满足题目的种类要求。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    vector&lt;ll&gt;o(n);
    for (int i = 0; i &lt; n; i++)cin &gt;&gt; o[i];
    for (ll i = 2;; i*=2) {
        ll be = o[0] % i;
        ll en;
        ll j = 1;
        bool u = 1;
        while (j &lt; n)if (o[j] % i != be) { en = o[j] % i; break; }else j++;
        if (j == n)u = 0;
        while (j &lt; n)if (o[j] % i != be&amp;&amp;o[j] % i != en) { u = 0; break; }else j++;
        if (u) {
            cout &lt;&lt; i &lt;&lt; &quot;\\n&quot;;
            return;
        }
    }
}
</code></pre>
`;export{n as attributes,t as html};
