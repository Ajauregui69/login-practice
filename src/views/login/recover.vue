<script setup>

</script>

<template>

  <div class="flex h-screen w-full relative items-center justify-center">
    <div class="flex w-1/5 text-center justify-center">
      <div class="flex w-495px h-451px" id="recover">
        <form class="w-sm text-left border-rd-8 pl-63px pt-68px pr-62px w-451px h-451px border-transparent drop-shadow shadow-md">

          <div class="text-23px font-700 font-sans"> <!-- Card title -->
            <h1>Recover</h1>
          </div>

          <div class="mt-79.25px"> <!-- Inputs div -->
            <div class="mb-8px font-mono">
              <label for="Email">Email</label><br>
            </div>
            <div>
              <input type="email" id="email" name="Email" placeholder="Email" class="border-rd-1 h-44px w-369.51px b-1px text-left font-mono b-solid b-#0000001A color-#00000066 px-12px"><br>
            </div>
          </div>

          <div class="flex-row mt-81.13px"> <!-- Buttons div -->
            <input type="submit" value="Send" class="mr-75.51px h-43.87px w-146.82px bg-#4339F2 text-white b-transparent b-rd-10px font-mono">
            <input type="submit" value="Login" class="h-43.87px w-146.82px b-#4339F2 bg-white text-#4339F2 b-rd-10px font-mono">
          </div>

        </form>
      </div>
    </div>
  </div>

</template>

<style scoped></style>