<script setup>
  import customCard from '../../components/container.vue'
  import customBtn from "../../components/button.vue"
  import customInput from '../../components/inputs.vue'
</script>

<template>
  <customCard dimentions="height: 550px; width: 495px;" margins="height: 439px; width: 369.15px; margin: 51px 62.92px">
    <form>
      <div class="text-left mb-40.6px"> <!-- Card title -->
        <h1 class="text-42px">Change<br>Password</h1>
      </div>

      <div class="mb-57.87px"> <!-- Inputs div -->
        <customInput type="password" text="New Password" dimentions="width: 345.15px; height: 20px" />
      </div>
      <div class="mb-45.14px">
        <customInput type="password" text="Repeat New Password" dimentions="width: 345.15px; height: 20px" />
      </div>

      <div class=""> <!-- Button div -->
        <customBtn btnText="Change" style="height: 62.4px; width: 146.82px; background-color: #4339F2; border: #4339F2; color: white;"/>
      </div>

    </form>
  </customCard>

</template>

<style scoped></style>