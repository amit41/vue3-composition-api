import NoteView from "@/views/NoteView.vue";
import statsView from "@/views/statsView.vue";
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
    component: statsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
