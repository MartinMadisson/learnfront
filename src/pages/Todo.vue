<script setup>
import { computed, ref } from 'vue';
import ItemList from '../components/ItemList.vue';
let i = 0;
let items = ref([
    {id:i++, text:'Piim', isDone: true, importance: 3},
    {id:i++, text:'Viin', isDone: true, importance: 1},
    {id:i++, text:'Sai', isDone: false, importance: 3},
    {id:i++, text:'Mac', isDone: false, importance: 2},
]);
let newItem = ref('');
let newImportance = ref(2);
function add() {
    if (newItem.value.trim() !== '') {
        items.value.push({id:i++, text: newItem.value.trim(), isDone: false, importance: newImportance.value});
        newItem.value = '';
    }
}

let doneItems = computed(() => items.value.filter(item => item.isDone));
let todoItems = computed(() => items.value.filter(item => !item.isDone));
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
        <ItemList :items="items" title="All Items"></ItemList>
        <ItemList :items="doneItems" title="Done Items"></ItemList>
        <ItemList :items="todoItems" title="Todo Items"></ItemList>
    </div>
</template>

<style>

</style>