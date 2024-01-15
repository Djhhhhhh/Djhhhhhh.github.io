const n={},t=`<h2>A. Square</h2>
<h4>思路</h4>
<p>​	排序边，每两个必然可组成相邻的边。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    vector&lt;pair&lt;ll, ll&gt;&gt;o(4);
    for (int i = 0; i &lt; 4; i++)cin &gt;&gt; o[i].first &gt;&gt; o[i].second;
    sort(o.begin(), o.end(), [&amp;](pair&lt;ll, ll&gt; a, pair&lt;ll, ll&gt;b) {
        return a.first &lt; b.first;
        });
    cout &lt;&lt; abs(o[0].second - o[1].second) * abs(o[2].second - o[3].second) &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>B. Arranging Cats</h2>
<h4>思路</h4>
<p>​	先把一样的位置去除，然后数个数即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n; cin &gt;&gt; n;
    string k1, k2; cin &gt;&gt; k1 &gt;&gt; k2;
    ll ans = 0;
    for (int i = 0; i &lt; n; i++) {
        if (k2[i] == '1'&amp;&amp;k2[i]==k1[i]) {
            k2[i] = '0';
            k1[i] = '0';
        }
    }
    cout &lt;&lt; max(count(k1.begin(), k1.end(), '1'), count(k2.begin(), k2.end(), '1')) &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>C. Sending Messages</h2>
<h4>思路</h4>
<p>​	模拟，看关机合适还是待机合适。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n, f, a, b; cin &gt;&gt; n &gt;&gt; f &gt;&gt; a &gt;&gt; b;
    vector&lt;ll&gt;o(n);
    for (int i = 0; i &lt; n; i++)cin &gt;&gt; o[i];
    vector&lt;ll&gt;cha(n + 1);
    for (int i = 0; i &lt; n; i++) {
        if (i == 0)cha[i] = o[i];
        else cha[i] = o[i] - o[i - 1];
    }
    for (int i = 0; i &lt; n; i++) {
        if (cha[i] * a &gt;=  b) {
            f -=  b;
        }
        else {
            f -= a * cha[i];
        }
        if (f &lt;= 0) {
            cout &lt;&lt; &quot;NO\\n&quot;;
            return;
        }
    }
    cout &lt;&lt; &quot;YES\\n&quot;;
}
</code></pre>
<h2>D. Very Different Array</h2>
<h4>思路</h4>
<p>​	正跑一次差，反跑一次，然后暴力和值即可。注意两个边界。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll n, m; cin &gt;&gt; n &gt;&gt; m;
    vector&lt;ll&gt;o1(n);
    vector&lt;ll&gt;sum1(n);
    vector&lt;ll&gt;o2(m);
    vector&lt;ll&gt;sum2(n);
    for (int i = 0; i &lt; n; i++)cin &gt;&gt; o1[i];
    for (int i = 0; i &lt; m; i++)cin &gt;&gt; o2[i];
    sort(o1.begin(), o1.end(), cmps);
    sort(o2.begin(), o2.end(), cmps);
    for (int i = 0; i &lt; n; i++) {
        sum1[i] = abs(o1[i] - o2[m - 1 - i]);
    }
    for (int i = n-1; i &gt;= 0; i--) {
        sum2[i] = abs(o1[i] - o2[n - i - 1]);
    }
    ll ans = 0;
    for (int i = 1; i &lt; n; i++) {
        sum1[i] += sum1[i - 1];
    }
    for (int i = n - 2; i &gt;= 0; i--) {
        sum2[i] += sum2[i + 1];
    }
    for (int i = 0; i &lt; n-1; i++) {
        ans = max( sum1[i] + sum2[i + 1], ans );
    }
    cout &lt;&lt; max({ ans ,sum1[n - 1],sum2[0] }) &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>E. Eat the Chip</h2>
<h4>思路</h4>
<p>​	看代码吧。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">void solve() {
    ll h, w, xa, ya, xb, yb; cin &gt;&gt; h &gt;&gt; w &gt;&gt; xa &gt;&gt; ya &gt;&gt; xb &gt;&gt; yb;
    if (xb &lt;= xa) {
        cout &lt;&lt; &quot;Draw\\n&quot;;
        return;
    }
    if ((xb - xa) % 2 == 1) {//A抓B
        ll cnta = floor((xb - xa) / 2.0);//在达到临界值之前a能跑多少步
        ll cntb = max(cnta, 0ll);//在达到临界值之前b能跑多少步
        if (ya &lt;= yb) {//B尽量往右跑
            xb -= cntb;
            yb = min(yb + cntb, w);
            xa += cnta;
            ya = min(yb, ya + cnta);
            if (ya == yb||ya+1==yb||ya-1==yb) {
                cout &lt;&lt; &quot;Alice\\n&quot;;
                return;
            }
            else {
                cout &lt;&lt; &quot;Draw\\n&quot;;
               return;
            }
        }
        else {//B尽量往左跑
            xb -= cntb;
            yb = max(yb - cntb, 1ll);
            xa += cnta;
            ya = max(yb, ya - cnta);
            if (ya == yb || ya + 1 == yb || ya - 1 == yb) {
                cout &lt;&lt; &quot;Alice\\n&quot;;
                return;
            }
            else {
                cout &lt;&lt; &quot;Draw\\n&quot;;
                return;
            }
        }
    }
    else {//B抓A
        ll cnta = (xb - xa) / 2;//在达到临界值之前a能跑多少步
        ll cntb = cnta - 1;//在达到临界值之前b能跑多少步
        if (ya &lt;= yb) {//A尽量往左跑
            xa += cnta;
            ya = max(1ll, ya - cnta);
            xb -= cntb;
            yb = max(yb - cntb, ya);
            if (ya == yb||ya==yb-1||ya==yb+1) {
                cout &lt;&lt; &quot;Bob\\n&quot;;
                return;
            }
            else {
                cout &lt;&lt; &quot;Draw\\n&quot;;
                return;
            }
        }
        else {//A尽量往右跑
            xa += cnta;
            ya = min(w, ya + cnta);
            xb -= cntb;
            yb = min(yb + cntb, ya);
            if (ya == yb || ya == yb - 1 || ya == yb + 1) {
                cout &lt;&lt; &quot;Bob\\n&quot;;
                return;
            }
            else {
                cout &lt;&lt; &quot;Draw\\n&quot;;
                return;
            }
        }
    }
}
</code></pre>
`;export{n as attributes,t as html};
