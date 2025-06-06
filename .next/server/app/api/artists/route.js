/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/artists/route";
exports.ids = ["app/api/artists/route"];
exports.modules = {

/***/ "(rsc)/./node_modules/@supabase/realtime-js/dist/main sync recursive":
/*!************************************************************!*\
  !*** ./node_modules/@supabase/realtime-js/dist/main/ sync ***!
  \************************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "(rsc)/./node_modules/@supabase/realtime-js/dist/main sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fartists%2Froute&page=%2Fapi%2Fartists%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fartists%2Froute.ts&appDir=%2FUsers%2Fphilip%2FDesktop%2Fengeloop-website%2Fengeloop-records-old%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fphilip%2FDesktop%2Fengeloop-website%2Fengeloop-records-old&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fartists%2Froute&page=%2Fapi%2Fartists%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fartists%2Froute.ts&appDir=%2FUsers%2Fphilip%2FDesktop%2Fengeloop-website%2Fengeloop-records-old%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fphilip%2FDesktop%2Fengeloop-website%2Fengeloop-records-old&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_philip_Desktop_engeloop_website_engeloop_records_old_src_app_api_artists_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/artists/route.ts */ \"(rsc)/./src/app/api/artists/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/artists/route\",\n        pathname: \"/api/artists\",\n        filename: \"route\",\n        bundlePath: \"app/api/artists/route\"\n    },\n    resolvedPagePath: \"/Users/philip/Desktop/engeloop-website/engeloop-records-old/src/app/api/artists/route.ts\",\n    nextConfigOutput,\n    userland: _Users_philip_Desktop_engeloop_website_engeloop_records_old_src_app_api_artists_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhcnRpc3RzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhcnRpc3RzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYXJ0aXN0cyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnBoaWxpcCUyRkRlc2t0b3AlMkZlbmdlbG9vcC13ZWJzaXRlJTJGZW5nZWxvb3AtcmVjb3Jkcy1vbGQlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGcGhpbGlwJTJGRGVza3RvcCUyRmVuZ2Vsb29wLXdlYnNpdGUlMkZlbmdlbG9vcC1yZWNvcmRzLW9sZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDd0M7QUFDckg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9waGlsaXAvRGVza3RvcC9lbmdlbG9vcC13ZWJzaXRlL2VuZ2Vsb29wLXJlY29yZHMtb2xkL3NyYy9hcHAvYXBpL2FydGlzdHMvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2FydGlzdHMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hcnRpc3RzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hcnRpc3RzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3BoaWxpcC9EZXNrdG9wL2VuZ2Vsb29wLXdlYnNpdGUvZW5nZWxvb3AtcmVjb3Jkcy1vbGQvc3JjL2FwcC9hcGkvYXJ0aXN0cy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fartists%2Froute&page=%2Fapi%2Fartists%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fartists%2Froute.ts&appDir=%2FUsers%2Fphilip%2FDesktop%2Fengeloop-website%2Fengeloop-records-old%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fphilip%2FDesktop%2Fengeloop-website%2Fengeloop-records-old&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/artists/route.ts":
/*!**************************************!*\
  !*** ./src/app/api/artists/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/supabase */ \"(rsc)/./src/lib/supabase.ts\");\n\n\nasync function GET() {\n    try {\n        const supabase = (0,_lib_supabase__WEBPACK_IMPORTED_MODULE_1__.getServiceRoleSupabase)();\n        const { data, error } = await supabase.from(\"artists\").select(\"id, artist_name, image_url, spotify_url, apple_music_url, instagram_url\").order(\"artist_name\", {\n            ascending: true\n        });\n        if (error) {\n            const { error: errorMsg, status } = (0,_lib_supabase__WEBPACK_IMPORTED_MODULE_1__.handleSupabaseError)(error, \"GET /api/artists\");\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: errorMsg\n            }, {\n                status\n            });\n        }\n        console.log(`Fetched ${data?.length || 0} artists from database`);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(data || []);\n    } catch (error) {\n        console.error(\"API error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hcnRpc3RzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQztBQUNrQztBQUV0RSxlQUFlRztJQUNwQixJQUFJO1FBQ0YsTUFBTUMsV0FBV0gscUVBQXNCQTtRQUV2QyxNQUFNLEVBQUVJLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUcsTUFBTUYsU0FDM0JHLElBQUksQ0FBQyxXQUNMQyxNQUFNLENBQ0wsMkVBRURDLEtBQUssQ0FBQyxlQUFlO1lBQUVDLFdBQVc7UUFBSztRQUUxQyxJQUFJSixPQUFPO1lBQ1QsTUFBTSxFQUFFQSxPQUFPSyxRQUFRLEVBQUVDLE1BQU0sRUFBRSxHQUFHVixrRUFBbUJBLENBQ3JESSxPQUNBO1lBRUYsT0FBT04scURBQVlBLENBQUNhLElBQUksQ0FBQztnQkFBRVAsT0FBT0s7WUFBUyxHQUFHO2dCQUFFQztZQUFPO1FBQ3pEO1FBRUFFLFFBQVFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRVYsTUFBTVcsVUFBVSxFQUFFLHNCQUFzQixDQUFDO1FBQ2hFLE9BQU9oQixxREFBWUEsQ0FBQ2EsSUFBSSxDQUFDUixRQUFRLEVBQUU7SUFDckMsRUFBRSxPQUFPQyxPQUFnQjtRQUN2QlEsUUFBUVIsS0FBSyxDQUFDLGNBQWNBO1FBQzVCLE9BQU9OLHFEQUFZQSxDQUFDYSxJQUFJLENBQ3RCO1lBQUVQLE9BQU87UUFBd0IsR0FDakM7WUFBRU0sUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXAvRGVza3RvcC9lbmdlbG9vcC13ZWJzaXRlL2VuZ2Vsb29wLXJlY29yZHMtb2xkL3NyYy9hcHAvYXBpL2FydGlzdHMvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRTZXJ2aWNlUm9sZVN1cGFiYXNlLCBoYW5kbGVTdXBhYmFzZUVycm9yIH0gZnJvbSBcIkAvbGliL3N1cGFiYXNlXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBnZXRTZXJ2aWNlUm9sZVN1cGFiYXNlKCk7XG5cbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgLmZyb20oXCJhcnRpc3RzXCIpXG4gICAgICAuc2VsZWN0KFxuICAgICAgICBcImlkLCBhcnRpc3RfbmFtZSwgaW1hZ2VfdXJsLCBzcG90aWZ5X3VybCwgYXBwbGVfbXVzaWNfdXJsLCBpbnN0YWdyYW1fdXJsXCJcbiAgICAgIClcbiAgICAgIC5vcmRlcihcImFydGlzdF9uYW1lXCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjb25zdCB7IGVycm9yOiBlcnJvck1zZywgc3RhdHVzIH0gPSBoYW5kbGVTdXBhYmFzZUVycm9yKFxuICAgICAgICBlcnJvcixcbiAgICAgICAgXCJHRVQgL2FwaS9hcnRpc3RzXCJcbiAgICAgICk7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogZXJyb3JNc2cgfSwgeyBzdGF0dXMgfSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coYEZldGNoZWQgJHtkYXRhPy5sZW5ndGggfHwgMH0gYXJ0aXN0cyBmcm9tIGRhdGFiYXNlYCk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGRhdGEgfHwgW10pO1xuICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJBUEkgZXJyb3I6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiBcIkludGVybmFsIHNlcnZlciBlcnJvclwiIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0U2VydmljZVJvbGVTdXBhYmFzZSIsImhhbmRsZVN1cGFiYXNlRXJyb3IiLCJHRVQiLCJzdXBhYmFzZSIsImRhdGEiLCJlcnJvciIsImZyb20iLCJzZWxlY3QiLCJvcmRlciIsImFzY2VuZGluZyIsImVycm9yTXNnIiwic3RhdHVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/artists/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/supabase.ts":
/*!*****************************!*\
  !*** ./src/lib/supabase.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createClient: () => (/* binding */ createClient),\n/* harmony export */   createServerSupabaseClient: () => (/* binding */ createServerSupabaseClient),\n/* harmony export */   getServiceRoleSupabase: () => (/* binding */ getServiceRoleSupabase),\n/* harmony export */   handleSupabaseError: () => (/* binding */ handleSupabaseError),\n/* harmony export */   supabase: () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_ssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/ssr */ \"(rsc)/./node_modules/@supabase/ssr/dist/module/index.js\");\n\nconst supabaseUrl = \"https://asmtfuwmembnntccuoja.supabase.co\";\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzbXRmdXdtZW1ibm50Y2N1b2phIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4MDgzOTUsImV4cCI6MjA2NDM4NDM5NX0.fixKhQtCnonmn5ulqSTRV3u6gZ0tIia2UNminJt83Dg\";\nconst supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;\n// Client-side Supabase client (for frontend components)\nfunction createClient() {\n    return (0,_supabase_ssr__WEBPACK_IMPORTED_MODULE_0__.createBrowserClient)(supabaseUrl, supabaseAnonKey);\n}\n// Server-side Supabase client (for API routes and server components)\nasync function createServerSupabaseClient(cookieStore) {\n    // If cookieStore is provided (from API routes), use it\n    // Otherwise, import cookies from next/headers (for server components)\n    let cookiesStore = cookieStore;\n    if (!cookiesStore) {\n        const { cookies } = await __webpack_require__.e(/*! import() */ \"vendor-chunks/next\").then(__webpack_require__.bind(__webpack_require__, /*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\"));\n        cookiesStore = await cookies();\n    }\n    return (0,_supabase_ssr__WEBPACK_IMPORTED_MODULE_0__.createServerClient)(supabaseUrl, supabaseAnonKey, {\n        cookies: {\n            getAll () {\n                return cookiesStore.getAll();\n            },\n            setAll (cookiesToSet) {\n                try {\n                    cookiesToSet.forEach(({ name, value, options })=>{\n                        cookiesStore.set(name, value, options);\n                    });\n                } catch  {\n                // The `setAll` method was called from a Server Component.\n                // This can be ignored if you have middleware refreshing\n                // user sessions.\n                }\n            }\n        }\n    });\n}\n// Service role client for admin operations (use sparingly)\nfunction getServiceRoleSupabase() {\n    return (0,_supabase_ssr__WEBPACK_IMPORTED_MODULE_0__.createServerClient)(supabaseUrl, supabaseServiceKey, {\n        cookies: {\n            getAll: ()=>[],\n            setAll: ()=>{}\n        },\n        auth: {\n            autoRefreshToken: false,\n            persistSession: false\n        }\n    });\n}\n// Legacy client for backwards compatibility (deprecated - remove gradually)\nconst supabase = (0,_supabase_ssr__WEBPACK_IMPORTED_MODULE_0__.createBrowserClient)(supabaseUrl, supabaseAnonKey);\n// Type-safe error handling helper\nfunction handleSupabaseError(error, context) {\n    console.error(`Supabase error in ${context}:`, error);\n    // Type guard to check if error has expected properties\n    if (error && typeof error === \"object\" && \"code\" in error) {\n        const typedError = error;\n        if (typedError.code === \"PGRST116\") {\n            return {\n                error: \"No data found\",\n                status: 404\n            };\n        }\n        if (typedError.code === \"23505\") {\n            return {\n                error: \"Data already exists\",\n                status: 409\n            };\n        }\n        return {\n            error: typedError.message || \"Database operation failed\",\n            status: 500\n        };\n    }\n    // Fallback for unknown error types\n    return {\n        error: error instanceof Error ? error.message : \"Database operation failed\",\n        status: 500\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3N1cGFiYXNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3RTtBQUd4RSxNQUFNRSxjQUFjQywwQ0FBb0M7QUFDeEQsTUFBTUcsa0JBQWtCSCxrTkFBeUM7QUFDakUsTUFBTUsscUJBQXFCTCxRQUFRQyxHQUFHLENBQUNLLHlCQUF5QjtBQUVoRSx3REFBd0Q7QUFDakQsU0FBU0M7SUFDZCxPQUFPVixrRUFBbUJBLENBQUNFLGFBQWFJO0FBQzFDO0FBRUEscUVBQXFFO0FBQzlELGVBQWVLLDJCQUNwQkMsV0FBb0M7SUFFcEMsdURBQXVEO0lBQ3ZELHNFQUFzRTtJQUN0RSxJQUFJQyxlQUFlRDtJQUVuQixJQUFJLENBQUNDLGNBQWM7UUFDakIsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBRyxNQUFNLG9MQUFzQjtRQUNoREQsZUFBZSxNQUFNQztJQUN2QjtJQUVBLE9BQU9iLGlFQUFrQkEsQ0FBQ0MsYUFBYUksaUJBQWlCO1FBQ3REUSxTQUFTO1lBQ1BDO2dCQUNFLE9BQU9GLGFBQWFFLE1BQU07WUFDNUI7WUFDQUMsUUFBT0MsWUFBWTtnQkFDakIsSUFBSTtvQkFDRkEsYUFBYUMsT0FBTyxDQUFDLENBQUMsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRTt3QkFDNUNSLGFBQWFTLEdBQUcsQ0FBQ0gsTUFBTUMsT0FBT0M7b0JBQ2hDO2dCQUNGLEVBQUUsT0FBTTtnQkFDTiwwREFBMEQ7Z0JBQzFELHdEQUF3RDtnQkFDeEQsaUJBQWlCO2dCQUNuQjtZQUNGO1FBQ0Y7SUFDRjtBQUNGO0FBRUEsMkRBQTJEO0FBQ3BELFNBQVNFO0lBQ2QsT0FBT3RCLGlFQUFrQkEsQ0FBQ0MsYUFBYU0sb0JBQW9CO1FBQ3pETSxTQUFTO1lBQ1BDLFFBQVEsSUFBTSxFQUFFO1lBQ2hCQyxRQUFRLEtBQU87UUFDakI7UUFDQVEsTUFBTTtZQUNKQyxrQkFBa0I7WUFDbEJDLGdCQUFnQjtRQUNsQjtJQUNGO0FBQ0Y7QUFFQSw0RUFBNEU7QUFDckUsTUFBTUMsV0FBVzNCLGtFQUFtQkEsQ0FBQ0UsYUFBYUksaUJBQWlCO0FBRTFFLGtDQUFrQztBQUMzQixTQUFTc0Isb0JBQW9CQyxLQUFjLEVBQUVDLE9BQWU7SUFDakVDLFFBQVFGLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFQyxRQUFRLENBQUMsQ0FBQyxFQUFFRDtJQUUvQyx1REFBdUQ7SUFDdkQsSUFBSUEsU0FBUyxPQUFPQSxVQUFVLFlBQVksVUFBVUEsT0FBTztRQUN6RCxNQUFNRyxhQUFhSDtRQUVuQixJQUFJRyxXQUFXQyxJQUFJLEtBQUssWUFBWTtZQUNsQyxPQUFPO2dCQUFFSixPQUFPO2dCQUFpQkssUUFBUTtZQUFJO1FBQy9DO1FBRUEsSUFBSUYsV0FBV0MsSUFBSSxLQUFLLFNBQVM7WUFDL0IsT0FBTztnQkFBRUosT0FBTztnQkFBdUJLLFFBQVE7WUFBSTtRQUNyRDtRQUVBLE9BQU87WUFDTEwsT0FBT0csV0FBV0csT0FBTyxJQUFJO1lBQzdCRCxRQUFRO1FBQ1Y7SUFDRjtJQUVBLG1DQUFtQztJQUNuQyxPQUFPO1FBQ0xMLE9BQU9BLGlCQUFpQk8sUUFBUVAsTUFBTU0sT0FBTyxHQUFHO1FBQ2hERCxRQUFRO0lBQ1Y7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL3BoaWxpcC9EZXNrdG9wL2VuZ2Vsb29wLXdlYnNpdGUvZW5nZWxvb3AtcmVjb3Jkcy1vbGQvc3JjL2xpYi9zdXBhYmFzZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVCcm93c2VyQ2xpZW50LCBjcmVhdGVTZXJ2ZXJDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3NzclwiO1xuaW1wb3J0IHR5cGUgeyBSZWFkb25seVJlcXVlc3RDb29raWVzIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvd2ViL3NwZWMtZXh0ZW5zaW9uL2FkYXB0ZXJzL3JlcXVlc3QtY29va2llc1wiO1xuXG5jb25zdCBzdXBhYmFzZVVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCE7XG5jb25zdCBzdXBhYmFzZUFub25LZXkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSE7XG5jb25zdCBzdXBhYmFzZVNlcnZpY2VLZXkgPSBwcm9jZXNzLmVudi5TVVBBQkFTRV9TRVJWSUNFX1JPTEVfS0VZITtcblxuLy8gQ2xpZW50LXNpZGUgU3VwYWJhc2UgY2xpZW50IChmb3IgZnJvbnRlbmQgY29tcG9uZW50cylcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDbGllbnQoKSB7XG4gIHJldHVybiBjcmVhdGVCcm93c2VyQ2xpZW50KHN1cGFiYXNlVXJsLCBzdXBhYmFzZUFub25LZXkpO1xufVxuXG4vLyBTZXJ2ZXItc2lkZSBTdXBhYmFzZSBjbGllbnQgKGZvciBBUEkgcm91dGVzIGFuZCBzZXJ2ZXIgY29tcG9uZW50cylcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTZXJ2ZXJTdXBhYmFzZUNsaWVudChcbiAgY29va2llU3RvcmU/OiBSZWFkb25seVJlcXVlc3RDb29raWVzXG4pIHtcbiAgLy8gSWYgY29va2llU3RvcmUgaXMgcHJvdmlkZWQgKGZyb20gQVBJIHJvdXRlcyksIHVzZSBpdFxuICAvLyBPdGhlcndpc2UsIGltcG9ydCBjb29raWVzIGZyb20gbmV4dC9oZWFkZXJzIChmb3Igc2VydmVyIGNvbXBvbmVudHMpXG4gIGxldCBjb29raWVzU3RvcmUgPSBjb29raWVTdG9yZTtcblxuICBpZiAoIWNvb2tpZXNTdG9yZSkge1xuICAgIGNvbnN0IHsgY29va2llcyB9ID0gYXdhaXQgaW1wb3J0KFwibmV4dC9oZWFkZXJzXCIpO1xuICAgIGNvb2tpZXNTdG9yZSA9IGF3YWl0IGNvb2tpZXMoKTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVTZXJ2ZXJDbGllbnQoc3VwYWJhc2VVcmwsIHN1cGFiYXNlQW5vbktleSwge1xuICAgIGNvb2tpZXM6IHtcbiAgICAgIGdldEFsbCgpIHtcbiAgICAgICAgcmV0dXJuIGNvb2tpZXNTdG9yZS5nZXRBbGwoKTtcbiAgICAgIH0sXG4gICAgICBzZXRBbGwoY29va2llc1RvU2V0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29va2llc1RvU2V0LmZvckVhY2goKHsgbmFtZSwgdmFsdWUsIG9wdGlvbnMgfSkgPT4ge1xuICAgICAgICAgICAgY29va2llc1N0b3JlLnNldChuYW1lLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIC8vIFRoZSBgc2V0QWxsYCBtZXRob2Qgd2FzIGNhbGxlZCBmcm9tIGEgU2VydmVyIENvbXBvbmVudC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBiZSBpZ25vcmVkIGlmIHlvdSBoYXZlIG1pZGRsZXdhcmUgcmVmcmVzaGluZ1xuICAgICAgICAgIC8vIHVzZXIgc2Vzc2lvbnMuXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cbi8vIFNlcnZpY2Ugcm9sZSBjbGllbnQgZm9yIGFkbWluIG9wZXJhdGlvbnMgKHVzZSBzcGFyaW5nbHkpXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmljZVJvbGVTdXBhYmFzZSgpIHtcbiAgcmV0dXJuIGNyZWF0ZVNlcnZlckNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VTZXJ2aWNlS2V5LCB7XG4gICAgY29va2llczoge1xuICAgICAgZ2V0QWxsOiAoKSA9PiBbXSxcbiAgICAgIHNldEFsbDogKCkgPT4ge30sXG4gICAgfSxcbiAgICBhdXRoOiB7XG4gICAgICBhdXRvUmVmcmVzaFRva2VuOiBmYWxzZSxcbiAgICAgIHBlcnNpc3RTZXNzaW9uOiBmYWxzZSxcbiAgICB9LFxuICB9KTtcbn1cblxuLy8gTGVnYWN5IGNsaWVudCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgKGRlcHJlY2F0ZWQgLSByZW1vdmUgZ3JhZHVhbGx5KVxuZXhwb3J0IGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQnJvd3NlckNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VBbm9uS2V5KTtcblxuLy8gVHlwZS1zYWZlIGVycm9yIGhhbmRsaW5nIGhlbHBlclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVN1cGFiYXNlRXJyb3IoZXJyb3I6IHVua25vd24sIGNvbnRleHQ6IHN0cmluZykge1xuICBjb25zb2xlLmVycm9yKGBTdXBhYmFzZSBlcnJvciBpbiAke2NvbnRleHR9OmAsIGVycm9yKTtcblxuICAvLyBUeXBlIGd1YXJkIHRvIGNoZWNrIGlmIGVycm9yIGhhcyBleHBlY3RlZCBwcm9wZXJ0aWVzXG4gIGlmIChlcnJvciAmJiB0eXBlb2YgZXJyb3IgPT09IFwib2JqZWN0XCIgJiYgXCJjb2RlXCIgaW4gZXJyb3IpIHtcbiAgICBjb25zdCB0eXBlZEVycm9yID0gZXJyb3IgYXMgeyBjb2RlOiBzdHJpbmc7IG1lc3NhZ2U/OiBzdHJpbmcgfTtcblxuICAgIGlmICh0eXBlZEVycm9yLmNvZGUgPT09IFwiUEdSU1QxMTZcIikge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiTm8gZGF0YSBmb3VuZFwiLCBzdGF0dXM6IDQwNCB9O1xuICAgIH1cblxuICAgIGlmICh0eXBlZEVycm9yLmNvZGUgPT09IFwiMjM1MDVcIikge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiRGF0YSBhbHJlYWR5IGV4aXN0c1wiLCBzdGF0dXM6IDQwOSB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogdHlwZWRFcnJvci5tZXNzYWdlIHx8IFwiRGF0YWJhc2Ugb3BlcmF0aW9uIGZhaWxlZFwiLFxuICAgICAgc3RhdHVzOiA1MDAsXG4gICAgfTtcbiAgfVxuXG4gIC8vIEZhbGxiYWNrIGZvciB1bmtub3duIGVycm9yIHR5cGVzXG4gIHJldHVybiB7XG4gICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJEYXRhYmFzZSBvcGVyYXRpb24gZmFpbGVkXCIsXG4gICAgc3RhdHVzOiA1MDAsXG4gIH07XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQnJvd3NlckNsaWVudCIsImNyZWF0ZVNlcnZlckNsaWVudCIsInN1cGFiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCIsInN1cGFiYXNlQW5vbktleSIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZIiwic3VwYWJhc2VTZXJ2aWNlS2V5IiwiU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWSIsImNyZWF0ZUNsaWVudCIsImNyZWF0ZVNlcnZlclN1cGFiYXNlQ2xpZW50IiwiY29va2llU3RvcmUiLCJjb29raWVzU3RvcmUiLCJjb29raWVzIiwiZ2V0QWxsIiwic2V0QWxsIiwiY29va2llc1RvU2V0IiwiZm9yRWFjaCIsIm5hbWUiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJzZXQiLCJnZXRTZXJ2aWNlUm9sZVN1cGFiYXNlIiwiYXV0aCIsImF1dG9SZWZyZXNoVG9rZW4iLCJwZXJzaXN0U2Vzc2lvbiIsInN1cGFiYXNlIiwiaGFuZGxlU3VwYWJhc2VFcnJvciIsImVycm9yIiwiY29udGV4dCIsImNvbnNvbGUiLCJ0eXBlZEVycm9yIiwiY29kZSIsInN0YXR1cyIsIm1lc3NhZ2UiLCJFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/supabase.ts\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "?32c4":
/*!****************************!*\
  !*** bufferutil (ignored) ***!
  \****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?66e9":
/*!********************************!*\
  !*** utf-8-validate (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/ws","vendor-chunks/whatwg-url","vendor-chunks/tr46","vendor-chunks/webidl-conversions","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fartists%2Froute&page=%2Fapi%2Fartists%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fartists%2Froute.ts&appDir=%2FUsers%2Fphilip%2FDesktop%2Fengeloop-website%2Fengeloop-records-old%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fphilip%2FDesktop%2Fengeloop-website%2Fengeloop-records-old&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();