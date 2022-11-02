<template>
    <div>
        <h1>User View</h1>
        <h2>{{res.name}}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            res: {},
        }
    },
    created() {
        axios.get("api/getuser/" + this.$route.params.id)
            .then((res) => {
                this.res = res.data;
            })
            .catch(e => console.log(e));
    }
}
</script>
