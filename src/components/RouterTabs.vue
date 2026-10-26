<script setup>
import { RouterLink, useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
</script>

<template>
    <div class="tabs is-centered">
        <ul>
            <li v-for="tab in router.getRoutes()" :key="tab.path" :class="{'is-active': route.path === tab.path}">
                <RouterLink :to="tab.path">{{ tab.name }}</RouterLink>
            </li>
        </ul>
    </div>
</template>
