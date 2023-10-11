<template>
  <div id="footer" class="w-full xl:w-[1100px] pt-8 xl:pt-12 border-t-2 border-white flex flex-col xl:flex-row justify-between items-center gap-6 xl:gap-0">
		<div class="flex gap-3 items-center text-xl xl:text-2xl tracking-[.2em] text-white font-semibold">
			<router-link to="/"><img src="../../public/assets/img/logo.svg" alt="Logo Pixelize" class="h-[44px] xl:h-[65px]"></router-link>
			<router-link to="/">Pixelize</router-link>
		</div>
		<div class="flex flex-col items-center xl:items-end gap-5">
			<div class="border-2 border-white text-white flex rounded-lg overflow-hidden">
				<router-link to="/" class="py-3 px-7 xl:px-12 flex text-sm xl:text-base items-center relative" active-class="font-semibold text-[#050915] bg-dropsunrise" exact>
					<span>Home</span>
					<div v-if="$route.path === '/'" class="border-[3px] border-white h-[14px] w-[14px] rounded-full bg-black absolute -right-[7px]"></div>
				</router-link>
				<router-link to="/about" class="py-3 px-7 xl:px-12 flex text-sm xl:text-base items-center relative" active-class="font-semibold text-[#050915] bg-dropsunrise" exact>
					<span>About</span>
					<div v-if="$route.path === '/about'" class="border-[3px] border-white h-[14px] w-[14px] rounded-full bg-black absolute -right-[7px]"></div>
					<div v-if="$route.path === '/about'" class="border-[3px] border-white h-[14px] w-[14px] rounded-full bg-black absolute -left-[7px]"></div>
				</router-link>
				<router-link to="/contact" class="py-3 px-7 xl:px-12 flex text-sm xl:text-base items-center relative" active-class="font-semibold text-[#050915] bg-dropsunrise" exact>
					<span>Contact</span>
					<div v-if="$route.path === '/contact'" class="border-[3px] border-white h-[14px] w-[14px] rounded-full bg-black absolute -left-[7px]"></div>
				</router-link>
			</div>
			<div class="xl:w-full flex justify-between items-center">
				<div class="hidden xl:flex text-xs text-white">
					<div class="pr-2 border-r-2 border-secondary py-[1px]">2023</div>
					<div class="pl-2 py-[1px]">COPYRIGHT ALL RIGHTS RESERVED</div>
				</div>
				<div class="flex gap-4">
					<a href="https://www.instagram.com/kukuhsatrio_/" target="_blank" class="w-9 xl:w-11 h-9 xl:h-11 border-2 border-white rounded-md xl:rounded-lg flex items-center justify-center xl:text-xl text-white hover:bg-dropsunrise hover:text-black">
						<i class="bi bi-instagram"></i>
					</a>
					<a href="https://www.behance.net/satriodesign" target="_blank" class="w-9 xl:w-11 h-9 xl:h-11 border-2 border-white rounded-md xl:rounded-lg flex items-center justify-center xl:text-xl text-white hover:bg-dropsunrise  hover:text-black">
						<i class="bi bi-behance"></i>
					</a>
					<a href="https://github.com/satrio92" target="_blank" class="w-9 xl:w-11 h-9 xl:h-11 border-2 border-white rounded-md xl:rounded-lg flex items-center justify-center xl:text-xl text-white hover:bg-dropsunrise hover:text-black">
						<i class="bi bi-github"></i>
					</a>
				</div>
			</div>
			<div class="flex xl:hidden text-[9px] text-white">
				<div class="pr-2 border-r-2 border-secondary py-[1px]">2023</div>
				<div class="pl-2 py-[1px]">COPYRIGHT ALL RIGHTS RESERVED</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Footer',
	components: {}
}
</script>