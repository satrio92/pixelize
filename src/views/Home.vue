<template>
	<div id="home" class="w-full px-6 xl:px-12 pb-12 bg-[#050915] font-poppins flex flex-col items-center gap-12 xl:gap-12">
		<header class="w-full xl:w-auto">
			<Navbar />
			<ul class="list-none w-full pt-6 text-gray-400 flex items-center justify-center gap-4 text-sm font-medium">
				<li class="cursor-pointer" :class="[categoryActive === 'All' ? 'bg-white rounded-full px-5 py-2 text-[#050915] text-medium' : '']" @click="categorySelect('All')">All</li>
				<li v-for="category in categories" :key="category.id" class="cursor-pointer" :class="[categoryActive === category ? 'bg-white rounded-full px-5 py-2 text-[#050915] text-medium' : '']"
            @click="categorySelect(category)">{{ category }}</li>
			</ul>
		</header>
		<FeaturedPost :postData="posts" />
		<div class="w-full flex flex-col px-6 xl:flex-row gap-[52px] relative justify-center mt-12">
			<div class="w-full justify-center xl:justify-start xl:w-[776px] flex gap-9 flex-wrap">
				<PostCard :item="item" v-for="item in posts" :key="item.id"/>
			</div>
			<PostWidget :postData="posts" :data="'recent'"/>
		</div>
		<Footer />
	</div>
</template>

<script>
import Category from '../components/Category.vue';
import FeaturedPost from '../components/FeaturedPost.vue';
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';
import PostCard from '../components/PostCard.vue';
import PostWidget from '../components/PostWidget.vue';
import postData from '../posts'
import categories from '../posts/category.js'

export default {
	name: 'Home',
	components: {
    Navbar,
    FeaturedPost,
    PostWidget,
    Category,
    PostCard,
    Footer
},
	data() {
		return {
			posts: postData,
			categories: categories,
      categoryActive: "All"
		}
	},
	methods: {
    categorySelect(category) {
      this.posts = postData;
      this.categoryActive = category
      if (category !== 'All') {
        this.posts = this.posts.filter(post => post.category.includes(this.categoryActive))
      }
      console.log(this.posts)
    },
	},
  computed: {

  },
	mounted() {

	}
}
</script>