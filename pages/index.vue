<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
// onMounted(() => {
//   import("../node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js");
// });

// });
// import "../node_modules/particles.js/particles.js";

import Header from "~/components/Header.vue";
import AboutMe from "~/components/tabs/AboutMe.vue";
import Skills from "~/components/tabs/Skills.vue";
import Education from "~/components/tabs/Education.vue";
import Footer from "~/components/Footer.vue";
import "@splidejs/vue-splide/css";
const activeTab = shallowRef(Skills);
const activeTabTitle = ref(1);
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
onMounted(() => {
  console.log($hello);
});
// import("../node_modules/particles.js/particles.js").then(() => {
//   particlesJS.load("particles-js", "particlesjs-config.json", function () {
//     console.log("callback - particles.js config loaded");
//   });
// });
</script>
<template>
  <div id="particles-js">
    <Header></Header>
    <section class="wrapper pr-0 pl-0 pt-[50px] md:pt-[80px]">
      <Splide aria-label="Portfolio carousel">
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
    <section class="wrapper justify-center skills">
      <div class="mt-5 md:mt-20 relative overflow-hidden">
        <div class="left-why"></div>
        <div class="right-why"></div>
        <div class="flex justify-center">
          <p
            class="text-[24px] md:text-[42px] font-bold z-6 relative w-[150px] text-center"
          >
            WHY {{ $hello("world") }}
          </p>
        </div>
      </div>
      <div class="mt-4 md:mt-20 md:h-[300px]">
        <div
          class="flex justify-between text-center border-2 border-emerald-600 cursor-pointer"
        >
          <div
            v-for="(item, index) in tabs"
            :key="index"
            :class="[
              'w-full transition duration-500 linear md:text-2xl hover:bg-emerald-500 hover:text-white md:pt-4 md:pb-4',
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
        <Transition name="fade">
          <component :is="activeTab" class="mt-6"></component>
        </Transition>
      </div>
    </section>
    <section class="mt-4 md:mt-20">
      <div class="wrapper">
        <div>
          <div class="flex">
            <p class="text-lg md:text-2xl border-b-2 border-emerald-600 mb-6">
              WORK EXPERIENCE
            </p>
          </div>

          <div class="flex flex-col md:flex-row">
            <div
              class="md:w-1/4 relative md:border-r-2 border-emerald-600 mr-4 pb-2 md:pb-6"
            >
              <p class="text-lg font-bold">ElifTech</p>
              <p>Software Engineer</p>
              <p>Nov 2020 - Jan 2022</p>
              <span
                class="hidden md:block absolute w-[16px] h-[16px] rounded-full bg-emerald-600 top-[-8px] right-[-9px]"
              ></span>
            </div>
            <div class="mb-2">
              <p>
                Development and maintaining a FinTech project, communication
                with the clients, writing documentation, onboarding new team
                members and knowledge transfer
              </p>
            </div>
          </div>
          <div class="flex flex-col md:flex-row">
            <div
              class="md:w-1/4 relative md:border-r-2 border-emerald-600 mr-4 pb-2 md:pb-6"
            >
              <p class="text-lg font-bold">ElifTech</p>
              <p>Software Engineer</p>
              <p>Nov 2020 - Jan 2022</p>
              <span
                class="hidden md:block absolute w-[16px] h-[16px] rounded-full bg-emerald-600 top-[-8px] right-[-9px]"
              ></span>
            </div>
            <div class="mb-2">
              <p>
                Development and maintaining a FinTech project, communication
                with the clients, writing documentation, onboarding new team
                members and knowledge transfer
              </p>
            </div>
          </div>
          <div class="flex flex-col md:flex-row">
            <div
              class="md:w-1/4 relative md:border-r-2 border-emerald-600 mr-4 pb-2 md:pb-6"
            >
              <p class="text-lg font-bold">ElifTech</p>
              <p>Software Engineer</p>
              <p>Nov 2020 - Jan 2022</p>
              <span
                class="hidden md:block absolute w-[16px] h-[16px] rounded-full bg-emerald-600 top-[-8px] right-[-9px]"
              ></span>
            </div>
            <div class="mb-2">
              <p>
                Development and maintaining a FinTech project, communication
                with the clients, writing documentation, onboarding new team
                members and knowledge transfer
              </p>
            </div>
          </div>
          <div class="flex flex-col md:flex-row">
            <div
              class="md:w-1/4 relative md:border-r-2 border-emerald-600 mr-4 pb-2 md:pb-6"
            >
              <p class="text-lg font-bold">ElifTech</p>
              <p>Software Engineer</p>
              <p>Nov 2020 - Jan 2022</p>
              <span
                class="hidden md:block absolute w-[16px] h-[16px] rounded-full bg-emerald-600 top-[-8px] right-[-9px]"
              ></span>
            </div>
            <div class="mb-2">
              <p>
                Development and maintaining a FinTech project, communication
                with the clients, writing documentation, onboarding new team
                members and knowledge transfer
              </p>
            </div>
          </div>
          <div class="flex flex-col md:flex-row">
            <div
              class="md:w-1/4 relative md:border-r-2 border-emerald-600 mr-4 pb-2 md:pb-6"
            >
              <p class="text-lg font-bold">ElifTech</p>
              <p>Software Engineer</p>
              <p>Nov 2020 - Jan 2022</p>
              <span
                class="hidden md:block absolute w-[16px] h-[16px] rounded-full bg-emerald-600 top-[-8px] right-[-9px]"
              ></span>
            </div>
            <div class="mb-2">
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
    <section class="mt-4 md:mt-20">
      <div class="wrapper">
        <div class="flex">
          <p class="text-lg md:text-2xl border-b-2 border-emerald-600 mb-6">
            PORTFOLIO
          </p>
        </div>
        <div class="flex justify-between flex-wrap">
          <div
            class="bg-emerald-200 w-full sm:w-[48%] md:w-[32%] h-[300px] mb-5 overflow-hidden flex justify-center"
          >
            <img src="http://placekitten.com/200/300" class="w-full" />
          </div>
          <div
            class="bg-emerald-200 w-full sm:w-[48%] md:w-[32%] h-[300px] mb-5 overflow-hidden flex justify-center"
          >
            <img src="http://placekitten.com/200/300" class="w-full" />
          </div>
          <div
            class="bg-emerald-200 w-full sm:w-[48%] md:w-[32%] h-[300px] mb-5 overflow-hidden flex justify-center"
          >
            <img src="http://placekitten.com/200/300" class="w-full" />
          </div>
          <div
            class="bg-emerald-200 w-full sm:w-[48%] md:w-[32%] h-[300px] mb-5 overflow-hidden flex justify-center"
          >
            <img src="http://placekitten.com/200/300" class="w-full" />
          </div>
          <div
            class="bg-emerald-200 w-full sm:w-[48%] md:w-[32%] h-[300px] mb-5 overflow-hidden flex justify-center"
          >
            <img src="http://placekitten.com/200/300" class="w-full" />
          </div>
          <div
            class="bg-emerald-200 w-full sm:w-[48%] md:w-[32%] h-[300px] mb-5 overflow-hidden flex justify-center"
          >
            <img src="http://placekitten.com/200/300" class="w-full" />
          </div>
        </div>
      </div>
    </section>
    <section class="mt-4 md:mt-20">
      <div class="wrapper">
        <div class="flex">
          <p class="text-lg md:text-2xl border-b-2 border-emerald-600 mb-6">
            FEEDBACK
          </p>
        </div>
        <div class="flex">
          <div class="hidden md:block">
            <div
              class="w-[50px] h-[50px] border-2 rounded-full overflow-hidden"
            >
              <div><img src="http://placekitten.com/200/300" /></div>
            </div>
          </div>
          <div class="ml-2">
            <p>Emmanuel Neni</p>
            <p class="text-sm">Web-Developer</p>
          </div>
        </div>
        <div class="md:ml-14 mt-2">
          <p class="italic md:text-xl">
            <span class="md:text-xl font-bold text-emerald-600">“</span
            >Hardworking, determined, and motivated, that is what comes to mind
            if I describe Vladyslav. I have had the pleasure of working for over
            1 year with Vladyslav at Eliftech, in many different capacities and
            tasks. His ability to work on multiple tasks while properly managing
            time allotted a task was great to have. And at the same time he also
            made a big difference in productivity of the team. Meetings were fun
            packed with humor and smiles thanks to Vladyslav which made the
            process all the more enjoyable. I believe Vladyslav will be a great
            addition to any team and Every employee would be happy with an
            engineer as Vladyslav.<span
              class="md:text-xl font-bold text-emerald-600"
              >”</span
            >
          </p>
        </div>
      </div>
    </section>
    <section class="mt-4 md:mt-20">
      <div class="wrapper">
        <div class="flex">
          <p
            class="text-lg md:text-2xl border-b-2 border-emerald-600 mb-4 md:mb-6"
          >
            AVAILABILITY
          </p>
        </div>
        <div class="flex items-center">
          <div class="mr-2 bg-emerald-600 rounded-full w-[8px] h-[8px]"></div>
          <p>Available as a Vue.js developer</p>
        </div>
      </div>
    </section>
    <section class="mt-4 md:mt-20">
      <div class="wrapper">
        <div class="flex">
          <p
            class="text-lg md:text-2xl border-b-2 border-emerald-600 mb-4 md:mb-6"
          >
            CONTACTS
          </p>
        </div>
        <div>
          <p class="mr-2 mb-2">
            <a href="#" class="flex w-[110px] items-center"
              ><img
                src="../assets/icons8-gmail-logo-100.png"
                class="w-[38px] mr-2"
              />Gmail</a
            >
          </p>
          <p class="mr-2 mb-2">
            <a href="#" class="flex w-[110px] items-center"
              ><img
                src="../assets/icons8-linkedin-circled-96.png"
                class="w-[38px] mr-2"
              />LinkedIn</a
            >
          </p>
          <p class="mr-2 mb-2">
            <a href="#" class="flex w-[110px] items-center"
              ><img
                src="../assets/icons8-github-squared-100.png"
                class="w-[38px] mr-2"
              />
              GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
    <Footer></Footer>
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
