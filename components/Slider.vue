<template>
  <div class="h-96 bg-gray-200 flex relative">
    <transition name="slide" mode="out-in">
      <div v-for="i in [currentIndex]" :key="i" id="slider" class="absolute flex flex-col md:flex-row inset-0 w-auto h-auto transform translate-x-0">
        <img :src="'/placeholders/' + currentImg.image" class="object-contain m-0 md:w-full lg:w-full h-full md:h-auto" />
        <div class="ml-8 mb-6 md:mx-16 lg:mx-32 flex flex-col justify-center">
          <p class="font-bold text-2xl md:text-4xl">{{currentImg.name}}</p>
          <a class="text-xl md:text-2xl hover:underline" :href="'/categories/' + currentImg.category_id">{{currentImg.category_name}}</a>
        </div>
      </div>
    </transition>
    <ol class="z-20 absolute bottom-0 left-1/2 transform -translate-x-1/2">
      <li class="inline-block mr-3" v-for="(slider, index) in sliders" :key="index">
        <label @click="handleSliderChange(index)" :class="slider.active ? 'text-blue-600' : ''" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
      </li>
    </ol>
    <div @click="prevSlide()" :class="currentIndex === 0 ? 'hidden' : 'block'" class="slider-arrow absolute left-0 top-1/2 ml-4 text-4xl cursor-pointer flex items-center justify-center text-black hover:text-gray-800">&#x276E;</div>
    <div @click="nextSlide()" :class="currentIndex === (sliders.length - 1) ? 'hidden' : 'block'" class="slider-arrow absolute right-0 top-1/2 mr-4 text-4xl cursor-pointer flex items-center justify-center text-black hover:text-gray-800">&#x276F;</div>
  </div>
</template>
<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Slider extends Vue{

  @Prop({ required: true }) readonly sliders!: object[]
  timer: unknown = null
  currentIndex: number = 0
  currentImg: object = {
    id: 1,
    active: true,
    category_id: "3",
    category_name: "Furniture",
    product_id: "6",
    name: "Gray Classic Sofa",
    image: "slider_1.jpg",
    alt: "Description of slider image"
  }

  mounted() {
    // this.startSlide();
  }

  startSlide(): void {
    this.timer = setInterval(this.nextSlide, 8000);
  }
  nextSlide(): void {
    this.currentIndex += 1;
    this.currentImg = this.sliders[Math.abs(this.currentIndex) % this.sliders.length];
    this.handleSliderChange(Math.abs(this.currentIndex) % this.sliders.length)
  }
  prevSlide(): void {
    this.currentIndex -= 1;
    this.currentImg = this.sliders[Math.abs(this.currentIndex) % this.sliders.length];
    this.handleSliderChange(Math.abs(this.currentIndex) % this.sliders.length)
  }
  handleIndexChange(index: number){
    this.currentIndex = index;
    this.currentImg = this.sliders[this.currentIndex];
  }
  handleSliderChange(index: number): void {
    this.handleIndexChange(index);
    this.sliders.forEach((slider: any) => {
      if (slider.active === true){
        slider.active = !slider.active
      } else if ((slider.id - 1) === index) {
        slider.active = !slider.active
      }
    })
  }
}
</script>

<style scoped>

@keyframes slide-enter {
  0% { opacity: 0; transform: scale(80%); }
  100% { opacity: 1; transform: scale(100%); }
}

@keyframes slide-leave {
  0% { opacity: 1; transform: scale(100%); }
  100% { opacity: 0; transform: scale(80%); }
}

.slide-enter-active {
  animation: slide-enter .4s;
}
.slide-leave-active {
  animation: slide-leave .4s;
}

</style>