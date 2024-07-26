<template>
      <div 
                class="group shadow-md bg-gray-200 flex items-center gap-3 rounded-md bg-muted p-4 transition-colors hover:bg-muted/50"
             
              >
          
                <div>
                <div class="flex justify-between">  <h3 class="font-medium group-hover:underline">Guide de recherche documentaire</h3><Download class=""/></div>
                  <p class="text-sm text-muted-foreground ">Apprenez à effectuer des recherches efficaces.</p>
                </div>
              </div>
              
</template>
<script>
import { Download } from 'lucide-vue-next';

export default {
    name: 'cardsDocument',
    components:{
      Download
    }
}
</script>