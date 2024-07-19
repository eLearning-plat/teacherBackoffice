<template>
     <div class="grid grid-cols-1 gap-4 p-4 md:grid-cols-2  xl:grid-cols-4">
      <Card class="border-2 border-blue-700 text-blue-700  rounded-md shadow-md p-3">
        <CardHeader>
          <CardDescription>Chiffre d'achat total</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="text-4xl font-bold pi pi-doller">$125,234</div>
        
        </CardContent>
      </Card>
      <Card class="border-2 border-green-700 text-green-700  rounded-md shadow-md p-3">
        <CardHeader>
           
          <CardTitle>total de Cours</CardTitle>
          <CardDescription>  </CardDescription>
        </CardHeader>
        <CardContent>
          <div class="text-4xl font-bold pi pi-book">$125,234</div>
        
        </CardContent>
      </Card>
      <Card  class="border-2 border-red-700 text-red-700  rounded-md shadow-md p-3">
        <CardHeader>
          <CardTitle>participation au </CardTitle>
          <CardDescription>cours </CardDescription>
        </CardHeader>
        <CardContent>
          <div class="text-4xl font-bold pi pi-paperclip">12,345</div>
        </CardContent>
      </Card>
      <Card  class="border-2 border-yellow-500 text-yellow-500  rounded-md shadow-md p-3">
        <CardHeader>
          <CardTitle>Telechargement </CardTitle>
          <CardDescription>de document </CardDescription>
        </CardHeader>
        <CardContent>
          <div class="text-4xl font-bold pi pi-print">12,345</div>
     
        </CardContent>
      </Card>
    </div>
</template>
<script>
export default {
    name:'cardStatestic'
}
</script>