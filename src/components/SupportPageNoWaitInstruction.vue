<template>
    <section class="no-wait-section">
        <div class="main-container">
            <div class="content-wrapper">
                <b class="appeal">Не хотите ждать ответа на почту или предпочитаете обращаться напрямую к
                    специалисту?</b>
                <ol class="instruction-list">
                    <li>Прямо на сайте доступен чат: кнопка для связи с нами находится внизу главного меню в мобильной
                        версии
                        сайта и в личном кабинете для ПК-версии. Время работы чата совпадает со временем работы
                        сотрудников.
                    </li>
                    <li>Нужному сотруднику можно написать напрямую в ЛС на сайте. Ниже находится список со ссылками и
                        графиком
                        работы.</li>
                    <li>Не дублируйте обращения! Не нужно писать сразу везде. Это не решит ваш вопрос быстрее:
                        сотрудники
                        лишь
                        потратят время на дополнительное согласование своих действий и выбор счастливчика, который
                        ответит
                        на
                        ваш вопрос.</li>
                </ol>
                <p class="paragraf-with-important"><b class="important">Важно:</b> к сожалению, нам недоступна
                    величайшая техника клонирования Узумаки
                    Наруто, потому все
                    обращения разбираются сотрудниками в зависимости от текущей загруженности.</p>
                <p>Пожалуйста, наберитесь терпения. Если вы написали в рабочее время, скорее всего, вы получите ответ в
                    течение
                    дня. Если вы написали нам ночью (по мск), придётся немного подождать, пока мы проснёмся и
                    позавтракаем
                    :)
                    Сытый выспавшийся сотрудник работает гораздо лучше, чем уставший и злой.</p>
            </div>
        </div>
    </section>

</template>

<script setup>

</script>

<style lang="scss" scoped>
.no-wait-section {
    padding: 90px 0;

}

.content-wrapper {
    max-width: 880px;
    margin: 0 auto;
    padding: 60px;
    background-color: var(--bg-color-grey);
}

.appeal {
    display: inline-block;
    margin-bottom: 35px;
    font-size: 22px;
    font-weight: 600;
    line-height: 26px;
}

.instruction-list {
    margin-left: 10px;
    margin-bottom: 10px;
}

.paragraf-with-important {
    margin-bottom: 25px;
}

.important {
    color: var(--decor-color-first);
}
</style>