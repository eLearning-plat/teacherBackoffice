<template>
  <Disclosure as="nav" class="bg-white border-b-2" v-slot="{ open }">
    <div class="w-full px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <SidebarMobile />
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <!-- Logo -->
          <AppBarLogo />
          <h1 class="mx-3 text-blue-500 text-2xl">Elearning</h1>
          <!-- content -->
          <!-- <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-black hover:bg-gray-700 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</a
              >
            </div>
          </div> -->
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <dropDownLanguange class="mx-3"/>
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

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <!-- <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current ? 'bg-gray-900 text-white' : 'text-black',
            'block rounded-md px-3 py-2 text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        > -->
        <SidebarMobile />
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import DropDownProfile from "./DropDownProfile.vue";
import AppBarLogo from "./AppBarLogo.vue";
import SideBar from "../side-bar/SideBar.vue";
import SidebarMobile from "../side-bar/SidebarMobile.vue";
import dropDownLanguange from "./dropDownLanguage.vue";
const navigation = [
  { name: "Home", href: "/home", current: false },
  { name: "Students", href: "/students", current: false },
  { name: "Teachers", href: "/teachers", current: false },
  { name: "Profile", href: "/profile", current: false },
  { name: "Calendar", href: "#", current: false },
];
</script>
