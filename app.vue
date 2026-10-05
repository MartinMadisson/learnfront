
<script setup>
import { computed, ref } from 'vue';

let items = ref(['Piim', 'Muna', 'Sai']);
let newItem = ref('');


function add(){
  if (newItem.value.trim() !== '') {
	items.value.push(newItem.value);
	}
	newItem.value = '';
}

const word = ref('');
const reversedWord = computed(() => Array.from(word.value).reverse().join(''));
</script>

<template>
<div class="container content mt-3"></div>
	<div class="field has-addons">
  		<div class="control is-expanded">
    <input @keydown.enter="add" v-model="newItem" class="input" type="text" placeholder="Find a repository">
  </div>
  <div class="control">
    <button class="button is-info" @click="add">
      Add
    </button>
  </div>
</div>
<ul>
	<li v-for="item in items" :key="item">{{ item }}</li>
</ul>

</template>

<style>
</style>