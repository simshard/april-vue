/**
* https://newsapi.org/docs/get-started
* https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=7210fbd55dc64565b5dd2830b98073bc
* https://newsapi.org/v2/everything?sources=bbc-news&apiKey=7210fbd55dc64565b5dd2830b98073bc
**/

<template>
<div class="container">

  <div class="row">
    <div class="col-md-4"  v-for="item in results">
      <div class="card mb-6 shadow-sm">
        <img :src=item.urlToImage :alt= item.content width="250px" class="card-img-top">
        <div class="card-body">
          <h3 class="card-title"><a :href=item.url target="_blank">{{ item.title }}</a></h3>
          <p class="card-text">{{ item.description }}<br> <small><em>{{ item.publishedAt }}</em>  </small></p>
      </div>
      </div>
    </div>
  </div>

</div>
</template>









<script>
const url ="https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=7210fbd55dc64565b5dd2830b98073bc";
import moment from 'moment'
export default {
    data() {
        return {
            results: [],
          //  loading: true,
        }
    },
     computed: {

      },
    created() {
          axios.get(url).then(response => {
            this.results = response.data.articles;
      console.log(response.data);
          })
        }
}
   let mydate=moment("2525-11-23T16:46:06Z").format("Do MMM YYYY hh:mm a");
    console.log('pub at '+mydate);
//   let jsdate=new Date('2019-04-26T09:07:28Z');
// console.log('pubtime '+jsdate);
// //moment(item.publishedAt).format("Do MMM YYYY hh:mm A")
//  var pubdate = new Date( ).toISOString().slice(0,-14);
//  console.log('pubdate '+pubdate);
</script>
