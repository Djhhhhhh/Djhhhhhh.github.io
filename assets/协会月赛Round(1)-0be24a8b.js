const n={},t=`<h2>M - The Good Array</h2>
<h4>思路</h4>
<p>​	求前n个位置上最多为多少，然后最后一个位置独立出来，因为他无论如何都是1。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n, m; cin &gt;&gt; n &gt;&gt; m;
    ll ans = 0;
    for (int i = 1; i &lt; n; i++) {
        ans = max(ans, (ll)ceil(1.0 * i / m));
    }
    cout &lt;&lt; ans + 1 &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>L - New Palindrome</h2>
<h4>思路</h4>
<p>​	判断改变顺序后是否仍为回文字符串。我们已知给定的已经是回文串，我们只需要判断是否存在两种以上的字符即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    set&lt;char&gt;u;
    string k; cin &gt;&gt; k;
    for (int i = 0; i &lt; k.size() / 2; i++) {
        u.insert(k[i]);
    }
    if (u.size() &gt;= 2)cout &lt;&lt; &quot;YES\\n&quot;;
    else cout &lt;&lt; &quot;NO\\n&quot;;
}
</code></pre>
<h2>K - We Need the Zero</h2>
<h4>思路</h4>
<p>​	异或具有以下性质。</p>
<p>（1）交换律： A ^ B = B ^ A</p>
<p>（2）结合律： ( A ^ B ) ^ C = A ^ ( B ^ C )</p>
<p>（3）自反性： A ^ B ^ B = A （由结合律可推： A ^ B ^ B = A ^ ( B ^ B ) = A ^ 0 = A）</p>
<p>​	根据以上性质可知，我们只需要将整组序列异或在一起，然后将最后那个数字保留下来。重新检验原数组是否成立，如果成立则输出，否则输出-1。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    vector&lt;ll&gt;o(n);
    for (int i = 0; i &lt; n; i++)cin &gt;&gt; o[i];
    ll ans = o[0];
    for (int i = 1; i &lt; n; i++) {
        ans ^= o[i];
    }
    ll check = o[0] ^ ans;
    for (int i = 1; i &lt; n; i++) {
        check ^= (o[i] ^ ans);
    }
    if (check == 0)
        cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
    else cout &lt;&lt; &quot;-1\\n&quot;;
}
</code></pre>
<h2>J - Easy As ABC</h2>
<h4>思路</h4>
<p>​	爆搜。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">char ditu[3][3];
ll v[3][3];
string ans = &quot;CCC&quot;;
ll fx[8][2] = { {1,0},{0,1},{1,1},{-1,0},{0,-1},{-1,-1},{-1,1},{1,-1} };
void dfs(ll x, ll y, string k) {
    if (k.size() == 3) {
        ans = min(ans, k);
        return;
    }
    for (int i = 0; i &lt; 8; i++) {
        ll xx = fx[i][0] + x;
        ll yy = fx[i][1] + y;
        if (xx &gt;= 0 &amp;&amp; xx &lt; 3 &amp;&amp; yy &gt;= 0 &amp;&amp; yy &lt; 3&amp;&amp;v[xx][yy]==0) {
            v[xx][yy] = 1;
            dfs(xx, yy, k + ditu[xx][yy]);
            v[xx][yy] = 0;
        }
    }
}
void solve() {
    for (int i = 0; i &lt; 3; i++) {
        for (int j = 0; j &lt; 3; j++) {
            cin &gt;&gt; ditu[i][j];
        }
    }
    for (int i = 0; i &lt; 3; i++) {
        for (int j = 0; j &lt; 3; j++) {
            string x = &quot;&quot;;
            x += ditu[i][j];
            v[i][j] = 1;
            dfs(i, j, x);
            v[i][j] = 0;
        }
    }
    cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>I - Different Differences</h2>
<h4>思路</h4>
<p>​	从最小值开始加差值，看剩下的数字是否足够把数组填满即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n, m; cin &gt;&gt; n &gt;&gt; m;
    ll x = 1;
    ll cha = 1;
    ll cnt = 1;
    cout &lt;&lt; 1 &lt;&lt; &quot; &quot;;
    while (m - (x + cha) &gt;= n - cnt-1&amp;&amp;cnt&lt;n) {
        x += cha;
        cout &lt;&lt; x &lt;&lt; &quot; &quot;;
        cha++;
        cnt++;
    }
    for (int i = cnt; i &lt; n; i++) {
        cout &lt;&lt; ++x &lt;&lt; &quot; &quot;;
    }
    cout &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>H - Red and Blue</h2>
<h4>思路</h4>
<p>​	求两数组的序列最大值，然后加和即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    vector&lt;ll&gt;o1(n);
    for (int i = 0; i &lt; n; i++)cin &gt;&gt; o1[i];
    ll ans1 = 0;
    ll sum = 0;
    for (int i = 0; i &lt; n; i++) {
        sum += o1[i];
        ans1 = max(ans1, sum);
    }
    ll m; cin &gt;&gt; m;
    vector&lt;ll&gt;o2(m);
    for (int i = 0; i &lt; m; i++)cin &gt;&gt; o2[i];
    ll ans2 = 0;
    ll sum2 = 0;
    for (int i = 0; i &lt; m; i++) {
        sum2 += o2[i];
        ans2 = max(ans2, sum2);
    }
    cout &lt;&lt; ans1 + ans2 &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>G - Swap Game</h2>
<h4>思路</h4>
<p>​	对于两个人来说，选取对自己来说最小的即可，对于Bob来说，如果第一个数值，与最小值相等，那么Bob就必胜，否则Alice必胜。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    vector&lt;ll&gt;o(n);
    ll mn = pow(2, 31) - 1;
    for (int i = 0; i &lt; n; i++) {
        cin &gt;&gt; o[i];
        mn = min(mn, o[i]);
    }
    if (o[0] == mn) {
        cout &lt;&lt; &quot;Bob\\n&quot;;
    }
    else {
        cout &lt;&lt; &quot;Alice\\n&quot;;
    }
}
</code></pre>
<h2>F - Poisoned Dagger</h2>
<h4>思路</h4>
<p>​	答案最小化，二分答案。根据题意写即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">ll n, h;
ll o[210];
bool check(ll x) {
    ll hh = 0;
    for (int i = 1; i &lt; n; i++) {
        hh += min(o[i] - o[i - 1], x);
    }
    hh += x;
    if (hh &gt;= h)return true;
    return false;
}
void solve() {
    cin &gt;&gt; n &gt;&gt; h;
    for (int i = 0; i &lt; n; i++)cin &gt;&gt; o[i];
    ll l = 0;
    ll r = pow(2, 63) - 1;
    ll ans = pow(2, 63) - 1;
    while (l &lt;= r) {
        ll mid = l + r &gt;&gt; 1;
        if (check(mid)) {
            ans = min(ans, mid);
            r = mid - 1;
        }
        else {
            l = mid + 1;
        }
    }
    cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>E - Number Game</h2>
<h4>思路</h4>
<p>​	答案最大化，二分答案，根据题意模拟即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">ll n;
vector&lt;ll&gt;o(210);
bool check(ll x) {
    vector&lt;ll&gt;p(n);
    for (int i = 0; i &lt; n; i++) {
        p[i] = o[i];
    }
    for (int i = 1; i &lt;= x; i++) {
        if (p.size()) {
            sort(p.begin(), p.end(), cmpb);
            bool u = 1;
            for (int j = 0; j &lt;p.size(); j++) {
                if (p[j] &lt;= x - i + 1) {
                    p.erase(p.begin() + j);
                    u = 0;
                    break;
                }
            }
            if (u) {
                return false;
            }
            if (p.size())p[p.size() - 1] += x - i + 1;
        }
        else {
            return false;
        }
    }
    return true;
}
void solve() {
    cin &gt;&gt; n;
    for (int i = 0; i &lt; n; i++)cin &gt;&gt; o[i];
    ll l = 0;
    ll r = pow(2, 31) - 1;
    ll ans = 0;
    while (l &lt;= r) {
        ll mid = l + r &gt;&gt; 1;
        if (check(mid)) {
            ans = max(ans, mid);
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }
    }
    cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>D - Robot Factory</h2>
<h4>思路</h4>
<p>​	机器人走迷宫，爆搜模拟即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">ll ditu[2100][2100];
ll v[2100][2100] = { 0 };
ll fx[4][2] = { {0,-1}/*1*/,{1,0}/*2*/,{0,1}/*4*/ ,{-1,0}/*8*/ };
ll n, m;
ll sum = 0;
void dfs(ll x, ll y) {
    for (int i = 0; i &lt; 4; i++) {
        if ((ditu[x][y] &amp; (1&lt;&lt;i)) == 0) {
            ll xx = x + fx[i][0];
            ll yy = y + fx[i][1];
            ll last = 0;
            if (i == 0)last = 4;
            else if (i == 1)last = 8;
            else if (i == 2)last = 1;
            else if (i == 3)last = 2;
            if (xx &gt;= 1 &amp;&amp; xx &lt;= n &amp;&amp; yy &gt;= 1 &amp;&amp; yy &lt;= m &amp;&amp; v[xx][yy] == 0 &amp;&amp; ((ditu[xx][yy] &amp; last)==0)) {
                v[xx][yy] = 1;
                sum++;
                dfs(xx, yy);
            }
        }
    }
}
void solve() {
    cin &gt;&gt; n &gt;&gt; m;
    for (int i = 1; i &lt;= n; i++) {
        for (int j = 1; j &lt;= m; j++) {
            cin &gt;&gt; ditu[i][j];
        }
    }
    /*for (int i = 1; i &lt;= n; i++) {
        for (int j = 1; j &lt;= m; j++) {
            ll x = ditu[i][j];
            ll z = 0;
            ll cnt = 0;
            while (x) {
                z += (x % 2) * (pow(10, cnt++));
                x /= 2;
            }
            printf(&quot;%04d &quot;, z);
        }
        cout &lt;&lt; &quot;\\n&quot;;
    }*/
    vector&lt;ll&gt;ans;
    for (int i = 1; i &lt;= n; i++) {
        for (int j = 1; j &lt;= m; j++) {
            if (v[i][j] == 0) {
                v[i][j] = 1;
                sum = 1;
                dfs(i, j);
                ans.push_back(sum);
            }
        }
    }
    sort(ans.begin(), ans.end(), cmpb);
    for (int i = 0; i &lt; ans.size(); i++) {
        cout &lt;&lt; ans[i] &lt;&lt; &quot; &quot;;
    }
    cout &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2><a href="https://vjudge.net/problem/CodeForces-1842C">C - Tenzing and Balls</a></h2>
<h4>思路</h4>
<p>​	DP，考虑每个位置之前最多可以删下去几个球。因为只有值相等的时候可以删，所以我们记录之前值位置即可，计算是否变大。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    vector&lt;ll&gt;o(n+1,0);
    for (int i = 1; i &lt;= n; i++)cin &gt;&gt; o[i];
    vector&lt;ll&gt;dp(n+1, 0);
    vector&lt;ll&gt;v(n+1, -pow(2, 31));
    for (int i = 1; i &lt;= n; i++) {
        dp[i] = max(dp[i - 1], v[o[i]] + i + 1);
        v[o[i]] = max(v[o[i]], dp[i - 1] - i);
    }
    cout &lt;&lt; dp[n] &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2><a href="https://vjudge.net/problem/CodeForces-1857E">B - Power of Points</a></h2>
<h4>思路</h4>
<p>​	本题思路以及代码均学习自蒋老师。</p>
<p>​	从中学习到C++11的另一个新特性。</p>
<p>​	我们需要对点进行排序，然后将最左端的点答案求出，然后递推转移即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    vector&lt;ll&gt;o(n);
    for (int i = 0; i &lt; n; i++)cin &gt;&gt; o[i];
    vector&lt;ll&gt;id(n);
    iota(id.begin(), id.end(), 0);
    sort(id.begin(), id.end(), [&amp;](ll a, ll b) {
        return o[a] &lt; o[b];
    });
    vector&lt;ll&gt;ans(n);
    ll x = accumulate(o.begin(), o.end(), 0ll) - o[id[0]] * n*1ll + n;
    for (int i = 0; i &lt; n; i++) {
        if (i &gt; 0) {
            x += (o[id[i]] - o[id[i - 1]]) * (i - (n - i)) * 1ll;
        }
        ans[id[i]] = x;
    }
    for (int i = 0; i &lt; n; i++) {
        cout &lt;&lt; ans[i] &lt;&lt; &quot; &quot;;
    }
    cout &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
`;export{n as attributes,t as html};
