<script setup lang="ts">
import { DownloadIcon, EyeIcon } from "lucide-vue-next";
import type { Game } from "~/types/game";

defineProps<{ game: Game }>();
</script>

<template>
  <div class="w-full">
    <NuxtImg
      :src="game.thumbnail"
      :alt="game.title"
      class="w-full aspect-video object-cover object-top rounded-md"
    ></NuxtImg>
    <h1 class="text-gray-100 font-bold text-lg md:text-xl mt-3 line-clamp-1">
      {{ game.title }}
    </h1>
    <p class="text-gray-500 text-sm md:text-base line-clamp-2">
      {{ game.short_description }}
    </p>
    <div class="flex items-center gap-2">
      <div
        class="flex bg-blue-900 h-7 aspect-square justify-center items-center rounded mt-2"
      >
        <NuxtImg
          src="/images/windows.svg"
          alt="Windows Logo"
          class="w-5 h-5 inline-block"
        />
      </div>
      <div
        class="flex bg-blue-900 h-7 px-2 text-xs justify-center items-center rounded mt-2 text-gray-400"
      >
        {{ game.genre }}
      </div>
    </div>
    <div class="flex items-center gap-1 md:gap-3 mt-5">
      <NuxtLink
        :to="game.game_url"
        target="_blank"
        class="bg-green-700 text-sm text-gray-100 px-2 py-1.5 cursor-pointer rounded transition flex items-center justify-center gap-1"
      >
        <span class="inline">Download Now</span>
        <DownloadIcon class="w-4 h-4 inline-block md:ml-1 text-white" />
      </NuxtLink>
      <NuxtLink
        :to="`/games/${game.id}`"
        class="bg-blue-600 text-sm hover:bg-blue-500 text-gray-100 px-2 py-1.5 cursor-pointer rounded transition flex items-center justify-center gap-1 w-fit aspect-square md:w-auto md:aspect-auto"
      >
        <span class="hidden md:inline">View Details</span>
        <EyeIcon class="w-4 h-4 inline-block md:ml-1 text-white" />
      </NuxtLink>
    </div>
  </div>
</template>
