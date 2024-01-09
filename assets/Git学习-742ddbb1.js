const n={},t=`<h2>Git的使用方式</h2>
<h4>命令行</h4>
<p>​	通过命令对git进行控制。</p>
<h4>图形化界面（GUI）</h4>
<p>​	通过一些专业的图形化界面来使用git。</p>
<h4>IDEA插件/扩展</h4>
<p>​	编译器中的可视化操作。</p>
<h2>配置</h2>
<h4>设定用户名</h4>
<pre><code class="language-cmd">git config --global user.name &quot;Djh&quot;
</code></pre>
<h4>设定邮箱</h4>
<pre><code class="language-cmd">git config --global user.email 1161015498@qq.com
</code></pre>
<h4>保存用户名密码</h4>
<pre><code class="language-cmd">git config --global credential.helper store
</code></pre>
<h4>查看git配置信息</h4>
<pre><code class="language-cmd">git config --global --list
</code></pre>
<h4>注意</h4>
<p>​	--global ：全局配置，所有仓库生效。</p>
<p>​	--system：系统配置，对所有用户有效。</p>
<p>​	(默认)：本地配置，支队本地仓库有效。</p>
<h2>新建仓库</h2>
<h4>仓库</h4>
<p>​	可以理解为一个目录。</p>
<h4>方式</h4>
<p>1.在本地创建一个仓库</p>
<pre><code class="language-cmd">git init 
</code></pre>
<p>2.在远程克隆一个仓库</p>
<pre><code class="language-cmd">git clone
</code></pre>
<h2>Git的工作区域</h2>
<h4>工作区</h4>
<p>​	本地文件夹。</p>
<p>​	例：.git所在目录</p>
<h4>暂存区</h4>
<p>​	临时存储区域。</p>
<p>​	例：.git/index</p>
<h4>本地仓库</h4>
<p>​	通过git init命令创建的仓库，它包含完整的项目历史和元数据，是git存储代码的主要位置。</p>
<p>​	例：.git/objects</p>
<h4>流程</h4>
<p>​	工作区-&gt;git add-&gt;暂存区-&gt;git commit-&gt;本地仓库</p>
<h2>Git中的文件状态</h2>
<h4>未跟踪</h4>
<p>​	我们新创建的文件。</p>
<h4>未修改</h4>
<p>​	已经被git管理起来，但是还没有被修改过。</p>
<h4>已修改</h4>
<p>​	被git管理起来并且修改过。</p>
<h4>已暂存</h4>
<p>​	修改完后放到暂存区内。</p>
<h4>流程</h4>
<p>​	未跟踪   -&gt;git add-&gt;  未修改 -&gt;修改-&gt;     已修改  -&gt;git add-&gt;    已暂存</p>
<p>——————————————&gt;git add————————————————&gt;</p>
<p>​		&lt;—git rm—              &lt;———————git commit—————</p>
<p>​						&lt;—git checkout———  &lt;——git reset————</p>
<h2>常数</h2>
<h4>HEAD</h4>
<p>​	指向分支的最新提交结点。</p>
<h4>HEAD~n</h4>
<p>​	指向上n个版本</p>
<h4>HEAD^n</h4>
<p>​	指向上n个版本。</p>
<h2>常用命令</h2>
<h4>查看仓库的状态</h4>
<pre><code class="language-cmd">git status
</code></pre>
<h4>创建仓库</h4>
<pre><code class="language-cmd">git init
</code></pre>
<h4>添加到暂存区</h4>
<pre><code class="language-cmd">git add .
</code></pre>
<h4>提交</h4>
<pre><code class="language-cmd">git commit -m &quot;提交附带的信息&quot;
</code></pre>
<h4>查看仓库提交历史记录</h4>
<pre><code class="language-cmd">git log
</code></pre>
<p>​	注：可以使用--oneline参数来查看简介的提交记录。</p>
<h4>回退版本</h4>
<p>1.软回退：回退某个版本，并保留工作区和暂存区的内容。</p>
<pre><code>git reset --soft
</code></pre>
<p>2.硬回退：工作区和暂存区都会清空。</p>
<pre><code class="language-cmd">git reset --hard
</code></pre>
<p>3.混合回退：保留工作区，清空暂存区。</p>
<pre><code>git reset --mixed
</code></pre>
<h4>查看差异</h4>
<p>1.查看工作区，暂存区，本地仓库之间的差异</p>
<p>2.查看不同版本之间的差异。</p>
<p>3.查看不同分支之间的差异。</p>
<pre><code class="language-cmd">git diff
</code></pre>
<p>参数：1.默认查看工作区和暂存区的差异。</p>
<p>​	    2.git diff HEAD 查看工作区和版本库的差异。</p>
<p>​	    3.git diff --cached 查看暂存区和版本库的差异。</p>
<p>​	    4.git diff 版本id 版本id 查看两个版本的内容。</p>
<p>​	    5.git diff 文件名   查看文件的差异内容</p>
<p>​	    6.git diff分支名 查看分支之间的差异。</p>
`;export{n as attributes,t as html};
