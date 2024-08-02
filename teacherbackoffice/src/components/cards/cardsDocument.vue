<template>
  <div class="group shadow-md bg-gray-200 flex items-center gap-3 rounded-md bg-muted p-4 transition-colors hover:bg-muted/50">
            <div>
            <div class="flex justify-between">  
              <h3 class="font-medium group-hover:underline cursor-pointer" @click="downloadFile">{{ document.title }}</h3>
              <Download class="ml-12 cursor-pointer" @click="downloadFile" />
              </div>
              <p class="text-sm text-muted-foreground ">{{ document.description }}</p>
            </div>
          </div>
          
</template>
<script>
import { Download } from 'lucide-vue-next';
export default {
name: 'cardsDocument',
components:{
  Download
},
props:{
  document:{
    type: Object, 
    required: true
  }
},
methods: {
downloadFile() {
  const fileUrl = this.document.file;
  if (fileUrl) {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileUrl.substring(fileUrl.lastIndexOf('/') + 1);
    link.click();
  } else {
    console.error('File URL is not available.');
  }
}
},

mounted() {

console.log('Document prop:', this.document);
}
}
</script>