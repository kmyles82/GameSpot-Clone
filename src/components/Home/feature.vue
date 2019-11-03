<template>
  <div>
    <carousel :per-page="1" :mouse-drag="true" :paginationEnabled="false">
      <slide v-for="(slide,index) in slides" :key="index">
        <div class="slider_bck" :style="{'background': `url(${slide.background})`}">
          <div class="gradient">
            <div class="container">
              <div class="content">
                <app-button linkTo="#" :addClass="['hello','world']" type="link"
                :action="trigger">See Review</app-button>
                <div class="item">{{slide.title}}</div>
              </div>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import SlideOne from "../../assets/images/featured/1.jpg";
import SlideTwo from "../../assets/images/featured/2.jpg";
import SlideThree from "../../assets/images/featured/3.jpg";
import SlideFour from "../../assets/images/featured/4.jpg";

export default {
  data() {
    return {
      slides: [
        {
          title: "Red Dead Redemption",
          background: SlideOne
        },
        {
          title: "Watchdogs 2",
          background: SlideTwo
        },
        {
          title: "Rise of the tomb",
          background: SlideThree
        },
        {
          title: "SpiderMan",
          background: SlideFour
        }
      ]
    };
  },
  methods:{
      trigger(){
          alert('button')
      }
  },
  components: {}
};
</script>

<style>
</style>