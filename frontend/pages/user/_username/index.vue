<template>
  <!-- <v-layout justify-center align-center>
    <v-btn color="success" :to="{name: 'todos'}">What TODO next?</v-btn>
  </v-layout> -->
  <h1> isso aqui é a timeline do usuario {{username}}</h1>
</template>

<script>

export default {
    asyncData (context) {
        return{
            username: context.params.username
        }
    },
    data () {
    return {}
  }
}
</script>

<style>
</style>