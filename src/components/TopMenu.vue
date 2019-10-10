<template>
  <div
    class="topmenu"
  >
    <time :datetime="now">{{now | formatDate}}</time>

    <div class="user-menu">
      <md-menu md-direction="bottom-end" :md-offset-x="-10" :md-offset-y="-40">
        <md-button md-menu-trigger class="">Minha Conta<font-awesome-icon :icon="['fas', 'angle-down']" /></md-button>
        <md-menu-content>
          <md-menu-item>Loren Ipsun</md-menu-item>
          <md-menu-item>Loren Ipsun</md-menu-item>
          <md-menu-item>Loren Ipsun</md-menu-item>
          <md-menu-item>Loren Ipsun</md-menu-item>
          <md-menu-item>Loren Ipsun</md-menu-item>
        </md-menu-content>
      </md-menu>
    </div>

    <md-button class="config"><font-awesome-icon :icon="['fas', 'cog']" /></md-button>

  </div>
</template>
<script>

export default {
  components: {

  },
  props: {
    /*title: {
      type: String,
      default: "Au Au Help"
    },*/
    /*now: {
      type: Date,
      default: () => (new Date()),
    }*/
  },
  data: () => ({
    now: new Date(),
  }),
  provide() {
    this.processTime(this)
    return {
      autoClose: this.autoClose
    };
  },
  computed: {
  },
  methods: {
    processTime: (v) => {
      if (v.now) v.now = new Date()
      setTimeout(v.processTime,1000,v)
    },
  }
};
</script>
<style>
@media screen and (min-width: 991px) {
  .nav-mobile-menu {
    /*display: none;*/
  }
}
</style>
