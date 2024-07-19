<template>
  <Card class="border-2 rounded-md border-gray-200 p-3">
    <img
      src="@/assets/vuex.png"
      alt="Course Image"
      width="400"
      height="225"
      class="w-full rounded-t-lg object-cover"
    />
    <CardContent class="p-4">
      <h2 class="text-xl font-bold">{{ detail.title }}</h2>
      <p class="mt-2 text-muted-foreground">
        {{ detail.description }}
      </p>
      <Button
        class="mt-4 bg-blue-400 border-2 border-blue-500 shadow-lg rounded-md p-2 text-white"
        @click="details"
      >
        {{ $t('Register') }}
      </Button>
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
