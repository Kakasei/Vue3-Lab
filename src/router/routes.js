import path from "node:path";

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
      {
        path: "/horizontal-vertical-center",
        name: "水平垂直居中",
        children: [
          {
            path: "/flex",
            name: "flex布局",
            component: () =>
              import("@/views/HorizontalVerticalCenter/Flex.vue"),
          },
        ],
      },
    ],
  },
];
