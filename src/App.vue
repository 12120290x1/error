<template>
  <div class="pt-2 pl-2 fixed-top-left">
    <button @click="onMenuClick">Menu</button>
  </div>

  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/store'
import { ActionTypes } from './store/actions'

export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore()

    function onMenuClick() {
      store.dispatch(ActionTypes.TOGGLE_isNavOpen)
    }

    return { onMenuClick }
  }
})
</script>

<style lang="scss">
.fixed-top-left {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1031;
}

.z-index--1 {
  z-index: 1;
}

.bottom-lelf--0 {
  bottom: 0;
  left: 0;
}

#nav1 > * {
  width: 90%;
}
.nav1-open {
  margin-left: 20px !important;
}

@media (min-width: 1024px) {
  #nav1 {
    width: 240px;
    margin-left: -200px;
  }

  .fixed-left-0 {
    position: fixed;
    left: 0;
  }
  .ml-240 {
    margin-left: 240px !important;
  }
  #main1 {
    margin-left: 0;
  }
}
</style>
