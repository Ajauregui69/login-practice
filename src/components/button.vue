<!-- 
        Custom button component
---------------------------------------

This component receives several props to
modify it's behavior and it has some fixed
styles like the border-radius property and
the font. NOTE: Change these two properties
here if it's needed.


/* How to use the component */

-> Import the component first:
import customBtn from "../../components/button.vue"

-> Place the component like a HTML tag:
<customBtn/>

-> Change the props into the custom HTML tag
<customBtn btnText="Test Text" style="height: 43.87px; width: 146.82px; background-color: #4339F2; border: #4339F2; color: white;"/>


/* Props */

btnText - Changed the text inside the button
style - Adds styles to the button (Use CSS)


/* Style props */

-> height
-> width
-> background-color
-> border
-> color

NOTE: You can add more style props to the HTML tag if it's needed

 -->

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

defineProps({
  btnText: {
    type: String,
    required: true,
  },
  style: "style",
  goTo: {
    type: String,
    required: false,
    default: "",
  },
});

function to(id) {
    router.push(id)
}
</script>

<template>
  <button @click="to(goTo)" class="b-rd-10px font-mono" :style="style">
    {{ btnText }}
  </button>
</template>

<style scoped></style>
