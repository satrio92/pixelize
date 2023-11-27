<template>
  <div class="flex flex-col gap-[30px]">
    <h3 class="text-[28px] font-medium text-white/75">Related Post</h3>
    <div class="w-full xl:w-[1100px] mb-[100px] flex">
      <div class="w-full h-full  flex items-center gap-[12px] pr-[16px] border-r-2 border-r-white/75">
        <img :src="'/assets/posts/' + filteredItems[0].title.replace(/[\s]+/g, '-').replace(/[:;*?<>!]/g, '').toLowerCase() + '/img/header.jpg'" :alt="filteredItems[0].title" class="w-[184px] h-[100px] bg-white/75 rounded-[5px]" >
        <div class="flex flex-col text-white/75 w-[calc(100%-202px)] gap-1">
          <p class="text-xs">{{ filteredItems[0].postDate }}</p>
          <h4>{{ filteredItems[0].title }}</h4>
        </div>
      </div>
      <div class="w-full h-full  flex items-center gap-[12px] pl-[16px]">
        <img :src="'/assets/posts/' + filteredItems[1].title.replace(/[\s]+/g, '-').replace(/[:;*?<>!]/g, '').toLowerCase() + '/img/header.jpg'" :alt="filteredItems[0].title" class="w-[184px] h-[100px] bg-white/75 rounded-[5px]" >
        <div class="flex flex-col text-white/75 w-[calc(100%-212px)] gap-1">
          <p class="text-xs">{{ filteredItems[1].postDate }}</p>
          <h4>{{ filteredItems[1].title }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name : "RelatedPost",
    components: {},
    props: ['postData', 'data'],
    data() {
      return {
        relatedPost: ""
      }
    },
    computed: {
      filteredItems() {
        return this.postData
          .filter(item => item.title !== this.data.name)
          .filter(item => item.category.some(cat => this.data.category.includes(cat)))
          .slice(-3)
      }
    },
    mounted() {
      console.log(this.filteredItems[0].title)
      this.relatedPost = this.filteredItems
    }
  }
</script>