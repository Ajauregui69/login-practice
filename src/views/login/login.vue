<script setup>
import inP from "../../components/inputs.vue";
import customBtn from "../../components/button.vue";
</script>

<template>
  <form action="">
    <div class="display-flex h-48px text-23px ml-62.92px">
      <h1 class="font-bold text-42px">Login Form</h1>
    </div>

    <inP type="text" text="Username" class="mt-42px"></inP>
    <inP type="password" text="Password" class="mt-42px"></inP>

    <div class="flex justify-evenly mt-42px">
      <customBtn
        btnText="Login"
        style="
          height: 50px;
          width: 146.82px;
          background-color: #4339f2;
          border-color: #4339f2;
          color: #ffffff;
        "
      />
      <customBtn
        btnText="Sing Up"
        style="
          height: 50px;
          width: 146.82px;
          background-color: #ffffff;
          border-color: #4339f2;
          color: #4339f2;
        "
      />
    </div>

    <div class="mt-42px">
      <RouterLink
        class="font-sans font-semibold text-14px c-#4339f2 underline"
        to="/recoverPass"
      >
        Forgot password?
      </RouterLink>
    </div>
  </form>
</template>

<style scoped></style>
