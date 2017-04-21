/**
 * Created by lenovo on 2017/4/21.
 */
define(['jquery','template', 'bootstrap','filter'],function($ , template){
    //加载讲师数据
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


    //添加点击事件
    $('#teacherList').on('click','.teacherInfoShow',function(){
        var teacherId =$(this).attr('data-teacher-id');
        $.ajax({
            url:'/api/teacher/view',
            type:'get',
            data:'tc_id='+teacherId,
            success:function(info){
                if(info.code==200){
                    info.result.tc_hometown=info.result.tc_hometown.split('|').join(' ');
                    info.result.tc_introduce='<p>前端工程师的职责是制作标准优化的代码，并增加交互动态功能，开发JavaScript以及Flash模块，同时结合后台开发技术模拟整体效果，进行丰富互联网的Web开发，致力于通过技术改善用户体验。</p>\n\n<p>前端工程师属于IT技术职业的一种，是近5年发展起来的职业，旧的体系将其定义为Web前端工程师，主要的技术包含：HTML、JavaScript、CSS。但IT技术属于变化比较快的领域，最近发生了很大的变革，新的体系下，前端工程师技术又增加了：nodejs、Hybrid App。</p>\n';
                    var html = template('teacherListid',info.result);
                    $('#teacherModal .panel-body').html( html );
                    $( '#teacherModal' ).modal();
                }
            }
        })
    })
});