/**
 * Created by lenovo on 2017/4/20.
 */
define(['jquery','cookie'],function($){
    $('#loginForm').on('submit',function(e){
        var FormData = $(this).serialize();
        $.ajax({
            type:'post',
            url:'/api/login',
            data:FormData,
            success:function( info ){
                if( info.code == 200){
                    alert('成功登录');
                    $.cookie('profile',JSON.stringify(info.result),{ path:'/',expires: 7});
                    location.href = '/';
                }
            }
        })
        return false;
    });
});