(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_components/app.component.css":
/*!***********************************************!*\
  !*** ./src/app/_components/app.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_components/app.component.html":
/*!************************************************!*\
  !*** ./src/app/_components/app.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\r\n<h3>{{subtitle}}</h3>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/_components/app.component.ts":
/*!**********************************************!*\
  !*** ./src/app/_components/app.component.ts ***!
  \**********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Get commit detail app';
        this.subtitle = "built with Angular 6 and it's fully adaptive";
    }
    AppComponent.prototype.ngOnInit = function () {
        sessionStorage.setItem('commits', null);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/_components/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/_components/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/_components/commit-detail/commit-detail.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/_components/commit-detail/commit-detail.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Back button*/\r\n.block_back-button {\r\n  margin-bottom: 30px;\r\n}\r\n.block__container_back-button {\r\n  margin: auto;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n.back-button {\r\n  width: 100%;\r\n  max-width: 300px;\r\n}\r\n/*Github commit detail response*/\r\n.github__item-title {\r\n  margin: 20px;\r\n}\r\n.github__item-text {\r\n  margin: 0 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/_components/commit-detail/commit-detail.component.html":
/*!************************************************************************!*\
  !*** ./src/app/_components/commit-detail/commit-detail.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block_back-button\">\r\n  <div class=\"block__container_back-button\">\r\n    <button class=\"back-button\"\r\n            routerLink=\"/commits\">\r\n      Go back\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"github\" *ngIf=\"commitDetail || errorMessage\">\r\n  <p class=\"github__title\">Commit details</p>\r\n  <div class=\"github__container\">\r\n    <div class=\"github__row github__row_succes\"\r\n        *ngIf=\"commitDetail\">\r\n      <div class=\"github__col github__col_succes\"\r\n           *ngFor=\"let detailName of commitDetailNames\">\r\n        <h3 class=\"github__item-title\">{{detailName}}</h3>\r\n        <p class=\"github__item-text\">{{parseObjects(detailName)}}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"github__row github__row_error\"\r\n        *ngIf=\"errorMessage\">\r\n      <div class=\"github__col github__col_error\">\r\n        <h2 class=\"github__error_title\">404</h2>\r\n        <h4 class=\"github__error_text\">{{errorMessage.title}}</h4>\r\n        <h4 class=\"github__error_text\">{{errorMessage.body}}</h4>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_components/commit-detail/commit-detail.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/_components/commit-detail/commit-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: CommitDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitDetailComponent", function() { return CommitDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_commits_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/commits.service */ "./src/app/_services/commits.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommitDetailComponent = /** @class */ (function () {
    function CommitDetailComponent(route, commitsService) {
        this.route = route;
        this.commitsService = commitsService;
        this.commitDetailNames = [];
    }
    CommitDetailComponent.prototype.ngOnInit = function () {
        this.commitsService.getUserLS();
        this.getCommitDetail();
    };
    CommitDetailComponent.prototype.getCommitDetail = function () {
        var _this = this;
        var urlHash = this.route.snapshot.paramMap.get('hash');
        this.commitsService.getCommitDetail(this.commitsService.commitHash || urlHash).subscribe(function (answer) {
            _this.commitDetail = answer.body;
            _this.outputCommitDetail(answer.body);
        }, function (error) {
            _this.errorMessage = {
                title: error.error.message,
                body: error.message
            };
        });
    };
    CommitDetailComponent.prototype.outputCommitDetail = function (body) {
        for (var item in body) {
            this.commitDetailNames.push(item);
        }
    };
    CommitDetailComponent.prototype.parseObjects = function (item) {
        var obj = this.commitDetail[item];
        return JSON.stringify(obj).replace(/},/g, "\n").replace(/{/g, "");
    };
    CommitDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-commit-detail',
            template: __webpack_require__(/*! ./commit-detail.component.html */ "./src/app/_components/commit-detail/commit-detail.component.html"),
            styles: [__webpack_require__(/*! ./commit-detail.component.css */ "./src/app/_components/commit-detail/commit-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_commits_service__WEBPACK_IMPORTED_MODULE_2__["CommitsService"]])
    ], CommitDetailComponent);
    return CommitDetailComponent;
}());



/***/ }),

/***/ "./src/app/_components/commits/commits.component.css":
/*!***********************************************************!*\
  !*** ./src/app/_components/commits/commits.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Commits input form block*/\r\n.user-form {\r\n  margin-bottom: 50px;\r\n}\r\n.user-form__container {\r\n  max-width: 300px;\r\n  margin: auto;\r\n}\r\n.user-form__row {\r\n  margin-bottom: 20px;\r\n}\r\n.user-form__col {\r\n  text-align: center;\r\n}\r\n.user-form__elem_title {\r\n  font-size: 1.5rem;\r\n  margin: 0 0 7px;\r\n}\r\n.text-link {\r\n  font-size: .8rem;\r\n  margin: 10px 0 0;\r\n  cursor: pointer;\r\n  display: inline;\r\n  border-bottom: 1px dotted #888;\r\n  transition: .5s color, .5s border-bottom-color;\r\n}\r\n.text-link:hover {\r\n  color: #444;\r\n  border-bottom-color: #444;\r\n}\r\n.user-form__elem_input {\r\n  width: 100%;\r\n  max-width: 300px;\r\n}\r\n.user-form__row_button {\r\n  margin-top: 30px;\r\n}\r\n.submit-button {\r\n  width: calc(100% - 4px);\r\n}\r\n@media (min-width: 1000px) {\r\n  .user-form {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .user-form__container {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    max-width: 100%;\r\n    -ms-flex-pack: space-evenly;\r\n        justify-content: space-evenly;\r\n  }\r\n\r\n  .user-form__elem_repo-input {\r\n    display: block;\r\n  }\r\n\r\n  .user-form__row_button {\r\n    margin-top: 37px;\r\n  }\r\n\r\n  .submit-button {\r\n    width: 300px;\r\n  }\r\n}\r\n/*Pagination block*/\r\n.pagination {\r\n  position: relative;\r\n  margin-bottom: 30px;\r\n}\r\n.pagination__title {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 0;\r\n  -webkit-transform: translate(-50%, -140%);\r\n      -ms-transform: translate(-50%, -140%);\r\n          transform: translate(-50%, -140%);\r\n  z-index: 10;\r\n  background-color: white;\r\n  padding: 0 20px;\r\n}\r\n.pagination__container {\r\n  max-width: 800px;\r\n  width: 100%;\r\n  margin: auto;\r\n  border-radius: 5px;\r\n  border: 2px solid #cccccc;\r\n  transition: .5s box-shadow;\r\n}\r\n.pagination__container:hover {\r\n  box-shadow: 0 0 10px 0px #cccccc;\r\n}\r\n.pagination__row {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: space-evenly;\r\n      justify-content: space-evenly;\r\n  padding: 0;\r\n}\r\n.pagination__button {\r\n  min-height: 30px;\r\n  width: 150px;\r\n  margin: 20px;\r\n}\r\n@media (max-width: 860px) {\r\n  .pagination__button {\r\n    width: 20%;\r\n    margin: 3%;\r\n    font-size: 1rem;\r\n    padding: inherit;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/_components/commits/commits.component.html":
/*!************************************************************!*\
  !*** ./src/app/_components/commits/commits.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-form\">\r\n  <div class=\"user-form__container\">\r\n    <div class=\"user-form__row user-form__row_name\">\r\n      <div class=\"user-form__col user-form__col_name-title\">\r\n        <p class=\"user-form__elem_title user-form__elem_user-name\">User name:</p>\r\n      </div>\r\n      <div class=\"user-form__col user-form__col_name-input\">\r\n        <input class=\"user-form__elem_input user-form__elem_user-name-input\"\r\n               #input1\r\n               [(ngModel)]=\"commitsService.userName\" \r\n               (ngModelChange)=\"commitsService.saveUserLS()\" \r\n               (keyup.enter)=\"input2.focus()\" \r\n               type=\"text\"\r\n               (focus)=\"$event.target.select()\">\r\n      </div>\r\n    </div>\r\n    <div class=\"user-form__row user-form__row_repo\">\r\n      <div class=\"user-form__col user-form__col_repo-title\">\r\n        <p class=\"user-form__elem_title user-form__elem_repo-title\">User repo:</p>\r\n      </div>\r\n      <div class=\"user-form__col user-form__col_repo-input\">\r\n        <input class=\"user-form__elem_input user-form__elem_repo-input\"\r\n               #input2 \r\n               [(ngModel)]=\"commitsService.userRepo\" \r\n               (ngModelChange)=\"commitsService.saveUserLS()\" \r\n               (keyup.enter)=\"getCommits()\" \r\n               type=\"text\"\r\n               (focus)=\"$event.target.select()\">\r\n        <p class=\"text-link\"\r\n           (click)=\"commitsService.resetUser()\">\r\n             fill in with defaults\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"user-form__row user-form__row_button\">\r\n      <div class=\"user-form__col user-form__col_button\">\r\n        <button class=\"submit-button\"\r\n                (click)=\"getCommits()\">\r\n                  Get commits\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"pagination\" *ngIf=\"links\">\r\n  <p class=\"pagination__title\">pagination</p>\r\n  <div class=\"pagination__container\">\r\n    <div class=\"pagination__row\">\r\n      <button class=\"pagination__button\"\r\n              *ngFor=\"let link of links\" \r\n              (click)=\"getCommits(link.link)\">\r\n                {{link.name}}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"github\" *ngIf=\"errorMessage || commits\">\r\n  <p class=\"github__title\">github response</p>\r\n  <div class=\"github__container\">\r\n    <div class=\"github__row github__row_succes\">\r\n      <div class=\"github__col github__col_succes\">\r\n        <a href=\"\" class=\"github__link\"\r\n          *ngFor=\"let commit of commits\"\r\n          (click)=\"commitsService.commitHash = commit.sha\"\r\n           routerLink=\"/commits/{{commit.sha}}\">\r\n          <div class=\"github__subcol github__subcol_succes_number\">\r\n            <p class=\"github__link_number\">{{(commits.indexOf(commit)+1)+10*(commitsService.page-1)}}. </p>\r\n          </div>\r\n          <div class=\"github__subcol github__subcol_succes_item\">\r\n            <p class=\"github__link_text\">{{commit.commit.message}}</p>\r\n          </div>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"github__row github__row_error\" *ngIf=\"errorMessage\">\r\n      <div class=\"github__col github__col_error\">\r\n        <h2 class=\"github__error_title\">{{errorMessage.title}}</h2>\r\n        <h4 class=\"github__error_text\">{{errorMessage.body}}</h4>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_components/commits/commits.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/_components/commits/commits.component.ts ***!
  \**********************************************************/
/*! exports provided: CommitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitsComponent", function() { return CommitsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_commits_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/commits.service */ "./src/app/_services/commits.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommitsComponent = /** @class */ (function () {
    function CommitsComponent(commitsService) {
        this.commitsService = commitsService;
    }
    CommitsComponent.prototype.ngOnInit = function () {
        this.commitsService.getUserLS();
        this.commits = JSON.parse(sessionStorage.getItem('commits'));
        this.links = this.commitsService.links;
    };
    CommitsComponent.prototype.getCommits = function (url) {
        var _this = this;
        // this.inputEl1.nativeElement.focus();
        this.commitsService.getCommits(url).subscribe(function (answer) {
            _this.commits = null;
            _this.errorMessage = null;
            var links = answer.headers.get('Link');
            _this.links = _this.commitsService.links = _this.commitsService.linkTransformer(links);
            _this.commits = answer.body;
            sessionStorage.setItem('commits', JSON.stringify(answer.body));
            _this.commitsService.page = answer.url.split('&page=')[1];
        }, function (error) {
            _this.commits = null;
            _this.links = null;
            _this.errorMessage = {
                title: error.status,
                body: error.message
            };
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('input1'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CommitsComponent.prototype, "inputEl1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('input2'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CommitsComponent.prototype, "inputEl2", void 0);
    CommitsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-commits',
            template: __webpack_require__(/*! ./commits.component.html */ "./src/app/_components/commits/commits.component.html"),
            styles: [__webpack_require__(/*! ./commits.component.css */ "./src/app/_components/commits/commits.component.css")]
        }),
        __metadata("design:paramtypes", [_services_commits_service__WEBPACK_IMPORTED_MODULE_1__["CommitsService"]])
    ], CommitsComponent);
    return CommitsComponent;
}());



/***/ }),

/***/ "./src/app/_routers/app-routing.module.ts":
/*!************************************************!*\
  !*** ./src/app/_routers/app-routing.module.ts ***!
  \************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_commits_commits_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_components/commits/commits.component */ "./src/app/_components/commits/commits.component.ts");
/* harmony import */ var _components_commit_detail_commit_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_components/commit-detail/commit-detail.component */ "./src/app/_components/commit-detail/commit-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/commits', pathMatch: 'full' },
    { path: 'commits', component: _components_commits_commits_component__WEBPACK_IMPORTED_MODULE_2__["CommitsComponent"] },
    { path: 'commits/:hash', component: _components_commit_detail_commit_detail_component__WEBPACK_IMPORTED_MODULE_3__["CommitDetailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/_services/commits.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/commits.service.ts ***!
  \**********************************************/
/*! exports provided: CommitsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitsService", function() { return CommitsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var CommitsService = /** @class */ (function () {
    function CommitsService(http) {
        this.http = http;
        this.userName = 'thoughtbot';
        this.userRepo = 'guides';
        this.token = '';
    }
    CommitsService.prototype.getCommits = function (url) {
        var requestUrl;
        var headers = null;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('per_page', '10')
            .set('page', '1');
        if (this.token) {
            headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', "Bearer " + this.token);
        }
        if (url) {
            requestUrl = url;
            params = null;
        }
        else {
            requestUrl = this.commitsUrl;
        }
        return this.http.get(requestUrl, { params: params, headers: headers, observe: 'response' });
    };
    CommitsService.prototype.linkTransformer = function (links) {
        var inArray = links.split(", ");
        var outArray = [];
        var referenceArray;
        (function (referenceArray) {
            referenceArray[referenceArray["first"] = 0] = "first";
            referenceArray[referenceArray["prev"] = 1] = "prev";
            referenceArray[referenceArray["next"] = 2] = "next";
            referenceArray[referenceArray["last"] = 3] = "last";
        })(referenceArray || (referenceArray = {}));
        ;
        inArray.forEach(function (item) {
            var nameValue = item.slice(item.indexOf('"') + 1, item.length - 1);
            var linkValue = item.slice(item.indexOf("<") + 1, item.indexOf(">"));
            outArray[referenceArray[nameValue]] = { name: nameValue, link: linkValue };
        });
        outArray = outArray.filter(function (item) { return item; }); // removes empty array items from outArray at first and last page
        return outArray;
    };
    CommitsService.prototype.getCommitDetail = function (hash) {
        var headers = null;
        if (this.token) {
            headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', "Bearer " + this.token);
        }
        return this.http.get(this.commitsUrl + "/" + hash, { headers: headers, observe: 'response' });
    };
    CommitsService.prototype.saveUserLS = function () {
        localStorage.setItem('user', JSON.stringify({ userName: this.userName, userRepo: this.userRepo }));
        this.commitsUrl = "https://api.github.com/repos/" + this.userName + "/" + this.userRepo + "/commits";
    };
    CommitsService.prototype.getUserLS = function () {
        var userLS = JSON.parse(localStorage.getItem('user'));
        if (userLS) {
            this.userName = userLS.userName;
            this.userRepo = userLS.userRepo;
        }
        else {
            this.resetUser();
        }
        this.commitsUrl = "https://api.github.com/repos/" + this.userName + "/" + this.userRepo + "/commits";
    };
    CommitsService.prototype.resetUser = function () {
        this.userName = 'thoughtbot';
        this.userRepo = 'guides';
        this.saveUserLS();
    };
    CommitsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CommitsService);
    return CommitsService;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _routers_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_routers/app-routing.module */ "./src/app/_routers/app-routing.module.ts");
/* harmony import */ var _components_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_components/app.component */ "./src/app/_components/app.component.ts");
/* harmony import */ var _components_commits_commits_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_components/commits/commits.component */ "./src/app/_components/commits/commits.component.ts");
/* harmony import */ var _components_commit_detail_commit_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_components/commit-detail/commit-detail.component */ "./src/app/_components/commit-detail/commit-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _routers_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ],
            declarations: [
                _components_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_commits_commits_component__WEBPACK_IMPORTED_MODULE_6__["CommitsComponent"],
                _components_commit_detail_commit_detail_component__WEBPACK_IMPORTED_MODULE_7__["CommitDetailComponent"]
            ],
            bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\prog\html\txt\17_Angular2\02_Commits_Info_App-Angular6-\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map