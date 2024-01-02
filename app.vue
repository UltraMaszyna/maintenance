<template>
  <div class="bg-texture min-h-screen flex items-center justify-center relative ">
    <DecorDashesA class="absolute z-10 top-1 md:top-10 left-0 w-64"/>
    <ViewEveselection />
    <DecorDashesB class="absolute z-10 bottom-10 right-0 w-64"/>
  </div>
</template>

<style>

.bg-texture{
  background-image: url('/bg-texture-cloth.png');
}

</style>