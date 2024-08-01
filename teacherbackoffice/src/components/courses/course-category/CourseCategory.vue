<script setup>
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Label } from "../../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Calendar } from "lucide-vue-next";

</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Course metting</CardTitle>
    </CardHeader>
    <CardContent>
      <div>
        <div class="mt-4 grid gap-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="rounded-md bg-muted p-2">
                <div class="h-5 w-5 text-muted-foreground ">
                  <Calendar />
                </div>
              </div>
              <div>
                <div class="font-bold">JavaScript Project</div>
                <p class="text-sm text-muted-foreground">
                  Due on June 15, 2023
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
            class="border px-2 py-1  rounded"
            >
            Participer
            </Button>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="rounded-md bg-muted p-2">
                <div class="h-5 w-5 text-muted-foreground " > <Calendar /> </div>
              </div>
              <div>
                <div class="font-bold">Midterm Exam</div>
                <p class="text-sm text-muted-foreground">
                  Due on July 31, 2024
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              class="border px-2 py-1  rounded"   >
              Participer
            </Button>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
