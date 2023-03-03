<!-- 
        Custom Card Component
---------------------------------------

This component works with two props
"dimentions": receives the values of height and width
"margins": receives the values of the second 
div height, width, and margin (right-left and
top-bottom).

/* How to use the component */

1. Import the component
import customCard from '../../components/container.vue'

2. Plece the component like a HTML tag:
<customCard>
</customCard>

3. Change the props into the custom HTML tag:
Example:
<customCard dimentions="height: 514px; width: 495px;" margins="height: 434px; width: 369.15px; margin: 40px 62.92px">
    (put your content here)
</customCard>

-->
<script setup>

defineProps({
    style: 'style',
    margins: 'margins'
})

</script>

<template>
    <div class="flex h-screen w-full relative justify-center items-center">
        <div class="flex w-1/5 text-center justify-center">
            <div :style="style" class="flex drop-shadow bg-white shadow-md b-rd-8px">
                <div :style="margins" class="flex">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>