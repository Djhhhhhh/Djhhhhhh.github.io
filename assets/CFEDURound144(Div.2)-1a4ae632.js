const t={},n=`<h2>A. Typical Interview Problem</h2>
<h4>思路</h4>
<p>​	找到循环结，重复循环节4次以上，保证有足够的子串在串中即可，然后判断给定的字符串是否在其中。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    string k; cin &gt;&gt; k;
    string mm = &quot;FBFFBFFBFBFFBFFBFBFFBFFBFBFFBFFB&quot;;
    if (mm.find(k) != string::npos) {
        cout &lt;&lt; &quot;YES\\n&quot;;
    }
    else {
        cout &lt;&lt; &quot;NO\\n&quot;;
    }
}
</code></pre>
<h2>B. Asterisk-Minor Template</h2>
<h4>思路</h4>
<p>​	3种情况：1.*C 2.C* 3.*CC*</p>
<p>​	暴力即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    string a; cin &gt;&gt; a;
    string b; cin &gt;&gt; b;
    if (a[0] == b[0]) {
        cout &lt;&lt; &quot;YES\\n&quot;;
        cout &lt;&lt; a[0] &lt;&lt; &quot;*\\n&quot;; return;
    }
    if (a == b) {
        cout &lt;&lt; &quot;YES\\n&quot;;
        cout &lt;&lt; a &lt;&lt; &quot;\\n&quot;; return;
    }
    if (a.back() == b.back()) {
        cout &lt;&lt; &quot;YES\\n&quot;;
        cout &lt;&lt; &quot;*&quot; &lt;&lt; a.back() &lt;&lt; &quot;\\n&quot;; return;
    }
    for (int i = 0; i &lt; a.size() - 1; i++) {
        for (int j = 0; j &lt; b.size()-1;j++) {
            if (a[i] == b[j] &amp;&amp; a[i + 1] == b[j + 1]) {
                cout &lt;&lt; &quot;YES\\n&quot;;
                cout &lt;&lt; &quot;*&quot; &lt;&lt; a[i] &lt;&lt; a[i + 1] &lt;&lt; &quot;*\\n&quot;;
                return;
            }
        }
    }
    cout &lt;&lt; &quot;NO\\n&quot;;
}
</code></pre>
<h2>C. Maximum Set</h2>
<h4>思路</h4>
<p>​	个数好判断，让l一直乘2看几次可以之后会比r大，记录次数即可。</p>
<p>​	对于种类数，首先我们考虑只称2的情况下，我们可以拥有多少种数据。所以在这里我们需要求出，满足只乘2之后最大值不大于r的情况有多少，我们可以记录，最大可称的次数，用该次数除以r-l+1，即可求出有多少组。然后再求乘一次3的时候的情况，总共可以有多少组。最后加一块。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll l, r; cin &gt;&gt; l &gt;&gt; r;
    ll cnt = 1;
    ll mid = 1;
    ll x = l;
    while (x * 2 &lt;= r) {
        cnt++;
        x *= 2;
        mid *= 2;
    }
    cout &lt;&lt; cnt &lt;&lt; &quot; &quot;;
    ll sum = max(0ll, r / mid - l + 1)%Mod;
    if (mid &gt;= 2) {
        mid /= 2;
        mid *= 3;
    }
    sum = (sum + max(0ll, (r / mid - l + 1) * (cnt - 1))) % Mod;
    cout &lt;&lt; sum % Mod &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
`;export{t as attributes,n as html};
