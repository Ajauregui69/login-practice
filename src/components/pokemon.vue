<script setup>
import { reactive } from 'vue';

defineProps({

    pokemon: {
        type: Object,
        required: true,
    }

})

</script>

<template>
    <div class="flex content-center bg-#FFFFFF mb-40px h-110px w-1300PX b-rd-10px pl-7px">
        <td class="font-semibold text-2xl font-mono color-#000000 border-none w-7%"><img alt="Vue logo" class="logo"
                :src="pokemon.pImage" width="112" height="94" /></td>
        <div class="flex-none ml-25px mt-31px w-115px">
            <td class="font-semibold text-22px font-sans color-#000000  border-none w-91px">{{ pokemon.name }}
            </td>
            <h4 class="font-sans text-14px opacity-40 mt--2px">pokemon name</h4>
        </div>
        <div class="flex-none ml-165px mt-31px">
            <td class="font-semibold text-22px font-sans color-#000000 w-10%">#{{ pokemon.number }}</td>
            <h4 class="font-sans text-14px opacity-40 mt--2px">Number</h4>
        </div>
        <div class="flex-none ml-219px mt-31px w-60px">
            <td class="font-semibold text-22px font-sans color-#000000 w-10%">{{ pokemon.ability }}</td>
            <h4 class="font-sans text-14px opacity-40 mt--2px">Ability</h4>
        </div>
        <div class="flex ml-222px mt-50px ">
            <div :class="pokemon.style" style="align-content: center;">
                <img :src="pokemon.tImage1" alt="Vue logo" class="logo ml--3px pt-4px" width="8" height="18" />
                <span class=" font-roboto color-#FFFFFF text-12px ml-7px mt-7.5px absolute">{{ pokemon.type }}</span>
            </div>
            <div :class="pokemon.style2">
                <img :src="pokemon.tImage2" alt="Vue logo" class="logo ml--1px pt-4px" width="8" height="18" />
                <span class=" font-roboto color-#FFFFFF text-12px ml-7px mt-7.5px absolute">{{ pokemon.type2 }}</span>
            </div>
        </div>
        <td class="font-semibold text-2xl font-mono color-#000000  mt-45.67px ml-63.83px border-none w--2% opacity-80">
            <img alt="Vue logo" class="logo" src="@/assets/images/Color.png" width="10" height="16.67" />
        </td>
    </div>
</template>