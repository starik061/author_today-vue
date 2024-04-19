<template>
    <button class="to-top-btn" type="button">
        <ToTopBtnIcon />
    </button>
</template>

<script setup>
import ToTopBtnIcon from '@/components/icons/ToTopBtnIcon.vue'
</script>

<style lang="scss" scoped>
.to-top-btn {
    position: fixed;
    z-index: 9999;
    right: 30px;
    bottom: 30px;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
}
</style>
