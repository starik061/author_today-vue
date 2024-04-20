<template>
    <svg class="cross-icon" :class="{ 'is-hover': props.isHover }" focusable="false" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1px" fill="none" fill-rule="evenodd" stroke-linecap="square">
            <g transform="translate(1.000000, 1.000000)">
                <path d="M0,11 L22,11"></path>
                <path d="M11,0 L11,22"></path>
            </g>
        </g>
    </svg></template>

<script setup lang="ts">
// @ts-nocheck
import { defineProps } from 'vue';


const props = defineProps({
    isHover: Boolean,
});
</script>

<style lang="scss" scoped>
svg {
    width: 24px;
    height: 24px;
}

.cross-icon>g>g {

    stroke: rgb(255, 111, 22);
}

.is-hover>g>g {
    stroke: rgb(255, 255, 255);
}
</style>