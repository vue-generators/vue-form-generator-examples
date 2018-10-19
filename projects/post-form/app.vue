<template>
	<!-- <h1 class="text-center"></h1>
  <div class="container" id="app">
    <div class="panel panel-default">
      <div class="panel-heading">Form</div>
      <div class="panel-body">
        <form action="https://httpbin.org/post" method="POST" enctype="application/x-www-form-urlencoded">
          <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
        </form>
      </div>
    </div>

    <div class="panel panel-default">
      <div class="panel-heading">Model</div>
      <div class="panel-body">
        <pre v-if="model" v-html="prettyJSON(model)"></pre>
      </div>
    </div>

  </div> -->


	<div class="container">
		<h1>Submit the form</h1>
		<div class="row">
			<div class="col-sm-12">
				<form action="https://httpbin.org/post"
					method="POST"
					enctype="application/x-www-form-urlencoded">
					<vue-form-generator :schema="schema"
						:model="model"
						:options="formOptions"
						ref="form"
						:is-new-model="isNewModel"
						@model-updated="modelUpdated"
						@validated="onValidated"></vue-form-generator>
				</form>
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
/* eslint no-console: 0 */
import mixinUtils from "../../mixins/utils.js";
let VueFormGenerator = require("vue-form-generator");
// Fix between local and exported project
if (VueFormGenerator.default) {
	VueFormGenerator = VueFormGenerator.default;
}
const validators = VueFormGenerator.validators;

export default {
	mixins: [mixinUtils],

	data() {
		return {
			isNewModel: false,

			selected: [],

			model: {
				id: 1,
				name: "John Doe",
				password: "J0hnD03!x4",
				skills: "Javascript",
				email: "john.doe@gmail.com",
				status: true
			},

			schema: {
				fields: [
					{
						type: "input",
						inputType: "text",
						label: "ID",
						model: "id",
						inputName: "id",
						readonly: true,
						featured: false,
						disabled: true
					},
					{
						type: "input",
						inputType: "text",
						label: "Name",
						model: "name",
						inputName: "name",
						readonly: false,
						featured: true,
						required: true,
						disabled: false,
						placeholder: "User's name",
						validator: validators.string
					},
					{
						type: "input",
						inputType: "password",
						label: "Password",
						model: "password",
						inputName: "password",
						min: 6,
						required: true,
						hint: "Minimum 6 characters",
						validator: validators.string
					},
					{
						type: "input",
						inputType: "email",
						label: "E-mail",
						model: "email",
						inputName: "email",
						placeholder: "User's e-mail address",
						validator: validators.email
					},
					{
						type: "select",
						label: "Skills",
						model: "skills",
						inputName: "skills",
						required: true,
						values: ["HTML5", "Javascript", "CSS3", "CoffeeScript", "AngularJS", "ReactJS", "VueJS"],
						validator: validators.string
					},
					{
						type: "upload",
						label: "Photo",
						model: "photo",
						inputName: "photo",
						onChanged(model, schema, event) {
							console.log(model, schema, event);
						}
					},
					{
						type: "checkbox",
						label: "Status",
						model: "status",
						inputName: "status",
						readonly: false,
						featured: false,
						disabled: false,
						default: true
					},
					{
						type: "submit",
						label: "",
						buttonText: "Submit",
						validateBeforeSubmit: true
					}
				]
			},

			formOptions: {
				validateAfterLoad: false,
				validateAfterChanged: false
			}
		};
	},

	methods: {
		showWarning() {
			if (this.$refs.form && this.$refs.form.errors) {
				return this.$refs.form.errors.length > 0;
			}
		},

		onValidated(res, errors) {
			console.log("VFG validated:", res, errors);
		},

		modelUpdated(newVal, schema) {
			console.log("main model has updated", newVal, schema);
		}
	},

	mounted() {
		this.$nextTick(function() {
			window.app = this;
		});
	}
};
</script>

<style lang="scss">
@import "../../style.scss";
</style>

<style>
html {
	font-family: Tahoma;
	font-size: 14px;
}

body {
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-size: 14px;
	line-height: 1.42857143;
	color: #333;
}

pre {
	overflow: auto;
}
pre .string {
	color: #885800;
}
pre .number {
	color: blue;
}
pre .boolean {
	color: magenta;
}
pre .null {
	color: red;
}
pre .key {
	color: green;
}

.container {
	max-width: 970px;
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
}

h1 {
	text-align: center;
	font-size: 36px;
	margin-top: 20px;
	margin-bottom: 10px;
	font-weight: 500;
}

fieldset {
	border: 0;
}

.panel {
	margin-bottom: 20px;
	background-color: #fff;
	border: 1px solid transparent;
	border-radius: 4px;
	-webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
	border-color: #ddd;
}

.panel-heading {
	color: #333;
	background-color: #f5f5f5;
	border-color: #ddd;

	padding: 10px 15px;
	border-bottom: 1px solid transparent;
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
}

.panel-body {
	padding: 15px;
}
</style>
