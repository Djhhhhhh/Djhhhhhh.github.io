import{A as l,M as a,O as n,J as i,ai as t,u as c}from"./index-1eca5c10.js";import{c as _,d as r,a as u}from"./el-main-7849f476.js";/* empty css               */const d=`<h2>P9343 一曲新词酒一杯</h2>
<h3>[题目链接](<a href="https://www.luogu.com.cn/problem/P9343">P9343 一曲新词酒一杯 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)</a>)</h3>
<h4>思路</h4>
<p>​	题目共两种操作。第一种操作只能让特定的一杯贴上标签，第二种操作是选中的杯子以外的所有的杯子贴上标签。询问你至少在几次操作之后，所有的杯子至少被贴上了一张标签。</p>
<p>​	我们可以得到，第二种操作对于整个数据的影响是极大的，只要在进行一次第二种操作后，整个杯子序列便只有一个杯子没有被贴上标签。所以在进行操作时，对第一次二操作之前的所有一操作的数据进行记录，在进行一次二操作之后判断之前或者后续的操作有没有将唯一剩下的一个杯子贴上标签，贴上了则将标号进行记录，输出该标号。若进行完所有的操作还没有贴一遍，则输出-1。</p>
<h4>代码示例</h4>
<pre><code class="language-c++">struct z {
    int k, x;
}o[N*2+10];
int v[N*2+10];
int main() {
	fastread();
    int t;
    cin &gt;&gt; t;
    while (t--) {
        int n, m;
        cin &gt;&gt; n &gt;&gt; m;
        memset(v, 0, sizeof(v));
        for (int i = 1; i &lt;= m; i++) {
            cin &gt;&gt; o[i].k &gt;&gt; o[i].x;
        }
        int cnt = 0;
        int id=-1;
        bool u = 0;
        int last = 0;
        for (int i = 1; i &lt;= m; i++) {
            if (u == 0) {
                if (o[i].k == 1) {
                    if (v[o[i].x] == 0) {
                        cnt++;
                        v[o[i].x]++;
                    }
                    if (cnt == n) {
                        id = i;
                    }
                }
                else {
                    if (v[o[i].x] == 1) {
                        id = i;
                        cnt = n;
                    }
                    else {
                        u = 1;
                        last = o[i].x;
                    }
                }
            }
            else {
                if (o[i].k == 1) {
                    if (last == o[i].x) {
                        cnt = n;
                        id = i;
                    }
                }
                else {
                    if (last != o[i].x) {
                        cnt = n;
                        id = i;
                    }
                }
            }
            if (cnt == n)break;
        }
        cout &lt;&lt; id &lt;&lt; &quot;\\n&quot;;
    }
	return 0;
}

</code></pre>
`;const f=t("div",{class:"glass"},[t("h2",null,"作者碎碎念")],-1),m=["innerHTML"],w={__name:"LuoP9343",setup(p){return(h,g)=>{const e=r,o=u,s=_;return l(),a(s,null,{default:n(()=>[i(e,{width:"200px"},{default:n(()=>[f]),_:1}),i(o,null,{default:n(()=>[t("div",{innerHTML:c(d),class:"a"},null,8,m)]),_:1})]),_:1})}}};export{w as default};
