angular.module('app.intro',[]).directive('intro',['$state','broadcastService','$window',function($state,broadcastService,$window){

    require ('./intro.css');
    require('./intro.scss');
    return {

        restrict:'AE',
        template:require('./intro.html'),
        link:function(scope,element,attr){

            broadcastService.subscribe('scroll:scroll',function(){

                if($(document).scrollTop() >= $('#stick_nav').offset().top){

                    $('#stick_nav').css({'position':'fixed','top':'0'});
                    $('#top_intro').css('margin-top','100px')
                }
            })
        }
    }

}])