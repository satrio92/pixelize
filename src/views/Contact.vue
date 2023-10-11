<template>
    <div id="contact" class="w-full h-screen px-12 pb-12 bg-[#050915] font-poppins flex flex-col justify-between items-center">
        <Navbar />
        <div>
            <h1 class="text-3xl text-white font-bold">Contact Page</h1>
            <h1 class="text-white font-medium text-center mt-3">is under progress</h1>
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';

export default {
    name: 'Contact',
    components: { 
        Navbar, 
        Footer 
    }
}
</script>