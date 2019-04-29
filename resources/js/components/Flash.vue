

<template>
<div class="alert alert-success" role="alert" v-show="show">
    {{ body }}
</div>
</template>

<script>
export default {
    props: ['message'],
    data() {
        return {
            body: this.message,
            show: false,
        }
    },
    created() {
        if (this.message) {
            this.body = this.message;
            this.show = true;
        }
    }
}
</script>
