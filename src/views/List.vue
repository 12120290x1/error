<template>
  <div class="d-flex align-items-start vh-sm-100- overflow-sm-auto">
    <nav
      ref="nav1"
      id="nav1"
      class="bg-primary"
      :class="{ 'nav1-open': $store.state.isNavOpen }"
    >
      <div class="flex-shrink-0 mt-5 mb-5 pl-4">
        <section>
          <header><h5>Gender</h5></header>
          <section><input type="checkbox" />Man</section>
          <section><input type="checkbox" />Woman</section>
          <section><input type="checkbox" />Unisex</section>
        </section>
      </div>
    </nav>
    <main ref="main1" id="main1" class="flex-grow-1 d-flex flex-wrap">
      <button @click="addfix">aaaa</button>
      <div class="col-sm-6- col-lg-4-">
        <img
          src="https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/f2e835c0-78d6-4b8e-a79e-24dc8ecf47a1/jordan-oversize-short-sleeve-t-shirt-pDmMVQ.jpg"
          alt="Girl in a jacket"
          width="100%"
          height="400vh"
        />
        <div>menu</div>
        <div>name</div>
        <span>$123</span>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  name: 'List',
  setup() {
    const nav1 = ref<HTMLElement>()

    function addfix() {
      nav1.value?.classList.add('fixed-left-0')
    }

    return { nav1, addfix }
  }
})
</script>
