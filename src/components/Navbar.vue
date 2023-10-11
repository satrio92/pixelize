<template>
	<div id="navbar" class="w-full xl:w-[1100px] pt-6 pb-8 flex justify-center items-center border-b border-b-white/80">
		<!-- <div class="w-[120px] h-[40px] bg-white"></div> -->
		<div class="flex gap-3 items-center text-lg tracking-[.2em] text-white font-semibold ">
			<router-link to="/" ><img src="/assets/img/logo.svg" alt="Logo Pixelize" class="h-[45px]"></router-link>
			<router-link to="/">Pixelize</router-link>
		</div>
		<!-- <ul class="hidden sm:flex gap-4 items-center text-lg text-white font-medium">
			<router-link to="/" class="pr-10 py-2 rounded-r-md rounded-bl-md" active-class="pl-10 font-semibold text-[#050915] bg-dropsunrise" exact>Home</router-link> 
			<router-link to="/about" class="px-10 py-2 rounded-r-md rounded-bl-md" active-class="font-semibold text-[#050915] bg-dropsunrise" exact>About</router-link> 
			<router-link to="/contact" class="pl-10 py-2 rounded-r-md rounded-bl-md" active-class="pr-10 font-semibold text-[#050915] bg-dropsunrise" exact>Contact</router-link> 
		</ul>
		<div class="sm:hidden w-[36px] h-[36px] rounded-md bg-dropsunrise flex justify-center items-center text-lg cursor-pointer" @click="showMenu = true">
			<i class="bi bi-list"></i>
		</div>
		<div class="xl:hidden w-full h-screen bg-white absolute top-0 z-40 transition-all duration-500 ease-in flex items-center justify-center" :class="[showMenu ? 'left-0' : '-left-[100%]']">
			<div class="flex flex-col">
				<router-link to="/" class="py-4 px-8 text-xl font-semibold text-center border-black" active-class="bg-dropsunrise border-2 border-black rounded-md" exact @click="showMenu = false">Home</router-link>
				<router-link to="/about" class="py-4 px-8 text-xl font-semibold text-center border-black" active-class="bg-dropsunrise border-2 border-black rounded-md" exact @click="showMenu = false">About</router-link>
				<router-link to="/contact" class="py-4 px-8 text-xl font-semibold text-center border-black" active-class="bg-dropsunrise border-2 border-black rounded-md" exact @click="showMenu = false">Contact</router-link>
			</div>
			<i class="bi bi-x absolute text-5xl top-5 right-5 cursor-pointer" @click="showMenu = false"></i>
		</div> -->
	</div>
</template>

<script>
export default {
	name: 'Navbar',
	components: {},
	data() {
		return {
			showMenu: false
		}
	}
}
</script>