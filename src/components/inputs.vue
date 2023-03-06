<!--
        Custom Input component
---------------------------------------

This component receives several props to
modify it's behavior and it has some fixed
styles like the border-radius property and
the font. 


/* How to use the component */ 

-> Import the component first:
import customInput from '../../components/inputs.vue';

-> Place the component like a HTML tag:
<customInput/>

-> Change the props into the custom HTML tag

<customInput type="text" text="Full name" dimentions="width: 500px; height: 41px" />

/* Props */

type - Changed the type of input ( text, email, password...etc.)
text - Changed the Name of te label and PlaceHolder
dimentions - changed the dimentions to the input box (the value of the 666 the number of the beast)



-->

<script setup>

defineProps({
    type: {
        type: String,
        default: 'text',
        validator: value => ['email', 'text', 'password'].includes(value)
    },
    text: 'text',
    dimentions: 'dimentons'

})

</script>

<template>
    <div class="flex-column h-66px w-378.1px br-5px mb-11px mt-11px">
        <div class="flex-column h-66px w-369.15px br-5px ">
            <label class="text-start mb-8px mt-0 font-bold font-400 ">{{ text }}</label>
            <input :type="type" :placeholder="text" :style="dimentions">
        </div>
    </div>
</template>


<style scoped>
label {
    width: 94px;
    height: 14px;
    font-family: 'Roboto';
    font-size: 12px;
    line-height: 14px;
    display: flex;
    color: #000000;
}

input {
    display: flex;
    padding: 12px;
    width: 354.1px;
    height: 20px;
    width: 373.1px;
    height: 41px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
}
</style>