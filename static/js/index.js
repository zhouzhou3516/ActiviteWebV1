/**
 * Created by Administrator on 2015/12/19 0019.
 */

$(".login").hover(
    function () {
        $(".login ol").slideDown(100)
    },
    function () {
        $(".login ol").slideUp(100)
    }
);
$(".recent .li").each(function (i) {
    $($(".recent .li")[i]).mouseover(function () {
        $(this).parent().find(".recent_detail").hide();
        $(this).parent().find(".name").removeClass("choose");
        $(this).parent().find("li").removeClass("showAll")
        $(this).find(".recent_detail").show();
        $(this).find(".name").addClass("choose");
        $(this).addClass("showAll");
    })
})

$(".sponsor").mouseover(function () {
    $(".jiabin").removeClass("Choose")
    $(this).addClass("Choose")
    $(".all_sponsor").show();
    $(".all_guest").hide()
    $(".spons").show()
    $(".gues").hide()
})
$(".jiabin").mouseover(function () {
    $(".sponsor").removeClass("Choose")
    $(this).addClass("Choose")
    $(".all_sponsor").hide();
    $(".all_guest").show()
    $(".spons").hide()
    $(".gues").show()
})
$(".lazy").lazyload({threshold : 0 ,
    effect:"show",
    placeholder : "../img/default_activity.png",
    event:"scroll"
});
$(".recent").each(function(i){
    $($($(".recent")[i]).find(".name")[0]).addClass("choose")
})
$(".m-search").click(function () {
    $(".search form").submit()
})
$(".gues").click(function () {
    $(".all_guest").html("")
    $(".all_guest").html("<span class='load fa fa-spinner fa-pulse fa-2x' style='line-height: 220px'></span>")
    $.ajax({
        url: "/change_guest/?guest=1",
        type: "get",
        dataType: "text",
        async: false,
        success: function (data) {
            setTimeout(function () {
                $(".all_guest").html(data)
            },500)

            //for(var i=0;i<data.guests.length;i++){
            //    var _html="<div class='col-sm-2 col-xs-2 guest'><a href='/guest-"+data.guests[i].guest__id+".html'>" +
            //        "<img width='115' class='img-circle' src='"+data.guests[i].guest__img__server__name+data.guests[i].guest__img__urls+"' alt='"+data.guests[i].guest__name+"'/>" +
            //        "<p>"+data.guests[i].guest__name+"<br/><span>"+data.guests[i].guest__job__name+"</span></p></a></div>"
            //    $(".all_guest").append(_html)
            //}
        }
    })
})
$(".spons").click(function () {
    $(".all_sponsor").html("<span class='load fa fa-spinner fa-pulse fa-2x' style='line-height: 220px'></span>")
    $.ajax({
        url: "/change_guest/?sponsor=2",
        type: "get",
        dataType: "json",
        async: false,
        success: function (data) {
            $(".all_sponsor").html('')
            for(var i=0;i<data.sponsors.length;i++){
                if(data.sponsors[i].pic__urls){
                    var img_url=data.sponsors[i].pic__server__name+data.sponsors[i].pic__urls
                }else{
                    img_url='http://pic.huodongjia.com/static/images/spon_default.jpg'
                }
                var _html="<div class='col-sm-2 col-xs-2 guest'><a target='_blank' rel='nofollow' href='/sponsor-"+data.sponsors[i].id+".html'>" +
                    "<img width='100%' class='img-rounded' src='"+img_url+"' alt='"+data.sponsors[i].name+"'/></a>" +
                    "<p><a style='color: #525A6F' target='_blank' href='/sponsor-"+data.sponsors[i].id+".html'>"+data.sponsors[i].name+"</a></p></div>"
                $(".all_sponsor").append(_html)


            }

        }
    })
})
$(".gues_pic").css({"height":$(".gues_pic").width()})
$(".event_pic").css({"height":$(".event_pic").width()})
$(".event_pic img").css({"minHeight":$(".event_pic").width()})
$(window).resize(function () {
    $(".gues_pic").css({"height":$(".gues_pic").width()})
})
$(".erweima").hover(function () {
        $(".kefu").show()
    },
    function () {
        $(".kefu").hide()
    });
$(".load_more a").click(function(){
	$("#loadMore").fadeIn() ;
	$("#loadMore2").fadeIn() ;
})


