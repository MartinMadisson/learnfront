
<script setup>
import { computed, ref } from 'vue';

let i = 0;
let items = ref([
	{ id: i++, name: 'Piim', isDone: false },
	{ id: i++, name: 'Muna', isDone: false },
	{ id: i++, name: 'Sai', isDone: false },
]);
let newItem = ref('');

function add() {
  if (newItem.value.trim() !== '') {
		items.value.push({ id: i++, name: newItem.value.trim(), isDone: false });
	}
	newItem.value = '';
}
let doneItems = computed(() => items.value.filter(item => item.isDone));
let toDoItems = computed(() => items.value.filter(item => !item.isDone));
</script>

<template>
<div class="container content mt-3">
	<form class="field has-addons" @submit.prevent="add">
		<div class="control is-expanded">
			<input v-model="newItem" class="input" type="text" placeholder="Lisa uus ülesanne">
		</div>
		<div class="control">
			<button class="button is-info" type="submit">Lisa</button>
		</div>
	</form>

	<h2>ToDo items</h2>
	<ul>
		<li v-for="item in toDoItems" :key="item.id">
			<label><input v-model="item.isDone" type="checkbox"> {{ item.name }}</label>
		</li>
	</ul>

	<h2>Done items</h2>
	<ul>
		<li v-for="item in doneItems" :key="item.id">
			<label><input v-model="item.isDone" type="checkbox"> <span class="done">{{ item.name }}</span></label>
		</li>
	</ul>
</div>
</template>

<style>
.done {
	text-decoration: line-through;
}
</style>