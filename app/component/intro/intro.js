import './introduction/introduction'

angular.module('app.intro',['app.introduction']).directive('intro',['$state','broadcastService','$window',function($state,broadcastService,$window){

    require('./intro.scss');
    return {

        restrict:'AE',
        template:require('./intro.html'),
        link:function(scope,element,attr){


        }
    }

}])