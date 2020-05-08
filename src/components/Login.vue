<template>
    <div>
        <form @submit.prevent="login">
            <input v-model="credentials.email" data-username/>
            <input v-model="credentials.password" data-password/>

            <button name="signInButton" type="submit" variant="primary" :disabled="disableSubmit">Sign In</button>

        </form>

    </div>
</template>

<script>
    export default {
        name: "login",
        metaInfo: {
            title: 'TestProject - Login'
        },
        components: {},
        props: [],
        data() {
            return {
                username: '',
                password: '',
                credentials: {
                    email: '',
                    password: ''
                },
                disableSubmit: false,
                error: '',
                loginFailed: false
            }
        },
        computed: {},
        mounted() {

        },
        created() {
        },
        methods: {
            login() {
                this.loginFailed = false
                this.disableSubmit = true
                this.$store.dispatch('login', {data: this.credentials}).then(() => {
                    let pushName = this.$route.params.nextName ? this.$route.params.nextName : 'home'
                    this.$router.push({name: pushName})
                }).catch(error => {
                    this.error = error
                    this.loginFailed = true
                    this.disableSubmit = false
                })
            }
        }
    }
</script>

<style scoped>

</style>