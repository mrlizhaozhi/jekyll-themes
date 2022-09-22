---
layout: custom
title: 中文资源
date: 2022-07-02
---

## 自我介绍 ##

<img src="/assets/images/lizhaozhi.jpg" style="margin: 25px; height: 200px; width: auto; float: right">

我是来自中国广州的李兆智。 我于 2021 年 5 月毕业于马凯特大学，获得金融和信息系统理学学士学位。

我对商业智能、产品开发、机器学习和讲故事感兴趣。 我希望整合我的商业头脑和技术技能，为社会创造价值。

在这个网站上，你可以找到我的简历、研究、项目和博客文章。 我期待在 LinkedIn 上与您联系并开展令人兴奋的项目！

**商业银行 / 投资管理 / 商业智能 / 产品管理 / 机器学习 / 电影制作 / 讲故事 / 艺术与设计 / 网页开发**

<hr style="background: #ccc;">

## 新闻发布 ##
<ul class="article-list">
	{% assign chinese = site.categories['press'] | where_exp: "post", "post.tags contains '新闻发布'" %}
	{% for post in chinese limit:3 %} 
	<li>
		<p id="post-date">{{ post.date | date: "%B %d, %Y" }}</p>
		<a href="{{ post.url }}">
			<p style="font-family: 'EB Garamond', serif; font-size: clamp(1.5rem, 2vw, 2rem)">{{ post.title }}</p>
		</a>
		<p>
			{{ post.content | strip_html | truncate: 100 }}
		</p>
	</li>
	{% endfor %} 
</ul>

## 中文博客 ##
<ul class="article-list">
	{% assign chinese = site.categories['blogs'] | where_exp: "post", "post.tags contains '博客'" %}
	{% for post in chinese limit:3 %} 
	<li>
		<p id="post-date">{{ post.date | date: "%B %d, %Y" }}</p>
		<a href="{{ post.url }}">
			<p style="font-family: 'EB Garamond', serif; font-size: clamp(1.5rem, 2vw, 2rem)">{{ post.title }}</p>
		</a>
		<p>
			{{ post.content | strip_html | truncate: 100 }}
		</p>
	</li>
	{% endfor %} 
</ul>

点击[这里](/blogs/chinese/)阅读更多中文博客文章。

<script>
	document.getElementById('breadcrumb').innerHTML = '<a href="/">Home</a> / <a href="/languages/">Languages</a> / {{ page.title }}';
</script>
