(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,_,t){"use strict";t.d(_,"a",function(){return a}),t.d(_,"b",function(){return r}),t.d(_,"c",function(){return n}),t.d(_,"d",function(){return s});var a="CLEAR",r="SET_DIGIT",n="SET_OPERATOR",s="SET_RESULT"},14:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_eugene_Eugene_Project2019_i10_calculator_react_redux_typescript_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(15),_home_eugene_Eugene_Project2019_i10_calculator_react_redux_typescript_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(16),_home_eugene_Eugene_Project2019_i10_calculator_react_redux_typescript_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(19),_home_eugene_Eugene_Project2019_i10_calculator_react_redux_typescript_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(17),_home_eugene_Eugene_Project2019_i10_calculator_react_redux_typescript_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(21),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),react_redux__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(3),_actions__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(6),Buttons=function(_Component){function Buttons(){var _getPrototypeOf2,_this;Object(_home_eugene_Eugene_Project2019_i10_calculator_react_redux_typescript_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Buttons);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=Object(_home_eugene_Eugene_Project2019_i10_calculator_react_redux_typescript_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,(_getPrototypeOf2=Object(_home_eugene_Eugene_Project2019_i10_calculator_react_redux_typescript_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(Buttons)).call.apply(_getPrototypeOf2,[this].concat(args))),_this.setDigit=function(e){return function(){var _=_this.props,t=_.firstOperand,a=_.secondOperand,r=_.operator;null===t&&"0"===e||(null===t&&_this.props.setDigit({firstOperand:Number(e),displayValue:String(e)}),null!==t&&""===r&&_this.props.setDigit({firstOperand:Number(t+e),displayValue:String(t+e)}),null!==t&&""!==r&&_this.props.setDigit({secondOperand:Number(Number(a)+e),displayValue:_this.props.displayValue+e}))}},_this.setOperator=function(e){return function(){var _=_this.props,t=_.firstOperand,a=_.secondOperand,r=_.displayValue,n=Number(r);if((null!==t||null!==a)&&0!==t){if(null===t){var s=Number(t);_this.props.setOperator({firstOperand:Number(t)+s})}_this.props.setOperator({firstOperand:Number(r),operator:e,displayValue:n+e})}}},_this.clear=function(){_this.props.clear()},_this.setResult=function(){var _this$props3=_this.props,firstOperand=_this$props3.firstOperand,operator=_this$props3.operator,secondOperand=_this$props3.secondOperand,displayValue=_this$props3.displayValue;if(null!==firstOperand&&""!==operator&&null!==secondOperand&&0!==secondOperand){var res=eval(displayValue);_this.props.setResult({firstOperand:null,secondOperand:null,operator:"",displayValue:res.toString().length>7?res.toFixed(7):res})}"/"===operator&&0===secondOperand&&_this.props.setResult({firstOperand:null,secondOperand:null,operator:"",displayValue:"Error: / to 0"})},_this}return Object(_home_eugene_Eugene_Project2019_i10_calculator_react_redux_typescript_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Buttons,_Component),Object(_home_eugene_Eugene_Project2019_i10_calculator_react_redux_typescript_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Buttons,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"d-flex flex-wrap"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"btn w-25 btn-lg btn-primary",onClick:this.setDigit("9")},"9"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"btn w-25 btn-lg btn-primary",onClick:this.setDigit("8")},"8"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"btn w-25 btn-lg btn-primary",onClick:this.setDigit("7")},"7"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"btn w-25 btn-lg btn-warning",onClick:this.setOperator("-")},"\u2212"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"btn w-25 btn-lg btn-primary",onClick:this.setDigit("6")},"6"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"btn w-25 btn-lg btn-primary",onClick:this.setDigit("5")},"5"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"btn w-25 btn-lg btn-primary",onClick:this.setDigit("4")},"4"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"btn w-25 btn-lg btn-warning",onClick:this.setOperator("/")},"\xf7"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"btn w-25 btn-lg btn-primary",onClick:this.setDigit("3")},"3"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"btn w-25 btn-lg btn-primary",onClick:this.setDigit("2")},"2"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"btn w-25 btn-lg btn-primary",onClick:this.setDigit("1")},"1"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"btn w-25 btn-lg btn-warning",onClick:this.setOperator("*")},"\xd7"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"btn w-25 btn-lg btn-primary",onClick:this.setDigit("0")},"0"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"btn w-25 btn-lg btn-danger ",onClick:this.clear},"C"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"btn w-25 btn-lg btn-warning",onClick:this.setResult},"="),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"btn w-25 btn-lg btn-warning",onClick:this.setOperator("+")},"+"))}}]),Buttons}(react__WEBPACK_IMPORTED_MODULE_5__.Component),mapStateToProps=function(e){return{firstOperand:e.firstOperand,secondOperand:e.secondOperand,displayValue:e.displayValue,operator:e.operator}},mapDispatchToProps=function(e){return{clear:function(){return e(Object(_actions__WEBPACK_IMPORTED_MODULE_7__.a)())},setDigit:function(_){return e(Object(_actions__WEBPACK_IMPORTED_MODULE_7__.b)(_))},setOperator:function(_){return e(Object(_actions__WEBPACK_IMPORTED_MODULE_7__.c)(_))},setResult:function(_){return e(Object(_actions__WEBPACK_IMPORTED_MODULE_7__.d)(_))}}};__webpack_exports__.a=Object(react_redux__WEBPACK_IMPORTED_MODULE_6__.b)(mapStateToProps,mapDispatchToProps)(Buttons)},22:function(e,_,t){e.exports=t(35)},29:function(e,_,t){},35:function(e,_,t){"use strict";t.r(_);var a=t(0),r=t.n(a),n=t(12),s=t.n(n),l=(t(27),t(29),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mb-2 d-flex justify-content-between align-items-center"},r.a.createElement("h3",{className:"m-0"},"CITIZEN"),r.a.createElement("h5",{className:"m-0"},"SDC-810BN")),r.a.createElement("div",{className:"mb-4 d-flex justify-content-between align-items-center"},r.a.createElement("div",null,"10 DIGIT"),r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{className:"card bg-secondary p-3"}),r.a.createElement("div",{className:"card bg-secondary p-3"}),r.a.createElement("div",{className:"card bg-secondary p-3"}),r.a.createElement("div",{className:"card bg-secondary p-3"}),r.a.createElement("div",{className:"card bg-secondary p-3"}))))}),c=t(3),o=function(e){return r.a.createElement("h1",{className:"card py-2 px-3 text-right mb-4 text-dark"},e.displayValue)},i=Object(c.b)(function(e){return{displayValue:e.displayValue}},null)(o),u=t(14),p=function(){return r.a.createElement("div",{className:"calculator m-auto"},r.a.createElement("div",{className:"card p-4 bg-dark text-light"},r.a.createElement(l,null),r.a.createElement(i,null),r.a.createElement(u.a,null)))},d=t(5),E=t(20),b=t(1),m={firstOperand:null,secondOperand:null,displayValue:"0",operator:""},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,_=arguments.length>1?arguments[1]:void 0;return _.type===b.a?m:_.type===b.b||_.type===b.c||_.type===b.d?Object(E.a)({},e,_.payload):e},D=t(18),P=t.n(D),f=Object(d.c)(O,Object(d.a)(P.a));s.a.render(r.a.createElement(c.a,{store:f},r.a.createElement(p,null)),document.getElementById("root"))},6:function(e,_,t){"use strict";t.d(_,"a",function(){return r}),t.d(_,"b",function(){return n}),t.d(_,"c",function(){return s}),t.d(_,"d",function(){return l});var a=t(1),r=function(){return{type:a.a}},n=function(e){return{type:a.b,payload:e}},s=function(e){return{type:a.c,payload:e}},l=function(e){return{type:a.d,payload:e}}}},[[22,2,1]]]);
//# sourceMappingURL=main.236d2084.chunk.js.map