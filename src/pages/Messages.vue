<script setup>
import { ref } from 'vue';
import Message from '../components/Message.vue';

const showDeletable = ref(true);
</script>

<template>
    <Message>Default message without color</Message>

    <Message color="primary" title="Primary">Message with a title</Message>
    <Message color="link" title="Link">Message with a title</Message>
    <Message color="info" title="Info">Info message</Message>
    <Message color="success" title="Success">Operation completed successfully</Message>
    <Message color="warning" title="Warning">Be careful with this</Message>
    <Message color="danger" title="Danger">Something went wrong</Message>
    <Message color="dark" title="Dark">Dark message</Message>

    <Message color="info" size="small">Small message</Message>
    <Message color="info" size="medium">Medium message</Message>
    <Message color="info" size="large">Large message</Message>

    <Message class="is-success" title="Class prop">Color set through the class prop</Message>

    <Message
        v-if="showDeletable"
        color="danger"
        title="Deletable"
        deletable
        @close="showDeletable = false"
    >
        Click the x to close me
    </Message>

    
</template>