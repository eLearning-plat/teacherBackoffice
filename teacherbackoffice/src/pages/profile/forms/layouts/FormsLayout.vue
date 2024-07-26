<script setup lang="js">
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Separator from '../../../../components/ui/separator/Separator.vue';
import SidebarNav from '../components/SidebarNav.vue'
import BreadCrumb from '../../../../components/bread-crumb/BreadCrumb.vue';

const page='setting params';
const links=[
    {
        id: 1,
        title: 'Student Space',
        link: '/',
    },
    {
        id: 2,
        title: 'Profile',
        link: '/profile',
    }
];
</script>

<template>
  <div class="md:hidden">

    <VPImage
      alt="Forms"
      width="1280"
      height="1214"
      class="block"
      :image="{
        dark: '/examples/forms-dark.png',
        light: '/examples/forms-light.png',
      }"
    />
  </div>
  <div class="hidden space-y-6 p-10 pb-16 w-full md:block overflow-auto">
    <BreadCrumb :links="links" :page="page"  class="mt-3"/>
 
    <Card>
      <CardHeader>
        <div class="space-y-0.5">
          <h2 class="text-2xl font-bold tracking-tight">Settings</h2>
          <p class="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
      </CardHeader>
      <Separator class="my-6" />
      <CardContent>
        <div
          class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0"
        >
          <aside class="-mx-4 lg:w-1/5">
            <SidebarNav />
          </aside>
          <div class="flex-1 lg:max-w-2xl">
            <div class="space-y-6">
              <slot />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
