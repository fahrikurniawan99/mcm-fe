<script setup lang="ts" >
defineProps<{
  className?: string;
}>();
</script>

<template>
  <div :class="['max-w-300 mx-auto w-[95%]', className]">
    <slot />
  </div>
</template>