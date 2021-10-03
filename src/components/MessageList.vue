<template>
<dir>
    <ul>
        <li v-for="message in messages" :key="message.id">
            <p>{{message.name}}</p>
            <p>{{message.message}}</p>
        </li>
    </ul>
</dir>
</template>

<script>
import { getDatabase, ref, onValue} from "firebase/database";
export default {
    name: 'MessageList',
    data () {
        return {
            messages: [],
        }
    },
    methods: {
        fetchMessage: function () {
            const db = getDatabase();
            const messageRef = ref(db, '/messages/');
            onValue(messageRef, (snapshot) => {
                const data = snapshot.val();
                    if (data) {
                        let list = [];
                        Object.keys(data).forEach( val => {
                            data[val].id = val;
                            list.push(data[val]);
                        });
                        this.messages = list;
                    }
                }
            );
        }
    },
    created: function () {
        this.fetchMessage()
    }
}
</script>

<style>
</style>