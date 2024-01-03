const t={},n=`<h2><a href="https://codeforces.com/contest/1861/problem/A">A.Prime Deletion</a></h2>
<h4>思路</h4>
<p>​	因给定的数列是由不重复的1-9个数字组成，那么我们只需要拿出第一位然后输出一个十位是该数字的质数就能满足题意。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">int main() {
    int t;
    cin&gt;&gt;t;
    while(t--){
        string k;
        cin&gt;&gt;k;
        switch(k[0]){
            case '1':cout&lt;&lt;&quot;13\\n&quot;;
            break;
            case '2':cout&lt;&lt;&quot;23\\n&quot;;
            break;
            case '3':cout&lt;&lt;&quot;31\\n&quot;;
            break;
            case '4':cout&lt;&lt;&quot;41\\n&quot;;
            break;
            case '5':cout&lt;&lt;&quot;53\\n&quot;;
            break;
            case '6':cout&lt;&lt;&quot;61\\n&quot;;
            break;
            case '7':cout&lt;&lt;&quot;71\\n&quot;;
            break;
            case '8':cout&lt;&lt;&quot;83\\n&quot;;
            break;
            case '9':cout&lt;&lt;&quot;97\\n&quot;;
            break;
        }
    }
    return 0;
}
</code></pre>
<h2><a href="https://codeforces.com/contest/1861/problem/B">B.Two Binary Strings</a></h2>
<h4>思路</h4>
<p>​	给两个数列，两个数列均是由01组成的序列且每个数列的第一位必然是0，最后一位必然是1。给定一种操作，选取数列中的两个相同的数字，这两个数字中间的所有数字改变为该数字，让我们求是否可以在有限的操作内让两个数列相等。通过仔细思考我们可以想到，如果在两个数列同样的位置上存在该位为0下一位为1，且两个数列均如此，我们就可以让两个数列相等，否则就不存在操作。</p>
<h4>代码实现</h4>
<pre><code class="language-c++">int main() {
    int t;
    cin&gt;&gt;t;
    while(t--){
        string k;
        string q;
        cin&gt;&gt;k&gt;&gt;q;
        int u=0;
        for(int i=0;i&lt;k.size()-1;i++){
            if(k[i]=='0'&amp;&amp;q[i]=='0'&amp;&amp;k[i+1]=='1'&amp;&amp;q[i+1]=='1'){
                u=1;break;
            }
        }
        if(u){
            cout&lt;&lt;&quot;YES\\n&quot;;
        }else{
            cout&lt;&lt;&quot;NO\\n&quot;;
        }
    }
    return 0;
}
</code></pre>
`;export{t as attributes,n as html};
