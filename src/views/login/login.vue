<script setup>
import boxC from '../../components/container.vue'
import inP from '../../components/inputs.vue'
</script>

<template>
  <boxC style="height: 514px; width: 495px;" dimentions="height: 434px; width: 369.15px; margin: 40px 62.92px">
    <!-- atributo style recibe las dimensiones de la caja externa y dimentions recibe los valores de la caja interna (donde va el formulario) -->

    <form class="flex-column text-center h-434px w-369.15px" action="">
      <div class="display-flex h-48px text-23px ml-62.92px">
        <h1 class="font-bold text-42px">Login Form</h1>
      </div>

      <inP type="text" text="Username" class="mt-42px"></inP>
      <inP type="password" text="Password" class="mt-42px"></inP>

      <div class=" flex justify-evenly mt-42px">
        <input class="b-rd-7px b-0px bg-#4339F2 h-50px w-146.82px c-white font-sans text-14px" type="submit" value="Login">
        <button class="flex b-rd-7px b-2px bg-white text-#4339F2 b-#4339F2 h-50px w-146.82px justify-center items-center font-sans font-semibold text-14px" >Sing Up</button>
      </div>

      <div class="mt-42px">
        <RouterLink class="font-sans font-semibold text-14px c-#4339f2 underline" to="/recoverPass">
          Forgot password?
        </RouterLink>
      </div>
    </form>
  </boxC>
</template>

<style scoped></style>