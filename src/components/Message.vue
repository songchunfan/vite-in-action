<template>
  <div :class="$style.messageBox">
    <h3>
      <slot name="title"></slot>
      <span @click="$emit('close')" :class="$style.messageBoxClose">X</span>
    </h3>
    <slot></slot>
  </div>
</template>

<script>
import { onMounted } from 'vue';
export default {
  emits: ['close'],
  setup() {
    onMounted(() => {});
  },
};
</script>

<style module scoped>
.message-box {
  padding: 10px 20px;
  background-color: #4fc08d;
  color: #fff;
  font-weight: 400;
}
.message-box-close {
  cursor: pointer;
  display: flex;
}
</style>
