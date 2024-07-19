<template>
  <Card class="border-2 rounded-md border-gray-200 p-2">
    <img
      src="@/assets/vuex.png"
      alt="Course Image"
      width="400"
      height="225"
      class="w-full  object-cover"
    />
    <CardContent class="p-4">
      <h2 class="text-xl font-bold">{{ detail.title }}</h2>
      <p class="mt-2 text-muted-foreground">
        {{ detail.description }}
      </p>
      <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mt-4">
  <Button
    class="bg-blue-500 border-2 border-blue-500 shadow-md rounded-md p-2 text-white mb-2 sm:mb-0"
    @click="details"
  >
    {{ $t('Update') }}
  </Button>
  <Button
    class="border-2 border-red-500 shadow-md rounded-md p-2 text-red-500"
    @click="details"
  >
    {{ $t('Delete') }}
  </Button>
</div>

      
       </CardContent>
  </Card>
</template>

<script>

export default {
  name: 'cardCours',
  props: {
    detail: {
      type: Object,
      required: true
    },
    details: {
      type: Function,
      required: true
    }
  }, 
};
</script>
