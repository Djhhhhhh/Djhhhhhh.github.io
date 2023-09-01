import{A as l,M as r,O as t,J as i,ai as n,u as s}from"./index-ea24d3a4.js";import{c as p,d as g,a as c}from"./el-main-a6e86d0a.js";/* empty css               */const u=`<h2><a href="https://vjudge.net/problem/CodeForces-1549B">A - Gregor and the Pawn Game</a></h2>
<h4>思路</h4>
<p>​	只有第一行存在敌人，你的棋子从最后一行走上来，中间所有位置都没有敌人，所以中间只需要向上走，然后在走到第二行的位置上的时候，只需要给定你的棋子走步的一个优先级顺序，就可以判定出该棋子是否可以走到第一行上。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">int main() {
    int t;
    cin &gt;&gt; t;
    while (t--) {
        int n;
        cin &gt;&gt; n;
        string k, q;
        cin &gt;&gt; k &gt;&gt; q;
        ll ans = 0;
        for (int i = 0; i &lt; n; i++) {
            if (q[i] == '1') {
                if (k[i] == '0') {
                    k[i] = 2;
                    ans++;
                }
                else if (i &gt; 0 &amp;&amp; k[i - 1] == '1') {
                    k[i - 1] = 2;
                    ans++;
                }
                else if (k[i + 1] == '1') {
                    k[i + 1] = 2;
                    ans++;
                }
            }
        }
        cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
    }
    return 0;
}
</code></pre>
<h2><a href="https://vjudge.net/problem/CodeForces-1598A">B - Computer Game</a></h2>
<h4>思路</h4>
<p>​	不要想的太麻烦，只有不存在上下两个位置均被堵住，就一定能走到终点。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">int main() {
    int t;
    cin &gt;&gt; t;
    while (t--) {
        int n;
        cin &gt;&gt; n;
        string k, q;
        cin &gt;&gt; k &gt;&gt; q;
        bool u = 1;
        for (int i = 0; i &lt; n; i++)if (k[i] == q[i] &amp;&amp; k[i] == '1')u = 0;
        if (u) {
            cout &lt;&lt; &quot;YES\\n&quot;;
        }
        else {
            cout &lt;&lt; &quot;NO\\n&quot;;
        }
    }
    return 0;
}
</code></pre>
<h2><a href="https://vjudge.net/problem/CodeForces-1593B">C - Make it Divisible by 25</a></h2>
<h4>思路</h4>
<p>​	暴力即可，从后往前找，每找到0/5的位置就进行循环判断，取最小值。(理论来说，这两种操作各一次即可)</p>
<h4>代码实现</h4>
<pre><code class="language-c++">int main() {
    int t;
    cin &gt;&gt; t;
    while (t--) {
        string k;
        cin &gt;&gt; k;
        int ans = MAXN;
        for (int i = k.size(); i &gt;= 0; i--) {
            if (k[i] == '0') {
                for (int j = i - 1; j &gt;= 0; j--) {
                    if (k[j] == '0' || k[j] == '5') {
                        ans = min(ans, (int)k.size() - 2 - j);
                        break;
                    }
                }
            }
            else if(k[i]=='5') {
                for (int j = i - 1; j &gt;= 0; j--) {
                    if (k[j] == '2' || k[j] == '7') {
                        ans = min(ans, (int)k.size() - 2 - j);
                        break;
                    }
                }
            }
        }
        cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
    }
    return 0;
}
</code></pre>
<h2><a href="https://vjudge.net/problem/CodeForces-1033A">D - King Escape</a></h2>
<h4>思路</h4>
<p>​	在一个区块就可以。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">struct q {
    int x;
    int y;
}o[3];
int main() {
    int n;
    cin &gt;&gt; n;
    cin &gt;&gt; o[0].x &gt;&gt; o[0].y &gt;&gt; o[1].x &gt;&gt; o[1].y &gt;&gt; o[2].x &gt;&gt; o[2].y;
    if (o[1].x &lt; o[0].x &amp;&amp; o[2].x &lt; o[0].x &amp;&amp; o[1].y &lt; o[0].y &amp;&amp; o[2].y &lt; o[0].y) {
        cout &lt;&lt; &quot;YES\\n&quot;;
    }else  if (o[1].x &lt; o[0].x &amp;&amp; o[2].x &lt; o[0].x &amp;&amp; o[1].y &gt; o[0].y &amp;&amp; o[2].y &gt; o[0].y) {
        cout &lt;&lt; &quot;YES\\n&quot;;
    }
    else if (o[1].x &gt; o[0].x &amp;&amp; o[2].x &gt; o[0].x &amp;&amp; o[1].y &gt; o[0].y &amp;&amp; o[2].y &gt; o[0].y) {
        cout &lt;&lt; &quot;YES\\n&quot;;
    }
    else if (o[1].x &gt; o[0].x &amp;&amp; o[2].x &gt; o[0].x &amp;&amp; o[1].y &lt; o[0].y &amp;&amp; o[2].y &lt; o[0].y) {
        cout &lt;&lt; &quot;YES\\n&quot;;
    }
    else {
        cout &lt;&lt; &quot;NO\\n&quot;;
    }
    return 0;
}
</code></pre>
<h2><a href="https://vjudge.net/problem/CodeForces-1020B">E - Badge</a></h2>
<h4>思路</h4>
<p>​	根据题意模拟就行。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">int o[Nn];
int main() {
    int n;
    cin &gt;&gt; n;
    for (int i = 1; i &lt;= n; i++)cin &gt;&gt; o[i];
    for (int i = 1; i &lt;= n; i++) {
        map&lt;int, int&gt;p;
        int z = o[i];
        p[i]++;
        while (p[z]+1 &lt; 2) {
            p[z]++;
            z = o[z];
        }
        cout &lt;&lt; z &lt;&lt; &quot; &quot;;
    }
    return 0;
}
</code></pre>
<h2><a href="https://vjudge.net/problem/CodeForces-1829E">F - The Lakes</a></h2>
<h4>思路</h4>
<p>​	正儿八经的搜索题，只需要搜有水的位置，把该水坑旁边有水的地方加上去重复以上操作。注意初始化问题，否则会超时。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">int ditu[1002][1002];
int v[1002][1002];
int ans = 0;
int ans2 = 0;
int fx[4][2] = { {1,0},{0,1},{-1,0},{0,-1} };
void dfs(int x, int y) {
    v[x][y] = 1;
    for (int i = 0; i &lt; 4; i++) {
        if (v[x + fx[i][0]][y + fx[i][1]] == 0 &amp;&amp; ditu[x + fx[i][0]][y + fx[i][1]] != 0) {
            ans2 += ditu[x + fx[i][0]][y + fx[i][1]];
            dfs(x + fx[i][0], y + fx[i][1]);
        }
    }
}
int main() {
    int t;
    cin &gt;&gt; t;
    while (t--) {
        ans = 0;
        int n, m;
        cin &gt;&gt; n &gt;&gt; m;
        for (int i = 0; i &lt;= n+1; i++) {
            for (int j = 0; j &lt;= m+1; j++) {
                v[i][j] = 0;
                ditu[i][j] = 0;
            }
        }
        for (int i = 1; i &lt;= n; i++) {
            for (int j = 1; j &lt;= m; j++) {
                cin &gt;&gt; ditu[i][j];
            }
        }
        for (int i = 1; i &lt;= n; i++) {
            for (int j = 1; j &lt;= m; j++) {
                if (ditu[i][j] &gt; 0&amp;&amp;v[i][j]==0) {
                    ans2 = ditu[i][j];
                    dfs(i, j);
                    ans = max(ans2, ans);
                }
            }
        }
        cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
    }
    return 0;
}
</code></pre>
<h2><a href="https://vjudge.net/problem/CodeForces-1859C">G - Another Permutation Problem</a></h2>
<h4>思路</h4>
<p>​	啥也别说了，暴力就完事了。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">int main() {
    ll t;
    cin &gt;&gt; t;
    while (t--) {
        ll n;
        cin &gt;&gt; n;
        ll ans1 = 0;
        for (ll i = 1; i &lt;= n; i++) {
            ll q = 0;
            ll ans2 = 0;
            for (ll l = 1; l &lt; i; l++) {
                q = max(l * l, q);
                ans2 += l * l;
            }
            ll rr = n;
            for (ll r = i; r &lt;= n; r++) {
                q = max(r * rr, q);
                ans2 += r * rr;
                rr--;
            }
            ans1 = max(ans2-q, ans1);
        }
        cout &lt;&lt; ans1 &lt;&lt; &quot;\\n&quot;;
    }
    return 0;
}
</code></pre>
`;const m=n("div",{class:"glass"},[n("h2",null,"作者碎碎念"),n("h4",null,"这周题有点简单。")],-1),h=["innerHTML"],_={__name:"SixWeekTj",setup(f){return(d,x)=>{const e=g,o=c,a=p;return l(),r(a,null,{default:t(()=>[i(e,{width:"200px"},{default:t(()=>[m]),_:1}),i(o,null,{default:t(()=>[n("div",{innerHTML:s(u),class:"a"},null,8,h)]),_:1})]),_:1})}}};export{_ as default};
