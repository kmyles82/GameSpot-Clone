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
        <wysiwyg
          v-model="formdata.content"
        />
      </div>

      <div 
        class="input_field"
        :class="{ invalid: $v.formdata.rating.$error }"
      >
        
        <label>Rating</label>
        <select
          v-model="formdata.rating"
          @blur="$v.formdata.rating.touch()"
        >
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
        </select>
        <p class="error_label" v-if="$v.formdata.rating.$error">
          You need to select at least 1
        </p>
      </div>

      <button type="submit">Add Post</button>
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
