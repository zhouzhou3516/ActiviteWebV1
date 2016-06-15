/**
 * Created by Administrator on 2015/12/21 0021.
 */
$(document).ready(function () {
    function stopEvent(){ //阻止冒泡事件
        //取消事件冒泡
        var e=arguments.callee.caller.arguments[0]||event; //若省略此句，下面的e改为event，IE运行可以，但是其他浏览器就不兼容
        if (e && e.stopPropagation) {
            // this code is for Mozilla and Opera
            e.stopPropagation();
        } else if (window.event) {
            // this code is for IE
            window.event.cancelBubble = true;
        }
    }
    $(".activity_title #category,.activity_title #m_date").click(function () {
         $(this).parent().find("ul").slideToggle(100)
         stopEvent()
    })

    $(".classify input").click(function () {
        $(".meeting_time").slideUp(100)
    })
    $("#m_date").click(function () {
        $(".meeting_cat").slideUp(100)

    })
    $("body").click(function (e) {
          $(".activity_title>div>ul").slideUp(100)
    })
    
    $(".activity_title  ul.meeting_cat  li ").on("click",function(){
    	var text=$(this).find("a").text();
    	$("#category").val(text);
    })
       $(".activity_title  ul.meeting_time  li a").on("click",function(){
    	var text=$(this).text();
    	$("#m_date").val(text);
    })
    
    $(".hot_rec button").click(function () {
        $(".hot_rec button").removeClass("choose")
        $(this).addClass("choose")
    })
  
});