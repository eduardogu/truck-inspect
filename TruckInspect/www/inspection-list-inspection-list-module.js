(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inspection-list-inspection-list-module"],{

/***/ "+rIU":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inspection-list/inspection-list.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n       <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Inspection List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n   <div class=\"inspection-list\" >\n      <div class=\"panel index-panel inspection urgent\" [routerLink]=\"1\">\n         <ion-icon class=\"medium\" name=\"alert-circle\"></ion-icon>\n         <div class=\"content\">\n            <h1 class=\"content-title\">March 3rd, 2021</h1>\n            <p class=\"content-subtitle\">#3715 TUFF BOY</p>\n         </div>\n      </div>\n      <div class=\"panel index-panel inspection urgent\" [routerLink]=\"2\">\n         <ion-icon class=\"medium\" name=\"alert-circle\"></ion-icon>\n         <div class=\"content\">\n            <h1 class=\"content-title\">March 3rd, 2021</h1>\n            <p class=\"content-subtitle\">#3716 TUFF BOY</p>\n         </div>\n      </div>\n      <div class=\"panel index-panel inspection pending\" [routerLink]=\"3\">\n         <ion-icon class=\"medium\" name=\"alert-circle\"></ion-icon>\n         <div class=\"content\">\n            <h1 class=\"content-title\">March 17th, 2021</h1>\n            <p class=\"content-subtitle\">#3165 TUFF BOY</p>\n         </div>\n      </div>\n   </div>\n</ion-content>\n");

/***/ }),

/***/ "A9VP":
/*!***********************************************************!*\
  !*** ./src/app/inspection-list/inspection-list.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inspection-list {\n  padding: 0.5em;\n  display: flex;\n  flex-direction: column;\n}\n.inspection-list .inspection {\n  margin-bottom: 0.5em;\n}\n.index-panel {\n  display: flex;\n  flex-direction: row;\n}\n.medium {\n  font-size: 4em;\n}\n.content {\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n}\n.content .content-title {\n  font-size: 1.25em;\n  margin-top: 0;\n}\n.content .content-subtitle {\n  font-size: 0.75em;\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2luc3BlY3Rpb24tbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0g7QUFBRztFQUNHLG9CQUFBO0FBRU47QUFDQTtFQUNHLGFBQUE7RUFDQSxtQkFBQTtBQUVIO0FBQUE7RUFDRyxjQUFBO0FBR0g7QUFEQTtFQUNHLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQUlIO0FBSEc7RUFDRyxpQkFBQTtFQUNBLGFBQUE7QUFLTjtBQUhHO0VBQ0csaUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUtOIiwiZmlsZSI6Imluc3BlY3Rpb24tbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5zcGVjdGlvbi1saXN0e1xuICAgcGFkZGluZzogMC41ZW07XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIC5pbnNwZWN0aW9ue1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gICB9XG59XG4uaW5kZXgtcGFuZWx7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5tZWRpdW17XG4gICBmb250LXNpemU6IDRlbTtcbn1cbi5jb250ZW50e1xuICAgcGFkZGluZzogMTBweDtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgIC5jb250ZW50LXRpdGxle1xuICAgICAgZm9udC1zaXplOiAxLjI1ZW07XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgfVxuICAgLmNvbnRlbnQtc3VidGl0bGV7XG4gICAgICBmb250LXNpemU6IC43NWVtO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "T8FZ":
/*!*********************************************************!*\
  !*** ./src/app/inspection-list/inspection-list.page.ts ***!
  \*********************************************************/
/*! exports provided: InspectionListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectionListPage", function() { return InspectionListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inspection_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inspection-list.page.html */ "+rIU");
/* harmony import */ var _inspection_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspection-list.page.scss */ "A9VP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let InspectionListPage = class InspectionListPage {
    constructor() { }
    ngOnInit() {
    }
};
InspectionListPage.ctorParameters = () => [];
InspectionListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inspection-list',
        template: _raw_loader_inspection_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inspection_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InspectionListPage);



/***/ }),

/***/ "VZdZ":
/*!***********************************************************!*\
  !*** ./src/app/inspection-list/inspection-list.module.ts ***!
  \***********************************************************/
/*! exports provided: InspectionListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectionListPageModule", function() { return InspectionListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _inspection_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inspection-list-routing.module */ "xwzP");
/* harmony import */ var _inspection_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspection-list.page */ "T8FZ");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");








let InspectionListPageModule = class InspectionListPageModule {
};
InspectionListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _inspection_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["InspectionListPageRoutingModule"]
        ],
        declarations: [_inspection_list_page__WEBPACK_IMPORTED_MODULE_6__["InspectionListPage"]]
    })
], InspectionListPageModule);



/***/ }),

/***/ "xwzP":
/*!*******************************************************************!*\
  !*** ./src/app/inspection-list/inspection-list-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: InspectionListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectionListPageRoutingModule", function() { return InspectionListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _inspection_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspection-list.page */ "T8FZ");




const routes = [
    {
        path: '',
        component: _inspection_list_page__WEBPACK_IMPORTED_MODULE_3__["InspectionListPage"],
    }
];
let InspectionListPageRoutingModule = class InspectionListPageRoutingModule {
};
InspectionListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InspectionListPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=inspection-list-inspection-list-module.js.map