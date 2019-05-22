import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Chat from '@/components/Chat'
import PersonalChat from '@/components/PersonalChat'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/chat/:chatroom-:myname',
      name: 'PersonalChat',
      component: PersonalChat,
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props: true,
      beforeEnter: (to, from, next) => {
        if(to.params.name || from.params.name){ 
          next() 
        } else { 
          next({ 
            name:'Welcome' 
          }) 
        }
      }
    }
  ]
})
