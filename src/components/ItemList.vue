<script setup>
defineProps(['items', 'title']);


console.log('items', items);
</script>

<template>
    <h1>{{ title }}</h1>
    <ul>
        <li v-for="item in items" :key="item.id">
            {{ item.text }}
            <input type="checkbox" v-model="item.isDone">
        </li>
    </ul>

</template>