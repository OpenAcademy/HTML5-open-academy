var app = angular.module("app" ,[]);

app.controller("AppCtrl", function($scope) {
	$scope.html = "<!DOCTYPE html>\n<html>\n<head>\n\n</head>\n<body>\n\n\n\n</body>\n</html>";
});

app.directive("editor", function() {
	return {
		restrict: "A",
		transclude: true,
		link: function(scope, element, attrs) {
			function insertTab(elm) {
				var start = elm.get(0).selectionStart;
				var end = elm.get(0).selectionEnd;

				elm.val(elm.val().substring(0, start) + "\t" + elm.val().substring(end));

				elm.get(0).selectionStart = elm.get(0).selectionEnd = start + 1;
			}

			element.bind("keydown", function(e) {
				if(e.keyCode == 9)  {
					insertTab($(this));
					e.preventDefault();
				}
			});
		}
	}
});