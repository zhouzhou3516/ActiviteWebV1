$("#captcha").attr("data-captcha","false");
$(".ren").click(function(){
    $(".message_popup").show(100)
    $(".message_popup input[type='text']").attr('value','')
    $(".message_popup input[type='text']").css({border:'1px solid #b8b8b8'});
});
$(".clearDiv").click(function(){
    $(".message_popup").hide(100)
});
$(".captcha_btn").bind('click',function () {
    $(".address").css({border:"1px solid rgb(216, 216, 216)"});
    return false;
});
$("#messageSubmit").on('click', function () {
    var name= $.trim($("#username").val());
    var phone=$.trim($("#tel").val());
    var email=$.trim($("#email").val());
    var content=$.trim($("#content").val());
    var email_pd=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    var iphone = /^1[3-8]+\d{9}$/;
    var captcha=$.trim($("#captcha").val());
    if(captcha.length!=4){
        $("#captcha").css({border:"1px solid #ec7063"}).attr("data-captcha","false")
    }else{
        //验证 
    	
    } 
    if(name.length==0){
    	
        $("#messageSubmit").attr("data-fromFlag","false");
        $("#username").css({border:"1px solid #ec7063"});
        return false
    }
    else if(phone.length==0||!iphone.test(phone)){
        $("#username").css({border:"1px solid #b8b8b8"});
        $("#messageSubmit").attr("data-fromFlag","false");
        $("#tel").css({border:"1px solid #ec7063"});
        return false
    }
    else if( email.length==0||!email_pd.test(email)) {
        $("#phone").css({border:"1px solid #b8b8b8"});
        $("#email").css({border: "1px solid #ec7063"});
        $("#messageSubmit").attr("data-fromFlag", "false");
        return false
    }
    else{
        $("#email").css({border:"1px solid #b8b8b8"});
        $("#messageSubmit").attr("data-fromFlag","true");
        alert("完成提交!","我们将尽快与您取得联系，审核成功后为您点亮图标。");
        $(".message_popup").hide(100);
        
    }
});
$(document).click(function(event) { 
    if(!$(event.target).closest('.new_popup').length && !$(event.target).is('.new_popup')) {
        if($('.new_popup').is(":visible")) {
            $('.new_popup').hide()
        }
    }        
});
$("#post").click(function () {
    $("#searchForm").submit()
})


/// 右侧 停靠
var right_child=$(".content_right").offset().top-65;// 减去固定导航栏高度66px
var child_width=$(".content_right").width();
var child_height=$(".content_right").height();
var footer_top=$(".footer").offset().top;
$.event.add(window, "scroll", function() {
	var sTop=document.documentElement.scrollTop+document.body.scrollTop;
	var window_height=footer_top-sTop-75;// 75=导航栏 65 + 10 marging
    if(sTop>=right_child && window_height>=child_height){
        $(".content_right_child").css({position:"fixed",top:"70px","z-index":"1000","width":child_width});
    }else if(window_height<child_height){
    	 var top=footer_top-child_height-140;
    	 $(".content_right_child").css({position:"absolute",top:top,"z-index":"1000","width":child_width})
    }
    else{
    	 $(".content_right_child").removeAttr( 'style' );
    }
});