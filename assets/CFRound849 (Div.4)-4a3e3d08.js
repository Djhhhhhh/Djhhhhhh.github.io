const n={},t=`<h2><a href="https://vjudge.net/problem/CodeForces-1791A">A - Codeforces Checking</a></h2>
<h4>思路</h4>
<p>​	判断输入的字符是否为codeforces中的一个，经典div4白痴题。</p>
<h4>代码实现</h4>
<pre><code>int main() {
    int t;
    cin &gt;&gt; t;
    while (t--) {
        char a;
        cin &gt;&gt; a;
        switch (a) {
        case 'c':
        case 'o':
        case 'd':
        case 'e':
        case 'f':
        case 'r':
        case 's':
            cout &lt;&lt; &quot;YES\\n&quot;;
            break;
        default:
            cout &lt;&lt; &quot;NO\\n&quot;;
        }
    }
    return 0;
}
</code></pre>
<h2><a href="https://vjudge.net/problem/CodeForces-1791B">B - Following Directions</a></h2>
<h4>思路</h4>
<p>​	给你一个要走的方向序列，设定一个初始坐标(0,0)然后按照方向模拟，判断中途是否经过(1,1)即可。</p>
<h4>代码实现</h4>
<pre><code>int main() {
    int t;
    cin &gt;&gt; t;
    while (t--) {
        int n;
        cin &gt;&gt; n;
        string k;
        cin &gt;&gt; k;
        int x = 0;
        int y = 0;
        bool u = 0;
        for (int i = 0; i &lt; n; i++) {
            switch (k[i])
            {
            case 'U':x += 1; break;
            case 'R':y += 1; break;
            case 'D':x -= 1; break;
            case 'L':y -= 1; break;
            }
            if (x == 1 &amp;&amp; y == 1) {
                u = 1;
                break;
            }
        }
        if (u)cout &lt;&lt; &quot;YES\\n&quot;;
        else cout &lt;&lt; &quot;NO\\n&quot;;
    }
    return 0;
}
</code></pre>
<h2><a href="https://vjudge.net/problem/CodeForces-1791C">C - Prepend and Append</a></h2>
<h4>思路</h4>
<p>​	让你构造一个初始序列，可以通过有限次的题目中给的操作变成给定的01序列。</p>
<p>​	判断前后两个数字是否一个为0一个为1即可，输出最后剩下的数字。</p>
<h4>代码实现</h4>
<pre><code>int main() {
    int t;
    cin &gt;&gt; t;
    while (t--) {
        int n;
        cin &gt;&gt; n;
        deque&lt;char&gt;p;
        string k;
        cin &gt;&gt; k;
        for (int i = 0; i &lt; n; i++) {
            p.push_back(k[i]);
        }
        while ((p.back() == '0' &amp;&amp; p.front() == '1') || (p.back() == '1' &amp;&amp; p.front() == '0')) {
            p.pop_front(); p.pop_back();
            if (p.size() == 1 || p.size() == 0)break;
        }
        cout &lt;&lt; p.size() &lt;&lt; &quot;\\n&quot;;
    }
    return 0;
}
</code></pre>
<h2><a href="https://vjudge.net/problem/CodeForces-1791D">D - Distinct Split</a></h2>
<h4>思路</h4>
<p>​	给定一个字符串序列，让这个字符串从中间某个点分开，然后分别对两组序列中的不同字符进行统计，然后求和，使和最大。因为是在该序列中某个点断开，分为前后两半，所以我们可以从头进行一次遍历，判断到遍历所在位置之前的不同字符的个数。然后反向进行一次此操作，最后对于求出的两组进行求和处理，然后取最大值得出答案。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">ll sum1[NN] = { 0 };
ll sum2[NN] = { 0 };
int main() {
    int t;
    cin &gt;&gt; t;
    while (t--) {
        ll n;
        cin &gt;&gt; n;
        string k;
        cin &gt;&gt; k;
        ll p1[500] = { 0 };
        ll p2[500] = { 0 };
        ll ans = 0;
        ll cnt1 = 0;
        ll cnt2 = 0;
        for (int i = 0; i &lt; n; i++) {
            p1[k[i]]++;
            if (p1[k[i]] == 1) {
                cnt1++;
            }
            sum1[i] = cnt1;
        }
        for (int i = n-1; i &gt;= 0; i--) {
            p2[k[i]]++;
            if (p2[k[i]] == 1) {
                cnt2++;
            }
            sum2[i] = cnt2;
        }
        for (int i = 0; i &lt; n; i++)ans = max(ans, sum1[i] + sum2[i] - ((p1[k[i]] == 1 &amp;&amp; p2[k[i]] == 1) ? 1 : 0));
        cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
    }
    return 0;
}
</code></pre>
<h2><a href="https://vjudge.net/problem/CodeForces-1791E">E - Negatives and Positives</a></h2>
<h4>思路</h4>
<p>​	思维题，如果序列中存在偶数个-号那么求和即可，如果为奇数个，则求和后减去2倍的最小值。(自己考虑为什么说2倍最小值)。</p>
<h4>代码实现</h4>
<pre><code class="language-C++">ll o[NN];
int main() {
    fastread();
    int t;
    cin &gt;&gt; t;
    while (t--) {
        ll n;
        cin &gt;&gt; n;
        ll cnt = 0;
        ll ans = 0;
        for (int i = 1; i &lt;= n; i++) {
            cin &gt;&gt; o[i];
            if (o[i] &lt; 0) {
                cnt++;
                o[i] = abs(o[i]);
            }
            ans +=o[i];
        }
        sort(o + 1, o + 1 + n);
        if (cnt % 2 == 0) {
            cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
        }
        else {
            cout &lt;&lt; ans - 2*o[1] &lt;&lt; &quot;\\n&quot;;
        }
    }
    return 0;
}
</code></pre>
<h2><a href="https://vjudge.net/problem/CodeForces-1791F">F - Range Update Point Query</a></h2>
<h4>思路</h4>
<p>​	提取题目中重点，区间修改访问次数，单点输出。可以很直观的看出是线段树或者树状数组。</p>
<p>​	但此题线段树解法非正解，会被卡常数。</p>
<h4>代码实现</h4>
<p>​	树状数组解法（正解）</p>
<pre><code class="language-c++">ll o[NN];  //原数组
ll a[NN];   //树状数组
ll n;    //原数组大小
ll q;  //操作数
ll lowbit(ll x)
{
    return x &amp; (-x);
}
ll sum(ll x) {
    ll res = 0;
    for (ll i = x; i; i -= lowbit(i)) {
        res += a[i];
    }
    return res;
}
void add(ll x, ll y) {
    for (ll i = x; i &lt;= n; i += lowbit(i)) {
        a[i] += y;
    }
}
ll gxnum(ll x) {
    ll ret = 0;
    while (x)
    {
        ret += x % 10;
        x /= 10;
    }
    return ret;
}
int main() {
    fastread();
    ll t;
    cin &gt;&gt; t;
    while (t--) {
        cin &gt;&gt; n &gt;&gt; q;
        for (ll i = 1; i &lt;= n; i++) {
            cin &gt;&gt; o[i];
            a[i] = 0;
        }
        while (q--) {
            ll k;
            cin &gt;&gt; k;
            if (k == 1) {
                ll l, r;
                cin &gt;&gt; l &gt;&gt; r;
                add(l, 1);
                add(r + 1, -1);
            }
            else {
                ll x;
                cin &gt;&gt; x;
                ll ans = o[x];
                if (o[x] &gt;= 10) {
                    for (ll i = 1; i &lt;= sum(x); i++)
                    {
                        ans = gxnum(ans);
                        if (ans &lt; 10)
                            break;
                    }
                }
                cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
            }
        }
    }
    return 0;
}
</code></pre>
<p>线段树解法(非正解)</p>
<pre><code class="language-c++">struct xianduan {
    ll l;   //当前节点左边界
    ll r;   //当前节点右边界
    ll val;  //当前节点的值
    ll lazy;  //当前节点lazy标记
}tr[NN];   //大小  线段树如果没有特别处理叶子节点的话，要开 8倍
ll a[Nn * 2];  //原数组
void pushup(ll id) {  //更新父节点
    tr[id].val = tr[id * 2].val + tr[id * 2 + 1].val;
}
void pushdown(ll id) { //更新下面两个点的值和lazy值
    if (tr[id].lazy) {
        tr[id * 2].val += tr[id].lazy * (tr[id * 2].r - tr[id * 2].l + 1);
        tr[id * 2 + 1].val += tr[id].lazy * (tr[id * 2 + 1].r - tr[id * 2 + 1].l + 1);
        tr[id * 2].lazy += tr[id].lazy;
        tr[id * 2 + 1].lazy += tr[id].lazy;
        tr[id].lazy = 0;
    }
}
void build(ll id, ll l, ll r) {
    if (l == r) {
        tr[id] = { l,r,a[l] };
        return;
    }
    else {
        tr[id] = { l,r };
    }
    ll mid = (l + r) &gt;&gt; 1;
    build(id * 2, l, mid);
    build(id * 2 + 1, mid + 1, r);
    pushup(id);
}
void qjgx(ll id, ll l, ll r, ll val) {
    if (tr[id].l &gt;= l &amp;&amp; tr[id].r &lt;= r) {  //如果当前节点的值在询问的值中间，则直接返回
        tr[id].val += (tr[id].r - tr[id].l + 1) * val;
        tr[id].lazy += val;
        return;
    }
    pushdown(id);
    ll mid = (tr[id].l + tr[id].r) &gt;&gt; 1;
    if (l &lt;= mid)qjgx(id * 2, l, r, val);
    if (r &gt; mid)qjgx(id * 2 + 1, l, r, val);
    pushup(id);
}
ll query(ll id, ll l, ll r) {
    ll ans = 0;
    if (tr[id].l &gt;= l &amp;&amp; tr[id].r &lt;= r) {
        return tr[id].val;
    }
    pushdown(id);
    ll mid = (tr[id].l + tr[id].r) &gt;&gt; 1;
    if (l &lt;= mid)ans += query(id * 2, l, r);
    if (r &gt; mid)ans += query(id * 2 + 1, l, r);
    return ans;
}
ll o[Nn * 2];
ll cnt[Nn*2];
int main() {
    fastread();
    ll t;
    cin &gt;&gt; t;
    while (t--) {
        ll n, q;
        cin &gt;&gt; n &gt;&gt; q;
        for (ll i = 1; i &lt;= n; i++) {
            cin &gt;&gt; o[i];
            a[i] = 0;
            cnt[i] = 0;
        }
        build(1, 1, n);
        while (q--) {
            ll k;
            cin &gt;&gt; k;
            if (k == 1) {
                ll l, r;
                cin &gt;&gt; l &gt;&gt; r;
                qjgx(1, l, r, 1);
            }
            else {
                ll x;
                cin &gt;&gt; x;
                if (o[x] &gt;= 10) {
                    ll cnt1 = query(1, x, x);
                    while (cnt[x] &lt; cnt1) {
                        cnt[x]++;
                        ll u = 0;
                        while (o[x] != 0) {
                            u += o[x] % 10;
                            o[x] /= 10;
                        }
                        o[x] = u;
                    }
                }
                cout &lt;&lt; o[x] &lt;&lt; &quot;\\n&quot;;
            }
        }
    }
    return 0;
}
</code></pre>
`;export{n as attributes,t as html};
