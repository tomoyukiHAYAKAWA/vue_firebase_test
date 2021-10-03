<template>
<dir>
    <sales></sales>
    <message-list></message-list>
    <message-form></message-form>
</dir>
</template>

<script>
import MessageForm from "../components/MessageForm.vue"
import Sales from '../components/Sales.vue'
import MessageList from '../components/MessageList.vue'

export default {
    components: { 
        Sales,
        MessageList,
        MessageForm 
    },
    name: 'Home'
}
</script>

<style>
</style>