<script setup></script>

<template>

  <div class="flex h-screen w-full relative items-center justify-center">
    <div class="w-1/5 text-center justify-center">
      <div class="flex w-550px h-451px" id="recover">
        <form class="w-sm text-left border-rd-8 w-550px h-451px border-outset border-current">
          
          <div class="pl-50px pt-20px pr-50px" id="card">

            <div class="text-23px font-700 font-mono"> <!-- Card title -->
              <h1>Recover</h1>
            </div>

            <div class="mt-20"> <!-- Inputs div -->
              <div class="mb-5px font-mono">
                <label for="Email">Email</label><br>
              </div>
              <div>
                <input type="email" id="email" name="Email" placeholder="Email" class="h-30px w-69 b-rd-5px border-outset border-current font-mono"><br>
              </div>
            </div>

            <div class="flex-row mt-100px"> <!-- Buttons div -->
              <input type="submit" value="Send" class="mr-44px h-40px w-120px bg-#4339F2 text-white b-transparent b-rd-10px font-mono">
              <input type="submit" value="Login" class="h-40px w-120px b-#4339F2 bg-white text-#4339F2 b-rd-10px font-mono">
            </div>

          </div>

        </form>
      </div>
    </div>
  </div>

</template>

<style scoped></style>