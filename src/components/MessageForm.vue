<template>
<dir>
    <h1> hoge </h1>
    <section class="section">
        <div class="container">
            <!-- 名前の入力欄 -->
            <div class="field">
            <p class="control has-icons-left has-icons-right">
                <input
                class="input"
                type="txt"
                id="nameInput"
                placeholder="名前"
                v-model="name"
                />
            </p>
            </div>
            <!-- メッセージの入力欄 -->
            <div class="field">
            <p class="control has-icons-left">
                <input
                class="input"
                type="text"
                id="messageInput"
                placeholder="メッセージ"
                v-model="message"
                />
            </p>
            </div>
            <!-- ボタン類 -->
            <div class="field">
            <p class="control">
                <button
                class="button is-success"
                type="button"
                @click="sendMessage"
                >
                送信
                </button>
            </p>
            </div>
        </div>
    </section>
</dir>
</template>

<script>
import { getDatabase, ref, push } from "firebase/database";
export default {
    name: 'MessageForm',
    data () {
        return {
            messages: [],
            name: "",
            message: "",
            
        }
    },
    computed: {

    },
    methods: {
        sendMessage() {
            const db = getDatabase();
            if (this.message) {
                push(ref(db, 'messages/'),
                {
                    message: this.message,
                    name: this.name ? this.name : "名無しのミカエル"
                });
                this.message = "";
            }
        }
    },
    created: function () {
    }
}
</script>

<style>
</style>