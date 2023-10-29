var btn = document.getElementsByClassName('layui-btn-sm')[0];
var url = '../xz.html';
check = function () {
			if (user.value == '10228' && pwd.value == 'yushu19900922') {
				window.location = url;
			}else{
				alert('账号或密码错误！');
			}
			
		};