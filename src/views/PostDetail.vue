<template>
	<div id="post-detail"  class="w-full px-6 xl:px-12 pb-12 bg-[#050915] font-poppins flex flex-col items-center">
		<header class="w-full xl:w-auto">
			<Navbar />
		</header>
		<div class="w-full flex flex-col xl:flex-row gap-[52px] relative justify-center pt-12">
			<div class="flex flex-col gap-16 xl:mb-16">
				<div class="w-full xl:w-[776px] flex flex-col gap-16 rounded-[16px] xl:rounded-[20px] pb-8 xl:pb-8 px-3 xl:px-8 text-white ">
					<div class="w-full flex flex-col gap-6 items-center">
						<img :src="'/assets/posts/' + thePost[0].title.replace(/[\s:;*?<>!]+/g, '-').toLowerCase() + '/img/header.jpg'" :alt="thePost[0].title" class="w-full h-[200px] xl:h-[440px] bg-white rounded-[10px] object-cover">
						<div class="flex items-center text-sm gap-4">
							<p class="text-xs xl:text-sm text-white/70">{{ thePost[0].postDate }}</p>
							<div class="flex items-center gap-2">
								<img :src="'/assets/img/author/' + thePost[0].author.name.replace(/[\s:;*?<>]+/g, '-').toLowerCase() + '.png'" :alt="thePost[0].author.name" class="w-[21px] xl:w-[24px] h-[21px] xl:h-[24px] rounded-full bg-white">
								<p class="text-xs xl:text-sm text-white/70">{{ thePost[0].author.name }}</p>
							</div>
						</div>
						<h1 class="text-[21px] xl:text-2xl text-center font-semibold px-4">{{ thePost[0].title }}</h1>
					</div>
					<div class="flex flex-col gap-5 px-16 text-[13px] text-justify xl:text-base font-light" v-html="article"></div>
				</div>
				<Author :author="thePost[0].author"/>
			</div>
			<PostWidget :postData="postData" :data="{name: thePost[0].title, category: thePost[0].category }"/>
		</div>
		<Footer />
	</div>
</template>

<script>
import Author from '../components/Author.vue';
import Category from '../components/Category.vue';
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue'
import PostWidget from '../components/PostWidget.vue';
import postData from '../posts'

export default {
	name: 'PostDetail',
	components: {
		Navbar,
		Category,
		PostWidget,
		Author,
		Footer
	},
	data() {
		return {
			postData: postData,
			article: ""
		}
	},
	methods: {},
	computed: {
		thePost() {
			return this.postData.filter(object => object.title.replace(/[\s:;*?<>]+/g, '-').toLowerCase() === this.$route.params.post);
		}
	},
	  mounted() {
		// fetch the article HTML file from your local storage
		fetch('/assets/posts/'+ this.$route.params.post +'/article.html')
		.then(response => response.text())
		.then(article => {
			this.article = article, console.log("haloo")
		});
	}
}
</script>