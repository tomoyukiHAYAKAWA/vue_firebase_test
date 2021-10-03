<template>
<dir>
    <h2> {{ title }} </h2>
    <h1> {{ count }} </h1>
</dir>
</template>

<script>
import { getDatabase, ref, onValue} from "firebase/database";
import MessageForm from "./MessageForm.vue"
export default {
    name: 'Sales',
    data () {
        return {
            title: 'today',
            count: 0
        }
    },
    methods: {
        countUp: function () {
            const db = getDatabase();
            const starCountRef = ref(db, '/salse/');
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                    if (data) {
                        this.count = data.amount
                    }
                }
            );
        }
    },
    created: function () {
        this.countUp()
    }
}
</script>

<style>
</style>