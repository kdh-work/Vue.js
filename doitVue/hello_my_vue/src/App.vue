<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput><!--이벤트 수신(v-on:하위 컴포넌트 이벤트명="상위 컴포넌트 이벤트명")-->
    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
  props:['propsdata'],
  data() {
    return {
      todoItems: []
    }
  },
  created() {
    if(localStorage.length>0) {
      for(var i=0; i<localStorage.length; i++) {
        this.todoItems.push(localStorage.key(1));
      }
    }
  },
  methods: {
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    },
    addTodo(todoItem) {
      //로컬 스토리지에 데이터를 추가하는 로직
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index,1);
    }
  },
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter 
  }
}
</script>

<style>
  body {
    text-align: center; /*애플리케이션 전체에서 사용하는 텍스트의 정렬 방식을 선택 */
    background-color:#F6F6F8 /*애플리케이션 전체의 배경 색을 꾸미기 위해 지정*/
    }
  input {
    border-style: groove; /*할 일을 입력하는 인풋 박스의 테두리 모양 정의*/
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03) /*할 일을 입력하는 인풋 박스와 할 일 아이템의 아래 그림자 정의*/
  }
</style>