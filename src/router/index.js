import { createWebHashHistory, createRouter } from "vue-router";
import choosePage from "../components/Detect.vue";

const routes = [
  {
    path: "/",
    name: "choosePage",
    component: choosePage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
