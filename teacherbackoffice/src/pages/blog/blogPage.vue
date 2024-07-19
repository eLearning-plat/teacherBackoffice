<template>
  <div class="flex flex-col min-h-screen">
    <div
      class="container mx-auto grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8 py-12"
    >
      <main>
        <div class="grid gap-8">
          <div
            class="flex flex-col md:flex-row gap-4 bg-background p-4 rounded-lg shadow"
          >
            <img
              src="./../../assets/vues.png"
              alt="Blog post cover"
              width="{300}"
              height="{200}"
              class="rounded-lg object-cover md:w-[300px] md:h-[200px]"
            />
            <div class="flex-1 grid gap-2">
              <h2 class="text-2xl font-bold">
                The Future of Web Development: Trends and Insights
              </h2>
              <div class="text-muted-foreground text-sm">
                <span>John Doe</span>
                <span class="mx-2">•</span>
                <span>June 1, 2023</span>
              </div>
              <p class="text-muted-foreground">
                Explore the latest trends and technologies shaping the future of
                web development. From AI-powered tools to the rise of headless
                CMS, discover the insights that will help you stay ahead of the
                curve.
              </p>
              <div class="flex items-center gap-4">
                <Button variant="ghost" size="icon">
                  <HeartIcon class="w-4 h-4" />
                  <span class="sr-only">Like</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircleIcon class="w-4 h-4" />
                  <span class="sr-only">Comment</span>
                </Button>
                <div class="text-muted-foreground text-sm">
                  <span class="pi pi-heart">10 likes</span>
                  <span class="mx-2">•</span>
                  <span class="pi pi-comment">5 comments</span>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <Textarea
                  placeholder="Add a comment..."
                  class="flex-1 rounded-lg border border-muted focus:ring-primary focus:border-primary"
                />
                <Button class="border-2 border-blue-500 bg-white rounded-md p-4 text-blue-500">Post</Button>
              </div>
              <RouterLink
                href="#"
                class="text-primary hover:underline"
                prefetch="{false}"
              >
                Read more
              </RouterLink>
            </div>
          </div>
          <div
            class="flex flex-col md:flex-row gap-4 bg-background p-4 rounded-lg shadow"
          >
            <img
              src="./../../assets/vues.png"
              alt="Blog post cover"
              width="{300}"
              height="{200}"
              class="rounded-lg object-cover md:w-[300px] md:h-[200px]"
            />
            <div class="flex-1 grid gap-2">
              <h2 class="text-2xl font-bold">
                Mastering React: A Comprehensive Guide
              </h2>
              <div class="text-muted-foreground text-sm">
                <span>Jane Smith</span>
                <span class="mx-2">•</span>
                <span>May 15, 2023</span>
              </div>
              <p class="text-muted-foreground">
                Dive deep into the world of React, the popular JavaScript
                library for building user interfaces. From beginner concepts to
                advanced techniques, this guide will help you become a React
                master.
              </p>
              <div class="flex items-center gap-4">
                <Button variant="ghost" size="icon">
                  <HeartIcon class="w-4 h-4" />
                  <span class="sr-only">Like</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircleIcon class="w-4 h-4" />
                  <span class="sr-only">Comment</span>
                </Button>
                <div class="text-muted-foreground text-sm">
                  <span>15 likes</span>
                  <span class="mx-2">•</span>
                  <span>8 comments</span>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <Textarea
                  placeholder="Add a comment..."
                  class="flex-1 rounded-lg border border-muted focus:ring-primary focus:border-primary"
                />
                <Button>Post</Button>
              </div>
              <RouterLink
                href="#"
                class="text-primary hover:underline"
                prefetch="{false}"
              >
                Read more
              </RouterLink>
            </div>
          </div>
          <div
            class="flex flex-col md:flex-row gap-4 bg-background p-4 rounded-lg shadow"
          >
            <img
              src="./../../assets/vues.png"
              alt="Blog post cover"
              width="{300}"
              height="{200}"
              class="rounded-lg object-cover md:w-[300px] md:h-[200px]"
            />
            <div class="flex-1 grid gap-2">
              <h2 class="text-2xl font-bold">
                Unleashing the Power of Serverless Computing
              </h2>
              <div class="text-muted-foreground text-sm">
                <span>Sarah Lee</span>
                <span class="mx-2">•</span>
                <span>April 20, 2023</span>
              </div>
              <p class="text-muted-foreground">
                Discover the benefits and best practices of serverless
                computing, a paradigm shift in the way we build and deploy
                applications. Learn how to leverage serverless technologies to
                streamline your development process.
              </p>
              <div class="flex items-center gap-4">
                <Button variant="ghost" size="icon">
                  <HeartIcon class="w-4 h-4" />
                  <span class="sr-only">Like</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircleIcon class="w-4 h-4" />
                  <span class="sr-only">Comment</span>
                </Button>
                <div class="text-muted-foreground text-sm">
                  <span>8 likes</span>
                  <span class="mx-2">•</span>
                  <span>3 comments</span>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <Textarea
                  placeholder="Add a comment..."
                  class="flex-1 rounded-lg border border-muted focus:ring-primary focus:border-primary"
                />
                <Button>Post</Button>
              </div>
              <RouterLink
                href="#"
                class="text-primary hover:underline"
                prefetch="{false}"
              >
                Read more
              </RouterLink>
            </div>
          </div>
        </div>
      </main>
      <aside class="bg-background p-4 rounded-lg shadow">
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-2">Search</h3>
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <SearchIcon class="w-5 h-5 text-muted-foreground" />
            </div>
            <Input
              type="search"
              placeholder="Search blog posts..."
              class="block w-full p-2 pl-10 text-sm rounded-lg border border-muted focus:ring-primary focus:border-primary"
            />
          </div>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-2">Categories</h3>
          <ul class="space-y-2">
            <li>
              <RouterLink
                href="#"
                class="text-muted-foreground hover:text-foreground"
                prefetch="{false}"
              >
                Web Development
              </RouterLink>
            </li>
            <li>
              <RouterLink
                href="#"
                class="text-muted-foreground hover:text-foreground"
                prefetch="{false}"
              >
                JavaScript
              </RouterLink>
            </li>
            <li>
              <RouterLink
                href="#"
                class="text-muted-foreground hover:text-foreground"
                prefetch="{false}"
              >
                React
              </RouterLink>
            </li>
            <li>
              <RouterLink
                href="#"
                class="text-muted-foreground hover:text-foreground"
                prefetch="{false}"
              >
                Serverless
              </RouterLink>
            </li>
            <li>
              <RouterLink
                href="#"
                class="text-muted-foreground hover:text-foreground"
                prefetch="{false}"
              >
                AI and ML
              </RouterLink>
            </li>
          </ul>
        </div>
      </aside>
    </div>
    <footer class="bg-muted text-muted-foreground py-4 mt-auto">
      <div class="container mx-auto text-center text-sm">
        &copy; 2024 Blog. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script >

export default {
  name: "blogPage",
};
</script>
