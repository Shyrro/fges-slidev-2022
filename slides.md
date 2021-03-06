---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# apply any windi css classes to the current slide
class: "text-center"
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false

layout: "center"
counts: 0
download: true
---

<img class="m-auto w-30" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg">

# Vue.js

<i>One framework to rule them all</i>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

# Pourquoi Vue.js ?

<div v-click></div>
<Frameworks />

---
layout: two-cols
---
# Pourquoi un framework?

<v-click>

### <i>Avant</i>

<i>HTML</i>

```html
<input class="name" value="" />
<p class="result"></p>
```

<i>Javascript</i>

```js {all|1|4,7|2,5-6|all}
const input = document.querySelector(".name");
const result = document.querySelector(".result");

input.addEventListener("change", (event) => {
  const newValue = event.target.value;
  result.textContent += newValue;
});
```

</v-click>

::right::

<v-after>

# <br>

### <i>Maintenant</i>

<i>HTML</i>
<br>

```html
<input class="name" v-model="result" />
<p>{{ result }}</p>
```

<i>Javascript</i>

```js {all|all|3|all}
data() {
  return {
    result: '',
  }
}
```

<arrow v-click="9" x1="550" y1="300" x2="650" y2="215" color="#41b883" width="3" arrowSize="0,3" />

</v-after>

<style>
pre {
  @apply mr-10;
}
</style>

---
layout: two-cols
---

# La philosophie Vue.js

- DOM virtuel de composants
- R??utilisation simplifi??e de logique ?? travers une App
- Manipulation plus simple des interfaces (ou des "Vues")

```html {all|4-6,14-16}
<!-- DOM html -->
<html>
  <body>
    <header>
      Navbar
    </header>
    <div>
      <form id="formulaireInscription">
        <label for="name">Name</label>
        <input name="name" />
        ...
      </form>
    </div>
    <footer>
      Contact
    </footer>
  </body>
</html>
```

::right::

<div class="last-space"></div>

```js {all|3,5}
// DOM Vue
<App>
  <Layout theme="dark">
    <FormulaireInscription />
  </Layout>
</App>
```

<style>
  pre {
    margin-right: 5px;
  }
  .slidev-layout {
    font-size: 0.9rem;
  }

  .last-space {
    margin-top: 133.5px;
    margin-left: 5px;
  }
  li {
    list-style: circle;
  }
</style>

---
layout: two-cols
---
# Les composants

_Pour un code r??utilisable_

```html {all|2-5|7-17|19-21|all}
<!-- MonComposant.vue -->
<template>
  <input class="myInput" v-model="result" />
  <span> {{ result }} </span>
</template>

<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    data() {
      return {
        result: "",
      };
    },
  });
</script>

<style>
  .myInput { background-color: gray; }
</style>
```

::right::
<v-click at="5">

# <br>

_Exemple_

<MyComponent />

<br>
<br>
<br>

</v-click>

<v-click at="6">

## Et pour l'utiliser?

```js
<MonComposant />

// ou

<mon-composant />
```

##### On peut r??utiliser ce composant ou on veut sans avoir besoin de r??ecrire sa logique et sa structure ?? chaque fois.

</v-click>

<style>
pre {
  @apply mr-5;
}

h2 {
  @apply text-[#41b883]
}
</style>

---

# A vous de jouer !

##

En utilisant le template d'application Vue fourni, cr??ez le composant de la slide pr??c??dente. <br>

Ce composant contient une donn??e `result` qui est li??e ?? un `input` qui prend votre entr??e et l'affiche dans un `span`.

###

<br>

<div class="w-full flex mt-10">
  <uim-microscope class="text-10xl text-[#8be9ff] m-auto"/>
</div>
---
layout: two-cols
---

# Directives

## _v-if_
<br>

```html {all|3,11|all}
<template>
  <input v-model="name">
  <span v-if="name === 'bob'"> {{ name }} </span>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data: () => {
    return {
      name: 'toto',
    }
  },
})
</script>
```

::right::
<ReactiveInputExample vif />

---
layout: two-cols
---

# v-for
##

```html {all|3-5,15|all}
<template>
  <ul>
    <li v-for="legume in legumes" :key="legume"> 
      {{ legume }} 
    </li>
  </ul>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data: () => {
    return {
      legumes: ['tomate', 'oignon', 'carotte']
    }
  }
});
</script>
```
::right::

<ReactiveInputExample vfor />

---
layout: two-cols
---

# v-on
##

```html
<template>
  <button v-on:click="counter++">Incr??menter</button>
  <span> {{ counter }} </span>
</template>
```

Syntaxe simplifi??e (?? utiliser):

```html
<template>
  <button @click="counter++">Incr??menter</button>
  <span> {{ counter }} </span>
</template>
```

Script : 
```js
export default defineComponent({
  data: () => {
    return {
      counter: 0,
    }
  }
});
```

::right::

<ReactiveInputExample von />

---
layout: default
---

# v-bind
La base des directives, la must have

Permet de lier une data ?? un ??l??ment du template.

Exemple :

```html
<template>
  <img v-bind:src="imgUrl">
  <!-- ou plus simplement -->
  <img :src="imgUrl">
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data: () => {
    return {
      imgUrl: 'https://...',
    },
  },
})
</script>
```

---
layout: default
---

# A vous !

##

Cr??ez un composant qui contient : une liste de noms, un input et un bouton.

1 - Au clic sur le bouton, ajouter le contenu de l'input dans la liste. <br>
2 - Ajouter une condition sur la liste, pour ne l'afficher uniquement que lorsqu'elle contient 3 ??l??ments.

<div class="w-full flex mt-10">
  <uil-brackets-curly class="text-10xl text-[#8be9ff] m-auto"/>
</div>


---
layout: default
---
# Les options d'un composant
##

- Options de donn??es :
  - data 
  - computed
  - props

- Options de mutations de donn??es :
  - methods 

- Options de cycle de vie :
  - created
  - mounted
  - setup

_Il y en a d'autres, mais pour l'instant, on va se limiter ?? ceux l??_
---
layout: two-cols
---
# Computed

##

```html {all|4,17-21|all}
<template>
  <input v-model="nom" placeholder="nom"/>
  <input v-model="prenom" placeholder="prenom"/>
  <p>{{ fullName }}</p>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      nom: '',
      prenom: ''
    }
  },
  computed: {
    fullName() {
      return `${this.nom} ${this.prenom}`; 
    }
  }
})
</script>

```
::right::

<ReactiveInputExample computed />

---
layout: default
---

# Methods

##

Tout simplement, des fonctions utilisables uniquement par le composant.

```html {all|2,11,14-18|all}
<template>
  <button @click="increment">Incr??menter</button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    increment() {
      this.counter++;
    }
  }
});
</script>
```
---
layout: default
---

# Watchers
Vue is watching you

```js
import { defineComponent } from 'vue';

export default defineComponent({
  data: () => {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar',
  },
  watch: {
    firstName: function (newVal) {
      this.fullName = `${newVal} ${this.lastName}`;
    },
    lastName: function (newVal) {
      this.fullName = `${this.firstName} ${newVal}`;
    },
  }
})
```

---
layout: center
---

# Communication

---

# Communiquer avec un composant

##

Deux types de communication :

- Parent <uil-arrow-right /> Enfant
- Enfant <uil-arrow-right /> Parent

<div class="flex justify-center">
  <img
  class="w-100"
    src="https://www.geeksleague.be/wp-content/uploads/2020/05/funny-communication-meme-300x203.jpg"
  />
</div>


<style>
li {
  list-style: circle;
}
</style>

---

# Communication Parent-Enfant

## Props

Le composant :

```html
<template>
  <span>{{ numero }}</span>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    numero: Number,
  },
});
</script>
```

L'appel depuis le parent :

```js
<MonComposant numero="9"/>
```
---
layout: two-cols
---
## Communication Enfant-Parent

Events: 

Dans l'enfant :

```html
<template>
  <button @click="sendDataToParent(data)">
    Alert parent
  </button>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  emits: ['update-data'],
  methods: {
    sendDataToParent(data) {
      this.$emit('update-data', data);
    }
  }
});
</script>
```

::right::

<div class="last-space"></div>

Dans le parent : 

```html
<template>
  <composant-enfant @updateData="handleChildData"/>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    handleChildData(data) {
      console.log(data);
    }
  }
})
</script>
```

<style>
  pre {
    margin-right: 5px;
  }

  .last-space {
    margin-top: 92px;
    margin-left: 5px;
  }
</style>

---
layout: default
---

# Encore ?? vous
##

Cr??ez un composant `Calculatrice`, qui contient un composant `EcranCalculatrice` permettant d'afficher le r??sultat de la calculatrice ainsi que les op??rations.

Cr??ez ??galement un composant `BoutonCalculatrice` qui contiendra soit un num??ro soit un op??rateur math??matique (+, -, /, *). Ce composant servira ?? cr??er le clavier de la calculatrice.

Le composant devra donc impl??menter la logique pour les deux cas et r??aliser les bonnes actions en cons??quence.


<div class="w-full flex mt-10">
  <uil-calculator class="text-10xl text-[#8be9ff] m-auto"/>
</div>

---
layout: two-cols
---

# Cycle de vie des composants

- setup
- created
- mounted
- updated

::right::

<div class="flex justify-center m-[-30px] p-0">
  <img
  class="w-100 h-130"
    src="https://vuejs.org/assets/lifecycle.16e4c08e.png"
  />
</div>

---
layout: two-cols
---

# Routing

##

- Utilisation de `vue-router`
- Permet de synchroniser les URL avec des composants
- Gestion fine de la navigation gr??ce ?? des param??tres

::right::


<div class="w-full h-full flex mt-10 items-center">
  <mdi-road-variant class="text-15xl text-[#8be9ff]"/>
</div>

---
layout: two-cols
---

# Configuration de router

##

On cr??e  notre fichier de routing, `routing.js` : 

```js {all|10-13|all}
import { 
  createRouter, 
  createWebHistory 
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: About }
  ]
})

export default router
```

::right::

<div class="last-space"></div>

Dans le `main.js` de notre application : 

```js
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
```

Et dans votre `App.vue` :

```html
<template>
  <RouterView />
</template>
```

<style>
  pre {
    margin-right: 15px;
  }

  .last-space {
    margin-top: 56px;
    margin-left: 5px;
  }
</style>


---
layout: default
---

# Gestion de param??tres

## Param??tres dans l'URL :


```js
const routes = [
  { path: '/users/:id', component: User },
]
```
<br/>

## Param??tres en props du composant :

```js
const routes = [
  // Le param??tre id dans l'URL va ??tre pass?? comme props
  // au composant User
  // Par exemple : http:localhost/users/1 , va passer 1
  // comme id au composant User
  { path: '/users/:id', component: User, props: true },
]
```

---
layout: two-cols
---

# Liens de navigation

## Dans le template

```html
<RouterLink to="/about">About</RouterLink>
```

::right::
<div class="last-space"></div>

## Programmatiquement

```js {all|5-9|11-15|all}
export default {
  ...,
  methods: {
    goToAboutState() {
      // Pour naviguer avec le nom: 
      this.$router.push({
        name: 'about'
        // On peut passer des param??tres ici
      });

      // Pour naviguer avec le path :
      this.$router.push({
        path: '/about'
        // On peut passer des param??tres ici
      });
    },
  },
}
```

<style>
  pre {
    margin-right: 15px;
  }

  .last-space {
    margin-top: 56px;
    margin-left: 5px;
  }
</style>

---
layout: default
---

# On test !

##

Configurez votre application pour prendre deux routes, une route d'accueil et une route qui affichera un exercice des TP pr??c??dents de votre choix.

Pour savoir comment ajouter un router sur votre application, regardez la section "Routing" du cours en ligne ;) 

<div class="w-full flex items-center">
  <mdi-road-variant class="text-15xl text-[#8be9ff] m-auto"/>
</div>

---
layout: default
---

# API
Link your app with the world

<div class="w-full flex mt-10">  
  <ic-round-public class="text-15xl text-[#8be9ff] m-auto"/>
</div>

---
layout: default
---

# REST API

## Les verbes REST ?? conna??tre :

<br/>

- GET : Pour **r??cup??rer** des ressources
- POST : Pour **cr??er** des ressources
- PUT : Pour **mettre ?? jour** des ressources
- DELETE : Pour **supprimer** des ressources

_PS: Il existe encore d'autres verbes qu'on ne verra pas dans ce cours_

---
layout: default
---

# Et en Vue ?

```js
import axios from 'axios';

axios.get('api')

axios.post('api')

// etc
```

---
layout: default
---

# Petit tips !

##

Si vous voulez r??cup??rer des donn??es, faites le pendant la phase `mounted` de votre composant.

Exemple :


```js
export default {
  mounted() {
    axios.get('api').then((resultat) => {
      // faire ce dont on a besoin du resultat
    })
  }
}
```

---
layout: default
---

# Store
Global state management


<img src="https://vuejs.org/assets/prop-drilling.11201220.png" />

---
layout: two-cols
---

- Installation de la librairie Vuex :

```bash
npm install vuex
```

- Configuration du store :

```js
import { createStore } from 'vuex';
const store = createStore({
  state() {
    return {
      counter: 0,
    }
  },
  getters: {
    getCounter: (state) => state.counter, 
  },
  mutations: {
    setCounter(state, payload) {
      state.counter = payload;
    }
  }
});
```

::right::

- Ajout ?? l'app :
```js
import store from './store';

const app = createApp(App);
app.use(store);

```

- Utilisation dans un composant :

```js
export default defineComponent({
  computed: {
    counter() {
      return this.$store.getters.getCounter;
    }
  },
  methods: {
    incrementCounterByTwo() {
      this.$store.commit('setCounter', 2);
    }
  }
})
```

<style>
  pre {
    margin-right: 15px;
  }

  .last-space {
    margin-top: 56px;
    margin-left: 5px;
  }
</style>
---