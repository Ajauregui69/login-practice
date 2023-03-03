<script setup>

defineProps({
    tipo:{
        type: String,
        default:'text',
        validator: value => ['email', 'text', 'password'].includes(value)
    },
    text:'text',

})

</script>

<template>
    <div class="flex-column h-66px w-369.15px br-5px">
        <label class="text-start mb-8px mt-11px" >{{ text }}</label>
        <input id="div2" :type="tipo" name="input" :style="estilo"  :placeholder="text">
    </div>



</template>


<style scoped>

    label{
        width: 94px;
        height: 14px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        color: #000000;
    }
    input {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 12px;
        gap: 16px;

        width: 369.15px;
        height: 44px;

        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
        border-radius: 5px;
    }
</style>