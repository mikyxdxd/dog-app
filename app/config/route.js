export default (ngModule) => {

		console.log('load')

		ngModule.config(function($stateProvider,$urlRouterProvider,$httpProvider){

			$urlRouterProvider.otherwise("/main");

			$stateProvider.state('mainPage',{

            	template:"<intro></intro>",
            	url:"/main",

        	})

		})



}