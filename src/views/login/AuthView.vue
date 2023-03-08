<!-- 
        Custom Card Component
---------------------------------------

This component works with two props
"dimentions": receives the values of height and width
"margins": receives the values of the second 
div height, width, and margin (right-left and
top-bottom).

/* How to use the component */

1. Import the component
import customCard from '../../components/container.vue'

2. Plece the component like a HTML tag:
<customCard>
</customCard>

3. Change the props into the custom HTML tag:
Example:
<customCard dimentions="height: 514px; width: 495px;" margins="height: 434px; width: 369.15px; margin: 40px 62.92px">
    (put your content here)
</customCard>

-->
<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="bg-#F8F8F8 flex h-screen w-screen justify-center items-center">
    <div class="drop-shadow bg-white shadow-md b-rd-8px">
      <RouterView />
    </div>
  </div>
</template>
