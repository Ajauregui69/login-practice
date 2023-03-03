<script setup>
import customCard from '../../components/container.vue';
import inputs from '../../components/inputs.vue';
import customBtn from "../../components/button.vue"

</script>

<template>
  <customCard dimentions="height: 710px; width: 495px;" margins="height: 434px; width: 369.15px; margin: 40px 62.92px">

    <form>

      <h1 class="display-flex display-start color-black text-42px font-bold h-70.45px mb-45.3px">Sign Up</h1>


      <inputs type="text" text="Full name" />
      <inputs type="mail" text="Email" />
      <inputs type="text" text="Username" />
      <inputs type="password" text="Password" />
      <inputs type="password" text="Password" />
      <customBtn class="mt-57.33px" btnText="Sign up"
        style="height: 43.87px; width: 146.82px; background-color: #4339F2; border: #4339F2; color: white;">

      </customBtn>
    </form>

  </customCard>
</template>


<style scoped></style>
