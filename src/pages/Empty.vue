<template>
    <div class="empty-page">
        
    </div>
</template>
<script>
export default {
    data () {
        return {
            
        }
    },
    created () {
        this.$router.replace('/');
    }
}
</script>
<style scoped>
    .empty-page{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
</style>
