<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" 
        v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo">
            <i class="addBtn fas fa-plus" aria-hidden="true"></i>
        </span>

        <modal v-if="showModal" @close="showModal=false">
            <h3 slot="header">경고</h3>
            <span slot="footer" @click="showModal = false">
                할 일을 입력하세요.
                <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
            </span>
        </modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTodoItem: ''
        }
    },
    methods: {
        addTodo() {
            if(this.newTodoItem !== "") { //인풋 박스의 입력값이 있을 때만 저장
                var value = this.newTodoItem && this.newTodoItem.trim(); //인풋 박스에 입력된 텍스트의 앞뒤 공백 문자열 제거
                this.$emit('addTodo',value); //부모 컴포넌트로 변경값 보내기
                this.clearInput;
            }
        },
        clearInput() {
            this.newTodoItem = '';
        }
    }
}
</script>

<style scoped>
    input:focus {
        outline: none; /*할 일을 입력하는 인풋 박스의 선 스타일 지정*/
    }
    .inputBox {
        background: white; /*인풋 박스의 배경색 지정*/
        height: 50px; /*인풋 박스의 높이 설정*/
        line-height: 50px; /*인풋 박스의 입력되는 테스트의 중앙 정렬을 위해 설정*/
        border-radius:5px; /*인풋 박스의 둥근 테두리 속성 설정*/
    }
    .inputBox input {
        border-style: none;
        font-size: none;
    }
    .addContainer {
        float: right; /*할 일 추가 버튼이 표시될 위치 정의*/
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn {
        color: white;
        vertical-align: middle; /*할 일 추가 아이콘의 수직 정렬 정의*/
    }
</style>
