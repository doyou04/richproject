<script setup lang="ts">
import { ref } from 'vue';
import SpendingChart from '@/components/SpendingChart.vue';

const todayText = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
}).format(new Date);

let goalSpending = ref(false);
</script>

<template>
    <h2 class="text-xl font-semibold mb-[15px]">{{todayText}} 현황</h2>
    <section class="grid grid-cols-3 gap-[10px]">
        <!-- <div class="grid grid-cols-2 col-span-3 border border-[#ccc] rounded-xl p-[20px]"> -->
        <div class="grid grid-cols-2 col-span-3 bg-[#faf5b2] rounded-xl p-[20px]">
            <div class="flex flex-col mb-[20px]">
                <p class="text-[13px] text-[#000]">수입</p> 
                 <strong class="text-[20px] text-[#009361] tracking-tight font-semibold">₩ 3,000,000</strong> 
            </div>
            <div class="flex flex-col mb-[20px]">
                <p class="text-[13px] text-[#000]">지출</p> 
                 <strong class="text-[20px] tracking-tight font-semibold">₩ 3,000,000</strong> 
            </div>
             <div class="flex flex-col">
                <p class="text-[13px] text-[#000]">총자산</p> 
                 <strong class="text-[20px] tracking-tight font-semibold">₩ 3,000,000</strong> 
            </div>
            <div class="flex flex-col">
                <p class="text-[13px] text-[#000]">총부채</p> 
                 <strong class="text-[20px] tracking-tight font-semibold">₩ 3,000,000</strong> 
            </div>
            <hr class="col-span-2 border-white my-[20px]"/>
            <section class="col-span-2">

                <SpendingChart />
            </section>
            <!--             
            <p class="text-[12px] text-gray-600">총잔여금액 / 목표지출잔액</p>
            <h3 class="text-[30px] mt-[5px] tracking-[-1.5px] mb-[15px]">
                <strong class="">15,000,000</strong> / <strong :class="goalSpending? 'text-[#0e9243]' : 'text-[#e21a24]'">5,000,000</strong>
            </h3> -->
        </div>
    </section>
</template>