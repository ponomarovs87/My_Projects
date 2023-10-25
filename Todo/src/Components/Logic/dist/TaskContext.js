"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.TaskProvider = exports.TaskContext = void 0;
var react_1 = require("react");
var editTasksFunc_1 = require("./editTasksFunc");
var toogleTask_1 = require("./toogleTask");
var deleteTask_1 = require("./deleteTask");
var load_1 = require("../Storage/load");
var setItem_1 = require("../Storage/setItem");
exports.TaskContext = react_1.createContext({
    tasks: [],
    editTask: function () { },
    finishTaskControl: function () { },
    del: function () { },
    onSubmit: function () { }
});
exports.TaskProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(load_1.load()), tasks = _b[0], setTasks = _b[1];
    var editTask = react_1.useCallback(function (taskId, textContent, deadline) {
        setTasks(function (prevTasks) {
            return editTasksFunc_1.editTasksFunc(taskId, prevTasks, textContent, deadline);
        });
    }, []);
    var finishTaskControl = react_1.useCallback(function (task) {
        setTasks(function (prevTasks) {
            return toogleTask_1.toogleTask(task, prevTasks);
        });
    }, []);
    var del = react_1.useCallback(function (task) {
        setTasks(function (prevTasks) {
            return deleteTask_1.deleteTask(task, prevTasks);
        });
    }, []);
    var onSubmit = react_1.useCallback(function (task) {
        setTasks(function (prevTasks) { return __spreadArrays(prevTasks, [task]); });
    }, []);
    react_1.useEffect(function () {
        setItem_1.setItem(tasks);
    }, [tasks]);
    return (console.log());
    react_1["default"].createElement(exports.TaskContext.Provider, { value: {
            tasks: tasks,
            editTask: editTask,
            finishTaskControl: finishTaskControl,
            del: del,
            onSubmit: onSubmit
        } }, children);
};
;
;
