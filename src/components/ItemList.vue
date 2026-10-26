<script setup>
defineProps(['items', 'title']);

const importanceNames = { 3: 'Kõrge', 2: 'Keskmine', 1: 'Madal' };
</script>

<template>
    <h1>{{ title }}</h1>
    <ul>
        <li v-for="item in items" :key="item.id">
            <label class="checkbox">
                <input type="checkbox" v-model="item.isDone">
                {{ item.text }}
            </label>
            <span class="tag ml-2" :class="{
                'is-danger': item.importance === 3,
                'is-warning': item.importance === 2,
                'is-success': item.importance === 1
            }">{{ importanceNames[item.importance] }}</span>
        </li>
    </ul>
</template>
