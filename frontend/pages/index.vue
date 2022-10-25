<template>
  <home :tweets="tweets"></home>
</template>

<script>

import home from '~/components/Home.vue'

export default {
  components: {
    home: home
  },
  data: () => ({
      tweets:
        [
            {
                id:1,
                author_name: 'Isaac Newton',
                author_usarname: '@isaacnewton',
                autor_avatar: "https://upload.wikimedia.org/wikipedia/commons/8/83/Sir_Isaac_Newton_%281643-1727%29.jpg",
                created_at:'43 min',
                text: 'um objeto em repouso ou movimento retilíneo uniforme tende a permanecer nesse estado se a força resultante sobre ele é nula',
            },
            {
                id:3,
                author_name: 'René Descartes',
                author_usarname: '@descarte',
                autor_avatar: 'https://conhecimentocientifico.com/wp-content/uploads/2019/08/rene-descartes.jpg',
                created_at:'1h 43min',
                text: 'Penso, logo existo',
            },
            {
                id:3,
                author_name: 'Albert Einstein',
                author_usarname: '@albertinho',
                autor_avatar: 'https://conteudo.imguol.com.br/c/entretenimento/c3/2017/11/24/albert-einstein-1511565360545_v2_4x3.jpg',
                created_at:'2 dias',
                text: 'Duas coisas são infinitas: o universo e a estupidez humana. Mas, em relação ao universo, ainda não tenho certeza absoluta.',
            },
        ],
    }),
}
</script>

<style>
</style>
