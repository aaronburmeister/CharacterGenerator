<script setup lang="ts">
import { reactive, ref } from 'vue';
import RandomCharacter from '@/RandomGeneration/RandomCharacter';
import CongenitalTrait from '@/RandomGeneration/CongenitalTrait';

const genetics = [
    new CongenitalTrait("Herpes", 1, 3),
    new CongenitalTrait("Taysachs"),
    new CongenitalTrait("Poor Vision", 1, 3),
    new CongenitalTrait("Diabetes", 17, 200, true, [
        {
            name: "Type I",
            odds: 50
        },
        {
            name: "Type II",
            odds: 50
        }
    ]),
    new CongenitalTrait("Eye Color", 1, 1, true, [
        {
            name: "Brown",
            odds: 79
        },
        {
            name: "Hazel",
            odds: 5
        },
        {
            name: "Amber",
            odds: 5
        },
        {
            name: "Blue",
            odds: 9
        },
        {
            name: "Gray",
            odds: 1
        },
        {
            name: "Heterochromia",
            odds: 1
        }
    ])
]

let randomCharacter = reactive(new RandomCharacter("Bob"))
let count = ref(0)

function test() {
    randomCharacter.traits = []
    // randomCharacter.name = randomCharacter.name

    for (let trait in genetics) {
        // console.log(genetics[trait])
        randomCharacter.hasTrait(genetics[trait])
    }

    count.value++
}

</script>

<template>
    <div class="chargen">
        <h1>Ready to Generate a new Character? Start here!</h1>
        <button @click="test">Generate Character</button>
        <p style="background-color: cornflowerblue; border-style: solid">{{randomCharacter.name}} {{count}}
            <p v-for="trait in randomCharacter.traits" style="background-color: aliceblue; text-align: center">
                {{trait.name}}{{trait.hasLevels ? `: ${trait.level}` : null }}
            </p> 
        </p>
    </div>
</template>

<style scoped>

</style>