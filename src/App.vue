<template>
  <div id="app">
    <comp-header>
    </comp-header>
    <div>content</div>

    <comp-footer>
    </comp-footer>
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
