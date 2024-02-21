<template>
    
    <h1>{{ msg }}</h1>
    <h1> {{ textContent }}</h1>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, adipisci accusamus laborum, deserunt hic ducimus</p>
    <br>
    <p> quibusdam error perferendis sunt quos perspiciatis ipsa iure, ad id? Officiis, itaque. Explicabo, reiciendis eum.</p>
</template>
<script setup>

import { onMounted, onUnmounted } from 'vue';

defineProps({ msg: String,
              textContent: String          
            })

const emit= defineEmits(['message'])


onMounted(()=> {
    console.log('HomePageCompo has mounted');
})

onUnmounted(()=>{
    console.log('HomePageCompo has been destroyed');
})
onMounted(() => {
     emit('message','salut');
})
</script>
<style scoped lang="scss">

</style>