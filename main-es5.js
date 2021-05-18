(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+nzF":
    /*!********************************************!*\
      !*** ./src/modules/auth/services/index.ts ***!
      \********************************************/

    /*! exports provided: services, AuthUtilsService, AuthService */

    /***/
    function nzF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "services", function () {
        return services;
      });
      /* harmony import */


      var _auth_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth-utils.service */
      "8iQY");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.service */
      "LonY");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthUtilsService", function () {
        return _auth_utils_service__WEBPACK_IMPORTED_MODULE_0__["AuthUtilsService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"];
      });

      var services = [_auth_utils_service__WEBPACK_IMPORTED_MODULE_0__["AuthUtilsService"], _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]];
      /***/
    },

    /***/
    "/lcZ":
    /*!*******************************************************!*\
      !*** ./src/modules/icons/icons.font-awesome-solid.ts ***!
      \*******************************************************/

    /*! exports provided: fontAwesomeSolidIcons */

    /***/
    function lcZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fontAwesomeSolidIcons", function () {
        return fontAwesomeSolidIcons;
      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* All free solid fontawesome icons -> https://fontawesome.com/icons?d=gallery&s=solid&m=free */


      var fontAwesomeSolidIcons = {
        faAngleDown: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faAngleDown"],
        faAngleRight: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faAngleRight"],
        faArrowLeft: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faArrowLeft"],
        faBars: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faBars"],
        faBookOpen: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faBookOpen"],
        faChartArea: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faChartArea"],
        faChartBar: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faChartBar"],
        faChartPie: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faChartPie"],
        faChevronDown: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faChevronDown"],
        faChevronUp: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faChevronUp"],
        faCircle: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faCircle"],
        faColumns: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faColumns"],
        faSearch: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSearch"],
        faTable: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTable"],
        faTachometerAlt: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTachometerAlt"],
        faUser: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faUser"]
      };
      /***/
    },

    /***/
    "/pXg":
    /*!**************************************************************************!*\
      !*** ./src/modules/navigation/containers/top-nav/top-nav.component.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function pXg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host fa-icon {\n  font-size: 20px;\n  vertical-align: text-top;\n}\n:host a.icon {\n  padding: 0 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdG9wLW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNJLGVBQUE7RUFDQSx3QkFBQTtBQUZSO0FBSUk7RUFDSSwwQkFBQTtBQUZSIiwiZmlsZSI6InRvcC1uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvdmFyaWFibGVzLnNjc3MnO1xuXG46aG9zdCB7XG4gICAgZmEtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xuICAgIH1cbiAgICBhLmljb24ge1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHggIWltcG9ydGFudDtcbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Vina\Desktop\sb-clean-blog-angular-develop\sb-clean-blog-angular-develop\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "2hFx":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/layouts/layout-blog/layout-blog.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hFx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sb-top-nav></sb-top-nav><ng-content></ng-content><sb-footer></sb-footer>\n";
      /***/
    },

    /***/
    "3Hik":
    /*!**************************************************************!*\
      !*** ./src/modules/app-common/interceptors/demo.config.json ***!
      \**************************************************************/

    /*! exports provided: posts, default */

    /***/
    function Hik(module) {
      module.exports = JSON.parse("{\"posts\":[{\"id\":\"fc3e4766-51ac-4385-937b-43643ed26d4a\",\"slug\":\"magna-nostrud-incididunt-cupidatat-cillum-incididunt-et-nisi-in-ut-minim-reprehenderit\",\"backgroundImage\":\"url(\\\"assets/img/post-bg.jpg\\\")\",\"heading\":\"Magna nostrud incididunt cupidatat cillum incididunt et nisi in ut minim reprehenderit.\",\"subHeading\":\"Labore irure irure laborum quis tempor aliqua. Dude\",\"meta\":\"February 19, 2020\",\"body\":\"# Magna nostrud incididunt cupidatat cillum incididunt et nisi in ut minim reprehenderit.\\n\\nLabore irure irure laborum quis tempor aliqua.\\n\\n## Occaecat tempor sint cillum quis sit magna sit incididunt in ut labore eiusmod veniam non.\\n\\nEst ipsum sint officia quis nulla nisi cupidatat aliquip nisi laboris eiusmod eiusmod aliquip do. Commodo elit excepteur occaecat irure Lorem sit nulla nulla sint duis incididunt. Nostrud ut do mollit et amet velit aute excepteur et culpa culpa velit. Cillum veniam officia anim cupidatat.\"},{\"id\":\"9aea3756-fa44-46ad-b893-0f730384dcab\",\"slug\":\"dolore-pariatur-amet-ullamco-aliquip-mollit-aliqua-qui\",\"backgroundImage\":\"url(\\\"assets/img/post-bg.jpg\\\")\",\"heading\":\"Dolore pariatur amet ullamco aliquip mollit aliqua qui.\",\"subHeading\":\"Eiusmod ipsum do dolore fugiat consequat quis non qui velit consectetur velit.\",\"meta\":\"February 17, 2020\",\"body\":\"# Dolore pariatur amet ullamco aliquip mollit aliqua qui.\\n\\nEiusmod ipsum do dolore fugiat consequat quis non qui velit consectetur velit.\\n\\n## Incididunt cillum do dolor occaecat.\\n\\nTempor sint cupidatat cillum do ut. Ipsum exercitation est ex id. Sunt ut labore ad nulla.\"},{\"id\":\"cddbab19-8d8b-40bc-8163-29f975296377\",\"slug\":\"velit-esse-dolor-dolor-qui-cillum-velit-in-quis-exercitation-occaecat\",\"backgroundImage\":\"url(\\\"assets/img/post-bg.jpg\\\")\",\"heading\":\"Velit esse dolor dolor qui cillum velit in quis exercitation occaecat.\",\"subHeading\":\"Adipisicing sit minim occaecat nulla proident exercitation do laboris.\",\"meta\":\"February 15, 2020\",\"body\":\"# Velit esse dolor dolor qui cillum velit in quis exercitation occaecat.\\n\\nAdipisicing sit minim occaecat nulla proident exercitation do laboris.\\n\\n## Mollit magna sunt ipsum eiusmod magna non officia officia id nostrud cillum.\\n\\nLaboris culpa ea est et aliqua amet ullamco Lorem non enim laborum incididunt ex Lorem. Minim sint cupidatat magna esse labore id. Do qui incididunt consectetur nulla aliquip consequat nostrud incididunt occaecat ad. Excepteur nulla adipisicing enim ea occaecat fugiat dolore sunt est et. Eu veniam nostrud sit aute consectetur dolore ipsum fugiat anim duis.\"}]}");
      /***/
    },

    /***/
    "5TF+":
    /*!************************************************!*\
      !*** ./src/modules/app-common/guards/index.ts ***!
      \************************************************/

    /*! exports provided: guards, AppCommonGuard */

    /***/
    function TF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "guards", function () {
        return guards;
      });
      /* harmony import */


      var _app_common_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-common.guard */
      "62Ze");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AppCommonGuard", function () {
        return _app_common_guard__WEBPACK_IMPORTED_MODULE_0__["AppCommonGuard"];
      });

      var guards = [_app_common_guard__WEBPACK_IMPORTED_MODULE_0__["AppCommonGuard"]];
      /***/
    },

    /***/
    "5udd":
    /*!*****************************************************************************!*\
      !*** ./src/modules/navigation/layouts/layout-auth/layout-auth.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: LayoutAuthComponent */

    /***/
    function udd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutAuthComponent", function () {
        return LayoutAuthComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_layout_auth_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./layout-auth.component.html */
      "f8sU");
      /* harmony import */


      var _layout_auth_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layout-auth.component.scss */
      "KEmI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LayoutAuthComponent = /*#__PURE__*/function () {
        function LayoutAuthComponent() {
          _classCallCheck(this, LayoutAuthComponent);
        }

        _createClass(LayoutAuthComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LayoutAuthComponent;
      }();

      LayoutAuthComponent.ctorParameters = function () {
        return [];
      };

      LayoutAuthComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-layout-auth',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_layout_auth_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_layout_auth_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LayoutAuthComponent);
      /***/
    },

    /***/
    "62Ze":
    /*!***********************************************************!*\
      !*** ./src/modules/app-common/guards/app-common.guard.ts ***!
      \***********************************************************/

    /*! exports provided: AppCommonGuard */

    /***/
    function Ze(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppCommonGuard", function () {
        return AppCommonGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var AppCommonGuard = /*#__PURE__*/function () {
        function AppCommonGuard() {
          _classCallCheck(this, AppCommonGuard);
        }

        _createClass(AppCommonGuard, [{
          key: "canActivate",
          value: function canActivate() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
          }
        }]);

        return AppCommonGuard;
      }();

      AppCommonGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AppCommonGuard);
      /***/
    },

    /***/
    "68rg":
    /*!***********************************************************!*\
      !*** ./src/modules/navigation/guards/navigation.guard.ts ***!
      \***********************************************************/

    /*! exports provided: NavigationGuard */

    /***/
    function rg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationGuard", function () {
        return NavigationGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var NavigationGuard = /*#__PURE__*/function () {
        function NavigationGuard() {
          _classCallCheck(this, NavigationGuard);
        }

        _createClass(NavigationGuard, [{
          key: "canActivate",
          value: function canActivate() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
          }
        }]);

        return NavigationGuard;
      }();

      NavigationGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], NavigationGuard);
      /***/
    },

    /***/
    "6yf/":
    /*!*************************************************!*\
      !*** ./src/modules/navigation/layouts/index.ts ***!
      \*************************************************/

    /*! exports provided: layouts, LayoutAuthComponent, LayoutErrorComponent, LayoutBlogComponent */

    /***/
    function yf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "layouts", function () {
        return layouts;
      });
      /* harmony import */


      var _layout_auth_layout_auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./layout-auth/layout-auth.component */
      "5udd");
      /* harmony import */


      var _layout_blog_layout_blog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./layout-blog/layout-blog.component */
      "iOCu");
      /* harmony import */


      var _layout_error_layout_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layout-error/layout-error.component */
      "biH8");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LayoutAuthComponent", function () {
        return _layout_auth_layout_auth_component__WEBPACK_IMPORTED_MODULE_0__["LayoutAuthComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LayoutErrorComponent", function () {
        return _layout_error_layout_error_component__WEBPACK_IMPORTED_MODULE_2__["LayoutErrorComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LayoutBlogComponent", function () {
        return _layout_blog_layout_blog_component__WEBPACK_IMPORTED_MODULE_1__["LayoutBlogComponent"];
      });

      var layouts = [_layout_auth_layout_auth_component__WEBPACK_IMPORTED_MODULE_0__["LayoutAuthComponent"], _layout_error_layout_error_component__WEBPACK_IMPORTED_MODULE_2__["LayoutErrorComponent"], _layout_blog_layout_blog_component__WEBPACK_IMPORTED_MODULE_1__["LayoutBlogComponent"]];
      /***/
    },

    /***/
    "8iQY":
    /*!*********************************************************!*\
      !*** ./src/modules/auth/services/auth-utils.service.ts ***!
      \*********************************************************/

    /*! exports provided: AuthUtilsService */

    /***/
    function iQY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthUtilsService", function () {
        return AuthUtilsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "Nm8O");
      /* harmony import */


      var _common_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @common/services */
      "gNCb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var _isLoggedIn$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);

      var AuthUtilsService = /*#__PURE__*/function () {
        function AuthUtilsService(util) {
          _classCallCheck(this, AuthUtilsService);

          this.util = util;
          this.jwtHelperService = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
        }

        _createClass(AuthUtilsService, [{
          key: "isLoggedIn$",
          value: function isLoggedIn$() {
            return _isLoggedIn$;
          }
        }, {
          key: "bearerToken",
          value: function bearerToken() {
            var token = this._jwtIsValid();

            if (token) {
              return "bearer ".concat(token);
            }

            return false;
          }
        }, {
          key: "checkToken",
          value: function checkToken() {
            this._jwtIsValid();
          }
        }, {
          key: "checkToken$",
          value: function checkToken$() {
            var token = this._jwtIsValid();

            if (token) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(token);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new Error('INVALID_JWT'));
          }
        }, {
          key: "processToken$",
          value: function processToken$(token) {
            if (!token) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new Error('NO_TOKEN'));
            }

            this._storeToken(token);

            var tokenPayload = this._decodeToken(token);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(tokenPayload);
          }
        }, {
          key: "_decodeToken",
          value: function _decodeToken(token) {
            var user = this.jwtHelperService.decodeToken(token);
            return user;
          }
        }, {
          key: "decodeToken$",
          value: function decodeToken$(token) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this._decodeToken(token));
          }
        }, {
          key: "_storeToken",
          value: function _storeToken(token) {
            return this.util.localStorage.setItem('sb-clean-blog|token', token);
          }
        }, {
          key: "removeTokens",
          value: function removeTokens() {
            return this.util.localStorage.removeItem('sb-clean-blog|token');
          }
        }, {
          key: "postOptionsAuthHeaders",
          value: function postOptionsAuthHeaders() {
            return {
              headers: {
                Authorization: this.bearerToken()
              }
            };
          }
        }, {
          key: "_jwtIsValid",
          value: function _jwtIsValid() {
            var token = this.util.localStorage.getItem('sb-clean-blog|token');

            if (!token) {
              _isLoggedIn$.next(false);

              return false;
            }

            var expired = this.jwtHelperService.isTokenExpired(token);

            if (expired) {
              this.util.localStorage.removeItem('sb-clean-blog|token');

              _isLoggedIn$.next(false);

              return false;
            }

            _isLoggedIn$.next(true);

            return token;
          }
        }]);

        return AuthUtilsService;
      }();

      AuthUtilsService.ctorParameters = function () {
        return [{
          type: _common_services__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]
        }];
      };

      AuthUtilsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_common_services__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]])], AuthUtilsService);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "C5PV":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/containers/version/version.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function C5PV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span>{{version}}</span>\n";
      /***/
    },

    /***/
    "G69V":
    /*!****************************************************!*\
      !*** ./src/modules/app-common/components/index.ts ***!
      \****************************************************/

    /*! exports provided: components, CardComponent, CardViewDetailsComponent */

    /***/
    function G69V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "components", function () {
        return components;
      });
      /* harmony import */


      var _card_view_details_card_view_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./card-view-details/card-view-details.component */
      "Qn4I");
      /* harmony import */


      var _card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./card/card.component */
      "vaVa");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
        return _card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CardViewDetailsComponent", function () {
        return _card_view_details_card_view_details_component__WEBPACK_IMPORTED_MODULE_0__["CardViewDetailsComponent"];
      });

      var components = [_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"], _card_view_details_card_view_details_component__WEBPACK_IMPORTED_MODULE_0__["CardViewDetailsComponent"]];
      /***/
    },

    /***/
    "HBbf":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/layouts/layout-error/layout-error.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HBbf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"layoutError\">\n    <div id=\"layoutError_content\">\n        <main><ng-content></ng-content></main>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "Hf4d":
    /*!*****************************************************************!*\
      !*** ./src/modules/app-common/interceptors/demo.interceptor.ts ***!
      \*****************************************************************/

    /*! exports provided: DemoInterceptor */

    /***/
    function Hf4d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DemoInterceptor", function () {
        return DemoInterceptor;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _common_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @common/services */
      "gNCb");
      /* harmony import */


      var change_case__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! change-case */
      "8LIU");
      /* harmony import */


      var crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! crypto-js/enc-base64 */
      "ETIr");
      /* harmony import */


      var crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var crypto_js_enc_utf8__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! crypto-js/enc-utf8 */
      "+NVA");
      /* harmony import */


      var crypto_js_enc_utf8__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(crypto_js_enc_utf8__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var crypto_js_hmac_sha256__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! crypto-js/hmac-sha256 */
      "7VPu");
      /* harmony import */


      var crypto_js_hmac_sha256__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(crypto_js_hmac_sha256__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! date-fns */
      "b/SL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! uuid */
      "4USb");
      /* harmony import */


      var _demo_config_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./demo.config.json */
      "3Hik");

      var _demo_config_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ./demo.config.json */
      "3Hik", 1);

      var DemoInterceptor = /*#__PURE__*/function () {
        function DemoInterceptor(utilityService, configService) {
          _classCallCheck(this, DemoInterceptor);

          this.utilityService = utilityService;
          this.configService = configService;
          this.secret = 'SHHHHHHHHH';
          var demoPosts = this.utilityService.getStoredObject('DEMO_POSTS');

          if (demoPosts) {
            this.posts = demoPosts;
          } else {
            this.posts = _demo_config_json__WEBPACK_IMPORTED_MODULE_11__.posts;

            this._savePosts();
          }
        }

        _createClass(DemoInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            if (!this.configService.config || !this.configService.config.demoEnabled) {
              return next.handle(request);
            }

            if (request.url.match(/\/api\/latest\/auth\/login$/)) {
              // login$
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                status: 200,
                body: {
                  token: this._createToken()
                }
              }));
            }

            if (request.url.match(/\/api\/latest\/posts$/)) {
              switch (request.method) {
                case 'GET':
                  // getPosts$
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                    status: 200,
                    body: this.posts
                  }));

                case 'POST':
                  // createPost$
                  var body = request.body;
                  var slug = body.slug ? Object(change_case__WEBPACK_IMPORTED_MODULE_4__["paramCase"])(body.slug).toLowerCase() : Object(change_case__WEBPACK_IMPORTED_MODULE_4__["paramCase"])(body.heading).toLowerCase();
                  var newPost = {
                    id: Object(uuid__WEBPACK_IMPORTED_MODULE_10__["v4"])(),
                    slug: slug,
                    backgroundImage: "url(\"".concat(body.backgroundImage, "\")"),
                    heading: body.heading,
                    subHeading: body.subHeading,
                    body: body.body,
                    meta: Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["format"])(new Date(), 'MMMM d, yyyy')
                  };
                  this.posts.unshift(newPost);

                  this._savePosts();

                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                    status: 200,
                    body: newPost
                  }));
              }
            }

            if (request.url.match(/\/api\/latest\/posts\/.+$/)) {
              switch (request.method) {
                case 'GET':
                  // getPost$
                  var slugMatch = request.url.match(/[\w-]+$/);

                  if (slugMatch) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                      status: 200,
                      body: this.posts.find(function (post) {
                        return post.slug === slugMatch[0];
                      })
                    }));
                  }

                  console.log("### ERROR: Issue with getPost$ in DemoInterceptor");
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])({});

                case 'PUT':
                  // updatePost$
                  var updatePostPayload = request.body;
                  var updatePostID = request.url.match(/[\w-]+$/);

                  if (updatePostID) {
                    var foundPost = this.posts.find(function (post) {
                      return post.id === updatePostID[0];
                    });
                    updatePostPayload.backgroundImage = updatePostPayload.backgroundImage ? "url(\"".concat(updatePostPayload.backgroundImage, "\")") : undefined;
                    Object.assign(foundPost, updatePostPayload);

                    this._savePosts();

                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                      status: 200,
                      body: undefined
                    }));
                  }

                  console.log("### ERROR: Issue with updatePost$ in DemoInterceptor");
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])({});

                case 'DELETE':
                  // deletePost$
                  var deletePostID = request.url.match(/[\w-]+$/);

                  if (deletePostID) {
                    this.posts = this.posts.filter(function (post) {
                      return post.id !== deletePostID[0];
                    });

                    this._savePosts();

                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                      status: 200,
                      body: undefined
                    }));
                  }

                  console.log("### ERROR: Issue with deletePost$ in DemoInterceptor");
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])({});
              }
            }

            return next.handle(request);
          }
        }, {
          key: "_savePosts",
          value: function _savePosts() {
            this.utilityService.storeObject('DEMO_POSTS', this.posts);
          }
        }, {
          key: "_createToken",
          value: function _createToken() {
            var stringifiedData = crypto_js_enc_utf8__WEBPACK_IMPORTED_MODULE_6___default.a.parse(JSON.stringify({
              id: 'test123',
              firstName: 'Testy',
              lastName: 'McTestface',
              email: 'test@test.test'
            }));

            var encodedData = this._base64url(stringifiedData);

            var stringifiedHeader = crypto_js_enc_utf8__WEBPACK_IMPORTED_MODULE_6___default.a.parse(JSON.stringify({
              alglg: 'HS256',
              typ: 'JWT'
            }));

            var encodedHeader = this._base64url(stringifiedHeader);

            var signature = crypto_js_hmac_sha256__WEBPACK_IMPORTED_MODULE_7___default()("".concat(encodedHeader, ".").concat(encodedData), this.secret);
            return "".concat(encodedHeader, ".").concat(encodedData, ".").concat(this._base64url(signature));
          }
        }, {
          key: "_base64url",
          value: function _base64url(source) {
            // Encode in classical base64
            var encodedSource = crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(source); // Remove padding equal characters

            encodedSource = encodedSource.replace(/=+$/, ''); // Replace characters according to base64url specifications

            encodedSource = encodedSource.replace(/\+/g, '-');
            encodedSource = encodedSource.replace(/\//g, '_');
            return encodedSource;
          }
        }]);

        return DemoInterceptor;
      }();

      DemoInterceptor.ctorParameters = function () {
        return [{
          type: _common_services__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]
        }, {
          type: _common_services__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
        }];
      };

      DemoInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_common_services__WEBPACK_IMPORTED_MODULE_3__["UtilityService"], _common_services__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])], DemoInterceptor);
      /***/
    },

    /***/
    "KEmI":
    /*!*******************************************************************************!*\
      !*** ./src/modules/navigation/layouts/layout-auth/layout-auth.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function KEmI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#layoutAuthentication {\n  background-color: #212529;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbGF5b3V0LWF1dGguY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHlCQ2FPO0VEWlAsYUFBQTtBQURKIiwiZmlsZSI6ImxheW91dC1hdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL3ZhcmlhYmxlcy5zY3NzJztcblxuI2xheW91dEF1dGhlbnRpY2F0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS05MDA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cbiIsIi8vIFZhcmlhYmxlc1xuLy9cbi8vIFZhcmlhYmxlcyBzaG91bGQgZm9sbG93IHRoZSBgJGNvbXBvbmVudC1zdGF0ZS1wcm9wZXJ0eS1zaXplYCBmb3JtdWxhIGZvclxuLy8gY29uc2lzdGVudCBuYW1pbmcuIEV4OiAkbmF2LWxpbmstZGlzYWJsZWQtY29sb3IgYW5kICRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHMuXG5cbi8vIENvbG9yIHN5c3RlbVxuXG4kd2hpdGU6ICAgICNmZmYgIWRlZmF1bHQ7XG4kZ3JheS0xMDA6ICNmOGY5ZmEgIWRlZmF1bHQ7XG4kZ3JheS0yMDA6ICNlOWVjZWYgIWRlZmF1bHQ7XG4kZ3JheS0zMDA6ICNkZWUyZTYgIWRlZmF1bHQ7XG4kZ3JheS00MDA6ICNjZWQ0ZGEgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICNhZGI1YmQgIWRlZmF1bHQ7XG4kZ3JheS02MDA6ICM2Yzc1N2QgIWRlZmF1bHQ7XG4kZ3JheS03MDA6ICM0OTUwNTcgIWRlZmF1bHQ7XG4kZ3JheS04MDA6ICMzNDNhNDAgIWRlZmF1bHQ7XG4kZ3JheS05MDA6ICMyMTI1MjkgIWRlZmF1bHQ7XG4kYmxhY2s6ICAgICMwMDAgIWRlZmF1bHQ7XG5cbiRncmF5czogKCkgIWRlZmF1bHQ7XG4kZ3JheXM6IG1hcC1tZXJnZShcbiAgKFxuICAgIFwiMTAwXCI6ICRncmF5LTEwMCxcbiAgICBcIjIwMFwiOiAkZ3JheS0yMDAsXG4gICAgXCIzMDBcIjogJGdyYXktMzAwLFxuICAgIFwiNDAwXCI6ICRncmF5LTQwMCxcbiAgICBcIjUwMFwiOiAkZ3JheS01MDAsXG4gICAgXCI2MDBcIjogJGdyYXktNjAwLFxuICAgIFwiNzAwXCI6ICRncmF5LTcwMCxcbiAgICBcIjgwMFwiOiAkZ3JheS04MDAsXG4gICAgXCI5MDBcIjogJGdyYXktOTAwXG4gICksXG4gICRncmF5c1xuKTtcblxuJGJsdWU6ICAgICMwMDdiZmYgIWRlZmF1bHQ7XG4kaW5kaWdvOiAgIzY2MTBmMiAhZGVmYXVsdDtcbiRwdXJwbGU6ICAjNmY0MmMxICFkZWZhdWx0O1xuJHBpbms6ICAgICNlODNlOGMgIWRlZmF1bHQ7XG4kcmVkOiAgICAgI2RjMzU0NSAhZGVmYXVsdDtcbiRvcmFuZ2U6ICAjZmQ3ZTE0ICFkZWZhdWx0O1xuJHllbGxvdzogICNmZmMxMDcgIWRlZmF1bHQ7XG4kZ3JlZW46ICAgIzI4YTc0NSAhZGVmYXVsdDtcbiR0ZWFsOiAgICAjMjBjOTk3ICFkZWZhdWx0O1xuJGN5YW46ICAgICMxN2EyYjggIWRlZmF1bHQ7XG5cbiRjb2xvcnM6ICgpICFkZWZhdWx0O1xuJGNvbG9yczogbWFwLW1lcmdlKFxuICAoXG4gICAgXCJibHVlXCI6ICAgICAgICRibHVlLFxuICAgIFwiaW5kaWdvXCI6ICAgICAkaW5kaWdvLFxuICAgIFwicHVycGxlXCI6ICAgICAkcHVycGxlLFxuICAgIFwicGlua1wiOiAgICAgICAkcGluayxcbiAgICBcInJlZFwiOiAgICAgICAgJHJlZCxcbiAgICBcIm9yYW5nZVwiOiAgICAgJG9yYW5nZSxcbiAgICBcInllbGxvd1wiOiAgICAgJHllbGxvdyxcbiAgICBcImdyZWVuXCI6ICAgICAgJGdyZWVuLFxuICAgIFwidGVhbFwiOiAgICAgICAkdGVhbCxcbiAgICBcImN5YW5cIjogICAgICAgJGN5YW4sXG4gICAgXCJ3aGl0ZVwiOiAgICAgICR3aGl0ZSxcbiAgICBcImdyYXlcIjogICAgICAgJGdyYXktNjAwLFxuICAgIFwiZ3JheS1kYXJrXCI6ICAkZ3JheS04MDBcbiAgKSxcbiAgJGNvbG9yc1xuKTtcblxuJHByaW1hcnk6ICAgICAgICRibHVlICFkZWZhdWx0O1xuJHNlY29uZGFyeTogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAgICAkZ3JlZW4gIWRlZmF1bHQ7XG4kaW5mbzogICAgICAgICAgJGN5YW4gIWRlZmF1bHQ7XG4kd2FybmluZzogICAgICAgJHllbGxvdyAhZGVmYXVsdDtcbiRkYW5nZXI6ICAgICAgICAkcmVkICFkZWZhdWx0O1xuJGxpZ2h0OiAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiRkYXJrOiAgICAgICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XG5cbiR0aGVtZS1jb2xvcnM6ICgpICFkZWZhdWx0O1xuJHRoZW1lLWNvbG9yczogbWFwLW1lcmdlKFxuICAoXG4gICAgXCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxuICAgIFwic2Vjb25kYXJ5XCI6ICAkc2Vjb25kYXJ5LFxuICAgIFwic3VjY2Vzc1wiOiAgICAkc3VjY2VzcyxcbiAgICBcImluZm9cIjogICAgICAgJGluZm8sXG4gICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLFxuICAgIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLFxuICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQsXG4gICAgXCJkYXJrXCI6ICAgICAgICRkYXJrXG4gICksXG4gICR0aGVtZS1jb2xvcnNcbik7XG5cbi8vIFNldCBhIHNwZWNpZmljIGp1bXAgcG9pbnQgZm9yIHJlcXVlc3RpbmcgY29sb3IganVtcHNcbiR0aGVtZS1jb2xvci1pbnRlcnZhbDogICAgICA4JSAhZGVmYXVsdDtcblxuLy8gVGhlIHlpcSBsaWdodG5lc3MgdmFsdWUgdGhhdCBkZXRlcm1pbmVzIHdoZW4gdGhlIGxpZ2h0bmVzcyBvZiBjb2xvciBjaGFuZ2VzIGZyb20gXCJkYXJrXCIgdG8gXCJsaWdodFwiLiBBY2NlcHRhYmxlIHZhbHVlcyBhcmUgYmV0d2VlbiAwIGFuZCAyNTUuXG4keWlxLWNvbnRyYXN0ZWQtdGhyZXNob2xkOiAgMTUwICFkZWZhdWx0O1xuXG4vLyBDdXN0b21pemUgdGhlIGxpZ2h0IGFuZCBkYXJrIHRleHQgY29sb3JzIGZvciB1c2UgaW4gb3VyIFlJUSBjb2xvciBjb250cmFzdCBmdW5jdGlvbi5cbiR5aXEtdGV4dC1kYXJrOiAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4keWlxLXRleHQtbGlnaHQ6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG4vLyBDaGFyYWN0ZXJzIHdoaWNoIGFyZSBlc2NhcGVkIGJ5IHRoZSBlc2NhcGUtc3ZnIGZ1bmN0aW9uXG4kZXNjYXBlZC1jaGFyYWN0ZXJzOiAoXG4gIChcIjxcIiwgXCIlM2NcIiksXG4gIChcIj5cIiwgXCIlM2VcIiksXG4gIChcIiNcIiwgXCIlMjNcIiksXG4gIChcIihcIiwgXCIlMjhcIiksXG4gIChcIilcIiwgXCIlMjlcIiksXG4pICFkZWZhdWx0O1xuXG5cbi8vIE9wdGlvbnNcbi8vXG4vLyBRdWlja2x5IG1vZGlmeSBnbG9iYWwgc3R5bGluZyBieSBlbmFibGluZyBvciBkaXNhYmxpbmcgb3B0aW9uYWwgZmVhdHVyZXMuXG5cbiRlbmFibGUtY2FyZXQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yb3VuZGVkOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXNoYWRvd3M6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLWdyYWRpZW50czogICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXRyYW5zaXRpb25zOiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcHJlZmVycy1yZWR1Y2VkLW1vdGlvbi1tZWRpYS1xdWVyeTogICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1ob3Zlci1tZWRpYS1xdWVyeTogICAgICAgICAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0OyAvLyBEZXByZWNhdGVkLCBubyBsb25nZXIgYWZmZWN0cyBhbnkgY29tcGlsZWQgQ1NTXG4kZW5hYmxlLWdyaWQtY2xhc3NlczogICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcG9pbnRlci1jdXJzb3ItZm9yLWJ1dHRvbnM6ICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wcmludC1zdHlsZXM6ICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXJlc3BvbnNpdmUtZm9udC1zaXplczogICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXZhbGlkYXRpb24taWNvbnM6ICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtZGVwcmVjYXRpb24tbWVzc2FnZXM6ICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuXG5cbi8vIFNwYWNpbmdcbi8vXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXG4vLyB2YXJpYWJsZXMuIE1vc3RseSBmb2N1c2VkIG9uIHNwYWNpbmcuXG4vLyBZb3UgY2FuIGFkZCBtb3JlIGVudHJpZXMgdG8gdGhlICRzcGFjZXJzIG1hcCwgc2hvdWxkIHlvdSBuZWVkIG1vcmUgdmFyaWF0aW9uLlxuXG4kc3BhY2VyOiAxcmVtICFkZWZhdWx0O1xuJHNwYWNlcnM6ICgpICFkZWZhdWx0O1xuJHNwYWNlcnM6IG1hcC1tZXJnZShcbiAgKFxuICAgIDA6IDAsXG4gICAgMTogKCRzcGFjZXIgKiAuMjUpLFxuICAgIDI6ICgkc3BhY2VyICogLjUpLFxuICAgIDM6ICRzcGFjZXIsXG4gICAgNDogKCRzcGFjZXIgKiAxLjUpLFxuICAgIDU6ICgkc3BhY2VyICogMylcbiAgKSxcbiAgJHNwYWNlcnNcbik7XG5cbi8vIFRoaXMgdmFyaWFibGUgYWZmZWN0cyB0aGUgYC5oLSpgIGFuZCBgLnctKmAgY2xhc3Nlcy5cbiRzaXplczogKCkgIWRlZmF1bHQ7XG4kc2l6ZXM6IG1hcC1tZXJnZShcbiAgKFxuICAgIDI1OiAyNSUsXG4gICAgNTA6IDUwJSxcbiAgICA3NTogNzUlLFxuICAgIDEwMDogMTAwJSxcbiAgICBhdXRvOiBhdXRvXG4gICksXG4gICRzaXplc1xuKTtcblxuXG4vLyBCb2R5XG4vL1xuLy8gU2V0dGluZ3MgZm9yIHRoZSBgPGJvZHk+YCBlbGVtZW50LlxuXG4kYm9keS1iZzogICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcblxuXG4vLyBMaW5rc1xuLy9cbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cblxuJGxpbmstY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpICFkZWZhdWx0O1xuJGxpbmstZGVjb3JhdGlvbjogICAgICAgICAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgIGRhcmtlbigkbGluay1jb2xvciwgMTUlKSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246ICAgICAgICAgICAgICAgICAgIHVuZGVybGluZSAhZGVmYXVsdDtcbi8vIERhcmtlbiBwZXJjZW50YWdlIGZvciBsaW5rcyB3aXRoIGAudGV4dC0qYCBjbGFzcyAoZS5nLiBgLnRleHQtc3VjY2Vzc2ApXG4kZW1waGFzaXplZC1saW5rLWhvdmVyLWRhcmtlbi1wZXJjZW50YWdlOiAxNSUgIWRlZmF1bHQ7XG5cbi8vIFBhcmFncmFwaHNcbi8vXG4vLyBTdHlsZSBwIGVsZW1lbnQuXG5cbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogICAxcmVtICFkZWZhdWx0O1xuXG5cbi8vIEdyaWQgYnJlYWtwb2ludHNcbi8vXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cblxuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIHNtOiA1NzZweCxcbiAgbWQ6IDc2OHB4LFxuICBsZzogOTkycHgsXG4gIHhsOiAxMjAwcHhcbikgIWRlZmF1bHQ7XG5cbkBpbmNsdWRlIF9hc3NlcnQtYXNjZW5kaW5nKCRncmlkLWJyZWFrcG9pbnRzLCBcIiRncmlkLWJyZWFrcG9pbnRzXCIpO1xuQGluY2x1ZGUgX2Fzc2VydC1zdGFydHMtYXQtemVybygkZ3JpZC1icmVha3BvaW50cywgXCIkZ3JpZC1icmVha3BvaW50c1wiKTtcblxuXG4vLyBHcmlkIGNvbnRhaW5lcnNcbi8vXG4vLyBEZWZpbmUgdGhlIG1heGltdW0gd2lkdGggb2YgYC5jb250YWluZXJgIGZvciBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLlxuXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcbiAgc206IDU0MHB4LFxuICBtZDogNzIwcHgsXG4gIGxnOiA5NjBweCxcbiAgeGw6IDExNDBweFxuKSAhZGVmYXVsdDtcblxuQGluY2x1ZGUgX2Fzc2VydC1hc2NlbmRpbmcoJGNvbnRhaW5lci1tYXgtd2lkdGhzLCBcIiRjb250YWluZXItbWF4LXdpZHRoc1wiKTtcblxuXG4vLyBHcmlkIGNvbHVtbnNcbi8vXG4vLyBTZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBzcGVjaWZ5IHRoZSB3aWR0aCBvZiB0aGUgZ3V0dGVycy5cblxuJGdyaWQtY29sdW1uczogICAgICAgICAgICAgICAgMTIgIWRlZmF1bHQ7XG4kZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgICAzMHB4ICFkZWZhdWx0O1xuJGdyaWQtcm93LWNvbHVtbnM6ICAgICAgICAgICAgNiAhZGVmYXVsdDtcblxuXG4vLyBDb21wb25lbnRzXG4vL1xuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxuXG4kbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtc206ICAgICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG5cbiRib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcbiRib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJGJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgLjNyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAuMnJlbSAhZGVmYXVsdDtcblxuJHJvdW5kZWQtcGlsbDogICAgICAgICAgICAgICAgNTByZW0gIWRlZmF1bHQ7XG5cbiRib3gtc2hhZG93LXNtOiAgICAgICAgICAgICAgIDAgLjEyNXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgMCAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuMTUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctbGc6ICAgICAgICAgICAgICAgMCAxcmVtIDNyZW0gcmdiYSgkYmxhY2ssIC4xNzUpICFkZWZhdWx0O1xuXG4kY29tcG9uZW50LWFjdGl2ZS1jb2xvcjogICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY29tcG9uZW50LWFjdGl2ZS1iZzogICAgICAgICB0aGVtZS1jb2xvcihcInByaW1hcnlcIikgIWRlZmF1bHQ7XG5cbiRjYXJldC13aWR0aDogICAgICAgICAgICAgICAgIC4zZW0gIWRlZmF1bHQ7XG4kY2FyZXQtdmVydGljYWwtYWxpZ246ICAgICAgICAkY2FyZXQtd2lkdGggKiAuODUgIWRlZmF1bHQ7XG4kY2FyZXQtc3BhY2luZzogICAgICAgICAgICAgICAkY2FyZXQtd2lkdGggKiAuODUgIWRlZmF1bHQ7XG5cbiR0cmFuc2l0aW9uLWJhc2U6ICAgICAgICAgICAgIGFsbCAuMnMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG4kdHJhbnNpdGlvbi1mYWRlOiAgICAgICAgICAgICBvcGFjaXR5IC4xNXMgbGluZWFyICFkZWZhdWx0O1xuJHRyYW5zaXRpb24tY29sbGFwc2U6ICAgICAgICAgaGVpZ2h0IC4zNXMgZWFzZSAhZGVmYXVsdDtcblxuJGVtYmVkLXJlc3BvbnNpdmUtYXNwZWN0LXJhdGlvczogKCkgIWRlZmF1bHQ7XG4kZW1iZWQtcmVzcG9uc2l2ZS1hc3BlY3QtcmF0aW9zOiBqb2luKFxuICAoXG4gICAgKDIxIDkpLFxuICAgICgxNiA5KSxcbiAgICAoNCAzKSxcbiAgICAoMSAxKSxcbiAgKSxcbiAgJGVtYmVkLXJlc3BvbnNpdmUtYXNwZWN0LXJhdGlvc1xuKTtcblxuLy8gVHlwb2dyYXBoeVxuLy9cbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIiAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICAgICAgIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktYmFzZTogICAgICAgICAgICAkZm9udC1mYW1pbHktc2Fucy1zZXJpZiAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1lbmFibGUgdmFsdWUta2V5d29yZC1jYXNlXG5cbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7IC8vIEFzc3VtZXMgdGhlIGJyb3dzZXIgZGVmYXVsdCwgdHlwaWNhbGx5IGAxNnB4YFxuJGZvbnQtc2l6ZS1sZzogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRmb250LXNpemUtc206ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIC44NzUgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1saWdodGVyOiAgICAgICAgIGxpZ2h0ZXIgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbGlnaHQ6ICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiAgICAgICAgICA0MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZDogICAgICAgICAgICA3MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZGVyOiAgICAgICAgICBib2xkZXIgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1iYXNlOiAgICAgICAgICAgICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtYmFzZTogICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG5cbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIuNSAhZGVmYXVsdDtcbiRoMi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIgIWRlZmF1bHQ7XG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjc1ICFkZWZhdWx0O1xuJGg0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xuJGg1LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRoNi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcblxuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206ICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6ICAgICAgICBudWxsICFkZWZhdWx0O1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAgICAgICAgNTAwICFkZWZhdWx0O1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAgICAgICAgMS4yICFkZWZhdWx0O1xuJGhlYWRpbmdzLWNvbG9yOiAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJGRpc3BsYXkxLXNpemU6ICAgICAgICAgICAgICAgNnJlbSAhZGVmYXVsdDtcbiRkaXNwbGF5Mi1zaXplOiAgICAgICAgICAgICAgIDUuNXJlbSAhZGVmYXVsdDtcbiRkaXNwbGF5My1zaXplOiAgICAgICAgICAgICAgIDQuNXJlbSAhZGVmYXVsdDtcbiRkaXNwbGF5NC1zaXplOiAgICAgICAgICAgICAgIDMuNXJlbSAhZGVmYXVsdDtcblxuJGRpc3BsYXkxLXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXkyLXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXkzLXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXk0LXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXktbGluZS1oZWlnaHQ6ICAgICAgICAgJGhlYWRpbmdzLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuXG4kbGVhZC1mb250LXNpemU6ICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuJGxlYWQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuXG4kc21hbGwtZm9udC1zaXplOiAgICAgICAgICAgICA4MCUgIWRlZmF1bHQ7XG5cbiR0ZXh0LW11dGVkOiAgICAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJGJsb2NrcXVvdGUtc21hbGwtY29sb3I6ICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGJsb2NrcXVvdGUtc21hbGwtZm9udC1zaXplOiAgJHNtYWxsLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRibG9ja3F1b3RlLWZvbnQtc2l6ZTogICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG5cbiRoci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG4kaHItYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG4kbWFyay1wYWRkaW5nOiAgICAgICAgICAgICAgICAuMmVtICFkZWZhdWx0O1xuXG4kZHQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcblxuJGtiZC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgaW5zZXQgMCAtLjFyZW0gMCByZ2JhKCRibGFjaywgLjI1KSAhZGVmYXVsdDtcbiRuZXN0ZWQta2JkLWZvbnQtd2VpZ2h0OiAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuXG4kbGlzdC1pbmxpbmUtcGFkZGluZzogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJG1hcmstYmc6ICAgICAgICAgICAgICAgICAgICAgI2ZjZjhlMyAhZGVmYXVsdDtcblxuJGhyLW1hcmdpbi15OiAgICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcblxuXG4vLyBUYWJsZXNcbi8vXG4vLyBDdXN0b21pemVzIHRoZSBgLnRhYmxlYCBjb21wb25lbnQgd2l0aCBiYXNpYyB2YWx1ZXMsIGVhY2ggdXNlZCBhY3Jvc3MgYWxsIHRhYmxlIHZhcmlhdGlvbnMuXG5cbiR0YWJsZS1jZWxsLXBhZGRpbmc6ICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiR0YWJsZS1jZWxsLXBhZGRpbmctc206ICAgICAgIC4zcmVtICFkZWZhdWx0O1xuXG4kdGFibGUtY29sb3I6ICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiR0YWJsZS1iZzogICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kdGFibGUtYWNjZW50LWJnOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjA1KSAhZGVmYXVsdDtcbiR0YWJsZS1ob3Zlci1jb2xvcjogICAgICAgICAgICR0YWJsZS1jb2xvciAhZGVmYXVsdDtcbiR0YWJsZS1ob3Zlci1iZzogICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcbiR0YWJsZS1hY3RpdmUtYmc6ICAgICAgICAgICAgICR0YWJsZS1ob3Zlci1iZyAhZGVmYXVsdDtcblxuJHRhYmxlLWJvcmRlci13aWR0aDogICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbiR0YWJsZS1oZWFkLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiR0YWJsZS1oZWFkLWNvbG9yOiAgICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiR0YWJsZS10aC1mb250LXdlaWdodDogICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbiR0YWJsZS1kYXJrLWNvbG9yOiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWJnOiAgICAgICAgICAgICAgICRncmF5LTgwMCAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWFjY2VudC1iZzogICAgICAgIHJnYmEoJHdoaXRlLCAuMDUpICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstaG92ZXItY29sb3I6ICAgICAgJHRhYmxlLWRhcmstY29sb3IgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1ob3Zlci1iZzogICAgICAgICByZ2JhKCR3aGl0ZSwgLjA3NSkgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1ib3JkZXItY29sb3I6ICAgICBsaWdodGVuKCR0YWJsZS1kYXJrLWJnLCA3LjUlKSAhZGVmYXVsdDtcblxuJHRhYmxlLXN0cmlwZWQtb3JkZXI6ICAgICAgICAgb2RkICFkZWZhdWx0O1xuXG4kdGFibGUtY2FwdGlvbi1jb2xvcjogICAgICAgICAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcblxuJHRhYmxlLWJnLWxldmVsOiAgICAgICAgICAgICAgLTkgIWRlZmF1bHQ7XG4kdGFibGUtYm9yZGVyLWxldmVsOiAgICAgICAgICAtNiAhZGVmYXVsdDtcblxuXG4vLyBCdXR0b25zICsgRm9ybXNcbi8vXG4vLyBTaGFyZWQgdmFyaWFibGVzIHRoYXQgYXJlIHJlYXNzaWduZWQgdG8gYCRpbnB1dC1gIGFuZCBgJGJ0bi1gIHNwZWNpZmljIHZhcmlhYmxlcy5cblxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6ICAgICAgICAgLjM3NXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14OiAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1mYW1pbHk6ICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZTogICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0OiAgICAgICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1mb2N1cy13aWR0aDogICAgICAgLjJyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvY3VzLWNvbG9yOiAgICAgICByZ2JhKCRjb21wb25lbnQtYWN0aXZlLWJnLCAuMjUpICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiAgMCAwIDAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAkaW5wdXQtYnRuLWZvY3VzLWNvbG9yICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1zbTogICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteC1zbTogICAgICAuNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1zaXplLXNtOiAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtOiAgICAkbGluZS1oZWlnaHQtc20gIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAgICAgIC41cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGc6ICAgICAgMXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1zaXplLWxnOiAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnOiAgICAkbGluZS1oZWlnaHQtbGcgIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tYm9yZGVyLXdpZHRoOiAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cblxuLy8gQnV0dG9uc1xuLy9cbi8vIEZvciBlYWNoIG9mIEJvb3RzdHJhcCdzIGJ1dHRvbnMsIGRlZmluZSB0ZXh0LCBiYWNrZ3JvdW5kLCBhbmQgYm9yZGVyIGNvbG9yLlxuXG4kYnRuLXBhZGRpbmcteTogICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRidG4tcGFkZGluZy14OiAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14ICFkZWZhdWx0O1xuJGJ0bi1mb250LWZhbWlseTogICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LWZhbWlseSAhZGVmYXVsdDtcbiRidG4tZm9udC1zaXplOiAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplICFkZWZhdWx0O1xuJGJ0bi1saW5lLWhlaWdodDogICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodCAhZGVmYXVsdDtcbiRidG4td2hpdGUtc3BhY2U6ICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7IC8vIFNldCB0byBgbm93cmFwYCB0byBwcmV2ZW50IHRleHQgd3JhcHBpbmdcblxuJGJ0bi1wYWRkaW5nLXktc206ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteC1zbTogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcbiRidG4tZm9udC1zaXplLXNtOiAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGJ0bi1saW5lLWhlaWdodC1zbTogICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbSAhZGVmYXVsdDtcblxuJGJ0bi1wYWRkaW5nLXktbGc6ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteC1sZzogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcbiRidG4tZm9udC1zaXplLWxnOiAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJGJ0bi1saW5lLWhlaWdodC1sZzogICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZyAhZGVmYXVsdDtcblxuJGJ0bi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgJGlucHV0LWJ0bi1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRidG4tZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG4kYnRuLWJveC1zaGFkb3c6ICAgICAgICAgICAgICBpbnNldCAwIDFweCAwIHJnYmEoJHdoaXRlLCAuMTUpLCAwIDFweCAxcHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuJGJ0bi1mb2N1cy13aWR0aDogICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAhZGVmYXVsdDtcbiRidG4tZm9jdXMtYm94LXNoYWRvdzogICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRidG4tZGlzYWJsZWQtb3BhY2l0eTogICAgICAgIC42NSAhZGVmYXVsdDtcbiRidG4tYWN0aXZlLWJveC1zaGFkb3c6ICAgICAgIGluc2V0IDAgM3B4IDVweCByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XG5cbiRidG4tbGluay1kaXNhYmxlZC1jb2xvcjogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJGJ0bi1ibG9jay1zcGFjaW5nLXk6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbi8vIEFsbG93cyBmb3IgY3VzdG9taXppbmcgYnV0dG9uIHJhZGl1cyBpbmRlcGVuZGVudGx5IGZyb20gZ2xvYmFsIGJvcmRlciByYWRpdXNcbiRidG4tYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtc206ICAgICAgICAkYm9yZGVyLXJhZGl1cy1zbSAhZGVmYXVsdDtcblxuJGJ0bi10cmFuc2l0aW9uOiAgICAgICAgICAgICAgY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuXG5cbi8vIEZvcm1zXG5cbiRsYWJlbC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15ICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14ICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtZmFtaWx5OiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1mYW1pbHkgIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUgIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJhc2UgIWRlZmF1bHQ7XG4kaW5wdXQtbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodCAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteS1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteC1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LXNtICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGlucHV0LWxpbmUtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtc20gIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXktbGc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemUtbGc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRpbnB1dC1saW5lLWhlaWdodC1sZzogICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnICFkZWZhdWx0O1xuXG4kaW5wdXQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGlucHV0LWRpc2FibGVkLWJnOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuJGlucHV0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAkZ3JheS00MDAgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kaW5wdXQtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgaW5zZXQgMCAxcHggMXB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcblxuJGlucHV0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1yYWRpdXMtc206ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLXNtICFkZWZhdWx0O1xuXG4kaW5wdXQtZm9jdXMtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgIGxpZ2h0ZW4oJGNvbXBvbmVudC1hY3RpdmUtYmcsIDI1JSkgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGlucHV0LXBsYWludGV4dC1jb2xvcjogICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0LWJvcmRlcjogICAgICAgICAgICAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAqIDIgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQtaW5uZXI6ICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtLCAkaW5wdXQtcGFkZGluZy15ICogMikgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGY6ICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIC41ZW0sICRpbnB1dC1wYWRkaW5nLXkpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1pbm5lci1xdWFydGVyOiAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAuMjVlbSwgJGlucHV0LXBhZGRpbmcteSAvIDIpICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIDFlbSwgYWRkKCRpbnB1dC1wYWRkaW5nLXkgKiAyLCAkaW5wdXQtaGVpZ2h0LWJvcmRlciwgZmFsc2UpKSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtc206ICAgICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0LXNtICogMWVtLCBhZGQoJGlucHV0LXBhZGRpbmcteS1zbSAqIDIsICRpbnB1dC1oZWlnaHQtYm9yZGVyLCBmYWxzZSkpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1sZzogICAgICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQtbGcgKiAxZW0sIGFkZCgkaW5wdXQtcGFkZGluZy15LWxnICogMiwgJGlucHV0LWhlaWdodC1ib3JkZXIsIGZhbHNlKSkgIWRlZmF1bHQ7XG5cbiRpbnB1dC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuXG4kZm9ybS10ZXh0LW1hcmdpbi10b3A6ICAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuXG4kZm9ybS1jaGVjay1pbnB1dC1ndXR0ZXI6ICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LW1hcmdpbi15OiAgICAgICAgICAgICAuM3JlbSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LW1hcmdpbi14OiAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlubGluZS1tYXJnaW4teDogICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbmxpbmUtaW5wdXQtbWFyZ2luLXg6ICAgICAgLjMxMjVyZW0gIWRlZmF1bHQ7XG5cbiRmb3JtLWdyaWQtZ3V0dGVyLXdpZHRoOiAgICAgICAgICAgICAgICAxMHB4ICFkZWZhdWx0O1xuJGZvcm0tZ3JvdXAtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbiRpbnB1dC1ncm91cC1hZGRvbi1jb2xvcjogICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYmc6ICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbiRjdXN0b20tZm9ybXMtdHJhbnNpdGlvbjogICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1ndXR0ZXI6ICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1zcGFjZXIteDogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWN1cnNvcjogICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZTogICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1iZzogICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1iZy1zaXplOiAgICAgIDUwJSA1MCUgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJveC1zaGFkb3c6ICAgJGlucHV0LWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci1jb2xvcjogJGdyYXktNTAwICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItd2lkdGg6ICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1sYWJlbC1jb2xvcjogICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWRpc2FibGVkLWJnOiAgICAgICAgICAkaW5wdXQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtbGFiZWwtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcjogICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtZGlzYWJsZWQtYmc6ICByZ2JhKHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSwgLjUpICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJveC1zaGFkb3c6ICAgbnVsbCAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1ib3JkZXItY29sb3I6ICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1mb2N1cy1ib3gtc2hhZG93OiAgICAgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJvcmRlci1jb2xvcjogICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1jb2xvcjogICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiAgICAgICAgICAgIGxpZ2h0ZW4oJGNvbXBvbmVudC1hY3RpdmUtYmcsIDM1JSkgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1ib3gtc2hhZG93OiAgICBudWxsICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcn0nIGQ9J002LjU2NC43NWwtMy41OSAzLjYxMi0xLjUzOC0xLjU1TDAgNC4yNmwyLjk3NCAyLjk5TDggMi4xOTN6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJnOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yOiAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1pbmRldGVybWluYXRlOiAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQnIGhlaWdodD0nNCcgdmlld0JveD0nMCAwIDQgNCc+PHBhdGggc3Ryb2tlPScjeyRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3J9JyBkPSdNMCAyaDQnLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJveC1zaGFkb3c6ICAgbnVsbCAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAgICA1MCUgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMicgaGVpZ2h0PScxMicgdmlld0JveD0nLTQgLTQgOCA4Jz48Y2lyY2xlIHI9JzMnIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yfScvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcblxuJGN1c3RvbS1zd2l0Y2gtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplICogMS43NSAhZGVmYXVsdDtcbiRjdXN0b20tc3dpdGNoLWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSAvIDIgIWRlZmF1bHQ7XG4kY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3Itc2l6ZTogICAgICAgICAgICAgICAgICBzdWJ0cmFjdCgkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUsICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoICogNCkgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteTogICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXg6ICAgICAgICAgICAkaW5wdXQtcGFkZGluZy14ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9udC1mYW1pbHk6ICAgICAgICAgJGlucHV0LWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplOiAgICAgICAgICAgJGlucHV0LWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWhlaWdodDogICAgICAgICAgICAgICRpbnB1dC1oZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZzogICAxcmVtICFkZWZhdWx0OyAvLyBFeHRyYSBwYWRkaW5nIHRvIGFjY291bnQgZm9yIHRoZSBwcmVzZW5jZSBvZiB0aGUgYmFja2dyb3VuZC1pbWFnZSBiYXNlZCBpbmRpY2F0b3JcbiRjdXN0b20tc2VsZWN0LWZvbnQtd2VpZ2h0OiAgICAgICAgICRpbnB1dC1mb250LXdlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWxpbmUtaGVpZ2h0OiAgICAgICAgICRpbnB1dC1saW5lLWhlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWNvbG9yOiAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWNvbG9yOiAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJnOiAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWJnOiAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJnLXNpemU6ICAgICAgICAgICAgIDhweCAxMHB4ICFkZWZhdWx0OyAvLyBJbiBwaXhlbHMgYmVjYXVzZSBpbWFnZSBkaW1lbnNpb25zXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3I6ICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3I6ICAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzUnIHZpZXdCb3g9JzAgMCA0IDUnPjxwYXRoIGZpbGw9JyN7JGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yfScgZD0nTTIgMEwwIDJoNHptMCA1TDAgM2g0eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJhY2tncm91bmQ6ICAgICAgICAgIGVzY2FwZS1zdmcoJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yKSBuby1yZXBlYXQgcmlnaHQgJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14IGNlbnRlciAvICRjdXN0b20tc2VsZWN0LWJnLXNpemUgIWRlZmF1bHQ7IC8vIFVzZWQgc28gd2UgY2FuIGhhdmUgbXVsdGlwbGUgYmFja2dyb3VuZCBlbGVtZW50cyAoZS5nLiwgYXJyb3cgYW5kIGZlZWRiYWNrIGljb24pXG5cbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tcGFkZGluZy1yaWdodDogYWRkKDFlbSAqIC43NSwgKDIgKiAkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXkgKiAuNzUpICsgJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICsgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmcpICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1wb3NpdGlvbjogICAgICBjZW50ZXIgcmlnaHQgKCRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCArICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nKSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tc2l6ZTogICAgICAgICAgJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXdpZHRoOiAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJvcmRlci1jb2xvcjogICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItcmFkaXVzOiAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJveC1zaGFkb3c6ICAgICAgICAgIGluc2V0IDAgMXB4IDJweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJvcmRlci1jb2xvcjogICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb2N1cy13aWR0aDogICAgICAgICAkaW5wdXQtZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3gtc2hhZG93OiAgICAwIDAgMCAkY3VzdG9tLXNlbGVjdC1mb2N1cy13aWR0aCAkaW5wdXQtYnRuLWZvY3VzLWNvbG9yICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktc206ICAgICAgICAkaW5wdXQtcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LXNtOiAgICAgICAgJGlucHV0LXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1zbTogICAgICAgICRpbnB1dC1mb250LXNpemUtc20gIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtc206ICAgICAgICAgICAkaW5wdXQtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktbGc6ICAgICAgICAkaW5wdXQtcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LWxnOiAgICAgICAgJGlucHV0LXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1sZzogICAgICAgICRpbnB1dC1mb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtbGc6ICAgICAgICAgICAkaW5wdXQtaGVpZ2h0LWxnICFkZWZhdWx0O1xuXG4kY3VzdG9tLXJhbmdlLXRyYWNrLXdpZHRoOiAgICAgICAgICAxMDAlICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1oZWlnaHQ6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWN1cnNvcjogICAgICAgICBwb2ludGVyICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1iZzogICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1ib3JkZXItcmFkaXVzOiAgMXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2stYm94LXNoYWRvdzogICAgIGluc2V0IDAgLjI1cmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuXG4kY3VzdG9tLXJhbmdlLXRodW1iLXdpZHRoOiAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgJGN1c3RvbS1yYW5nZS10aHVtYi13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1ib3JkZXI6ICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAwIC4xcmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgMCAwIDAgMXB4ICRib2R5LWJnLCAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdy13aWR0aDogICRpbnB1dC1mb2N1cy13aWR0aCAhZGVmYXVsdDsgLy8gRm9yIGZvY3VzIGJveCBzaGFkb3cgaXNzdWUgaW4gSUUvRWRnZVxuJGN1c3RvbS1yYW5nZS10aHVtYi1hY3RpdmUtYmc6ICAgICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMzUlKSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItZGlzYWJsZWQtYmc6ICAgICAgICAgICAgICRncmF5LTUwMCAhZGVmYXVsdDtcblxuJGN1c3RvbS1maWxlLWhlaWdodDogICAgICAgICAgICAgICAgJGlucHV0LWhlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1oZWlnaHQtaW5uZXI6ICAgICAgICAgICRpbnB1dC1oZWlnaHQtaW5uZXIgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZGlzYWJsZWQtYmc6ICAgICAgICAgICAkaW5wdXQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tZmlsZS1wYWRkaW5nLXk6ICAgICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtcGFkZGluZy14OiAgICAgICAgICAgICAkaW5wdXQtcGFkZGluZy14ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgJGlucHV0LWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWZvbnQtZmFtaWx5OiAgICAgICAgICAgJGlucHV0LWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgJGlucHV0LWZvbnQtd2VpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWNvbG9yOiAgICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJvcmRlci13aWR0aDogICAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYm9yZGVyLXJhZGl1czogICAgICAgICAkaW5wdXQtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1ib3gtc2hhZG93OiAgICAgICAgICAgICRpbnB1dC1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJ1dHRvbi1jb2xvcjogICAgICAgICAgJGN1c3RvbS1maWxlLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJ1dHRvbi1iZzogICAgICAgICAgICAgJGlucHV0LWdyb3VwLWFkZG9uLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLXRleHQ6IChcbiAgZW46IFwiQnJvd3NlXCJcbikgIWRlZmF1bHQ7XG5cblxuLy8gRm9ybSB2YWxpZGF0aW9uXG5cbiRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6ICAgICAgICAgICRmb3JtLXRleHQtbWFyZ2luLXRvcCAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogICAgICAgICAgICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcjogICAgICAgICB0aGVtZS1jb2xvcihcInN1Y2Nlc3NcIikgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yOiAgICAgICB0aGVtZS1jb2xvcihcImRhbmdlclwiKSAhZGVmYXVsdDtcblxuJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcjogICAgJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkOiAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcn0nIGQ9J00yLjMgNi43M0wuNiA0LjUzYy0uNC0xLjA0LjQ2LTEuNCAxLjEtLjhsMS4xIDEuNCAzLjQtMy44Yy42LS42MyAxLjYtLjI3IDEuMi43bC00IDQuNmMtLjQzLjUtLjguNC0xLjEuMXonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3I6ICAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkOiAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTInIGhlaWdodD0nMTInIGZpbGw9J25vbmUnIHN0cm9rZT0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9JyB2aWV3Qm94PScwIDAgMTIgMTInPjxjaXJjbGUgY3g9JzYnIGN5PSc2JyByPSc0LjUnLz48cGF0aCBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBkPSdNNS44IDMuNmguNEw2IDYuNXonLz48Y2lyY2xlIGN4PSc2JyBjeT0nOC4yJyByPScuNicgZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9JyBzdHJva2U9J25vbmUnLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG5cbiRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiAoKSAhZGVmYXVsdDtcbiRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcInZhbGlkXCI6IChcbiAgICAgIFwiY29sb3JcIjogJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IsXG4gICAgICBcImljb25cIjogJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZFxuICAgICksXG4gICAgXCJpbnZhbGlkXCI6IChcbiAgICAgIFwiY29sb3JcIjogJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcixcbiAgICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWRcbiAgICApLFxuICApLFxuICAkZm9ybS12YWxpZGF0aW9uLXN0YXRlc1xuKTtcblxuLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxuLy9cbi8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxuXG4kemluZGV4LWRyb3Bkb3duOiAgICAgICAgICAgICAgICAgICAxMDAwICFkZWZhdWx0O1xuJHppbmRleC1zdGlja3k6ICAgICAgICAgICAgICAgICAgICAgMTAyMCAhZGVmYXVsdDtcbiR6aW5kZXgtZml4ZWQ6ICAgICAgICAgICAgICAgICAgICAgIDEwMzAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsLWJhY2tkcm9wOiAgICAgICAgICAgICAxMDQwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbDogICAgICAgICAgICAgICAgICAgICAgMTA1MCAhZGVmYXVsdDtcbiR6aW5kZXgtcG9wb3ZlcjogICAgICAgICAgICAgICAgICAgIDEwNjAgIWRlZmF1bHQ7XG4kemluZGV4LXRvb2x0aXA6ICAgICAgICAgICAgICAgICAgICAxMDcwICFkZWZhdWx0O1xuXG5cbi8vIE5hdnNcblxuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG5hdi10YWJzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3I6ICAkZ3JheS0yMDAgJGdyYXktMjAwICRuYXYtdGFicy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRncmF5LTMwMCAkZ3JheS0zMDAgJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kbmF2LXBpbGxzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRuYXYtcGlsbHMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdi1waWxscy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRuYXYtZGl2aWRlci1jb2xvcjogICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRuYXYtZGl2aWRlci1tYXJnaW4teTogICAgICAgICAgICAgICRzcGFjZXIgLyAyICFkZWZhdWx0O1xuXG5cbi8vIE5hdmJhclxuXG4kbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcbiRuYXZiYXItcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG5cbiRuYXZiYXItbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kbmF2YmFyLWJyYW5kLWZvbnQtc2l6ZTogICAgICAgICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xuLy8gQ29tcHV0ZSB0aGUgbmF2YmFyLWJyYW5kIHBhZGRpbmcteSBzbyB0aGUgbmF2YmFyLWJyYW5kIHdpbGwgaGF2ZSB0aGUgc2FtZSBoZWlnaHQgYXMgbmF2YmFyLXRleHQgYW5kIG5hdi1saW5rXG4kbmF2LWxpbmstaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAkbGluZS1oZWlnaHQtYmFzZSArICRuYXYtbGluay1wYWRkaW5nLXkgKiAyICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1oZWlnaHQ6ICAgICAgICAgICAgICAgJG5hdmJhci1icmFuZC1mb250LXNpemUgKiAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcbiRuYXZiYXItYnJhbmQtcGFkZGluZy15OiAgICAgICAgICAgICgkbmF2LWxpbmstaGVpZ2h0IC0gJG5hdmJhci1icmFuZC1oZWlnaHQpIC8gMiAhZGVmYXVsdDtcblxuJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteTogICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteDogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLWZvbnQtc2l6ZTogICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRuYXZiYXItdG9nZ2xlci1ib3JkZXItcmFkaXVzOiAgICAgICRidG4tYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuJG5hdmJhci1kYXJrLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkd2hpdGUsIC41KSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1ob3Zlci1jb2xvcjogICAgICAgICAgIHJnYmEoJHdoaXRlLCAuNzUpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvcjogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWRpc2FibGVkLWNvbG9yOiAgICAgICAgcmdiYSgkd2hpdGUsIC4yNSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstdG9nZ2xlci1pY29uLWJnOiAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMCcgaGVpZ2h0PSczMCcgdmlld0JveD0nMCAwIDMwIDMwJz48cGF0aCBzdHJva2U9JyN7JG5hdmJhci1kYXJrLWNvbG9yfScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstdG9nZ2xlci1ib3JkZXItY29sb3I6ICByZ2JhKCR3aGl0ZSwgLjEpICFkZWZhdWx0O1xuXG4kbmF2YmFyLWxpZ2h0LWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjUpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1ob3Zlci1jb2xvcjogICAgICAgICAgcmdiYSgkYmxhY2ssIC43KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yOiAgICAgICAgIHJnYmEoJGJsYWNrLCAuOSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWRpc2FibGVkLWNvbG9yOiAgICAgICByZ2JhKCRibGFjaywgLjMpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC10b2dnbGVyLWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMzAnIGhlaWdodD0nMzAnIHZpZXdCb3g9JzAgMCAzMCAzMCc+PHBhdGggc3Ryb2tlPScjeyRuYXZiYXItbGlnaHQtY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtdG9nZ2xlci1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG5cbiRuYXZiYXItbGlnaHQtYnJhbmQtY29sb3I6ICAgICAgICAgICAgICAgICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1icmFuZC1ob3Zlci1jb2xvcjogICAgICAgICAgJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYnJhbmQtY29sb3I6ICAgICAgICAgICAgICAgICAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcblxuXG4vLyBEcm9wZG93bnNcbi8vXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXG5cbiRkcm9wZG93bi1taW4td2lkdGg6ICAgICAgICAgICAgICAgIDEwcmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLXBhZGRpbmcteDogICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLXNwYWNlcjogICAgICAgICAgICAgICAgICAgLjEyNXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1jb2xvcjogICAgICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJnOiAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xNSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kZHJvcGRvd24taW5uZXItYm9yZGVyLXJhZGl1czogICAgICBzdWJ0cmFjdCgkZHJvcGRvd24tYm9yZGVyLXJhZGl1cywgJGRyb3Bkb3duLWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGl2aWRlci1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGl2aWRlci1tYXJnaW4teTogICAgICAgICAkbmF2LWRpdmlkZXItbWFyZ2luLXkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm94LXNoYWRvdzogICAgICAgICAgICAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC4xNzUpICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogICAgICAgICBkYXJrZW4oJGdyYXktOTAwLCA1JSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogICAgICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xuXG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24taGVhZGVyLXBhZGRpbmc6ICAgICAgICAgICAkZHJvcGRvd24tcGFkZGluZy15ICRkcm9wZG93bi1pdGVtLXBhZGRpbmcteCAhZGVmYXVsdDtcblxuXG4vLyBQYWdpbmF0aW9uXG5cbiRwYWdpbmF0aW9uLXBhZGRpbmcteTogICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14OiAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy15LXNtOiAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14LXNtOiAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktbGc6ICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1saW5lLWhlaWdodDogICAgICAgICAgICAxLjI1ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICAkbGluay1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJnOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci13aWR0aDogICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWZvY3VzLW91dGxpbmU6ICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICRsaW5rLWhvdmVyLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlci1jb2xvcjogICAgJHBhZ2luYXRpb24tYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cblxuLy8gSnVtYm90cm9uXG5cbiRqdW1ib3Ryb24tcGFkZGluZzogICAgICAgICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG4kanVtYm90cm9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGp1bWJvdHJvbi1iZzogICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG5cbi8vIENhcmRzXG5cbiRjYXJkLXNwYWNlci15OiAgICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRjYXJkLXNwYWNlci14OiAgICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XG4kY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgICAgICBzdWJ0cmFjdCgkY2FyZC1ib3JkZXItcmFkaXVzLCAkY2FyZC1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJGNhcmQtY2FwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wMykgIWRlZmF1bHQ7XG4kY2FyZC1jYXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGNhcmQtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRjYXJkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kY2FyZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG5cbiRjYXJkLWltZy1vdmVybGF5LXBhZGRpbmc6ICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG5cbiRjYXJkLWdyb3VwLW1hcmdpbjogICAgICAgICAgICAgICAgICRncmlkLWd1dHRlci13aWR0aCAvIDIgIWRlZmF1bHQ7XG4kY2FyZC1kZWNrLW1hcmdpbjogICAgICAgICAgICAgICAgICAkY2FyZC1ncm91cC1tYXJnaW4gIWRlZmF1bHQ7XG5cbiRjYXJkLWNvbHVtbnMtY291bnQ6ICAgICAgICAgICAgICAgIDMgIWRlZmF1bHQ7XG4kY2FyZC1jb2x1bW5zLWdhcDogICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGNhcmQtY29sdW1ucy1tYXJnaW46ICAgICAgICAgICAgICAgJGNhcmQtc3BhY2VyLXkgIWRlZmF1bHQ7XG5cblxuLy8gVG9vbHRpcHNcblxuJHRvb2x0aXAtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiR0b29sdGlwLW1heC13aWR0aDogICAgICAgICAgICAgICAgIDIwMHB4ICFkZWZhdWx0O1xuJHRvb2x0aXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHRvb2x0aXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kdG9vbHRpcC1vcGFjaXR5OiAgICAgICAgICAgICAgICAgICAuOSAhZGVmYXVsdDtcbiR0b29sdGlwLXBhZGRpbmcteTogICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLXBhZGRpbmcteDogICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcblxuJHRvb2x0aXAtYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgLjhyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNHJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICR0b29sdGlwLWJnICFkZWZhdWx0O1xuXG4vLyBGb3JtIHRvb2x0aXBzIG11c3QgY29tZSBhZnRlciByZWd1bGFyIHRvb2x0aXBzXG4kZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteTogICAgICR0b29sdGlwLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtcGFkZGluZy14OiAgICAgJHRvb2x0aXAtcGFkZGluZy14ICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1mb250LXNpemU6ICAgICAkdG9vbHRpcC1mb250LXNpemUgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLWxpbmUtaGVpZ2h0OiAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1vcGFjaXR5OiAgICAgICAkdG9vbHRpcC1vcGFjaXR5ICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAkdG9vbHRpcC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG5cbi8vIFBvcG92ZXJzXG5cbiRwb3BvdmVyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG4kcG9wb3Zlci1iZzogICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcG9wb3Zlci1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAyNzZweCAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjIpICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kcG9wb3Zlci1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgICBzdWJ0cmFjdCgkcG9wb3Zlci1ib3JkZXItcmFkaXVzLCAkcG9wb3Zlci1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJHBvcG92ZXItYm94LXNoYWRvdzogICAgICAgICAgICAgICAgMCAuMjVyZW0gLjVyZW0gcmdiYSgkYmxhY2ssIC4yKSAhZGVmYXVsdDtcblxuJHBvcG92ZXItaGVhZGVyLWJnOiAgICAgICAgICAgICAgICAgZGFya2VuKCRwb3BvdmVyLWJnLCAzJSkgIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg6ICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcblxuJHBvcG92ZXItYm9keS1jb2xvcjogICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib2R5LXBhZGRpbmcteTogICAgICAgICAgICAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy15ICFkZWZhdWx0O1xuJHBvcG92ZXItYm9keS1wYWRkaW5nLXg6ICAgICAgICAgICAgJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteCAhZGVmYXVsdDtcblxuJHBvcG92ZXItYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWFycm93LWhlaWdodDogICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBvcG92ZXItYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHBvcG92ZXItYmcgIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWFycm93LW91dGVyLWNvbG9yOiAgICAgICAgIGZhZGUtaW4oJHBvcG92ZXItYm9yZGVyLWNvbG9yLCAuMDUpICFkZWZhdWx0O1xuXG5cbi8vIFRvYXN0c1xuXG4kdG9hc3QtbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgICAzNTBweCAhZGVmYXVsdDtcbiR0b2FzdC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgIC44NzVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJHRvYXN0LWJhY2tncm91bmQtY29sb3I6ICAgICAgICAgICAgcmdiYSgkd2hpdGUsIC44NSkgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAxcHggIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIC4xKSAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgIDAgLjI1cmVtIC43NXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuXG4kdG9hc3QtaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kdG9hc3QtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICAgICByZ2JhKCR3aGl0ZSwgLjg1KSAhZGVmYXVsdDtcbiR0b2FzdC1oZWFkZXItYm9yZGVyLWNvbG9yOiAgICAgICAgIHJnYmEoMCwgMCwgMCwgLjA1KSAhZGVmYXVsdDtcblxuXG4vLyBCYWRnZXNcblxuJGJhZGdlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgNzUlICFkZWZhdWx0O1xuJGJhZGdlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuMjVlbSAhZGVmYXVsdDtcbiRiYWRnZS1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIC40ZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuJGJhZGdlLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgJGJ0bi10cmFuc2l0aW9uICFkZWZhdWx0O1xuJGJhZGdlLWZvY3VzLXdpZHRoOiAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAhZGVmYXVsdDtcblxuJGJhZGdlLXBpbGwtcGFkZGluZy14OiAgICAgICAgICAgICAgLjZlbSAhZGVmYXVsdDtcbi8vIFVzZSBhIGhpZ2hlciB0aGFuIG5vcm1hbCB2YWx1ZSB0byBlbnN1cmUgY29tcGxldGVseSByb3VuZGVkIGVkZ2VzIHdoZW5cbi8vIGN1c3RvbWl6aW5nIHBhZGRpbmcgb3IgZm9udC1zaXplIG9uIGxhYmVscy5cbiRiYWRnZS1waWxsLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDEwcmVtICFkZWZhdWx0O1xuXG5cbi8vIE1vZGFsc1xuXG4vLyBQYWRkaW5nIGFwcGxpZWQgdG8gdGhlIG1vZGFsIGJvZHlcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbi8vIE1hcmdpbiBiZXR3ZWVuIGVsZW1lbnRzIGluIGZvb3RlciwgbXVzdCBiZSBsb3dlciB0aGFuIG9yIGVxdWFsIHRvIDIgKiAkbW9kYWwtaW5uZXItcGFkZGluZ1xuJG1vZGFsLWZvb3Rlci1tYXJnaW4tYmV0d2VlbjogICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRtb2RhbC1kaWFsb2ctbWFyZ2luOiAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJG1vZGFsLWRpYWxvZy1tYXJnaW4teS1zbS11cDogICAgICAgMS43NXJlbSAhZGVmYXVsdDtcblxuJG1vZGFsLXRpdGxlLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG5cbiRtb2RhbC1jb250ZW50LWNvbG9yOiAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1iZzogICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6ICAgICAgICByZ2JhKCRibGFjaywgLjIpICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoOiAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci1yYWRpdXM6ICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtaW5uZXItYm9yZGVyLXJhZGl1czogc3VidHJhY3QoJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1cywgJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoKSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHM6ICAgICAgIDAgLjI1cmVtIC41cmVtIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXNtLXVwOiAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC41KSAhZGVmYXVsdDtcblxuJG1vZGFsLWJhY2tkcm9wLWJnOiAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJG1vZGFsLWJhY2tkcm9wLW9wYWNpdHk6ICAgICAgICAgICAgLjUgIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3I6ICAgICAgICAgJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aDogICAgICAgICAkbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtZm9vdGVyLWJvcmRlci13aWR0aDogICAgICAgICAkbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZy15OiAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteDogICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nOiAgICAgICAgICAgICAgJG1vZGFsLWhlYWRlci1wYWRkaW5nLXkgJG1vZGFsLWhlYWRlci1wYWRkaW5nLXggIWRlZmF1bHQ7IC8vIEtlZXAgdGhpcyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblxuJG1vZGFsLXhsOiAgICAgICAgICAgICAgICAgICAgICAgICAgMTE0MHB4ICFkZWZhdWx0O1xuJG1vZGFsLWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgODAwcHggIWRlZmF1bHQ7XG4kbW9kYWwtbWQ6ICAgICAgICAgICAgICAgICAgICAgICAgICA1MDBweCAhZGVmYXVsdDtcbiRtb2RhbC1zbTogICAgICAgICAgICAgICAgICAgICAgICAgIDMwMHB4ICFkZWZhdWx0O1xuXG4kbW9kYWwtZmFkZS10cmFuc2Zvcm06ICAgICAgICAgICAgICB0cmFuc2xhdGUoMCwgLTUwcHgpICFkZWZhdWx0O1xuJG1vZGFsLXNob3ctdHJhbnNmb3JtOiAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcbiRtb2RhbC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAuM3MgZWFzZS1vdXQgIWRlZmF1bHQ7XG4kbW9kYWwtc2NhbGUtdHJhbnNmb3JtOiAgICAgICAgICAgICBzY2FsZSgxLjAyKSAhZGVmYXVsdDtcblxuXG4vLyBBbGVydHNcbi8vXG4vLyBEZWZpbmUgYWxlcnQgY29sb3JzLCBib3JkZXIgcmFkaXVzLCBhbmQgcGFkZGluZy5cblxuJGFsZXJ0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGFsZXJ0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRhbGVydC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJGFsZXJ0LWJnLWxldmVsOiAgICAgICAgICAgICAgICAgICAgLTEwICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1sZXZlbDogICAgICAgICAgICAgICAgLTkgIWRlZmF1bHQ7XG4kYWxlcnQtY29sb3ItbGV2ZWw6ICAgICAgICAgICAgICAgICA2ICFkZWZhdWx0O1xuXG5cbi8vIFByb2dyZXNzIGJhcnNcblxuJHByb2dyZXNzLWhlaWdodDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIC43NSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iZzogICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHByb2dyZXNzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgaW5zZXQgMCAuMXJlbSAuMXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci1jb2xvcjogICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci1iZzogICAgICAgICAgICAgICAgICAgdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci1hbmltYXRpb24tdGltaW5nOiAgICAgMXMgbGluZWFyIGluZmluaXRlICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci10cmFuc2l0aW9uOiAgICAgICAgICAgd2lkdGggLjZzIGVhc2UgIWRlZmF1bHQ7XG5cblxuLy8gTGlzdCBncm91cFxuXG4kbGlzdC1ncm91cC1jb2xvcjogICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYmc6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteTogICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteDogICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWJvcmRlci1jb2xvcjogICAgJGxpc3QtZ3JvdXAtYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1kaXNhYmxlZC1iZzogICAgICAgICAgICAkbGlzdC1ncm91cC1iZyAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yOiAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWNvbG9yOiAgICAgJGxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWNvbG9yOiAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtYmc6ICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuXG4vLyBJbWFnZSB0aHVtYm5haWxzXG5cbiR0aHVtYm5haWwtcGFkZGluZzogICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYmc6ICAgICAgICAgICAgICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcblxuXG4vLyBGaWd1cmVzXG5cbiRmaWd1cmUtY2FwdGlvbi1mb250LXNpemU6ICAgICAgICAgIDkwJSAhZGVmYXVsdDtcbiRmaWd1cmUtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuXG4vLyBCcmVhZGNydW1ic1xuXG4kYnJlYWRjcnVtYi1mb250LXNpemU6ICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItaXRlbS1wYWRkaW5nOiAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRicmVhZGNydW1iLW1hcmdpbi1ib3R0b206ICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbiRicmVhZGNydW1iLWJnOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXItY29sb3I6ICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXI6ICAgICAgICAgICAgICAgIHF1b3RlKFwiL1wiKSAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cblxuLy8gQ2Fyb3VzZWxcblxuJGNhcm91c2VsLWNvbnRyb2wtY29sb3I6ICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLXdpZHRoOiAgICAgICAgICAgICAxNSUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1vcGFjaXR5OiAgICAgICAgICAgLjUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1ob3Zlci1vcGFjaXR5OiAgICAgLjkgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC10cmFuc2l0aW9uOiAgICAgICAgb3BhY2l0eSAuMTVzIGVhc2UgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1pbmRpY2F0b3Itd2lkdGg6ICAgICAgICAgICAzMHB4ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1oZWlnaHQ6ICAgICAgICAgIDNweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItaGl0LWFyZWEtaGVpZ2h0OiAxMHB4ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1zcGFjZXI6ICAgICAgICAgIDNweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLXRyYW5zaXRpb246ICAgICAgb3BhY2l0eSAuNnMgZWFzZSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNhcHRpb24td2lkdGg6ICAgICAgICAgICAgIDcwJSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jYXB0aW9uLWNvbG9yOiAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jb250cm9sLWljb24td2lkdGg6ICAgICAgICAyMHB4ICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfScgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZD0nTTUuMjUgMGwtNCA0IDQgNCAxLjUtMS41TDQuMjUgNGwyLjUtMi41TDUuMjUgMHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfScgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZD0nTTIuNzUgMGwtMS41IDEuNUwzLjc1IDRsLTIuNSAyLjVMMi43NSA4bDQtNC00LTR6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtdHJhbnNpdGlvbi1kdXJhdGlvbjogICAgICAgLjZzICFkZWZhdWx0O1xuJGNhcm91c2VsLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAkY2Fyb3VzZWwtdHJhbnNpdGlvbi1kdXJhdGlvbiBlYXNlLWluLW91dCAhZGVmYXVsdDsgLy8gRGVmaW5lIHRyYW5zZm9ybSB0cmFuc2l0aW9uIGZpcnN0IGlmIHVzaW5nIG11bHRpcGxlIHRyYW5zaXRpb25zIChlLmcuLCBgdHJhbnNmb3JtIDJzIGVhc2UsIG9wYWNpdHkgLjVzIGVhc2Utb3V0YClcblxuXG4vLyBTcGlubmVyc1xuXG4kc3Bpbm5lci13aWR0aDogICAgICAgICAycmVtICFkZWZhdWx0O1xuJHNwaW5uZXItaGVpZ2h0OiAgICAgICAgJHNwaW5uZXItd2lkdGggIWRlZmF1bHQ7XG4kc3Bpbm5lci1ib3JkZXItd2lkdGg6ICAuMjVlbSAhZGVmYXVsdDtcblxuJHNwaW5uZXItd2lkdGgtc206ICAgICAgICAxcmVtICFkZWZhdWx0O1xuJHNwaW5uZXItaGVpZ2h0LXNtOiAgICAgICAkc3Bpbm5lci13aWR0aC1zbSAhZGVmYXVsdDtcbiRzcGlubmVyLWJvcmRlci13aWR0aC1zbTogLjJlbSAhZGVmYXVsdDtcblxuXG4vLyBDbG9zZVxuXG4kY2xvc2UtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7XG4kY2xvc2UtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcbiRjbG9zZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRjbG9zZS10ZXh0LXNoYWRvdzogICAgICAgICAgICAgICAgIDAgMXB4IDAgJHdoaXRlICFkZWZhdWx0O1xuXG5cbi8vIENvZGVcblxuJGNvZGUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgODcuNSUgIWRlZmF1bHQ7XG4kY29kZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAkcGluayAhZGVmYXVsdDtcblxuJGtiZC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgLjJyZW0gIWRlZmF1bHQ7XG4ka2JkLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAuNHJlbSAhZGVmYXVsdDtcbiRrYmQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICRjb2RlLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRrYmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRrYmQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcblxuJHByZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuJHByZS1zY3JvbGxhYmxlLW1heC1oZWlnaHQ6ICAgICAgICAgMzQwcHggIWRlZmF1bHQ7XG5cblxuLy8gVXRpbGl0aWVzXG5cbiRkaXNwbGF5czogbm9uZSwgaW5saW5lLCBpbmxpbmUtYmxvY2ssIGJsb2NrLCB0YWJsZSwgdGFibGUtcm93LCB0YWJsZS1jZWxsLCBmbGV4LCBpbmxpbmUtZmxleCAhZGVmYXVsdDtcbiRvdmVyZmxvd3M6IGF1dG8sIGhpZGRlbiAhZGVmYXVsdDtcbiRwb3NpdGlvbnM6IHN0YXRpYywgcmVsYXRpdmUsIGFic29sdXRlLCBmaXhlZCwgc3RpY2t5ICFkZWZhdWx0O1xuJHVzZXItc2VsZWN0czogYWxsLCBhdXRvLCBub25lICFkZWZhdWx0O1xuXG5cbi8vIFByaW50aW5nXG5cbiRwcmludC1wYWdlLXNpemU6ICAgICAgICAgICAgICAgICAgIGEzICFkZWZhdWx0O1xuJHByaW50LWJvZHktbWluLXdpZHRoOiAgICAgICAgICAgICAgbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgXCJsZ1wiKSAhZGVmYXVsdDtcbiJdfQ== */";
      /***/
    },

    /***/
    "KTHn":
    /*!**********************************************************************!*\
      !*** ./src/modules/navigation/containers/footer/footer.component.ts ***!
      \**********************************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function KTHn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./footer.component.html */
      "TZXJ");
      /* harmony import */


      var _footer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./footer.component.scss */
      "TOpt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ctorParameters = function () {
        return [];
      };

      FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-footer',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FooterComponent);
      /***/
    },

    /***/
    "KnmP":
    /*!*********************************************************!*\
      !*** ./src/modules/icons/icons.font-awesome-regular.ts ***!
      \*********************************************************/

    /*! exports provided: fontAwesomeRegularIcons */

    /***/
    function KnmP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fontAwesomeRegularIcons", function () {
        return fontAwesomeRegularIcons;
      });
      /* harmony import */


      var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @fortawesome/free-regular-svg-icons */
      "twK/");
      /* All free solid fontawesome icons -> https://fontawesome.com/icons?d=gallery&s=regular&m=free */


      var fontAwesomeRegularIcons = {
        faBell: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faBell"]
      };
      /***/
    },

    /***/
    "LTXA":
    /*!****************************************************!*\
      !*** ./src/modules/app-common/containers/index.ts ***!
      \****************************************************/

    /*! exports provided: containers, VersionComponent */

    /***/
    function LTXA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "containers", function () {
        return containers;
      });
      /* harmony import */


      var _version_version_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./version/version.component */
      "iR7h");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "VersionComponent", function () {
        return _version_version_component__WEBPACK_IMPORTED_MODULE_0__["VersionComponent"];
      });

      var containers = [_version_version_component__WEBPACK_IMPORTED_MODULE_0__["VersionComponent"]];
      /***/
    },

    /***/
    "LonY":
    /*!***************************************************!*\
      !*** ./src/modules/auth/services/auth.service.ts ***!
      \***************************************************/

    /*! exports provided: AuthService */

    /***/
    function LonY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _common_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @common/services */
      "gNCb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _auth_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./auth-utils.service */
      "8iQY");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http, configService, authUtilsService, router) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.configService = configService;
          this.authUtilsService = authUtilsService;
          this.router = router;
        }

        _createClass(AuthService, [{
          key: "login$",
          value: function login$(loginPayload) {
            var _this = this;

            return this.http.post("".concat(this.configService.config.sbCleanBlogNodeURL, "/api/latest/auth/login"), loginPayload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (loginResults) {
              return _this.authUtilsService.processToken$(loginResults.token);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (user) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(_this.router.navigate(['/']));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
            }));
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _common_services__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
        }, {
          type: _auth_utils_service__WEBPACK_IMPORTED_MODULE_7__["AuthUtilsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _common_services__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], _auth_utils_service__WEBPACK_IMPORTED_MODULE_7__["AuthUtilsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], AuthService);
      /***/
    },

    /***/
    "NMtB":
    /*!*****************************************************!*\
      !*** ./src/modules/app-common/app-common.module.ts ***!
      \*****************************************************/

    /*! exports provided: AppCommonModule, configServiceFactory, authInterceptorFactory, demoInterceptorFactory */

    /***/
    function NMtB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppCommonModule", function () {
        return AppCommonModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "configServiceFactory", function () {
        return configServiceFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "authInterceptorFactory", function () {
        return authInterceptorFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "demoInterceptorFactory", function () {
        return demoInterceptorFactory;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _modules_auth_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @modules/auth/services */
      "+nzF");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _modules_icons_icons_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @modules/icons/icons.module */
      "NYJi");
      /* harmony import */


      var ngx_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-markdown */
      "lR5k");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./containers */
      "LTXA");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components */
      "G69V");
      /* harmony import */


      var _guards__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./guards */
      "5TF+");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./services */
      "gNCb");
      /* harmony import */


      var _interceptors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./interceptors */
      "NaSV");

      var AppCommonModule_1;
      /* tslint:disable: ordered-imports*/

      /* Third Party */

      var thirdParty = [_modules_icons_icons_module__WEBPACK_IMPORTED_MODULE_7__["IconsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]];
      /* Containers */

      /* Components */

      /* Guards */

      /* Services */

      /* Interceptors */

      var AppCommonModule = AppCommonModule_1 = /*#__PURE__*/function () {
        function AppCommonModule() {
          _classCallCheck(this, AppCommonModule);
        }

        _createClass(AppCommonModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: AppCommonModule_1,
              providers: [].concat(_toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_12__["services"]), _toConsumableArray(_modules_auth_services__WEBPACK_IMPORTED_MODULE_5__["services"]), _toConsumableArray(_guards__WEBPACK_IMPORTED_MODULE_11__["guards"]), [{
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                useFactory: configServiceFactory,
                multi: true,
                deps: [_services__WEBPACK_IMPORTED_MODULE_12__["ConfigService"], _services__WEBPACK_IMPORTED_MODULE_12__["PrismService"]]
              }, {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                useFactory: authInterceptorFactory,
                multi: true,
                deps: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _modules_auth_services__WEBPACK_IMPORTED_MODULE_5__["AuthUtilsService"]]
              }, {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                useFactory: demoInterceptorFactory,
                multi: true,
                deps: [_services__WEBPACK_IMPORTED_MODULE_12__["UtilityService"], _services__WEBPACK_IMPORTED_MODULE_12__["ConfigService"]]
              }])
            };
          }
        }]);

        return AppCommonModule;
      }();

      AppCommonModule = AppCommonModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]].concat(thirdParty, [ngx_markdown__WEBPACK_IMPORTED_MODULE_8__["MarkdownModule"].forRoot({
          sanitize: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].NONE
        })]),
        declarations: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_9__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_10__["components"])),
        exports: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_9__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_10__["components"]), thirdParty)
      })], AppCommonModule);

      function configServiceFactory(configService) {
        return function () {
          return configService.loadConfig();
        };
      }

      function authInterceptorFactory(router, authUtilsService) {
        return new _interceptors__WEBPACK_IMPORTED_MODULE_13__["interceptors"].AuthInterceptor(router, authUtilsService);
      }

      function demoInterceptorFactory(utilityServuce, configServuce) {
        return new _interceptors__WEBPACK_IMPORTED_MODULE_13__["interceptors"].DemoInterceptor(utilityServuce, configServuce);
      }
      /***/

    },

    /***/
    "NYJi":
    /*!*******************************************!*\
      !*** ./src/modules/icons/icons.module.ts ***!
      \*******************************************/

    /*! exports provided: IconsModule */

    /***/
    function NYJi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconsModule", function () {
        return IconsModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _icons_font_awesome_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./icons.font-awesome-solid */
      "/lcZ");
      /* harmony import */


      var _icons_font_awesome_regular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./icons.font-awesome-regular */
      "KnmP");
      /* harmony import */


      var _icons_font_awesome_brands__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./icons.font-awesome-brands */
      "p1Hk");
      /* tslint:disable: ordered-imports*/


      var IconsModule = function IconsModule(library) {
        _classCallCheck(this, IconsModule);

        library.addIconPacks(_icons_font_awesome_solid__WEBPACK_IMPORTED_MODULE_3__["fontAwesomeSolidIcons"], _icons_font_awesome_regular__WEBPACK_IMPORTED_MODULE_4__["fontAwesomeRegularIcons"], _icons_font_awesome_brands__WEBPACK_IMPORTED_MODULE_5__["fontAwesomeBrandsIcons"]);
      };

      IconsModule.ctorParameters = function () {
        return [{
          type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconLibrary"]
        }];
      };

      IconsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconLibrary"]])], IconsModule);
      /***/
    },

    /***/
    "NaSV":
    /*!******************************************************!*\
      !*** ./src/modules/app-common/interceptors/index.ts ***!
      \******************************************************/

    /*! exports provided: interceptors, AuthInterceptor, DemoInterceptor */

    /***/
    function NaSV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "interceptors", function () {
        return interceptors;
      });
      /* harmony import */


      var _auth_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.interceptor */
      "Styw");
      /* harmony import */


      var _demo_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./demo.interceptor */
      "Hf4d");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return _auth_interceptor__WEBPACK_IMPORTED_MODULE_0__["AuthInterceptor"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DemoInterceptor", function () {
        return _demo_interceptor__WEBPACK_IMPORTED_MODULE_1__["DemoInterceptor"];
      });

      var interceptors = {
        AuthInterceptor: _auth_interceptor__WEBPACK_IMPORTED_MODULE_0__["AuthInterceptor"],
        DemoInterceptor: _demo_interceptor__WEBPACK_IMPORTED_MODULE_1__["DemoInterceptor"]
      };
      /***/
    },

    /***/
    "Nnxo":
    /*!**********************************************************************************************!*\
      !*** ./src/modules/app-common/components/card-view-details/card-view-details.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Nnxo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLXZpZXctZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "Qn4I":
    /*!********************************************************************************************!*\
      !*** ./src/modules/app-common/components/card-view-details/card-view-details.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: CardViewDetailsComponent */

    /***/
    function Qn4I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardViewDetailsComponent", function () {
        return CardViewDetailsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_view_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-view-details.component.html */
      "uFFS");
      /* harmony import */


      var _card_view_details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./card-view-details.component.scss */
      "Nnxo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CardViewDetailsComponent = /*#__PURE__*/function () {
        function CardViewDetailsComponent() {
          _classCallCheck(this, CardViewDetailsComponent);

          this.link = '';
          this.customClasses = [];
        }

        _createClass(CardViewDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.background) {
              this.customClasses.push(this.background);
            }

            if (this.color) {
              this.customClasses.push(this.color);
            }
          }
        }]);

        return CardViewDetailsComponent;
      }();

      CardViewDetailsComponent.ctorParameters = function () {
        return [];
      };

      CardViewDetailsComponent.propDecorators = {
        background: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        link: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      CardViewDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-card-view-details',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_card_view_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_card_view_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CardViewDetailsComponent);
      /***/
    },

    /***/
    "ReHY":
    /*!**************************************************!*\
      !*** ./src/modules/navigation/services/index.ts ***!
      \**************************************************/

    /*! exports provided: services, NavigationService */

    /***/
    function ReHY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "services", function () {
        return services;
      });
      /* harmony import */


      var _navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./navigation.service */
      "jvcL");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NavigationService", function () {
        return _navigation_service__WEBPACK_IMPORTED_MODULE_0__["NavigationService"];
      });

      var services = [_navigation_service__WEBPACK_IMPORTED_MODULE_0__["NavigationService"]];
      /***/
    },

    /***/
    "SIQ8":
    /*!**************************************************************************!*\
      !*** ./src/modules/app-common/containers/version/version.component.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function SIQ8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJzaW9uLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "Styw":
    /*!*****************************************************************!*\
      !*** ./src/modules/app-common/interceptors/auth.interceptor.ts ***!
      \*****************************************************************/

    /*! exports provided: AuthInterceptor */

    /***/
    function Styw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return AuthInterceptor;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _modules_auth_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @modules/auth/services */
      "+nzF");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var AuthInterceptor = /*#__PURE__*/function () {
        function AuthInterceptor(router, authUtilsService) {
          _classCallCheck(this, AuthInterceptor);

          this.router = router;
          this.authUtilsService = authUtilsService;
        }

        _createClass(AuthInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this2 = this;

            var bearerToken = this.authUtilsService.bearerToken();

            if (bearerToken && !_isWhiteListed(request.method, request.url)) {
              request = request.clone({
                setHeaders: {
                  'Content-Type': 'application/json',
                  Authorization: bearerToken
                }
              });
            }

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              if (error.status === 401) {
                _this2.router.navigate(['/error/401']);
              }

              if (error.status === 404) {
                _this2.router.navigate(['/error/404']);
              }

              if (error.status === 500) {
                _this2.router.navigate(['/error/500']);
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
            }));
          }
        }]);

        return AuthInterceptor;
      }();

      AuthInterceptor.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _modules_auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthUtilsService"]
        }];
      };

      AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _modules_auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthUtilsService"]])], AuthInterceptor);

      function _isWhiteListed(method, url) {
        var whiteList = {
          GET: ['assets/*', 'api/latest/posts/*'],
          POST: ['api/latest/auth/login']
        };
        var paths = whiteList[method];

        if (paths) {
          var _iterator = _createForOfIteratorHelper(paths),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var path = _step.value;

              if (url.match(path)) {
                return true;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        return false;
      }
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var AppComponent = function AppComponent(router, titleService) {
        var _this3 = this;

        _classCallCheck(this, AppComponent);

        this.router = router;
        this.titleService = titleService;
        this.title = 'sb-clean-blog-angular';
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["ChildActivationEnd"];
        })).subscribe(function (event) {
          var snapshot = event.snapshot;

          while (snapshot.firstChild !== null) {
            snapshot = snapshot.firstChild;
          }

          _this3.titleService.setTitle(snapshot.data.title || 'Angular Web Application');
        });
      };

      AppComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])], AppComponent);
      /***/
    },

    /***/
    "TOpt":
    /*!************************************************************************!*\
      !*** ./src/modules/navigation/containers/footer/footer.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function TOpt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "TZXJ":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/containers/footer/footer.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TZXJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<footer>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-8 col-md-10 mx-auto\">\n                <ul class=\"list-inline text-center\">\n\n                    <li class=\"list-inline-item\">\n                        <a href=\"https://www.linkedin.com/in/michaelho16/\" target=\"_blank\"\n                            ><fa-stack size=\"lg\"><fa-icon class=\"fa-stack-2x\" [icon]='[\"fas\", \"circle\"]' stackItemSize=\"2x\"></fa-icon><fa-icon class=\"fa-stack-1x fa-inverse\" [icon]='[\"fab\", \"linkedin\"]' stackItemSize=\"1x\"></fa-icon></fa-stack\n                        ></a>\n                    </li>\n                    <li class=\"list-inline-item\">\n                        <a href=\"https://github.com/spiism\" target=\"_blank\"\n                            ><fa-stack size=\"lg\"><fa-icon class=\"fa-stack-2x\" [icon]='[\"fas\", \"circle\"]' stackItemSize=\"2x\"></fa-icon><fa-icon class=\"fa-stack-1x fa-inverse\" [icon]='[\"fab\", \"github\"]' stackItemSize=\"1x\"></fa-icon></fa-stack\n                        ></a>\n                    </li>\n                </ul>\n                <p class=\"copyright text-muted\">Copyright © Michael Ho 2021</p>\n            </div>\n        </div>\n    </div>\n</footer>\n";
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    "X0uC":
    /*!*********************************************************************************!*\
      !*** ./src/modules/navigation/layouts/layout-error/layout-error.component.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function X0uC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQtZXJyb3IuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "XKEb":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/containers/top-nav/top-nav.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XKEb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-light fixed-top\" id=\"mainNav\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" routerLink=\"/\">Home</a><button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" (click)=\"isMenuCollapsed = !isMenuCollapsed\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><fa-icon class=\"ml-1\" [icon]='[\"fas\", \"bars\"]'></fa-icon></button>\n        <div class=\"collapse navbar-collapse\" [ngbCollapse]=\"isMenuCollapsed\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/about\">About</a></li>\n                <li class=\"nav-item\"><a class=\"nav-link icon\" href=\"https://spiism.github.io/CV/\" target=\"_blank\"><fa-icon [icon]='[\"fab\", \"canadian-maple-leaf\"]'></fa-icon></a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"isLoggedIn &amp;&amp; isOnPost\"><a class=\"nav-link pointer\" (click)=\"editPost()\">Edit Post</a></li>\n            </ul>\n            <form class=\"form-inline ml-lg-2\" *ngIf=\"isLoggedIn\"><a class=\"btn btn-primary\" routerLink=\"/new\">New Post</a></form>\n        </div>\n    </div>\n</nav>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _common_app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @common/app-common.module */
      "NMtB");
      /* harmony import */


      var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @modules/navigation/navigation.module */
      "hex+");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"].forRoot(), _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__["NavigationModule"].forRoot()],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "biH8":
    /*!*******************************************************************************!*\
      !*** ./src/modules/navigation/layouts/layout-error/layout-error.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: LayoutErrorComponent */

    /***/
    function biH8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutErrorComponent", function () {
        return LayoutErrorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_layout_error_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./layout-error.component.html */
      "HBbf");
      /* harmony import */


      var _layout_error_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layout-error.component.scss */
      "X0uC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LayoutErrorComponent = /*#__PURE__*/function () {
        function LayoutErrorComponent() {
          _classCallCheck(this, LayoutErrorComponent);
        }

        _createClass(LayoutErrorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LayoutErrorComponent;
      }();

      LayoutErrorComponent.ctorParameters = function () {
        return [];
      };

      LayoutErrorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-layout-error',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_layout_error_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_layout_error_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LayoutErrorComponent);
      /***/
    },

    /***/
    "coY2":
    /*!************************************************!*\
      !*** ./src/modules/navigation/guards/index.ts ***!
      \************************************************/

    /*! exports provided: guards, NavigationGuard */

    /***/
    function coY2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "guards", function () {
        return guards;
      });
      /* harmony import */


      var _navigation_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./navigation.guard */
      "68rg");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NavigationGuard", function () {
        return _navigation_guard__WEBPACK_IMPORTED_MODULE_0__["NavigationGuard"];
      });

      var guards = [_navigation_guard__WEBPACK_IMPORTED_MODULE_0__["NavigationGuard"]];
      /***/
    },

    /***/
    "dZFI":
    /*!********************************************************************!*\
      !*** ./src/modules/app-common/components/card/card.component.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function dZFI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "dw0y":
    /*!************************************************************!*\
      !*** ./src/modules/app-common/services/utility.service.ts ***!
      \************************************************************/

    /*! exports provided: UtilityService */

    /***/
    function dw0y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilityService", function () {
        return UtilityService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UtilityService = /*#__PURE__*/function () {
        function UtilityService(http) {
          _classCallCheck(this, UtilityService);

          this.http = http;
          this.parse = JSON.parse;
          this.stringify = JSON.stringify;
          this.localStorage = localStorage;
        }

        _createClass(UtilityService, [{
          key: "getStoredObject",
          value: function getStoredObject(objectName) {
            var objectString = this.localStorage.getItem(objectName);

            if (!objectString) {
              return undefined;
            }

            return this.parse(objectString);
          }
        }, {
          key: "storeObject",
          value: function storeObject(objectName, objectToStore) {
            this.localStorage.setItem(objectName, this.stringify(objectToStore));
          }
        }, {
          key: "version$",
          get: function get() {
            return this.http.get('/assets/version', {
              responseType: 'text'
            });
          }
        }]);

        return UtilityService;
      }();

      UtilityService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      UtilityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], UtilityService);
      /***/
    },

    /***/
    "eUsG":
    /*!****************************************************!*\
      !*** ./src/modules/navigation/containers/index.ts ***!
      \****************************************************/

    /*! exports provided: containers, TopNavComponent, FooterComponent */

    /***/
    function eUsG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "containers", function () {
        return containers;
      });
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./footer/footer.component */
      "KTHn");
      /* harmony import */


      var _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./top-nav/top-nav.component */
      "zZ3C");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TopNavComponent", function () {
        return _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_1__["TopNavComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterComponent"];
      });

      var containers = [_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_1__["TopNavComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterComponent"]];
      /***/
    },

    /***/
    "f8sU":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/layouts/layout-auth/layout-auth.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function f8sU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"layoutAuthentication\">\n    <div id=\"layoutAuthentication_content\">\n        <main><ng-content></ng-content></main>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "gNCb":
    /*!**************************************************!*\
      !*** ./src/modules/app-common/services/index.ts ***!
      \**************************************************/

    /*! exports provided: services, AppCommonService, ConfigService, PrismService, UtilityService */

    /***/
    function gNCb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "services", function () {
        return services;
      });
      /* harmony import */


      var _app_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-common.service */
      "u8hC");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./config.service */
      "k6eA");
      /* harmony import */


      var _prism_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./prism.service */
      "sevx");
      /* harmony import */


      var _utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./utility.service */
      "dw0y");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AppCommonService", function () {
        return _app_common_service__WEBPACK_IMPORTED_MODULE_0__["AppCommonService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
        return _config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PrismService", function () {
        return _prism_service__WEBPACK_IMPORTED_MODULE_2__["PrismService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UtilityService", function () {
        return _utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"];
      });

      var services = [_app_common_service__WEBPACK_IMPORTED_MODULE_0__["AppCommonService"], _config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _prism_service__WEBPACK_IMPORTED_MODULE_2__["PrismService"], _utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]];
      /***/
    },

    /***/
    "hex+":
    /*!*****************************************************!*\
      !*** ./src/modules/navigation/navigation.module.ts ***!
      \*****************************************************/

    /*! exports provided: NavigationModule */

    /***/
    function hex(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationModule", function () {
        return NavigationModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _common_app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @common/app-common.module */
      "NMtB");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components */
      "ndoz");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./containers */
      "eUsG");
      /* harmony import */


      var _layouts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./layouts */
      "6yf/");
      /* harmony import */


      var _guards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./guards */
      "coY2");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./services */
      "ReHY");

      var NavigationModule_1;
      /* tslint:disable: ordered-imports*/

      /* Modules */

      /* Components */

      /* Containers */

      /* Layouts */

      /* Guards */

      /* Services */

      var NavigationModule = NavigationModule_1 = /*#__PURE__*/function () {
        function NavigationModule(navServices) {
          _classCallCheck(this, NavigationModule);

          this.navServices = navServices;
        }

        _createClass(NavigationModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: NavigationModule_1,
              providers: [].concat(_toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_9__["services"]), _toConsumableArray(_guards__WEBPACK_IMPORTED_MODULE_8__["guards"]))
            };
          }
        }]);

        return NavigationModule;
      }();

      NavigationModule.ctorParameters = function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_9__["NavigationService"]
        }];
      };

      NavigationModule = NavigationModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"]],
        declarations: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_6__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_5__["components"]), _toConsumableArray(_layouts__WEBPACK_IMPORTED_MODULE_7__["layouts"])),
        exports: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_6__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_5__["components"]), _toConsumableArray(_layouts__WEBPACK_IMPORTED_MODULE_7__["layouts"]))
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_9__["NavigationService"]])], NavigationModule);
      /***/
    },

    /***/
    "iOCu":
    /*!*****************************************************************************!*\
      !*** ./src/modules/navigation/layouts/layout-blog/layout-blog.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: LayoutBlogComponent */

    /***/
    function iOCu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutBlogComponent", function () {
        return LayoutBlogComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_layout_blog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./layout-blog.component.html */
      "2hFx");
      /* harmony import */


      var _layout_blog_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layout-blog.component.scss */
      "jwtK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LayoutBlogComponent = /*#__PURE__*/function () {
        function LayoutBlogComponent() {
          _classCallCheck(this, LayoutBlogComponent);
        }

        _createClass(LayoutBlogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LayoutBlogComponent;
      }();

      LayoutBlogComponent.ctorParameters = function () {
        return [];
      };

      LayoutBlogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-layout-blog',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_layout_blog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_layout_blog_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LayoutBlogComponent);
      /***/
    },

    /***/
    "iR7h":
    /*!************************************************************************!*\
      !*** ./src/modules/app-common/containers/version/version.component.ts ***!
      \************************************************************************/

    /*! exports provided: VersionComponent */

    /***/
    function iR7h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VersionComponent", function () {
        return VersionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_version_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./version.component.html */
      "C5PV");
      /* harmony import */


      var _version_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./version.component.scss */
      "SIQ8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _modules_app_common_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @modules/app-common/services */
      "gNCb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var VersionComponent = /*#__PURE__*/function () {
        function VersionComponent(utilityService) {
          _classCallCheck(this, VersionComponent);

          this.utilityService = utilityService;
        }

        _createClass(VersionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.utilityService.version$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (v) {
              return _this4.version = v;
            });
          }
        }]);

        return VersionComponent;
      }();

      VersionComponent.ctorParameters = function () {
        return [{
          type: _modules_app_common_services__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]
        }];
      };

      VersionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-version',
        template: _raw_loader_version_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_version_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_app_common_services__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]])], VersionComponent);
      /***/
    },

    /***/
    "jvcL":
    /*!***************************************************************!*\
      !*** ./src/modules/navigation/services/navigation.service.ts ***!
      \***************************************************************/

    /*! exports provided: NavigationService */

    /***/
    function jvcL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationService", function () {
        return NavigationService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var NavigationService = /*#__PURE__*/function () {
        function NavigationService(route, router) {
          var _this5 = this;

          _classCallCheck(this, NavigationService);

          this.route = route;
          this.router = router;
          this._routeData$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
          this._currentURL$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
          this._currentComponent$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildActivationEnd"];
          })).subscribe(function (event) {
            var snapshot = event.snapshot;

            while (snapshot.firstChild !== null) {
              snapshot = snapshot.firstChild;
            }

            _this5._routeData$.next(snapshot.data);

            _this5._currentURL$.next(router.url);

            _this5._currentComponent$.next(snapshot.component.id);
          });
        }

        _createClass(NavigationService, [{
          key: "routeData$",
          value: function routeData$() {
            return this._routeData$;
          }
        }, {
          key: "currentURL$",
          value: function currentURL$() {
            return this._currentURL$;
          }
        }, {
          key: "currentComponent$",
          value: function currentComponent$() {
            return this._currentComponent$;
          }
        }]);

        return NavigationService;
      }();

      NavigationService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      NavigationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], NavigationService);
      /***/
    },

    /***/
    "jwtK":
    /*!*******************************************************************************!*\
      !*** ./src/modules/navigation/layouts/layout-blog/layout-blog.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function jwtK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQtYmxvZy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "jyPu":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/card/card.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jyPu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card mb-4\" [ngClass]=\"customClasses\"><ng-content select=\".card-header\"></ng-content><ng-content select=\".card-body\"></ng-content><ng-content select=\".card-footer\"></ng-content></div>\n";
      /***/
    },

    /***/
    "k6eA":
    /*!***********************************************************!*\
      !*** ./src/modules/app-common/services/config.service.ts ***!
      \***********************************************************/

    /*! exports provided: ConfigService */

    /***/
    function k6eA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
        return ConfigService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var _config;

      var ConfigService = /*#__PURE__*/function () {
        function ConfigService(http) {
          _classCallCheck(this, ConfigService);

          this.http = http;
        }

        _createClass(ConfigService, [{
          key: "loadConfig",
          value: function loadConfig() {
            return this.http.get("assets/config.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (config) {
              _config = config;
            })).toPromise();
          }
        }, {
          key: "config",
          get: function get() {
            return _config;
          }
        }]);

        return ConfigService;
      }();

      ConfigService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      ConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], ConfigService);
      /***/
    },

    /***/
    "ndoz":
    /*!****************************************************!*\
      !*** ./src/modules/navigation/components/index.ts ***!
      \****************************************************/

    /*! exports provided: components */

    /***/
    function ndoz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "components", function () {
        return components;
      });

      var components = [];
      /***/
    },

    /***/
    "p1Hk":
    /*!********************************************************!*\
      !*** ./src/modules/icons/icons.font-awesome-brands.ts ***!
      \********************************************************/

    /*! exports provided: fontAwesomeBrandsIcons */

    /***/
    function p1Hk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fontAwesomeBrandsIcons", function () {
        return fontAwesomeBrandsIcons;
      });
      /* harmony import */


      var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @fortawesome/free-brands-svg-icons */
      "8tEE");
      /* All free solid fontawesome icons -> https://fontawesome.com/icons?d=gallery&s=brands&m=free */


      var fontAwesomeBrandsIcons = {
        faGithub: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faGithub"],
        faFacebook: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faFacebook"],
        faFacebookF: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faFacebookF"],
        faGoogle: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faGoogle"],
        faMarkdown: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faMarkdown"],
        faTwitter: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTwitter"],
        faLinkedin: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faLinkedin"],
        faCanadianMapleLeaf: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faCanadianMapleLeaf"]
      };
      /***/
    },

    /***/
    "sevx":
    /*!**********************************************************!*\
      !*** ./src/modules/app-common/services/prism.service.ts ***!
      \**********************************************************/

    /*! exports provided: PrismService */

    /***/
    function sevx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrismService", function () {
        return PrismService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! marked */
      "DlQD");
      /* harmony import */


      var marked__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var prismjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! prismjs */
      "wZee");
      /* harmony import */


      var prismjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var prismjs_components_prism_pug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! prismjs/components/prism-pug */
      "dVlL");
      /* harmony import */


      var prismjs_components_prism_pug__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_pug__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! prismjs/components/prism-scss */
      "hnpa");
      /* harmony import */


      var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! prismjs/components/prism-typescript */
      "XIHC");
      /* harmony import */


      var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_6__);

      var PrismService = function PrismService() {
        _classCallCheck(this, PrismService);

        this.Marked = marked__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.Prism = prismjs__WEBPACK_IMPORTED_MODULE_3___default.a;
      };

      PrismService.ctorParameters = function () {
        return [];
      };

      PrismService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PrismService);
      /***/
    },

    /***/
    "u8hC":
    /*!***************************************************************!*\
      !*** ./src/modules/app-common/services/app-common.service.ts ***!
      \***************************************************************/

    /*! exports provided: AppCommonService */

    /***/
    function u8hC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppCommonService", function () {
        return AppCommonService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var AppCommonService = /*#__PURE__*/function () {
        function AppCommonService() {
          _classCallCheck(this, AppCommonService);
        }

        _createClass(AppCommonService, [{
          key: "getAppCommon$",
          value: function getAppCommon$() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
          }
        }]);

        return AppCommonService;
      }();

      AppCommonService.ctorParameters = function () {
        return [];
      };

      AppCommonService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AppCommonService);
      /***/
    },

    /***/
    "uFFS":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/card-view-details/card-view-details.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uFFS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card text-white mb-4\" [ngClass]=\"background\">\n    <ng-content select=\".card-body\"></ng-content>\n    <div class=\"card-footer d-flex align-items-center justify-content-between\">\n        <a class=\"small text-white stretched-link\" [routerLink]=\"link\">View Details</a>\n        <div class=\"small text-white\"><fa-icon [icon]='[\"fas\", \"angle-right\"]'></fa-icon></div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: 'version',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-app-common-app-common-routing-module */
          "modules-app-common-app-common-routing-module").then(__webpack_require__.bind(null,
          /*! modules/app-common/app-common-routing.module */
          "XaoG")).then(function (m) {
            return m.AppCommonRoutingModule;
          });
        }
      }, {
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-blog-blog-routing-module */
          "modules-blog-blog-routing-module").then(__webpack_require__.bind(null,
          /*! modules/blog/blog-routing.module */
          "IFN9")).then(function (m) {
            return m.BlogRoutingModule;
          });
        }
      }, {
        path: 'auth',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-auth-auth-routing-module */
          "modules-auth-auth-routing-module").then(__webpack_require__.bind(null,
          /*! modules/auth/auth-routing.module */
          "DrEB")).then(function (m) {
            return m.AuthRoutingModule;
          });
        }
      }, {
        path: 'error',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-error-error-routing-module */
          "modules-error-error-routing-module").then(__webpack_require__.bind(null,
          /*! modules/error/error-routing.module */
          "1nNA")).then(function (m) {
            return m.ErrorRoutingModule;
          });
        }
      }, {
        path: '**',
        pathMatch: 'full',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-error-error-routing-module */
          "modules-error-error-routing-module").then(__webpack_require__.bind(null,
          /*! modules/error/error-routing.module */
          "1nNA")).then(function (m) {
            return m.ErrorRoutingModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "vaVa":
    /*!******************************************************************!*\
      !*** ./src/modules/app-common/components/card/card.component.ts ***!
      \******************************************************************/

    /*! exports provided: CardComponent */

    /***/
    function vaVa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
        return CardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card.component.html */
      "jyPu");
      /* harmony import */


      var _card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./card.component.scss */
      "dZFI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CardComponent = /*#__PURE__*/function () {
        function CardComponent() {
          _classCallCheck(this, CardComponent);

          this.customClasses = [];
        }

        _createClass(CardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.background) {
              this.customClasses.push(this.background);
            }

            if (this.color) {
              this.customClasses.push(this.color);
            }
          }
        }]);

        return CardComponent;
      }();

      CardComponent.ctorParameters = function () {
        return [];
      };

      CardComponent.propDecorators = {
        background: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      CardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-card',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CardComponent);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zZ3C":
    /*!************************************************************************!*\
      !*** ./src/modules/navigation/containers/top-nav/top-nav.component.ts ***!
      \************************************************************************/

    /*! exports provided: TopNavComponent */

    /***/
    function zZ3C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopNavComponent", function () {
        return TopNavComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_top_nav_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./top-nav.component.html */
      "XKEb");
      /* harmony import */


      var _top_nav_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./top-nav.component.scss */
      "/pXg");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _modules_auth_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @modules/auth/services */
      "+nzF");
      /* harmony import */


      var _modules_navigation_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @modules/navigation/services */
      "ReHY");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var TopNavComponent = /*#__PURE__*/function () {
        function TopNavComponent(navigationService, authUtilsService, route, router) {
          _classCallCheck(this, TopNavComponent);

          this.navigationService = navigationService;
          this.authUtilsService = authUtilsService;
          this.route = route;
          this.router = router;
          this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
          this.isLoggedIn = false;
          this.isOnPost = false;
          this.isMenuCollapsed = true;
        }

        _createClass(TopNavComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.subscription.add(this.navigationService.currentComponent$().subscribe(function (currentComponentName) {
              _this6.isOnPost = currentComponentName === 'PostComponent';
            }));
            this.subscription.add(this.authUtilsService.isLoggedIn$().subscribe(function (isLoggedIn) {
              _this6.isLoggedIn = isLoggedIn;
            }));
            this.authUtilsService.checkToken();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
          }
        }, {
          key: "editPost",
          value: function editPost() {
            this.router.navigateByUrl("/edit/".concat(this.route.snapshot.params.post));
          }
        }]);

        return TopNavComponent;
      }();

      TopNavComponent.ctorParameters = function () {
        return [{
          type: _modules_navigation_services__WEBPACK_IMPORTED_MODULE_6__["NavigationService"]
        }, {
          type: _modules_auth_services__WEBPACK_IMPORTED_MODULE_5__["AuthUtilsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      TopNavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-top-nav',
        template: _raw_loader_top_nav_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_top_nav_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_navigation_services__WEBPACK_IMPORTED_MODULE_6__["NavigationService"], _modules_auth_services__WEBPACK_IMPORTED_MODULE_5__["AuthUtilsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], TopNavComponent);
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map