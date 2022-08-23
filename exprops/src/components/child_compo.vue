<template>
  <div>
    하위 컴포넌트가 받은 값: {{get_name}} <!--props를 통해 전달 받은 값 화면 등록-->
  </div>
</template>

<script>
  export default {
   //props 속성을 사용하기 위해 하위 컴포넌트에 속성 정의
  props: ['get_name'], //상위 컴포넌트에서 보낸 데이터를 받아서 template에 적용
  }
</script>

<style>

</style>