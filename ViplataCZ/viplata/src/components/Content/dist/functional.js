"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Functional() {
    var _a = react_1.useState(false), showFullInfo = _a[0], setShowFullInfo = _a[1];
    var toggleFullInfo = function () {
        setShowFullInfo(!showFullInfo);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", null, "\u0442\u0440\u0430\u043B\u044F\u043B\u044F \u0442\u0438\u043F\u043E \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u043E \u043F\u0440\u0438\u043C\u0435\u0440\u0443"),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("span", null, "\u043F\u0435\u0440\u0432\u044B\u0439 \u0442\u0438\u043F \u0414\u0430\u0442\u0430 \u044F \u0434\u0443\u043C\u0430\u044E"),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("span", null, "\u0412\u0442\u043E\u0440\u043E\u0439 \u043A\u043E\u043B-\u0432\u043E \u043E\u0442\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0445 \u0447\u0430\u0441\u043E\u0432 \u0437\u0430 \u0434\u0435\u043D\u044C \u0443\u0436\u0435 \u0441 \u0432\u044B\u0447\u0435\u0442\u043E\u043C \u043F\u0435\u0440\u0435\u0440\u044B\u0432\u0430"),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("span", null, "\u0422\u0440\u0435\u0442\u0438\u0439 \u043A\u043E\u043B-\u0432\u043E \u043E\u0442\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0445 \u043F\u0440\u0435\u0441\u0447\u0430\u0441\u043E\u0432 \u0437\u0430 \u0434\u0435\u043D\u044C"),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("span", null, "\u0427\u0435\u0442\u0432\u0435\u0440\u0442\u043E\u0435 \u041E\u0440\u0438\u0442\u0435\u0440\u043E\u0432\u0430\u0447\u043D\u0430\u044F \u0437\u043F \u0417\u0410 \u0441\u0443\u0442\u043A\u0438"),
            react_1["default"].createElement("br", null),
            showFullInfo && (react_1["default"].createElement("div", null,
                react_1["default"].createElement("span", null, "\u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0435 \u043A\u043E\u043B-\u0432\u043E \u0447\u0430\u0441\u043E\u0432 \u0432 \u0434\u0435\u043D\u044C"),
                react_1["default"].createElement("br", null),
                react_1["default"].createElement("span", null, "\u041A\u043E\u043B-\u0432\u043E \u043D\u043E\u0447\u043D\u044B\u0445 \u0447\u0430\u0441\u043E\u0432"),
                react_1["default"].createElement("br", null),
                react_1["default"].createElement("span", null, "\u0414\u043E\u0431\u0430\u0432\u043A\u0430 \u0432 \u0441\u0443\u0431\u0431\u043E\u0442\u0443"),
                react_1["default"].createElement("br", null),
                react_1["default"].createElement("span", null, "\u041A\u043E\u043B-\u0432\u043E \u0447\u0430\u0441\u043E\u0432 \u043E\u0442\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0445 \u0432 \u043F\u0440\u0430\u0437\u0434\u043D\u0438\u043A"),
                react_1["default"].createElement("br", null)))),
        react_1["default"].createElement("button", { onClick: toggleFullInfo }, showFullInfo ? "Скрыть подробный отчет" : "Показать подробный отчет")));
}
exports["default"] = Functional;
