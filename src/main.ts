import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css';
import { createWebHistory, createRouter } from 'vue-router'

// 1. 라우터 인스턴스 생성
const router = createRouter({
  history: createWebHistory(),
  routes: [ /* 라우트 설정 */ ]
})

createApp(App).use(router).mount('#app')
