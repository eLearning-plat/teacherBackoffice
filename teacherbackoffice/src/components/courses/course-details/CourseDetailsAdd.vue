<script setup lang="js">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Textarea } from '../../ui/textarea';



</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Course Details</CardTitle>
      <CardDescription>
        Fill in the details of the course you want to create.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div class="grid gap-6">
        <div class="grid gap-3">
          <Label for="name">Name</Label>
          <Input
            id="name"
            type="text"
            class="w-full"
            default-value="Gamer Gear Pro Controller"
          />
        </div>
        <div class="grid gap-3">
          <Label for="name">Uplode </Label>
          <Input
            id="name"
            type="file"
            class="w-full"
            default-value="Gamer Gear Pro Controller"
          />
        </div>
        <div class="grid gap-3">
          <Label for="description">Description</Label>
          <Textarea
            id="description"
            class="min-h-32"
          />
        </div>
      </div>
    </CardContent>
  </Card>
</template>
