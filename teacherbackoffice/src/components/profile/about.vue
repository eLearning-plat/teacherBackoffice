<template>
        <Card>
  <CardContent>
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Work Experience</AccordionTrigger>
        <AccordionContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="math-teacher">Math Teacher</Label>
              <div>Acme High School, 2015 - Present</div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="tutor">Tutor</Label>
              <div>Tutoring Center, 2012 - 2015</div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Education</AccordionTrigger>
        <AccordionContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="master-education">Master of Education</Label>
              <div>University of Education, 2012</div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="bachelor-mathematics">Bachelor of Arts in Mathematics</Label>
              <div>State University, 2010</div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Certifications</AccordionTrigger>
        <AccordionContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="nbct">National Board Certified Teacher</Label>
              <div>2018</div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="google-certified">Google Certified Educator, Level 2</Label>
              <div>2020</div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </CardContent>
</Card>
  </template>
<script>
import Accordion from '../ui/accordion/Accordion.vue';
import AccordionContent from '../ui/accordion/AccordionContent.vue';
import AccordionItem from '../ui/accordion/AccordionItem.vue';
import AccordionTrigger from '../ui/accordion/AccordionTrigger.vue';
import Card from '../ui/card/Card.vue';
import CardContent from '../ui/card/CardContent.vue';
import Label from '../ui/label/Label.vue';


export default {
    name : 'AboutPage',
    components:{
      Label,
      CardContent,
      Card,
      AccordionTrigger,
      AccordionContent,
      Accordion,
      AccordionItem
    }
}
</script>