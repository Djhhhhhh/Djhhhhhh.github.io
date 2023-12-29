const t={},n=`<h2>A. The Third Three Number Problem</h2>
<h4>思路</h4>
<p>​	当n为奇数时，没有解；当n为偶数时，根据异或的性质，两个相同数字异或得0，则可以将偶数分为两半，然后第三个数取0即可达成题意。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    if (n % 2 == 1) {
        cout &lt;&lt; &quot;-1\\n&quot;;
    }
    else {
        cout &lt;&lt; &quot;0&quot; &lt;&lt; &quot; &quot; &lt;&lt; n / 2 &lt;&lt; &quot; &quot; &lt;&lt; n / 2 &lt;&lt; &quot;\\n&quot;;
    }
}
</code></pre>
`;export{t as attributes,n as html};
