angular.module('app.introduction',[]).directive('introduction',[()=>{


        require('./introduction.scss');

        return {

            restrict:'AE',
            template:require('./introduction.html'),
            link:function(scope,element,attr){


            }
        }


    }])