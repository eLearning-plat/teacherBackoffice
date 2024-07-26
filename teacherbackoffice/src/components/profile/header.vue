<template>
  <Card>
    <div className=" flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <CardHeader>
          <Avatar className="h-16 w-16 md:h-20 md:w-20">
          <AvatarImage
            src="https://github.com/radix-vue.png"
            alt="@radix-vue"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        </CardHeader>
        
        <CardContent>
          <div className="grid gap-1">
            <h1 className="text-2xl font-bold md:text-3xl">John Doe</h1>
            <p className="text-muted-foreground">john@example.com</p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 555-5555</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <House className="h-4 w-4" />
              <span>123 Main St, Anytown USA</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Building className="h-4 w-4" />
              <span>Bio</span>
            </div>
          </div>
        </CardContent>
      </div>
      <Button class="mr-11 bg-blue-500 text-white" @Click="push()" variant="outline">Edit</Button>
    </div>
  </Card>
</template>
<script>
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Button from "../ui/button/Button.vue";
import Card from "../ui/card/Card.vue";
import { Phone, House, Building } from "lucide-vue-next";
import CardContent from "../ui/card/CardContent.vue";
import CardHeader from "../ui/card/CardHeader.vue";
export default {
  name: "HeaderPage",
  components: {
    Button,
    Card,
    Avatar,
    AvatarFallback,
    AvatarImage,
    Phone,
    Building,
    House,
    CardContent,
    CardHeader
  },
  methods:{
    push(){
      this.$router.push('/examples/forms')
    }
  }
};
</script>
