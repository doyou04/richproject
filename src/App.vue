<script setup lang="ts">
import {computed, ref} from 'vue'
import AppSidebar from './components/layout/AppSidebar.vue';
import Dashboard from './components/Dashboard.vue';


</script>

<template>
  <main class="flex flex-row h-screen">
    <AppSidebar />
    <main class="flex-1 bg-[#f9f9f9] px-[25px]">
      <nav class="flex flex-row h-[50px]">

      </nav>
      <Dashboard />
      <!-- <RouterView /> -->
    </main>
  </main>
</template>

