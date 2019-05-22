<template>
    <div class="chat container">
        <h2 class="center teal-text">{{this.$route.params.chatroom}} Chat</h2>
        <button class="waves-effect waves-light btn" @click="goBack">Back</button>
        <div class="card">
            <div class="card-content">
                <ul class="messages" v-chat-scroll>
                    <li v-for="message in messages" :key="message.id">
                            <span class="teal-text">{{message.name}} :</span>
                        <span class="grey-text text-darken-3">{{message.content}}</span>
                        <span class="grey-text time">{{message.timestamp}} {{message.chatroom}}</span>
                    </li>
                </ul>
            </div>
            <div class="card-action">
                <NewMessagePersonal />
            </div>
        </div>
    </div>
</template>

<script>
import NewMessagePersonal from '@/components/NewMessagePersonal'
import db from '@/firebase/init'
import moment from 'moment'

export default {
    name: 'PersonalChat',
    //props: ['myname'],
    components: {
        NewMessagePersonal
    },
    data(){
        return{
            messages:[],
            name:null,
        }
    },
    methods:{
        goBack(){
            this.$router.push({name: 'Chat', params: { name: this.name  }})
        }
    },
    created(){
        this.name = this.$route.params.myname
        let ref = db.collection('messages').orderBy('timestamp') 
        ref.onSnapshot(snapshot =>{
            snapshot.docChanges().forEach(change =>{
                if(change.type =='added'){
                    let doc = change.doc
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        timestamp: moment(doc.data().timestamp).calendar(),
                        chatroom: doc.data().room
                    })
                }
            })
            this.messages = this.messages.filter(value =>{
                return value.chatroom === this.$route.params.chatroom
            }) 
        })
    }
}
</script>

<style>
.chat h2{
    font-size: 2.6em;
    margin-bottom: 40px;
}
.chat span{
    font-size: 1.4em;
}
.chat .time{
    display: block;
    font-size:0.8em;
}
.messages{
    max-height: 400px;
    overflow: auto;
}
.messages::-webkit-scrollbar{
    width: 70px;
}
.messages::-webkit-scrollbar-track{
    background: #ddd;
}
.messages::-webkit-scrollbar-thumb{
    background: #aaa;
}
</style>
