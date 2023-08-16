import NoteEditView from "@/views/NoteEditView.vue";
import NoteView from "@/views/NoteView.vue";
import StatsView from "@/views/StatsView.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "notes",
    component: NoteView,
  },
  {
    path: "/stats",
    name: "stats",
    component: StatsView,
  },
  {
    path: "/note/edit/:id",
    name: "editNote",
    component: NoteEditView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
