<script setup>
import { computed } from 'vue';

const props = defineProps({
    class: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: '',
        validator(value) {
            return [
                'primary',
                'link',
                'info',
                'success',
                'warning',
                'danger',
                'dark',
            ].includes(value)
        }
    },
    size: {
        type: String,
        default: '',
        validator(value) {
            return [
                'small',
                'normal',
                'medium',
                'large',
            ].includes(value)
        }
    },
    
    title: {
        type: String,
        default: ''
    },
   
    deletable: Boolean,
});

const emit = defineEmits(['close']);

const computedClass = computed(() => {
    let combined = props.class;
    if (props.color) {
        combined += ' is-' + props.color;
    }
    if (props.size) {
        combined += ' is-' + props.size;
    }
    return combined.trim();
});
</script>

<template>
    <article class="message" :class="computedClass">
        <div v-if="title || deletable" class="message-header">
            <p>{{ title }}</p>
            <button v-if="deletable" class="delete" aria-label="delete" @click="emit('close', $event)"></button>
        </div>
        <div class="message-body">
            <slot></slot>
        </div>
    </article>
</template>