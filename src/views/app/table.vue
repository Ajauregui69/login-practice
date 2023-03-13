<script setup>
import pokemonComp from "../../components/pokemon.vue";

let pokemons = [
  {
    name: "Bulbasaur",
    number: "1",
    ability: "Adapt",
    type: "GRASS",
    type2: "POISON",
    style: "h-26px w-82px bg-#4BA85F b-rd-5px pl-11.5px",
    style2: "h-26px w-82px b-rd-5px pl-11.5px ml-40px bg-#8623B5",
    pImage: "/src/assets/images/bulbasaur.png",
    tImage1: "/src/assets/images/grass.png",
    tImage2: "/src/assets/images/Vector.png",
  },
  {
    name: "Charizard",
    number: "2",
    ability: "Aerilate",
    type: "FIRE",
    type2: "FLY",
    style: "h-26px w-82px bg-#F16D18 b-rd-5px pl-11.5px",
    style2: "h-26px w-82px b-rd-5px pl-11.5px ml-40px bg-#C9EAEE",
    pImage: "/src/assets/images/charizard.png",
    tImage1: "/src/assets/images/grass.png",
    tImage2: "/src/assets/images/Vector.png",
  },
  {
    name: "Blastoise",
    number: "3",
    ability: "Aerilate",
    type: "WATTER",
    type2: "NORMAL",
    style: "h-26px w-82px bg-#1173CF b-rd-5px pl-11.5px",
    style2: "h-26px w-82px b-rd-5px pl-11.5px ml-40px bg-#C0C0C0",
    pImage: "/src/assets/images/blastoise.png",
    tImage1: "/src/assets/images/grass.png",
    tImage2: "/src/assets/images/Vector.png",
  },
  {
    name: "Hawlucha",
    number: "4",
    ability: "Aerilate",
    type: "FIGTH",
    type2: "FLY",
    style: "h-26px w-82px bg-#900C3F b-rd-5px pl-11.5px",
    style2: "h-26px w-82px b-rd-5px pl-11.5px ml-40px bg-#C9EAEE",
    pImage: "/src/assets/images/hawlucha.png",
    tImage1: "/src/assets/images/grass.png",
    tImage2: "/src/assets/images/Vector.png",
  },
  {
    name: "Bulbasaur",
    number: "5",
    ability: "Adapt",
    type: "GRASS",
    type2: "POISON",
    style: "h-26px w-82px bg-#4BA85F b-rd-5px pl-11.5px",
    style2: "h-26px w-82px b-rd-5px pl-11.5px ml-40px bg-#8623B5",
    pImage: "/src/assets/images/bulbasaur.png",
    tImage1: "/src/assets/images/grass.png",
    tImage2: "/src/assets/images/Vector.png",
  },
];

</script>

<template>
  <div class="fle h-100%">
    <table class="w-100%">
      <tr class="" v-for="(pokemon, $p) in pokemons" :key="$p">
        <pokemonComp v-bind:pokemon="pokemon" />
      </tr>
    </table>
  </div>
</template>

<style scoped>
#tipo {
}
</style>
