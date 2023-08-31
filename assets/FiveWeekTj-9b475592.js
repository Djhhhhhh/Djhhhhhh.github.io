import{A as r,M as a,O as t,J as l,ai as n,u as c}from"./index-7b68c7ba.js";import{c as p,d as s,a as g}from"./el-main-2500c724.js";/* empty css               */const h=`<h2><a href="https://vjudge.net/problem/CodeForces-1794C">A - Scoring Subsequences</a></h2>
<h4>思路</h4>
<p>​		题目中给出的序列为非递减序列，我们应该在1-n组每一组中，从每一组的最后一个数往前选，若该元素o[l]&lt;i-l+1则该元素选不上，将l右移，统计每组答案的时候输出i-l+1即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">int o[Nn];
int main() {
    fastread();
    int t;
    cin &gt;&gt; t;
    while (t--) {
        cin &gt;&gt; n;
        for (int i = 1; i &lt;= n; i++)cin &gt;&gt; o[i];
        int l = 1;
        for (int i = 1; i &lt;= n; i++) {
            while (l &lt; i &amp;&amp; o[l] &lt; i - l + 1)l++;
            cout &lt;&lt; i - l + 1 &lt;&lt; &quot; &quot;;
        }
        cout &lt;&lt; &quot;\\n&quot;;
    }
    return 0;
}
</code></pre>
<h2><a href="https://vjudge.net/problem/CodeForces-716B">B - Complete the Word</a></h2>
<h4>思路</h4>
<p>​	题目让你在给定的字符串中，寻找一个包含'A'-'Z'的子串，字符串中的'?'可以任意更改为任意字母。</p>
<p>​	简单看一下，这个题目很容易理解，并且不难。但是，在做题的过程中有很多坑点需要注意。第一点，要输出的是修改过后的字符串，也就是将原串修改后输出。第二点，修改的子串必须连续，注意是子串，不是子序列。</p>
<p>​	坑点避免之后，我们只需要提前将前25个字符处理，如果访问的是一个'?'就让cnt+1，cnt是不同字母的个数，如果是字符，就让该字符的访问+1，如果是第一次访问，就让cnt+1。</p>
<p>​	此题更类似于单调队列，滑动窗口的做法。自认为在map匹配的时候处理的较好，可以借鉴一下。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">map&lt;char, int&gt;p;
int main() {
    fastread();
    string k;
    cin &gt;&gt; k;
    ll cnt = 0;
    ll l = -1;
    for (int i = 0; i &lt; 25; i++) {
        if (k[i] != '?') {
            p[k[i]]++;
            if (p[k[i]] == 1)cnt++;
        }
        else {
            cnt++;
        }
    }
    for (int i = 25; i &lt; k.size(); i++) {
        p[k[i]]++;
        if (k[i] == '?') {
            cnt++;
        }
        else {
            if (p[k[i]] == 1)cnt++;
        }
        if (l&gt;=0&amp;&amp;k[l] != '?') {
            p[k[l]]--;
            if (p[k[l]] == 0)cnt--;
        }
        else if(l&gt;=0) {
            cnt--;
        }
        l++;
        if (cnt == 26) {
            int lll = 0;
            for (int j = l; j &lt; l+26; j++) {
                while (p['A' + lll] == 1) {
                    lll++;
                }
                if (k[j] == '?') {
                    k[j] = 'A' + lll;
                    lll++;
                }
            }
            break;
        }
    }
    if (cnt == 26) {
        for (int i = 0; i &lt; k.size(); i++)if (k[i] == '?')k[i] = 'A';
        cout &lt;&lt; k;
    }
    else {
        cout &lt;&lt; &quot;-1&quot;;
    }
    return 0;
}
</code></pre>
<h2><a href="https://vjudge.net/problem/CodeForces-1007A">C - Reorder the Array</a></h2>
<h4>思路</h4>
<p>​	给你一个数列，让你构建出一个数列，数列的元素来自原数列，让构建的数列每个位置上的数比原位置上的数大的数量最大化。我们很容易想到，每个位置的数字要比之前的数字大，则让最大的数每次都替代比他小一点的数的位置就OK。裸的双指针题目，相较于其他题简单很多。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">int o[Nn];
int main() {
    int n;
    cin &gt;&gt; n;
    for (int i = 1; i &lt;= n; i++) {
        cin &gt;&gt; o[i];
    }
    ll r = n;
    ll l = n - 1;
    ll ans = 0;
    sort(o + 1, o + 1 + n);
    while (l &gt;= 1) {
        if (o[r] &gt; o[l]) {
            ans++;
            r--;
            l--;
        }
        else {
            l--;
        }
    }
    cout &lt;&lt; ans;
    return 0;
}
</code></pre>
<h2><a href="https://vjudge.net/problem/CodeForces-1265B">D - Beautiful Numbers</a></h2>
<h4>思路</h4>
<p>​	将每个数的位置记录下来。初始化双指针的左右，让左区间为最大，右区间为最小，这样可以使在缩区间的时候准确判断位置。然后从第一个数也就是1开始查询他所对应的位置，与左右区间的大小关系，将区间缩减。让左右区间的差值为你所查询的数就记录为美丽的数字，否则就不美丽。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">int o[20000000];
int wz[20000000];
int main() {
    int t;
    cin&gt;&gt;t;
    while(t--){
        int n;
        cin&gt;&gt;n;
        map&lt;int,int&gt;p;
        for(int i=1;i&lt;=n;i++){
            cin&gt;&gt;o[i];
            wz[o[i]]=i;
        }
        int l=n;
        int r=1;
        for(int i=1;i&lt;=n;i++){
            l=min(l,wz[i]);
            r=max(r,wz[i]);
            if(r-l+1==i){
                p[i]=1;
            }else{
                p[i]=0;
            }
        }
        for(int i=1;i&lt;=n;i++)cout&lt;&lt;p[i];
        cout&lt;&lt;&quot;\\n&quot;;
    }
    return 0;
}
</code></pre>
<h2><a href="https://vjudge.net/problem/CodeForces-1237B">E - Balanced Tunnel</a></h2>
<h4>思路</h4>
<p>​	该题目要求求出被罚款的车的数量，我们通过题意可知，每辆车能超车的数量是不定的，但是每个车只会罚一次，所以我们只需判定，在给定的两个序列里，如何通过最小次数的更改单个位置的序列位置来更改第一个序列，才能与第二个序列相同。对此，我们将题目中的反过来，反正就是两个序列，我们将第一个序列先输入，设定一个指针，指向第一个序列的头部，然后在输入第二个序列的每个数的时候，如果这个数字与我指针所指的数相同，然后让指针下移。如果不等，那么该位置的数必是超车过来的，所以让答案加一，然后指针位置不变就，通过map记录访问过该数字。map的作用是在每次输入时，是让指针不会指向指过的数字。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">ll o[100001];
map&lt;int,int&gt;p;
int n;
int main() {
    cin&gt;&gt;n;
    for(int i=1;i&lt;=n;i++){
        cin&gt;&gt;o[i];
    }
    ll l=1;
    int k;
    ll ans=0;
    for(int i=1;i&lt;=n;i++){
        cin&gt;&gt;k;
        while(p[o[l]]==1)l++;
        if(k==o[l]){
            l++;
        }else{
            p[k]=1;
            ans++;
        }
    }
    cout&lt;&lt;ans;
    return 0;
}
</code></pre>
<h2><a href="https://vjudge.net/problem/CodeForces-1676F">F - Longest Strike</a></h2>
<h4>思路</h4>
<p>​	题目思维难度不高，就是将每个数字出现的次数记录，出现次数大于m次的就是成立的数字，开辟一个数组，用于放置满足条件的数字，然后求数组中里数字连续最长的位置并记录左右位置即可。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">int main() {
    ll t;
    cin&gt;&gt;t;
    while(t--){
        ll o[200010]={0};
        ll q[200010]={0};
        int n,m;
        map&lt;int,int&gt;p;
        map&lt;int,int&gt;pp;
        cin&gt;&gt;n&gt;&gt;m;
        int cnt=0;
        for(int i=1;i&lt;=n;i++){
            cin&gt;&gt;o[i];
            p[o[i]]++;
            if(p[o[i]]&gt;=m&amp;&amp;pp[o[i]]==0){
                q[++cnt]=o[i];
                pp[o[i]]=1;
            }
        }
        sort(q+1,q+1+cnt);
        if(cnt==0){
            cout&lt;&lt;&quot;-1\\n&quot;;
            continue;
        }
        int l=1;
        int r=1;
        int ans=0;
        int begin=0;
        int end=0;
        while(r&lt;=cnt+1){
            if(q[r+1]==q[r]+1){
                r++;
            }else{
                if(r-l+1&gt;ans){
                    ans=r-l+1;
                    begin=q[l];
                    end=q[r];
                }
                l=r+1;
                r++;
            }
        }
        cout&lt;&lt;begin&lt;&lt;&quot; &quot;&lt;&lt;end&lt;&lt;&quot;\\n&quot;;
        p.clear();
        pp.clear();
    }
    return 0;
}
</code></pre>
<h2><a href="https://vjudge.net/problem/CodeForces-251A">G - Points on Line</a></h2>
<h4>思路</h4>
<p>​	该题要求你寻找符合要求的三元组个数，根据数据范围(1&lt;=n&lt;=10^5^，1&lt;=d&lt;=10^9^)，我们必不可能同时枚举三元组中三个数累计答案。题目已保证所有数据都是单调递增的了，所以我们可以很容易的想到，我们可以枚举三元组的第一个和最后一个数，看这两个数在数组中的位置，在这两个数之间的所有数，每个数都可以组成包含已经枚举过的两个数的三元组，由此可以引出双指针的解法。通过枚举三元组头尾两个数字，来快速计算出答案。</p>
<p>​	但本文对此进行了小优化，只通过枚举三元组最后一个数字，然后通过二分查找寻找到第一个数字，然后因为数列是单调递增的，查询到的数字的位置，与最后一个位置之间，所有的数字都可以两两配对与最后一个数字组成三元组。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">ll o[1000000];
int main() {
    ll n,m;
    cin&gt;&gt;n&gt;&gt;m;
    for(int i=1;i&lt;=n;i++){
        cin&gt;&gt;o[i];
    }
    ll ans=0;
    for(int i=1;i&lt;=n;i++){
        ll l=lower_bound(o+1,o+1+i,o[i]-m)-o;
        if(i-l+1&gt;=3)
            ans+=(i-l)*(i-l-1)/2;
    }
    cout&lt;&lt;ans&lt;&lt;&quot;\\n&quot;;
    return 0;
}
</code></pre>
`;const u=n("div",{class:"glass"},[n("h2",null,"作者碎碎念"),n("h4",null,"这周题有点难度。")],-1),d=["innerHTML"],b={__name:"FiveWeekTj",setup(f){return(m,_)=>{const i=s,e=g,o=p;return r(),a(o,null,{default:t(()=>[l(i,{width:"200px"},{default:t(()=>[u]),_:1}),l(e,null,{default:t(()=>[n("div",{innerHTML:c(h),class:"a"},null,8,d)]),_:1})]),_:1})}}};export{b as default};
