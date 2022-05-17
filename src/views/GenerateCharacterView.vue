<script setup lang="ts">
import RandomCharacter from '@/RandomGeneration/RandomCharacter';
import CongenitalTrait from '@/RandomGeneration/CongenitalTrait';

function test() {
    const element = document.querySelector(".chargen")
    const bob = new RandomCharacter("Bob")
    bob.traits = [new CongenitalTrait("Herpes", 1, 2, false, {}, "It's herpes")]

    let characterP = document.createElement('p')
    characterP.innerText = bob.name.valueOf()

    let traits = document.createElement('p')
    traits.style.textAlign = "center"
    for (let el of bob.traits) {
        traits.innerText += `${el.name}: ${el.description}` 
    }
    
    characterP.appendChild(traits)
    element?.appendChild(characterP)
}

</script>

<template>
    <div class="chargen">
        <h1>Ready to Generate a new Character? Start here!</h1>
        <button @click="test">Generate Character</button>
    </div>
</template>

<style scoped>
</style>