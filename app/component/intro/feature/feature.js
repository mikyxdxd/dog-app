angular.module('app.feature',[]).directive('feature',['broadcastService',(broadcastService)=>{


        require('./feature.scss');
    return{

        restrict:'AE',
            template:require('./feature.html'),
        link:(scope)=>{


            broadcastService.subscribe('scroll:scroll',()=>{

                console.log('scroll');
            })

        }


    }


    }])