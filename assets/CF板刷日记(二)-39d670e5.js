const n={},t=`<h2>C. Soldier and Cards</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/546">Codeforces Round 304 (Div. 2)</a></p>
<h4>思路</h4>
<p>​	模拟，然后限制操作次数，超过一定次数输出-1。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    deque&lt;ll&gt;p1;
    deque&lt;ll&gt;p2;
    ll cnt; cin &gt;&gt; cnt;
    for (int i = 0; i &lt; cnt; i++) {
        ll x; cin &gt;&gt; x; p1.push_back(x);
    }
    cin &gt;&gt; cnt;
    for (int i = 0; i &lt; cnt; i++) {
        ll x; cin &gt;&gt; x; p2.push_back(x);
    }
    ll ans = 0;
    while (p1.size() &amp;&amp; p2.size()) {
        ans++;
        if (ans &gt;= 1000000) {
            cout &lt;&lt; &quot;-1\\n&quot;; return;
        }
        if (p1.front() &lt; p2.front()) {
            p2.push_back(p1.front());
            p1.pop_front();
            p2.push_back(p2.front());
            p2.pop_front();
        }
        else {
            p1.push_back(p2.front());
            p2.pop_front();
            p1.push_back(p1.front());
            p1.pop_front();
        }
    }
    cout &lt;&lt; ans &lt;&lt; &quot; &quot;;
    if (p1.size())cout &lt;&lt; 1 &lt;&lt; &quot;\\n&quot;;
    else cout &lt;&lt; 2 &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>C. Johnny and Another Rating Drop</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/1362">Codeforces Round 647 (Div. 2) - Thanks, Algo Muse!</a></p>
<h4>思路</h4>
<p>​	打标找规律，可得是根据原数右移加和。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    ll ans = 0;
    while (n) {
        ans += n;
        n &gt;&gt;= 1;
    }
    cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>B. Polo the Penguin and Matrix</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/289">Codeforces Round 177 (Div. 2)</a></p>
<h4>思路</h4>
<p>​	首先，当矩阵中所有值与d的余数相等时才可以被加和为同一个数。第二，对于剩下的数字，我们只需要排序后找到中的数字，然后让所有的数等于中间值即为最小操作次数。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n, m, d; cin &gt;&gt; n &gt;&gt; m &gt;&gt; d;
    ll ans = 0;
    vector&lt;ll&gt;o(n * m);
    cin &gt;&gt; o[0];
    ll mood = o[0] % d;
    for (int i = 1; i &lt; n * m; i++) {
        cin &gt;&gt; o[i];
        if (o[i] % d != mood) {
            cout &lt;&lt; &quot;-1\\n&quot;; return;
        }
    }
    sort(o.begin(), o.end(), cmps);
    for (int i = 0; i &lt; n * m; i++) {
        ans += abs(o[i] - o[n * m / 2]) / d;
    }
    cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>C. Constanze's Machine</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/1245">Codeforces Round 597 (Div. 2)</a></p>
<h4>思路</h4>
<p>​	首先可以知道，机器必然将m转化为nn，w转化为uu，所以当m和w存在时输出0；然后我们再观察数列，数列可以构成的种类数构成斐波那契数列，我们预处理方案即可。然后记录连续的数目，最后求和即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">ll F[100002];
void solve() {
    F[2] = 2;
    F[1] = 1;
    for (int i = 3; i &lt; 100003; i++) {
        F[i] = (F[i - 1] + F[i - 2])%(ll)(1e9+7);
    }
    string k; cin &gt;&gt; k;
    vector&lt;ll&gt;o;
    for (int i = 0; i &lt; k.size();) {
        ll l = i;
        if(k[l]=='u')
        while (l+1&lt;k.size() &amp;&amp; k[l] == 'u' &amp;&amp; k[l + 1] == k[l]) {
            l++;
        }
        else if(k[l]=='n')
        while (l + 1 &lt; k.size() &amp;&amp; k[l] == 'n' &amp;&amp; k[l + 1] == k[l]) {
            l++;
        }
        o.push_back(l - i + 1);
        i = l + 1;
    }
    if (count(k.begin(), k.end(), 'm') || count(k.begin(), k.end(), 'w')) {
        cout &lt;&lt; &quot;0\\n&quot;;
        return;
    }
    ll ans = 1;
    for (int i = 0; i &lt; o.size(); i++) {
        ans = ans * F[o[i]] % (ll)(1e9 + 7);
    }
    cout &lt;&lt; ans&lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<p>​</p>
`;export{n as attributes,t as html};
