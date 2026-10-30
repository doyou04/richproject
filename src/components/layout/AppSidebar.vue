<script setup lang="ts">
import {RouterLink} from 'vue-router'

interface MenuItem {
  lable: string
  path: string
}

const menus: MenuItem[] = [
  {label: '대시보드' , path: '/'},
  {label: '거래내역' , path: '/transactions'},
  {label: '달력' , path: '/calendar'},
  {label: '자산관리' , path: '/assets'},
  {label: '부채관리' , path: '/debts'},
]
</script>


<template>
    <aside class="flex flex-col w-[200px] bg-white">
      <h1 class="text-xl font-semibold px-[15px] py-[20px]">부자가계부</h1>
      <nav class="text-sm px-[15px]">
        <RouterLink
          v-for="menu in menus"
          :key="menu.path"
          :to="menu.path"    
          class="flex p-[10px]"
          active-class="text-[#948c01]"
          exact-active-class="font-bold text-[#948c01]">
          {{menu.label}}
        </RouterLink>
      </nav>
    </aside>
</template>
