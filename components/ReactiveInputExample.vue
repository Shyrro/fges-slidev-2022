<template>
  <div class="name">
    <div>Exemple :</div>
    <div v-if="vif">
      <input v-model="name" />
      <span v-if="name === 'bob'">{{ name }}</span>
    </div>
    <div class="legumes" v-if="vfor">
      <ul>
        <li v-for="legume in legumes" :key="legume">{{ legume }}</li>
      </ul>
    </div>
    <div class="click-example" v-if="von">
      <button @click="counter++">Incrémenter</button>
      <div>{{ counter }}</div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  data: () => {
    return {
      name: 'toto',
      legumes: ['tomate', 'oignon', 'carotte'],
      counter: 0,
    }
  },
  props: {
    vif: {
      type: Boolean,
      default: false,
    },
    vfor: {
      type: Boolean,
      default: false,
    }, 
    von: {
      type: Boolean,
      default: false,
    }, 
  }
});
</script>
<style>
.name {
  margin-top: 5em;
  margin-left: 1em;
}

.name > div > input {
  margin-top: 10px;
}

.legumes, .click-example {
  padding: 5px;
}

.click-example > button {
  padding: 5px;
  border-radius: 5px;
  background-color: gray;
}

.click-example > button:hover {
  background-color: darkgray;
}

.legumes > ul > li {
  list-style: circle;
}
</style>