
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import DropDownProfile from "./DropDownProfile.vue";
import AppBarLogo from "./AppBarLogo.vue";
import dropDownLanguage from './dropDownLanguage.vue';
import MobileSideBar from "../side-bar/MobileSideBar.vue";
</script>

<template>
  <Disclosure as="nav" class="bg-white border-b-2 h-16" v-slot="{ open }">
    <div class="w-full px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->

          <MobileSideBar/>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <!-- Logo -->
          <AppBarLogo />
          <h1 class="mx-3 text-blue-500 text-2xl">Elearning</h1>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
        <!-- <DarckModeButton /> -->
        <dropDownLanguage class="mx-3"/>
          <!-- Notification button -->
          <button
            type="button"
            class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span class="absolute -inset-1.5" />
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>

          <!-- Profile dropdown -->
          <DropDownProfile />
        </div>
      </div>
    </div>
  </Disclosure>
</template>

