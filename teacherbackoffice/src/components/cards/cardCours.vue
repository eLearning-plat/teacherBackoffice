<template>
  <!-- <Card class="border-2 rounded-md border-gray-200 p-2">
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
  </Card> -->
  <Card className="w-full max-w-md">
      <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
        <router-link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </router-link>
        <img
           src="@/assets/nest.png"
          alt="Course thumbnail"
          width={300}
          height={200}
          className="[grid-area:stack] object-cover w-full aspect-video"
        />
        <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-6 justify-end flex flex-col gap-2">
          <h3 className="font-semibold tracking-tight">{{ detail.title }}</h3>
          <small className="text-sm leading-none">{{ detail.description }} </small>
          <div className="flex items-center gap-2 text-sm">
            <ClockIcon className="w-4 h-4" />
            <span>2h 30m</span>
            <StarIcon className="w-4 h-4" />
            <span>Beginner</span>
            <ListIcon className="w-4 h-4" />
            <span>10 lessons</span>
          </div>
          <div className="flex gap-2 mt-4">
            <Button size="sm" class="bg-blue">Update</Button>
            <Button size="sm" class="bg-red" variant="destructive">
              Delete
            </Button>
          </div>
        </div>
      </div>
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
