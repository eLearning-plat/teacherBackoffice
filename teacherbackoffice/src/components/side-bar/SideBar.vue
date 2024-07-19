<template>
  <Menu :model="menuItems" class="w-full md:w-10 overflow-auto hidden md:hiddden sm:block">
    <template #submenuheader="{ item }">
      <span class="text-blue-500 font-bold leading-none">{{ item.label }}</span>
    </template>
    <template #item="{ item, props }">
      <a v-ripple class="flex items-center no-underline hover:bg-gray-100 my-0 p-2 md:p-3 font-medium"
         :class="{ 'bg-gray-300': isActive(item.label), 'text-black': !isActive(item.label) }"
         @click="handleItemClick(item.label)">
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
        <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
      </a>
    </template>
  </Menu>
</template>

<script setup>
import Menu from "primevue/menu";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const router = useRouter(); 

let activePath = ref("/dashbord");

const menuItems = ref([
  {
    label: t("Student space"), 
    items: [
      { label: t('dashbord'), icon: "pi pi-objects-column" },
      { label: t('course'), icon: "pi pi-book" },
      { label: t('profile'), icon: "pi pi-user" },
      { label: t('document'), icon: "pi pi-briefcase" },
      { label: t('event'), icon: "pi pi-calendar" },
    ],
  },
]);

function handleItemClick(label) {
  activePath.value = label; 
  const path = `/${label.toLowerCase()}`; 
  router.push(path); 
}

function isActive(label) {
  return activePath.value === label;
}
</script>



<style scoped>

</style>
