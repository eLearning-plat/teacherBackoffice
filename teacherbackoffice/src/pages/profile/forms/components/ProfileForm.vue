<script setup lang="js">
import { h, ref } from 'vue'
import { FieldArray, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
 
import { cn } from '@/lib/utils'

import { Input } from '../../../../components/ui/input'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../../../../components/ui/form'
import { Separator } from '../../../../components/ui/separator'
import { Textarea } from '../../../../components/ui/textarea'
import { useRouter } from 'vue-router'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../../components/ui/select'
import { Button } from '../../../../components/ui/button'
import { toast } from '../../../../components/ui/toast'

const verifiedEmails = ref(['m@example.com', 'm@google.com', 'm@support.com'])
const router = useRouter();
function push() {
  router.push('/profile');
}
const profileFormSchema = toTypedSchema(z.object({
  username: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .max(30, {
      message: 'Username must not be longer than 30 characters.',
    }),
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
  bio: z.string().max(160, { message: 'Bio must not be longer than 160 characters.' }).min(4, { message: 'Bio must be at least 2 characters.' }),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: 'Please enter a valid URL.' }),
      }),
    )
    .optional(),
}))

const { handleSubmit, resetForm } = useForm({
  validationSchema: profileFormSchema,
  initialValues: {
    bio: 'I own a computer.',
    urls: [
      { value: 'https://shadcn.com' },
      { value: 'http://twitter.com/shadcn' },
    ],
  },
})

const onSubmit = handleSubmit((values) => {
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  })
})
</script>

<template>
  <div>
    <h3 class="text-lg font-medium">
      Profile
    </h3>
    <p class="text-sm text-muted-foreground">
      <!-- This is how others will see you on the site. -->
    </p>
  </div>
  <Separator />
  <form class="space-y-8" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="username">
      <FormItem>
        <FormLabel>Username</FormLabel>
        <FormControl>
          <Input type="text" placeholder="shadcn" v-bind="componentField" />
        </FormControl>
        <FormDescription>
          <!-- This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days. -->
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="email">
      <FormItem>
        <FormLabel>Email</FormLabel>
        <Input type="text" placeholder="shadcn" v-bind="componentField" />
        <!-- <Select v-bind="componentField">
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder="Select an email" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            <SelectGroup>
              <SelectItem v-for="email in verifiedEmails" :key="email" :value="email">
                {{ email }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select> -->
        <FormDescription>
          <!-- You can manage verified email addresses in your email settings. -->
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="username">
      <FormItem>
        <FormLabel>Phone Number</FormLabel>
        <FormControl>
          <Input type="tel" placeholder="shadcn" v-bind="componentField" />
        </FormControl>
        <FormDescription>
          <!-- This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days. -->
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="username">
      <FormItem>
        <FormLabel>Address</FormLabel>
        <FormControl>
          <Input type="text" placeholder="shadcn" v-bind="componentField" />
        </FormControl>
        <FormDescription>
          <!-- This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days. -->
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="bio">
      <FormItem>
        <FormLabel>Bio</FormLabel>
        <FormControl>
          <Textarea placeholder="Tell us a little bit about yourself" v-bind="componentField" />
        </FormControl>
        <FormDescription>
          <!-- You can <span>@mention</span> other users and organizations to link to them. -->
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>

    <div>
   
    </div>

    <div class="flex gap-2 justify-start">
      <Button type="submit"  @Click="push()">
        Update profile
      </Button>

      <Button
        type="button" class="mx-2"
        variant="outline"
       @Click="push()"
      >
        Return
      </Button>
    </div>
  </form>
</template>
