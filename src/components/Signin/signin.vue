
<template>
  <div class="container">
    <div class="signin_container">
      <h1>Sign In</h1>
      <form @submit.prevent="onSubmit">
          <div class="input_field">
              <label for="email">Email</label>
              <input type="email" v-model="formdata.email">
          </div>
          <div class="input_field">
              <label for="password">Password</label>
              <input type="password" v-model="formdata.password">
          </div>
          <button type="submit">Sign In</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formdata: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
        /* eslint-disable no-console */
      console.log(this.formdata);
      
    }
  }
};
</script>
