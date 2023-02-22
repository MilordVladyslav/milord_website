<script setup lang="ts">
const skills = [
  {
    top: false,
    name: "JavaScript",
  },
  {
    top: false,
    name: "JavaScript",
  },
  {
    top: false,
    name: "JavaScript",
  },
  {
    top: false,
    name: "JavaScript",
  },
  {
    top: false,
    name: "JavaScript",
  },
  {
    top: false,
    name: "JavaScript",
  },
  {
    top: false,
    name: "JavaScript",
  },
  {
    top: false,
    name: "JavaScript",
  },
  {
    top: false,
    name: "JavaScript",
  },
  {
    top: false,
    name: "JavaScript",
  },
  {
    top: false,
    name: "JavaScript",
  },
  {
    top: false,
    name: "JavaScript",
  },
  {
    top: false,
    name: "JavaScript",
  },
  {
    top: false,
    name: "JavaScript",
  },
  {
    top: false,
    name: "JavaScript",
  },
  {
    top: false,
    name: "JavaScript",
  },
  {
    top: false,
    name: "JavaScript",
  },
];
</script>

<template>
  <div>
    <ul class="flex flex-wrap">
      <li v-for="(item, index) in skills" :key="index" class="w-1/2 md:w-1/3">
        <div class="flex items-center justify-center">
          <div class="mr-2 bg-emerald-600 rounded-full w-[8px] h-[8px]"></div>
          <div class="md:text-lg">{{ item.name }}</div>
        </div>
      </li>
    </ul>
    <div class="md:mt-4 flex items-center">
      <div class="mr-2 bg-emerald-600 rounded-full w-[8px] h-[8px]"></div>
      – Top Skill
    </div>
  </div>
</template>
