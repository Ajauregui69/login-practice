<script setup>
import customCard from '../../components/container.vue'
import customBtn from "../../components/button.vue"
import customInput from '../../components/inputs.vue'
</script>

<template>

  <customCard dimentions="height: 451px; width: 495px;" margins="height: 315px; width: 369.15px; margin: 68px 62.85px 68px 63px">
    <form>

      <div class="text-left mb-79.25px"> <!-- Card title -->
        <h1 class="text-42px font-sans">Recover</h1>
      </div>

      <div class="mb-81.13px"> <!-- Inputs div -->
        <customInput type="text" text="Email" dimentions="width: 345.15px; height: 20px" />
      </div>

      <div class="flex justify-between"> <!-- Buttons div -->
        <customBtn btnText="Send" style="height: 43.87px; width: 146.82px; background-color: #4339F2; border-color: #4339F2; color: white;"/>
        <customBtn btnText="Login" style="height: 43.87px; width: 146.82px; background-color: white; border-color: #4339F2; color: #4339F2;"/>
      </div>

    </form>
  </customCard>

</template>

<style scoped></style>