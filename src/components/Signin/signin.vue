
<template>
  <div class="container">
    <div class="signin_container">
      <h1>Sign In</h1>
      <form @submit.prevent="onSubmit">
          <div 
            class="input_field"
            :class="{invalid: $v.formdata.email.$error}">
              <label for="email">Email</label>
              <input 
                type="email" 
                v-model="formdata.email"
                @blur="$v.formdata.email.touch()">
          </div>
          <div 
            class="input_field"
            :class="{invalid: $v.formdata.password.$error}">
              <label for="password">Password</label>
              <input type="password" v-model="formdata.password">
          </div>
          <button type="submit">Sign In</button>
      </form>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      formdata: {
        email: "kerry@email.com",
        password: "password"
      }
    };
  },
  validations:{
      formdata:{
        email: {
          required,
          email
        },
        password: {
          required,
        }
    }
  },
  methods: {
    onSubmit() {
        /* eslint-disable no-console */
    //   console.log(this.formdata);
    if(){
        this.$store.dispatch('admin/signIn', this.formdata)
    }
      
      
    }
  }
};
</script>

<style>
    .input_field.invalid input,
    .input_field.invalid select{
        border: 1px solid red;
    }
</style>
