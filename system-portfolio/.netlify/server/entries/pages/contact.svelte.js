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
  default: () => Contact
});
module.exports = __toCommonJS(stdin_exports);
var import_index_43ce8bc5 = require("../../chunks/index-43ce8bc5.js");
var contact_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "section.svelte-59las2{background:#444444;min-height:100vh}")();
const css = {
  code: "section.svelte-59las2{background:#444444;min-height:100vh}",
  map: null
};
const Contact = (0, import_index_43ce8bc5.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Portfolio | Contact</title>`, ""}<meta name="${"description"}" content="${"Send me a message"}" data-svelte="svelte-7wi24x">`, ""}

<section class="${"content svelte-59las2"}"><form></form>
</section>`;
});
