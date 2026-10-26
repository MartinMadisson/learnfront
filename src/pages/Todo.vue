<script setup>
import { computed, ref } from 'vue';
import ItemList from '../components/ItemList.vue';
import { items, nextItemId } from '../items.js';
let newItem = ref('');
let newImportance = ref(2);
function add() {
    if (newItem.value.trim() !== '') {
        items.value.push({id:nextItemId(), text: newItem.value.trim(), isDone: false, importance: newImportance.value});
        newItem.value = '';
    }
}

let sortedItems = computed(() => [...items.value].sort((a, b) => b.importance - a.importance));
let doneItems = computed(() => sortedItems.value.filter(item => item.isDone));
let todoItems = computed(() => sortedItems.value.filter(item => !item.isDone));
</script>

<template>
    <div class="container mt-3">
        <div class="field has-addons">
            <div class="control is-expanded">
                <input @keydown.enter="add" v-model="newItem" class="input" type="text" placeholder="New item" aria-label="New item">
            </div>
            <div class="control">
                <div class="select">
                    <select v-model="newImportance" aria-label="Importance">
                        <option :value="3">Kõrge</option>
                        <option :value="2">Keskmine</option>
                        <option :value="1">Madal</option>
                    </select>
                </div>
            </div>
            <div class="control">
                <button @click="add" class="button is-info">
                    Add
                </button>
            </div>
        </div>
        <ItemList :items="sortedItems" title="All Items"></ItemList>
        <ItemList :items="doneItems" title="Done Items"></ItemList>
        <ItemList :items="todoItems" title="Todo Items"></ItemList>
    </div>
</template>

<style>

</style>