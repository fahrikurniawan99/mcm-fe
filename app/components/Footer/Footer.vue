<script setup lang="ts">
import { Facebook, Instagram, Twitter, Youtube } from "lucide-vue-next";
</script>

<template>
  <footer class="text-gray-400">
    <UiContainer class="pt-16 pb-10">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 class="text-white font-bold text-2xl">MCM Esports</h2>
          <p class="mt-4 text-sm leading-relaxed">
            Elevate your game with the latest esports news, events, and
            competitive insights.
          </p>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">Company</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink to="#" class="hover:text-white transition">
                About
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="hover:text-white transition">
                Careers
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="hover:text-white transition">
                Press
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">Resources</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink to="#" class="hover:text-white transition">
                Blog
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="hover:text-white transition">
                Events
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="hover:text-white transition">
                Support
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">Follow Us</h3>
          <div class="flex gap-4 flex-wrap">
            <a
              href="#"
              aria-label="Facebook"
              class="p-2 rounded-lg bg-blue-900 text-white transition hover:bg-blue-800"
            >
              <Facebook class="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              class="p-2 rounded-lg bg-blue-900 text-white transition hover:bg-blue-800"
            >
              <Twitter class="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              class="p-2 rounded-lg bg-blue-900 text-white transition hover:bg-blue-800"
            >
              <Instagram class="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Youtube"
              class="p-2 rounded-lg bg-blue-900 text-white transition hover:bg-blue-800"
            >
              <Youtube class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-blue-900 my-10"></div>

      <div
        class="flex flex-col md:flex-row items-center justify-between text-sm gap-4"
      >
        <p>
          © {{ new Date().getFullYear() }} MCM Esports. All rights reserved.
        </p>

        <div class="flex gap-6">
          <NuxtLink to="#" class="hover:text-white transition">
            Privacy Policy
          </NuxtLink>
          <NuxtLink to="#" class="hover:text-white transition">
            Terms of Service
          </NuxtLink>
        </div>
      </div>
    </UiContainer>
  </footer>
</template>
