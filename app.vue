<script setup>
import { computed, ref } from 'vue';

const word = ref('');
const reversedWord = computed(() => Array.from(word.value).reverse().join(''));
</script>

<template>
	<main class="container">
		<h1>Sõna tagurpidi</h1>
		<label for="word-input">Sisesta sõna</label>
		<input
			id="word-input"
			v-model="word"
			type="text"
			autocomplete="off"
			placeholder="Kirjuta siia..."
		>
		<p class="result-label">Tagurpidi</p>
		<output id="reversed-word" aria-live="polite">{{ reversedWord }}</output>
	</main>
</template>


<style>
</style>