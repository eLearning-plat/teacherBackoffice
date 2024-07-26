<script setup>
import { ListFilter, PlusCircle, Search } from "lucide-vue-next";
import { Button } from "../../ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { Input } from "../../ui/input";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../ui/breadcrumb";

import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs";
import CoursesTable from "../courses-table/CoursesTable.vue";
// import UsersTable from "./../users-table/UsersTable.vue";

const filter =["all", "students", "teachers", "admins"];

</script>

<template>
  <Tabs default-value="all">
    <div class="flex items-center">
      <TabsList>
        <TabsTrigger value="all"> All </TabsTrigger>
        <TabsTrigger value="verified"> Verified </TabsTrigger>
        <TabsTrigger value="not-verified"> Not Verified </TabsTrigger>
        <TabsTrigger value="my-courses" class="hidden sm:flex">
          My Courses
        </TabsTrigger>
      </TabsList>
      <div class="ml-auto flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="outline" size="sm" class="h-7 gap-1">
              <ListFilter class="h-3.5 w-3.5" />
              <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Filter
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem checked> Verified </DropdownMenuItem>
            <DropdownMenuItem> Not Verified </DropdownMenuItem>
            <DropdownMenuItem> My Courses </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button size="sm" class="h-7 gap-1">
          <PlusCircle class="h-3.5 w-3.5" />
          <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Add Course
          </span>
        </Button>
      </div>
    </div>
    <CoursesTable :filter="'all'"/>
    <CoursesTable :filter="'verified'"/>
    <CoursesTable :filter="'not-verified'"/>
    <CoursesTable :filter="'my-courses'"/>
  </Tabs>
</template>
