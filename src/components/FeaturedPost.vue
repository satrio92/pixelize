<template>
<div class="w-full flex gap-7 justify-center">
  <div class="w-[calc(100%-820px)] flex flex-col gap-3">
    <router-link :to="'/post/' + featuredPost[0].title.replace(/[\s]+/g, '-').replace(/[:;*?<>!]/g, '').toLowerCase()"><img :src="'/assets/posts/' + featuredPost[0].title.replace(/[\s]+/g, '-').replace(/[:;*?<>!]/g, '').toLowerCase() + '/img/header.jpg'" :alt="featuredPost[0].title" class="h-[380px] w-full bg-white object-cover rounded-lg"></router-link>
    <p class="text-[13px] text-white/60 mt-2">{{ featuredPost[0].postDate }}</p>
    <router-link :to="'/post/' + featuredPost[0].title.replace(/[\s]+/g, '-').replace(/[:;*?<>!]/g, '').toLowerCase()"><p class="text-[24px] text-white font-semibold mr-3">{{ featuredPost[0].title }}</p></router-link>
    <router-link :to="'/post/' + featuredPost[0].title.replace(/[\s]+/g, '-').replace(/[:;*?<>!]/g, '').toLowerCase()"><p class="text-[16px] text-white/80 font-light mr-3">{{ featuredPost[0].excerpt }} . . .</p></router-link>
  </div>
  <div class="flex flex-col gap-8">
    <div class="w-[660px] h-full flex gap-[18px] items-center" v-for="item in featuredPost.slice(1,4)" :key="item">
      <router-link :to="'/post/' + item.title.replace(/[\s]+/g, '-').replace(/[:;*?<>!]/g, '').toLowerCase()"><img :src="'/assets/posts/' + item.title.replace(/[\s]+/g, '-').replace(/[:;*?<>!]/g, '').toLowerCase() + '/img/header.jpg'" :alt="featuredPost[1].title" class="h-full w-[280px] bg-white object-cover rounded-md"></router-link>
      <div class="w-[calc(100%-286px)] flex flex-col gap-2">
        <p class="text-[11px] text-white/60">{{ item.postDate }}</p>
        <router-link :to="'/post/' + item.title.replace(/[\s]+/g, '-').replace(/[:;*?<>!]/g, '').toLowerCase()"><p class="text-[18px] text-white font-medium">{{ item.title }}</p></router-link>
        <router-link :to="'/post/' + item.title.replace(/[\s]+/g, '-').replace(/[:;*?<>!]/g, '').toLowerCase()"><p class="text-xs text-white/80 font-light">{{ item.excerpt }} . . .</p></router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import postData from "../posts/index.js";

export default {
    name: 'FeaturedPost',
    components: {},
		props: ['postData'],
		data() {
			return {
				currentPost: 0,
        article: ""
			}
		},
		methods: {
      // postData() {
      //   return postData
      // },
			PostSlider(move) {
				if(move == 'right') {
					if(this.currentPost == this.featuredPost.length-1) {
						this.currentPost = 0
					} else {
						this.currentPost++
					}
				} else {
					if(this.currentPost == 0) {
						this.currentPost = this.featuredPost.length-1
					} else {
						this.currentPost--
					}
				}
			},
		},
		computed: {
			featuredPost() {
				return this.postData.filter(object => object.featured === true);
			},
		},
		mounted() {
      const fetchOperations = this.postData.map(post => {
        return fetch('/assets/posts/' + post.title.replace(/[\s]+/g, '-').replace(/[:;*?<>!]/g, '').toLowerCase() + '/article.html')
            .then(response => response.text())
            .then(article => {
              post.excerpt = article.replace(/(<([^>]+)>)/ig, "").slice(0, 200);
            });
      });

		}
}
</script>