const n={},t=`<h2>A. Odd One Out</h2>
<h4>思路</h4>
<p>​	三个数选个最小值。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll a, b, c; cin &gt;&gt; a &gt;&gt; b &gt;&gt; c;
    if (a == b)cout &lt;&lt; c &lt;&lt; &quot;\\n&quot;;
    else if (a == c)cout &lt;&lt; b &lt;&lt; &quot;\\n&quot;;
    else cout &lt;&lt; a &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>B. Not Quite Latin Square</h2>
<h4>思路</h4>
<p>​	给定一个3*3的二维矩阵，每行每列均有一组abc，找到？位置硬判就行。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    char o[4][4];
    for (int i = 1; i &lt;= 3; i++) {
        for (int j = 1; j &lt;= 3; j++) {
            cin &gt;&gt; o[i][j];
        }
    }
    for (int i = 1; i &lt;= 3; i++) {
        bool u = 0;
        int v[3] = { 0 };
        for (int j = 1; j &lt;= 3; j++) {
            v[o[i][j] - 'A']++;
            if (o[i][j] == '?') {
                u = 1;
            }
        }
        if (u) {
            for (int i = 0; i &lt; 3; i++) {
                if (v[i] == 0) {
                    cout &lt;&lt; (char)(i + 'A') &lt;&lt; &quot;\\n&quot;;
                    return;
                }
            }
        }
    }
}
</code></pre>
<h2>C. Can I Square?</h2>
<h4>思路</h4>
<p>​	给一堆1*1的小方块，问可以不可以组成正方形。开平方判断没有小数即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    ll sum = 0;
    for (int i = 1; i &lt;= n; i++) {
        ll x; cin &gt;&gt; x;
        sum += x;
    }
    if (ceil(sqrt(sum)) == floor(sqrt(sum))) {
        cout &lt;&lt; &quot;YES\\n&quot;;
    }
    else {
        cout &lt;&lt; &quot;NO\\n&quot;;
    }
}
</code></pre>
<h2>D. Unnatural Language Processing</h2>
<h4>思路</h4>
<p>​	字符串构造问题，按照给定规则构造字符串。我们倒序剪切字符串，需要注意的是，当连续的两个字母均为辅音的时候，中间必然存在'.'，所以我们只需要先判断两辅音连着的情况。然后将该问题排除后，我们只需要解决元辅音交替的情况下，该怎么处理。对于该问题，我们只需要在每三个后面加一个'.'即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">#include &lt;iostream&gt; 
#include &lt;algorithm&gt;
#include &lt;queue&gt;
#include &lt;cmath&gt;
#include &lt;deque&gt;
#include &lt;stack&gt;
#include &lt;cstring&gt;
#include &lt;string&gt;
#include &lt;map&gt;
#include &lt;vector&gt;
#include &lt;cstdlib&gt;
#include &lt;list&gt;
#include &lt;set&gt;
#include &lt;numeric&gt;
#include &lt;unordered_map&gt;
#define ll long long
#define ld long double
#define ull unsigned long long
#define Mod 998244353
#define PI acos(-1);
#define MAXN 0x7fffffff
bool cmps(ll a, ll b) { return a &lt; b; } //small
bool cmpb(ll a, ll b) { return a &gt; b; } //big
bool dcmps(double a, double b) { return a &lt; b; } //small
bool dcmpb(double a, double b) { return a &gt; b; } //big
using namespace std;
void fastread() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
};
void solve() {
    ll n; cin &gt;&gt; n;
    string k; cin &gt;&gt; k;
    vector&lt;string&gt;p;
    map&lt;char, ll&gt;pp;
    pp['a'] = pp['e'] = 1;
    for (int i = n - 1; i &gt;= 0;) {
        if (pp[k[i]]) {
            p.push_back(k.substr(i - 1, 2));
            i -= 2;
        }
        else {
            p.push_back(k.substr(i - 2, 3));
            i -= 3;
        }
    }
    reverse(p.begin(), p.end());
    for (int i = 0; i &lt; p.size();i++) {
        cout &lt;&lt; p[i];
        if (i != p.size() - 1)cout &lt;&lt; &quot;.&quot;;
        else cout &lt;&lt; &quot;\\n&quot;;
    }
}
int main() {
    fastread();
    ll t = 1;
    cin &gt;&gt; t;
    while (t--) {
        solve();
    }
    return 0;
}
</code></pre>
<h2>E. Romantic Glasses</h2>
<h4>思路</h4>
<p>​	对于一整组序列的杯子，我们可以求出两组的前缀和数组suma，sumb。原公式可写为：sumai-sumaj=sumbi-sumbj，然后我们可以化简公式为:sumai-sumbi=sumaj-sumbj。观察该式子即可得出，只要出现两次以上对应的前缀和差值，即可达成条件。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">ll o[210000];
ll suma[210000];
ll sumb[210000];
void solve() {
    ll n;cin&gt;&gt;n;
    ll sum=0;
    suma[0]=0;
    sumb[0]=0;
    map&lt;ll,ll&gt;p;
    bool u=0;
    p[0]++;
    for(int i=1;i&lt;=n;i++){
        cin&gt;&gt;o[i];
        if(i%2==1){
            suma[i]=suma[i-1]+o[i];
            sumb[i]=sumb[i-1];
        }else{
            suma[i]=suma[i-1];
            sumb[i]=sumb[i-1]+o[i];
        }
        p[suma[i]-sumb[i]]++;
        if(p[suma[i]-sumb[i]]==2)u=1;
    }
    if(u)cout&lt;&lt;&quot;YES\\n&quot;;
    else cout&lt;&lt;&quot;NO\\n&quot;;
}
</code></pre>
<h2>F. Greetings</h2>
<h4>思路</h4>
<p>​	对于每个人来说，当他的终点和出发点间完全包含另一个点的起点和终点，那么它必然会有一次相遇。排序后二分即可。</p>
<p>​	注：map中的键是递增序列，所以相当于直接排序起点。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    vector&lt;int&gt;o(n);
    map&lt;int, int&gt;p;
    for (int i = 0; i &lt; n; i++) {
        ll a; cin &gt;&gt; a;
        ll b; cin &gt;&gt; b;
        o[i] = b;
        p[a] = b;
    }
    sort(o.begin(), o.end());
    ll ans = 0;
    for (auto x:p) {
        auto id = lower_bound(o.begin(), o.end(), x.second);
        ans += id-o.begin();
        o.erase(id);
    } 
    cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>G. Bicycles</h2>
<h4>思路</h4>
<p>​	给定一个带有边权的无向图，求1-&gt;n所用的最短时间。</p>
<p>​	最短路Dijkstra堆优化，构建dis数组时需要构建二维数组，第一维存取到哪一点，第二维存取在该点的速度。然后dijkstra计算1到n的每个点的最短路，速度根据题目中的计算式每次都取最权值最小的。最后遍历dis数组，得出最短时间。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">struct node {
    ll id;
    ll dis;
    ll val;
    node(ll id, ll dis, ll val) {
        this-&gt;id = id;
        this-&gt;dis = dis;
        this-&gt;val = val;
    }
    bool operator &gt; (const node&amp; t) const
    {
        return dis &gt; t.dis;
    }
};
ll dis[1100][1100];
ll v[1100][1100];
ll cost[1100];
vector&lt;node&gt;ditu[1100];
ll n, m;
void Dijkstra(){
    for (int i = 1; i &lt;= 1000; i++) {
        for (int j = 0; j &lt;= 1000; j++) {
            dis[i][j] = 5e18;
        }
    }
    priority_queue&lt;node, vector&lt;node&gt;, greater&lt;node&gt;&gt;p;
    p.push(node(1, 0, cost[1]));
    dis[1][cost[1]] = 0;
    while (p.size()) {
        node mid = p.top();
        ll x = mid.id;
        ll y = mid.val;
        p.pop();
        if (v[x][y] == 1)continue;
        v[x][y] = 1;
        for (int i = 0; i &lt; ditu[x].size(); i++) {
            ll len = ditu[x][i].dis;
            ll to = ditu[x][i].id;
            ll z = min(y, cost[to]);
            if (dis[to][z] &gt; dis[x][y] + len * y) {
                dis[to][z] = dis[x][y] + len * y;
                p.push({ to , dis[to][z] , z });
            }
        }
    }
}
void solve() {
    cin &gt;&gt; n &gt;&gt; m;
    for (int i = 1; i &lt;= 1000; i++) {
        ditu[i].clear();
        for (int j = 0; j &lt;= 1000; j++) {
            v[i][j] = 0;
        }
    }
    for (int i = 1; i &lt;= m; i++) {
        ll x, y, dis; cin &gt;&gt; x &gt;&gt; y &gt;&gt; dis;
        ditu[x].push_back(node(y, dis, 0));
        ditu[y].push_back(node(x, dis, 0));
    }
    for (int i = 1; i &lt;= n; i++) {
        cin &gt;&gt; cost[i];
    }
    Dijkstra();
    ll ans = 5e18;
    for (int i = 0; i &lt;= 1000; i++) {
        ans = min(ans, dis[n][i]);
    }
    cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>总结</h2>
<p>​	赛时写到e，不多说了去练最短路了。</p>
`;export{n as attributes,t as html};
