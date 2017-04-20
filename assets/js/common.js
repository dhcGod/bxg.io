define( [
    'jquery'
    ,'template'
    , 'nprogress'
    ,'cookie']
    ,function($,template,nprogress){
    if(!$.cookie('PHPSESSID')&&location.pathname!='/index.php/login'){
        location.pathname='/index.php/login';
        return;
    };
        if(location.pathname=='/index.php/login')return;
        $(document).ajaxStart(function(){
            nprogress.start();
            //进度加载
            if($('#itcast_cover').length>0){
                $('#itcast_cover').show();
                return;
            }
            $('<div id="itcast_cover"><img src="/assets/images/loading.gif"></div>')
                .appendTo('body');
        }).ajaxStop(function(){
            nprogress.done();
            //隐藏进度条
            $('#itcast_cover').fadeOut();
        });


    var profile = JSON.parse($.cookie('profile'));
    var html = template('profileId',profile);
    $('.aside .profile').html(html);

        $.ajax({
            url:'/api/teacher'
        })
})
//判断在本地是否登录过
// 判断cookie里是否含有phpsessid 跟页是否在登录页面上
//if(!$.cookie('PHPSESSID') && location.pathname!='/index.php/login'){
//    //跳转到登录页面
//   location.pathname = '/index.php/login';
//}
//var profile = JSON.parse($.cookie('profile'));
//var html = template('profileId',profile);
//$('.aside .profile').html(html);