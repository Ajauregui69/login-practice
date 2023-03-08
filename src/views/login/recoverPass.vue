<script setup>
import customBtn from "../../components/button.vue";
import customInput from "../../components/inputs.vue";
</script>

<template>
  
    <form>
      <div class="text-left mb-40.6px">
        <!-- Card title -->
        <h1 class="text-42px">Change<br />Password</h1>
      </div>

      <div class="mb-57.87px">
        <!-- Inputs div -->
        <customInput
          type="password"
          text="New Password"
          dimentions="width: 345.15px; height: 20px"
        />
      </div>
      <div class="mb-45.14px">
        <customInput
          type="password"
          text="Repeat New Password"
          dimentions="width: 345.15px; height: 20px"
        />
      </div>

      <div class="">
        <!-- Button div -->
        <customBtn
          btnText="Change"
          style="
            height: 62.4px;
            width: 146.82px;
            background-color: #4339f2;
            border: #4339f2;
            color: white;
          "
        />
      </div>
    </form>
</template>

<style scoped></style>
