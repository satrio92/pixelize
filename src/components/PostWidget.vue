<template>
    <div class="w-full items-center xl:items-start xl:w-[370px] h-[605px] xl:sticky top-6 flex flex-col gap-[25px]">
        <div class="w-full border-l flex flex-col gap-7 pl-6">
            <p class="text-2xl text-white font-semibold">{{ title }}</p>
            <div class="flex flex-col">
                <router-link :to="'/post/' + item.title.replace(/[\s:;*?<>]+/g, '-').toLowerCase()" class="flex gap-3 items-center border-t py-5" v-for="item in myPosts.slice(-4)" :key="item.id">
                    <div class="w-[calc(100%-68px)] flex flex-col gap-1">
                        <p class="text-[11px] text-white/60">{{ item.postDate }}</p>
                        <p class="text-white">{{ item.title }}</p>
                    </div>
                    <img :src="'/assets/posts/' + item.title.replace(/[\s:;*?<>]+/g, '-').toLowerCase() + '/img/header.jpg'" :alt="item.title" class="h-14 w-14 bg-white object-cover">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PostWidget",
    components: {},
    props: ['postData', 'data'],
    data() {
        return {
            title: '',
            myPosts: ''
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
    methods: {},
    mounted() {
        console.log(this.postData[1].title === this.data.name)
        if(this.data == 'recent') {
            this.title = 'Recent Post'
            this.myPosts = this.postData
        } else {
            this.title = 'Related Post'
            this.myPosts = this.filteredItems
        }
    }
}
</script>