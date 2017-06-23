function setCookie( name, value, expiredays ){
	var todayDate = new Date();
	todayDate.setDate(todayDate.getDate() + expiredays );
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}
function getCookie(name)//取cookies函数        
{ 
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)")); 
    if(arr != null) return unescape(arr[2]); return null; 
} 
function dianzan(vid)
{
	var key="v_"+vid;
	alert(key);
	var s=getCookie(key);
	if(s){
		alert('您今天已经点赞,请明天再来');return false;
	}
	else
	{
		setCookie(key,vid,1);
		//处理逻辑
		$.ajax({
					type: 'post',
					url: '../db_manage/bxj_manage.php?id='+Math.random(),
					data: {
						types:'click_video',
						vids:vid
					},
					cache: false,
					dataType: 'text',
					success: function (dataa) {
						var mydate = eval("(" + dataa + ")");
						if (mydate.code == 1) {
							alert("点赞成功");
						}
						else {
							 alert("没有数据");
						}
					}
				});
		return false;
	}	
}