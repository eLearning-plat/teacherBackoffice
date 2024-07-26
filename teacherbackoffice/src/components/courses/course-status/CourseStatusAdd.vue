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
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Course Category</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="grid gap-6">
        <div class="grid gap-3">
          <Label for="status">Status</Label>
          <Select>
            <SelectTrigger id="status" aria-label="Select status">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="accepted"> Accepeted </SelectItem>
              <SelectItem value="not-accepted"> Not Accepted </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div> 
    </CardContent>
  </Card>
</template>
