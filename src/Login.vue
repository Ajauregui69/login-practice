<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div
    class="flex h-screen w-full relative justify-center items-center bg-F8F8F8"
  >
    <div class="drop-shadow bg-blue shadow-md b-rd-8px">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
