<template>

  <SupportPageHeader :isOpaque="isOpaque" />
  <SupportPageMainBanner />
  <SupportPageAboutUs />
  <SupportPageWhatThatMean />
  <SupportPageCommercialAuthor />
  <SupportPageCommunicationGuide />
  <SupportPageWriteToUs />
  <SupportPageNoWaitInstruction />
  <SupportPageSupportSpecialists />
  <SupportPageFAQ />
  <SupportPageFooter />

  <ScrollToTopButton v-if="!isOpaque" @click="scrollToTop" />


</template>

<script setup>
import SupportPageHeader from '@/components/SupportPageHeader.vue'
import SupportPageMainBanner from '@/components/SupportPageMainBanner.vue'
import SupportPageAboutUs from '@/components/SupportPageAboutUs.vue'
import SupportPageWhatThatMean from '@/components/SupportPageWhatThatMean.vue'
import SupportPageCommercialAuthor from '@/components/SupportPageCommercialAuthor.vue'
import SupportPageCommunicationGuide from '@/components/SupportPageCommunicationGuide.vue'
import SupportPageWriteToUs from '@/components/SupportPageWriteToUs.vue'
import SupportPageNoWaitInstruction from '@/components/SupportPageNoWaitInstruction.vue'
import SupportPageSupportSpecialists from '@/components/SupportPageSupportSpecialists.vue'
import SupportPageFAQ from '@/components/SupportPageFAQ.vue'
import SupportPageFooter from '@/components/SupportPageFooter.vue'

import ScrollToTopButton from '@/components/ScrollToTopButton.vue'

import { ref, onMounted, onUnmounted } from 'vue';

//- В этой части кода мы определяем будет ли цвет фона хэдэра иметь прозрачность или нет. 
const isOpaque = ref(true);
const aboutUsSection = ref(null);

const handleScroll = () => {
  if (aboutUsSection.value) {
    const headerBottom = document.querySelector('header').getBoundingClientRect().bottom;
    const aboutUsTop = aboutUsSection.value.getBoundingClientRect().top;

    // Обновляем значение, если нижняя точка header ниже или равна верхней точке секции "About Us"
    isOpaque.value = headerBottom <= aboutUsTop;
  }
};
onMounted(() => {
  aboutUsSection.value = document.querySelector('.about-us-section');
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
//-----------------------------------------------------------------

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style></style>
