<script setup></script>

<template>

  <div class="flex h-screen w-full relative items-center justify-center">
    <div class="flex w-1/5 text-center justify-center">
      <div class="flex w-550px h-495px" id="recover">
        <form class="w-sm text-left border-rd-8 pl-63px pt-51px pr-69px w-495px h-550px border-transparent drop-shadow shadow-md">

          <div class="text-23px font-700 font-sans"> <!-- Card title -->
            <h1>Change<br>Password</h1>
          </div>

          <div class=""> <!-- Inputs div -->
            <div class="mb-8px font-mono mt-40.6px">
              <label for="Pass">New Password</label><br>
            </div>
            <div>
              <input type="password" id="pass" name="Pass" placeholder="******" class="border-rd-1 h-44px w-369.15px b-1px text-left font-mono b-solid b-#0000001A color-#00000066 px-12px"><br>
            </div>
            <div class="font-mono mb-8px mt-57.87px">
              <label for="ConfirmPass">Repeat New Password</label><br>
            </div>
            <div>
              <input type="password" id="confirmPass" name="ConfirmPass" placeholder="******" class="border-rd-1 h-44px w-369.15px b-1px text-left font-mono b-solid b-#0000001A color-#00000066 px-12px"><br>
            </div>
          </div>

          <div class="text-center mt-40px"> <!-- Button div -->
            <input type="submit" value="Send" class="h-62.4px w-146.82px bg-#4339F2 text-white b-transparent b-rd-10px font-mono">
          </div>

        </form>
      </div>
    </div>
  </div>

</template>

<style scoped></style>