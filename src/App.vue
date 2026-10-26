<script setup>
import { RouterView } from 'vue-router';
import RouterTabs from './components/RouterTabs.vue';
</script>

<template>
    <RouterTabs></RouterTabs>
    <div class="container content mt-3">
        <RouterView></RouterView>
    </div>
</template>
