<template>
    <section class="communication-guide-section">
        <div class="main-container">
            <h2 class="support-page-section-header section-header">Как общаться со службой поддержки?<br />
                Краткое руководство</h2>
            <ul class="communication-rules-list">
                <li class="communication-rules-list-item">
                    <div class="communication-rules-icon-wrapper">
                        <img src="/public/support-page-communication-guide-1.png" width="110" height="110"
                            alt="communication guide icon">
                    </div>
                    <div>
                        <b class="communication-rule-header">Подробно опишите свой вопрос</b>
                        <p>Техподдержка часто получает «пустые» жалобы, в которых пользователь не дает комментария.
                            Конечно,
                            есть ряд очевидных ситуаций, где они не нужны. Но в большинстве случаев вопрос будет решен
                            быстрее, если вы объясните, в чем именно он заключается.</p>
                    </div>
                </li>
                <li class="communication-rules-list-item">
                    <div class="communication-rules-icon-wrapper">
                        <img src="/public/support-page-communication-guide-2.png" width="110" height="110"
                            alt="communication guide icon">
                    </div>
                    <div>
                        <b class="communication-rule-header">Не забудьте важные детали</b>
                        <p>Мы ежедневно повышаем навыки телепатии наших сотрудников. Однако, до совершенства нам ещё
                            далеко,
                            потому, пожалуйста, всегда указывайте важные детали, особенно те, о которых мы знать просто
                            не
                            можем (личная информация, авторство арта и проч.)</p>
                    </div>
                </li>
                <li class="communication-rules-list-item">
                    <div class="communication-rules-icon-wrapper">
                        <img src="/public/support-page-communication-guide-3.png" width="110" height="110"
                            alt="communication guide icon">
                    </div>
                    <div>
                        <b class="communication-rule-header">Укажите ссылку</b>
                        <p>Если ваш вопрос связан с определенной публикацией (книга, запись в блоге, комментарий) либо с
                            пользователем, пожалуйста, всегда указывайте прямую ссылку. Если ваш вопрос связан с 1 из
                            1000
                            комментариев под блогом, а ссылка ведёт на блог, мы не сможем быстро сориентироваться и
                            разрешить ситуацию. Скорее всего, просто её не поймём.</p>
                    </div>
                </li>
                <li class="communication-rules-list-item">
                    <div class="communication-rules-icon-wrapper">
                        <img src="/public/support-page-communication-guide-4.png" width="110" height="110"
                            alt="communication guide icon">
                    </div>
                    <div>
                        <b class="communication-rule-header">Будьте вежливы!</b>
                        <p>К сожалению, сотрудники технической поддержки ежедневно сталкиваются с неуважительным
                            отношением.
                            Многие пользователи путают нас с отделом психологической помощи, другие просто стремятся
                            сорвать
                            плохое настроение, третьи считают наших сотрудников кем-то вроде домовых эльфов, позволяют
                            себе
                            мат и переход на личности. Не надо так. <strong>Мы тоже люди.</strong></p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    <div class="decor-section-bottom-triangle"></div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.communication-guide-section {
    padding-top: 135px;
    background-color: var(--bg-color-grey);
}

.section-header {
    margin-bottom: 95px;
    text-align: center;
}

.communication-rules-list {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    padding-bottom: 90px;
}

.communication-rules-list-item {
    flex-basis: calc(50% - 20px);
    display: flex;
    gap: 30px;
    padding: 30px 30px 40px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px 0px;
}

.communication-rules-icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    flex-basis: 110px;
    flex-shrink: 0;
    height: 100%;
}

.communication-rules-icon {
    flex-basis: 100px;
    flex-shrink: 0;
    height: 100px;
}

.communication-rule-header {
    display: block;
    margin-bottom: 15px;
    font-size: 22px;
    font-weight: 600;
    color: var(--decor-color-first);
}

.decor-section-bottom-triangle {
    position: relative;
    width: 100%;
    height: 8vw;
    background-color: rgb(255, 255, 255);


    &::after {
        content: "";
        position: absolute;
        top: -1px;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--bg-color-grey);
        clip-path: polygon(50% 100%, 0 0, 100% 0);
    }
}
</style>