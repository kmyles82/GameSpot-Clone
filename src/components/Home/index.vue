<template>
  <div>
      <comp-feature />
      <comp-content />
  </div>
</template>

<script>
import compFeature from "./feature";
import compContent from './content';

export default {
  components: {
    compFeature,
    compContent
  }
};
</script>

<style>
</style>