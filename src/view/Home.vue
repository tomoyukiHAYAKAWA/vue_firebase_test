<template>
<dir>
    <sales></sales>
    <message-form></message-form>
</dir>
</template>

<script>
import MessageForm from "../components/MessageForm.vue"
import Sales from '../components/Sales.vue'

export default {
    components: { 
        Sales,
        MessageForm 
    },
    name: 'Home'
}
</script>

<style>
</style>