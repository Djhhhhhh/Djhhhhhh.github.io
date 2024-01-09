const n={},t=`<h2>A. Everyone Loves to Sleep</h2>
<h4>思路</h4>
<p>​	计算出所有的相差分钟数，排序后取最小值即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n, h, m; cin &gt;&gt; n &gt;&gt; h &gt;&gt; m;
    vector&lt;ll&gt;p;
    for (int i = 0; i &lt; n; i++) {
        ll hh, mm; cin &gt;&gt; hh &gt;&gt; mm;
        if (hh &lt; h) {
            hh += 24;
        }else if (hh == h&amp;&amp;mm&lt;m) {
            hh += 24;
        }
        p.push_back((hh - h) * 60 + mm-m);
    }
    sort(p.begin(), p.end());
    cout &lt;&lt; p.front()/60 &lt;&lt; &quot; &quot; &lt;&lt; p.front()%60 &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>B. Remove Prefix</h2>
<h4>思路</h4>
<p>​	移除最左端元素，将计数减一，直到所有字符出现次数为1。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    vector&lt;ll&gt;o(n);
    map&lt;ll, ll&gt;p;
    map&lt;ll, ll&gt;pp;
    ll cnt = 0;
    for (int i = 0; i &lt; n; i++) {
        cin &gt;&gt; o[i];
        p[o[i]]++;
        if (p[o[i]] &gt;= 2&amp;&amp;pp[o[i]]!=1) {
            cnt++;
            pp[o[i]] = 1;
        }
    }
    if (cnt == 0) {
        cout &lt;&lt; 0 &lt;&lt; &quot;\\n&quot;;
        return;
    }
    for (int i = 0; i &lt; n; i++) {
        p[o[i]]--;
        if (p[o[i]] == 1) {
            cnt--;
        }
        if (cnt == 0) {
            cout &lt;&lt; i + 1 &lt;&lt; &quot;\\n&quot;;
            return;
        }
    }
}
</code></pre>
<h2>C. Minimum Varied Number</h2>
<h4>思路</h4>
<p>​	最小组成，爆搜。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">ll n;
string ans=&quot;&quot;;
void dfs(char id, ll sum, string k) {
    if (sum == n) {
        ans = k;
        return;
    }
    for (char i = id; i &gt;= '0'; i--) {
        if (sum + (i-'0') &lt;= n) {
            dfs(id - 1, sum + (i - '0'), k + i);
        }
        if (ans!=&quot;&quot;)return;
    }
}
void solve() {
    ans = &quot;&quot;;
    cin &gt;&gt; n;
    dfs('9', 0, &quot;&quot;);
    reverse(ans.begin(), ans.end());
    cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>D. Color with Occurrences</h2>
<h4>思路</h4>
<p>​	暴力求出所有可以涂色的线段，然后转变为最小区间覆盖问题。</p>
<h4>代码实现</h4>
<pre><code>struct line {
    ll id = 0;
    ll l = 0;
    ll r = 0;
    line(ll id, ll l, ll chang) {
        this-&gt;id = id;
        this-&gt;l = l;
        this-&gt;r = l + chang - 1;
    }
};
void solve() {
    string k; cin &gt;&gt; k;
    ll n; cin &gt;&gt; n;
    vector&lt;line&gt;now;
    now.clear();
    for (int i = 0; i &lt; n; i++) {
        string x; cin &gt;&gt; x;
        for (int j = 0; j &lt; k.size() - x.size()+1; j++) {
            if (x == k.substr(j, x.size())) {
                now.push_back(line(i, j, x.size()));
            }
        }
    }
    if (now.size() == 0) {
        cout &lt;&lt; &quot;-1\\n&quot;; return;
    }
    sort(now.begin(), now.end(), [&amp;](line a, line b) {
        if (a.l != b.l)return a.l &lt; b.l;
        return a.r &gt; b.r;
        });
    if (now[0].l &gt; 0) {  //当第一个区间连0都不能覆盖的时候跳出程序
        cout &lt;&lt; &quot;-1\\n&quot;;
        return;
    }
    vector&lt;line&gt;ans;
    ans.clear();
    ans.push_back(now[0]);
    ll r = now[0].r; //当前能够覆盖的最右端
    ll rr = r;//用于判断当前区间的左端点是否在范围内
    ll cnt = 1;//当前选中的时第几个线段
    ll nn = now.size();//区间个数
    ll mm = k.size();//最大范围
    while (cnt &lt; nn &amp;&amp; rr &lt; mm - 1) {
        if (now[cnt].l &gt; rr+1) {//比前一个右端点还大，直接退出
            cout &lt;&lt; &quot;-1\\n&quot;; return;
        }
        ll id = -1;
        while (cnt &lt; nn &amp;&amp; r &lt; mm&amp;&amp;now[cnt].l &lt;= rr + 1) {
            if (now[cnt].r &gt; r) {
                id = cnt;
                r = now[cnt].r;
            }
            cnt++;
        }
        ans.push_back(now[id]);
        rr = r;
    }
    if (rr &lt; mm-1) { //没有完整覆盖
        cout &lt;&lt; &quot;-1\\n&quot;; return;
    }
    cout &lt;&lt; ans.size() &lt;&lt; &quot;\\n&quot;;
    for (int i = 0; i &lt; ans.size(); i++)cout &lt;&lt; ans[i].id + 1 &lt;&lt; &quot; &quot; &lt;&lt; ans[i].l + 1 &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<p>注：该代码莫名RE，过不了，先放在这里，以后改。</p>
<h2>E. Add Modulo 10</h2>
<h4>思路</h4>
<p>​	找规律，发现 2 4 6 8有循环结。奇数均可转化为偶数，5 0特判即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    set&lt;ll&gt;u;
    for (int i = 0; i &lt; n; i++) {
        ll x; cin &gt;&gt; x;
        while (x % 10 != 2&amp;&amp;x%10!=0) {
            x += x % 10;
        }
        if (x % 10 == 0) {
            u.insert(x);
        }else u.insert(x % 20);
    }
    if (u.size() == 1)cout &lt;&lt; &quot;Yes\\n&quot;;
    else cout &lt;&lt; &quot;No\\n&quot;;
}
</code></pre>
`;export{n as attributes,t as html};
