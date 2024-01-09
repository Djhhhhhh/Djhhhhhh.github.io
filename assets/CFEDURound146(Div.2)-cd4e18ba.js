const n={},t=`<h2>A. Coins</h2>
<h4>思路</h4>
<p>​	判断总数是否可以被2整除或者被m整除或者(n-m)是否可以被2整除即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n, m; cin &gt;&gt; n &gt;&gt; m;
    if ((n - m) % 2 == 0 || n % m == 0||n%2==0) {
        cout &lt;&lt; &quot;YES\\n&quot;;
    }else {
        cout &lt;&lt; &quot;NO\\n&quot;;
    }
}
</code></pre>
<h2>B. Long Legs</h2>
<h4>思路</h4>
<p>​	假定x为跨到终点的值，那么可证此刻最佳答案应该为：x-1+ceil(a/x)+ceil(b/x)。</p>
<p>​	具体证明水平有限，请参考网上资料。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll a, b; cin &gt;&gt; a &gt;&gt; b;
    if (a &gt; b)swap(a, b);
    ll ans = pow(2, 31) - 1;
    for (int i = 1; i &lt;= 100000; i++) {
        ans = min(ans, (ll)ceil(a * 1.0 / i) + (ll)ceil(b * 1.0 / i) + i - 1ll);
    }
    cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>C. Search in Parallel</h2>
<h4>思路</h4>
<p>​	按出现频率排序，然后分别给两个机器即可，注意代码细节。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n, t1, t2; cin &gt;&gt; n &gt;&gt; t1 &gt;&gt; t2;
    vector&lt;ll&gt;o(n);
    for (int i = 0; i &lt; n; i++)cin &gt;&gt; o[i];
    vector&lt;int&gt;p(n);
    iota(p.begin(), p.end(), 0);
    sort(p.begin(), p.end(), [&amp;](ll a, ll b) {
        return o[a] &gt; o[b];
        });
    queue&lt;ll&gt;f;
    queue&lt;ll&gt;s;
    ll t = 0;
    ll b = 1;
    for (int i = 0; i &lt; n; i++) {
        if (t1 &gt; t2) {
            t += t2;
            if (t / t1 == b) {
                b++;
                f.push(p[i] + 1);
                if (i + 1 &lt; n) {
                    s.push(p[i + 1] + 1); i++;
                }
            }
            else {
                s.push(p[i] + 1);
            }
        }
        else if(t2&gt;t1) {
            t += t1;
            if (t / t2 == b) {
                b++;
                s.push(p[i] + 1);
                if (i + 1 &lt; n) {
                    f.push(p[i + 1] + 1); i++;
                }
            }
            else {
                f.push(p[i] + 1);
            }
        }
        else if (t2 == t1) {
            t++;
            if (t % 2 == 0) {
                s.push(p[i] + 1);
            }
            else {
                f.push(p[i] + 1);
            }
        }
    }
    cout &lt;&lt; f.size() &lt;&lt; &quot; &quot;;
    while (f.size()) {
        cout &lt;&lt; f.front() &lt;&lt; &quot; &quot;;
        f.pop();
    }
    cout &lt;&lt; &quot;\\n&quot; &lt;&lt; s.size() &lt;&lt; &quot; &quot;;
    while (s.size()) {
        cout &lt;&lt; s.front() &lt;&lt; &quot; &quot;;
        s.pop();
    }
    cout &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
`;export{n as attributes,t as html};
