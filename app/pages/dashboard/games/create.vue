<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

import { toast } from "vue-sonner";
import "vue-sonner/style.css";

const form = reactive({
  title: "",
  status: "Live",
  thumbnail: "",
  short_description: "",
  description: "",
  game_url: "",
  genre: "",
  platform: "",
  publisher: "",
  developer: "",
  release_date: "",
  profile_url: "",
  os: "",
  processor: "",
  memory: "",
  graphics: "",
  storage: "",
});

const errors = reactive({
  title: "",
  status: "",
  short_description: "",
  description: "",
  game_url: "",
  genre: "",
  platform: "",
  publisher: "",
  developer: "",
  release_date: "",
  profile_url: "",
  os: "",
  processor: "",
  memory: "",
  graphics: "",
  storage: "",
});

function validateField(field: keyof typeof form) {
  if (
    !form[field] ||
    (typeof form[field] === "string" && form[field].trim() === "")
  ) {
    (errors as any)[field] = "This field is required.";
    return false;
  } else {
    (errors as any)[field] = "";
    return true;
  }
}

function validateAll() {
  let valid = true;
  const keys = Object.keys(form) as (keyof typeof form)[];
  keys.forEach((key) => {
    if (!validateField(key)) valid = false;
  });
  return valid;
}

const resetForm = () => {
  form.title = "";
  form.status = "Live";
  form.thumbnail = "";
  form.short_description = "";
  form.description = "";
  form.game_url = "";
  form.genre = "";
  form.platform = "";
  form.publisher = "";
  form.developer = "";
  form.release_date = "";
  form.profile_url = "";
  form.os = "";
  form.processor = "";
  form.memory = "";
  form.graphics = "";
  form.storage = "";
};

function submit() {
   console.log(form);
  if (!validateAll()) {
    toast.error("Please fix the errors in the form.");
    return;
  }
  toast.success("Game published successfully!");
  resetForm();
}
</script>

<template>
  <div class="space-y-8">
    <UiFormSection>
      <template #title>Basic Information</template>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UiFormInput
          label="Game Title"
          v-model="form.title"
          :error="errors.title"
        />
        <UiFormInput label="Genre" v-model="form.genre" :error="errors.genre" />
        <UiFormInput
          label="Platform"
          v-model="form.platform"
          :error="errors.platform"
        />
        <UiFormInput
          label="Status"
          v-model="form.status"
          :error="errors.status"
        />
        <UiFormInput
          label="Publisher"
          v-model="form.publisher"
          :error="errors.publisher"
        />
        <UiFormInput
          label="Developer"
          v-model="form.developer"
          :error="errors.developer"
        />
        <UiFormInput
          label="Release Date"
          v-model="form.release_date"
          :error="errors.release_date"
        />
      </div>
    </UiFormSection>

    <UiFormSection>
      <template #title>Media</template>
      <UiFormUpload label="Thumbnail" v-model="form.thumbnail" />
    </UiFormSection>

    <UiFormSection>
      <template #title>Description</template>
      <UiFormTextArea
        :error="errors.short_description"
        label="Short Description"
        v-model="form.short_description"
      />
      <UiFormTextArea
        :error="errors.description"
        label="Full Description"
        v-model="form.description"
        :rows="8"
      />
    </UiFormSection>

    <UiFormSection>
      <template #title>Links</template>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UiFormInput
          :error="errors.game_url"
          label="Game URL"
          v-model="form.game_url"
        />
        <UiFormInput
          :error="errors.profile_url"
          label="Profile URL"
          v-model="form.profile_url"
        />
      </div>
    </UiFormSection>

    <UiFormSection>
      <template #title>Minimum System Requirements</template>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UiFormInput
          label="OS"
          v-model="form.os"
          :error="errors.os"
        />
        <UiFormInput
          label="Processor"
          v-model="form.processor"
          :error="errors.processor"
        />
        <UiFormInput
          label="Memory"
          v-model="form.memory"
          :error="errors.memory"
        />
        <UiFormInput
          label="Graphics"
          v-model="form.graphics"
          :error="errors.graphics"
        />
        <UiFormInput
          label="Storage"
          v-model="form.storage"
          :error="errors.storage"
        />
      </div>
    </UiFormSection>

    <div class="flex justify-end gap-4">
      <button
        class="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
      >
        Cancel
      </button>
      <button
        @click="submit"
        class="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500"
      >
        Publish Game
      </button>
    </div>
  </div>
</template>
