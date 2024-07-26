<script setup lang="js">
import { useRouter } from 'vue-router';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Button from '../ui/button/Button.vue';
const router = useRouter();

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Sona',
    totalAmount: 'Sona',
    paymentMethod: '03/01/2024',
    action:'Details'
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Arabic Language',
    totalAmount: 'Arabic Language',
    paymentMethod: '05/01/2024',
    action:'Details'
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Sona',
    totalAmount: 'Sona',
    paymentMethod: '14/001/2024',
    action:'Details'
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Comuter',
    totalAmount: 'Comuter',
    paymentMethod: '14/01/2024',
    action:'Details'
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Computer',
    totalAmount: 'Comuter',
    paymentMethod: '02/02/2024',
    action:'Details'
  },
]
function push() {
  router.push('/courseDetails');
}

</script>

<template>
  <Table class="w-full">
    <TableCaption class="text-blue-500 mr-11"> <div class="flex justify-end font-semibold"><a class="underline" href="/course">Vue All</a></div></TableCaption>
    <TableHeader class="bgHeader">
      <TableRow>
        <TableHead class="w-[100px]">
          Code
        </TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Category</TableHead>
        <TableHead class="text-ceenter">
          Date
        </TableHead>
        <TableHead class="text-center">
          Action
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="invoice in invoices" :key="invoice.invoice">
        <TableCell class="font-medium">
          {{ invoice.invoice }}
        </TableCell>
        <TableCell>{{ invoice.paymentStatus }}</TableCell>
        <TableCell>{{ invoice.totalAmount }}</TableCell>
        <TableCell class="">
          {{ invoice.paymentMethod }}
        </TableCell>
        <TableCell class="text-center"> <Button  @Click="push()" >{{ invoice.action }}</Button></TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
<style scoped>
.bgHeader{
background: #F1F5F9;
}

</style>