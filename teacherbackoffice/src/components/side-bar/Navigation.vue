<template>
  <nav v-for="item in items" :key="item.label" class="flex flex-col gap-2">
    <span
      :class="
        IsMobile
          ? 'text-blue-500 font-bold leading-none'
          : 'text-blue-500 font-bold leading-none hidden md:block'
      "
    >
      {{ item.label }}
    </span>

    <div v-for="subItem in item.items" :key="subItem.section" class="flex flex-col">
      <RouterLink
        v-if="!subItem.children"
        :to="subItem.link"
        :class="[
          'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
          isActive(subItem.link) ? 'bg-muted/40 text-foreground' : 'bg-white text-gray-800'
        ]"
        prefetch="false"
      >
        <component
          :is="getIconComponent(subItem.icon)"
          class="h-5 w-5"
        ></component>
        <span :class="IsMobile ? '' : 'hidden md:block'">{{ subItem.section }}</span>
      </RouterLink>

      <div v-else>
        <div
          @click="toggleAccordion(subItem)"
          :class="[
            'flex items-center gap-3 cursor-pointer rounded-md px-3 py-2 text-sm font-medium transition-colors',
            activeAccordion === subItem ? 'bg-muted/40 text-foreground' : 'bg-white text-gray-800'
          ]"
        >
          <component :is="getIconComponent(subItem.icon)" class="h-5 w-5"></component>
          <span :class="IsMobile ? '' : 'hidden md:block'">{{ subItem.section }}</span>
          <ChevronRight v-if="activeAccordion !== subItem" class="ml-12" />
          <ChevronDown v-else class="ml-12" />
        </div>
        <div v-if="activeAccordion === subItem" class="pl-8">
          <RouterLink
            v-for="child in subItem.children"
            :key="child.section"
            :to="child.link"
            :class="[
              'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
              isActive(child.link) ? 'bg-muted/40 text-foreground' : 'bg-white text-gray-800'
            ]"
            prefetch="false"
          >
            <component :is="getIconComponent(child.icon)" class="h-5 w-5"></component>
            <span :class="IsMobile ? '' : 'hidden md:block'">{{ child.section }}</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import {
  UsersIcon,
  BookOpenIcon,
  InformationCircleIcon,
  NewspaperIcon,
  CubeIcon,
  PencilSquareIcon,
  CheckIcon,
  EnvelopeIcon,
  BanknotesIcon,
} from "@heroicons/vue/24/outline";
import {ChevronDown,ChevronRight,
  Package2,
  Video,
  MessageSquareQuote,
  CalendarRange,
  Paperclip,
} from "lucide-vue-next";
import { RouterLink } from "vue-router";

export default {
  props: {
    IsMobile: {
      type: Boolean,
      default: false,
    },
  },
  components:{
    ChevronDown,
    ChevronRight
  },
  setup(props) {
    const route = useRoute();
    const { IsMobile } = props;
    console.log("IsMobile prop value:", props.IsMobile);
    
    const icons = {
      UsersIcon,
      BookOpenIcon,
      InformationCircleIcon,
      NewspaperIcon,
      CubeIcon,
      PencilSquareIcon,
      CheckIcon,
      EnvelopeIcon,
      BanknotesIcon,
      Package2,
      MessageSquareQuote,
      CalendarRange,
      Paperclip,
      Video,
    };

    const items = ref([
      {
        label: "Student Space",
        items: [
          {
            section: "Dashboard",
            icon: "Package2",
            link: "/",
          },
          {
            section: "Profile",
            icon: "UsersIcon",
            link: "/profile",
          },
          {
            section: "Courses",
            icon: "BookOpenIcon",
            link: "/course",
          },
          {
            section: "Document",
            icon: "Paperclip",
            children: [
              {
                section: "Quranic Recitation Tajwid",
                icon: "UploadIcon",
                link: "/document/Quranic",
              },
              {
                section: "Sona",
                icon: "FolderIcon",
                link: "/document/Sona",
              },
              {
                section: "Arabic Language",
                icon: "FolderIcon",
                link: "/document/ArabicLanguage",
              },
              {
                section: "English Language",
                icon: "FolderIcon",
                link: "/document/EnglishLanguage",
              },
              {
                section: "Computer",
                icon: "FolderIcon",
                link: "/document/Computer",
              },
            ],
          },
          {
            section: "Event",
            icon: "CalendarRange",
            link: "/event",
          },
          {
            section: "Corners",
            icon: "Video",
            link: "/blogs",
          },
        ],
      },
    ]);

    const activeAccordion = ref(null);

    const toggleAccordion = (item) => {
      activeAccordion.value = activeAccordion.value === item ? null : item;
    };

    const getIconComponent = (iconName) => icons[iconName];

    const isActive = (link) => {
      if(link){return route.path === link;}
      else{return route.path === '/';}
      
    };

    return {
      items,
      activeAccordion,
      toggleAccordion,
      getIconComponent,
      isActive
    };
  },
};
</script>
