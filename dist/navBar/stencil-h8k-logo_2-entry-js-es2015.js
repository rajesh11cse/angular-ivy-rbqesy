(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-h8k-logo_2-entry-js"],{

/***/ "./node_modules/h8k-components/dist/esm/h8k-logo_2.entry.js":
/*!******************************************************************!*\
  !*** ./node_modules/h8k-components/dist/esm/h8k-logo_2.entry.js ***!
  \******************************************************************/
/*! exports provided: h8k_logo, h8k_navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h8k_logo", function() { return H8kLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h8k_navbar", function() { return H8kNavbar; });
/* harmony import */ var _index_c1b346e5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c1b346e5.js */ "./node_modules/h8k-components/dist/esm/index-c1b346e5.js");


const H8kLogo = class {
    constructor(hostRef) {
        Object(_index_c1b346e5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_c1b346e5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEUOFB4A6mT///8AAAALERwOABgABRQABhb6+vtTVlsHtFAA7mUHrU4OABsPABYA52Pc3d0AAA8AAAbX19imp6r09PUeIysKgD4KdjsHsU/DxMaTlJfm5ucUGiMKcDkcwJDzAAABFklEQVR4nO3cvVKDQBSAUQRiUIwY4m/UvP9jpogU4WYcZouV4Dklews+yp3hFgUAAAAAAAAAAAAAAAAAAAAAgyqaNFQPZ5tUuQJ3ZXOu3IXE6jkMvbz+JG7e2i5F+54nsV6XUSx8ikN3t6ez1X17k6L9WGUqbP6q8EGhQoUKFSpUqFChQoUKFSpUqFChQoUK519Yjyi8usJJFCpUqFChQoUKFSpUqFChQoWzLwyPLn2Fqy6stiOLu6dZ/k3UP7gvVahQoUKFChUqVKhQoUKFChUqVKhQocJYGN99Wf/jF9U+rEvYh8L+czzUfH0POxUOSSsVuu6QbW3ElL0Y/W97MR7T5AoEAAAAAAAAAAAAAAAAAAAAmLUjSkxXL4VH7TgAAAAASUVORK5CYII=", class: "logo" }));
    }
};

const h8kNavbarCss = "h8k-logo{height:44px;line-height:44px}";

const H8kNavbar = class {
    constructor(hostRef) {
        Object(_index_c1b346e5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        let navClassList = `app-header`;
        if (this.fixed) {
            navClassList += ' fixed';
        }
        return (Object(_index_c1b346e5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("nav", { class: navClassList }, Object(_index_c1b346e5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "layout-row align-items-center justify-content-center" }, Object(_index_c1b346e5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h8k-logo", null), Object(_index_c1b346e5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h4", { id: "app-title", class: "app-title ml-16 my-0" }, this.header))));
    }
};
H8kNavbar.style = h8kNavbarCss;




/***/ })

}]);
//# sourceMappingURL=stencil-h8k-logo_2-entry-js-es2015.js.map