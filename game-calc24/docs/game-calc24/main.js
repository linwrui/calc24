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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n</div>\n<div>\n  <app-cards-panel></app-cards-panel>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "game-calc24";
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_cards_panel_cards_panel_cards_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cards-panel/cards-panel/cards-panel.component */ "./src/app/components/cards-panel/cards-panel/cards-panel.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_cards_panel_cards_panel_cards_panel_component__WEBPACK_IMPORTED_MODULE_4__["CardsPanelComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            exports: [_components_cards_panel_cards_panel_cards_panel_component__WEBPACK_IMPORTED_MODULE_4__["CardsPanelComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/cards-panel/cards-panel/cards-panel.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/cards-panel/cards-panel/cards-panel.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <input [value]=\"cards[0]\" (keyup)=\"cards[0]=$event.target.value\">\n  <input [value]=\"cards[1]\" (keyup)=\"cards[1]=$event.target.value\">\n  <input [value]=\"cards[2]\" (keyup)=\"cards[2]=$event.target.value\">\n  <input [value]=\"cards[3]\" (keyup)=\"cards[3]=$event.target.value\">\n  <button (click)=\"confirm()\">确定</button>\n</div>\n<div>\n  <ul>{{outPut.message}}</ul>\n  <ul *ngFor=\"let item of outPut.results\">{{item}}</ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/cards-panel/cards-panel/cards-panel.component.less":
/*!*******************************************************************************!*\
  !*** ./src/app/components/cards-panel/cards-panel/cards-panel.component.less ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZHMtcGFuZWwvY2FyZHMtcGFuZWwvY2FyZHMtcGFuZWwuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/components/cards-panel/cards-panel/cards-panel.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/cards-panel/cards-panel/cards-panel.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CardsPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsPanelComponent", function() { return CardsPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_card_operator_m__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/card-operator.m */ "./src/app/model/card-operator.m.ts");



var CardsPanelComponent = /** @class */ (function () {
    function CardsPanelComponent() {
        this.cards = ["0", "0", "0", "0"];
        this.check = 24;
        this.outPut = {
            results: [],
            message: "请输入数值后按确认键"
        };
    }
    CardsPanelComponent.prototype.confirm = function () {
        this.outPut = new src_app_model_card_operator_m__WEBPACK_IMPORTED_MODULE_2__["CardOperator"](this.cards.map(function (x) { return Number.parseInt(x); })).Operate(this.check);
    };
    CardsPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-cards-panel",
            template: __webpack_require__(/*! ./cards-panel.component.html */ "./src/app/components/cards-panel/cards-panel/cards-panel.component.html"),
            styles: [__webpack_require__(/*! ./cards-panel.component.less */ "./src/app/components/cards-panel/cards-panel/cards-panel.component.less")]
        })
    ], CardsPanelComponent);
    return CardsPanelComponent;
}());



/***/ }),

/***/ "./src/app/model/card-operator.m.ts":
/*!******************************************!*\
  !*** ./src/app/model/card-operator.m.ts ***!
  \******************************************/
/*! exports provided: CardOperator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardOperator", function() { return CardOperator; });
/* harmony import */ var _expression_m__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expression.m */ "./src/app/model/expression.m.ts");

var CardOperator = /** @class */ (function () {
    function CardOperator(cards) {
        this._threshold = 0.0000001;
        this._cards = cards;
    }
    /// <summary>
    /// 对数组a所有可能的排列进行组合运算并返回运算的结果
    /// </summary>
    /// <param name="a"></param>
    /// <returns></returns>
    CardOperator.prototype.Operate = function (checkResult) {
        var results = [];
        for (var ai = 0; ai < this._cards.length; ai++) {
            var a1 = this._cards[ai];
            for (var bi = 0; bi < this._cards.length; bi++) {
                if (bi !== ai) {
                    var a2 = this._cards[bi];
                    for (var ci = 0; ci < this._cards.length; ci++) {
                        if (ci !== ai && ci !== bi) {
                            var a3 = this._cards[ci];
                            var _loop_1 = function (di) {
                                if (di !== ai && di !== bi && di !== ci) {
                                    var a4 = this_1._cards[di];
                                    var tryOperate_1 = this_1.OperateTwoTwo([a1, a2, a3, a4], checkResult);
                                    if (tryOperate_1.success) {
                                        if (!results.some(function (x) { return x === tryOperate_1.expression; })) {
                                            console.log(tryOperate_1.expression);
                                            results.push(tryOperate_1.expression);
                                        }
                                        // return result;
                                    }
                                    tryOperate_1 = this_1.OperateTreeOne([a1, a2, a3, a4], checkResult);
                                    if (tryOperate_1.success) {
                                        if (!results.some(function (x) { return x === tryOperate_1.expression; })) {
                                            console.log(tryOperate_1.expression);
                                            results.push(tryOperate_1.expression);
                                        }
                                        // return result;
                                    }
                                }
                            };
                            var this_1 = this;
                            for (var di = 0; di < this._cards.length; di++) {
                                _loop_1(di);
                            }
                        }
                    }
                }
            }
        }
        return {
            results: results,
            message: "\u8BA1\u7B97\u5B8C\u6210\uFF0C\u5171\u6709 " + results.length + " \u79CD\u8FD0\u7B97\u65B9\u5F0F\u3002"
        };
    };
    /// <summary>
    /// (a1{Exp}a2){Exp}(a3{Exp}a4)
    /// </summary>
    /// <returns></returns>
    CardOperator.prototype.OperateTwoTwo = function (cards, checkResult) {
        var a12 = this.Operates(cards[0], cards[1]);
        var a34 = this.Operates(cards[2], cards[3]);
        for (var _i = 0, a12_1 = a12; _i < a12_1.length; _i++) {
            var a = a12_1[_i];
            for (var _a = 0, a34_1 = a34; _a < a34_1.length; _a++) {
                var b = a34_1[_a];
                var ab = this.Operates(a.GetResult(), b.GetResult());
                for (var _b = 0, ab_1 = ab; _b < ab_1.length; _b++) {
                    var h = ab_1[_b];
                    if (h < this._threshold) {
                        return {
                            expression: h.GetExpressionString(a.FinalExpressionString(), b.FinalExpressionString()) + ("=" + h.GetResult()),
                            success: true
                        };
                    }
                }
            }
        }
        return {
            expression: undefined,
            success: false
        };
    };
    /// <summary>
    /// (a1{Exp}a2{Exp}a3){Exp}a4
    /// </summary>
    /// <returns></returns>
    CardOperator.prototype.OperateTreeOne = function (cards, checkResult) {
        var a12 = this.Operates(cards[0], cards[1]); // (a1{Exp}a2{Exp}a3){Exp}a4
        for (var _i = 0, a12_2 = a12; _i < a12_2.length; _i++) {
            var a = a12_2[_i];
            var a123 = this.Operates(a.GetResult(), cards[2]);
            for (var _a = 0, a123_1 = a123; _a < a123_1.length; _a++) {
                var b = a123_1[_a];
                var ab = this.Operates(b.GetResult(), cards[3]);
                for (var _b = 0, ab_2 = ab; _b < ab_2.length; _b++) {
                    var c = ab_2[_b];
                    if (Math.abs(c.GetResult() - checkResult) < this._threshold) {
                        return {
                            expression: c.GetExpressionString(b.GetExpressionString(a.FinalExpressionString(), b.Num_b), cards[3]) + ("=" + c.GetResult()),
                            success: true
                        };
                    }
                }
            }
        }
        return {
            expression: "",
            success: false
        };
    };
    /// <summary>
    /// 运算两个数的四则运算并将结果作为一个数组返回
    /// </summary>
    /// <param name="num_a">The number a.</param>
    /// <param name="num_b">The number b.</param>
    /// <returns></returns>
    CardOperator.prototype.Operates = function (numA, numB) {
        return [
            new _expression_m__WEBPACK_IMPORTED_MODULE_0__["ExpressionOperator"](numA, numB, _expression_m__WEBPACK_IMPORTED_MODULE_0__["Expressions"].Addition),
            new _expression_m__WEBPACK_IMPORTED_MODULE_0__["ExpressionOperator"](numA, numB, _expression_m__WEBPACK_IMPORTED_MODULE_0__["Expressions"].Subtraction),
            new _expression_m__WEBPACK_IMPORTED_MODULE_0__["ExpressionOperator"](numA, numB, _expression_m__WEBPACK_IMPORTED_MODULE_0__["Expressions"].NSubtraction),
            new _expression_m__WEBPACK_IMPORTED_MODULE_0__["ExpressionOperator"](numA, numB, _expression_m__WEBPACK_IMPORTED_MODULE_0__["Expressions"].Multiplication),
            new _expression_m__WEBPACK_IMPORTED_MODULE_0__["ExpressionOperator"](numA, numB, _expression_m__WEBPACK_IMPORTED_MODULE_0__["Expressions"].Division),
            new _expression_m__WEBPACK_IMPORTED_MODULE_0__["ExpressionOperator"](numA, numB, _expression_m__WEBPACK_IMPORTED_MODULE_0__["Expressions"].NDivision),
        ];
    };
    return CardOperator;
}());



/***/ }),

/***/ "./src/app/model/expression.m.ts":
/*!***************************************!*\
  !*** ./src/app/model/expression.m.ts ***!
  \***************************************/
/*! exports provided: Expressions, ExpressionOperator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expressions", function() { return Expressions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpressionOperator", function() { return ExpressionOperator; });
var Expressions;
(function (Expressions) {
    /// <summary>
    /// 加法(a+b)
    /// </summary>
    Expressions[Expressions["Addition"] = 0] = "Addition";
    /// <summary>
    /// 减法(a-b)
    /// </summary>
    Expressions[Expressions["Subtraction"] = 1] = "Subtraction";
    /// <summary>
    /// 减法(b-a)
    /// </summary>
    Expressions[Expressions["NSubtraction"] = 2] = "NSubtraction";
    /// <summary>
    /// 乘法(a*b)
    /// </summary>
    Expressions[Expressions["Multiplication"] = 3] = "Multiplication";
    /// <summary>
    /// 除法(a/b)
    /// </summary>
    Expressions[Expressions["Division"] = 4] = "Division";
    /// <summary>
    /// 除法(b/a)
    /// </summary>
    Expressions[Expressions["NDivision"] = 5] = "NDivision";
})(Expressions || (Expressions = {}));
var ExpressionOperator = /** @class */ (function () {
    /// <summary>
    /// Initializes a new instance of the <see cref="ExpressionOperator"/> class.
    /// </summary>
    /// <param name="num_a">The number a.</param>
    /// <param name="num_b">The number b.</param>
    /// <param name="expression">The expression.</param>
    function ExpressionOperator(numA, numB, expression) {
        this._a = numA;
        this._b = numB;
        this._expression = expression;
    }
    Object.defineProperty(ExpressionOperator.prototype, "Num_left", {
        /// <summary>
        /// Gets the number left.
        /// </summary>
        /// <value>
        /// The number left.
        /// </value>
        get: function () {
            switch (this._expression) {
                case Expressions.NDivision:
                case Expressions.NSubtraction: return this._b;
                default: return this._a;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpressionOperator.prototype, "Num_right", {
        /// <summary>
        /// Gets the number right.
        /// </summary>
        /// <value>
        /// The number right.
        /// </value>
        get: function () {
            switch (this._expression) {
                case Expressions.NDivision:
                case Expressions.NSubtraction: return this._a;
                default: return this._b;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpressionOperator.prototype, "Num_b", {
        /// <summary>
        /// Gets the number b.
        /// </summary>
        /// <value>
        /// The number b.
        /// </value>
        get: function () { return this._b; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpressionOperator.prototype, "Num_a", {
        /// <summary>
        /// Gets the number a.
        /// </summary>
        /// <value>
        /// The number a.
        /// </value>
        get: function () { return this._a; },
        enumerable: true,
        configurable: true
    });
    /// <summary>
    /// Gets the result.
    /// </summary>
    /// <returns></returns>
    ExpressionOperator.prototype.GetResult = function () {
        switch (this._expression) {
            case Expressions.Addition: return this._a + this._b;
            case Expressions.Subtraction: return this._a - this._b;
            case Expressions.NSubtraction: return this._b - this._a;
            case Expressions.Multiplication: return this._a * this._b;
            case Expressions.Division: return this._b === 0 ? Number.NaN : this._a / this._b;
            case Expressions.NDivision: return this._a === 0 ? Number.NaN : this._b / this._a;
            default: return Number.NaN;
        }
    };
    /// <summary>
    /// Returns a <see cref="System.String" /> that represents this instance.
    /// </summary>
    /// <returns>
    /// A <see cref="System.String" /> that represents this instance.
    /// </returns>
    ExpressionOperator.prototype.ToString = function () {
        return this.FinalExpressionString() + "=" + this.GetResult();
    };
    /// <summary>
    /// Gets the expression string.
    /// </summary>
    /// <returns></returns>
    ExpressionOperator.prototype.FinalExpressionString = function () { return this.GetExpressionString(this._a, this._b); };
    /// <summary>
    /// Gets the expression string.
    /// </summary>
    /// <param name="left">The left.</param>
    /// <param name="right">The right.</param>
    /// <returns></returns>
    ExpressionOperator.prototype.GetExpressionString = function (left, right) {
        left = typeof left === "string" ? "(" + left + ")" : left;
        right = typeof right === "string" ? "(" + right + ")" : right;
        switch (this._expression) {
            case Expressions.Addition: return left + "+" + right;
            case Expressions.Subtraction: return left + "-" + right;
            case Expressions.NSubtraction: return right + "-" + left;
            case Expressions.Multiplication: return left + "*" + right;
            case Expressions.Division: return left + "/" + right;
            case Expressions.NDivision: return right + "/" + left;
            default: return "";
        }
    };
    return ExpressionOperator;
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
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\work_space\respository\linwrui\game-calc24\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map