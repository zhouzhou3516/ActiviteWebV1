/**
 * common js for all page
 */

// nav bar html template
var util={};
util.topnav=function(active_menu){
	// 导航栏 html 
	var html = (function () {/*
	<!-- nav-->
	<div class="nav navbar-fixed-top">
		<div class="container">
			<div class="col-sm-1 col-xs-1">
				<h1 style="margin: 11px 0">
					<a href="./static/img/index.html" style="color: white">logo</a>
				</h1>

			</div>
			<div class="col-sm-11 col-xs-11 menus">
				<ul>
					<li style="width: 30px;"></li>
					<li class="menue  business"><a target="_blank" href="">
							全国 <span class="fa fa-angle-down"></span>
						</a>
						<div class="business_menue"></div></li>
					<li class="menue "><a href="./index.html" >首页</a></li>
					<li class="menue findactivity"><a href="./find_activity.html" >找活动 <span class="fa fa-angle-down"></a>
						<div class="findactivity_menue"></div>
					</li>
					<li class="menue"><a href="./activity_inprocess.html" >活动进行时</a></li>
					<li class="menue"><a href="./viewpoint_list.html" >观点</a></li>
					<li class="search">
						<form action="./search_activity.html" methon="get"><input name="keyword" type="text" placeholder="搜索活动"><a href="./search_activity.html"><span class="m-search m_iconfont"></span></a></form>

					</li>
					<li class="login" ><a href="./login.html" rel="nofollow">
							<span class="Login" >登录</span>

						</a>
					</li>
					<li class="postevent" ><a href="./post_activity.html" >+发布活动</a></li>
					
				</ul>
			</div>
		</div>
	</div>        
		*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
	document.write(html);
	initNavCityMenu();
	initFindActivityMenu();
}
//util.topnav();
function initNavCityMenu(){
	var nav_city_menu = new Array("beijing", "北京", "shanghai", "上海", "guangzhou",
			"广州", "shenzhen", "深圳", "chengdu", "成都", "xian", "西安", "xiamen", "厦门",
			"nanjing", "南京", "wuhan", "武汉", "chongqing", "重庆", "tianjin", "天津",
			"changsha", "长沙", "gengduo", "更多...");
	//var nav_city_menu_html="<div class='col-sm-12 col-xs-12 city'>选择城市</div>";
	var  nav_city_menu_html="";
	for(i=0;i<nav_city_menu.length;i=i+2){
		if(nav_city_menu[i]=="gengduo"){
			nav_city_menu_html+="<div class='col-sm-2 col-xs-2 '><a  href='./all_citys.html'>"+nav_city_menu[i+1]+"</a></div>"
		}else
		nav_city_menu_html+="<div class='col-sm-2 col-xs-2 '><a  href='./index.html'>"+nav_city_menu[i+1]+"</a></div>"
	}
	/*$(".business_menue").html(nav_city_menu_html)
	$(".business").hover(function() {
		$(".business_menue").fadeIn(10)
	}, function() {
		$(".business_menue").fadeOut(10)
	});*/
	document.querySelector(".business_menue").innerHTML=nav_city_menu_html;
}
function initFindActivityMenu(){
	var nav_time = new Array("最近一月","最近一周","今天","明天","后天","更多...");
	var nav_interest= new Array("科技","文化","生活","运动","社交","娱乐","互联网","教育","医疗","交通","金融","农业","工业","能源","环保","更多...");
	var nav_city = new Array("beijing", "北京", "shanghai", "上海", "guangzhou",
			"广州", "shenzhen", "深圳", "chengdu", "成都", "xian", "西安", "xiamen", "厦门",
			"nanjing", "南京", "wuhan", "武汉", "chongqing", "重庆", "tianjin", "天津",
			"changsha", "长沙", "gengduo", "更多...");
	var nav_time_menu_html="<div class='col-sm-12 col-xs-12 city'>时间</div>";
	for(i=0;i<nav_time.length;i=i+1){
		
		nav_time_menu_html+="<div class='col-sm-2 col-xs-2 '><a  href='./find_activity.html'>"+nav_time[i]+"</a></div>"
	}
	
	var nav_interest_menu_html="<div class='col-sm-12 col-xs-12 city'>兴趣</div>";
	for(i=0;i<nav_interest.length;i=i+1){
		
		nav_interest_menu_html+="<div class='col-sm-2 col-xs-2 '><a  href='./find_activity.html'>"+nav_interest[i]+"</a></div>"
	}
	
	
	
	var nav_city_menu_html="<div class='col-sm-12 col-xs-12 city'>地区</div>";
	//var  nav_city_menu_html="";
	for(i=0;i<nav_city.length;i=i+2){
			nav_city_menu_html+="<div class='col-sm-2 col-xs-2 '><a  href='./find_activity.html.html'>"+nav_city[i+1]+"</a></div>"
	}
	/*$(".business_menue").html(nav_city_menu_html)
	$(".business").hover(function() {
		$(".business_menue").fadeIn(10)
	}, function() {
		$(".business_menue").fadeOut(10)
	});*/
	document.querySelector(".findactivity_menue").innerHTML=nav_time_menu_html+nav_interest_menu_html+nav_city_menu_html;
}

//tooter html template two
util.footerhtml2=function(){
	var html=(function(){/*
		<footer class="container-fluid">
    <div class="row">
      <div class="col-sm-4 col-xs-4">
        <ul>
          <li class="title"><h4>关于我们</h4></li>
          <li><a href="#" rel="nofollow">公司简介</a></li>
          <li><a href="#" rel="nofollow">媒体报道</a></li>
          <li><a href="#" rel="nofollow">微信公众号</a></li>
          <li><a href="#" rel="nofollow">APP下载</a></li>
        </ul>
      </div>
      <div class="col-sm-4 col-xs-4">
        <ul>
          <li class="title"><h4>更多服务</h4></li>
          <li><a href="#" target="_blank" rel="nofollow">媒体合作</a></li>
          <li><a href="#" target="_blank" rel="nofollow">商务合作</a></li>
          <li><a href="#" target="_blank" rel="nofollow">友情链接</a></li>
          <li><a href="#" target="_blank" rel="nofollow">在线留言</a></li>
        </ul>
      </div>
      <div class="col-sm-4 col-xs-4">
        <ul>
          <li class="title"><h4>联系我们</h4></li>
          <li><span class="glyphicon glyphicon-phone"></span> (+86)186-0000-0000</li>
          <li><span class="glyphicon glyphicon-map-marker"></span> 北京市海淀区中关村软件园</li> 
        </ul>
      </div>
    </div>

    </footer>
    <div class="row" style="background-color: gray;">
    <p class="text-center">&copy; 2016~2017, Co. Ltd 备案相关信息.</p>
  </div>
	*/
	}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
	document.write(html);
}
util.footerhtml=function(){
	var html =(function () {/*
	<div class="footer">
		<div class="container">
			<div class="col-sm-2 col-xs-2 footer1">
				<ul>
					<li class="title"><a href="#">关于我们</a></li>
					<li class="title"><a href="#">服务内容</a></li>
				</ul>
			</div>
			<div class="col-sm-2 col-xs-2 footer1">
				<ul>
					<li class="title"><a href="#">活动推广</a></li>
					<li class="title"><a href="#">活动直播</a></li>
				</ul>
			</div>
			<div class="col-sm-2 col-xs-2 footer1">
				<ul>
					<li class="title"><a href="#">活动执行</a></li>
					<li class="title"><a href="#">活动报道</a></li>
				</ul>
			</div>
			<div class="col-sm-2 col-xs-2 footer1">
				<ul>
					<li class="title"><a href="#">联系合作</a></li>
					<li class="title"><a href="#">网站客服</a></li>
				</ul>
			</div>
	
			<div class="introduce">
				<p>
					<font style="color:#BDBCBC">网站介绍:</font><br> 网站介绍网站介绍网站介绍网站介绍网站介绍网站介绍网站介绍网站介绍
				</p>
	
				<hr style="border-top: 1px solid #BDBCBC;">
				<p class="text-center">
					CopyRight
					<a rel="nofollow" target="_blank" href="./index.html">信息发布站点</a>
					activity.com
				</p>
			</div>
		</div>
	</div>*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
	document.write(html);
}

util.paginationhtml=function(){
	var html=(function(){/*
	<div class="pagination">
    <ul>
             <li><a href="#">上一页</a></li>
             <li class="page_active"><a href="">1</a></li>
             <li><a href="#" >2</a></li>
              <li><a href="#" >3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#" disabled>...</a></li>
              <li><a href="#" >10</a></li>
             <li><a href="#">下一页</a></li>
    </ul>
</div>*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
	document.write(html);
}
util.paginationhtml2=function(){
	var html=(function(){/*
	<div class="pagination-full">
    <ul>
             <li><a href="#">上一页</a></li>
             <li class="page_active"><a href="">1</a></li>
             <li><a href="#" >2</a></li>
              <li><a href="#" >3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#" disabled>...</a></li>
              <li><a href="#" >10</a></li>
             <li><a href="#">下一页</a></li>
    </ul>
</div>*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
	document.write(html);
}
