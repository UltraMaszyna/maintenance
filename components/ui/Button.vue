<template>
    <a :href="link"
        class=" block px-6 py-1.5 uppercase text-xl font-bold text-center text-[#4F4F4F] hover:text-[#AA2A89] transition duration-300 svg-hover"
        :class="{'rounded-full border border-solid border-[#4F4F4F] hover:border-[#AA2A89]':border}"
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
    @apply !fill-[#AA2A89]
}
</style>