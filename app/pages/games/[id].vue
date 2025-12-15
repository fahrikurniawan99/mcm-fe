<script setup lang="ts">
import {
  ArrowLeft,
  Calendar,
  Cpu,
  Download,
  Gpu,
  HardDrive,
  MemoryStick,
  Monitor,
  Tag,
} from "lucide-vue-next";
import type { DetailGame } from "~/types/game";

/**
 * MOCK DATA
 * Tinggal ganti ke useFetch nanti
 */
// const game = {
//   id: 1187,
//   title: "Throne and Liberty",
//   thumbnail: "https://www.mmobomb.com/g/1187/thumbnail.jpg",
//   status: "Live",
//   short_description:
//     "NCSoft's next big MMORPG release goes global, guild sieges and all.",
//   description: `
//     <p>NCSoft has been in the MMORPG space for years now, but ever since Lineage and Lineage II, the company hasn't hit it big on too many titles.</p>
//     <p>Featuring a focus on PvP, particularly between guilds, Throne and Liberty challenges players to band together into guilds.</p>
//     <p>Amazon Games has worked with NCSoft to adapt the MMO slightly from its original Korean release.</p>
//   `,
//   game_url: "https://www.mmobomb.com/open/throne-and-liberty",
//   genre: "MMORPG",
//   platform: "Windows",
//   publisher: "Amazon Games",
//   developer: "NCSoft",
//   release_date: "2024-10-01",
//   profile_url: "https://www.mmobomb.com/throne-and-liberty",
//   minimum_system_requirements: {
//     os: "Windows 10 (64-bit)",
//     processor: "Intel Core i5-6500",
//     memory: "8 GB RAM",
//     graphics: "NVIDIA Geforce GTX960",
//     storage: "63 GB available space",
//   },
//   screenshots: [
//     {
//       id: 1490,
//       image: "https://www.mmobomb.com/g/1187/throne-and-liberty-1.jpg",
//     },
//     {
//       id: 1491,
//       image: "https://www.mmobomb.com/g/1187/throne-and-liberty-2.jpg",
//     },
//     {
//       id: 1492,
//       image: "https://www.mmobomb.com/g/1187/throne-and-liberty-3.jpg",
//     },
//   ],
// };
const route = useRoute();

const gameId = computed(() => route.params.id as string);

const { data: game, pending } = useAsyncData(() =>
  $fetch<DetailGame>("/api/mmobomb/api1/game", {
    params: {
      id: gameId.value,
    },
  })
);
</script>

<template>
  <div class="bg-blue-950 text-gray-300 min-h-screen pt-10">
    <UiContainer
      v-if="pending"
      class="h-screen flex justify-center items-center"
    >
      <UiLoading />
    </UiContainer>
    <template v-else>
      <UiContainer class="pt-10">
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 text-gray-400 hover:text-white transition"
        >
          <ArrowLeft class="w-4 h-4" />
          Back to Games
        </NuxtLink>
      </UiContainer>

      <UiContainer class="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div class="lg:col-span-2">
          <NuxtImg
            :src="game?.thumbnail"
            alt="Thumbnail"
            class="w-full rounded-xl aspect-video object-cover"
          />
        </div>

        <div class="space-y-4">
          <span
            class="inline-block bg-green-700 text-xs px-3 py-1 rounded-full text-white"
          >
            {{ game?.status }}
          </span>

          <h1 class="text-3xl font-bold text-white">
            {{ game?.title }}
          </h1>

          <p class="text-gray-400" v-html="game?.short_description"></p>

          <div class="space-y-2 text-sm">
            <div class="flex items-center gap-2">
              <Tag class="w-4 h-4 text-blue-400" />
              {{ game?.genre }}
            </div>
            <div class="flex items-center gap-2">
              <Monitor class="w-4 h-4 text-blue-400" />
              {{ game?.platform }}
            </div>
            <div class="flex items-center gap-2">
              <Calendar class="w-4 h-4 text-blue-400" />
              {{ game?.release_date }}
            </div>
          </div>

          <a
            :href="game?.game_url"
            target="_blank"
            class="mt-4 inline-flex items-center gap-2 bg-green-700 hover:bg-green-600 transition px-5 py-3 rounded-lg text-white"
          >
            <Download class="w-4 h-4" />
            Download Game
          </a>
        </div>
      </UiContainer>

      <div class="max-w-300 w-[95%] mx-auto mt-16">
        <h2 class="text-xl font-semibold text-white mb-4">About the Game</h2>
        <div
          class="prose prose-invert max-w-none text-gray-400"
          v-html="game?.description"
        ></div>
      </div>

      <div class="max-w-300 w-[95%] mx-auto mt-16">
        <h2 class="text-xl font-semibold text-white mb-6">Screenshots</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtImg
            v-for="shot in game?.screenshots"
            :key="shot.id"
            :src="shot.image"
            class="rounded-lg object-cover aspect-video hover:scale-105 transition"
          />
        </div>
      </div>

      <div class="max-w-300 w-[95%] mx-auto mt-16 pb-20">
        <h2 class="text-xl font-semibold text-white mb-6">
          Minimum System Requirements
        </h2>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-blue-900/20 p-6 rounded-xl"
        >
          <div class="flex items-center gap-3">
            <Monitor class="w-4 h-4 text-blue-400" />
            {{ game?.minimum_system_requirements.os }}
          </div>
          <div class="flex items-center gap-3">
            <Cpu class="w-4 h-4 text-blue-400" />
            {{ game?.minimum_system_requirements.processor }}
          </div>
          <div class="flex items-center gap-3">
            <MemoryStick class="w-4 h-4 text-blue-400" />
            {{ game?.minimum_system_requirements.memory }}
          </div>
          <div class="flex items-center gap-3">
            <Gpu class="w-4 h-4 text-blue-400" />
            {{ game?.minimum_system_requirements.graphics }}
          </div>
          <div class="flex items-center gap-3">
            <HardDrive class="w-4 h-4 text-blue-400" />
            {{ game?.minimum_system_requirements.storage }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
