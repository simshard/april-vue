<template>
<div class="container">

  <a :href="gifSrc"><img :src="gifSrc" > </a>
   
</div>
</template>

<script>
export default {
  data() {
      return {
        gif: [],
        gifSrc:'',
        search: '',
        valid: ''
      }
    },
    methods: {
      getGif() {
        const API_KEY = 'QNzHoSu60w1CDCWz80xXHg8AefdB1FT9';
        const BASE_URL = '//api.giphy.com/v1/gifs/search?';
        const LIMIT = 1;
        const RATING = 'pg';

        //axios.get(BASE_URL+'q='+ this.search + '&limit'=+ LIMIT + '&rating=' + RATING + '&api_key='+API_KEY)
        //https://api.giphy.com/v1/gifs/random?api_key=QNzHoSu60w1CDCWz80xXHg8AefdB1FT9&tag=&rating=G
      //  axios.get('//api.giphy.com/v1/gifs/search?q=cat&limit=1&rating=pg&api_key=QNzHoSu60w1CDCWz80xXHg8AefdB1FT9')
      axios.get('//api.giphy.com/v1/gifs/random?api_key=QNzHoSu60w1CDCWz80xXHg8AefdB1FT9&tag=&rating=G')
              .then((res) => {
                console.log(res)
            //  console.log(res.data.data.images.original.url)
              this.gif = res.data;
              this.gifSrc = res.data.data.images.original.url
            })
            .catch(function (error) {
            console.log(error);
          });
          }
        },
        mounted(){
    this.getGif()
  }

}
</script>

<style lang="css" scoped>
</style>
