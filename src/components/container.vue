<script setup>

defineProps({
    style: 'style',
    dimentions: 'dimentions'
})

</script>

<template>
    <div class="flex h-screen w-full relative justify-center items-center">
        <div class="flex w-1/5 text-center justify-center">
            <div :style="style" class="flex drop-shadow bg-white shadow-md b-rd-8px">
                <div :style="dimentions" class="flex">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>