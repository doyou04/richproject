<script setup lang="ts">
import { computed } from 'vue'

const currentSpent = 85000
const budgetLimit = 120000

const percentage = computed(() => {
  
})

</script>

<template>
  <div class="">
    <div class="flex justify-between">
    <h3 class="text-[16px] font-semibold">이번 달 지출 목표</h3>
    <p class="text-[13px] text-[#b5a003] tracking-tight font-semibold" >목표 이내</p>
</div>
    
    <!-- 차트 영역 -->
    <div class="h-[280px]">
      <Bar :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>