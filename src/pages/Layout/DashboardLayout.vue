<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <top-menu />

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <!--<md-icon>dashboard</md-icon>-->
        <font-awesome-icon :icon="['fas', 'tachometer-alt']" />
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/oab">
        <font-awesome-icon :icon="['fas', 'calendar-plus']" />
        <p>Agendar Post</p>
      </sidebar-link>
      <sidebar-link to="/oab">
        <font-awesome-icon :icon="['fas', 'inbox']" />
        <p>Inbox</p>
      </sidebar-link>
      <sidebar-link to="/oab">
        <font-awesome-icon :icon="['fas', 'newspaper']" />
        <p>Feed</p>
      </sidebar-link>
      <sidebar-link to="/oab">
        <font-awesome-icon :icon="['fas', 'pen-square']" />
        <p>Workflow</p>
      </sidebar-link>
      <sidebar-link to="/oab">
        <font-awesome-icon :icon="['fas', 'chart-line']" />
        <p>Acompanhamento</p>
      </sidebar-link>
      <sidebar-link to="/oab">
        <font-awesome-icon :icon="['fas', 'chart-pie']" />
        <p>Relatórios</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
    FontAwesomeIcon
  }
};
</script>
