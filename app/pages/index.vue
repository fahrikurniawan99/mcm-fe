<script setup lang="ts">
import type { Game } from '~/types/game';

definePageMeta({
  layout: "default",
});

const { data: pcGames, pending } = useAsyncData(() =>
$fetch<Game[]>("/api/mmobomb/api1/games", {
    params: {
      platform: "pc",
    },
  })
);

</script>


<template >
  <UiContainer v-if="pending"  class="h-screen flex justify-center items-center">
    <UiLoading />
  </UiContainer>
<template v-else >
  <div class="absolute top-0 h-screen w-full">
    <div
      class="absolute inset-0 bg-linear-to-t from-blue-950 to-blue-950/40 z-10"
    ></div>

    <NuxtImg
      src="/images/background/faze-clan-wallpaper.jpeg"
      alt="Faze Clan Wallpaper"
      class="w-full h-full object-cover object-top"
    />
  </div>
  <UiContainer
    class="h-screen flex flex-col justify-center items-center relative z-10"
  >
    <div class="text-center">
      <p class="text-blue-600 font-medium">Welcome to MCM Esports</p>
      <h1 class="text-5xl md:text-6xl font-bold text-white mt-2">
        Elevate Your Game with MCM Esports
      </h1>
      <p class="text-gray-300 max-w-2xl mx-auto mt-5">
        Discover the latest news, events, and insights from the world of
        competitive gaming. Join our community of passionate gamers and stay
        ahead in the esports arena.
      </p>
      <div class="flex justify-center gap-4 mt-10">
        <button
          class="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition"
        >
          Get Started
        </button>
        <button
          class="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition"
        >
          Learn More
        </button>
      </div>
    </div>
  </UiContainer>
  <UiContainer class="mt-20">
    <h1 class="text-2xl md:text-3xl font-bold text-white">PC Games</h1>
    <div class="grid grid-cols-2 gap-5 mt-5">
      <GameItem v-for="game in pcGames" :key="game.id" :game="game" />
    </div>
  </UiContainer>
</template>
</template>
