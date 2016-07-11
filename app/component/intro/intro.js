import './introduction/introduction'
import './feature/feature'

angular.module('app.intro',['app.introduction','app.feature']).directive('intro',['$state','broadcastService','$window',function($state,broadcastService,$window){

    require('./intro.scss');
    return {

        restrict:'AE',
        template:require('./intro.html'),
        link:function(scope,element,attr){


        }
    }

}])