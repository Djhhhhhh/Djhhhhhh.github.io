const n={},t=`<h2><a href="https://codeforces.com/contest/1863/problem/A">A. Channel</a></h2>
<h4>思路</h4>
<p>​	给你一个现在观看人数，和一个目标观看人数，如果在访问中+号的数量加上最初观看人数大于等于目标观看人数，则maybe，在输入访问记录的期间记录+和-的数量，进行运算来判断中途是否有可能所有人都在线。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">int main() {
    int t;
    cin &gt;&gt; t;
    while (t--) {
        int n, a, q;
        cin &gt;&gt; n &gt;&gt; a &gt;&gt; q;
        char k;
        ll cnt1 = 0;
        ll cnt2 = 0;
        int v = 0;
        for (int i = 0; i &lt; q; i++) {
            cin &gt;&gt; k;
            if (k == '-') {
                cnt1++;
            }
            else {
                cnt2++;
            }
            if (a + cnt2 - cnt1 == n) {
                v = 1;
            }
        }
        if (v || n == a) {
            cout &lt;&lt; &quot;YES\\n&quot;;
        }
        else if (a + cnt2 &gt;= n) {
            cout &lt;&lt; &quot;MAYBE\\n&quot;;
        }
        else {
            cout &lt;&lt; &quot;NO\\n&quot;;
        }
    }
    return 0;
}
</code></pre>
<h2><a href="https://codeforces.com/contest/1863/problem/B">B.Split Sort</a></h2>
<h4>思路</h4>
<p>​	给你一个序列，一种操作方式。根据观察，操作能改变的是非递增连续序列的顺序，所以我们只需要查询队列种存在多少种不同的顺序就是我们所要进行的操作数。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">ll o[1000000];
int main() {
    ll t;
    cin&gt;&gt;t;
    while(t--){
        ll n;
        cin&gt;&gt;n;
        map&lt;ll,ll&gt;p;
        ll ans=0;
        for(ll i=1;i&lt;=n;i++){
            cin&gt;&gt;o[i];
            p[o[i]]=i;
        }
        ll wz=p[n];
        for(ll i=n-1;i&gt;=1;i--){
            if(p[i]&gt;wz){
                ans++;
            }
            wz=p[i];
        }
        cout&lt;&lt;ans&lt;&lt;&quot;\\n&quot;;
    }   
    return 0;
}
</code></pre>
<h2><a href="https://codeforces.com/contest/1863/problem/C">C.MEX Repetition</a></h2>
<h4>思路</h4>
<p>​	这题很明显啊，就是个队列，把没存在过的数字加到队尾，每一次询问走一次。但是需要优化次数，我们可以发现每n+1次就是一个循环。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">int main() {
    ll t;
    cin&gt;&gt;t;
    while(t--){
        ll n,m;
        cin&gt;&gt;n&gt;&gt;m;
        deque&lt;ll&gt;k;
        map&lt;ll,ll&gt;p;
        m=m%(n+1);
        for(ll i=1;i&lt;=n;i++){
            ll a;
            cin&gt;&gt;a;
            k.push_back(a);
            p[a]=1;
        }
        for(int i=0;i&lt;=n;i++){
            if(p[i]==0){
                k.push_back(i);
                break;
            }
        }
        for(ll i=1;i&lt;=m;i++){
            k.push_front(k.back());
            k.pop_back();
        }
        for(ll i=1;i&lt;=n;i++){
            cout&lt;&lt;k.front()&lt;&lt;&quot; &quot;;
            k.pop_front(); 
        }
        cout&lt;&lt;&quot;\\n&quot;;
    }   
    return 0;
}
</code></pre>
`;export{n as attributes,t as html};
