const n={},t=`<h2>C. Good String</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/1389">Educational Codeforces Round 92 (Rated for Div. 2)</a></p>
<h4>思路</h4>
<p>​	已知，只有两种序列满足左移右移相等：1.AAAA 2.ABABA，这两种形式。对于字符种类，只有10种，组成AB形最多90种。暴力即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    string k; cin &gt;&gt; k;
    vector&lt;ll&gt;o(10, 0);
    ll ans = 0;
    for (int i = 0; i &lt; k.size(); i++) {
        o[k[i] - '0']++;
        ans = max(o[k[i] - '0'], ans);
    }
    for (int i = 0; i &lt;= 9; i++) {
        for (int j = 0; j &lt;= 9; j++) {
            if (i == j)continue;
            ll l = 0;
            ll cnt = 0;
            while (l &lt; k.size()) {
                if (k[l] == (i + '0')) {
                    ll r = l + 1;
                    while (r &lt; k.size()) {
                        if (k[r] == (j + '0')) {
                            cnt++;
                            break;
                        }
                        else {
                            r++;
                        }
                    }
                    l = r + 1;
                }
                else {
                    l++;
                }
            }
            ans = max(2 * cnt, ans);
        }
    }
    cout &lt;&lt; k.size() - ans &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>D. a-Good String</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/1385">Codeforces Round 656 (Div. 3)</a></p>
<h4>思路</h4>
<p>​	分块搜索，按照题意来就可以。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void dfs(ll l, ll r, char c,ll sum) {
    //cout &lt;&lt; cnt++ &lt;&lt;&quot;:&quot; &lt;&lt; l &lt;&lt; &quot; &quot; &lt;&lt; r &lt;&lt; &quot; &quot; &lt;&lt; c &lt;&lt; &quot; &quot; &lt;&lt; sum &lt;&lt; &quot;\\n&quot;;
    if (l == r) {
        if (k[l] != c)sum++;
        ans = min(sum, ans);
        return;
    }
    ll mid = l + r &gt;&gt; 1;
    ll cnt1 = 0;
    ll cnt2 = 0;
    for (int i = l; i &lt;= r; i++) {
        if (i &lt;= mid) {
            if (c == k[i])cnt1++;
        }
        else {
            if (c == k[i])cnt2++;
        }
    }
    dfs(l, mid, c + 1, sum + (r - l + 1) / 2 - cnt2);
    dfs(mid + 1, r, c + 1, sum + (r - l + 1) / 2 - cnt1);
}
void solve() {
    ans = pow(2, 31) - 1;
    ll n; cin &gt;&gt; n;
    cin &gt;&gt; k;
    dfs(0, k.size() - 1, 'a', 0);
    cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>F. Interesting Function</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/1538">Codeforces Round 725 (Div. 3)</a></p>
<h4>思路</h4>
<p>​	每次记录最低为变化导致的变化即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll l, r; cin &gt;&gt; l &gt;&gt; r;
    ll ans = 0;
    while (r) {
        ans += (r - l);
        r /= 10;
        l /= 10;
    }
    cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>C. Vasya and String</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/676">Codeforces Round 354 (Div. 2)</a></p>
<h4>思路</h4>
<p>​	快慢双指针，找到不满足的位置，让左指针右移。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n, m; cin &gt;&gt; n &gt;&gt; m;
    string k; cin &gt;&gt; k;
    ll l = 0;
    ll r = 0;
    ll ans = 0;
    ll cnt1 = 0;
    ll cnt2 = 0;
    while (r &lt; n) {
        if (k[r] == 'a')cnt1++;
        else cnt2++;
        if (cnt1 &lt;= m || cnt2 &lt;= m)ans++, r++;
        else {
            if (k[l] == 'a')cnt1--;
            else cnt2--;
            l++;
            r++;
        }
    }
    cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
`;export{n as attributes,t as html};
