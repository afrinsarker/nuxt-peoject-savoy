<template>
  <div class="max-w-screen-xl mx-auto py-4">
    <!-- Breadcrumbs -->
    <section class="text-gray-600 body-font">
      <!-- category flex -->
      <div class="px-5 py-10 mx-auto flex items-center md:flex-row flex-col">
        <div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
          <div class="px-4 mx-auto">
            <ul>
              <li href="/" class="text-xl inline font-medium text-yellow-600 cursor-pointer hover:underline">All</li>
              <li v-for="(category, index) in categories" :key="index" class="inline text-gray-900 px-2 text-xl font-medium cursor-pointer hover:text-yellow-600">{{category.name}}<span class="px-1"><sup>{{category.products.length}}</sup></span></li>
            </ul>
          </div>
        </div>
        <div class="relative flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 cursor-pointer hover:text-yellow-600" viewBox="0 0 20 20" fill="currentColor" @click="open = !open">
            <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
          </svg>
          <span class="text-gray-900 text-xl font-medium hover:text-yellow-600 cursor-pointer inline-block" @click="open = !open">Filter</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 cursor-pointer hover:text-yellow-600" viewBox="0 0 20 20" fill="currentColor" @click="open = !open">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
          <!---dropdown---->
          <div x-data="{ dropdownOpen: true }" class="relative">
<<<<<<< HEAD
              <div :to="{ name: 'Interior' }" @click="dropdownOpen = !dropdownOpen" class="relative z-10 block rounded-md p-2 focus:outline-none"><span>Order by:Default</span>
              </div>     
               <div v-show="dropdownOpen" @click="dropdownOpen = false" class="relative z-10 block focus:outline-none">
                  <div v-show="dropdownOpen" class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-10">
                      <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-yellow-600 hover:text-white">
                          Default
                      </a>

                      <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-yellow-600 hover:text-white">
                          Popularity
                      </a>
                      <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-yellow-600 hover:text-white">
                          Average rating
                      </a>
                      <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-yellow-600 hover:text-white">
                          Newness
                      </a>
                      <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-yellow-600 hover:text-white">
                          Price:Low to High
                      </a>
                      <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-yellow-600 hover:text-white">
                          Price:High to Low
                      </a>
                  </div>
              </div>  
=======
            <div :to="{ name: 'Interior' }" @click="dropdownOpen = !dropdownOpen" class="relative z-10 inline-block  p-2 focus:outline-none  px-2 text-xl font-medium hover:text-yellow-600 cursor-pointer"><span>Order by:Default</span>
            </div>     
            <div v-show="dropdownOpen" @click="dropdownOpen = false" class="fixed inset-0 h-full w-full z-10">
              <div v-show="dropdownOpen" class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-yellow-600 hover:text-white">
                    Default
                </a>
                <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-yellow-600 hover:text-white">
                    Popularity
                </a>
                <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-yellow-600 hover:text-white">
                    Average rating
                </a>
                <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-yellow-600 hover:text-white">
                    Newness
                </a>
                <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-yellow-600 hover:text-white">
                    Price:Low to High
                </a>
                <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-yellow-600 hover:text-white">
                    Price:High to Low
                </a>
              </div>
            </div>  
          <!-- End dropdown -->
>>>>>>> da1c5536902cefb5981c506cc4c47a0d4edf4a95
          </div>
          <!---End dropdown---->
        </div>
        
      </div>
      <!-- category flex end -->
    </section>
    <!-- filter -->
    <div class="px-16 py-4">
      <div v-if="open" class="container px-25 py-10 inline-block border-2 border-gray-200 absoulate w-full mt-5 bg-gray-100 border-t mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col  flex-grow md:pr-10 mb-2 md:text-left text-center">
        <div class="lg:w-1/6 md:w-1/2 w-full flex-shrink-0 md:mx-0 md:mt-0 mt-10 pl-2">
            <h2 class="text-xl font-medium text-black ml-3 tracking-widest mb-3">PRICE</h2>
              <div class="px-0 pt-4 pb-2">
                  <span class="block rounded-full cursor-pointer text-gray-800 hover:text-black px-2 text-xl font-medium mr-2 mb-4">All</span>
                  <span class="block rounded-full cursor-pointer text-gray-800 hover:text-black text-gray-900 px-2 text-lg font-medium mr-2 mb-4">£0.00 - £20.00</span>
                  <span class="block rounded-full cursor-pointer text-gray-800 hover:text-black text-gray-900 px-2 text-lg font-medium mr-2 mb-4">£20.00 - £40.00</span>
                  <span class="block rounded-full cursor-pointer text-gray-800 hover:text-black text-gray-900 px-2 text-lg font-medium mr-2 mb-4">£40.00 - £60.00</span>
              </div>
        </div>
        <div class="lg:w-1/6 md:w-1/2 w-full px-2">
            <h2 class="text-xl font-medium text-black tracking-widest ml-3 mb-3">COLOR</h2>
            <nav class="list-none px-0 pt-4 pb-2">
                <li class="p-1">
                  <a class=" px-2 text-lg m mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Black<span class="px-2">(2)</span></a>
                </li>
                <li class="p-1">
                  <a class=" px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Blue<span class="px-2">(2)</span></a>
                </li>
                <li class="p-1">
                  <a class="px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Green<span class="px-2">(2)</span></a>
                </li>
            </nav>
        </div>
         <div class="lg:w-1/6 md:w-1/2 w-full px-2">
          <h2 class="text-xl font-medium text-black tracking-widest ml-1 mb-3">SIZE</h2>
            <nav class="list-none mb-1 pt-4">
                <li class="p-1">
                  <a class="px-1 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Large<span class="px-2">(2)</span></a>
                </li>
                <li class="p-1">
                  <a class="px-1 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Medium<span class="px-2">(2)</span></a>
                </li>
                <li class="p-1">
                  <a class="px-1 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Small<span class="px-2">(2)</span></a>
                </li>
            </nav>
        </div>
        <div class="lg:w-2/6 md:w-1/2 w-full px-2">
          <h2 class="text-xl font-medium text-black ml-3 tracking-widest mb-3">BRANDS</h2>
            <nav class="list-none mb-5 pt-4">
                <li class="p-1">
                  <a class="block px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Banshu Hamono<span class="px-2">(2)</span></a>
                </li>
                <li class="p-1">
                  <a class="px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Bower<span class="px-2">(2)</span></a>
                </li>
                <li class="p-1">
                  <a class="px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Braun<span class="px-2">(2)</span></a>
                </li>
                <li class="p-1">
                  <a class="px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Elevenplus<span class="px-2">(2)</span></a>
                </li>
                <li class="p-1">
                  <a class="px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Field<span class="px-2">(2)</span></a>
                </li>
                <li class="p-1">
                  <a class="px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Henry Wilson<span class="px-2">(2)</span></a>
                </li>
            </nav>
        </div>
        <div class="lg:w-2/6 md:w-1/2 w-full px-2">
            <h2 class="text-xl font-medium text-black ml-0 tracking-widest mb-1">SORT BY</h2>
            <nav class="list-none mb-5">
                <li class="p-1">
                    <a class="text-black block px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Default</a>
                </li>
                <li class="p-1">
                    <a class="block px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Popularity</a>
                </li>
                <li class="p-1">
                    <a class="block px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Average rating</a>
                </li>
                <li class="p-1">
                    <a class="block px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Newness</a>
                </li>
                <li class="p-1">
                    <a class="block px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Price: Low to High</a>
                </li>
                <li class="p-1">
                    <a class="block px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Price: High to Low</a>
                </li>
            </nav>
        </div>
      </div>
    </div>
  </div>
  <!-- end filter--> 
</template>

<script>
export default {
   data() {
    return {
      open: false,
      dropdownOpen: false,
      categories: []
    }
  },
    async fetch() {
    this.categories = await fetch(
      // 'http://localhost:8000/category'
      'https://shopia-backend.herokuapp.com/api/v1/all-categories'
    ).then(res => res.json()).catch(err => console.log(err))
  }
}
</script>

<style>

</style>