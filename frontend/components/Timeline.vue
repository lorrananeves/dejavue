<template>

    <v-list two-line>
        <template v-for="tweet in tweets">
            <v-list-tile avatar :key="tweet.id">
                <v-list-tile-avatar>
                    <img src="tweet.author_avatar">
                </v-list-tile-avatar>
                <v-list-tile-content>
                    <v-list-tile-title> 
                        <router-link :to="{name: 'user-username', params:{username: tweet.author_usarname}}"> {{tweet.author_name}} </router-link> /
                        {{tweet.author_usarname}} / 
                        {{tweet.created_at}} 
                    </v-list-tile-title>
                    <v-list-tile-sub-title>{{tweet.text}}</v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-divider :key="tweet.id"></v-divider>
        </template>
    </v-list> 
</template>

<script>
  export default {
    props: ['tweets'],
    data() {
        return {}
    },
  }
</script>

<style>

</style>