<template>
    <div class="flex flex-wrap w-full">
  <!-- Partie 2/3 -->
  <div class="w-full md:w-2/3 mt-2 lg:pr-2">
  <div class="p-4 border-gray-200 border-2 rounded-md shadow-md h-[80vh] overflow-auto">
    <Card class="md:col-span-1">
      <CardHeader>
        <CardTitle><h4 class="text-red-500">{{$t('about')}}</h4></CardTitle>
        <div>student ...</div>
      </CardHeader>
      <CardContent class="grid gap-4">
        <div class="grid gap-1">
          <div class="text-sm font-medium text-sky-400">{{$t('location')}}</div>
          <div>San Francisco, CA</div>
        </div>
        <div class="grid gap-1">
          <div class="text-sm font-medium text-sky-400">{{$t('job')}} </div>
          <div>Software Engineer</div>
        </div>
        <div class="grid gap-1">
          <div class="text-sm font-medium text-sky-400">{{$t('dateOfBirth')}}</div>
          <div>05-12-1998</div>
        </div>
        <div class="grid gap-1">
          <div class="text-sm font-medium text-sky-400">Skills</div>
          <div class="flex flex-wrap gap-2">
            <div>React</div>
            <div>Next.js</div>
            <div>TypeScript</div>
            <div>Tailwind CSS</div>
          </div>
        </div>
        <div class="grid gap-1">
          <div class="text-sm font-medium text-sky-400">Interests</div>
          <div class="flex flex-wrap gap-2">
            <div>Web Development</div>
            <div>Open Source</div>
            <div>Design</div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</div>


  <!-- Partie 1/3 -->
  <div class="w-full md:w-1/3 lg:pl-2 md:pl-2 mt-2">
  <div class="p-4 border-gray-200 border-2 rounded-md shadow-md h-[80vh] overflow-auto">
    <Card class="md:col-span-1">
      <CardHeader>
        <CardTitle><h4 class="text-red-500">{{$t('course')}}</h4></CardTitle>    
      </CardHeader>
      <CardContent class="grid gap-4">
        <div class="flex flex-wrap items-center gap-4 w-full">
          <img
            src="@/assets/vuex.png"
            alt="Course Image"
            width="40"
            height="25"
            class="object-cover"
          />
          <div class="flex-1 flex flex-col">
            <span class="font-medium text-sm">option.name</span>
            <span :class="['text-sm', { 'text-surface-500 dark:text-surface-400': !selected, 'text-inherit': selected }]">option.category</span>
          </div>
        </div>
        <div class="flex flex-wrap p-1 items-center gap-4 w-full">
          <img
            src="@/assets/vuex.png"
            alt="Course Image"
            width="40"
            height="25"
            class="object-cover"
          />
          <div class="flex-1 flex flex-col">
            <span class="font-medium text-sm">option.name</span>
            <span :class="['text-sm', { 'text-surface-500 dark:text-surface-400': !selected, 'text-inherit': selected }]">option.category</span>
          </div>
        </div>
        <div class="flex flex-wrap p-1 items-center gap-4 w-full">
          <img
            src="@/assets/vuex.png"
            alt="Course Image"
            width="40"
            height="25"
            class="object-cover"
          />
          <div class="flex-1 flex flex-col">
            <span class="font-medium text-sm">option.name</span>
            <span :class="['text-sm', { 'text-surface-500 dark:text-surface-400': !selected, 'text-inherit': selected }]">option.category</span>
          </div>
        </div>
        <div class="flex flex-wrap p-1 items-center gap-4 w-full">
          <img
            src="@/assets/vuex.png"
            alt="Course Image"
            width="40"
            height="25"
            class="object-cover"
          />
          <div class="flex-1 flex flex-col">
            <span class="font-medium text-sm">option.name</span>
            <span :class="['text-sm', { 'text-surface-500 dark:text-surface-400': !selected, 'text-inherit': selected }]">option.category</span>
          </div>
        </div>
        <div class="flex flex-wrap items-center gap-4 w-full">
          <img
            src="@/assets/vuex.png"
            alt="Course Image"
            width="40"
            height="25"
            class="object-cover"
          />
          <div class="flex-1 flex flex-col">
            <span class="font-medium text-sm">option.name</span>
            <span :class="['text-sm', { 'text-surface-500 dark:text-surface-400': !selected, 'text-inherit': selected }]">option.category</span>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</div>

</div>
  </template>
<script>

export default {
    name : 'AboutPage'
}
</script>