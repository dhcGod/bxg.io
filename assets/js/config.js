/**
 * Created by lenovo on 2017/4/20.
 */
require.config({
    baseUrl:'/',
    paths:{
        //������
        jquery:'node_modules/jquery/dist/jquery',
        template:'node_modules/art-template/lib/template-web',
        cookie:'node_modules/jquery.cookie/jquery.cookie',
        less:'node_modules/less/dist/less',
        nprogress: 'node_modules/nprogress/nprogress',

        //����
        common:'assets/js/common',
        login:'assets/js/index/login'
    }
})
require( ['common','less'] );