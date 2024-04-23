<template>
    <section class="support-specialists-section" id="specialists">
        <div class="main-container text-wrapper">
            <h2 class="support-page-section-header">Специалисты<br />
                службы поддержки</h2>
            <p class="instruction-text">Пожалуйста, прежде, чем написать нам, ознакомьтесь с информацией<br />ниже и
                проверьте список вопросов
                <a class="link-to-faq" href="#faq">ЧаВо</a>.<br />
                Возможно, там уже есть нужный вам ответ
            </p>
            <ul class="specialist-list">
                <li class="specialist-list-item">
                    <a class="specialist-list-item-link"
                        href="https://author.today/Account/Login?ReturnUrl=%2Fpm#633210" target="_blank"
                        rel="noopener noreferrer">
                        <h3 class="specialist-name">Ольга</h3>
                        <p class="specialist-job-title">Тех.поддержка и модерация</p>
                        <ul>
                            <li>Время работы: 08:00 - 20:00 (мск)</li>
                            <li>Выходные: ПТ, СБ</li>
                            <li>См. информацию «О себе»</li>
                            <p class="write-to-private">Написать ЛС</p>
                        </ul>
                    </a>
                </li>
                <li class="specialist-list-item">
                    <a class="specialist-list-item-link"
                        href="https://author.today/Account/Login?ReturnUrl=%2Fpm#450598" target="_blank"
                        rel="noopener noreferrer">
                        <h3 class="specialist-name">Юми</h3>
                        <p class="specialist-job-title">Тех.поддержка и модерация</p>
                        <ul>
                            <li>Время работы: 10:00 - 22:00 (мск)</li>
                            <li>График работы 2/2.</li>
                            <li>См. информацию «О себе»</li>
                            <p class="write-to-private">Написать ЛС</p>
                        </ul>
                    </a>
                </li>
                <li class="specialist-list-item">
                    <a class="specialist-list-item-link"
                        href="https://author.today/Account/Login?ReturnUrl=%2Fpm#771836" target="_blank"
                        rel="noopener noreferrer">
                        <h3 class="specialist-name">Иннокентий</h3>
                        <p class="specialist-job-title">Тех.поддержка и модерация</p>
                        <ul>
                            <li>Время работы: 10:00 - 22:00 (мск)</li>
                            <li>График работы 2/2.</li>
                            <li>См. информацию «О себе»</li>
                            <p class="write-to-private">Написать ЛС</p>
                        </ul>
                    </a>
                </li>
                <li class="specialist-list-item">
                    <a class="specialist-list-item-link"
                        href="https://author.today/Account/Login?ReturnUrl=%2Fpm#1470410" target="_blank"
                        rel="noopener noreferrer">
                        <h3 class="specialist-name">Юлия</h3>
                        <p class="specialist-job-title">Тех.поддержка и модерация</p>
                        <ul>
                            <li>Время работы: 08:00 - 16:00 (мск)</li>
                            <li>Выходные: ВС, ПН</li>
                            <li>См. информацию «О себе»</li>
                            <p class="write-to-private">Написать ЛС</p>
                        </ul>
                    </a>
                </li>
                <li class="specialist-list-item">
                    <a class="specialist-list-item-link"
                        href="https://author.today/Account/Login?ReturnUrl=%2Fpm#209324" target="_blank"
                        rel="noopener noreferrer">
                        <h3 class="specialist-name">Марина Д.</h3>
                        <p class="specialist-job-title">Вопросы по рекламе, акциям и настройке Яндекс.Метрики</p>
                        <ul>
                            <li>Время ответа на ЛС с 17-21:00 (мск)</li>
                            <li>Выходные: СБ, ВС</li>
                            <p class="write-to-private">Написать ЛС</p>
                        </ul>
                    </a>
                </li>
                <li class="specialist-list-item">
                    <a class="specialist-list-item-link"
                        href="https://author.today/Account/Login?ReturnUrl=%2Fpm#1828998" target="_blank"
                        rel="noopener noreferrer">
                        <h3 class="specialist-name">Дмитрий Малкин</h3>
                        <p class="specialist-job-title">Вопросы поддержки авторов сайта (творческая акклиматизация на
                            АТ)</p>
                        <ul>
                            <li>Время ответа на ЛС с 10-19:00 (мск)</li>
                            <li>Выходные: СБ, ВС</li>
                            <p class="write-to-private">Написать ЛС</p>
                        </ul>
                    </a>
                </li>
            </ul>
        </div>
    </section>

</template>

<script setup>

</script>

<style lang="scss" scoped>
.support-specialists-section {
    padding: 135px 0 60px;
}

.text-wrapper {
    text-align: center;
    line-height: 27px;
}

.instruction-text {
    margin-bottom: 90px;
}

.link-to-faq {
    font-weight: 700;
    color: var(--decor-color-first);
    border-bottom: 1px solid var(--decor-color-first);
    cursor: pointer;
}

.specialist-list {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
}

.specialist-list-item {
    flex-basis: 360px;
    flex-shrink: 0;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px 0px;
    text-align: left;
    cursor: pointer;
}

.specialist-list-item-link {
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: 29px 30px 40px;
    font-size: 18px;
    font-weight: 300;
    line-height: 28px;
    color: inherit;
}

.specialist-name {
    margin-bottom: 11px;
    font-size: 22px;
    font-weight: 600;
    line-height: 30px;
}

.specialist-job-title {
    font-weight: 700;
}

.write-to-private {
    margin-top: 18px;
    font-size: 16px;
    font-weight: 700;
    line-height: 25px;

    color: var(--decor-color-first);

    &::after {
        content: " →";

    }
}
</style>