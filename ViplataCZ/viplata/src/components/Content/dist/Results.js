"use strict";
exports.__esModule = true;
exports.Results = void 0;
var react_1 = require("react");
var Functional_1 = require("./Functional");
exports.Results = function () {
    var _a = react_1.useState(false), showResults = _a[0], setShowResults = _a[1];
    var _b = react_1.useState(false), showFullResults = _b[0], setShowFullResults = _b[1];
    react_1.useEffect(function () {
        setShowResults(false);
    }, []);
    var toggleResults = function () {
        setShowResults(!showResults);
    };
    var toggleFullResults = function () {
        setShowFullResults(!showFullResults);
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("button", { onClick: toggleResults }, showResults ? "Скрыть результаты" : "Посчитать ЗП за месяц "),
        showResults && (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("div", null, "\u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0440\u0430\u0441\u0447\u0435\u0442\u0430"),
            react_1["default"].createElement(Functional_1["default"], null),
            react_1["default"].createElement("button", { onClick: toggleFullResults }, showFullResults ? "Скрыть подробный отчет" : "Показать подробный отчет")))));
};
