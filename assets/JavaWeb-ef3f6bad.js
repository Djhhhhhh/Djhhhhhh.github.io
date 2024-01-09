const t={},n=`<h2>Maven</h2>
<p>​	Maven 是一个项目管理工具，可以对 Java 项目进行构建、依赖管理。</p>
<h4>作用</h4>
<h5>依赖管理</h5>
<p>​	方便快捷的管理项目依赖的资源包(jar包)，避免版本冲突。</p>
<h4>统一项目结构</h4>
<p>​	提供标准，统一的项目结构。</p>
<h4>项目构建</h4>
<p>​	标准跨平台的自动化项目构建方式。</p>
<h2>Maven坐标</h2>
<p>​	maven中的坐标是资源的唯一标识，通过该坐标可以唯一定位资源地址。</p>
<p>​	使用坐标来定义项目或引入项目中需要的依赖。</p>
<h4>主要组成</h4>
<p>​	groupId：定义当前maven项目隶属组织名称。</p>
<p>​	artifactId：定义当前maven项目名称。</p>
<p>​	version：定义当前项目版本号。</p>
<h2>依赖配置</h2>
<p>​	指当前项目运行时所需要的jar包，一个项目中可以引入多个依赖。</p>
<h4>配置</h4>
<p>​	1.在pom.xml中编写<dependencies>标签。</p>
<p>​	2.在<dependencies>标签中使用<dependency>引入坐标。</p>
<p>​	3.定义坐标的groupId，artifactId，version。</p>
<p>​	4.点击刷新，引入最新加入的坐标。</p>
<h2>依赖传递</h2>
<p>​	依赖具有传递性。</p>
<h2>依赖范围</h2>
<p>​	依赖的jar包，在默认情况下，可以在任何地方使用。可以通过<scope>设置其作用范围。</p>
<h4>作用范围</h4>
<p>​	1.主程序范围有效。(main文件夹范围内)</p>
<p>​	2.测试程序范围有效。(test文件夹范围内)</p>
<p>​	3.是否参与打包运行。(package指令范围内)</p>
<table>
<thead>
<tr>
<th>scope值</th>
<th>主程序</th>
<th>测试程序</th>
<th>打包运行</th>
<th>范例</th>
</tr>
</thead>
<tbody>
<tr>
<td>compile(默认值)</td>
<td>Y</td>
<td>Y</td>
<td>Y</td>
<td>log4j</td>
</tr>
<tr>
<td>test</td>
<td>N</td>
<td>Y</td>
<td>N</td>
<td>junit(单元测试)</td>
</tr>
<tr>
<td>provided</td>
<td>Y</td>
<td>Y</td>
<td>N</td>
<td>servlet-api</td>
</tr>
<tr>
<td>runtime</td>
<td>N</td>
<td>Y</td>
<td>Y</td>
<td>jdbc驱动</td>
</tr>
</tbody>
</table>
<h2>生命周期</h2>
<p>​	maven的生命周期就是为了对所有的maven项目构建过程进行抽象和统一。</p>
<p>​	注意：运行后面的生命周期会让前面的都执行。</p>
<h4>clean</h4>
<p>​	清理工作。</p>
<p>​	移除上一次构建生成的文件。</p>
<h4>compile</h4>
<p>​	编译项目的源代码</p>
<h4>test</h4>
<p>​	使用合适的单元测试框架运行测试，junit。</p>
<h4>package</h4>
<p>​	将编译后的文件打包。</p>
<h4>install</h4>
<p>​	安装项目到本地文件。</p>
<h4>site</h4>
<p>​	生成报告，发布站点等。</p>
`;export{t as attributes,n as html};
