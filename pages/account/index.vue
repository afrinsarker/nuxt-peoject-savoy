<template>
   <div>
      <LoginComponent />
   </div>
</template>

<script lang="ts">
 import LoginComponent from '@/components/storefront/accounts/LoginComponent.vue'
 export default {
  data(){
    return{
      title: '',
    }
  },
  components:{
    LoginComponent,
  },
  
 }
</script>

<style>

</style>