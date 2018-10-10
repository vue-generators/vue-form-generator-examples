import Vue from "vue";

let VueFormGenerator = require("vue-form-generator");
// Fix between local and exported project
if (VueFormGenerator.default) {
	VueFormGenerator = VueFormGenerator.default;
}

import { fieldCheckbox, fieldInput, fieldSubmit } from "vue-form-generator/utils/fieldsLoader.js";
Vue.use(VueFormGenerator, {
	fields: [fieldCheckbox, fieldInput, fieldSubmit]
});

import VueHighlightJS from "vue-highlightjs";
Vue.use(VueHighlightJS);

import App from "./app.vue";

new Vue({
	render: (h) => h(App)
}).$mount("#app");
