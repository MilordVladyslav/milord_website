<script setup>
import Header from "~/components/Header.vue";
import Contacts from "~/components/Contacts.vue";
import Footer from "~/components/Footer.vue";
</script>
<template>
  <div>
    <Header></Header>
  </div>
  <section class="wrapper pt-[80px] md:pt-[120px]">
    <div class="flex">
      <p class="text-lg md:text-2xl font-bold border-b-2 border-emerald-600">
        Title
      </p>
    </div>
    <p>Description loren sit amet</p>
    <div class="mt-7 mb-7">
      <img src="https://placekitten.com/1280/700" />
    </div>
    <p>Hello</p>
  </section>
  <Contacts></Contacts>
  <Footer></Footer>
</template>
