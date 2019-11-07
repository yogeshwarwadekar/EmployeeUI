(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/Interceptor/headerinterceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/Interceptor/headerinterceptor.ts ***!
  \**************************************************/
/*! exports provided: HeaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderInterceptor", function() { return HeaderInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HeaderInterceptor = /** @class */ (function () {
    function HeaderInterceptor() {
    }
    HeaderInterceptor.prototype.intercept = function (req, next) {
        var dummyrequest = req.clone({
            setHeaders: {
                'AuthKey': '12345', 'DeviceID': '85645',
                'content-type': 'application/json'
            }
        });
        console.log("Cloned Request");
        console.log(dummyrequest);
        return next.handle(dummyrequest);
    };
    HeaderInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], HeaderInterceptor);
    return HeaderInterceptor;
}());



/***/ }),

/***/ "./src/app/Interceptor/responceinterceptor.ts":
/*!****************************************************!*\
  !*** ./src/app/Interceptor/responceinterceptor.ts ***!
  \****************************************************/
/*! exports provided: ResponseInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseInterceptor", function() { return ResponseInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ResponseInterceptor = /** @class */ (function () {
    function ResponseInterceptor() {
    }
    ResponseInterceptor.prototype.intercept = function (req, next) {
        console.log("Before sending data");
        console.log(req);
        return next.handle(req)
            .retry(3)
            .map(function (resp) {
            if (resp instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                console.log('Response is ::');
                console.log(resp.body);
            }
            return resp;
        }).catch(function (err) {
            console.log(err);
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                console.log(err.status);
                console.log(err.body);
            }
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(err);
        });
    };
    ResponseInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ResponseInterceptor);
    return ResponseInterceptor;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map