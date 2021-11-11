<script lang="ts">
import { ref, defineComponent } from "vue";
import { useMotion, Variant } from "@vueuse/motion";

export default defineComponent({
  setup() {
    const angular = ref<HTMLElement>();
    const angularList = ref<HTMLElement>();
    const react = ref<HTMLElement>();
    const reactList = ref<HTMLElement>();
    const initialConfig: Variant = {
      initial: {
        scale: 1,
        opacity: 1,
      },
      enter: {
        scale: 1,
        opacity: 1,
      }
    };

    const angularMotion = useMotion(angular, initialConfig);
    const angularListMotion = useMotion(angularList, initialConfig);
    const reactMotion = useMotion(react, initialConfig);
    const reactListMotion = useMotion(reactList, initialConfig);

    const apply = async (config: string | Variant) => {
      angularMotion.apply(config);
      angularListMotion.apply(config);
      reactMotion.apply(config);
      reactListMotion.apply(config);
    }

    return {
      apply,
      angular,
      angularList,
      react,
      reactList,
    };
  },
  watch: {
    "$slidev.nav.clicks": {
      handler: async function (clicks) {
        if (clicks === 0) {
          this.apply('enter');
        };

        if (clicks === 1) {
          await this.apply({
            opacity: 0.2,
          });
          this.$slidev.nav.clicks = 0;
        };
      },
      deep: true,
      immediate: true,
    },
  },
});
</script>

<template>
  <div class="flex flex-nowrap justify-items-center items-center">
    <div class="flex-1" ref="angular">
      <img
        class="w-full p-8"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
      />
    </div>
    <div class="flex-1">
      <img
        class="w-full p-15"
        src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
      />
    </div>
    <div class="flex-1" ref="react">
      <img class="w-full" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
    </div>
  </div>
  <div class="w-auto flex text-center justify-items-center items-center">
    <div class="flex-1" ref="angularList">
      <ul>
        <li>Très (trop) complet</li>
        <li>Steep learning curve</li>
      </ul>
    </div>
    <div class="flex-1">
      <ul>
        <li>Apprentissage progressif</li>
        <li>Complet</li>
        <li>Léger</li>
      </ul>
    </div>
    <div class="flex-1" ref="reactList">
      <ul>
        <li>Très léger</li>
        <li>Robuste</li>
        <li>Apprentissage ardu</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>