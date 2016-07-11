angular.module('app.menupage', []).directive('menupage', [()=>{


        require('./menupage.scss');
return {

    restrict: 'AE',
    template: require('./menupage.html'),
    link: function (scope, element, attr) {



    }
}


}])