const n={},t=`<h2>B. Plus and Multiply</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/1542">Codeforces Round 729 (Div. 2)</a></p>
<h4>思路</h4>
<p>​	题目给定的式子可以写为a^x^+y^b^，然后暴力求n。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n, a, b; cin &gt;&gt; n &gt;&gt; a &gt;&gt; b;
    if (a == 1) {
        if (n % b == 1 || n == 1 || b == 1) {
            cout &lt;&lt; &quot;YES\\n&quot;;
        }
        else {
            cout &lt;&lt; &quot;NO\\n&quot;;
        }
        return;
    }
    for (ll i = 1; i &lt;= n; i *= a) {
        if (i % b == n % b) {
            cout &lt;&lt; &quot;YES\\n&quot;;
            return;
        }
    }
    cout &lt;&lt; &quot;NO\\n&quot;;
}
</code></pre>
<h2>C1C2. Potions</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/1526">Codeforces Round 723 (Div. 2)</a></p>
<h4>思路</h4>
<p>​	优先队列，当价格小于0的时候，将最小值剔除出去。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    ll cnt = 0;
    ll sum = 0;
    priority_queue&lt;ll, vector&lt;ll&gt;, greater&lt;ll&gt;&gt;p;
    for (int i = 0; i &lt; n; i++) {
        ll x; cin &gt;&gt; x;
        cnt += x;
        p.push(x);
        if (cnt &lt; 0) {
            cnt -= p.top();
            sum--;
            p.pop();
        }
        sum++;
    }
    cout &lt;&lt; sum &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>E. Tetrahedron</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/166">Codeforces Round 113 (Div. 2)</a></p>
<h4>思路</h4>
<p>​	DP，设计状态方程：a[i]=3b[i-1] b[i]=2b[i-1]+a[i-1]。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    ll a = 0, b = 1;
    for (int i = 2; i &lt;= n; i++) {
        ll x = a;
        a = 3 * b % Mod;
        b = (x + 2 * b) % Mod;
    }
    cout &lt;&lt; a &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>B. Codeforces Subsequences</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/1368">Codeforces Global Round 8</a></p>
<h4>思路</h4>
<p>​	对于组合数来说，乘积状态下，各值的数据越平均，最终总数越大，所以只需要将总种类计算，然后平分给各个字符即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    string k = &quot;codeforces&quot;;
    vector&lt;ll&gt;o(10, 1);
    ll id = 0;
    while (o[0] * o[1] * o[2] * o[3] * o[4] * o[5] * o[6] * o[7] * o[8] * o[9]&lt;n) {
        o[id]++; id++; id %= 10;
    }
    for (int i = 0; i &lt; 10; i++) {
        for (int j = 0; j &lt; o[i]; j++) {
            cout &lt;&lt; k[i];
        }
    }
}
</code></pre>
<h2>E. Special Elements</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/1352">Codeforces Round 640 (Div. 4)</a></p>
<h4>思路</h4>
<p>​	8000的数据，n^2^复杂度就可以过。注意空间，可map映射时需要用无序map，unordered_map。求前缀和的时候当和大于n跳出即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    vector&lt;ll&gt;o(n);
    unordered_map&lt;ll,ll&gt;p;
    for (int i = 0; i &lt; n; i++) {
        cin &gt;&gt; o[i];
        p[o[i]]++;
    }
    ll ans = 0;
    for (int i = 0; i &lt; n; i++) {
        ll sum = o[i];
        for (int j = i + 1; j &lt; n; j++) {
            sum += o[j];
            if (sum &gt; n)break;
            if (p[sum]) {
                ans += p[sum];
                p[sum] = 0;
            }
        }
    }
    cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>E. Cyclic Components</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/977">Codeforces Round 479 (Div. 3)</a></p>
<h4>思路</h4>
<p>​	对于图内的点，如果他在一个环内，那么它的度数必为2；并查集判环即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
   cin &gt;&gt; n &gt;&gt; m;
   init();
   for (int i = 0; i &lt; m; i++) {
       ll x, y; cin &gt;&gt; x &gt;&gt; y;
       f[Find(x)] = Find(y);
       d[x]++; d[y]++;
   }
   for (int i = 1; i &lt;= n; i++) {
       if (d[i] != 2)ans[Find(i)] = 1;
   }
   ll sum = 0;
   for (int i = 1; i &lt;= n; i++) {
       if (Find(i) == i &amp;&amp; ans[i] == 0)sum++;
   }
   cout &lt;&lt; sum &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>D. Decrease the Sum of Digits</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/1409">Codeforces Round 667 (Div. 3)</a></p>
<h4>思路</h4>
<p>​	先把数位全都取出来求出总和，然后倒着加数即可，注意判前一位是9的情况。</p>
<p>​	pow精度丢失，用快速幂即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">ll qpow(ll a, ll n){
    ll ans = 1;
    while (n)
    {
        if (n &amp; 1) ans = ans * a;
        a = a * a;
        n &gt;&gt;= 1;
    }
    return ans;
}
void solve() {
    ll n, s; cin &gt;&gt; n &gt;&gt; s;
    ll x = n;
    ll sum = 0;
    while (x) {
        sum += x % 10;
        x /= 10;
    }
    ll ans = 0;
    ll id = 0;
    while (sum &gt; s) {
        sum -= n % 10;
        ans += (10 - n % 10) * (qpow(10, id));
        n /= 10;
        id++;
        while (n % 10 == 9) {
            sum -= 9;
            n /= 10;
            id++;
        }
        sum += 1;
        n += 1;
    }
    cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
`;export{n as attributes,t as html};
