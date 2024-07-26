<script setup lang="js">
import AreaChart from '@/components/chart/AreaChart.vue';
import LineChart from '@/components/chart/LineChart.vue';
import BarChart  from '@/components/chart/BarChart.vue';
import { Activity,File,Book,Video, ArrowUpRight, CircleUser, CreditCard, DollarSign, Menu, Package2, Search, Users,Calendar } from 'lucide-vue-next'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import cardStatistic from'@/components/cards/cardStatistic.vue'
import cardCoursDashboard from '@/components/cards/cardCoursDashboard.vue'
import cardMeetingDashboard from '@/components/cards/cardMeetingDashboard.vue'

</script>

<template>
  <div class="flex min-h-screen w-full flex-col pb-20">
    <header class="pb-2 top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
       
        <a
          href="#"
          class="text-foreground transition-colors hover:text-foreground"
        >
          Dashboard
        </a>
      
      </nav>
      <Sheet>
        <SheetTrigger as-child>
          <Button
            variant="outline"
            size="icon"
            class="shrink-0 md:hidden"
          >
            <Menu class="h-5 w-5" />
            <span class="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav class="grid gap-6 text-lg font-medium">
            <a
              href="#"
              class="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 class="h-6 w-6" />
              <span class="sr-only">Acme Inc</span>
            </a>
            <a href="#" class="hover:text-foreground">
              Dashboard
            </a>
      
          </nav>
        </SheetContent>
      </Sheet>
      <div class="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form class="ml-auto flex-1 sm:flex-initial">
          <div class="relative">
            <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              class="pl-8 sm:w-[300px] md:w-[200px] mt-2 lg:w-[300px]"
            />
          </div>
        </form>
        <!-- <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="secondary" size="icon" class="rounded-full">
              <CircleUser class="h-5 w-5" />
              <span class="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> -->
      </div>
    </header>
    <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 ">
     <cardStatistic/>
      <div class="flex flex-wrap gap-4 ">
    <Card class="flex-1 min-w-[300px] ">
      <CardHeader class="font-bold">
        Annual Distribution of Meetings and Courses
       </CardHeader>
        <CardContent class="px-0"> <AreaChart /></CardContent>
    </Card>
    <Card class="flex-1 min-w-[300px]">
      <CardHeader class="font-bold"> Blog Posts and Reactions Overview</CardHeader>
      <CardContent class="px-0"><LineChart /> </CardContent>
    </Card>
  </div>
      <div class="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
       <cardCoursDashboard/>
       <cardMeetingDashboard/>
      </div>
      <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2 font-bold">
          Annual Breakdown of Course Categories by Type
     
        </CardHeader>
        <CardContent class="px-0"> <BarChart/></CardContent>
      </Card>

    </main>
  </div>
</template>
