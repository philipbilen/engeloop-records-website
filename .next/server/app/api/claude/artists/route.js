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
exports.id = "app/api/claude/artists/route";
exports.ids = ["app/api/claude/artists/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fclaude%2Fartists%2Froute&page=%2Fapi%2Fclaude%2Fartists%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fclaude%2Fartists%2Froute.ts&appDir=%2FUsers%2Fphilip%2FDesktop%2Fengeloop-website%2Fengeloop-records-old%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fphilip%2FDesktop%2Fengeloop-website%2Fengeloop-records-old&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fclaude%2Fartists%2Froute&page=%2Fapi%2Fclaude%2Fartists%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fclaude%2Fartists%2Froute.ts&appDir=%2FUsers%2Fphilip%2FDesktop%2Fengeloop-website%2Fengeloop-records-old%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fphilip%2FDesktop%2Fengeloop-website%2Fengeloop-records-old&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_philip_Desktop_engeloop_website_engeloop_records_old_src_app_api_claude_artists_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/claude/artists/route.ts */ \"(rsc)/./src/app/api/claude/artists/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/claude/artists/route\",\n        pathname: \"/api/claude/artists\",\n        filename: \"route\",\n        bundlePath: \"app/api/claude/artists/route\"\n    },\n    resolvedPagePath: \"/Users/philip/Desktop/engeloop-website/engeloop-records-old/src/app/api/claude/artists/route.ts\",\n    nextConfigOutput,\n    userland: _Users_philip_Desktop_engeloop_website_engeloop_records_old_src_app_api_claude_artists_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjbGF1ZGUlMkZhcnRpc3RzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZjbGF1ZGUlMkZhcnRpc3RzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY2xhdWRlJTJGYXJ0aXN0cyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnBoaWxpcCUyRkRlc2t0b3AlMkZlbmdlbG9vcC13ZWJzaXRlJTJGZW5nZWxvb3AtcmVjb3Jkcy1vbGQlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGcGhpbGlwJTJGRGVza3RvcCUyRmVuZ2Vsb29wLXdlYnNpdGUlMkZlbmdlbG9vcC1yZWNvcmRzLW9sZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDK0M7QUFDNUg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9waGlsaXAvRGVza3RvcC9lbmdlbG9vcC13ZWJzaXRlL2VuZ2Vsb29wLXJlY29yZHMtb2xkL3NyYy9hcHAvYXBpL2NsYXVkZS9hcnRpc3RzL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9jbGF1ZGUvYXJ0aXN0cy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2NsYXVkZS9hcnRpc3RzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jbGF1ZGUvYXJ0aXN0cy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9waGlsaXAvRGVza3RvcC9lbmdlbG9vcC13ZWJzaXRlL2VuZ2Vsb29wLXJlY29yZHMtb2xkL3NyYy9hcHAvYXBpL2NsYXVkZS9hcnRpc3RzL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fclaude%2Fartists%2Froute&page=%2Fapi%2Fclaude%2Fartists%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fclaude%2Fartists%2Froute.ts&appDir=%2FUsers%2Fphilip%2FDesktop%2Fengeloop-website%2Fengeloop-records-old%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fphilip%2FDesktop%2Fengeloop-website%2Fengeloop-records-old&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/claude/artists/route.ts":
/*!*********************************************!*\
  !*** ./src/app/api/claude/artists/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/supabase */ \"(rsc)/./src/lib/supabase.ts\");\n/* harmony import */ var _lib_claude_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/claude-auth */ \"(rsc)/./src/lib/claude-auth.ts\");\n// src/app/api/claude/artists/route.ts\n\n\n\nasync function GET(request) {\n    // Authenticate Claude access\n    const authResult = (0,_lib_claude_auth__WEBPACK_IMPORTED_MODULE_2__.validateClaudeAuth)(request);\n    if (!authResult.authorized) {\n        return (0,_lib_claude_auth__WEBPACK_IMPORTED_MODULE_2__.createUnauthorizedResponse)(authResult.error);\n    }\n    try {\n        const { searchParams } = new URL(request.url);\n        const artistId = searchParams.get(\"id\");\n        const includeInactive = searchParams.get(\"includeInactive\") === \"true\";\n        const format = searchParams.get(\"format\") || \"detailed\"; // 'detailed' or 'summary'\n        const supabase = (0,_lib_supabase__WEBPACK_IMPORTED_MODULE_1__.getServiceRoleSupabase)();\n        let query = supabase.from(\"artists\").select(`\n        id,\n        artist_name,\n        image_url,\n        spotify_url,\n        apple_music_url,\n        instagram_url,\n        spotify_id,\n        created_at,\n        updated_at\n      `);\n        // Filter by specific artist if requested\n        if (artistId) {\n            query = query.eq(\"id\", artistId);\n        }\n        // Order by name for consistent results\n        query = query.order(\"artist_name\", {\n            ascending: true\n        });\n        const { data: artists, error } = await query;\n        if (error) {\n            const { error: errorMsg, status } = (0,_lib_supabase__WEBPACK_IMPORTED_MODULE_1__.handleSupabaseError)(error, \"Claude API: fetch artists\");\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: false,\n                error: errorMsg\n            }, {\n                status\n            });\n        }\n        // Format data for Claude consumption\n        const formattedArtists = (artists || []).map((artist)=>{\n            const baseData = {\n                id: artist.id,\n                artistName: artist.artist_name,\n                imageUrl: artist.image_url || undefined,\n                spotifyUrl: artist.spotify_url || undefined,\n                instagramUrl: artist.instagram_url || undefined,\n                appleMusicUrl: artist.apple_music_url || undefined,\n                spotifyId: artist.spotify_id || undefined,\n                status: \"active\",\n                joinedDate: artist.created_at\n            };\n            // Add summary vs detailed formatting\n            if (format === \"summary\") {\n                return {\n                    id: baseData.id,\n                    artistName: baseData.artistName,\n                    status: baseData.status,\n                    spotifyUrl: baseData.spotifyUrl\n                };\n            }\n            return baseData;\n        });\n        // Response metadata\n        const metadata = {\n            totalArtists: formattedArtists.length,\n            lastUpdated: new Date().toISOString(),\n            format,\n            includeInactive\n        };\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            data: artistId ? formattedArtists[0] || null : formattedArtists,\n            metadata\n        });\n    } catch (error) {\n        console.error(\"Claude Artists API error:\", error);\n        const errorMessage = error instanceof Error ? error.message : \"Unknown error\";\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            error: \"Failed to fetch artist data\",\n            details: errorMessage\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jbGF1ZGUvYXJ0aXN0cy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBQXNDO0FBQ2tCO0FBQ3FCO0FBSWxEO0FBc0JwQixlQUFlSyxJQUFJQyxPQUFvQjtJQUM1Qyw2QkFBNkI7SUFDN0IsTUFBTUMsYUFBYUosb0VBQWtCQSxDQUFDRztJQUN0QyxJQUFJLENBQUNDLFdBQVdDLFVBQVUsRUFBRTtRQUMxQixPQUFPSiw0RUFBMEJBLENBQUNHLFdBQVdFLEtBQUs7SUFDcEQ7SUFFQSxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBRyxJQUFJQyxJQUFJTCxRQUFRTSxHQUFHO1FBQzVDLE1BQU1DLFdBQVdILGFBQWFJLEdBQUcsQ0FBQztRQUNsQyxNQUFNQyxrQkFBa0JMLGFBQWFJLEdBQUcsQ0FBQyx1QkFBdUI7UUFDaEUsTUFBTUUsU0FBU04sYUFBYUksR0FBRyxDQUFDLGFBQWEsWUFBWSwwQkFBMEI7UUFFbkYsTUFBTUcsV0FBV2hCLHFFQUFzQkE7UUFFdkMsSUFBSWlCLFFBQVFELFNBQVNFLElBQUksQ0FBQyxXQUFXQyxNQUFNLENBQUMsQ0FBQzs7Ozs7Ozs7OztNQVUzQyxDQUFDO1FBRUgseUNBQXlDO1FBQ3pDLElBQUlQLFVBQVU7WUFDWkssUUFBUUEsTUFBTUcsRUFBRSxDQUFDLE1BQU1SO1FBQ3pCO1FBRUEsdUNBQXVDO1FBQ3ZDSyxRQUFRQSxNQUFNSSxLQUFLLENBQUMsZUFBZTtZQUFFQyxXQUFXO1FBQUs7UUFFckQsTUFBTSxFQUFFQyxNQUFNQyxPQUFPLEVBQUVoQixLQUFLLEVBQUUsR0FBRyxNQUFNUztRQUV2QyxJQUFJVCxPQUFPO1lBQ1QsTUFBTSxFQUFFQSxPQUFPaUIsUUFBUSxFQUFFQyxNQUFNLEVBQUUsR0FBR3pCLGtFQUFtQkEsQ0FDckRPLE9BQ0E7WUFFRixPQUFPVCxxREFBWUEsQ0FBQzRCLElBQUksQ0FBQztnQkFBRUMsU0FBUztnQkFBT3BCLE9BQU9pQjtZQUFTLEdBQUc7Z0JBQUVDO1lBQU87UUFDekU7UUFFQSxxQ0FBcUM7UUFDckMsTUFBTUcsbUJBQXVDLENBQUNMLFdBQVcsRUFBRSxFQUFFTSxHQUFHLENBQzlELENBQUNDO1lBQ0MsTUFBTUMsV0FBNkI7Z0JBQ2pDQyxJQUFJRixPQUFPRSxFQUFFO2dCQUNiQyxZQUFZSCxPQUFPSSxXQUFXO2dCQUM5QkMsVUFBVUwsT0FBT00sU0FBUyxJQUFJQztnQkFDOUJDLFlBQVlSLE9BQU9TLFdBQVcsSUFBSUY7Z0JBQ2xDRyxjQUFjVixPQUFPVyxhQUFhLElBQUlKO2dCQUN0Q0ssZUFBZVosT0FBT2EsZUFBZSxJQUFJTjtnQkFDekNPLFdBQVdkLE9BQU9lLFVBQVUsSUFBSVI7Z0JBQ2hDWixRQUFRO2dCQUNScUIsWUFBWWhCLE9BQU9pQixVQUFVO1lBQy9CO1lBRUEscUNBQXFDO1lBQ3JDLElBQUlqQyxXQUFXLFdBQVc7Z0JBQ3hCLE9BQU87b0JBQ0xrQixJQUFJRCxTQUFTQyxFQUFFO29CQUNmQyxZQUFZRixTQUFTRSxVQUFVO29CQUMvQlIsUUFBUU0sU0FBU04sTUFBTTtvQkFDdkJhLFlBQVlQLFNBQVNPLFVBQVU7Z0JBQ2pDO1lBQ0Y7WUFFQSxPQUFPUDtRQUNUO1FBR0Ysb0JBQW9CO1FBQ3BCLE1BQU1pQixXQUFXO1lBQ2ZDLGNBQWNyQixpQkFBaUJzQixNQUFNO1lBQ3JDQyxhQUFhLElBQUlDLE9BQU9DLFdBQVc7WUFDbkN2QztZQUNBRDtRQUNGO1FBRUEsT0FBT2YscURBQVlBLENBQUM0QixJQUFJLENBQUM7WUFDdkJDLFNBQVM7WUFDVEwsTUFBTVgsV0FBV2lCLGdCQUFnQixDQUFDLEVBQUUsSUFBSSxPQUFPQTtZQUMvQ29CO1FBQ0Y7SUFDRixFQUFFLE9BQU96QyxPQUFnQjtRQUN2QitDLFFBQVEvQyxLQUFLLENBQUMsNkJBQTZCQTtRQUMzQyxNQUFNZ0QsZUFDSmhELGlCQUFpQmlELFFBQVFqRCxNQUFNa0QsT0FBTyxHQUFHO1FBRTNDLE9BQU8zRCxxREFBWUEsQ0FBQzRCLElBQUksQ0FDdEI7WUFDRUMsU0FBUztZQUNUcEIsT0FBTztZQUNQbUQsU0FBU0g7UUFDWCxHQUNBO1lBQUU5QixRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL3BoaWxpcC9EZXNrdG9wL2VuZ2Vsb29wLXdlYnNpdGUvZW5nZWxvb3AtcmVjb3Jkcy1vbGQvc3JjL2FwcC9hcGkvY2xhdWRlL2FydGlzdHMvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2FwcC9hcGkvY2xhdWRlL2FydGlzdHMvcm91dGUudHNcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldFNlcnZpY2VSb2xlU3VwYWJhc2UsIGhhbmRsZVN1cGFiYXNlRXJyb3IgfSBmcm9tIFwiQC9saWIvc3VwYWJhc2VcIjtcbmltcG9ydCB7XG4gIHZhbGlkYXRlQ2xhdWRlQXV0aCxcbiAgY3JlYXRlVW5hdXRob3JpemVkUmVzcG9uc2UsXG59IGZyb20gXCJAL2xpYi9jbGF1ZGUtYXV0aFwiO1xuXG5pbnRlcmZhY2UgQ2xhdWRlQXJ0aXN0RGF0YSB7XG4gIGlkOiBzdHJpbmc7XG4gIGFydGlzdE5hbWU6IHN0cmluZztcbiAgY29udGFjdEVtYWlsPzogc3RyaW5nO1xuICBpbWFnZVVybD86IHN0cmluZztcbiAgc3BvdGlmeVVybD86IHN0cmluZztcbiAgaW5zdGFncmFtVXJsPzogc3RyaW5nO1xuICBhcHBsZU11c2ljVXJsPzogc3RyaW5nO1xuICBzcG90aWZ5SWQ/OiBzdHJpbmc7XG4gIHN0YXR1czogXCJhY3RpdmVcIiB8IFwiaW5hY3RpdmVcIiB8IFwicHJvc3BlY3RcIjtcbiAgam9pbmVkRGF0ZT86IHN0cmluZztcbiAgbGFzdENvbnRhY3Q/OiBzdHJpbmc7XG4gIGN1cnJlbnRQcm9qZWN0cz86IHN0cmluZ1tdO1xuICBkZWFsVGVybXM/OiB7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIHNwbGl0Pzogc3RyaW5nO1xuICAgIGR1cmF0aW9uPzogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIC8vIEF1dGhlbnRpY2F0ZSBDbGF1ZGUgYWNjZXNzXG4gIGNvbnN0IGF1dGhSZXN1bHQgPSB2YWxpZGF0ZUNsYXVkZUF1dGgocmVxdWVzdCk7XG4gIGlmICghYXV0aFJlc3VsdC5hdXRob3JpemVkKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVVuYXV0aG9yaXplZFJlc3BvbnNlKGF1dGhSZXN1bHQuZXJyb3IhKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICAgIGNvbnN0IGFydGlzdElkID0gc2VhcmNoUGFyYW1zLmdldChcImlkXCIpO1xuICAgIGNvbnN0IGluY2x1ZGVJbmFjdGl2ZSA9IHNlYXJjaFBhcmFtcy5nZXQoXCJpbmNsdWRlSW5hY3RpdmVcIikgPT09IFwidHJ1ZVwiO1xuICAgIGNvbnN0IGZvcm1hdCA9IHNlYXJjaFBhcmFtcy5nZXQoXCJmb3JtYXRcIikgfHwgXCJkZXRhaWxlZFwiOyAvLyAnZGV0YWlsZWQnIG9yICdzdW1tYXJ5J1xuXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBnZXRTZXJ2aWNlUm9sZVN1cGFiYXNlKCk7XG5cbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZS5mcm9tKFwiYXJ0aXN0c1wiKS5zZWxlY3QoYFxuICAgICAgICBpZCxcbiAgICAgICAgYXJ0aXN0X25hbWUsXG4gICAgICAgIGltYWdlX3VybCxcbiAgICAgICAgc3BvdGlmeV91cmwsXG4gICAgICAgIGFwcGxlX211c2ljX3VybCxcbiAgICAgICAgaW5zdGFncmFtX3VybCxcbiAgICAgICAgc3BvdGlmeV9pZCxcbiAgICAgICAgY3JlYXRlZF9hdCxcbiAgICAgICAgdXBkYXRlZF9hdFxuICAgICAgYCk7XG5cbiAgICAvLyBGaWx0ZXIgYnkgc3BlY2lmaWMgYXJ0aXN0IGlmIHJlcXVlc3RlZFxuICAgIGlmIChhcnRpc3RJZCkge1xuICAgICAgcXVlcnkgPSBxdWVyeS5lcShcImlkXCIsIGFydGlzdElkKTtcbiAgICB9XG5cbiAgICAvLyBPcmRlciBieSBuYW1lIGZvciBjb25zaXN0ZW50IHJlc3VsdHNcbiAgICBxdWVyeSA9IHF1ZXJ5Lm9yZGVyKFwiYXJ0aXN0X25hbWVcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSk7XG5cbiAgICBjb25zdCB7IGRhdGE6IGFydGlzdHMsIGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgY29uc3QgeyBlcnJvcjogZXJyb3JNc2csIHN0YXR1cyB9ID0gaGFuZGxlU3VwYWJhc2VFcnJvcihcbiAgICAgICAgZXJyb3IsXG4gICAgICAgIFwiQ2xhdWRlIEFQSTogZmV0Y2ggYXJ0aXN0c1wiXG4gICAgICApO1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvck1zZyB9LCB7IHN0YXR1cyB9KTtcbiAgICB9XG5cbiAgICAvLyBGb3JtYXQgZGF0YSBmb3IgQ2xhdWRlIGNvbnN1bXB0aW9uXG4gICAgY29uc3QgZm9ybWF0dGVkQXJ0aXN0czogQ2xhdWRlQXJ0aXN0RGF0YVtdID0gKGFydGlzdHMgfHwgW10pLm1hcChcbiAgICAgIChhcnRpc3QpID0+IHtcbiAgICAgICAgY29uc3QgYmFzZURhdGE6IENsYXVkZUFydGlzdERhdGEgPSB7XG4gICAgICAgICAgaWQ6IGFydGlzdC5pZCxcbiAgICAgICAgICBhcnRpc3ROYW1lOiBhcnRpc3QuYXJ0aXN0X25hbWUsXG4gICAgICAgICAgaW1hZ2VVcmw6IGFydGlzdC5pbWFnZV91cmwgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgIHNwb3RpZnlVcmw6IGFydGlzdC5zcG90aWZ5X3VybCB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgaW5zdGFncmFtVXJsOiBhcnRpc3QuaW5zdGFncmFtX3VybCB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgYXBwbGVNdXNpY1VybDogYXJ0aXN0LmFwcGxlX211c2ljX3VybCB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgc3BvdGlmeUlkOiBhcnRpc3Quc3BvdGlmeV9pZCB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgc3RhdHVzOiBcImFjdGl2ZVwiLCAvLyBEZWZhdWx0IGZvciBub3cgLSB5b3UgY2FuIGFkZCBhIHN0YXR1cyBmaWVsZCB0byB5b3VyIERCIGxhdGVyXG4gICAgICAgICAgam9pbmVkRGF0ZTogYXJ0aXN0LmNyZWF0ZWRfYXQsXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQWRkIHN1bW1hcnkgdnMgZGV0YWlsZWQgZm9ybWF0dGluZ1xuICAgICAgICBpZiAoZm9ybWF0ID09PSBcInN1bW1hcnlcIikge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogYmFzZURhdGEuaWQsXG4gICAgICAgICAgICBhcnRpc3ROYW1lOiBiYXNlRGF0YS5hcnRpc3ROYW1lLFxuICAgICAgICAgICAgc3RhdHVzOiBiYXNlRGF0YS5zdGF0dXMsXG4gICAgICAgICAgICBzcG90aWZ5VXJsOiBiYXNlRGF0YS5zcG90aWZ5VXJsLFxuICAgICAgICAgIH0gYXMgQ2xhdWRlQXJ0aXN0RGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBiYXNlRGF0YTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgLy8gUmVzcG9uc2UgbWV0YWRhdGFcbiAgICBjb25zdCBtZXRhZGF0YSA9IHtcbiAgICAgIHRvdGFsQXJ0aXN0czogZm9ybWF0dGVkQXJ0aXN0cy5sZW5ndGgsXG4gICAgICBsYXN0VXBkYXRlZDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgZm9ybWF0LFxuICAgICAgaW5jbHVkZUluYWN0aXZlLFxuICAgIH07XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIGRhdGE6IGFydGlzdElkID8gZm9ybWF0dGVkQXJ0aXN0c1swXSB8fCBudWxsIDogZm9ybWF0dGVkQXJ0aXN0cyxcbiAgICAgIG1ldGFkYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJDbGF1ZGUgQXJ0aXN0cyBBUEkgZXJyb3I6XCIsIGVycm9yKTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPVxuICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIlVua25vd24gZXJyb3JcIjtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBhcnRpc3QgZGF0YVwiLFxuICAgICAgICBkZXRhaWxzOiBlcnJvck1lc3NhZ2UsXG4gICAgICB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldFNlcnZpY2VSb2xlU3VwYWJhc2UiLCJoYW5kbGVTdXBhYmFzZUVycm9yIiwidmFsaWRhdGVDbGF1ZGVBdXRoIiwiY3JlYXRlVW5hdXRob3JpemVkUmVzcG9uc2UiLCJHRVQiLCJyZXF1ZXN0IiwiYXV0aFJlc3VsdCIsImF1dGhvcml6ZWQiLCJlcnJvciIsInNlYXJjaFBhcmFtcyIsIlVSTCIsInVybCIsImFydGlzdElkIiwiZ2V0IiwiaW5jbHVkZUluYWN0aXZlIiwiZm9ybWF0Iiwic3VwYWJhc2UiLCJxdWVyeSIsImZyb20iLCJzZWxlY3QiLCJlcSIsIm9yZGVyIiwiYXNjZW5kaW5nIiwiZGF0YSIsImFydGlzdHMiLCJlcnJvck1zZyIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZm9ybWF0dGVkQXJ0aXN0cyIsIm1hcCIsImFydGlzdCIsImJhc2VEYXRhIiwiaWQiLCJhcnRpc3ROYW1lIiwiYXJ0aXN0X25hbWUiLCJpbWFnZVVybCIsImltYWdlX3VybCIsInVuZGVmaW5lZCIsInNwb3RpZnlVcmwiLCJzcG90aWZ5X3VybCIsImluc3RhZ3JhbVVybCIsImluc3RhZ3JhbV91cmwiLCJhcHBsZU11c2ljVXJsIiwiYXBwbGVfbXVzaWNfdXJsIiwic3BvdGlmeUlkIiwic3BvdGlmeV9pZCIsImpvaW5lZERhdGUiLCJjcmVhdGVkX2F0IiwibWV0YWRhdGEiLCJ0b3RhbEFydGlzdHMiLCJsZW5ndGgiLCJsYXN0VXBkYXRlZCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImNvbnNvbGUiLCJlcnJvck1lc3NhZ2UiLCJFcnJvciIsIm1lc3NhZ2UiLCJkZXRhaWxzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/claude/artists/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/claude-auth.ts":
/*!********************************!*\
  !*** ./src/lib/claude-auth.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createUnauthorizedResponse: () => (/* binding */ createUnauthorizedResponse),\n/* harmony export */   validateClaudeAuth: () => (/* binding */ validateClaudeAuth)\n/* harmony export */ });\n// src/lib/claude-auth.ts\n/**\n * Authentication middleware for Claude API access\n * Uses a simple API key approach for external access\n */ function validateClaudeAuth(request) {\n    try {\n        const authHeader = request.headers.get(\"authorization\");\n        if (!authHeader) {\n            return {\n                authorized: false,\n                error: \"Missing authorization header\"\n            };\n        }\n        // Expect format: \"Bearer YOUR_CLAUDE_API_KEY\"\n        if (!authHeader.startsWith(\"Bearer \")) {\n            return {\n                authorized: false,\n                error: \"Invalid authorization format. Expected: Bearer <token>\"\n            };\n        }\n        const token = authHeader.split(\" \")[1];\n        const expectedToken = process.env.CLAUDE_API_KEY;\n        if (!expectedToken) {\n            console.error(\"CLAUDE_API_KEY not configured in environment variables\");\n            return {\n                authorized: false,\n                error: \"Server configuration error\"\n            };\n        }\n        if (token !== expectedToken) {\n            return {\n                authorized: false,\n                error: \"Invalid API key\"\n            };\n        }\n        return {\n            authorized: true\n        };\n    } catch (error) {\n        console.error(\"Claude auth validation error:\", error);\n        return {\n            authorized: false,\n            error: \"Authentication failed\"\n        };\n    }\n}\n/**\n * Helper function to create unauthorized response\n */ function createUnauthorizedResponse(error) {\n    return new Response(JSON.stringify({\n        success: false,\n        error: \"Unauthorized\",\n        message: error\n    }), {\n        status: 401,\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2NsYXVkZS1hdXRoLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseUJBQXlCO0FBR3pCOzs7Q0FHQyxHQUVNLFNBQVNBLG1CQUFtQkMsT0FBb0I7SUFJckQsSUFBSTtRQUNGLE1BQU1DLGFBQWFELFFBQVFFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO1FBRXZDLElBQUksQ0FBQ0YsWUFBWTtZQUNmLE9BQU87Z0JBQUVHLFlBQVk7Z0JBQU9DLE9BQU87WUFBK0I7UUFDcEU7UUFFQSw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDSixXQUFXSyxVQUFVLENBQUMsWUFBWTtZQUNyQyxPQUFPO2dCQUNMRixZQUFZO2dCQUNaQyxPQUFPO1lBQ1Q7UUFDRjtRQUVBLE1BQU1FLFFBQVFOLFdBQVdPLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN0QyxNQUFNQyxnQkFBZ0JDLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztRQUVoRCxJQUFJLENBQUNILGVBQWU7WUFDbEJJLFFBQVFSLEtBQUssQ0FBQztZQUNkLE9BQU87Z0JBQUVELFlBQVk7Z0JBQU9DLE9BQU87WUFBNkI7UUFDbEU7UUFFQSxJQUFJRSxVQUFVRSxlQUFlO1lBQzNCLE9BQU87Z0JBQUVMLFlBQVk7Z0JBQU9DLE9BQU87WUFBa0I7UUFDdkQ7UUFFQSxPQUFPO1lBQUVELFlBQVk7UUFBSztJQUM1QixFQUFFLE9BQU9DLE9BQU87UUFDZFEsUUFBUVIsS0FBSyxDQUFDLGlDQUFpQ0E7UUFDL0MsT0FBTztZQUFFRCxZQUFZO1lBQU9DLE9BQU87UUFBd0I7SUFDN0Q7QUFDRjtBQUVBOztDQUVDLEdBQ00sU0FBU1MsMkJBQTJCVCxLQUFhO0lBQ3RELE9BQU8sSUFBSVUsU0FDVEMsS0FBS0MsU0FBUyxDQUFDO1FBQ2JDLFNBQVM7UUFDVGIsT0FBTztRQUNQYyxTQUFTZDtJQUNYLElBQ0E7UUFDRWUsUUFBUTtRQUNSbEIsU0FBUztZQUFFLGdCQUFnQjtRQUFtQjtJQUNoRDtBQUVKIiwic291cmNlcyI6WyIvVXNlcnMvcGhpbGlwL0Rlc2t0b3AvZW5nZWxvb3Atd2Vic2l0ZS9lbmdlbG9vcC1yZWNvcmRzLW9sZC9zcmMvbGliL2NsYXVkZS1hdXRoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9saWIvY2xhdWRlLWF1dGgudHNcbmltcG9ydCB7IE5leHRSZXF1ZXN0IH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cbi8qKlxuICogQXV0aGVudGljYXRpb24gbWlkZGxld2FyZSBmb3IgQ2xhdWRlIEFQSSBhY2Nlc3NcbiAqIFVzZXMgYSBzaW1wbGUgQVBJIGtleSBhcHByb2FjaCBmb3IgZXh0ZXJuYWwgYWNjZXNzXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQ2xhdWRlQXV0aChyZXF1ZXN0OiBOZXh0UmVxdWVzdCk6IHtcbiAgYXV0aG9yaXplZDogYm9vbGVhbjtcbiAgZXJyb3I/OiBzdHJpbmc7XG59IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBhdXRoSGVhZGVyID0gcmVxdWVzdC5oZWFkZXJzLmdldChcImF1dGhvcml6YXRpb25cIik7XG5cbiAgICBpZiAoIWF1dGhIZWFkZXIpIHtcbiAgICAgIHJldHVybiB7IGF1dGhvcml6ZWQ6IGZhbHNlLCBlcnJvcjogXCJNaXNzaW5nIGF1dGhvcml6YXRpb24gaGVhZGVyXCIgfTtcbiAgICB9XG5cbiAgICAvLyBFeHBlY3QgZm9ybWF0OiBcIkJlYXJlciBZT1VSX0NMQVVERV9BUElfS0VZXCJcbiAgICBpZiAoIWF1dGhIZWFkZXIuc3RhcnRzV2l0aChcIkJlYXJlciBcIikpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGF1dGhvcml6ZWQ6IGZhbHNlLFxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIGF1dGhvcml6YXRpb24gZm9ybWF0LiBFeHBlY3RlZDogQmVhcmVyIDx0b2tlbj5cIixcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgdG9rZW4gPSBhdXRoSGVhZGVyLnNwbGl0KFwiIFwiKVsxXTtcbiAgICBjb25zdCBleHBlY3RlZFRva2VuID0gcHJvY2Vzcy5lbnYuQ0xBVURFX0FQSV9LRVk7XG5cbiAgICBpZiAoIWV4cGVjdGVkVG9rZW4pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJDTEFVREVfQVBJX0tFWSBub3QgY29uZmlndXJlZCBpbiBlbnZpcm9ubWVudCB2YXJpYWJsZXNcIik7XG4gICAgICByZXR1cm4geyBhdXRob3JpemVkOiBmYWxzZSwgZXJyb3I6IFwiU2VydmVyIGNvbmZpZ3VyYXRpb24gZXJyb3JcIiB9O1xuICAgIH1cblxuICAgIGlmICh0b2tlbiAhPT0gZXhwZWN0ZWRUb2tlbikge1xuICAgICAgcmV0dXJuIHsgYXV0aG9yaXplZDogZmFsc2UsIGVycm9yOiBcIkludmFsaWQgQVBJIGtleVwiIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYXV0aG9yaXplZDogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJDbGF1ZGUgYXV0aCB2YWxpZGF0aW9uIGVycm9yOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgYXV0aG9yaXplZDogZmFsc2UsIGVycm9yOiBcIkF1dGhlbnRpY2F0aW9uIGZhaWxlZFwiIH07XG4gIH1cbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIHVuYXV0aG9yaXplZCByZXNwb25zZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVW5hdXRob3JpemVkUmVzcG9uc2UoZXJyb3I6IHN0cmluZykge1xuICByZXR1cm4gbmV3IFJlc3BvbnNlKFxuICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiVW5hdXRob3JpemVkXCIsXG4gICAgICBtZXNzYWdlOiBlcnJvcixcbiAgICB9KSxcbiAgICB7XG4gICAgICBzdGF0dXM6IDQwMSxcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICB9XG4gICk7XG59XG4iXSwibmFtZXMiOlsidmFsaWRhdGVDbGF1ZGVBdXRoIiwicmVxdWVzdCIsImF1dGhIZWFkZXIiLCJoZWFkZXJzIiwiZ2V0IiwiYXV0aG9yaXplZCIsImVycm9yIiwic3RhcnRzV2l0aCIsInRva2VuIiwic3BsaXQiLCJleHBlY3RlZFRva2VuIiwicHJvY2VzcyIsImVudiIsIkNMQVVERV9BUElfS0VZIiwiY29uc29sZSIsImNyZWF0ZVVuYXV0aG9yaXplZFJlc3BvbnNlIiwiUmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5Iiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJzdGF0dXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/claude-auth.ts\n");

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/tr46","vendor-chunks/ws","vendor-chunks/whatwg-url","vendor-chunks/cookie","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fclaude%2Fartists%2Froute&page=%2Fapi%2Fclaude%2Fartists%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fclaude%2Fartists%2Froute.ts&appDir=%2FUsers%2Fphilip%2FDesktop%2Fengeloop-website%2Fengeloop-records-old%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fphilip%2FDesktop%2Fengeloop-website%2Fengeloop-records-old&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();