<template>
    <div class="new-message">
        <form @submit.prevent='addMessage'>
            <label for="new-message">New Message (enter to add):</label>
            <input type="text" name="new-message" v-model="newMessage">
            <p class='red-text' v-if="feedback">{{ feedback }}</p>
        </form>
    </div>
</template>

<script>
import db from '@/firebase/init'

export default {
    name:'NewMessagePersonal',
   // props:['mename'],
    data(){
        return{
            room: this.$route.params.chatroom,
            newMessage: null,
            feedback: null,
            mename:this.$route.params.myname
        }
    },
    methods:{
        addMessage(){
            if(this.newMessage){
                //Make collection 'messages' that don't exist
                //And then add data into that message collection
                db.collection("messages").add({
                    content: this.newMessage,
                    name: this.mename,
                    room: this.room,
                    timestamp: Date.now()
                }).catch(err =>{
                    console.log(err)
                })
                this.newMessage =null
                this.feedback = null

            }
            else{
                this.feedback = 'Please enter your message'
            }
        }
    }
}
</script>
