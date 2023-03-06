<script setup>
import customCard from '../../components/container.vue';
import customInput from '../../components/inputs.vue';
import customBtn from "../../components/button.vue"

</script>

<template>
  <customCard dimentions="height: 710px; width: 495px;" margins="height: 434px; width: 369.15px; margin: 40px 62.92px">

    <form>

      <h1 class="display-flex display-start text-center color-black text-42px mt-0 font-bold mb-45.3px font-roboto ">Sign
        Up
      </h1>

      <customInput type="text" text="Full name" />
      <customInput type="mail" text="Email" />
      <customInput type="text" text="Username" />
      <customInput type="password" text="Password" />
      <customInput type="password" text="Repeat Password" />
      <customBtn class="mt-57.33px" btnText="Sign up"
        style="height: 43.87px; width: 146.82px; background-color: #4339F2; border: #4339F2; color: white;">

      </customBtn>
    </form>

  </customCard>
</template>



<style scoped>
h1 {
  font-family: roboto;
}
</style>
