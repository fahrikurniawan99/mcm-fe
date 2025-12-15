<script setup lang="ts">
import { LayoutDashboardIcon, MenuIcon, XSquare } from "lucide-vue-next";

const isOpen = ref(false);
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-blue-950/60">
    <div class="backdrop-blur-xs">
      <UiContainer>
        <div class="flex h-16 items-center justify-between">
          <NuxtLink to="/" class="text-gray-100 font-bold text-xl">
            MCM <span class="text-blue-600">Gaming</span>
          </NuxtLink>

          <button
            @click="isOpen = !isOpen"
            class="md:hidden p-2 rounded-md text-gray-300 bg-blue-600 hover:text-white transition"
            aria-label="Toggle Menu"
          >
            <MenuIcon class="w-6 h-6" v-if="!isOpen" />
            <XSquare class="w-6 h-6" v-else />
          </button>
          <div class="items-center gap-8 text-gray-100 hidden md:flex">
            <NuxtLink to="/" class="nav-link">Explore</NuxtLink>
            <NuxtLink to="/news" class="nav-link">News</NuxtLink>
            <NuxtLink to="/events" class="nav-link">Events</NuxtLink>
            <NuxtLink to="/teams" class="nav-link">Teams</NuxtLink>
          </div>
          <div class="items-center gap-2 hidden md:flex">
            <NuxtLink to="/dashboard/games/create">
              <UiButton variant="primary" size="sm">
                Dashboard
                <LayoutDashboardIcon class="inline-block w-4 h-4 ml-1" />
              </UiButton>
            </NuxtLink>
          </div>
        </div>
      </UiContainer>
    </div>
    <Transition name="slide">
      <nav
        v-if="isOpen"
        class="absolute top-16 left-0 w-full bg-blue-950/60 border-t border-blue-600 md:static md:w-auto md:bg-transparent md:border-0 h-[calc(100vh)] backdrop-blur-xs"
      >
        <ul
          class="flex flex-col md:flex-row md:items-center md:gap-6 p-4 md:p-0"
        >
          <li>
            <NuxtLink
              to="/"
              class="block px-3 py-2 rounded-md text-gray-300 hover:bg-blue-600 hover:text-white transition"
              >Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/games"
              class="block px-3 py-2 rounded-md text-gray-300 hover:bg-blue-600 hover:text-white transition"
              >Games</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/news"
              class="block px-3 py-2 rounded-md text-gray-300 hover:bg-blue-600 hover:text-white transition"
              >News</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/events"
              class="block px-3 py-2 rounded-md text-gray-300 hover:bg-blue-600 hover:text-white transition"
              >Events</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/dashboard/games/create"
              class="block px-3 py-2 rounded-md text-gray-300 hover:bg-blue-600 hover:text-white transition"
              >Dashboard</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease;
}
.slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
