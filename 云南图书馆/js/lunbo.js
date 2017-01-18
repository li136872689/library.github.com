$(function () {
            var container = $('#lbContainer');
            var list = $('#list');
            var buttons = $('#buttons span');
            var prev = $('#prev');
            var next = $('#next');
            var index = 1;
            var len = 3;
            var interval = 3000;
            var timer;


            function animate (offset) {
                var left = parseInt(list.css('left')) + offset;
                if (offset>0) {
                    offset = '+=' + offset;
                }
                else {
                    offset = '-=' + Math.abs(offset);
                }
                list.animate({'left': offset}, 300, function () {
                    if(left > -200){
                        list.css('left', -958 * len);
                    }
                    if(left < (-958 * len)) {
                        list.css('left', -958);
                    }
                });
            }

            function showButton() {
                buttons.eq(index-1).addClass('on').siblings().removeClass('on');
            }

            function play() {
                timer = setTimeout(function () {
                    next.trigger('click');
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }

            next.bind('click', function () {
                if (list.is(':animated')) {
                    return;
                }
                if (index == 3) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-958);
                showButton();
            });

            prev.bind('click', function () {
                if (list.is(':animated')) {
                    return;
                }
                if (index == 1) {
                    index = 3;
                }
                else {
                    index -= 1;
                }
                animate(958);
                showButton();
            });

            buttons.each(function () {
                 $(this).bind('click', function () {
                     if (list.is(':animated') || $(this).attr('class')=='on') {
                         return;
                     }
                     var myIndex = parseInt($(this).attr('index'));
                     var offset = -958 * (myIndex - index);

                     animate(offset);
                     index = myIndex;
                     showButton();
                 })
            });

            container.hover(stop, play);

            play();

        });
//Ð¡Í¼µÄÂÖ²¥
var t = n =0, count;
$(document).ready(function(){
  count = $("#qtNewsPicMain a").length;

  $("#qtNewsPicMain a:not(:first-child)").hide();

  $("#qtNewsPic_info").html($("#qtNewsPicMain a:first-child").find("img").attr('alt'));

  //$("#qtNewsPic_info").click(function(){window.open($("#qtNewsPicMain a:first-child").attr('href'), "_blank")});
  $("#qtNewsPic li").click(function() {

    var i = $(this).attr('index') - 1;
    n = i;
    if (i >= count) return;
    $("#qtNewsPic_info").html($("#qtNewsPicMain a").eq(i).find("img").attr('alt'));
    //$("#qtNewsPic_info").unbind().click(function(){window.open($("#qtNewsPicMain a").eq(i).attr('href'), "_blank")})
    $("#qtNewsPicMain a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
    document.getElementById("qtNewsPic").style.background="";
    $(this).toggleClass("on");
    $(this).siblings().removeAttr("class");
  });
  t = setInterval("showAuto()", 2000);
  $("#qtNewsPic").hover(function(){clearInterval(t)}, function(){t = setInterval("showAuto()", 2000);});
})

function showAuto(){
  n = n >=(count -1) ?0 : ++n;
  $("#qtNewsPic li").eq(n).trigger('click');
}