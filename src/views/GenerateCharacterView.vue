<script setup lang="ts">
import { reactive, ref } from 'vue';
import RandomCharacter from '@/RandomGeneration/RandomCharacter';
import CongenitalTrait from '@/RandomGeneration/CongenitalTrait';
import LifeEvent, { possibleOutcome } from '@/RandomGeneration/LifeEvent';
import Trait from '@/RandomGeneration/Trait';

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
const childhoodPaths = [
    new possibleOutcome("Active Child", [new Trait("ST+1"), new Trait("FP+1")], 1),
    new possibleOutcome("Bookish", [new Trait("INT+1")], 1),
    new possibleOutcome("Wild Child", [new Trait("Per+1"), new Trait("HT+1")], 1),
    new possibleOutcome("Did Nothing", [], 1)
];

let randomCharacter: RandomCharacter = reactive(new RandomCharacter("Bob", genetics))
let earlyChildhood: LifeEvent = reactive(new LifeEvent("Early Childhood", childhoodPaths))
let characterName= ref("");

function test(): void {
    randomCharacter.reroll(characterName.value, genetics)
    earlyChildhood.reroll("Early Childhood", childhoodPaths)
}
</script>

<template>
    <div class="chargen">
        <h1>Ready to Generate a new Character? Start here!</h1>
        <input type="text" v-model="characterName"/>
        <br/>
        <button @click="test">Generate Character</button>
        <p class="character">
            {{randomCharacter.name}}
            <p v-for="trait in randomCharacter.traits" :key="trait.id" class="trait">
                {{trait.name}}{{trait.hasLevels ? `: ${trait.level}` : null }}
            </p>
            <p>
                Early Childhood: {{earlyChildhood.outcome.name}}
                <p v-for="trait in earlyChildhood.outcome.traits" v-bind:key="trait.id" class="trait">
                    {{trait.name}}
                </p>
            </p>
        </p>
    </div>
</template>

<style scoped>
.character {
    background-color: cornflowerblue;
    border-style: solid
}

.trait {
    background-color: aliceblue; 
    text-align: center
}
</style>