/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/contexts/AppContext.js":
/*!************************************!*\
  !*** ./src/contexts/AppContext.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppContextProvider: () => (/* binding */ AppContextProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   useAppContext: () => (/* binding */ useAppContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AppContextProvider = ({ children })=>{\n    const [questions, setQuestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [actualQuestionAnswers, setActualQuestionAnswers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [anwersLoading, setAnswersLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [userAnswers, setUserAnswers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const BASE_URL = `https://maimo-prog-2023-exam-dic-backend.vercel.app`;\n    const getQuestions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{\n        setLoading(true);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(`${BASE_URL}/questions`);\n            setQuestions(response.data.questions);\n            setUserAnswers(response.data.questions.map((item)=>{\n                return {\n                    title: \"No answer\"\n                };\n            }));\n            setLoading(false);\n        } catch (error) {\n            console.log(error);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getQuestions();\n    }, [\n        getQuestions\n    ]);\n    const getAnsewers = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (questionId)=>{\n        setActualQuestionAnswers([]);\n        setAnswersLoading(true);\n        try {\n            console.log(\"Question ID:\", questionId);\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(`${BASE_URL}/questions/${questionId}`);\n            setActualQuestionAnswers(response.data.answers);\n            setAnswersLoading(false);\n        } catch (error) {\n            console.log(\"ERROR NO EXISTE SHOW\");\n        }\n    }, []);\n    const questionDataById = (id)=>questions.find((question)=>question.id === parseInt(id) && question);\n    const handleStep = (action)=>{\n        switch(action){\n            case `prev`:\n                if (step > 0) {\n                    setStep(step - 1);\n                    router.push(`/question/${questions[step - 1]?.id}`);\n                }\n                break;\n            case `next`:\n                if (step < questions.length - 1) {\n                    setStep(step + 1);\n                    router.push(`/question/${questions[step + 1]?.id}`);\n                }\n                break;\n            case `resume`:\n                router.push(`/resume`);\n                break;\n            default:\n                break;\n        }\n    };\n    const handleSetAnswer = (answer)=>{\n        const updatedAnswers = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.insertInArray)(userAnswers, step, answer);\n        setUserAnswers(updatedAnswers);\n    };\n    const handleResume = ()=>{\n        const resumeItems = questions.map((question, index)=>{\n            return {\n                question: question,\n                answer: userAnswers[index]\n            };\n        });\n        return resumeItems;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: {\n            questions,\n            loading,\n            getQuestions,\n            getAnsewers,\n            anwersLoading,\n            userAnswers,\n            actualQuestionAnswers,\n            questionDataById,\n            handleStep,\n            step,\n            handleSetAnswer,\n            handleResume\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Antonella\\\\Downloads\\\\maimo-prog-2023-exam-dic-frontend-blank-main\\\\maimo-prog-2023-exam-dic-frontend-blank-main\\\\src\\\\contexts\\\\AppContext.js\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, undefined);\n};\nconst useAppContext = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);\n    if (!context) {\n        throw new Error(\"useAppContexts must be used within a AppContextProvider\");\n    }\n    return context;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContext);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MUMscURBQWFBLENBQUNjLGFBQWFOLE1BQU1pQztRQUN4RDFCLGVBQWUyQjtJQUNqQjtJQUVBLE1BQU1DLGVBQWU7UUFDbkIsTUFBTUMsY0FBY3hDLFVBQVVrQixHQUFHLENBQUMsQ0FBQ1ksVUFBVVc7WUFDM0MsT0FBTztnQkFDTFgsVUFBVUE7Z0JBQ1ZPLFFBQVEzQixXQUFXLENBQUMrQixNQUFNO1lBQzVCO1FBQ0Y7UUFDQyxPQUFPRDtJQUNWO0lBRUEscUJBQ0UsOERBQUMzQyxXQUFXNkMsUUFBUTtRQUNsQkMsT0FBTztZQUNMM0M7WUFDQUU7WUFDQVk7WUFDQVU7WUFDQWhCO1lBQ0FFO1lBQ0FKO1lBQ0FxQjtZQUNBSztZQUNBNUI7WUFDQWdDO1lBQ0FHO1FBQ0Y7a0JBRUN4Qzs7Ozs7O0FBR1AsRUFBRTtBQUVLLE1BQU02QyxnQkFBZ0I7SUFDM0IsTUFBTUMsVUFBVXJELGlEQUFVQSxDQUFDSztJQUMzQixJQUFJLENBQUNnRCxTQUFTO1FBQ1osTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBQ0EsT0FBT0Q7QUFDVCxFQUFFO0FBRUYsaUVBQWVoRCxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJpdmlhLWZyb250ZW5kLy4vc3JjL2NvbnRleHRzL0FwcENvbnRleHQuanM/MzQwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7XG4gIGNyZWF0ZUNvbnRleHQsXG4gIHVzZVN0YXRlLFxuICB1c2VFZmZlY3QsXG4gIHVzZUNvbnRleHQsXG4gIHVzZUNhbGxiYWNrLFxufSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgaW5zZXJ0SW5BcnJheSB9IGZyb20gXCJAL3V0aWxzXCI7XG5cbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBBcHBDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtxdWVzdGlvbnMsIHNldFF1ZXN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IFtzdGVwLCBzZXRTdGVwXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IFthY3R1YWxRdWVzdGlvbkFuc3dlcnMsIHNldEFjdHVhbFF1ZXN0aW9uQW5zd2Vyc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFthbndlcnNMb2FkaW5nLCBzZXRBbnN3ZXJzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBbdXNlckFuc3dlcnMsIHNldFVzZXJBbnN3ZXJzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBCQVNFX1VSTCA9IGBodHRwczovL21haW1vLXByb2ctMjAyMy1leGFtLWRpYy1iYWNrZW5kLnZlcmNlbC5hcHBgO1xuXG4gIGNvbnN0IGdldFF1ZXN0aW9ucyA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtCQVNFX1VSTH0vcXVlc3Rpb25zYCk7XG4gICAgICBzZXRRdWVzdGlvbnMocmVzcG9uc2UuZGF0YS5xdWVzdGlvbnMpXG4gICAgICBzZXRVc2VyQW5zd2VycyhcbiAgICAgICAgcmVzcG9uc2UuZGF0YS5xdWVzdGlvbnMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgdGl0bGU6ICdObyBhbnN3ZXInIH07XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRRdWVzdGlvbnMoKTtcbiAgfSwgW2dldFF1ZXN0aW9uc10pO1xuXG4gIGNvbnN0IGdldEFuc2V3ZXJzID0gdXNlQ2FsbGJhY2soYXN5bmMgKHF1ZXN0aW9uSWQpID0+IHtcbiAgICBzZXRBY3R1YWxRdWVzdGlvbkFuc3dlcnMoW10pO1xuICAgIHNldEFuc3dlcnNMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlF1ZXN0aW9uIElEOlwiLCBxdWVzdGlvbklkKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0JBU0VfVVJMfS9xdWVzdGlvbnMvJHtxdWVzdGlvbklkfWApO1xuICAgICAgc2V0QWN0dWFsUXVlc3Rpb25BbnN3ZXJzKHJlc3BvbnNlLmRhdGEuYW5zd2Vycyk7XG4gICAgICBzZXRBbnN3ZXJzTG9hZGluZyhmYWxzZSk7XG4gICAgICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBOTyBFWElTVEUgU0hPV1wiKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBxdWVzdGlvbkRhdGFCeUlkID0gKGlkKSA9PlxuICAgIHF1ZXN0aW9ucy5maW5kKChxdWVzdGlvbikgPT4gcXVlc3Rpb24uaWQgPT09IHBhcnNlSW50KGlkKSAmJiBxdWVzdGlvbik7XG5cbiAgY29uc3QgaGFuZGxlU3RlcCA9IChhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgY2FzZSBgcHJldmA6XG4gICAgICAgIGlmIChzdGVwID4gMCkge1xuICAgICAgICAgIHNldFN0ZXAoc3RlcCAtIDEpO1xuICAgICAgICAgIHJvdXRlci5wdXNoKGAvcXVlc3Rpb24vJHtxdWVzdGlvbnNbc3RlcCAtIDFdPy5pZH1gKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgYG5leHRgOlxuICAgICAgICBpZiAoc3RlcCA8IHF1ZXN0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgc2V0U3RlcChzdGVwICsgMSk7XG4gICAgICAgICAgcm91dGVyLnB1c2goYC9xdWVzdGlvbi8ke3F1ZXN0aW9uc1tzdGVwICsgMV0/LmlkfWApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBgcmVzdW1lYDpcbiAgICAgICAgcm91dGVyLnB1c2goYC9yZXN1bWVgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2V0QW5zd2VyID0gKGFuc3dlcikgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRBbnN3ZXJzID0gaW5zZXJ0SW5BcnJheSh1c2VyQW5zd2Vycywgc3RlcCwgYW5zd2VyKTtcbiAgICBzZXRVc2VyQW5zd2Vycyh1cGRhdGVkQW5zd2VycylcbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZXN1bWUgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVzdW1lSXRlbXMgPSBxdWVzdGlvbnMubWFwKChxdWVzdGlvbiwgaW5kZXgpPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcXVlc3Rpb246IHF1ZXN0aW9uLFxuICAgICAgICBhbnN3ZXI6IHVzZXJBbnN3ZXJzW2luZGV4XVxuICAgICAgfVxuICAgIH0pXG4gICAgIHJldHVybiByZXN1bWVJdGVtcztcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBxdWVzdGlvbnMsXG4gICAgICAgIGxvYWRpbmcsXG4gICAgICAgIGdldFF1ZXN0aW9ucyxcbiAgICAgICAgZ2V0QW5zZXdlcnMsXG4gICAgICAgIGFud2Vyc0xvYWRpbmcsXG4gICAgICAgIHVzZXJBbnN3ZXJzLC8vYWdyZWdhZG8gcG9yIG1pLCBwYXJhIGVsIGZlZWRiYWNrIGRlIGxhIHJlc3B1ZXN0YSBjbGlja2VhZGFcbiAgICAgICAgYWN0dWFsUXVlc3Rpb25BbnN3ZXJzLFxuICAgICAgICBxdWVzdGlvbkRhdGFCeUlkLFxuICAgICAgICBoYW5kbGVTdGVwLFxuICAgICAgICBzdGVwLFxuICAgICAgICBoYW5kbGVTZXRBbnN3ZXIsXG4gICAgICAgIGhhbmRsZVJlc3VtZSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VBcHBDb250ZXh0ID0gKCkgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXNlQXBwQ29udGV4dHMgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIEFwcENvbnRleHRQcm92aWRlclwiKTtcbiAgfVxuICByZXR1cm4gY29udGV4dDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcENvbnRleHQ7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsInVzZUNhbGxiYWNrIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJpbnNlcnRJbkFycmF5IiwiQXBwQ29udGV4dCIsIkFwcENvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwicXVlc3Rpb25zIiwic2V0UXVlc3Rpb25zIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzdGVwIiwic2V0U3RlcCIsImFjdHVhbFF1ZXN0aW9uQW5zd2VycyIsInNldEFjdHVhbFF1ZXN0aW9uQW5zd2VycyIsImFud2Vyc0xvYWRpbmciLCJzZXRBbnN3ZXJzTG9hZGluZyIsInVzZXJBbnN3ZXJzIiwic2V0VXNlckFuc3dlcnMiLCJyb3V0ZXIiLCJCQVNFX1VSTCIsImdldFF1ZXN0aW9ucyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJ0aXRsZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImdldEFuc2V3ZXJzIiwicXVlc3Rpb25JZCIsImFuc3dlcnMiLCJxdWVzdGlvbkRhdGFCeUlkIiwiaWQiLCJmaW5kIiwicXVlc3Rpb24iLCJwYXJzZUludCIsImhhbmRsZVN0ZXAiLCJhY3Rpb24iLCJwdXNoIiwibGVuZ3RoIiwiaGFuZGxlU2V0QW5zd2VyIiwiYW5zd2VyIiwidXBkYXRlZEFuc3dlcnMiLCJoYW5kbGVSZXN1bWUiLCJyZXN1bWVJdGVtcyIsImluZGV4IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUFwcENvbnRleHQiLCJjb250ZXh0IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/AppContext.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/contexts/AppContext */ \"./src/contexts/AppContext.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_AppContext__WEBPACK_IMPORTED_MODULE_1__]);\n_contexts_AppContext__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_1__.AppContextProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Antonella\\\\Downloads\\\\maimo-prog-2023-exam-dic-frontend-blank-main\\\\maimo-prog-2023-exam-dic-frontend-blank-main\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Antonella\\\\Downloads\\\\maimo-prog-2023-exam-dic-frontend-blank-main\\\\maimo-prog-2023-exam-dic-frontend-blank-main\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTJEO0FBQzdCO0FBRWYsU0FBU0MsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRCxxQkFDRSw4REFBQ0gsb0VBQWtCQTtrQkFDakIsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cml2aWEtZnJvbnRlbmQvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcENvbnRleHRQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHRzL0FwcENvbnRleHRcIjtcbmltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QXBwQ29udGV4dFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXBwQ29udGV4dFByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkFwcENvbnRleHRQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   insertInArray: () => (/* binding */ insertInArray)\n/* harmony export */ });\nconst insertInArray = (originalArray, position, element)=>[\n        ...originalArray.slice(0, position),\n        element,\n        ...originalArray.slice(position + 1)\n    ];\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLGdCQUFnQixDQUFDQyxlQUFlQyxVQUFVQyxVQUFZO1dBQ3ZERixjQUFjRyxLQUFLLENBQUMsR0FBR0Y7UUFDMUJDO1dBQ0dGLGNBQWNHLEtBQUssQ0FBQ0YsV0FBVztLQUNuQztBQUV3QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RyaXZpYS1mcm9udGVuZC8uL3NyYy91dGlscy9pbmRleC5qcz9kNDI3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluc2VydEluQXJyYXkgPSAob3JpZ2luYWxBcnJheSwgcG9zaXRpb24sIGVsZW1lbnQpID0+IFtcbiAgLi4ub3JpZ2luYWxBcnJheS5zbGljZSgwLCBwb3NpdGlvbiksXG4gIGVsZW1lbnQsXG4gIC4uLm9yaWdpbmFsQXJyYXkuc2xpY2UocG9zaXRpb24gKyAxKSxcbl07XG5cbmV4cG9ydCB7IGluc2VydEluQXJyYXkgfTtcbiJdLCJuYW1lcyI6WyJpbnNlcnRJbkFycmF5Iiwib3JpZ2luYWxBcnJheSIsInBvc2l0aW9uIiwiZWxlbWVudCIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/index.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();