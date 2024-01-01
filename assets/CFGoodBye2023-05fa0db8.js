const t={},n=`<h2>A. 2023</h2>
<h4>思路</h4>
<p>​	所有数乘积等于2023，现在少了k个数字，我们只需要将现在给的数字乘积求出，然后求出乘积与多少乘等于2023，所以在k个数字中，有一个等于该数字即可，另外所有数字均为1即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n, m; cin &gt;&gt; n &gt;&gt; m;
    vector&lt;ll&gt;o(n);
    ll sum = 1;
    for (int i = 0; i &lt; n; i++) {
        cin &gt;&gt; o[i];
        sum *= o[i];
    }
    if (2023 % sum == 0) {
        cout &lt;&lt; &quot;YES\\n&quot;;
        cout &lt;&lt; 2023 / sum &lt;&lt; &quot; &quot;;
        for (int i = 1; i &lt; m; i++)cout &lt;&lt; &quot;1 &quot;;
        cout &lt;&lt; &quot;\\n&quot;;
    }
    else {
        cout &lt;&lt; &quot;NO\\n&quot;;
    }
}
</code></pre>
<h2>B. Two Divisors</h2>
<h4>思路</h4>
<p>​	给你两个整数 a和 b ，它们是数x的两个最大除数。当b不能被a整除的时候，x为ab的最小公倍数；当b能被a整除时，则x为b*b/a。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">ll gcd(ll a,ll b) 
{    
    if(b) while((a%=b) &amp;&amp; (b%=a));    
    return a+b;
}
ll lcm(ll a, ll b) {
    return a / gcd(a, b) * b;
}
void solve() {
    ll n,m;cin&gt;&gt;n&gt;&gt;m;
    if(lcm(n,m)==m){
        cout&lt;&lt;m*m/n&lt;&lt;&quot;\\n&quot;;
    }else{
        cout&lt;&lt;lcm(m,n)&lt;&lt;&quot;\\n&quot;;
    }
}
</code></pre>
<h2>C. Training Before the Olympiad</h2>
<h4>思路</h4>
<p>​	先手的目标是最大化最终数字，后手的目标是最大化最终数字。游戏的操作为，选择序列中的任意两个数字，将他俩乘加和除二后再乘二。当选取得数字是一奇数一偶数得时候，精度误差会导致丢失一个数字，从而导致序列最终数字减小1位。</p>
<p>​	对于先手操作，如果存在两个以上奇数，那么必然对两个奇数进行操作，从而减少一个或两个奇数。</p>
<p>​	对于后手操作，如果存在一个以上奇数，那么必然选取一个奇数和一个偶数进行操作，使精度出现误差，少一个数。</p>
<p>​	所以对于三个以上奇数得操作其实可以合并在一起，缺少的数字即为奇数的个数除以三，还有，当cnt%3==1的时候，缺少的数字仍需加一。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    ll sum = 0;
    ll cnt = 0;
    for (int i = 1; i &lt;= n; i++) {
        ll x; cin &gt;&gt; x;
        sum += x;
        cnt += x % 2;
        ll mid = 0;
        if (cnt == 1 &amp;&amp; i == 1) {
            mid = 0;
        }
        else {
            mid = cnt / 3;
            if (cnt % 3 == 1)mid++;
        }
        cout &lt;&lt; sum - mid &lt;&lt; &quot; &quot;;
    }
    cout &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>D. Mathematical Problem</h2>
<h4>思路</h4>
<p>​	打标发现对1_6_9中间加任意零均可以组成满足题意的整数；对9_6_1中间加任意零也可以满足。</p>
<p>​	注意：当n=1的时候需要特判输出1即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    if (n == 1) {
        cout &lt;&lt; 1 &lt;&lt; &quot;\\n&quot;;
        return;
    }
    cout &lt;&lt; &quot;196&quot; &lt;&lt; string(n - 3, '0') &lt;&lt; &quot;\\n&quot;;
    for (int i = 0; i &lt; n / 2; i++) {
        cout &lt;&lt; 1 &lt;&lt; string(i, '0') &lt;&lt; 6 &lt;&lt; string(i, '0') &lt;&lt; 9 &lt;&lt; string(n - 3 - 2 * i, '0') &lt;&lt; &quot;\\n&quot;;
        cout &lt;&lt; 9 &lt;&lt; string(i, '0') &lt;&lt; 6 &lt;&lt; string(i, '0') &lt;&lt; 1 &lt;&lt; string(n - 3 - 2 * i, '0') &lt;&lt; &quot;\\n&quot;;
    }
}
</code></pre>
<h2>总结</h2>
<p>​	第二题赛事一直在猜结论，想不明白。第三题赛时逻辑混乱，静下心就能好些吧。</p>
`;export{t as attributes,n as html};
