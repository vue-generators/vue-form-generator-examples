<template>
	<div class="container">
		<h1>Multiselect</h1>
		<div class="row">
			<div class="col-sm-12">
				<vue-form-generator :schema="schema"
					:model="model"
					:options="formOptions"></vue-form-generator>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<pre v-highlightjs="prettyModel"><code class="json"></code></pre>
			</div>
		</div>
	</div>
</template>

<script>
import mixinUtils from "../../mixins/utils.js";

import Vue from "vue";
import Multiselect from "vue-multiselect";
Vue.component("multiselect", Multiselect);

export default {
	mixins: [mixinUtils],

	data() {
		return {
			model: {
				skills: ["Javascript", "VueJS"]
			},

			schema: {
				fields: [
					{
						type: "vueMultiSelect",
						label: "Skills",
						model: "skills",
						fieldOptions: {
							multiple: true
						},
						values: ["Javascript", "VueJS", "CSS3", "HTML5"]
					}
				]
			},

			formOptions: {}
		};
	},

	created() {
		window.app = this;
	}
};
</script>

<style lang="scss">
@import "../../style.scss";
</style>
