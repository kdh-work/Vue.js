<template>
  <div id="child1Template">
    <button v-on:click="clickEvent">Child1 Button</button>
    <div>{{ currentTime }}</div>
  </div>
</template>

<script>
  var eventBus=new Vue(); //정보전달을 위한 이벤트 버스 객체 구현
  Vue.component('child2-component', 
  {
    template: '#child1Template',
    data() {
      return{currentTime : ''};
    },
    methods: {
      clickEvent() {
        var d=new Date();
        var t=d.toLocaleTimeString() + " " + d.getMilliseconds() + "ms";
        eventBus.$emit('click1',t);
        this.currentTime=t;
      }
    }
  })
</script>

<style>
</style>