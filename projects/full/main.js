import Vue from "vue";

let VueFormGenerator = require("vue-form-generator");
// Fix between local and exported project
if (VueFormGenerator.default) {
	VueFormGenerator = VueFormGenerator.default;
}

const {
	fieldCheckbox,
	fieldChecklist,
	fieldInput,
	fieldLabel,
	fieldRadios,
	fieldSelect,
	fieldSubmit,
	fieldTextArea,
	fieldUpload,
	fieldCleave,
	fieldDateTimePicker,
	fieldGoogleAddress,
	fieldImage,
	fieldMasked,
	fieldNoUiSlider,
	fieldPikaday,
	fieldRangeSlider,
	fieldSelectEx,
	fieldSpectrum,
	fieldStaticMap,
	fieldSwitch,
	fieldVueMultiSelect
} = VueFormGenerator.fieldsLoader;

// Test custom field
import fieldAwesome from "./fieldAwesome.vue";

Vue.use(VueFormGenerator, {
	fields: [
		fieldAwesome,
		fieldCheckbox,
		fieldChecklist,
		fieldInput,
		fieldLabel,
		fieldRadios,
		fieldSelect,
		fieldSubmit,
		fieldTextArea,
		fieldUpload,
		fieldCleave,
		fieldDateTimePicker,
		fieldGoogleAddress,
		fieldImage,
		fieldMasked,
		fieldNoUiSlider,
		fieldPikaday,
		fieldRangeSlider,
		fieldSelectEx,
		fieldSpectrum,
		fieldStaticMap,
		fieldSwitch,
		fieldVueMultiSelect
	]
});

import VueHighlightJS from "vue-highlightjs";
Vue.use(VueHighlightJS);

import App from "./app.vue";

new Vue({
	render: (h) => h(App)
}).$mount("#app");
