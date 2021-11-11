<template>
  <input v-if="$slidev.nav.clicks >= 5 || show" class="myInput" v-model="result" placeholder="Tapez ici"/>
  <span> {{ result }} </span>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    show: false,
  },
  data() {
    return {
      result: '',
    }
  },
})
</script>

<style>

.myInput { 
    background-color: gray; 
}

</style>