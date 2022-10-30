<template>
    <div class="form-div">
        <h1>Register</h1>
        <div class="form">
            <form @submit.prevent="formSubmit" action="{{route('api/register')}}" method="POST">
                <span class="p-float-label">
                    <InputText class="form-input" id="username" type="text" v-model="username" />
                    <label for="username">Username</label>
                </span>
                <span class="p-float-label">
                    <InputText class="form-input" id="email" type="email" v-model="email" />
                    <label for="email">Email</label>
                </span>
                <span class="p-float-label">
                    <InputText class="form-input" id="password" type="password" v-model="password" />
                    <label for="password">Password</label>
                </span>
                <span class="p-float-label">
                    <InputText class="form-input" id="confirmpassword" type="password" v-model="confirmpassword" />
                    <label for="confirmpassword">Confirm Password</label>
                </span>
                <div class="submit">
                    <Button @click="redirectToLogin" label="Login Instead" class="p-button-text" style="margin-right: 10px;"/>
                    <Button type="submit" label="Submit" icon="pi pi-check" iconPos="right" class="p-button-raised" />
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import axios from 'axios';
export default {
    components: {
        InputText,
        Button,
    },
    data() {
        return {
            username: null,
            email: null,
            password: null,
            confirmpassword: null,
        }
    },
    methods: {
        formSubmit() {
            console.log({
                name: this.username,
                email: this.email,
                password: this.password,
            })
            axios.post('api/register', {
                name: this.username,
                email: this.email,
                password: this.password
            })
            .then((response) => {
                console.log(response);
                window.location = '/#/signin'
            });
        },
        redirectToLogin() {
            window.location = '/#/signin';
        }
    }
}
</script>

<style scoped>
.form-div {
    width: 40%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.69);
}
.form-div > h1 {
    margin-bottom: 20px;
}
.form-input {
    width: 100%;
}
.p-float-label {
    margin: 30px;
}
.submit {
    float: right;
}
</style>
