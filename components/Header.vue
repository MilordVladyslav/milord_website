<template>
  <header
    class="h-[50px] md:h-[80px] border-b-2 border-emerald-600 fixed w-full z-10 bg-white"
  >
    <div class="wrapper h-[50px] md:h-[80px] flex items-center justify-between">
      <div class="flex items-center">
        <div
          class="hidden md:block w-[50px] h-[50px] border-2 rounded-full overflow-hidden"
        >
          <div><img src="http://placekitten.com/200/300" /></div>
        </div>
        <div class="sm:ml-5 text-lg md:text-xl">
          <p>
            V<span class="hidden sm:inline">ladyslav</span> P<span
              class="hidden sm:inline"
              >etrachuk</span
            >
          </p>
        </div>
      </div>
      <div class="flex">
        <div
          class="pr-3 pl-3 sm:pr-0 sm:pl-0 text-center text-sm md:text-base lg:text-lg sm:w-[120px] md:text-lg hover:bg-emerald-600 h-[50px] md:h-[80px] flex items-center justify-center hover:text-white transition duration-150 linear cursor-pointer"
        >
          <p>About Me</p>
        </div>
        <div
          class="pr-3 pl-3 sm:pr-0 sm:pl-0 text-sm md:text-base lg:text-lg sm:w-[120px] md:text-lg hover:bg-emerald-600 h-[50px] md:h-[80px] flex items-center justify-center hover:text-white transition duration-150 linear cursor-pointer"
        >
          <p>Examples</p>
        </div>
        <div
          class="pr-3 pl-3 sm:pr-0 sm:pl-0 sm:w-[120px] text-sm sm:text-base md:text-lg hover:bg-emerald-600 h-[50px] md:h-[80px] flex items-center justify-center hover:text-white transition duration-150 linear cursor-pointer"
        >
          <p>Availability</p>
        </div>
      </div>
    </div>
  </header>
</template>
