const chat = [
  {
    path: 'message',
    name: 'message',
    component: () => import('@/view/chat/message/index'),
    children: [{
      path: 'contact',
      name: 'contact',
      component: () => import('@/view/chat/contact/index')
    }]
  }
]

export default chat
