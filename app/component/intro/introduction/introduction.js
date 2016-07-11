angular.module('app.introduction',[]).directive('introduction',[()=>{


        require('./introduction.scss');

        return {

            restrict:'AE',
            template:require('./introduction.html'),
            link:function(scope){

                scope.$on('$viewContentLoaded',()=> {

                    window.sr.reveal('.card', {
                    origin: 'top',
                    distance: '100px',
                    viewFactor: 0.2,
                    easing: 'ease-in-out'
                },50);
            })

            }
        }


    }])