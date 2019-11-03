<template>
    <div>
        <router-link 
        :to="linkTo"
        :class="['button_default',...addClass]"
        :style="ovStyle"
        v-if="type == 'link'"
        >
            <slot/>
        </router-link>

        <div
        v-if="type === 'btn'"
        :class="['button_default',...addClass]"
        :style="ovStyle"
        @click="action">
            <slot/>
        </div>

        </div>
</template>

<script>
    export default {
        props:['linkTo','addClass','ovStyle','type','action']
    }
</script>

<style lang="scss" scoped>

</style>