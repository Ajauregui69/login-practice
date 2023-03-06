<script setup>
import customCard from '../../components/container.vue'
import inP from '../../components/inputs.vue'
import customBtn from "../../components/button.vue"
</script>

<template>
  <customCard dimentions="height: 514px; width: 495px;" margins="height: 434px; width: 369.15px; margin: 40px 62.92px">

    <form class="flex-column text-center h-434px w-369.15px" action="">
      <div class="display-flex h-48px text-23px ml-62.92px">
        <h1 class="font-bold text-42px">Login Form</h1>
      </div>

      <inP type="text" text="Username" class="mt-42px"></inP>
      <inP type="password" text="Password" class="mt-42px"></inP>

      <div class=" flex justify-evenly mt-42px">
        <customBtn btnText="Login" style="height: 50px; width: 146.82px; background-color: #4339F2; border-color: #4339F2; color: #FFFFFF;"/>
        <customBtn btnText="Sing Up" style="height: 50px; width: 146.82px; background-color: #FFFFFF; border-color: #4339F2; color: #4339F2;"/>
      </div>

      <div class="mt-42px">
        <RouterLink class="font-sans font-semibold text-14px c-#4339f2 underline" to="/recoverPass">
          Forgot password?
        </RouterLink>
      </div>
    </form>
    
  </customCard>
</template>

<style scoped></style>