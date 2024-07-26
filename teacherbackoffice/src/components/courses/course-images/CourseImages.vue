<script setup>
import { Upload } from "lucide-vue-next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Label } from "../../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
</script>

<template>
  <Card class="overflow-hidden">
    <CardHeader>
      <CardTitle>Course imgs</CardTitle>
      <CardDescription> Upload your images here </CardDescription>
    </CardHeader>
    <CardContent>
      <div class="grid gap-2">
        <img
          alt="Product image"
          class="aspect-square w-full rounded-md object-cover"
          height="300"
          src="@/assets/vue.svg"
          width="300"
        />
        <div class="grid grid-cols-3 gap-2">
          <button>
            <img
              alt="Product image"
              class="aspect-square w-full rounded-md object-cover"
              height="84"
              src="@/assets/vue.svg"
              width="84"
            />
          </button>
          <button>
            <img
              alt="Product image"
              class="aspect-square w-full rounded-md object-cover"
              height="84"
              src="@/assets/vue.svg"
              width="84"
            />
          </button>
        
        </div>
      </div>
    </CardContent>
  </Card>
</template>
