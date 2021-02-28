<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <img alt="Vue logo" src="/src/assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import HelloWorld from '/comps/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  setup() {
    console.log(import.meta.env.VITE_TOKEN);
    fetch('/api/users')
      .then(response => response.json())
      .then(json => console.log(json));
  },
};
</script>
