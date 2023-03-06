
<script setup>
    import customBtn from "../../components/button.vue";
    import customCard from '../../components/container.vue';
    import customInput from '../../components/inputs.vue';
</script>


<template>

<customCard dimentions="height: calc(100% - 30px); width: calc(100% - 100px);" margins="height: calc(100% - 180px); width: calc(100% - 225.84px); margin: 40px 62.92px">

    <form class="flex-column" action="" >
        <div class="mb-30px">
            <h1 class="display-flex font-bold text-42px font-inter">Update User</h1> 
        </div>

        <div class="mb-25px">
            <!-- <label class="text-center font-roboto text-12px font-semibold" for="username">Username</label><br>
            <input class="mt-8px border-rd-1 h-44px w-616px text-16px b-1px text-left font-roboto b-solid b-#0000001A color-#00000066 p-12px shadow" type="text" id="username" name="name" value="chuckylozano"><br> -->
            <customInput type="text" text="Username" />
        </div>
        
        <div class="mb-25px">
            <!-- <label class="text-center font-roboto text-12px font-semibold" for="email">Email</label><br>
            <input class="mt-8px border-rd-1 h-44px w-616px text-16px b-1px text-left font-roboto b-solid b-#0000001A color-#00000066 p-12px shadow" type="email" id="email" name="email" value="ejemplo@ex.ex"><br> -->
            <customInput type="email" text="Email" />
        </div>

        <div class="mb-25px">
            <!-- <label class="text-center font-roboto text-12px font-semibold" for="email">Full Name</label><br>
            <input class="mt-8px border-rd-1 h-44px w-616px text-16px b-1px text-left font-roboto b-solid b-#0000001A color-#00000066 p-12px shadow" type="text" id="fullname" name="fullname" value="El Chucky Lozano"><br> -->
            <customInput type="text" text="Full Name" />
        </div>

        <div class="mb-30px">
            <!-- <label class="text-center font-roboto text-12px font-semibold" for="email">Password</label><br>
            <input class="mt-8px border-rd-1 h-44px w-616px text-16px b-1px text-left font-roboto b-solid b-#0000001A color-#00000066 p-12px shadow" type="password" id="password" name="password" value="000000"><br> -->
            <customInput type="password" text="Password" />
        </div>
        
        <div class="text-center">
            <customBtn btnText="Update" style="height: 60px; width: 450px; background-color: #4339F2; border: #4339F2; color: white;"/>
        </div>
                

    </form>


</customCard>

</template>

<style scoped></style>

