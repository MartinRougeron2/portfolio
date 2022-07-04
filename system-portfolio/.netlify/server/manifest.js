var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["favicon.png", "icon.svg", "robots.txt", "svelte-welcome.png", "svelte-welcome.webp"]),
  mimeTypes: { ".png": "image/png", ".svg": "image/svg+xml", ".txt": "text/plain", ".webp": "image/webp" },
  _: {
    entry: { "file": "start-2036d9ea.js", "js": ["start-2036d9ea.js", "chunks/index-602213f4.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/9.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/10.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/11.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "endpoint",
        id: "stores",
        pattern: /^\/stores\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/stores.js")))
      },
      {
        type: "endpoint",
        id: "scene",
        pattern: /^\/scene\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/scene.js")))
      },
      {
        type: "endpoint",
        id: "projects",
        pattern: /^\/projects\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/projects.js")))
      },
      {
        type: "page",
        id: "about-me",
        pattern: /^\/about-me\/?$/,
        names: [],
        types: [],
        path: "/about-me",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        id: "area",
        pattern: /^\/area\/?$/,
        names: [],
        types: [],
        path: "/area",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        id: "babel",
        pattern: /^\/babel\/?$/,
        names: [],
        types: [],
        path: "/babel",
        shadow: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        id: "bomberman",
        pattern: /^\/bomberman\/?$/,
        names: [],
        types: [],
        path: "/bomberman",
        shadow: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        id: "contact",
        pattern: /^\/contact\/?$/,
        names: [],
        types: [],
        path: "/contact",
        shadow: null,
        a: [0, 7],
        b: [1]
      },
      {
        type: "page",
        id: "dashboard",
        pattern: /^\/dashboard\/?$/,
        names: [],
        types: [],
        path: "/dashboard",
        shadow: null,
        a: [0, 8],
        b: [1]
      },
      {
        type: "page",
        id: "my-rpg",
        pattern: /^\/my-rpg\/?$/,
        names: [],
        types: [],
        path: "/my-rpg",
        shadow: null,
        a: [0, 9],
        b: [1]
      },
      {
        type: "page",
        id: "nanotekspice",
        pattern: /^\/nanotekspice\/?$/,
        names: [],
        types: [],
        path: "/nanotekspice",
        shadow: null,
        a: [0, 10],
        b: [1]
      },
      {
        type: "page",
        id: "plazza",
        pattern: /^\/plazza\/?$/,
        names: [],
        types: [],
        path: "/plazza",
        shadow: null,
        a: [0, 11],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
