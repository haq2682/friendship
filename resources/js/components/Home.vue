<template>
    <div>
        <div class="row">
            <div class="col">
                <h1>Home View</h1>
                <h2>Welcome {{auth}}</h2>
                <Button @click="logout">Logout</Button>
            </div>
            <div class="col text-center">
                <h1>Available Users:</h1>
                <p v-for="user in users" key="user.id" class="users">
                    <router-link :to="{ name: 'User', params: { id: user.id } }">{{user.name}}</router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Button from 'primevue/button'
export default {
    components: {
        Button,
    },
    data() {
        return {
            auth: null,
            users: null,
        }
    },
    methods: {
        logout() {
            axios.get('api/logout')
                .then(res => console.log(res))
                .catch(err => console.log(err));
            window.location = '/#/signin';
        }
    },
    mounted() {
        axios.get('api/user')
            .then((res) => {
                this.auth = res.data;
            })
            .catch(err => console.log(err));
        axios.get('api/users')
            .then((res) => {
                this.users = res.data;
            })
            .catch(err => console.log(err));
    }
}
</script>

<style scoped>
    .users {
        padding: 15px;
        border-radius: 10px;
        transition: 0.5s;
        width: 80%;
        position: relative;
        left: 20%;
    }
    .users:hover {
        background-color: #a0aec0;
    }
</style>
