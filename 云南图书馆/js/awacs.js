$(function () {
  //设置浏览body高度适配于不同浏览器
  var mainHeight = $(window).height() + "px";
  $(".content").css("height", mainHeight);
  $("#sidebarNavMain").css("height", mainHeight);
  $(window).resize(function () {
    var mainHeight = $(window).height() + "px";
    $(".content").css("height", mainHeight);
    $("#sidebarNavMain").css("height", mainHeight);
  });
  $(window).scroll(function () {
    var mainHeight = $(document).height() + "px";
    $("#sidebarNavMain").css("height", mainHeight);
    $(".content").css("height", mainHeight);
  });
  //获取提交数据表单
  $.extend({
    getFormData: function (data,token) {
      var getFormData = {};
      if(token){
        getFormData.token="abcde";
      }
      for (formVariable in data) {
        var FormName = data[formVariable].name;
        getFormData[FormName] = data[formVariable].value;
      }
      return JSON.stringify(getFormData);
    }
  });
});

//定义网站ip地址
var ipAddress = "http://123.57.227.101/";
var newsAddress = "http://123.57.227.101:63342/";

//toggle plugin from caibaojian.com
$.fn.toggle = function( fn, fn2 ) {
  var args = arguments,guid = fn.guid || $.guid++,i=0,
    toggle = function( event ) {
      var lastToggle = ( $._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
      $._data( this, "lastToggle" + fn.guid, lastToggle + 1 );
      event.preventDefault();
      return args[ lastToggle ].apply( this, arguments ) || false;
    };
  toggle.guid = guid;
  while ( i < args.length ) {
    args[ i++ ].guid = guid;
  }
  return this.click( toggle );
};

function addURLParam(sURL, sParamName, sParamValue){
  sURL += (sURL.indexOf("?") == -1 ? "?" : "&");
  sURL += encodeURIComponent(sParamName) + "=" + encodeURIComponent(sParamValue);
  return sURL;
}

function addPostParam(sParams, sParamName, sParamValue){

  if(sParams.length>0){sParams += "&"}

  return sParams +encodeURIComponent(sParamName) + "=" + encodeURIComponent(sParamValue);

}

var userDescDict = {
  0:"普通用户",
  1:"VIP用户",
  2:"管理员"
};

if ($.cookie("username") != "null" && $.cookie("username") != undefined) {
  $("#userName").text($.cookie("username"));
  $("#userNameTip").text($.cookie("username"));
  $("#userRoleTip").text(userDescDict[$.cookie("permissionLevel")]);
  $("#logout").text("退出");
} else {

  $("#logout").text("登录");
}


//    安全退出
$("#logout").click(function () {
  var userId = "";
  if ($(this).text() == "请登录"){
    window.location.href = "qt-login.html?req=login";
    return;
  }
  userId = addPostParam(userId, "userId", $.cookie("userId"));
  //alert(userId);
  $.ajax({
    type: "post",
    url: ipAddress + "portal/user/logout",
    dateType: "text",
    data: userId,
    success: function (data) {
      if (data.status == 1) {
        $.cookie("username", null);
        $.cookie('userId', null);
        $.cookie('username', null);
        $.cookie('email', null);
        $.cookie('permissionLevel', null);
        location.reload();
      }
    },
    error: function () {
      alert("网络通讯错误，操作失败！");
      return;
    },
    async: true
  });
});

function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);

  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}


function readBook(that){
  var bookId = $(that).attr("bookId");
  if(isNaN(bookId)){
    return ;
  }
  window.open(ipAddress+ "viewer.html?bookId="+bookId + "#page=1&viewer=picture", "_blank");
}