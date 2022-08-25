<template>
  <div id="child2Template">
    <ul>
      <li v-for="t in timelist" v-bind:key="t">{{ t }}</li>
    </ul>
  </div>
</template>

<script>
  Vue.component('child2-component',
  {
    template: '#child2Template',
    data() {
      return{
        timelist: []
      };
    },
    created() {
      eventBus.$on('click1', this.child1Click);
    },
    methods: {
      child1Click(time) {
        this.timelist.push(time);
      }
    }
  }
  )
</script>

<style>
</style>