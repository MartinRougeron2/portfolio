var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_43ce8bc5 = require("../../chunks/index-43ce8bc5.js");
var import_scene = require("../endpoints/scene.js");
var import_projects = require("../endpoints/projects.js");
var import_three = require("three");
var import_OrbitControls = require("three/examples/jsm/controls/OrbitControls.js");
var import_MathUtils = require("three/src/math/MathUtils.js");
var Project_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".project.svelte-4owv2z{top:25vh;right:10px;position:absolute;width:min(400px, calc(95vw - 10px));color:white;font-family:Arial, Helvetica, sans-serif;-webkit-backdrop-filter:blur(10px);background:rgba(255, 255, 255, 0.3);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);transition:color 0.2s linear;border:1px solid white;border-radius:5px}.title.svelte-4owv2z{font-weight:900;font-size:1.6rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none}.description.svelte-4owv2z{font-weight:600;font-size:1rem;letter-spacing:0.05em;text-decoration:none}.github-link.svelte-4owv2z{font-weight:900;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;background:blue;vertical-align:center;border-radius:20px}.github-link.svelte-4owv2z:hover{background:rgba(0, 0, 255, 0.4)}")();
const css$1 = {
  code: ".project.svelte-4owv2z{top:25vh;right:10px;position:absolute;width:min(400px, calc(95vw - 10px));color:white;font-family:Arial, Helvetica, sans-serif;-webkit-backdrop-filter:blur(10px);background:rgba(255, 255, 255, 0.3);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);transition:color 0.2s linear;border:1px solid white;border-radius:5px}.title.svelte-4owv2z{font-weight:900;font-size:1.6rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none}.description.svelte-4owv2z{font-weight:600;font-size:1rem;letter-spacing:0.05em;text-decoration:none}.github-link.svelte-4owv2z{font-weight:900;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;background:blue;vertical-align:center;border-radius:20px}.github-link.svelte-4owv2z:hover{background:rgba(0, 0, 255, 0.4)}",
  map: null
};
const Project = (0, import_index_43ce8bc5.c)(($$result, $$props, $$bindings, slots) => {
  setInterval(() => {
  }, 300);
  $$result.css.add(css$1);
  return `<section><div class="${"project p-4 svelte-4owv2z"}">${`<div class="${"title svelte-4owv2z"}">Click on planets !</div>`}</div>
</section>`;
});
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "div.svelte-1ntcugf{width:100vw;height:100vh;background:#11e8bb;background:linear-gradient(\n			to bottom,\n			#11e8bb 0%,\n			#8200c9 100%\n		);overflow:hidden}.loading.svelte-1ntcugf{position:absolute;left:45vw;top:50vh;background:transparent;width:200px;height:200px;color:white;font-weight:900;font-size:1.6rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear;font-family:Arial, Helvetica, sans-serif;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}")();
const css = {
  code: "div.svelte-1ntcugf{width:100vw;height:100vh;background:#11e8bb;background:linear-gradient(\n			to bottom,\n			#11e8bb 0%,\n			#8200c9 100%\n		);overflow:hidden}.loading.svelte-1ntcugf{position:absolute;left:45vw;top:50vh;background:transparent;width:200px;height:200px;color:white;font-weight:900;font-size:1.6rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear;font-family:Arial, Helvetica, sans-serif;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}",
  map: null
};
const Routes = (0, import_index_43ce8bc5.c)(($$result, $$props, $$bindings, slots) => {
  let el;
  let animation = true;
  let display = "display: none";
  let displayLoading = "display: inline";
  setTimeout(() => {
    animation = false;
  }, 2e3);
  setTimeout(() => {
    displayLoading = display;
    display = "display: block";
  }, 200);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Portfolio</title>`, ""}<meta name="${"description"}" content="${"My works"}" data-svelte="svelte-1mpgq85">`, ""}

<section><div class="${"svelte-1ntcugf"}"><div class="${"loading svelte-1ntcugf"}"${(0, import_index_43ce8bc5.b)("style", displayLoading, 0)}>Reaching the planets...
		</div>
		<div${(0, import_index_43ce8bc5.b)("style", display, 0)} class="${"svelte-1ntcugf"}"><canvas${(0, import_index_43ce8bc5.b)("this", el, 0)}></canvas></div>
		${!animation ? `${(0, import_index_43ce8bc5.v)(Project, "Project").$$render($$result, {}, {}, {})}` : ``}</div>
</section>`;
});
