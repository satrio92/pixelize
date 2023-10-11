<template>
	<div class="w-full flex gap-5 px-6">
		<div class="w-[calc(100%-620px)] flex flex-col gap-3">
			<img :src="'/assets/posts/' + featuredPost[0].title.replace(/[\s:;*?<>!]+/g, '-').toLowerCase() + '/img/header.jpg'" :alt="featuredPost[0].title" class="h-[380px] w-full bg-white object-cover rounded-lg">
			<p class="text-[13px] text-white/60 mt-2">{{ featuredPost[0].postDate }}</p>
			<p class="text-[24px] text-white font-semibold mr-3">{{ featuredPost[0].title }}</p>
			<p class="text-[16px] text-white/80 font-light mr-3">Belajar UX Writing dari mengamati copy atau tulisan pada judul landing page dari website perusahaan teknologi lalu mencoba menerapkan pada design yang sedang dibuat.</p>
		</div>
		<div class="flex flex-col gap-4">
			<div class="w-[600px] h-full flex gap-[18px] items-center">
				<img :src="'/assets/posts/' + featuredPost[1].title.replace(/[\s:;*?<>!]+/g, '-').toLowerCase() + '/img/header.jpg'" :alt="featuredPost[1].title" class="h-full w-[250px] bg-white object-cover rounded-md">
				<div class="w-[calc(100%-268px)] flex flex-col gap-2">
					<p class="text-[11px] text-white/60">{{ featuredPost[1].postDate }}</p>
					<p class="text-[18px] text-white font-medium">{{ featuredPost[1].title }}</p>
					<p class="text-xs text-white/80 font-light">Belajar UX Writing dari mengamati copy atau tulisan pada judul landing page dari website perusahaan teknologi lalu mencoba menerapkan pada design yang sedang dibuat.</p>
				</div>
			</div>
			<div class="w-[600px] h-full flex gap-[18px] items-center">
				<img :src="'/assets/posts/' + featuredPost[2].title.replace(/[\s:;*?<>!]+/g, '-').toLowerCase() + '/img/header.jpg'" :alt="featuredPost[2].title" class="h-full w-[250px] bg-white object-cover rounded-md">
				<div class="w-[calc(100%-268px)] flex flex-col gap-2">
					<p class="text-[11px] text-white/60">{{ featuredPost[2].postDate }}</p>
					<p class="text-[18px] text-white font-medium">{{ featuredPost[2].title }}</p>
					<p class="text-xs text-white/80 font-light">Belajar UX Writing dari mengamati copy atau tulisan pada judul landing page dari website perusahaan teknologi lalu mencoba menerapkan pada design yang sedang dibuat.</p>
				</div>
			</div>
			<div class="w-[600px] h-full flex gap-[18px] items-center">
				<img :src="'/assets/posts/' + featuredPost[3].title.replace(/[\s:;*?<>!]+/g, '-').toLowerCase() + '/img/header.jpg'" :alt="featuredPost[3].title" class="h-full w-[250px] bg-white object-cover rounded-md">
				<div class="w-[calc(100%-268px)] flex flex-col gap-2">
					<p class="text-[11px] text-white/60">{{ featuredPost[3].postDate }}</p>
					<p class="text-[18px] text-white font-medium">{{ featuredPost[3].title }}</p>
					<p class="text-xs text-white/80 font-light">Belajar UX Writing dari mengamati copy atau tulisan pada judul landing page dari website perusahaan teknologi lalu mencoba menerapkan pada design yang sedang dibuat.</p>
				</div>
			</div>
		</div>
	</div>
	<!-- <div id="featured-post" class="w-full py-8">
		<div class="w-full xl:w-[1100px] h-[220px] xl:h-[500px] overflow-hidden rounded-xl xl:rounded-[20px] relative group bg-pink-400">
			<div class="h-full flex transition-all duration-500 ease-in" :style="{ marginLeft: `-${currentPost * 100}%`, width: `${featuredPost.length * 100}%`}">
				<div class="w-full h-full" v-for="item in featuredPost" :key="item.id">
					<img :src="'/assets/posts/' + item.title.replace(/[\s:;*?<>]+/g, '-').toLowerCase() + '/img/header.jpg'" :alt="item.title" class="w-full h-full object-cover">
				</div>
			</div>
			<div class="w-full h-full pb-0 group-hover:pb-16 flex items-center justify-between gap-4 px-2 xl:px-8 absolute top-0 left-0 transition-all duration-300 ease-in z-20">
				<button @click="PostSlider('left')" class="w-7 xl:w-12 h-7 xl:h-12 rounded-full flex justify-center items-center border-2 border-white bg-white/20">
					<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" class="w-4 xl:w-[26px] h-4 xl:h-[26px]">
						<path d="M8.22138 13L17.0795 21.8565L17.0795 21.8565C17.3165 22.0935 17.4496 22.4149 17.4496 22.75C17.4496 23.0851 17.3165 23.4065 17.0795 23.6434C16.8425 23.8804 16.5212 24.0135 16.186 24.0135C15.8509 24.0135 15.5296 23.8804 15.2926 23.6434L5.543 13.8938L8.22138 13ZM8.22138 13L17.0791 4.14384C17.0791 4.14378 17.0792 4.14373 17.0793 4.14368C17.1968 4.02643 17.29 3.88717 17.3536 3.73386C17.4172 3.58048 17.45 3.41605 17.45 3.24999C17.45 3.08393 17.4172 2.9195 17.3536 2.76611C17.2899 2.61273 17.1967 2.47341 17.0791 2.35614L16.7613 2.67474L17.0799 2.35694C16.9626 2.23937 16.8233 2.14609 16.6699 2.08244C16.5165 2.0188 16.3521 1.98604 16.186 1.98604C16.02 1.98604 15.8556 2.0188 15.7022 2.08244C15.5489 2.14604 15.4097 2.23922 15.2925 2.35667C15.2924 2.35676 15.2923 2.35685 15.2922 2.35694L5.543 12.1061L8.22138 13ZM5.2685 12.5161C5.33208 12.3629 5.42522 12.2237 5.5426 12.1065V13.8934C5.42522 13.7762 5.33208 13.6371 5.2685 13.4839C5.20486 13.3305 5.1721 13.166 5.1721 13C5.1721 12.8339 5.20486 12.6695 5.2685 12.5161Z" fill="white" stroke="white" stroke-width="0.9"/>
					</svg>
				</button>
				<button @click="PostSlider('right')" class="w-7 xl:w-12 h-7 xl:h-12 rounded-full flex justify-center items-center border-2 border-white bg-white/20">
					<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" class="w-4 xl:w-[26px] h-4 xl:h-[26px]">
						<path d="M17.7786 13L8.92053 21.8565L8.9205 21.8565C8.68355 22.0935 8.55043 22.4149 8.55043 22.75C8.55043 23.0851 8.68355 23.4065 8.9205 23.6434C9.15746 23.8804 9.47885 24.0135 9.81395 24.0135C10.1491 24.0135 10.4704 23.8804 10.7074 23.6434L20.457 13.8938L17.7786 13ZM17.7786 13L8.92091 4.14384C8.92085 4.14378 8.9208 4.14373 8.92074 4.14368C8.80325 4.02643 8.71002 3.88717 8.64641 3.73386C8.58276 3.58048 8.55 3.41605 8.55 3.24999C8.55 3.08393 8.58276 2.9195 8.64641 2.76611C8.71005 2.61273 8.80333 2.47341 8.92091 2.35614L9.2387 2.67474L8.9201 2.35694C9.03738 2.23937 9.1767 2.14609 9.33008 2.08244C9.48346 2.0188 9.64789 1.98604 9.81395 1.98604C9.98001 1.98604 10.1444 2.0188 10.2978 2.08244C10.4511 2.14604 10.5903 2.23922 10.7075 2.35667C10.7076 2.35676 10.7077 2.35685 10.7078 2.35694L20.457 12.1061L17.7786 13ZM20.7315 12.5161C20.6679 12.3629 20.5748 12.2237 20.4574 12.1065V13.8934C20.5748 13.7762 20.6679 13.6371 20.7315 13.4839C20.7951 13.3305 20.8279 13.166 20.8279 13C20.8279 12.8339 20.7951 12.6695 20.7315 12.5161Z" fill="white" stroke="white" stroke-width="0.9"/>
					</svg>
				</button>
			</div>
			<div class=" w-full h-[200px] xl:h-[350px] absolute -bottom-[200px] xl:-bottom-[350px] group-hover:bottom-0 left-0 bg-gradient-to-t from-black to-black/0 transition-all duration-300 ease-in"></div>
			<div class="w-full py-3 xl:py-6 absolute bottom-0 left-0 px-3 xl:px-0 flex flex-col items-center gap-1 xl:gap-2 z-20 transition-all duration-300 ease-in">
				<h4 class="w-full xl:w-[735px] text-[14px] leading-1 xl:leading-normal xl:text-[28px] text-white text-center font-semibold xl:font-bold">{{ featuredPost[currentPost].title }}</h4>
				<div class="flex items-center gap-3 xl:gap-6 text-[9px] xl:text-[12px] text-white ">
					<p>{{ featuredPost[currentPost].postDate }}</p>
					<div class="flex items-center gap-1 xl:gap-2">
						<img :src="'/assets/img/author/' + featuredPost[currentPost].author.name.replace(/[\s:;*?<>]+/g, '-').toLowerCase() + '.png'" :alt="featuredPost[currentPost].author.name" class="w-4 xl:w-6 h-4 xl:h-6 rounded-full bg-white">
						<p>{{ featuredPost[currentPost].author.name }}</p>
					</div>
				</div>
				<router-link :to="'/post/' + featuredPost[currentPost].title.replace(/[\s:;*?<>]+/g, '-').toLowerCase()" class="w-[75px] xl:w-[240px] h-[26px] xl:h-14 bg-dropsunrise rounded-[5px] xl:rounded-[10px] mt-2 justify-center items-center text-[9px] xl:text-lg text-black font-semibold hidden group-hover:flex">Read More</router-link>
			</div>
		</div>
	</div> -->
</template>

<script>
export default {
    name: 'FeaturedPost',
    components: {},
		props: ['postData'],
		data() {
			return {
				currentPost: 0
			}
		},
		methods: {
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
			}
		},
		computed: {
			featuredPost() {
				return this.postData.filter(object => object.featured === true);
			}
		},
		mounted() {
			// console.log(this.postData)
		}
}
</script>