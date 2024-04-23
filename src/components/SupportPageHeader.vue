<template>
    <header :style="{ backgroundColor: props.isOpaque ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.5)' }">
        <div class="main-container">
            <nav>
                <a href="https://author.today/"><img class="logo" src="../../public/author_today-logo.png"
                        alt="Author Today logo" /></a>
                <ul class="nav-list">
                    <li class="nav-list_item"><a class="nav-link" href="#faq">ЧаВо</a></li>
                    <li class="nav-list_item"><a class="nav-link" href="#specialists">Специалисты</a></li>
                    <li class="nav-list_item"><a class="nav-link" href="#write-us">Написать нам</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    isOpaque: {
        type: Boolean,
        default: false
    }
});
</script>

<style lang="scss" scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2000;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: var(--bg-color-black);

}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.logo {

    display: block;
    width: 180px;
    height: auto;
}

.nav-list {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    column-gap: 30px;
    flex-wrap: wrap;
}

.nav-link {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-color-first);
}
</style>