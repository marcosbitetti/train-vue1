import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";


import UserProfile from "@/pages/UserProfile.vue";
import Icons from "@/pages/Icons.vue";
import Notifications from "@/pages/Notifications.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },



      {
        path: "user",
        name: "User Profile",
        component: UserProfile
      },

      {
        path: "icons",
        name: "Icons",
        component: Icons
      },

      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      }
    ]
  }
];

export default routes;
