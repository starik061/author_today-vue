<template>
    <section class="commercial-author-section">
        <div class="main-container content-wrapper">
            <div class="content-element img-wrapper"> <img src="/public/commercial_author-section-img.png"
                    alt="decorative image">
            </div>
            <div class="content-element">
                <h2 class="support-page-section-header">Коммерческий автор?</h2>
                <p class="other-department-text">Возможно, твой вопрос предназначен другому отделу</p>
                <p class="text-content with-margin">Авторы часто не обращают внимания на различия в работе разных
                    отделов Автор
                    Тудей. Вопрос задается в
                    первое
                    попавшееся окно по принципу «лишь бы спросить». Из-за этого нам часто приходится перенаправлять
                    пользователей к другим специалистам, что может существенно замедлить рассмотрение вопроса (у каждого
                    отдела
                    свой поток и своя очередь заявок).</p>
                <p class="text-content">Если ваш вопрос связан с продажами произведения, эксклюзивом или коммерческим
                    статусом, пожалуйста,
                    посмотрите информацию ниже прежде, чем задать его нам.</p>
            </div>
        </div>
    </section>
    <div class="decor-section-bottom-triangle"></div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.commercial-author-section {
    padding-top: 135px;
}

.content-wrapper {
    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: flex-start;
}

.content-element {
    flex-basis: calc(50% - 20px);
    flex-shrink: 0;
    flex-grow: 0;
}

.img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.other-department-text {
    margin-bottom: 34px;
    font-size: 22px;
    line-height: 32px;
    color: rgb(163, 163, 163);
}

.text-content {
    line-height: 28px;

    &.with-margin {
        margin-bottom: 20px;
    }
}

.decor-section-bottom-triangle {
    position: relative;
    width: 100%;
    height: 8vw;
    background-color: var(--bg-color-grey);


    &::after {
        content: "";
        position: absolute;
        top: -1px;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgb(255, 255, 255);
        clip-path: polygon(50% 100%, 0 0, 100% 0);
    }
}
</style>