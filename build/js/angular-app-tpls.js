angular.module('app.tpls', ['views/angular-github-activity.tpl.html']);

angular.module("views/angular-github-activity.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/angular-github-activity.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-6\">\n" +
    "\n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"col-sm-6\">\n" +
    "            <github-activity events=\"events\" options=\"options\"></github-activity>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);
