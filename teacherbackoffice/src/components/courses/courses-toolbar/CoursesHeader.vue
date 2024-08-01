<template>
    <header class="sticky  mt-3 top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
       
       <div class="relative ml-auto flex-1 md:grow-0">
         <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
         <Input v-model="searchQuery"
           type="search"
           placeholder="Search..."
           class="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
         />
       </div>
       <Select v-model="selectedFilter" class="w-full sm:w-auto">
           <SelectTrigger class="w-[180px] border border-gray-300 rounded-md">
             <SelectValue :placeholder="$t('All courses')" />
           </SelectTrigger>
           <SelectContent class="z-10 absolute mt-2 w-[180px] bg-white border border-gray-300 rounded-md">
             <SelectGroup>
           
               <SelectItem value="all-courses">{{ $t('All courses') }}</SelectItem>
               <SelectItem value="Quranic Recitation Tajwid">{{ $t('Quranic Recitation Tajwid') }}</SelectItem>
               <SelectItem value="Sona">{{ $t('Sona') }}</SelectItem>
               <SelectItem value="Arabic Language">{{ $t('Arabic Language') }}</SelectItem>
               <SelectItem value="English Language">{{ $t('English Language') }}</SelectItem>
               <SelectItem value="Computer">{{ $t('Computer') }}</SelectItem>
             </SelectGroup>
           </SelectContent>
         </Select>
         <button
     class="my-2 bg-blue-600 border-2 border-blue-600 shadow-md rounded-md p-2 text-white"
     @click="push()"
   >
     <span class="text-white pi pi-plus"></span>
     {{ $t('Add courses') }}
   </button>
     </header>  
</template>
<script >
import {
  ChevronLeft,
  Search
} from 'lucide-vue-next'

import Input from '../../../components/ui/input/Input.vue'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from '../../../components/ui/select';
export default {
    components: {
   
    Input, ChevronLeft,
    Search,
    Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem
  },
    data() {
    return {
      selectedFilter: '',
      searchQuery: ''
    }},
    methods: {
        push(){
   return this.$router.push('/AddCourse');
  },}
}
</script>