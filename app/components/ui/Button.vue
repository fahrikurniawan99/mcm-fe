<script setup lang="ts">
import { cn } from "~/utils/cn";

defineProps<{
  variant?: "primary" | "secondary" | "neutral";
  size?: "sm" | "md" | "lg";
}>();
</script>

<template>
  <button
    :class="cn(
      'rounded-lg font-medium transition flex justify-center items-center',
      size === 'sm' && 'text-sm px-4 py-2',
      size === 'md' && 'px-5 py-2.5',
      size === 'lg' && 'px-6 py-3',
      variant === 'primary' && 'bg-blue-600 hover:bg-blue-500 text-white',
      variant === 'neutral' && 'bg-gray-700 hover:bg-gray-600 text-white'
    )"
  >
    <slot />
  </button>
</template>
