<template>
  <div id="app">
    <comp-header/>

    <router-view></router-view>

    <comp-footer/>
  </div>
</template> 

<script>
import compHeader from './components/Header/Header'
import compFooter from './components/Footer/Footer'

export default {
  components:{
    compHeader,
    compFooter
  }
}
</script>

<style>
@import './assets/style.css';

</style>
