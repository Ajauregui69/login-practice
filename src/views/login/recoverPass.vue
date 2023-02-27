<script setup></script>

<template>

  <div class="flex h-screen w-full relative items-center justify-center">
    <div class="w-1/5 text-center justify-center">
      <div class="flex w-550px h-451px" id="recover">
        <form class="w-sm text-left border-rd-8 w-550px h-451px border-outset border-current">
          
          <div class="pl-50px pt-20px pr-50px" id="card">

            <div class="text-23px font-700 font-mono"> <!-- Card title -->
              <h1>Recover Password</h1>
            </div>

            <div class=""> <!-- Inputs div -->
              <div class="mb-5px font-mono">
                <label for="Pass">New Password</label><br>
              </div>
              <div>
                <input type="password" id="pass" name="Pass" placeholder="******" class="h-30px w-69 b-rd-5px border-outset border-current font-mono mb-40px"><br>
              </div>
              <div class="font-mono mb-5px">
                <label for="ConfirmPass">Repeat New Password</label><br>
              </div>
              <div>
                <input type="password" id="confirmPass" name="ConfirmPass" placeholder="******" class="h-30px w-69 b-rd-5px border-outset border-current font-mono"><br>
              </div>
            </div>

            <div class="text-center mt-30px"> <!-- Button div -->
              <input type="submit" value="Send" class="h-50px w-130px bg-#4339F2 text-white b-transparent b-rd-10px font-mono">
            </div>

          </div>

        </form>
      </div>
    </div>
  </div>

</template>

<style scoped></style>