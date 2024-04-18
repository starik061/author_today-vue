<template>
    <section class="main-banner">
        <div class="main-container">
            <div class="main-banner__content-wrapper ">
                <h1 class="main-banner__header">Служба поддержки Author.Today</h1>
                <p class="main-banner__text">Помогаем авторам и читателям решать вопросы, связанные с сайтом;
                    справляться с
                    разными
                    трудностями от проблем
                    с публикацией до исправления технических ошибок.</p>
                <p class="main-banner__text">В самых запущенных случаях для борьбы с троллями, ботами, спамерами и
                    прочими
                    нарушителями на волю вырывается
                    Иннокентий.<br />Бойтесь Иннокентия!</p>

                <div class="main-banner__link-wrapper"><a class="main-banner__link" href="">Написать нам</a><a
                        class="main-banner__link secondary" href="">Чаво</a>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>

</script>

<style lang="scss" scoped>
.main-banner {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-image: url(/public/main-banner.jpg);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;

    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--bg-color-black);
        opacity: 0.4;
    }
}

.main-banner__content-wrapper {
    position: relative;
    z-index: 2;
    width: 660px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    & .main-banner__text:first-of-type {
        margin-bottom: 30px;
    }

    & .main-banner__text:last-of-type {
        margin-bottom: 70px;
    }

    .main-banner__header {
        padding-bottom: 20px;
        font-size: 38px;
        font-weight: 600;
        line-height: 34px;
        color: var(--text-color-first);
    }
}

.main-banner__text {
    font-size: 18px;
    font-weight: 300;
    line-height: 28px;
    color: var(--text-color-second);

}

.main-banner__link-wrapper {
    display: flex;
    justify-content: flex-start;
    gap: 20px;
}

.main-banner__link {
    display: flex;

    align-items: center;
    height: 60px;
    padding: 0 60px;
    font-size: 16px;
    font-weight: 700;
    text-wrap: nowrap;
    color: var(--text-color-first);
    border: 2px solid var(--decor-color-first);

    &.secondary {
        border-color: var(--decor-color-second);
    }
}
</style>