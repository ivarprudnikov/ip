angular.module('tApp')
	.controller('WorkGalleryController', ['Projects','$scope','$rootScope','$timeout','$stateParams',
		function (Projects,$scope,$rootScope,$timeout,$stateParams) {

		var yearHeight, yearLabelHeight, monthHeight, codeTimer;


			// TODO change data depending on state params !!
			//////////////////////////////////////////////

		var data = Projects.data();
		$scope.max = 6;
		$scope.offset = 0;
		$scope.projects = data; //.slice($scope.offset,$scope.max-1);

		// MOVING TEXT

		$scope.codeText = '010100100110100101001001001010100101010111001010010010100000001101110010100101001010010011001010101001011001010010101010010010100101011111100100101001001101001010010101111010101010111100001010111001010100110101001010100100110100101001001001010100101010111001010010010100000001101110010100101001010010011001010101001011001010010101010010010100101011111100100101001001101001010010101111010101010111100001010111001010100110101001'

		$scope.execCodeTimer = function(){
			codeTimer = $timeout(function() {
				var t = $scope.codeText;
				var a = t.slice(0,t.length - 3);
				var b = t.slice(t.length - 3);
				$scope.codeText = b + a;

				$scope.execCodeTimer();

			}, 200);
		}


		// EXECUTE TIMERS
		//////////////////////
		$scope.execCodeTimer()


		// CLEANUP
		//////////////////////

		$scope.$on("$destroy", function() {
			if (codeTimer) {
				$timeout.cancel(codeTimer);
			}
		});

	}]);
