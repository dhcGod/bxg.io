/**
 * Created by lenovo on 2017/4/21.
 */
define(['jquery','template', 'bootstrap'],function($ , template){
    $.ajax({
        url:'/api/teacher',
        type:'get',
        success:function( info ){
            if( info.code == 200){
                var html = template('teacherListTrTpl',{list:info.result});
                $( '#teacherList tbody' ).html( html );
            }
        }
    })
});