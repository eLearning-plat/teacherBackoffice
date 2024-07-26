<template>
     <Card class="xl:col-span-2">
          <CardHeader class="flex flex-row items-center">
            <div class="grid gap-2">
              <CardTitle>Courses</CardTitle>
              <CardDescription>
                Course Listings By Week.
              </CardDescription>
            </div>
            <Button as-child size="sm" class="ml-auto gap-1">
              <a href="/course">
                View All
                <ArrowUpRight class="h-4 w-4" />
              </a>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Courses</TableHead>
                 
                 
                  <TableHead class="text-right">
                    Categories
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div class="font-medium">
                      Introduction to Quranic Studies
                    </div>
                    <div class="hidden text-sm text-muted-foreground md:inline">
                      An introductory course covering the history, 
                    </div>
                  </TableCell>
                  
                  <TableCell class="text-right">
                    Quranic
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div class="font-medium">
                      Tafsir of Surah Al-Fatihah
                    </div>
                    <div class="hidden text-sm text-muted-foreground md:inline">
                      A detailed study of Surah Al-Fatihah
                    </div>
                  </TableCell>
                  <TableCell class="text-right">
                    Quranic
                  </TableCell>
                </TableRow>
              
              </TableBody>
            </Table>
          </CardContent>
        </Card>
</template>
<script setup>
import { ArrowUpRight} from 'lucide-vue-next'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
</script>