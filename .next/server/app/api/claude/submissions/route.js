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
exports.id = "app/api/claude/submissions/route";
exports.ids = ["app/api/claude/submissions/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fclaude%2Fsubmissions%2Froute&page=%2Fapi%2Fclaude%2Fsubmissions%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fclaude%2Fsubmissions%2Froute.ts&appDir=%2FUsers%2Fphilip%2FDesktop%2Fengeloop-website%2Fengeloop-records-old%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fphilip%2FDesktop%2Fengeloop-website%2Fengeloop-records-old&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fclaude%2Fsubmissions%2Froute&page=%2Fapi%2Fclaude%2Fsubmissions%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fclaude%2Fsubmissions%2Froute.ts&appDir=%2FUsers%2Fphilip%2FDesktop%2Fengeloop-website%2Fengeloop-records-old%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fphilip%2FDesktop%2Fengeloop-website%2Fengeloop-records-old&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_philip_Desktop_engeloop_website_engeloop_records_old_src_app_api_claude_submissions_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/claude/submissions/route.ts */ \"(rsc)/./src/app/api/claude/submissions/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/claude/submissions/route\",\n        pathname: \"/api/claude/submissions\",\n        filename: \"route\",\n        bundlePath: \"app/api/claude/submissions/route\"\n    },\n    resolvedPagePath: \"/Users/philip/Desktop/engeloop-website/engeloop-records-old/src/app/api/claude/submissions/route.ts\",\n    nextConfigOutput,\n    userland: _Users_philip_Desktop_engeloop_website_engeloop_records_old_src_app_api_claude_submissions_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjbGF1ZGUlMkZzdWJtaXNzaW9ucyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGY2xhdWRlJTJGc3VibWlzc2lvbnMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZjbGF1ZGUlMkZzdWJtaXNzaW9ucyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnBoaWxpcCUyRkRlc2t0b3AlMkZlbmdlbG9vcC13ZWJzaXRlJTJGZW5nZWxvb3AtcmVjb3Jkcy1vbGQlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGcGhpbGlwJTJGRGVza3RvcCUyRmVuZ2Vsb29wLXdlYnNpdGUlMkZlbmdlbG9vcC1yZWNvcmRzLW9sZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDbUQ7QUFDaEk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9waGlsaXAvRGVza3RvcC9lbmdlbG9vcC13ZWJzaXRlL2VuZ2Vsb29wLXJlY29yZHMtb2xkL3NyYy9hcHAvYXBpL2NsYXVkZS9zdWJtaXNzaW9ucy9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY2xhdWRlL3N1Ym1pc3Npb25zL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvY2xhdWRlL3N1Ym1pc3Npb25zXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jbGF1ZGUvc3VibWlzc2lvbnMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvcGhpbGlwL0Rlc2t0b3AvZW5nZWxvb3Atd2Vic2l0ZS9lbmdlbG9vcC1yZWNvcmRzLW9sZC9zcmMvYXBwL2FwaS9jbGF1ZGUvc3VibWlzc2lvbnMvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fclaude%2Fsubmissions%2Froute&page=%2Fapi%2Fclaude%2Fsubmissions%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fclaude%2Fsubmissions%2Froute.ts&appDir=%2FUsers%2Fphilip%2FDesktop%2Fengeloop-website%2Fengeloop-records-old%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fphilip%2FDesktop%2Fengeloop-website%2Fengeloop-records-old&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/claude/submissions/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/claude/submissions/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/supabase */ \"(rsc)/./src/lib/supabase.ts\");\n/* harmony import */ var _lib_claude_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/claude-auth */ \"(rsc)/./src/lib/claude-auth.ts\");\n// src/app/api/claude/submissions/route.ts\n\n\n\nasync function GET(request) {\n    // Authenticate Claude access\n    const authResult = (0,_lib_claude_auth__WEBPACK_IMPORTED_MODULE_2__.validateClaudeAuth)(request);\n    if (!authResult.authorized) {\n        return (0,_lib_claude_auth__WEBPACK_IMPORTED_MODULE_2__.createUnauthorizedResponse)(authResult.error);\n    }\n    try {\n        const { searchParams } = new URL(request.url);\n        const status = searchParams.get(\"status\"); // Filter by status\n        const priority = searchParams.get(\"priority\"); // Filter by priority\n        const artistName = searchParams.get(\"artist\"); // Search by artist\n        const limit = parseInt(searchParams.get(\"limit\") || \"50\");\n        const format = searchParams.get(\"format\") || \"detailed\";\n        const supabase = (0,_lib_supabase__WEBPACK_IMPORTED_MODULE_1__.getServiceRoleSupabase)();\n        let query = supabase.from(\"demo_submissions\").select(`\n        id,\n        first_name,\n        last_name,\n        email,\n        artist_name,\n        track_title,\n        genres,\n        bpm,\n        instagram_handle,\n        spotify_profile_url,\n        additional_info,\n        submission_status,\n        submitted_at,\n        created_at\n      `);\n        // Apply filters\n        if (status) {\n            query = query.eq(\"submission_status\", status);\n        }\n        if (artistName) {\n            query = query.ilike(\"artist_name\", `%${artistName}%`);\n        }\n        // Order by submission date (newest first)\n        query = query.order(\"submitted_at\", {\n            ascending: false\n        });\n        // Apply limit\n        query = query.limit(limit);\n        const { data: submissions, error } = await query;\n        if (error) {\n            const { error: errorMsg, status } = (0,_lib_supabase__WEBPACK_IMPORTED_MODULE_1__.handleSupabaseError)(error, \"Claude API: fetch submissions\");\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: false,\n                error: errorMsg\n            }, {\n                status\n            });\n        }\n        // Calculate additional metadata and format for Claude\n        const now = new Date();\n        const formattedSubmissions = (submissions || []).map((submission)=>{\n            const submittedDate = new Date(submission.submitted_at);\n            const daysSince = Math.floor((now.getTime() - submittedDate.getTime()) / (1000 * 60 * 60 * 24));\n            // Calculate priority based on age and status\n            let priority = \"normal\";\n            if (submission.submission_status === \"pending\" && daysSince > 14) {\n                priority = \"urgent\";\n            } else if (daysSince > 30) {\n                priority = \"low\";\n            }\n            const baseData = {\n                id: submission.id,\n                artistName: submission.artist_name,\n                trackTitle: submission.track_title,\n                email: submission.email,\n                firstName: submission.first_name,\n                lastName: submission.last_name,\n                genres: submission.genres || [],\n                bpm: submission.bpm || undefined,\n                instagramHandle: submission.instagram_handle || undefined,\n                spotifyProfileUrl: submission.spotify_profile_url || undefined,\n                additionalInfo: submission.additional_info || undefined,\n                status: submission.submission_status,\n                submittedAt: submission.submitted_at,\n                daysSinceSubmission: daysSince,\n                priority\n            };\n            // Return summary vs detailed format\n            if (format === \"summary\") {\n                return {\n                    id: baseData.id,\n                    artistName: baseData.artistName,\n                    trackTitle: baseData.trackTitle,\n                    status: baseData.status,\n                    daysSinceSubmission: baseData.daysSinceSubmission,\n                    priority: baseData.priority\n                };\n            }\n            return baseData;\n        });\n        // Filter by priority if requested (after calculating priorities)\n        const finalSubmissions = priority ? formattedSubmissions.filter((sub)=>sub.priority === priority) : formattedSubmissions;\n        // Generate summary stats\n        const stats = {\n            total: finalSubmissions.length,\n            byStatus: {\n                pending: finalSubmissions.filter((s)=>s.status === \"pending\").length,\n                reviewing: finalSubmissions.filter((s)=>s.status === \"reviewing\").length,\n                approved: finalSubmissions.filter((s)=>s.status === \"approved\").length,\n                rejected: finalSubmissions.filter((s)=>s.status === \"rejected\").length\n            },\n            byPriority: {\n                urgent: finalSubmissions.filter((s)=>s.priority === \"urgent\").length,\n                normal: finalSubmissions.filter((s)=>s.priority === \"normal\").length,\n                low: finalSubmissions.filter((s)=>s.priority === \"low\").length\n            },\n            oldestPending: finalSubmissions.filter((s)=>s.status === \"pending\").sort((a, b)=>b.daysSinceSubmission - a.daysSinceSubmission)[0]?.daysSinceSubmission || 0\n        };\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            data: finalSubmissions,\n            stats,\n            metadata: {\n                lastUpdated: new Date().toISOString(),\n                format,\n                appliedFilters: {\n                    status,\n                    priority,\n                    artistName,\n                    limit\n                }\n            }\n        });\n    } catch (error) {\n        console.error(\"Claude Submissions API error:\", error);\n        const errorMessage = error instanceof Error ? error.message : \"Unknown error\";\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            error: \"Failed to fetch submission data\",\n            details: errorMessage\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jbGF1ZGUvc3VibWlzc2lvbnMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLDBDQUEwQztBQUNjO0FBQ3FCO0FBSWxEO0FBb0JwQixlQUFlSyxJQUFJQyxPQUFvQjtJQUM1Qyw2QkFBNkI7SUFDN0IsTUFBTUMsYUFBYUosb0VBQWtCQSxDQUFDRztJQUN0QyxJQUFJLENBQUNDLFdBQVdDLFVBQVUsRUFBRTtRQUMxQixPQUFPSiw0RUFBMEJBLENBQUNHLFdBQVdFLEtBQUs7SUFDcEQ7SUFFQSxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBRyxJQUFJQyxJQUFJTCxRQUFRTSxHQUFHO1FBQzVDLE1BQU1DLFNBQVNILGFBQWFJLEdBQUcsQ0FBQyxXQUFXLG1CQUFtQjtRQUM5RCxNQUFNQyxXQUFXTCxhQUFhSSxHQUFHLENBQUMsYUFBYSxxQkFBcUI7UUFDcEUsTUFBTUUsYUFBYU4sYUFBYUksR0FBRyxDQUFDLFdBQVcsbUJBQW1CO1FBQ2xFLE1BQU1HLFFBQVFDLFNBQVNSLGFBQWFJLEdBQUcsQ0FBQyxZQUFZO1FBQ3BELE1BQU1LLFNBQVNULGFBQWFJLEdBQUcsQ0FBQyxhQUFhO1FBRTdDLE1BQU1NLFdBQVduQixxRUFBc0JBO1FBRXZDLElBQUlvQixRQUFRRCxTQUFTRSxJQUFJLENBQUMsb0JBQW9CQyxNQUFNLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O01BZXBELENBQUM7UUFFSCxnQkFBZ0I7UUFDaEIsSUFBSVYsUUFBUTtZQUNWUSxRQUFRQSxNQUFNRyxFQUFFLENBQUMscUJBQXFCWDtRQUN4QztRQUVBLElBQUlHLFlBQVk7WUFDZEssUUFBUUEsTUFBTUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUVULFdBQVcsQ0FBQyxDQUFDO1FBQ3REO1FBRUEsMENBQTBDO1FBQzFDSyxRQUFRQSxNQUFNSyxLQUFLLENBQUMsZ0JBQWdCO1lBQUVDLFdBQVc7UUFBTTtRQUV2RCxjQUFjO1FBQ2ROLFFB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QWlCQyxNQUFNLENBQUMsQ0FBQ08sSUFBTUEsRUFBRTNELFFBQVEsS0FBSyxVQUFVd0QsTUFBTTtnQkFDdEVTLFFBQVFkLGlCQUFpQkMsTUFBTSxDQUFDLENBQUNPLElBQU1BLEVBQUUzRCxRQUFRLEtBQUssVUFBVXdELE1BQU07Z0JBQ3RFVSxLQUFLZixpQkFBaUJDLE1BQU0sQ0FBQyxDQUFDTyxJQUFNQSxFQUFFM0QsUUFBUSxLQUFLLE9BQU93RCxNQUFNO1lBQ2xFO1lBQ0FXLGVBQ0VoQixpQkFDR0MsTUFBTSxDQUFDLENBQUNPLElBQU1BLEVBQUU3RCxNQUFNLEtBQUssV0FDM0JzRSxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUEsRUFBRXBCLG1CQUFtQixHQUFHbUIsRUFBRW5CLG1CQUFtQixDQUFDLENBQUMsRUFBRSxFQUMvREEsdUJBQXVCO1FBQy9CO1FBRUEsT0FBT2pFLHFEQUFZQSxDQUFDK0IsSUFBSSxDQUFDO1lBQ3ZCQyxTQUFTO1lBQ1RKLE1BQU1zQztZQUNORztZQUNBaUIsVUFBVTtnQkFDUkMsYUFBYSxJQUFJckQsT0FBT3NELFdBQVc7Z0JBQ25DckU7Z0JBQ0FzRSxnQkFBZ0I7b0JBQUU1RTtvQkFBUUU7b0JBQVVDO29CQUFZQztnQkFBTTtZQUN4RDtRQUNGO0lBQ0YsRUFBRSxPQUFPUixPQUFnQjtRQUN2QmlGLFFBQVFqRixLQUFLLENBQUMsaUNBQWlDQTtRQUMvQyxNQUFNa0YsZUFDSmxGLGlCQUFpQm1GLFFBQVFuRixNQUFNb0YsT0FBTyxHQUFHO1FBRTNDLE9BQU83RixxREFBWUEsQ0FBQytCLElBQUksQ0FDdEI7WUFDRUMsU0FBUztZQUNUdkIsT0FBTztZQUNQcUYsU0FBU0g7UUFDWCxHQUNBO1lBQUU5RSxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL3BoaWxpcC9EZXNrdG9wL2VuZ2Vsb29wLXdlYnNpdGUvZW5nZWxvb3AtcmVjb3Jkcy1vbGQvc3JjL2FwcC9hcGkvY2xhdWRlL3N1Ym1pc3Npb25zL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9hcHAvYXBpL2NsYXVkZS9zdWJtaXNzaW9ucy9yb3V0ZS50c1xuaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHsgZ2V0U2VydmljZVJvbGVTdXBhYmFzZSwgaGFuZGxlU3VwYWJhc2VFcnJvciB9IGZyb20gXCJAL2xpYi9zdXBhYmFzZVwiO1xuaW1wb3J0IHtcbiAgdmFsaWRhdGVDbGF1ZGVBdXRoLFxuICBjcmVhdGVVbmF1dGhvcml6ZWRSZXNwb25zZSxcbn0gZnJvbSBcIkAvbGliL2NsYXVkZS1hdXRoXCI7XG5cbmludGVyZmFjZSBDbGF1ZGVTdWJtaXNzaW9uRGF0YSB7XG4gIGlkOiBzdHJpbmc7XG4gIGFydGlzdE5hbWU6IHN0cmluZztcbiAgdHJhY2tUaXRsZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgZ2VucmVzOiBzdHJpbmdbXTtcbiAgYnBtPzogbnVtYmVyO1xuICBpbnN0YWdyYW1IYW5kbGU/OiBzdHJpbmc7XG4gIHNwb3RpZnlQcm9maWxlVXJsPzogc3RyaW5nO1xuICBhZGRpdGlvbmFsSW5mbz86IHN0cmluZztcbiAgc3RhdHVzOiBcInBlbmRpbmdcIiB8IFwicmV2aWV3aW5nXCIgfCBcImFwcHJvdmVkXCIgfCBcInJlamVjdGVkXCI7XG4gIHN1Ym1pdHRlZEF0OiBzdHJpbmc7XG4gIGRheXNTaW5jZVN1Ym1pc3Npb246IG51bWJlcjtcbiAgcHJpb3JpdHk6IFwidXJnZW50XCIgfCBcIm5vcm1hbFwiIHwgXCJsb3dcIjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICAvLyBBdXRoZW50aWNhdGUgQ2xhdWRlIGFjY2Vzc1xuICBjb25zdCBhdXRoUmVzdWx0ID0gdmFsaWRhdGVDbGF1ZGVBdXRoKHJlcXVlc3QpO1xuICBpZiAoIWF1dGhSZXN1bHQuYXV0aG9yaXplZCkge1xuICAgIHJldHVybiBjcmVhdGVVbmF1dGhvcml6ZWRSZXNwb25zZShhdXRoUmVzdWx0LmVycm9yISk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHsgc2VhcmNoUGFyYW1zIH0gPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgICBjb25zdCBzdGF0dXMgPSBzZWFyY2hQYXJhbXMuZ2V0KFwic3RhdHVzXCIpOyAvLyBGaWx0ZXIgYnkgc3RhdHVzXG4gICAgY29uc3QgcHJpb3JpdHkgPSBzZWFyY2hQYXJhbXMuZ2V0KFwicHJpb3JpdHlcIik7IC8vIEZpbHRlciBieSBwcmlvcml0eVxuICAgIGNvbnN0IGFydGlzdE5hbWUgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiYXJ0aXN0XCIpOyAvLyBTZWFyY2ggYnkgYXJ0aXN0XG4gICAgY29uc3QgbGltaXQgPSBwYXJzZUludChzZWFyY2hQYXJhbXMuZ2V0KFwibGltaXRcIikgfHwgXCI1MFwiKTtcbiAgICBjb25zdCBmb3JtYXQgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiZm9ybWF0XCIpIHx8IFwiZGV0YWlsZWRcIjtcblxuICAgIGNvbnN0IHN1cGFiYXNlID0gZ2V0U2VydmljZVJvbGVTdXBhYmFzZSgpO1xuXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2UuZnJvbShcImRlbW9fc3VibWlzc2lvbnNcIikuc2VsZWN0KGBcbiAgICAgICAgaWQsXG4gICAgICAgIGZpcnN0X25hbWUsXG4gICAgICAgIGxhc3RfbmFtZSxcbiAgICAgICAgZW1haWwsXG4gICAgICAgIGFydGlzdF9uYW1lLFxuICAgICAgICB0cmFja190aXRsZSxcbiAgICAgICAgZ2VucmVzLFxuICAgICAgICBicG0sXG4gICAgICAgIGluc3RhZ3JhbV9oYW5kbGUsXG4gICAgICAgIHNwb3RpZnlfcHJvZmlsZV91cmwsXG4gICAgICAgIGFkZGl0aW9uYWxfaW5mbyxcbiAgICAgICAgc3VibWlzc2lvbl9zdGF0dXMsXG4gICAgICAgIHN1Ym1pdHRlZF9hdCxcbiAgICAgICAgY3JlYXRlZF9hdFxuICAgICAgYCk7XG5cbiAgICAvLyBBcHBseSBmaWx0ZXJzXG4gICAgaWYgKHN0YXR1cykge1xuICAgICAgcXVlcnkgPSBxdWVyeS5lcShcInN1Ym1pc3Npb25fc3RhdHVzXCIsIHN0YXR1cyk7XG4gICAgfVxuXG4gICAgaWYgKGFydGlzdE5hbWUpIHtcbiAgICAgIHF1ZXJ5ID0gcXVlcnkuaWxpa2UoXCJhcnRpc3RfbmFtZVwiLCBgJSR7YXJ0aXN0TmFtZX0lYCk7XG4gICAgfVxuXG4gICAgLy8gT3JkZXIgYnkgc3VibWlzc2lvbiBkYXRlIChuZXdlc3QgZmlyc3QpXG4gICAgcXVlcnkgPSBxdWVyeS5vcmRlcihcInN1Ym1pdHRlZF9hdFwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XG5cbiAgICAvLyBBcHBseSBsaW1pdFxuICAgIHF1ZXJ5ID0gcXVlcnkubGltaXQobGltaXQpO1xuXG4gICAgY29uc3QgeyBkYXRhOiBzdWJtaXNzaW9ucywgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjb25zdCB7IGVycm9yOiBlcnJvck1zZywgc3RhdHVzIH0gPSBoYW5kbGVTdXBhYmFzZUVycm9yKFxuICAgICAgICBlcnJvcixcbiAgICAgICAgXCJDbGF1ZGUgQVBJOiBmZXRjaCBzdWJtaXNzaW9uc1wiXG4gICAgICApO1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvck1zZyB9LCB7IHN0YXR1cyB9KTtcbiAgICB9XG5cbiAgICAvLyBDYWxjdWxhdGUgYWRkaXRpb25hbCBtZXRhZGF0YSBhbmQgZm9ybWF0IGZvciBDbGF1ZGVcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGZvcm1hdHRlZFN1Ym1pc3Npb25zOiBDbGF1ZGVTdWJtaXNzaW9uRGF0YVtdID0gKFxuICAgICAgc3VibWlzc2lvbnMgfHwgW11cbiAgICApLm1hcCgoc3VibWlzc2lvbikgPT4ge1xuICAgICAgY29uc3Qgc3VibWl0dGVkRGF0ZSA9IG5ldyBEYXRlKHN1Ym1pc3Npb24uc3VibWl0dGVkX2F0KTtcbiAgICAgIGNvbnN0IGRheXNTaW5jZSA9IE1hdGguZmxvb3IoXG4gICAgICAgIChub3cuZ2V0VGltZSgpIC0gc3VibWl0dGVkRGF0ZS5nZXRUaW1lKCkpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpXG4gICAgICApO1xuXG4gICAgICAvLyBDYWxjdWxhdGUgcHJpb3JpdHkgYmFzZWQgb24gYWdlIGFuZCBzdGF0dXNcbiAgICAgIGxldCBwcmlvcml0eTogXCJ1cmdlbnRcIiB8IFwibm9ybWFsXCIgfCBcImxvd1wiID0gXCJub3JtYWxcIjtcbiAgICAgIGlmIChzdWJtaXNzaW9uLnN1Ym1pc3Npb25fc3RhdHVzID09PSBcInBlbmRpbmdcIiAmJiBkYXlzU2luY2UgPiAxNCkge1xuICAgICAgICBwcmlvcml0eSA9IFwidXJnZW50XCI7XG4gICAgICB9IGVsc2UgaWYgKGRheXNTaW5jZSA+IDMwKSB7XG4gICAgICAgIHByaW9yaXR5ID0gXCJsb3dcIjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYmFzZURhdGE6IENsYXVkZVN1Ym1pc3Npb25EYXRhID0ge1xuICAgICAgICBpZDogc3VibWlzc2lvbi5pZCxcbiAgICAgICAgYXJ0aXN0TmFtZTogc3VibWlzc2lvbi5hcnRpc3RfbmFtZSxcbiAgICAgICAgdHJhY2tUaXRsZTogc3VibWlzc2lvbi50cmFja190aXRsZSxcbiAgICAgICAgZW1haWw6IHN1Ym1pc3Npb24uZW1haWwsXG4gICAgICAgIGZpcnN0TmFtZTogc3VibWlzc2lvbi5maXJzdF9uYW1lLFxuICAgICAgICBsYXN0TmFtZTogc3VibWlzc2lvbi5sYXN0X25hbWUsXG4gICAgICAgIGdlbnJlczogc3VibWlzc2lvbi5nZW5yZXMgfHwgW10sXG4gICAgICAgIGJwbTogc3VibWlzc2lvbi5icG0gfHwgdW5kZWZpbmVkLFxuICAgICAgICBpbnN0YWdyYW1IYW5kbGU6IHN1Ym1pc3Npb24uaW5zdGFncmFtX2hhbmRsZSB8fCB1bmRlZmluZWQsXG4gICAgICAgIHNwb3RpZnlQcm9maWxlVXJsOiBzdWJtaXNzaW9uLnNwb3RpZnlfcHJvZmlsZV91cmwgfHwgdW5kZWZpbmVkLFxuICAgICAgICBhZGRpdGlvbmFsSW5mbzogc3VibWlzc2lvbi5hZGRpdGlvbmFsX2luZm8gfHwgdW5kZWZpbmVkLFxuICAgICAgICBzdGF0dXM6IHN1Ym1pc3Npb24uc3VibWlzc2lvbl9zdGF0dXMgYXMgYW55LFxuICAgICAgICBzdWJtaXR0ZWRBdDogc3VibWlzc2lvbi5zdWJtaXR0ZWRfYXQsXG4gICAgICAgIGRheXNTaW5jZVN1Ym1pc3Npb246IGRheXNTaW5jZSxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICB9O1xuXG4gICAgICAvLyBSZXR1cm4gc3VtbWFyeSB2cyBkZXRhaWxlZCBmb3JtYXRcbiAgICAgIGlmIChmb3JtYXQgPT09IFwic3VtbWFyeVwiKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IGJhc2VEYXRhLmlkLFxuICAgICAgICAgIGFydGlzdE5hbWU6IGJhc2VEYXRhLmFydGlzdE5hbWUsXG4gICAgICAgICAgdHJhY2tUaXRsZTogYmFzZURhdGEudHJhY2tUaXRsZSxcbiAgICAgICAgICBzdGF0dXM6IGJhc2VEYXRhLnN0YXR1cyxcbiAgICAgICAgICBkYXlzU2luY2VTdWJtaXNzaW9uOiBiYXNlRGF0YS5kYXlzU2luY2VTdWJtaXNzaW9uLFxuICAgICAgICAgIHByaW9yaXR5OiBiYXNlRGF0YS5wcmlvcml0eSxcbiAgICAgICAgfSBhcyBDbGF1ZGVTdWJtaXNzaW9uRGF0YTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJhc2VEYXRhO1xuICAgIH0pO1xuXG4gICAgLy8gRmlsdGVyIGJ5IHByaW9yaXR5IGlmIHJlcXVlc3RlZCAoYWZ0ZXIgY2FsY3VsYXRpbmcgcHJpb3JpdGllcylcbiAgICBjb25zdCBmaW5hbFN1Ym1pc3Npb25zID0gcHJpb3JpdHlcbiAgICAgID8gZm9ybWF0dGVkU3VibWlzc2lvbnMuZmlsdGVyKChzdWIpID0+IHN1Yi5wcmlvcml0eSA9PT0gcHJpb3JpdHkpXG4gICAgICA6IGZvcm1hdHRlZFN1Ym1pc3Npb25zO1xuXG4gICAgLy8gR2VuZXJhdGUgc3VtbWFyeSBzdGF0c1xuICAgIGNvbnN0IHN0YXRzID0ge1xuICAgICAgdG90YWw6IGZpbmFsU3VibWlzc2lvbnMubGVuZ3RoLFxuICAgICAgYnlTdGF0dXM6IHtcbiAgICAgICAgcGVuZGluZzogZmluYWxTdWJtaXNzaW9ucy5maWx0ZXIoKHMpID0+IHMuc3RhdHVzID09PSBcInBlbmRpbmdcIikubGVuZ3RoLFxuICAgICAgICByZXZpZXdpbmc6IGZpbmFsU3VibWlzc2lvbnMuZmlsdGVyKChzKSA9PiBzLnN0YXR1cyA9PT0gXCJyZXZpZXdpbmdcIilcbiAgICAgICAgICAubGVuZ3RoLFxuICAgICAgICBhcHByb3ZlZDogZmluYWxTdWJtaXNzaW9ucy5maWx0ZXIoKHMpID0+IHMuc3RhdHVzID09PSBcImFwcHJvdmVkXCIpXG4gICAgICAgICAgLmxlbmd0aCxcbiAgICAgICAgcmVqZWN0ZWQ6IGZpbmFsU3VibWlzc2lvbnMuZmlsdGVyKChzKSA9PiBzLnN0YXR1cyA9PT0gXCJyZWplY3RlZFwiKVxuICAgICAgICAgIC5sZW5ndGgsXG4gICAgICB9LFxuICAgICAgYnlQcmlvcml0eToge1xuICAgICAgICB1cmdlbnQ6IGZpbmFsU3VibWlzc2lvbnMuZmlsdGVyKChzKSA9PiBzLnByaW9yaXR5ID09PSBcInVyZ2VudFwiKS5sZW5ndGgsXG4gICAgICAgIG5vcm1hbDogZmluYWxTdWJtaXNzaW9ucy5maWx0ZXIoKHMpID0+IHMucHJpb3JpdHkgPT09IFwibm9ybWFsXCIpLmxlbmd0aCxcbiAgICAgICAgbG93OiBmaW5hbFN1Ym1pc3Npb25zLmZpbHRlcigocykgPT4gcy5wcmlvcml0eSA9PT0gXCJsb3dcIikubGVuZ3RoLFxuICAgICAgfSxcbiAgICAgIG9sZGVzdFBlbmRpbmc6XG4gICAgICAgIGZpbmFsU3VibWlzc2lvbnNcbiAgICAgICAgICAuZmlsdGVyKChzKSA9PiBzLnN0YXR1cyA9PT0gXCJwZW5kaW5nXCIpXG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIuZGF5c1NpbmNlU3VibWlzc2lvbiAtIGEuZGF5c1NpbmNlU3VibWlzc2lvbilbMF1cbiAgICAgICAgICA/LmRheXNTaW5jZVN1Ym1pc3Npb24gfHwgMCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBkYXRhOiBmaW5hbFN1Ym1pc3Npb25zLFxuICAgICAgc3RhdHMsXG4gICAgICBtZXRhZGF0YToge1xuICAgICAgICBsYXN0VXBkYXRlZDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICBmb3JtYXQsXG4gICAgICAgIGFwcGxpZWRGaWx0ZXJzOiB7IHN0YXR1cywgcHJpb3JpdHksIGFydGlzdE5hbWUsIGxpbWl0IH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJDbGF1ZGUgU3VibWlzc2lvbnMgQVBJIGVycm9yOlwiLCBlcnJvcik7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID1cbiAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJVbmtub3duIGVycm9yXCI7XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggc3VibWlzc2lvbiBkYXRhXCIsXG4gICAgICAgIGRldGFpbHM6IGVycm9yTWVzc2FnZSxcbiAgICAgIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0U2VydmljZVJvbGVTdXBhYmFzZSIsImhhbmRsZVN1cGFiYXNlRXJyb3IiLCJ2YWxpZGF0ZUNsYXVkZUF1dGgiLCJjcmVhdGVVbmF1dGhvcml6ZWRSZXNwb25zZSIsIkdFVCIsInJlcXVlc3QiLCJhdXRoUmVzdWx0IiwiYXV0aG9yaXplZCIsImVycm9yIiwic2VhcmNoUGFyYW1zIiwiVVJMIiwidXJsIiwic3RhdHVzIiwiZ2V0IiwicHJpb3JpdHkiLCJhcnRpc3ROYW1lIiwibGltaXQiLCJwYXJzZUludCIsImZvcm1hdCIsInN1cGFiYXNlIiwicXVlcnkiLCJmcm9tIiwic2VsZWN0IiwiZXEiLCJpbGlrZSIsIm9yZGVyIiwiYXNjZW5kaW5nIiwiZGF0YSIsInN1Ym1pc3Npb25zIiwiZXJyb3JNc2ciLCJqc29uIiwic3VjY2VzcyIsIm5vdyIsIkRhdGUiLCJmb3JtYXR0ZWRTdWJtaXNzaW9ucyIsIm1hcCIsInN1Ym1pc3Npb24iLCJzdWJtaXR0ZWREYXRlIiwic3VibWl0dGVkX2F0IiwiZGF5c1NpbmNlIiwiTWF0aCIsImZsb29yIiwiZ2V0VGltZSIsInN1Ym1pc3Npb25fc3RhdHVzIiwiYmFzZURhdGEiLCJpZCIsImFydGlzdF9uYW1lIiwidHJhY2tUaXRsZSIsInRyYWNrX3RpdGxlIiwiZW1haWwiLCJmaXJzdE5hbWUiLCJmaXJzdF9uYW1lIiwibGFzdE5hbWUiLCJsYXN0X25hbWUiLCJnZW5yZXMiLCJicG0iLCJ1bmRlZmluZWQiLCJpbnN0YWdyYW1IYW5kbGUiLCJpbnN0YWdyYW1faGFuZGxlIiwic3BvdGlmeVByb2ZpbGVVcmwiLCJzcG90aWZ5X3Byb2ZpbGVfdXJsIiwiYWRkaXRpb25hbEluZm8iLCJhZGRpdGlvbmFsX2luZm8iLCJzdWJtaXR0ZWRBdCIsImRheXNTaW5jZVN1Ym1pc3Npb24iLCJmaW5hbFN1Ym1pc3Npb25zIiwiZmlsdGVyIiwic3ViIiwic3RhdHMiLCJ0b3RhbCIsImxlbmd0aCIsImJ5U3RhdHVzIiwicGVuZGluZyIsInMiLCJyZXZpZXdpbmciLCJhcHByb3ZlZCIsInJlamVjdGVkIiwiYnlQcmlvcml0eSIsInVyZ2VudCIsIm5vcm1hbCIsImxvdyIsIm9sZGVzdFBlbmRpbmciLCJzb3J0IiwiYSIsImIiLCJtZXRhZGF0YSIsImxhc3RVcGRhdGVkIiwidG9JU09TdHJpbmciLCJhcHBsaWVkRmlsdGVycyIsImNvbnNvbGUiLCJlcnJvck1lc3NhZ2UiLCJFcnJvciIsIm1lc3NhZ2UiLCJkZXRhaWxzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/claude/submissions/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/tr46","vendor-chunks/ws","vendor-chunks/whatwg-url","vendor-chunks/cookie","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fclaude%2Fsubmissions%2Froute&page=%2Fapi%2Fclaude%2Fsubmissions%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fclaude%2Fsubmissions%2Froute.ts&appDir=%2FUsers%2Fphilip%2FDesktop%2Fengeloop-website%2Fengeloop-records-old%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fphilip%2FDesktop%2Fengeloop-website%2Fengeloop-records-old&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();