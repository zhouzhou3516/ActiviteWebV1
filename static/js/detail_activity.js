
$(document).ready(function () {
    $(".ticket").each(function (i) {
        $($(".ticket")[i]).click(function () {
            var price=$(this).data('price');
            $('.price').html("￥"+price);
            //表单
            $("input[name='price']").val(price);

            $(".ticket").removeClass("active")
            $(this).addClass("active")
        })
    })
    //票数改变
    $(".add").click(function () {
        var jf=parseInt(parseInt($('.ticket_choose').data('price'))*0.05)
        $("#number").val(parseInt($("#number").val())+1)
        $("input[name='amount']").val($("#number").val())
    })
    $(".sub").click(function () {
        var jf=parseInt(parseInt($('.ticket_choose').data('price'))*0.05)
        var num=$("#number").val(),limit=$('.ticket_choose').data('limit')
        if(!limit){limit=1}
        if(num>limit){
            $("#number").val(parseInt($("#number").val())-1)
            $("input[name='amount']").val($("#number").val())
        }
    })
    
    $($(".activity_left .title li span")[0]).addClass("activeTitle");
    
    $(".activity_left .title li span").on('click', function () {
    	 //$(".activity_left .title li span.activeTitle").hide();
    	 $(".activity_left .title li span").removeClass("activeTitle")
         $(this).addClass("activeTitle")
    	 $(".activity_left .meetingBgs").css({display:"none"});
    	 //$("#" + $(this).data("plne")).parent().show();
    	 $("#" + $(this).data("plne")).show();

    })

    //留言
$(".analytic").click(function () {
       //留言 logic
	
    })
//字数限制
$(function(){
        //先选出 textarea 和 统计字数 dom 节点
        var textArea = $(".emotion"),
            word = $("#info");
        //调用
        statInputNum(textArea,word);
    });
function statInputNum(textArea,numItem) {
        var max = numItem.text()
        textArea[0].setAttribute("maxlength", max);
        textArea.on('input propertychange', function () {
            numItem.text(max - $(this).val().length);
        });
    }

//定位
var right_child=$(".right_child").offset().top-66;
var child_width=$(".activity_right").width()
$.event.add(window, "scroll", function() {
    var sTop=document.documentElement.scrollTop+document.body.scrollTop;
    if(sTop>=right_child){
        $(".right_child").css({position:"fixed",top:"69px","z-index":"1000","width":child_width})
        //$(".e_hide").fadeOut(1)
    }else{
        $(".right_child").css({position:"","width":'',"top":''})
       // $(".e_hide").fadeIn()
    }
});
    $("#apply").click(function () {
        $("form[name=signup_form]").submit()
    })
})


//收藏
$(".collect").click(function () {
    $("#login").fadeIn(100)
})
$(".close").click(function () {
    $("#login").fadeOut(100)
    $(".bg").fadeOut(100)
})

//收藏
var e_name=$(".activity_price h1").text()
$($(".meeting_content")[0]).find("p").find("img").attr("alt",e_name)
$($(".meeting_content")[1]).find("p").find("img").attr("alt",e_name+"日程安排")
//地图
function Map(addr){
    $(".allmap").show()
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(116.331398,39.897445);
    map.centerAndZoom(point,12);
    map.enableScrollWheelZoom(true);
    // 创建地址解析器实例
    var myGeo = new BMap.Geocoder();
    // 将地址解析结果显示在地图上,并调整地图视野
    myGeo.getPoint(addr, function(point){
        if (point) {
            map.centerAndZoom(point, 16);
            map.addOverlay(new BMap.Marker(point));
        }
    }, "北京市");
}
$(".allmap .fa-remove").click(function () {
    $(".allmap").hide()
})
//地图
//推荐会议
$($(".picture")[0]).addClass("e_show")
$($(".activity_names span")[0]).addClass("text")
$(".activity_names span").click(function () {
    $(".activity_names span").show()
    $(this).hide()
    var i=$(this).data("value")
    if($($(".picture")[i]).css("display")!="block"){
        $(".e_show").fadeOut(0)
        $(".picture").removeClass("e_show")
        $($(".picture")[i]).fadeIn(200).addClass("e_show")
    }
})
//推荐会议
$(".apply").click(function () {
        $("#apply").click();
    
})

$(function(){
   $(".close").click(function(){
      $("#myAlert").css({display:"none"})
   });
   $(".activity_detail .collect").click(function(){
	   $("#myAlert").css({display:"block"})
	     // $("#myAlert").show();
	   });
   
   
}); 

//精彩回顾
if($(".all_img li").length<=4){
    $(".down").hide()
}
$(".down").click(function () {
    var up_top=$(".all_img").css("marginTop")
    var max_top=parseInt($(".all_img li").length-5)*94
    if(parseInt(up_top)<=-max_top){
        $(this).hide()
    }
    if(parseInt(up_top)>-max_top-94){
        $(".all_img").animate({
            marginTop:parseInt(up_top)-94+"px"
        },200)
        $(".up").show()
    }
})
$(".up").click(function () {
    var up_top=$(".all_img").css("marginTop")
    if(parseInt(up_top)>=-94) {
        $(this).hide()
    }
    if(parseInt(up_top)<0){
        $(".all_img").animate({
            marginTop:parseInt(up_top)+94+"px"
        },200)
        $(".down").show()
    }
})
$(".all_img li").click(function (){
    var j=$(".check").index();
    var i=$(this).index();
       $(this).append($(".check"))
        $(".pic").removeClass("active").fadeOut(0)
        $($(".pic")[i]).fadeIn(200).addClass("active")
})

//精彩回顾
