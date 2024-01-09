const n={},t=`<h2>C. Heavy Intervals</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/1909">Pinely Round 3 (Div. 1 + Div. 2)</a></p>
<h4>思路</h4>
<p>​	对于lr两组端点，类似于括号匹配的模式。按照区间长度严格递增，然后得到的代价即为最小。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    vector&lt;ll&gt;o1(n);
    vector&lt;ll&gt;o2(n);
    vector&lt;ll&gt;c(n);
    for (int i = 0; i &lt; n; i++)cin &gt;&gt; o1[i];
    for (int i = 0; i &lt; n; i++)cin &gt;&gt; o2[i];
    for (int i = 0; i &lt; n; i++)cin &gt;&gt; c[i];
    sort(o1.begin(), o1.end());
    sort(o2.begin(), o2.end());
    sort(c.begin(), c.end(), cmpb);
    vector&lt;ll&gt;cha;
    ll l = 0, r = 0;
    stack&lt;ll&gt;u;
    while (l != n || r != n) {
        if (l == n) {
            cha.push_back(o2[r] - u.top());
            u.pop();
            r++;
            continue;
        }
        if (o1[l] &lt; o2[r]) {
            u.push(o1[l]);
            l++;
        }else {
            cha.push_back(o2[r] - u.top());
            u.pop();
            r++;
        }
    }
    sort(cha.begin(), cha.end());
    ll ans = 0;
    for (int i = 0; i &lt; n; i++) {
        ans += c[i] * cha[i];
    }
    cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
}   
</code></pre>
<h2>C. Phoenix and Towers</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/1515">Codeforces Global Round 14</a></p>
<h4>思路</h4>
<p>​	题目中给的x范围，不存在no的情况。我们只需要贪心即可，每次取出高度最低的加上当前的木块即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n, m, cha; cin &gt;&gt; n &gt;&gt; m &gt;&gt; cha;
    priority_queue&lt;pair&lt;ll, ll&gt;, vector&lt;pair&lt;ll, ll&gt;&gt;, greater&lt;pair&lt;ll, ll&gt;&gt; &gt;p;
    vector&lt;ll&gt;ans(n, 0);
    for (int i = 1; i &lt;= m; i++) {
        p.push({ 0,i });
    }
    for (int i = 1; i &lt;= n; i++) {
        ll x; cin &gt;&gt; x;
        pair&lt;ll, ll&gt;mid = p.top();
        p.pop();
        mid.first += x;
        ans[i - 1] = mid.second;
        p.push(mid);
    }
    cout &lt;&lt; &quot;YES\\n&quot;;
    for (int i = 0; i &lt; n; i++)cout &lt;&lt; ans[i] &lt;&lt; &quot; &quot;;
    cout &lt;&lt; &quot;\\n&quot;;
}   
</code></pre>
<h2>C. News Distribution</h2>
<h4>题目来源</h4>
<p>​	<a href="https://codeforces.com/contest/1167">Educational Codeforces Round 65 (Rated for Div. 2)</a></p>
<h4>思路</h4>
<p>​	并查集，没啥说的，这题数据挺猛容易被卡。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">ll n, m;
ll fa[1010000];//父节点数组
ll ans[1010000];//高度节点数组
int Find(int x) {//查询优化  路径压缩
    return fa[x] == x ? fa[x] : fa[x] = Find(fa[x]);//使元素直接指向树的根 
}
void solve() {
    cin &gt;&gt; n &gt;&gt; m;
    for (int i = 1; i &lt;= n; i++) fa[i] = i;
    for (int i = 1; i &lt;= m; i++)
    {
        ll x; cin &gt;&gt; x;
        if (x == 0) continue;
        ll be; cin &gt;&gt; be;
        for (int j = 2; j &lt;=  x; j++)
        {
            ll mid;cin &gt;&gt; mid; ll a = Find(be), b = Find(mid);
            fa[a] = b;
        }
    }
    for (int i = 1; i &lt;= n; i++) ans[Find(i)]++; 
    for (int i = 1; i &lt;= n; i++) cout &lt;&lt; ans[Find(i)] &lt;&lt; ' ';
    cout &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
`;export{n as attributes,t as html};
