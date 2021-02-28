<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <Message @close="handle">
    <template v-slot:title>Hello World e恭喜发财,hft大吉大利,今晚吃鸡</template>
    <template v-slot:default>新增成功！tset ci/cd</template>
  </Message>
  <compts></compts>
</template>

<script>
import Message from './Message.vue';
import compts from './compts.vue';
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handle() {
      console.log('handle');
    },
  },
  components: {
    Message,
    compts,
  },
};
</script>
