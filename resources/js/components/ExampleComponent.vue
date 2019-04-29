<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card mb-2">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        {{message}}
                    </div>
                </div>
              <h3>Message</h3>   <input v-model="message">
              <p><strong>Vue data :</strong> {{message}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data(){return {
        message:'Hello World!'
      }},
        mounted() {
            console.log('Vue Component mounted.')
        }
    }
</script>
