<script setup lang="js">
import { MoreHorizontal } from "lucide-vue-next";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { TabsContent } from "../../ui/tabs";

const props = defineProps({
  filter: {
    type: String,
    required: true
  }
})

const filter = props.filter

const data = [
  {
    img: "@/assets/vue.svg",
    name: "Laser Lemonade Machine",
    status: "Draft",
    price: "$499.99",
    totalSales: 25,
    createdAt: "2023-07-12 10:42 AM",
  },
  {
    img: "@/assets/vue.svg",
    name: "Hypernova Headphones",
    status: "Active",
    price: "$129.99",
    totalSales: 100,
    createdAt: "2023-10-18 03:21 PM",
  },
  {
    img: "@/assets/vue.svg",
    name: "AeroGlow Desk Lamp",
    status: "Active",
    price: "$39.99",
    totalSales: 50,
    createdAt: "2023-11-29 08:15 AM",
  },
  {
    img: "@/assets/vue.svg",
    name: "TechTonic Energy Drink",
    status: "Draft",
    price: "$2.99",
    totalSales: 0,
    createdAt: "2023-12-25 11:59 PM",
  },
  {
    img: "@/assets/vue.svg",
    name: "Gamer Gear Pro Controller",
    status: "Active",
    price: "$59.99",
    totalSales: 75,
    createdAt: "2024-01-01 12:00 AM",
  },
  {
    img: "@/assets/vue.svg",
    name: "Luminous VR Headset",
    status: "Active",
    price: "$199.99",
    totalSales: 30,
    createdAt: "2024-02-14 02:14 PM",
  },
];
</script>

<template>
  <TabsContent :value="filter">
    <Card>
      <CardHeader>
        <CardTitle>Courses</CardTitle>
        <CardDescription> Manage Courses. </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead class="hidden w-[100px] sm:table-cell">
                <span class="sr-only">img</span>
              </TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Satuts</TableHead>
              <TableHead>Created by</TableHead>
              <TableHead class="hidden md:table-cell"> Created at </TableHead>
              <TableHead>
                <span class="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="element in data">
              <TableCell class="hidden sm:table-cell">
                <img
                  alt="Product image"
                  class="aspect-square rounded-md object-cover"
                  height="64"
                  src="@/assets/vue.svg"
                  width="64"
                />
              </TableCell>
              <TableCell class="font-medium">
                {{ element.name }}
              </TableCell>
              <TableCell>
                <Badge variant="outline">
                  {{ element.status }}
                </Badge>
              </TableCell>
              <TableCell>
                {{ element.totalSales }}  
              </TableCell>
              <TableCell class="hidden md:table-cell">
                {{ element.createdAt }}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger as-child>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <MoreHorizontal class="h-4 w-4" />
                      <span class="sr-only">Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                    <DropdownMenuItem>View details</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div class="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>32</strong>
          products
        </div>
      </CardFooter>
    </Card>
  </TabsContent>
</template>
