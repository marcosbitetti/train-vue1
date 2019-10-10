import Vue from "vue";
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserSecret,
  faTachometerAlt,
  faCalendar,
  faCalendarAlt,
  faCalendarPlus,
  faInbox,
  faNewspaper,
  faPenSquare,
  faChartLine,
  faChartPie,
  faCog,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';



library.add(faUserSecret,faTachometerAlt,faCalendar,faCalendarAlt,faCalendarPlus,faInbox,faNewspaper,faPenSquare,faChartLine,faChartPie,faCog,faAngleDown)

Vue.component('font-awesome-icon', FontAwesomeIcon);
