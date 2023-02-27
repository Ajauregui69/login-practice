<script setup>
    let pokemons = [
        {
        name: "Bulbasaur",
        number: "1",
        ability: "Grass",
        type: "Grass",
        type2: "Poison",
        color: "#B200FF",
        },
        {
        name: "Ivisaur",
        number: "2",
        ability: "Grass",
        type: "Grass",
        type2: "Poison",
        },
        {
        name: "Venasaur",
        number: "3",
        ability: "Grass",
        type: "Grass",
        type2: "Poison",
        },
        {
        name: "Charmander",
        number: "4",
        ability: "Grass",
        type: "Fire",
        type2: "Poison",
        },
        {
        name: "Charmeleon",
        number: "5",
        ability: "Grass",
        type: "Fire",
        type2: "Poison",
        },
        {
        name: "Charmeleon",
        number: "5",
        ability: "Grass",
        type: "Fire",
        type2: "Fly",
        },
        {
        name: "Charmeleon",
        number: "5",
        ability: "Grass",
        type: "Fire",
        type2: "Fly",
        },
    ]
</script>

<template >

  <div class="flex h-screen bg-#F6F6F6 w-135% h-50% justify-center items center p-10% ">
    <table class="w-1000px h-2/3 b-rd content-center">
        <div class="overflow-scroll w-110% h-160%">
            <tr class="m-10px b-19px border-current-D7D7D7" v-for="pokemon in pokemons">
                <div class="flex content-center bg-#FFFFFF m-2% h-15% w-200% p-4% b-rd-10px">
                    <td class="font-semibold text-2xl font-mono color-#000000  mt-0% ml-1% border-none w-7%"><img alt="Vue logo" class="logo" src="@/assets/images/charmeleon.png" width="50" height="50" /></td>
                    <td class="font-semibold text-2xl font-mono color-#000000  mt-1% ml-2% border-none w-15%">{{ pokemon.name }}</td>
                    <td class="font-semibold text-2xl font-mono color-#000000  ml-5% p-8px w-10%">#{{ pokemon.number }}</td>
                    <td class="font-semibold text-2xl font-mono color-#000000  p-8px w-15%">{{ pokemon.ability }}</td>
                    <div class="flex w-35% ml-10% h-45%">
                        <div class="content-center justify-center h-100% w-35% bg-#2EB712 b-rd-5px">
                            <td class="font-semibold text-2xl font-mono color-#FFFFFF  m-15px p-8px ">{{ pokemon.type }}</td>
                        </div>
                        <div class="content-center justify-center h-100% w-35% bg-#B200FF b-rd-5px ml-2%">
                            <td class="font-semibold text-2xl font-mono color-#FFFFFF b-rd-5px m-15px p-8px ">{{ pokemon.type2 }}</td>
                        </div>
                    </div>
                    <td class="font-semibold text-2xl font-mono color-#000000  mt-0% ml-1% border-none w--2% opacity-20"><img alt="Vue logo" class="logo" src="@/assets/images/arrow.svg" width="50" height="50" /></td>
                </div>
            </tr>
        </div>
    </table>
  </div>

</template>
    
<style scoped >
    #tipo{
    }

</style>