<template>
  <div id="post-card" class="w-full xl:w-[370px] flex flex-col gap-6">
    <router-link :to="'/post/' + item.title.replace(/[\s]+/g, '-').replace(/[:;*?<>!]/g, '').toLowerCase()"><img :src="'/assets/posts/' + item.title.replace(/[\s]+/g, '-').replace(/[:;*?<>!]/g, '').toLowerCase() + '/img/header.jpg'" :alt="item.title" class="w-full h-[190px] xl:h-[220px] rounded-[12px] xl:rounded-[8px] object-cover"></router-link>
		<div class="w-full text-white flex flex-col pb-4 pt-2 gap-3">
      <div class="flex gap-[7px] items-center">
			  <p class="text-[11px] xl:text-[12px] text-white/60">{{ item.postDate }}</p>
        <div class="w-[2px] h-[2px] rounded-full bg-white/75"></div>
        <p class="text-[11px] xl:text-[12px] text-white/60">{{ minutes }} min reads</p>
      </div>
			<router-link :to="'/post/' + item.title.replace(/[\s]+/g, '-').replace(/[:;*?<>!]/g, '').toLowerCase()" class="text-[15px] xl:text-[22px] font-semibold tracking-wide">{{ item.title }}</router-link>
			<router-link :to="'/post/' + item.title.replace(/[\s]+/g, '-').replace(/[:;*?<>!]/g, '').toLowerCase()" class="text-[14px] text-white font-extralight tracking-wide">{{ strippedContent.slice(0, 200) }} . . . .</router-link>
    </div>
	</div>
</template>

<script>
export default {
	name: 'PostCard',
	components: {},
  data() {
    return {
      article: "",
      minutes: ""
    }
  },
  methods: {
    calculateReadingTime(content) {
      // Assuming an average reading speed of 200 words per minute
      const wordsPerMinute = 200;
      const wordCount = content.split(/\s+/).length;
      console.log(Math.ceil(wordCount / wordsPerMinute))
      this.minutes = Math.ceil(wordCount / wordsPerMinute);
    }
  },
  computed: {
    strippedContent() {
      let regex = /(<([^>]+)>)/ig;
      return this.article.replace(regex, "");
    }
  },
	props: ['item'],
  mounted() {
    // fetch the article HTML file from your local storage
    fetch('/assets/posts/'+ this.item.title.replace(/[\s]+/g, '-').replace(/[:;*?<>!]/g, '').toLowerCase() +'/article.html')
    .then(response => response.text())
    .then(article => {
      this.article = article, this.calculateReadingTime(article.replace(/(<([^>]+)>)/ig, ""))
    });
  }
}
</script>