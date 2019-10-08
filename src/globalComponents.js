import DropDown from "./components/Dropdown.vue";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

library.add(faUserSecret)

const GlobalComponents = {
  install(Vue) {
    Vue.component("drop-down", DropDown);
    Vue.component('font-awesome-icon', FontAwesomeIcon);
  }
};

export default GlobalComponents;
