angular.module('app.header', []).directive('header', [()=>{
        
        
        require('./header.scss');
    return {

        restrict: 'AE',
        template: require('./header.html'),
        link: function (scope, element, attr) {

            scope.barAnimation = function(){

                $('#top_bar').animate({top:'-3px'},300,'easeOutQuart');
                $('#bottom_bar').animate({bottom:'-3px'},300,'easeOutQuart');

            }

            scope.barAnimationDown = function(){


                $('#top_bar').animate({top:'0px'},300,'easeOutQuart');
                $('#bottom_bar').animate({bottom:'0px'},300,'easeOutQuart');

            }

            scope.growMenuPage = function(){

                $('#menupage').animate({'width':'100vw'},500,()=>{

                    $('#menupage .item').each(function(i,e){

                        $(e).delay(i*200).animate({opacity:'1'},300)
                    })

                })

            }
        }
    }


}])