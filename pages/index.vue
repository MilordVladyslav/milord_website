<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import AboutMe from "~/components/tabs/AboutMe.vue";
import Skills from "~/components/tabs/Skills.vue";
import Education from "~/components/tabs/Education.vue";
import "@splidejs/vue-splide/css";
const activeTab = shallowRef(AboutMe);
const activeTabTitle = ref(0);
const tabs = [
  {
    component: AboutMe,
    title: "About Me",
  },
  {
    component: Skills,
    title: "Skills",
  },
  {
    component: Education,
    title: "Education",
  },
];
</script>
<template>
  <div class="h-[2900px]">
    <header class="h-[80px] border-b-2 border-emerald-600">
      <div class="wrapper h-[80px] flex items-center justify-between">
        <div class="flex items-center">
          <div class="w-[50px] h-[50px] border-2 rounded-full overflow-hidden">
            <div><img src="http://placekitten.com/200/300" /></div>
          </div>
          <div class="ml-5 text-xl"><p>Vladyslav Petrachuk</p></div>
        </div>
        <div class="flex">
          <div
            class="w-[120px] text-lg hover:bg-emerald-600 h-[80px] flex items-center justify-center hover:text-white transition duration-150 linear cursor-pointer"
          >
            <p>About Me</p>
          </div>
          <div
            class="w-[120px] text-lg hover:bg-emerald-600 h-[80px] flex items-center justify-center hover:text-white transition duration-150 linear cursor-pointer"
          >
            <p>Examples</p>
          </div>
          <div
            class="w-[120px] text-lg hover:bg-emerald-600 h-[80px] flex items-center justify-center hover:text-white transition duration-150 linear cursor-pointer"
          >
            <p>Availability</p>
          </div>
        </div>
      </div>
    </header>
    <section class="wrapper">
      <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <img src="http://placekitten.com/1280/600" alt="Sample 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="http://placekitten.com/1280/600" alt="Sample 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="http://placekitten.com/1280/600" alt="Sample 2" />
        </SplideSlide>
      </Splide>
    </section>
    <section class="wrapper justify-center">
      <div class="mt-20 relative overflow-hidden">
        <div class="h-[2px] bg-emerald-600 w-full absolute top-[35px]"></div>
        <div class="left-why"></div>
        <div class="right-why"></div>
        <div class="flex justify-center">
          <p
            class="text-[42px] font-bold z-6 relative bg-white w-[150px] text-center"
          >
            WHY
          </p>
        </div>
      </div>
      <div class="mt-20 h-[300px]">
        <div class="flex justify-between text-center border-2 cursor-pointer">
          <div
            v-for="(item, index) in tabs"
            :key="index"
            :class="[
              'w-full transition duration-500 linear text-2xl hover:bg-emerald-500 hover:text-white pt-4 pb-4',
              { 'text-white bg-emerald-600': index === activeTabTitle },
            ]"
            @click="
              activeTab = item.component;
              activeTabTitle = index;
            "
          >
            {{ item.title }}
          </div>
        </div>
        <Transition name="fade" class="mt-6">
          <component :is="activeTab"></component>
        </Transition>
      </div>
    </section>
    <section class="mt-20">
      <div class="wrapper">
        <div>
          <div class="flex">
            <p class="text-2xl border-b-2 border-emerald-600 mb-6">
              WORK EXPERIENCE
            </p>
          </div>

          <div class="flex">
            <div class="w-1/4 relative border-r-2 border-emerald-600 mr-4 pb-6">
              <p class="text-lg font-bold">ElifTech</p>
              <p>Software Engineer</p>
              <p>Nov 2020 - Jan 2022</p>
              <span
                class="absolute w-[16px] h-[16px] rounded-full bg-emerald-600 top-[-8px] right-[-9px]"
              ></span>
            </div>
            <div>
              <p>
                Development and maintaining a FinTech project, communication
                with the clients, writing documentation, onboarding new team
                members and knowledge transfer
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="w-1/4 relative border-r-2 border-emerald-600 mr-4 pb-6">
              <p class="text-lg font-bold">ElifTech</p>
              <p>Software Engineer</p>
              <p>Nov 2020 - Jan 2022</p>
              <span
                class="absolute w-[16px] h-[16px] rounded-full bg-emerald-600 top-[-8px] right-[-9px]"
              ></span>
            </div>
            <div>
              <p>
                Development and maintaining a FinTech project, communication
                with the clients, writing documentation, onboarding new team
                members and knowledge transfer
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="w-1/4 relative border-r-2 border-emerald-600 mr-4 pb-6">
              <p class="text-lg font-bold">ElifTech</p>
              <p>Software Engineer</p>
              <p>Nov 2020 - Jan 2022</p>
              <span
                class="absolute w-[16px] h-[16px] rounded-full bg-emerald-600 top-[-8px] right-[-9px]"
              ></span>
            </div>
            <div>
              <p>
                Development and maintaining a FinTech project, communication
                with the clients, writing documentation, onboarding new team
                members and knowledge transfer
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="w-1/4 relative border-r-2 border-emerald-600 mr-4 pb-6">
              <p class="text-lg font-bold">ElifTech</p>
              <p>Software Engineer</p>
              <p>Nov 2020 - Jan 2022</p>
              <span
                class="absolute w-[16px] h-[16px] rounded-full bg-emerald-600 top-[-8px] right-[-9px]"
              ></span>
            </div>
            <div>
              <p>
                Development and maintaining a FinTech project, communication
                with the clients, writing documentation, onboarding new team
                members and knowledge transfer
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="w-1/4 relative border-r-2 border-emerald-600 mr-4 pb-6">
              <p class="text-lg font-bold">ElifTech</p>
              <p>Software Engineer</p>
              <p>Nov 2020 - Jan 2022</p>
              <span
                class="absolute w-[16px] h-[16px] rounded-full bg-emerald-600 top-[-8px] right-[-9px]"
              ></span>
            </div>
            <div>
              <p>
                Development and maintaining a FinTech project, communication
                with the clients, writing documentation, onboarding new team
                members and knowledge transfer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.fade-enter-active {
  transition: opacity 0.3s ease 0.3s;
}
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
