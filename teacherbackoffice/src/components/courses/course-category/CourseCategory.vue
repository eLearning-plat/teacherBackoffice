<template>
  <Card>
    <CardHeader>
      <CardTitle>Course Meetings</CardTitle>
    </CardHeader>
    <CardContent>
      <div>
        <div class="mt-4 grid gap-4">
          <div v-for="meeting in filteredMeetings" :key="meeting.id" >
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="rounded-md bg-muted p-2">
                  <div class="h-5 w-5 text-muted-foreground ">
                    <Calendar />
                  </div>
                </div>
                <div>
                  <div class="font-bold">{{ meeting.title }}</div>
                  <p class="text-sm text-muted-foreground">
                    {{ meeting.description }}
                  </p>
                </div>
              </div>
              <button
                class="border px-2 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
              >
                Participer
              </button>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<script>
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Label } from "../../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Calendar } from "lucide-vue-next";
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    Select, Calendar,
    SelectContent, SelectItem, SelectTrigger, SelectValue,
    Label, Card, CardContent, CardHeader, CardTitle
  },
  props: {
    coursId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      searchQuery: '', // Ajout d'une variable pour le filtrage
      isModalOpen: false, // État pour la modal
    };
  },
  methods: {
    ...mapActions('meetings', ['fetchMeetings']),
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    async submitDocument(newDocument, courseID) {
      try {
        console.log('newDocument', newDocument);
        await this.addDocument({ newDocument, courseID });
        this.closeModal();
      } catch (error) {
        console.error('Error adding document:', error);
      }
    },
    async loadDocuments() {
      try {
        console.log('courseId', this.coursId);
        const queryParams = { courseId: this.coursId };
        console.log('Fetching Meetings with params:', queryParams);
        await this.fetchMeetings(queryParams);
      } catch (error) {
        console.error('Error loading Meetings:', error);
      }
    }
  },
  computed: {
    ...mapState('meetings', ['meetings']),
    filteredMeetings() {
      const query = this.searchQuery.toLowerCase();
      if (!query) {
        return this.meetings;
      }
      return this.meetings.filter(item =>
        item.title.toLowerCase().includes(query)
      );
    }
  },
  created() {
    this.loadDocuments();
  }
};
</script>
