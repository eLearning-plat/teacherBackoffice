<script setup lang="js">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../../../../components/ui/form'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../../components/ui/table'
import {CircleX} from 'lucide-vue-next'
import Button from '../../../../components/ui/button/Button.vue';
import { Input } from '../../../../components/ui/input'
const router = useRouter();

// Déclarez l'état réactif pour les lignes du tableau
const rows = ref([
  { degree: '', university: '', startDate: '', endDate: '' }
]);

// Méthode pour ajouter une nouvelle ligne
const addRow = () => {
  rows.value.push({ degree: '', university: '', startDate: '', endDate: '' });
};

// Méthode pour supprimer une ligne
const deleteRow = (index) => {
  if (rows.value.length > 1) {
    rows.value.splice(index, 1);
  }
};
</script>

<template>
  <Table class="w-full ">
    <TableCaption class="text-blue-500 mr-11">
      <div class="flex justify-end font-semibold">
        <Button @click="addRow">Add</Button>
      </div>
    </TableCaption>
    <TableHeader >
      <TableRow>
        <TableHead>Degree</TableHead>
        <TableHead>University</TableHead>
        <TableHead class="text-center">Start Date</TableHead>
        <TableHead class="text-center">End Date</TableHead>
        <TableHead class="text-center"></TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="(row, index) in rows" :key="index">
        <TableCell>
          <FormField v-slot="{ componentField }" :name="'degree-' + index">
            <FormItem>
              <FormControl>
                <Input type="text" placeholder="Degree" v-bind="componentField" v-model="row.degree" />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          </FormField>
        </TableCell>
        <TableCell>
          <FormField v-slot="{ componentField }" :name="'university-' + index">
            <FormItem>
              <FormControl>
                <Input type="text" placeholder="University" v-bind="componentField" v-model="row.university" />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          </FormField>
        </TableCell>
        <TableCell>
          <FormField v-slot="{ componentField }" :name="'startDate-' + index">
            <FormItem>
              <FormControl>
                <Input type="text" placeholder="Start Date" v-bind="componentField" v-model="row.startDate" />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          </FormField>
        </TableCell>
        <TableCell>
          <FormField v-slot="{ componentField }" :name="'endDate-' + index">
            <FormItem>
              <FormControl>
                <Input type="text" placeholder="End Date" v-bind="componentField" v-model="row.endDate" />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          </FormField>
        </TableCell>
        <TableCell class="text-center">
          <!-- Ne pas afficher le bouton Delete pour la première ligne -->
          <Button v-if="index !== 0" class=" bg-white text-gray-500 hover:bg-white" @click="deleteRow(index)">  <CircleX /></Button>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>

