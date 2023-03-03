<script setup>
import boxC from '../../components/container.vue'
import inP from '../../components/inputs.vue'
</script>

<template>
  <div class="flex h-screen w-full relative justify-center items-center">
    <div class="w-1/5 text-center justify-center">
      <boxC style="height: 514px; width: 495px;" dimentions="height: 434px; width: 369.15px; margin: 40px 62.92px">
        <!-- atributo style recibe las dimensiones de la caja externa y dimentions recibe los valores de la caja interna (donde va el formulario) -->

          
          <!-- <div class="flex h-514px w-495px drop-shadow shadow-md"> -->

        <form class="flex-column text-center h-434px w-369.15px" action="">
          <div class="display-flex h-48px text-23px ml-62.92px">
            <h1 class="font-bold text-42px">Login Form</h1>
          </div>
          <label class="display-flex text-12px font-semibold font-roboto mt-42px mb-8px" for="femail">Username</label>
          <input class="border-rd-1 b-1px text-left b-solid b-#0000001A color-#00000066 drop-shadow shadow-1 text-16px h-44px w-369.15px p-12px mb-42px" placeholder="Username" type="text" id="femail" name="femail" required>

          <!-- <label class="display-flex text-12px font-semibold font-roboto ml-62.92px mb-8px" for="fpass">Password</label> -->
          <!-- <input class="border-rd-1 b-1px text-left b-solid b-#0000001A color-#00000066 drop-shadow shadow-1 text-16px h-44px w-369.15px p-12px" placeholder="********" type="password" id="fpass" name="fpass" required> -->

          <inP type="text" text="Password"></inP>

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
      
        <!-- </div>  -->
    </div>
  </div>
</template>

<style scoped></style>