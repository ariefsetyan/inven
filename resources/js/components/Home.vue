<template>
    <h1>page home</h1>
</template>

<script>
export default {
    created() {
        // console.log(User.loggedIn());
        if (!User.loggedIn()){
            this.$router.push({name:'/'})
        }
    }
}
</script>

<style scoped>

</style>
