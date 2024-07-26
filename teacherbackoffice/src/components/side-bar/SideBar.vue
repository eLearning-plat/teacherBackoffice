<script setup>
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Navigation from "./Navigation.vue";
</script>

<template>
  <div className="flex min-h-screen ">
    <aside
      className="bg-background border-r border-border flex flex-col justify-between py-6 px-4 transition-all duration-300 md:w-64 md:px-6 lg:w-72"
    >
      <div className="flex flex-col gap-6">
        <Navigation :IsMobile="false"/>
      </div>
      
    </aside>
    <div className="flex-1" />
  </div>
</template>
