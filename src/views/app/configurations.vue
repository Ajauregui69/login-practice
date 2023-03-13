
<script setup>
    import customBtn from "../../components/button.vue";
    import customInput from '../../components/inputs.vue';
</script>

<template>

<div class="bg-#F8F8F8 flex h-screen w-screen justify-center items-center">
    <div :style="dimentions" class="drop-shadow bg-white shadow-md b-rd-8px px-60px py-40px my-width">

        <form class="flex-column" action="" >
            <div class="mb-15px">
                <h1 class="display-flex font-bold text-42px font-inter">Update User</h1> 
            </div>

            <div class="mb-15px">       
                <customInput type="text" text="Username" dimentions="width: 480px; height: 20px"/>
            </div>
            
            <div class="mb-15px">          
                <customInput type="email" text="Email" dimentions="width: 480px; height: 20px"/>
            </div>

            <div class="mb-15px">          
                <customInput type="text" text="Full Name" dimentions="width: 480px; height: 20px"/>
            </div>

            <div class="mb-30px">
            
                <customInput type="password" text="Password" dimentions="width: 480px; height: 20px"/>
            </div>
            
            <div class="text-center ">
                <customBtn btnText="Update" style="height: 50px; width: 400px; background-color: #4339F2; border: #4339F2; color: white;"/>
            </div>
                    
        </form>
    </div>
</div>

</template>

<style scoped>

.my-width{
    width: calc(100% - 200px);
}

</style>

