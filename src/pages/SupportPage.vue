<template>
  <div class="about">
    <SupportPageHeader />
  </div>
</template>

<script setup>
import SupportPageHeader from '@/components/SupportPageHeader.vue'
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
