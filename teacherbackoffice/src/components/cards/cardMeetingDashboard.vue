<template>
   
        <Card>
          <CardHeader>
            <CardTitle>Meeting</CardTitle>
          </CardHeader>
          <CardContent class="grid gap-8">
            <div class="flex items-center gap-4">
              <Avatar class="hidden h-9 w-9 sm:flex">
                <AvatarFallback><Calendar/></AvatarFallback>
              </Avatar>
              <div class="grid gap-1">
                <p class="text-sm font-medium leading-none">
                  Introduction to Quranic Studies
                </p>
                <p class="text-sm text-muted-foreground">
                  2024-07-28 15:00
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
     
</template>
<script setup>

import {Calendar } from 'lucide-vue-next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
</script>