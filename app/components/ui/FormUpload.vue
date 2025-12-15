<script setup lang="ts">
const props = defineProps<{
  label: string;
  modelValue: string;
}>();

const fileInput = ref<HTMLInputElement | null>(null);

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

function onInput(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0];
  if (!file) return;

  const url = URL.createObjectURL(file);
  emit("update:modelValue", url);
}
</script>


<template>
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">
      {{ label }}
    </label>

    <div
     @click="fileInput?.click()"
      class="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50"
    >
      <input ref="fileInput" type="file" class="hidden" @change="onInput" />
      <p class="text-sm text-gray-500">Click to upload image</p>
    </div>

    <img
      v-if="modelValue"
      :src="modelValue"
      class="mt-3 rounded-lg aspect-video object-cover"
    />
  </div>
</template>
