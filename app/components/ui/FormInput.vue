<script setup lang="ts">
defineProps<{
  label: string;
  modelValue: string;
  error?: string;
  type?: string;
  placeholder?: string;
}>();

defineEmits(["update:modelValue"]);
</script>

<template>
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">
      {{ label }}
    </label>
    <input
      :type="type ?? 'text'"
      :value="modelValue"
      :placeholder="placeholder"
     @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-500"
    />
    <p v-if="error" class="text-red-600 text-xs mt-1">
      {{ error }}
    </p>
  </div>
</template>
