<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">สวัสดี</h2>
        <form @submit.prevent='enterChat'>
          <label for="name">กรุณาใส่ชื่อแส้ด้วย: </label>
          <input type="text" name='name' v-model="name">
          <p class="red-text" v-if="{feedback}">{{feedback}}</p>
          <button class="btn teal">เข้าสู่ระบบ</button>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback: null
      
    }
  },
  methods:{
    enterChat(){
      if(this.name){
        this.feedback = null
        //then redirect to the chat component
        this.$router.push({name: 'Chat', params: { name: this.name }})
      } else{
        this.feedback = 'Please Enter Your Name' 
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to slimit CSS to this component only -->
<style>
.welcome{
  max-width: 400px;
  margin-top: 100px;
}
.welcome h2{
  font-size: 3em;
}
.welcome button{
  margin:30px auto;
}
</style>
