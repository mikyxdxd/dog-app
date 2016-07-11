angular.module('app.header', []).directive('header', [()=>{
        
        require('./header.scss');
    return {

        restrict: 'AE',
        template: require('./header.html'),
        link: function (scope, element, attr) {

            scope.barAnimation = function(){

                $('#top_bar').stop(true,false).animate({top:'-3px'},200,'easeOutQuart');
                $('#bottom_bar').stop(true,false).animate({bottom:'-3px'},200,'easeOutQuart');

            }


            scope.barCross = ()=>{


                $('#top_bar').addClass('top_cross');
                $('#bottom_bar').addClass('bottom_cross');

            }

            scope.barAnimationDown = function(){


                $('#top_bar').stop(true,false).animate({top:'0px'},200,'easeOutQuart');
                $('#bottom_bar').stop(true,false).animate({bottom:'0px'},200,'easeOutQuart');

            }

            scope.growMenuPage = function(){

                if( $('#top_bar').hasClass('top_cross')){

                    $('#top_bar').removeClass('top_cross');
                    $('#bottom_bar').removeClass('bottom_cross');
                    $('#top_bar').css('background','black');
                    $('#bottom_bar').css('background','black');
                    $('#menupage .item').each(function(i,e){

                        $(e).stop(true,false).delay(i*200).animate({opacity:'0'},300);

                    })

                    $('#menupage').stop(true,false).delay(1000).animate({'width':'0vw'},500,'easeOutQuint');


                }else{




                $('#top_bar').addClass('top_cross');
                $('#bottom_bar').addClass('bottom_cross');
                $('#header #menu_container').stop(true,false).delay(500).animate({opacity:'0'},200,()=>{

                    $('#menupage').stop(true,false).animate({'width':'100vw'},500,'easeOutQuint',()=>{
                    $('#top_bar').css('background','white');
                    $('#bottom_bar').css('background','white');

                    $('#header #menu_container').stop(true,false).animate({opacity:'1'},200);

                    $('#menupage .item').each(function(i,e){

                        $(e).stop(true,false).delay(i*200).animate({opacity:'1'},300);

                    })

                })


            });



                }

            }
        }
    }


}])