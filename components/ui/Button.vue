<template>
    <a :href="link"
        class=" inline-block px-6 py-1.5 uppercase text-xl font-bold text-center text-[#8C6C67] hover:text-black hover:bg-[#8C6C67]/10 transition duration-300 svg-hover"
        :class="{'rounded-full border-2 border-solid border-[#4F4F4F] ':border}"
        >
        <slot></slot>
    </a>
</template>

<script setup>
defineProps({
    link: String,
    border: Boolean
})
</script>

<style>
.svg-hover svg,
.svg-hover svg path,
.svg-hover svg circle{
    @apply transition duration-300
}
.svg-hover:hover svg path,
.svg-hover:hover svg circle{
    @apply !fill-black
}
</style>