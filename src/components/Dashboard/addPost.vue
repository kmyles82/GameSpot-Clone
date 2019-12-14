<template>
  <div class="dashboard_form">
    <h1>Add posts</h1>
    <form @submit.prevent="submitHandler">
      <div class="input_field" :class="{ invalid: $v.formdata.title.$error }">
        <label>Title</label>
        <input
          type="text"
          v-model="formdata.title"
          @blur="$v.formdata.title.$touch()"
        />
        <p class="error_label" v-if="$v.formdata.title.$error">
          This input is required
        </p>
      </div>

      <div class="input_field" :class="{ invalid: $v.formdata.desc.$error }">
        <label>Description</label>
        <input
          type="text"
          v-model="formdata.desc"
          @blur="$v.formdata.desc.$touch()"
        />
        <p class="error_label" v-if="$v.formdata.desc.$error">
          This input is required
        </p>
        <p class="error_label" v-if="!$v.formdata.desc.maxLength">
          Must not be greater than
          {{ $v.formdata.desc.$params.maxLength.max }} characters
        </p>
      </div>

      <div class="input_field">
        <wysiwyg/>
      </div>
    </form>
  </div>
</template>

<script>
import { required, maxLength } from "vuelidate/lib/validators";
import wysiwyg from "vue-wysiwyg";

export default {
  data() {
    return {
      formdata: {
        title: "",
        desc: "",
        content: "",
        rating: ""
      }
    };
  },
  validations: {
    formdata: {
      title: {
        required
      },
      desc: {
        required,
        maxLength: maxLength(5)
      },
      rating: {
        required
      }
    }
  },
  methods: {
    submitHandler() {}
  }
};
</script>

<style scoped>
@import "~vue-wysiwyg/dist/vueWysiwyg.css";

.input_field.invalid input,
.input_field.invalid select {
  border: 1px solid red;
}
</style>
