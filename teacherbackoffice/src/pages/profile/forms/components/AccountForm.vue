<script setup lang="js">
import { h, ref } from 'vue'
import * as z from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { Check, ChevronsUpDown } from 'lucide-vue-next'
import { CalendarDate, DateFormatter, getLocalTimeZone, today } from '@internationalized/date'
import { cn } from '@/lib/utils'
import DataTableCertification from './DataTableCertification.vue'

import DataTable from './DataTable.vue'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../../../../components/ui/form'
import { Input } from '../../../../components/ui/input'
import { Separator } from '../../../../components/ui/separator'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../../../../components/ui/command'
import { Button } from '../../../../components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../../../components/ui/popover'
import { Calendar } from '../../../../components/ui/calendar'
import { toast } from '../../../../components/ui/toast'
import { useRouter } from 'vue-router';
import DataTableExperience from './DataTableExperience.vue';
const open = ref(false)
const dateValue = ref()
const placeholder = ref()
const router = useRouter();
function push() {
  router.push('/profile');
}
const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})

const accountFormSchema = toTypedSchema(z.object({
  name: z
    .string({
      required_error: 'Required.',
    })
    .min(2, {
      message: 'Name must be at least 2 characters.',
    })
    .max(30, {
      message: 'Name must not be longer than 30 characters.',
    }),
  dob: z.string().datetime().optional().refine(date => date !== undefined, 'Please select a valid date.'),
  language: z.string().min(1, 'Please select a language.'),
}))

async function onSubmit(values) {
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  })
}
</script>


<template>
  <div>
    <h3 class="text-lg font-medium">
      Account
    </h3>
    <p class="text-sm text-muted-foreground">
      Update your account settings. Set your preferred language and timezone.
    </p>
  </div>
  <Separator />

  <Form v-slot="{ setFieldValue }" :validation-schema="accountFormSchema" class="space-y-8" @submit="onSubmit">
   <h2 class="font-bold"> Education section</h2>
   <DataTable/>
   <h2 class="font-bold"> Certifications</h2>
   <DataTableCertification/>
   <h2 class="font-bold"> Work Experience</h2>
   <DataTableExperience/>
    <div class="flex justify-start">
      <Button   @Click="push()" type="submit">
        Update account
      </Button>
      <Button
        type="button" class="mx-2"
        variant="outline"
       @Click="push()"
      >
        Return
      </Button>
    </div>
  </Form>
</template>
