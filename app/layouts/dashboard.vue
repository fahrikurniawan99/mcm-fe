<script setup lang="ts">
import {
  FileText,
  Gamepad2,
  Image,
  LayoutDashboard,
  LogOut,
  PlusCircle,
} from "lucide-vue-next";
import { Toaster } from "vue-sonner";
import "vue-sonner/style.css";

const menus = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    to: "/dashboard",
  },
  {
    label: "Games",
    icon: Gamepad2,
    to: "/dashboard/games",
  },
  {
    label: "Add Game",
    icon: PlusCircle,
    to: "/dashboard/games/create",
  },
  {
    label: "Media",
    icon: Image,
    to: "/dashboard/media",
  },
  {
    label: "Content",
    icon: FileText,
    to: "/dashboard/content",
  },
];
</script>

<template>
  <div class="h-screen flex">
    <Toaster richColors position="top-right" />
    <aside
      class="w-64 bg-blue-950 border-r border-blue-800 min-h-screen flex flex-col"
    >
      <div class="px-6 py-5 border-b border-blue-800">
        <h1 class="text-xl font-bold text-white">
          MCM <span class="text-blue-500">Gaming</span>
        </h1>
        <p class="text-xs text-gray-400 mt-1">Website Management</p>
      </div>

      <nav class="flex-1 px-4 py-6 space-y-1">
        <NuxtLink
          v-for="menu in menus"
          :key="menu.label"
          :to="menu.to"
          class="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-300 hover:bg-blue-800 hover:text-white transition"
          active-class="bg-blue-700 text-white"
        >
          <component :is="menu.icon" class="w-4 h-4" />
          {{ menu.label }}
        </NuxtLink>
      </nav>

      <div class="px-4 py-4 border-t border-blue-800">
        <NuxtLink
          to="/"
          class="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-300 hover:bg-blue-800 hover:text-white transition"
        >
          <LogOut class="w-4 h-4" />
          Back to Website
        </NuxtLink>
      </div>
    </aside>
    <main class="flex-1 p-10 overflow-y-auto">
      <slot />
    </main>
  </div>
</template>
