export const routes = [
  {
    path: "/",
    component: () => import("@/views/Home.vue"),
    children: [
      {
        path: "/notitle",
        name: "NoTitle",
        component: () => import("@/views/NoTitle.vue"),
      },
      {
        path: "/parent-child",
        name: "父子组件",
        component: () => import("@/views/ParentChildren/ParentChildren.vue"),
      },
    ],
  },
];
