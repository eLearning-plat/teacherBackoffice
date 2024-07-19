<template>
  <Menu as="div" class="relative">
    <div>
      <MenuButton
        class="relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <span class="absolute -inset-1.5" />
        <flag
          :iso="selectedLanguage.img"
          class="h-4/5 w-4/5 rounded-full m-2"
        />
      </MenuButton>
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <MenuItem v-for="(language, index) in languages" :key="index">
          <a
            @click="selectLanguage(language)"
            class="block px-4 py-2 text-sm no-underline"
            :class="{ 'bg-gray-100': isActive(language) }"
          >
            <flag :iso="language.img" class="rounded-full h-6 w-6 mr-2" />
            {{ $t(`${language.label.toLowerCase()}`) }}
          </a>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";

const { t, locale } = useI18n();
const languages = ref([
  { label: "Ar", img: "sa" },
  { label: "En", img: "us" },
]);

const selectedLanguage = ref(languages.value[0]);

function selectLanguage(language) {
  selectedLanguage.value = language;
  locale.value = language.label.toLowerCase();
  console.log("Locale is now:", locale.value);
}

function isActive(language) {
  return selectedLanguage.value === language;
}
</script>
