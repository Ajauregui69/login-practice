<script setup>

defineProps({
    style: 'style',
    dimentions: 'dimentions'
})

</script>

<template>
    <div :style="style" class="flex drop-shadow bg-white shadow-md b-rd-8px">
        <div :style="dimentions" class="flex">
            <slot></slot>
        </div>
    </div>
</template>