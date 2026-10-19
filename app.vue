<script setup>
import { ref } from 'vue';
import Tabs from './src/components/Tabs.vue';
import Modals from './src/components/Modals.vue';

const tabTitles = ['item1', 'item2', 'item3'];
const tabContents = ['content 1', 'content 2', 'content 3'];
const activeTab = ref(0);
</script>

<template>
  <Tabs :titles="tabTitles" :active="activeTab" @change="activeTab = $event">
    <div>{{ tabContents[activeTab] }}</div>
  </Tabs>

  <component :is ="tabContents[activeTab]">
    
  </component>
</template>



