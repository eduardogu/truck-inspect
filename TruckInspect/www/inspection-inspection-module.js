(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inspection-inspection-module"],{

/***/ "/siE":
/*!*************************************************!*\
  !*** ./src/app/inspection/inspection.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".large {\n  font-size: 5em;\n}\n\n.panel {\n  width: 100%;\n}\n\n.index-panel {\n  display: flex;\n  flex-direction: row;\n}\n\n.content {\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n}\n\n.content .content-title {\n  font-size: 1.5em;\n  margin-top: 0;\n}\n\n.content .content-subtitle {\n  font-size: 1em;\n  padding: 0;\n  margin: 0;\n}\n\n.full {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2luc3BlY3Rpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csY0FBQTtBQUNIOztBQUNBO0VBQ0csV0FBQTtBQUVIOztBQUFBO0VBQ0csYUFBQTtFQUNBLG1CQUFBO0FBR0g7O0FBREE7RUFDRyxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUFJSDs7QUFIRztFQUNHLGdCQUFBO0VBQ0EsYUFBQTtBQUtOOztBQUhHO0VBQ0csY0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBS047O0FBRkE7RUFDRyxZQUFBO0FBS0giLCJmaWxlIjoiaW5zcGVjdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFyZ2V7XG4gICBmb250LXNpemU6IDVlbTtcbn1cbi5wYW5lbHtcbiAgIHdpZHRoOiAxMDAlO1xufVxuLmluZGV4LXBhbmVse1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uY29udGVudHtcbiAgIHBhZGRpbmc6IDEwcHg7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAuY29udGVudC10aXRsZXtcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgfVxuICAgLmNvbnRlbnQtc3VidGl0bGV7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBtYXJnaW46IDA7XG4gICB9XG59XG4uZnVsbHtcbiAgIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "DKwj":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inspection/inspection.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n       <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Inspection List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n   <ion-row class=\"full\">\n      <ion-col size=\"12\" size-sm>\n         <div class=\"panel index-panel urgent\">\n            <ion-icon class=\"large\" name=\"alert-circle\"></ion-icon>\n            <div class=\"content\">\n               <h1 class=\"content-title\">March 3rd, 2021</h1>\n               <p class=\"content-subtitle\">#3715 Tuff Boy</p>\n            </div>\n         </div>\n         <div class=\"panel\">\n         </div>\n      </ion-col>\n      <ion-col size=\"12\" size-sm>\n         <div class=\"panel\">\n            Panel 2\n         </div>\n      </ion-col> \n   </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "Kmi3":
/*!***********************************************!*\
  !*** ./src/app/inspection/inspection.page.ts ***!
  \***********************************************/
/*! exports provided: InspectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectionPage", function() { return InspectionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inspection_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inspection.page.html */ "DKwj");
/* harmony import */ var _inspection_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspection.page.scss */ "/siE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let InspectionPage = class InspectionPage {
    constructor() { }
    ngOnInit() {
    }
};
InspectionPage.ctorParameters = () => [];
InspectionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inspection',
        template: _raw_loader_inspection_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inspection_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InspectionPage);



/***/ }),

/***/ "u4y4":
/*!*********************************************************!*\
  !*** ./src/app/inspection/inspection-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: InspectionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectionPageRoutingModule", function() { return InspectionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _inspection_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspection.page */ "Kmi3");




const routes = [
    {
        path: '',
        component: _inspection_page__WEBPACK_IMPORTED_MODULE_3__["InspectionPage"]
    }
];
let InspectionPageRoutingModule = class InspectionPageRoutingModule {
};
InspectionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InspectionPageRoutingModule);



/***/ }),

/***/ "yf6I":
/*!*************************************************!*\
  !*** ./src/app/inspection/inspection.module.ts ***!
  \*************************************************/
/*! exports provided: InspectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectionPageModule", function() { return InspectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _inspection_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inspection-routing.module */ "u4y4");
/* harmony import */ var _inspection_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspection.page */ "Kmi3");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");








let InspectionPageModule = class InspectionPageModule {
};
InspectionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _inspection_routing_module__WEBPACK_IMPORTED_MODULE_5__["InspectionPageRoutingModule"]
        ],
        declarations: [_inspection_page__WEBPACK_IMPORTED_MODULE_6__["InspectionPage"]]
    })
], InspectionPageModule);



/***/ })

}]);
//# sourceMappingURL=inspection-inspection-module.js.map