<template>
    <div class='signup'>
        <button @click="sendSingUp">S'inscrire</button>
    </div>
</template>

<script>

import fetch from 'node-fetch';


export default {
    name: "signup",

    data() {
        return {
            email: "",
            pseudo: "",
            password: ""
        }
    },

    methods: {
        signup() {
            fetch('http://localhost:3000/api/users/signup')
            .then((response) => response.json())
            .then((json) => (this.signup.json));
        }
    },
}
</script>
