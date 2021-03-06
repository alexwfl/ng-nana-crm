/**
 * 左侧 menu 菜单
 */

angular.module('navleftMoudle',[]).controller('NavleftCtrl', 
	['$scope', '$http','settingData',
	function ($scope, $http,settingData) {
		
		var menus = [
		// {
		// 	icon:'fa fa-paper-plane-o',
		// 	title:'圈内信',
		// 	role:0,
		// 	subs:[
		// 		{
		// 			text:'圈内信',
		// 			link:''
		// 		}
		// 	]
		// },
		{
			icon:'fa fa-users',
			title:'客户管理',
			role:0,
			subs:[
				{
					text:'潜在客户',
					link:'web.clue'
				},
				{
					text:'客户',
					link:'web.customer'
				},
				{
					text:'项目',
					link:'web.business'
				},
				{
					text:'客户设置',
					link:'web.customerSetting'
				},

			]
		},
		{
			icon:'fa fa-diamond',
			title:'产品管理',
			role:0,
			subs:[
				{
					text:'全部产品',
					link:'web.products'
				},
				{
					text:'产品分类',
					link:'web.productsCate'
				},
				{
					text:'新建产品',
					link:'web.productsAdd'
				},

			]
		},
		{
			icon:'fa fa-file-pdf-o',
			title:'报价单',
			role:0,
			subs:[
				{
					text:'报价单总览',
					link:'web.quotation'
				},
				{
					text:'新建报价单',
					link:'web.quotationAdd'
				},
				{
					text:'报价单设置',
					link:'web.quotationSetting'
				}
			]
		},
		{
			icon:'fa fa-phone',
			title:'通讯录',
			role:0,
			subs:[
				{
					text:'全部联系人',
					link:'web.people'
				}
			]
		},
		{
			icon:'fa fa-meh-o',
			title:'团队成员',
			role:10,
			subs:[
				{
					text:'成员列表',
					link:'web.team'
				},
				{
					text:'新建成员',
					link:'web.teamAdd'
				}
			]
		},

	]

	settingData.getRbac().then(function(data){
		$scope.role = data.rbac
		$scope.menus = [];
		menus.map(function (menu) {
			if(menu.role <= $scope.role){
				$scope.menus.push(menu)
			}
		 	return $scope.menu; 
		});
	})
	

}]);