angular.module('app.header', []).directive('header', [()=>{
        
        
        require('./header.scss');
    return {

        restrict: 'AE',
        template: require('./header.html'),
        link: function (scope, element, attr) {

            scope.barAnimation = function(){

                $('#top_bar').animate({top:'-2 px'},500)

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