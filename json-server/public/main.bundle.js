webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n\n  <div fxFlex>\n    <div>\n      <h3>About Us</h3>\n      <hr>\n    </div>\n  </div>\n\n  <div fxFlex>\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n      <div fxFlex=\"70\">\n        <h2>Our History</h2>\n        <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong.\n          With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list\n          clientele in Hong Kong. Featuring four of the best three-star Michelin chefs in the world, you never know what\n          will arrive on your plate the next time you visit us.</p>\n        <p>The restaurant traces its humble beginnings to\n          <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the\n          world's best cuisines in a pan.</p>\n      </div>\n      <div fxFlex=\"30\">\n        <md-card>\n          <md-card-header>\n            <md-card-title>\n              <h2>Facts At a Glance</h2>\n            </md-card-title>\n          </md-card-header>\n          <md-card-content>\n            <dl>\n              <dt>Started</dt>\n              <dd>3 Feb. 2013</dd>\n              <dt>Major Stake Holder</dt>\n              <dd>HK Fine Foods Inc.</dd>\n              <dt>Last Year's Turnover</dt>\n              <dd>$1,250,375</dd>\n              <dt>Employees</dt>\n              <dd>40</dd>\n            </dl>\n          </md-card-content>\n        </md-card>\n      </div>\n    </div>\n  </div>\n\n  <div fxFlex>\n    <md-card>\n      <blockquote>\n        <h3>You better cut the pizza in four pieces because I'm not hungry enough to eat six.</h3>\n        <footer>-- Yogi Berra,\n          <cite>The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014</cite>\n        </footer>\n      </blockquote>\n    </md-card>\n  </div>\n\n\n  <div fxFlex *ngIf=\"leaders\" [@expand]>\n    <h2>Corporate Leadership</h2>\n    <md-list fxFlexLayout=\"column\" fxFlexLayout.gt-sm=\"row\" *ngFor=\"let leader of leaders\">\n      <img height='60px' width=\"60px\" src=\"{{BaseURL + leader.image}}\" alt={{leader.name}}>\n      <div fxFlexLayout=\"row\" class='leader'>\n        <div>\n            <md-list-item><b>{{leader.name}} {{leader.abbr}}</b></md-list-item>\n            <md-list-item>{{leader.designation}}</md-list-item>\n            <md-list-item>{{leader.description}}</md-list-item>\n        </div>\n      </div>            \n    </md-list>\n  </div>\n  <div [hidden]=\"leaders\">\n    <md-spinner></md-spinner><h4>Loading . . . Please Wait</h4>\n  </div>\n  <div *ngIf=\"errmess\">\n    <h2>Error</h2>\n    <h4>{{errmess}}</h4>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  margin-top: 3%;\n  border-radius: 50%; }\n\n.leader {\n  font-size: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_leader_service__ = __webpack_require__("../../../../../src/app/services/leader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_app_animation__ = __webpack_require__("../../../../../src/app/animations/app.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AboutComponent = /** @class */ (function () {
    function AboutComponent(leaderservice, BaseURL) {
        this.leaderservice = leaderservice;
        this.BaseURL = BaseURL;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leaderservice.getLeaders()
            .subscribe(function (leaders) { _this.leaders = leaders; }, function (errmess) { return _this.errmess = errmess; });
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")],
            // tslint:disable-next-line:use-host-property-decorator
            host: {
                '[@flyInOut]': 'true',
                'style': 'display: block;'
            },
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__animations_app_animation__["b" /* flyInOut */])(),
                Object(__WEBPACK_IMPORTED_MODULE_2__animations_app_animation__["a" /* expand */])()
            ]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])('BaseURL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_leader_service__["a" /* LeaderService */], Object])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/animations/app.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = visibility;
/* harmony export (immutable) */ __webpack_exports__["b"] = flyInOut;
/* harmony export (immutable) */ __webpack_exports__["a"] = expand;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

function visibility() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('visibility', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('shown', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            transform: 'scale(1.0)',
            opacity: 1
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('hidden', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            transform: 'scale(0.5)',
            opacity: 0
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('* => *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out'))
    ]);
}
function flyInOut() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('flyInOut', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translateX(0)' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(-100%)', opacity: 0 }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-in')
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(100%)', opacity: 0 }))
        ])
    ]);
}
function expand() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('expand', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translateX(0)' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(-50%)', opacity: 0 }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('200ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translateX(0)' }))
        ])
    ]);
}


/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("../../../../../src/app/app-routing/routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__routes__["a" /* routes */])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dishdetail_dishdetail_component__ = __webpack_require__("../../../../../src/app/dishdetail/dishdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");





var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_0__menu_menu_component__["a" /* MenuComponent */] },
    { path: 'dishdetail/:id', component: __WEBPACK_IMPORTED_MODULE_1__dishdetail_dishdetail_component__["a" /* DishdetailComponent */] },
    { path: 'contactus', component: __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a" /* ContactComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];


/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <md-toolbar color=\"primary\">\n    <span>Welcome To The WEB Project 2</span>\n  </md-toolbar>\n  <h1 style=\"font-family: Arial, Helvetica, sans-serif\">\n    Welcome to {{ title | uppercase}}!\n  </h1>\n</div> -->\n<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_baseurl__ = __webpack_require__("../../../../../src/app/shared/baseurl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/fesm5/ngx-restangular.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_restConfig__ = __webpack_require__("../../../../../src/app/shared/restConfig.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dishdetail_dishdetail_component__ = __webpack_require__("../../../../../src/app/dishdetail/dishdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_dish_service__ = __webpack_require__("../../../../../src/app/services/dish.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_promotion_service__ = __webpack_require__("../../../../../src/app/services/promotion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_leader_service__ = __webpack_require__("../../../../../src/app/services/leader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_process_httpmsg_service__ = __webpack_require__("../../../../../src/app/services/process-httpmsg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__directives_highlight_directive__ = __webpack_require__("../../../../../src/app/directives/highlight.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_feedback_service__ = __webpack_require__("../../../../../src/app/services/feedback.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_13__dishdetail_dishdetail_component__["a" /* DishdetailComponent */],
                __WEBPACK_IMPORTED_MODULE_15__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_16__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_18__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_20__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_23__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_25__directives_highlight_directive__["a" /* HighlightDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_17__app_routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_restangular__["b" /* RestangularModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__shared_restConfig__["a" /* RestangularConfigFactory */])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__services_dish_service__["a" /* DishService */], __WEBPACK_IMPORTED_MODULE_21__services_promotion_service__["a" /* PromotionService */], __WEBPACK_IMPORTED_MODULE_22__services_leader_service__["a" /* LeaderService */],
                { provide: 'BaseURL', useValue: __WEBPACK_IMPORTED_MODULE_5__shared_baseurl__["a" /* baseURL */] },
                __WEBPACK_IMPORTED_MODULE_24__services_process_httpmsg_service__["a" /* ProcessHttpmsgService */], __WEBPACK_IMPORTED_MODULE_26__services_feedback_service__["a" /* FeedbackService */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_23__login_login_component__["a" /* LoginComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n\n  <div fxFlex>\n    <div>\n      <h3>Contact Us</h3>\n      <hr>\n    </div>\n  </div>\n\n  <div fxFlex>\n    <h3>Location Information</h3>\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n      <div fxFlex=\"50\" fxFlexOffset=\"20px\">\n        <h4>Our Address</h4>\n        <address>\n          121, Clear Water Bay Road\n          <br> Clear Water Bay, Disney\n          <br> HONG KONG\n          <br>\n          <i class=\"fa fa-phone\"></i>: +91123456789\n          <br>\n          <i class=\"fa fa-fax\"></i>: +91123456789\n          <br>\n          <i class=\"fa fa-envelope\"></i>:\n          <a href=\"mailto:confusion@food.net\">abhilnm011@gmail.com</a>\n        </address>\n        <p></p>\n        <div>\n          <a md-raised-button href=\"tel:+91123456789\">\n            <i class=\"fa fa-phone\"></i> Call</a>\n          <a md-raised-button>\n            <i class=\"fa fa-skype\"></i> Skype</a>\n          <a md-raised-button href=\"mailto:abhilnm011@gmail.com\">\n            <i class=\"fa fa-envelope-o\"></i> Email</a>\n        </div>\n      </div>\n      <div fxFlex=\"40\">\n        <h4>Map of our Location</h4>\n      </div>\n    </div>\n  </div>\n  <div fxFlex fxFlexOffset=\"20px\" class=\"form-size\">\n    <h3>Send us your Feedback</h3>\n    <p>{{ feedbackForm.value | json }} {{ feedbackForm.status | json }}</p>\n\n    <form novalidate [formGroup]=\"feedbackForm\" (ngSubmit)=\"onSubmit()\">\n      <p>\n        <md-input-container class=\"half-width\" dividerColor=\"{{(formErrors.firstname) ? 'warn' : 'primary'}}\">\n\n          <input mdInput formControlName=\"firstname\" placeholder=\"First Name\" type=\"text\" required>\n          <md-hint>\n            <span [hidden]=\"!(formErrors.firstname)\">\n                  {{formErrors.firstname}}</span>\n          </md-hint>\n        </md-input-container>\n        <md-input-container class=\"half-width\" dividerColor=\"{{(formErrors.lastname) ? 'warn' : 'primary'}}\">\n          <input mdInput formControlName=\"lastname\" placeholder=\"Last Name\" type=\"text\" required>\n          <md-hint>\n            <span [hidden]=\"!(formErrors.lastname)\">\n                  {{formErrors.lastname}}</span>\n          </md-hint>\n        </md-input-container>\n      </p>\n      <p>\n        <md-input-container class=\"half-width\" dividerColor=\"{{(formErrors.telnum) ? 'warn' : 'primary'}}\">\n          <input mdInput formControlName=\"telnum\" placeholder=\"Tel. Number\" type=\"tel\" pattern=\"[0-9]*\" required>\n          <md-hint>\n            <span [hidden]=\"!(formErrors.telnum)\">\n                  {{formErrors.telnum}}</span>\n          </md-hint>\n        </md-input-container>\n        <md-input-container class=\"half-width\" dividerColor=\"{{(formErrors.email) ? 'warn' : 'primary'}}\">\n          <input mdInput formControlName=\"email\" placeholder=\"Email\" type=\"email\" required>\n          <md-hint>\n              <span [hidden]=\"!(formErrors.email)\">\n                  {{formErrors.email}}</span>\n          </md-hint>\n        </md-input-container>\n      </p>\n      <table class=\"form-size\">\n        <td>\n          <md-slide-toggle formControlName=\"agree\">May we contact you?</md-slide-toggle>\n        </td>\n        <td>\n          <md-select placeholder=\"How?\" formControlName=\"contacttype\">\n            <md-option *ngFor=\"let ctype of contactType\" [value]=\"ctype\">\n              {{ ctype }}\n            </md-option>\n          </md-select>\n        </td>\n      </table>\n      <p>\n        <md-input-container class=\"full-width\">\n          <textarea mdInput formControlName=\"message\" placeholder=\"Your Feedback\" rows=12></textarea>\n        </md-input-container>\n      </p>\n      <button type=\"submit\" md-button class=\"background-primary text-floral-white\" [disabled]=\"feedbackForm.invalid\">Submit</button>\n    </form>\n    <div [hidden]=\"!submitted\" [@visibility]=\"visibility\" [@extend]>\n      <div fxFlex *ngIf=\"sglFeedback\">\n        <h3>Your Submission</h3>\n        <md-list>\n          ...\n        </md-list>\n      </div>\n      <div [hidden]=\"sglFeedback || errMess\">\n        <h3>Submitting Form</h3>\n        <md-spinner></md-spinner>\n      </div>\n      <div *ngIf=\"errMess\">\n        <h2>Error</h2>\n        <h4>{{errMess}}</h4>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width {\n  width: 95%; }\n\n.half-width {\n  width: 45%; }\n\n.form-size {\n  width: 75%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_feedback__ = __webpack_require__("../../../../../src/app/shared/feedback.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_app_animation__ = __webpack_require__("../../../../../src/app/animations/app.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = /** @class */ (function () {
    function ContactComponent(fb) {
        this.fb = fb;
        this.contactType = __WEBPACK_IMPORTED_MODULE_2__shared_feedback__["a" /* ContactType */];
        this.formErrors = {
            'firstname': '',
            'lastname': '',
            'telnum': '',
            'email': ''
        };
        this.validationMessages = {
            'firstname': {
                'required': 'First Name is required.',
                'minlength': 'First Name must be at least 2 characters long.',
                'maxlength': 'FirstName cannot be more than 25 characters long.'
            },
            'lastname': {
                'required': 'Last Name is required.',
                'minlength': 'Last Name must be at least 2 characters long.',
                'maxlength': 'Last Name cannot be more than 25 characters long.'
            },
            'telnum': {
                'required': 'Tel. number is required.',
                'pattern': 'Tel. number must contain only numbers.'
            },
            'email': {
                'required': 'Email is required.',
                'email': 'Email not in valid format.'
            },
        };
        this.createForm();
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.createForm = function () {
        var _this = this;
        this.feedbackForm = this.fb.group({
            firstname: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].maxLength(25)]],
            lastname: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].maxLength(25)]],
            telnum: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].pattern]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].email]],
            agree: false,
            contacttype: 'None',
            message: ''
        });
        this.feedbackForm.valueChanges
            .subscribe(function (data) { _this.onValueChanged(data); }, function (errmess) { return _this.errMess = errmess; });
        this.onValueChanged(); // (re)set validation messages now
    };
    ContactComponent.prototype.onValueChanged = function (data) {
        if (!this.feedbackForm) {
            return;
        }
        var form = this.feedbackForm;
        for (var _i = 0, _a = Object.keys(this.formErrors); _i < _a.length; _i++) {
            var field = _a[_i];
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var _b = 0, _c = Object.keys(control.errors); _b < _c.length; _b++) {
                    var key = _c[_b];
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    ContactComponent.prototype.onSubmit = function () {
        this.feedback = this.feedbackForm.value;
        console.log(this.feedback);
        this.feedbackForm.reset({
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contacttype: 'None',
            message: ''
        });
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.scss")],
            // tslint:disable-next-line:use-host-property-decorator
            host: {
                '[@flyInOut]': 'true',
                'style': 'display: block;'
            },
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_3__animations_app_animation__["b" /* flyInOut */])(),
                Object(__WEBPACK_IMPORTED_MODULE_3__animations_app_animation__["a" /* expand */])()
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/directives/highlight.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    HighlightDirective.prototype.onMouseEnter = function () {
        this.renderer.addClass(this.el.nativeElement, 'highlight');
    };
    HighlightDirective.prototype.onMouseLeave = function () {
        this.renderer.removeClass(this.el.nativeElement, 'highlight');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "onMouseLeave", null);
    HighlightDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[appHighlight]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer2 */]])
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "../../../../../src/app/dishdetail/dishdetail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutAlign.gt-md=\"space-around center\"\r\n  fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0\">\r\n  <div fxFLex=\"40\" *ngIf=\"dish\" [@visibility] = \"visibility\" [@expand]>\r\n    <md-card >\r\n      <md-card-header>\r\n        <md-card-title>\r\n          <h3>{{dish.name | uppercase}}</h3>\r\n        </md-card-title>\r\n      </md-card-header>\r\n      <img md-card-image src=\"{{BaseURL + dish.image}}\" alt=\"{{dish.name}}\">\r\n      <md-card-content>\r\n        <p><strong>{{dish.description}}</strong></p>\r\n      </md-card-content>\r\n      <md-card-actions>\r\n        <button md-button [routerLink]=\"['/dishdetail', prev]\">\r\n          <span class=\"fa fa-chevron-left fa-lg\"></span>\r\n        </button>\r\n        <button md-button (click)=\"goBack()\">BACK</button>\r\n        <button md-button>LIKE</button>\r\n        <button md-button>SHARE</button> \r\n        <span class=\"flex-spacer\"></span>\r\n        <button md-button [routerLink]=\"['/dishdetail', next]\">\r\n          <span class=\"fa fa-chevron-right fa-lg\"></span>\r\n        </button>\r\n      </md-card-actions>\r\n    </md-card>\r\n  </div>\r\n  <div fxFlex=\"40\" *ngIf=\"dish\" [@visibility] = \"visibility\" [@expand]>\r\n    <md-list fxFlexLayout=\"column\">\r\n      <h1 md-line>\r\n        <b>Comments</b>\r\n      </h1> \r\n      <md-list-item *ngFor=\"let comment of dish.comments\">\r\n        <p md-line>{{comment.comment}}</p>\r\n        <p md-line>{{comment.rating}} Stars</p>        \r\n        <p md-line>-- {{comment.author}}<span> {{comment.date | date}}</span></p>\r\n      </md-list-item>\r\n    </md-list>\r\n    <md-list *ngIf=\"commentsForm.valid\">\r\n      <md-list-item>\r\n        <p md-line> {{commentsForm.get('comment').value}}  </p>\r\n        <p md-line> {{commentsForm.get('rating').value}} Stars</p>\r\n        <p md-line><span>-- {{commentsForm.get('author').value}}</span> </p>\r\n      </md-list-item>\r\n    </md-list>\r\n    <div fxFlexLayout=\"column\">\r\n      <form novalidate [formGroup]=\"commentsForm\" (ngSubmit)=\"onSubmit()\"> \r\n          <p>\r\n            <md-input-container class=\"full-width\" dividerColor=\"{{(formErrors.author) ? 'warn' : 'primary'}}\">\r\n              <input mdInput formControlName=\"author\" placeholder=\"Name\" type=\"text\" value=\"author\">\r\n              <md-hint>\r\n                <span [hidden]=\"!(formErrors.author)\">\r\n                      {{formErrors.author}}</span>\r\n              </md-hint>\r\n            </md-input-container>\r\n          </p>\r\n          <p>\r\n            <md-slider thumbLabel tickInterval=\"1\" step=\"1\" min=\"1\" max=\"5\" value=\"5\" formControlName=\"rating\"></md-slider>\r\n          </p>\r\n          <p>\r\n            <md-input-container class=\"full-width\" dividerColor=\"{{(formErrors.comment) ? 'warn' : 'primary'}}\">\r\n              <textarea mdInput formControlName=\"comment\" placeholder=\"Your comments\" rows=10></textarea>\r\n              <md-hint>\r\n                <span [hidden]=\"!(formErrors.comment)\">\r\n                      {{formErrors.comment}}</span>\r\n              </md-hint>\r\n            </md-input-container>\r\n          </p>\r\n          <p>\r\n            <button type=\"submit\" md-button \r\n            class=\"background-primary text-floral-white\" [disabled]=\"commentsForm.invalid\">Submit</button>          \r\n          </p>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"dish || errMess\">\r\n    <md-spinner></md-spinner><h4>Loading . . . Please Wait</h4>\r\n  </div>\r\n  <div *ngIf=\"errMess\">\r\n    <h2>Error</h2>\r\n    <h4>{{errMess}}</h4>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dishdetail/dishdetail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width {\n  width: 95%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dishdetail/dishdetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishdetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dish_service__ = __webpack_require__("../../../../../src/app/services/dish.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animations_app_animation__ = __webpack_require__("../../../../../src/app/animations/app.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var DishdetailComponent = /** @class */ (function () {
    function DishdetailComponent(dishservice, route, location, fb, BaseURL) {
        this.dishservice = dishservice;
        this.route = route;
        this.location = location;
        this.fb = fb;
        this.BaseURL = BaseURL;
        this.formErrors = {
            'author': '',
            'comment': ''
        };
        this.validationMessages = {
            'author': {
                'required': 'author is required.',
                'minlength': 'First Name must be at least 2 characters long.',
                'maxlength': 'FirstName cannot be more than 25 characters long.'
            },
            'comment': {
                'required': 'comment is required.',
                'minlength': 'comment must be at least 2 characters long.'
            }
        };
    }
    DishdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this.dishservice.getDishIds().subscribe(function (dishIds) { return _this.dishIds = dishIds; });
        this.route.params
            .switchMap(function (params) { _this.visibility = 'hidden'; return _this.dishservice.getDish(+params['id']); })
            .subscribe(function (dish) { _this.dish = dish; _this.dishCopy = dish; _this.setPrevNext(dish.id); _this.visibility = 'shown'; }, function (errmess) { return _this.errMess = errmess; });
    };
    DishdetailComponent.prototype.setPrevNext = function (dishId) {
        var index = this.dishIds.indexOf(dishId);
        this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
        this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
    };
    DishdetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    DishdetailComponent.prototype.createForm = function () {
        var _this = this;
        this.commentsForm = this.fb.group({
            author: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* Validators */].maxLength(25)]],
            comment: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* Validators */].maxLength(25)]],
            rating: 5
        });
        this.commentsForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages now
    };
    DishdetailComponent.prototype.onValueChanged = function (data) {
        if (!this.commentsForm) {
            return;
        }
        var form = this.commentsForm;
        for (var _i = 0, _a = Object.keys(this.formErrors); _i < _a.length; _i++) {
            var field = _a[_i];
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var _b = 0, _c = Object.keys(control.errors); _b < _c.length; _b++) {
                    var key = _c[_b];
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    DishdetailComponent.prototype.onSubmit = function () {
        var _this = this;
        this.comment = this.commentsForm.value;
        this.comment.date = new Date().toISOString();
        console.log(this.comment);
        // this.dishcopy.comments.push(this.comment);
        // this.dishcopy.save()
        this.dishCopy.comments.push(this.comment);
        this.dishCopy.save()
            .subscribe(function (dish) { _this.dish = dish; console.log(_this.dish); });
        this.commentsForm.reset({
            author: '',
            rating: 5,
            comment: ''
        });
    };
    DishdetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dishdetail',
            template: __webpack_require__("../../../../../src/app/dishdetail/dishdetail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dishdetail/dishdetail.component.scss")],
            // tslint:disable-next-line:use-host-property-decorator
            host: {
                '[@flyInOut]': 'true',
                'style': 'display: block;'
            },
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_6__animations_app_animation__["c" /* visibility */])(),
                Object(__WEBPACK_IMPORTED_MODULE_6__animations_app_animation__["b" /* flyInOut */])(),
                Object(__WEBPACK_IMPORTED_MODULE_6__animations_app_animation__["a" /* expand */])()
            ]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])('BaseURL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_dish_service__["a" /* DishService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], Object])
    ], DishdetailComponent);
    return DishdetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container footer\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutAlign.xs=\"start center\" fxLayoutAlign.sm=\"start center\"\n  fxLayoutAlign.gt-sm=\"center center\" fxLayoutWrap fxLayoutGap=\"10px\">\n\n  <div fxFlex=\"100%\" fxFlex.gt-sm=\"50%\">\n    <div fxLayout=\"row\">\n      <div fxFlex=\"40\" fxFlexOffset=\"20px\">\n        <h4>Links</h4>\n        <md-list>\n          <md-list-item>\n            <a md-button routerLink = '/home'>Home</a>\n          </md-list-item>\n          <md-list-item>\n            <a md-button routerLink= '/about'>About</a>\n          </md-list-item>\n          <md-list-item>\n            <a md-button routerLink = '/menu'>Menu</a>\n          </md-list-item>\n          <md-list-item>\n            <a md-button routerLink = '/contactus'>Contact</a>\n          </md-list-item>\n        </md-list>\n      </div>\n      <div fxFlex=\"50\">\n        <h4>Our Address</h4>\n        <address style=\"font-size: 80%\">\n          121, Clear Water Bay Road\n          <br> Clear Water Bay, Disney\n          <br> HONG KONG\n          <br>\n          <i class=\"fa fa-phone\"></i>: +91123456789\n          <br>\n          <i class=\"fa fa-fax\"></i>: +91123456789\n          <br>\n          <i class=\"fa fa-envelope\"></i>:\n          <a href=\"mailto:confusion@food.net\">abhilnm011@gmail.com</a>\n        </address>\n      </div>\n    </div>\n  </div>\n  <div fxFlex=\"100%\" fxFlex.gt-sm=\"45%\">\n    <div style=\"text-align:center\">\n      <a md-icon-button class=\"btn-google-plus\" href=\"http://google.com/+\">\n        <i class=\"fa fa-google-plus fa-lg\"></i>\n      </a>\n      <a md-icon-button class=\"btn-facebook\" href=\"http://www.facebook.com/profile.php?id=\">\n        <i class=\"fa fa-facebook fa-lg\"></i>\n      </a>\n      <a md-icon-button class=\"btn-linkedin\" href=\"http://www.linkedin.com/in/\">\n        <i class=\"fa fa-linkedin fa-lg\"></i>\n      </a>\n      <a md-icon-button class=\"btn-twitter\" href=\"http://twitter.com/\">\n        <i class=\"fa fa-twitter fa-lg\"></i>\n      </a>\n      <a md-icon-button class=\"btn-youtube\" href=\"http://youtube.com/\">\n        <i class=\"fa fa-youtube fa-lg\"></i>\n      </a>\n      <a md-icon-button class=\"btn-mail\" href=\"mailto:abhilnm011@gmail.com\">\n        <i class=\"fa fa-envelope-o fa-lg\"></i>\n      </a>\n    </div>\n  </div>\n  <div fxFlex=\"100\" fxFlexAlign=\"center center\">\n    <div style=\"text-align:center;\">\n      <p>© Copyright 2018 Restauranto</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  background-color: #8ac0ec;\n  margin: 0px auto;\n  padding: 20px 0px; }\n\n.btn-facebook {\n  color: #fff !important;\n  background-color: #3b5998 !important; }\n\n.btn-google-plus {\n  color: #fff !important;\n  background-color: #dd4b39 !important; }\n\n.btn-youtube {\n  color: #fff !important;\n  background-color: #ff4b39 !important; }\n\n.btn-linkedin {\n  color: #fff !important;\n  background-color: #007bb6 !important; }\n\n.btn-twitter {\n  color: #fff !important;\n  background-color: #55acee !important; }\n\n.btn-mail {\n  color: #fff !important;\n  background-color: #512DA8 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <span>\n    <img src=\"../../assets/img/logo.png\" height=30 width=41>\n  </span>\n  <div class=\"nav\">\n      <a md-button routerLink='/home' routerLinkActive='active'>\n        <span class=\"fa fa-home fa-lg\"></span> Home</a>\n      <a md-button routerLink='/about' routerLinkActive='active'>\n        <span class=\"fa fa-info fa-lg\"></span> About</a>\n      <a md-button routerLink='/menu' routerLinkActive='active'>\n        <span class=\"fa fa-list fa-lg\"></span> Menu</a>\n      <a md-button routerLink='/contactus' routerLinkActive='active'>\n        <span class=\"fa fa-address-card fa-lg\"></span> Contact</a>\n  </div>\n      <span class='flex-spacer'></span>\n      <a md-button (click)='openLoginForm()'><i class=\"fa fa-sign-in fa-lg\"></i> LOGIN</a>\n</md-toolbar>\n\n<div class=\"container jumbotron\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutAlign.xs=\"start center\"\n  fxLayoutAlign.sm=\"start center\" fxLayoutAlign.gt-sm=\"center center\" fxLayoutGap=\"10px\">\n\n  <div fxFlex fxFlex.gt-sm=\"50%\">\n    <h1>Restauranto</h1>\n    <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations\n      will tickle your culinary senses!</p>\n  </div>\n  <div fxFlex fxFlex.gt-sm=\"20%\">\n    <img src=\"../../assets/img/logo.png\" alt=\"Logo\">\n  </div>\n  <div fxFlex></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron {\n  margin: 0px auto;\n  padding: 70px 30px;\n  background: #69b1c7;\n  color: floralwhite;\n  min-height: 150px; }\n\n.active {\n  background: #4527A0; }\n\n@media (max-width: 600px) {\n  .nav {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: wrap;\n        flex-flow: wrap; }\n  .active {\n    background: none;\n    background-blend-mode: soft-light; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dialog) {
        this.dialog = dialog;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.openLoginForm = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */], { width: '400px', height: '300px' });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutAlign.gt-md=\"space-around center\"\n  fxLayoutGap=\"10px\">\n\n  <md-card *ngIf=\"dish\" fxFlex [@expand]>\n    <md-card-header>\n      <div md-card-avatar></div>\n      <md-card-title>\n        <h3>{{dish.name | uppercase}}</h3>\n      </md-card-title>\n    </md-card-header>\n    <img md-card-image src=\"{{BaseURL + dish.image}}\" alt={{dish.name}}>\n    <md-card-content>\n      <p>{{dish.description}}\n      </p>\n    </md-card-content>\n  </md-card>\n  <div [hidden]=\"dish || dishErrMess\">\n    <md-spinner></md-spinner><h4>Loading . . . Please Wait</h4>\n  </div>\n  <div *ngIf=\"dishErrMess\">\n    <h2>Error</h2>\n    <h4>{{dishErrMess}}</h4>\n  </div>\n\n  <md-card *ngIf=\"promotion\" fxFlex [@expand]>\n    <md-card-header>\n      <div md-card-avatar></div>\n      <md-card-title>\n        <h3>{{promotion.name | uppercase}}</h3>\n      </md-card-title>\n    </md-card-header>\n    <img md-card-image src=\"{{BaseURL + promotion.image}}\" alt={{promotion.name}}>\n    <md-card-content>\n      <p>{{promotion.description}}\n      </p>\n    </md-card-content>\n  </md-card>\n  <div [hidden]=\"promotion || promoErrMess\">\n    <md-spinner></md-spinner><h4>Loading . . . Please Wait</h4>\n  </div>\n  <div *ngIf=\"promoErrMess\">\n    <h2>Error</h2>\n    <h4>{{promoErrMess}}</h4>\n  </div>\n\n\n  <md-card *ngIf=\"leader\" fxFlex [@expand]>\n    <md-card-header>\n      <div md-card-avatar></div>\n      <md-card-title>\n        <h3>{{leader.name | uppercase}}</h3>\n      </md-card-title>\n    </md-card-header>\n    <img md-card-image height='280px' src=\"{{BaseURL + leader.image}}\" alt={{leader.name}}>\n    <md-card-content>\n      <p>{{leader.description}}\n      </p>\n    </md-card-content>\n  </md-card>\n\n  <div [hidden]=\"leader || leaderErrMess\">\n    <md-spinner></md-spinner><h4>Loading . . . Please Wait</h4>\n  </div>\n  <div *ngIf=\"leaderErrMess\">\n    <h2>Error</h2>\n    <h4>{{leaderErrMess}}</h4>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dish_service__ = __webpack_require__("../../../../../src/app/services/dish.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_promotion_service__ = __webpack_require__("../../../../../src/app/services/promotion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_leader_service__ = __webpack_require__("../../../../../src/app/services/leader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_app_animation__ = __webpack_require__("../../../../../src/app/animations/app.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(dishservice, promotionservice, leaderservice, BaseURL) {
        this.dishservice = dishservice;
        this.promotionservice = promotionservice;
        this.leaderservice = leaderservice;
        this.BaseURL = BaseURL;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishservice.getFeaturedDish()
            .subscribe(function (dish) { return _this.dish = dish; }, function (errmess) { return _this.dishErrMess = errmess; });
        this.promotionservice.getFeaturedPromotion()
            .subscribe(function (promotion) { return _this.promotion = promotion; }, function (errmess) { return _this.promoErrMess = errmess; });
        this.leaderservice.getFeaturedLeader()
            .subscribe(function (leader) { return _this.leader = leader; }, function (errmess) { return _this.leaderErrMess = errmess; });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")],
            // tslint:disable-next-line:use-host-property-decorator
            host: {
                '[@flyInOut]': 'true',
                'style': 'display: block;'
            },
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_4__animations_app_animation__["b" /* flyInOut */])(),
                Object(__WEBPACK_IMPORTED_MODULE_4__animations_app_animation__["a" /* expand */])()
            ]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])('BaseURL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_dish_service__["a" /* DishService */], __WEBPACK_IMPORTED_MODULE_2__services_promotion_service__["a" /* PromotionService */],
            __WEBPACK_IMPORTED_MODULE_3__services_leader_service__["a" /* LeaderService */], Object])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar md-dialog-title color='primary'>\n  LOGIN\n  <span class='flex-spacer'></span>\n  <button md-button md-dialog-close>⚔</button>\n</md-toolbar>\n\n<p>{{ user | json }}</p>\n\n<form novalidate #loginForm = \"ngForm\" (ngSubmit)=\"onSubmit()\">\n\n  <md-dialog-content>\n    <p>\n      <md-input-container dividerColor=\"{{username.invalid && !username.pristine ? 'warn' : 'primary'}}\">\n        <input mdInput placeholder=\"Username\" type=\"text\" [(ngModel)]=\"user.username\" name=\"username\" #username = \"ngModel\" required>\n        <md-hint>\n          <span [hidden]=\"username.pristine\">\n            <span [hidden]=\"!username.errors?.required\">username is required</span>\n          </span>\n        </md-hint>\n      </md-input-container>\n      <md-input-container dividerColor=\"{{password.invalid && !password.pristine ? 'warn' : 'primary'}}\">\n        <input mdInput placeholder=\"Password\" type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" #password = \"ngModel\" required>\n        <md-hint>\n          <span [hidden]=\"password.pristine\">\n            <span [hidden]=\"!password.errors?.required\">password is required</span>\n          </span>\n        </md-hint>\n      </md-input-container>\n      <md-checkbox [(ngModel)]='user.remember' name=\"remember\">Remember Me</md-checkbox>\n    </p>\n  </md-dialog-content>\n  <md-dialog-actions>\n    <span class=\"flex-spacer\"></span>\n    <button md-button md-dialog-close>Cancel</button>\n    <button type=\"submit\" md-button class=\"background-primary text-floral-white\" [disabled]='loginForm.form.invalid'>Login</button>\n  </md-dialog-actions>\n</form>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(dialogref) {
        this.dialogref = dialogref;
        this.user = { remember: false, username: '', password: '' };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        console.log('User: ', this.user);
        this.dialogref.close();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n  <div fxFlex>\n    <div>\n      <h3>Menu</h3>\n      <hr>\n    </div>\n  </div>\n  <div fxFLex *ngIf=\"dishes\">\n    <md-grid-list cols = \"2\" rowHeight = \"200px\">\n      <md-grid-tile appHighlight *ngFor=\"let dish of dishes\" [routerLink]=\"['/dishdetail', dish.id]\">\n        <img  height= \"200px\" src=\"{{BaseURL + dish.image}}\" alt={{dish.name}}>\n        <md-grid-tile-footer>\n          <h1 md-line> {{dish.name | uppercase}} </h1>\n        </md-grid-tile-footer>\n      </md-grid-tile>\n    </md-grid-list>\n  </div>\n  <div [hidden]=\"dishes || errMess\">\n    <md-spinner></md-spinner><h4>Loading . . . Please Wait</h4>\n  </div>\n  <div *ngIf=\"errMess\">\n    <h2>Error</h2>\n    <h4>{{errMess}}</h4>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dish_service__ = __webpack_require__("../../../../../src/app/services/dish.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_app_animation__ = __webpack_require__("../../../../../src/app/animations/app.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var MenuComponent = /** @class */ (function () {
    function MenuComponent(dishService, BaseURL) {
        this.dishService = dishService;
        this.BaseURL = BaseURL;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishService.getDishes()
            .subscribe(function (dishes) { return _this.dishes = dishes; }, function (errmess) { return _this.errMess = errmess; });
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menu/menu.component.scss")],
            // tslint:disable-next-line:use-host-property-decorator
            host: {
                '[@flyInOut]': 'true',
                'style': 'display: block;'
            },
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__animations_app_animation__["b" /* flyInOut */])(),
                Object(__WEBPACK_IMPORTED_MODULE_2__animations_app_animation__["a" /* expand */])()
            ]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])('BaseURL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_dish_service__["a" /* DishService */], Object])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/dish.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__process_httpmsg_service__ = __webpack_require__("../../../../../src/app/services/process-httpmsg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/fesm5/ngx-restangular.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DishService = /** @class */ (function () {
    function DishService(restangular, processHTTPMsg) {
        this.restangular = restangular;
        this.processHTTPMsg = processHTTPMsg;
    }
    DishService.prototype.getDishes = function () {
        return this.restangular.all('dishes').getList();
    };
    DishService.prototype.getDish = function (id) {
        return this.restangular.one('dishes', id).get();
    };
    DishService.prototype.getFeaturedDish = function () {
        return this.restangular.all('dishes').getList({ featured: true })
            .map(function (dishes) { return dishes[0]; });
    };
    DishService.prototype.getDishIds = function () {
        return this.getDishes()
            .map(function (dishes) { return dishes.map(function (dish) { return dish.id; }); });
    };
    DishService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ngx_restangular__["a" /* Restangular */],
            __WEBPACK_IMPORTED_MODULE_5__process_httpmsg_service__["a" /* ProcessHttpmsgService */]])
    ], DishService);
    return DishService;
}());



/***/ }),

/***/ "../../../../../src/app/services/feedback.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__process_httpmsg_service__ = __webpack_require__("../../../../../src/app/services/process-httpmsg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/fesm5/ngx-restangular.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FeedbackService = /** @class */ (function () {
    function FeedbackService(restangular, processHTTPMsg) {
        this.restangular = restangular;
        this.processHTTPMsg = processHTTPMsg;
    }
    FeedbackService.prototype.submitFeedback = function (feedback) {
        return this.restangular.all('feedback').post(feedback);
    };
    FeedbackService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ngx_restangular__["a" /* Restangular */],
            __WEBPACK_IMPORTED_MODULE_5__process_httpmsg_service__["a" /* ProcessHttpmsgService */]])
    ], FeedbackService);
    return FeedbackService;
}());



/***/ }),

/***/ "../../../../../src/app/services/leader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__process_httpmsg_service__ = __webpack_require__("../../../../../src/app/services/process-httpmsg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/fesm5/ngx-restangular.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LeaderService = /** @class */ (function () {
    function LeaderService(restangular, processHTTPMsgService) {
        this.restangular = restangular;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    LeaderService.prototype.getLeaders = function () {
        return this.restangular.all('leaders').getList();
    };
    LeaderService.prototype.getLeader = function (id) {
        return this.restangular.one('leaders', id).get();
    };
    LeaderService.prototype.getFeaturedLeader = function () {
        return this.restangular.all('leaders').getList({ featured: true })
            .map(function (leaders) { return leaders[0]; });
    };
    LeaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ngx_restangular__["a" /* Restangular */],
            __WEBPACK_IMPORTED_MODULE_5__process_httpmsg_service__["a" /* ProcessHttpmsgService */]])
    ], LeaderService);
    return LeaderService;
}());



/***/ }),

/***/ "../../../../../src/app/services/process-httpmsg.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessHttpmsgService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProcessHttpmsgService = /** @class */ (function () {
    function ProcessHttpmsgService() {
    }
    ProcessHttpmsgService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body || {};
    };
    ProcessHttpmsgService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    ProcessHttpmsgService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ProcessHttpmsgService);
    return ProcessHttpmsgService;
}());



/***/ }),

/***/ "../../../../../src/app/services/promotion.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__process_httpmsg_service__ = __webpack_require__("../../../../../src/app/services/process-httpmsg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/fesm5/ngx-restangular.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PromotionService = /** @class */ (function () {
    function PromotionService(restangular, processHTTPMsgService) {
        this.restangular = restangular;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    PromotionService.prototype.getPromotions = function () {
        return this.restangular.all('promotions').getList();
    };
    PromotionService.prototype.getPromotion = function (id) {
        return this.restangular.one('promotions', id).get();
    };
    PromotionService.prototype.getFeaturedPromotion = function () {
        return this.restangular.all('promotions').getList({ featured: true })
            .map(function (promotions) { return promotions[0]; });
    };
    PromotionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ngx_restangular__["a" /* Restangular */],
            __WEBPACK_IMPORTED_MODULE_5__process_httpmsg_service__["a" /* ProcessHttpmsgService */]])
    ], PromotionService);
    return PromotionService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/baseurl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseURL; });
var baseURL = 'http://localhost:3000/';


/***/ }),

/***/ "../../../../../src/app/shared/feedback.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Feedback */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactType; });
var Feedback = /** @class */ (function () {
    function Feedback() {
    }
    return Feedback;
}());

var ContactType = ['None', 'Tel', 'Email'];


/***/ }),

/***/ "../../../../../src/app/shared/restConfig.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = RestangularConfigFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseurl__ = __webpack_require__("../../../../../src/app/shared/baseurl.ts");

// Function for settting the default restangular configuration
function RestangularConfigFactory(RestangularProvider) {
    RestangularProvider.setBaseUrl(__WEBPACK_IMPORTED_MODULE_0__baseurl__["a" /* baseURL */]);
}


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map