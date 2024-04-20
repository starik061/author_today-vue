<template>
    <section class="faq-section">
        <div class="main-container text-wrapper">
            <ul>
                <li class="question-data-list-item">
                    <button class="question-btn" :class="{ 'is-opened': orgQuestionsState[0] }" type="button"
                        @mouseenter="handleQuestionHover(0)" @mouseleave="handleQuestionHover(0)"
                        @click="openQuestionDescription(0)"><span class="question">Лайфхак
                            для
                            коммерческого
                            автора!</span>
                        <div class="close-question-icon-wrapper">
                            <CloseQuestionIcon :is-hover="hoverQuestionsState[0]" />
                        </div>

                    </button>
                    <div class="question-answer">
                        <ul>
                            <li class="lifehack-list-item">
                                <h3 class="question-answer-header">Лайфхак №1</h3>
                                <p class="paragraf-with-margin">Служба поддержки не решает вопросы, связанные с
                                    коммерческим статусом.</p>
                                <p>Если ваш вопрос связан с:</p>
                                <ul class="question-reasons-list">
                                    <li class="question-reasons-list-item">Получением эксклюзива;</li>
                                    <li class="question-reasons-list-item">Открытием коммерческого статуса;</li>
                                    <li class="question-reasons-list-item">Выводом средств;</li>
                                    <li class="question-reasons-list-item">Заморозкой/разморозкой продаж;</li>
                                    <li class="question-reasons-list-item">Необходимостью стартовать продажи, если
                                        функционал для вас ограничен за
                                        многочисленные
                                        нарушения сроков договора;</li>
                                    <li class="question-reasons-list-item">Изменением реквизитов;</li>
                                    <li class="question-reasons-list-item">Другими моментами, напрямую связанными с
                                        продажами книг либо документацией...
                                    </li>
                                </ul>
                                <p><strong class="important">Пожалуйста, связывайтесь с коммерческим отделом
                                        напрямую!</strong> Увы, мы не
                                    сможем вам
                                    помочь, а
                                    время решения вопроса сильно затянется (сначала очередь обращений у нас, потом
                                    очередь
                                    обращений у ком.отдела, а там и рабочий день подойдёт к концу).</p>
                            </li>
                            <li class="lifehack-list-item">
                                <h3 class="question-answer-header">Лайфхак №2</h3>
                                <p class="paragraf-with-margin">Марина и Мария — это разные имена и разные люди. Совсем.
                                    Честное слово :)
                                </p>
                                <p><strong class="important">Марина</strong> (Марина Д., руководитель по вопросам
                                    совместных
                                    мероприятий, продвижения и
                                    сотрудничества) не занималась и не занимается вопросами коммерческого
                                    отдела.<br />
                                    С руководителем коммерческого отдела <strong class="important">Марией</strong>
                                    больше нельзя связаться напрямую
                                    на
                                    сайте.
                                    За время работы АТ функционал коммерческого отдела был существенно расширен,
                                    и
                                    сейчас многие функции автоматизированы. Однако, если вам необходимо
                                    обратиться с
                                    каким-то вопросом напрямую в ЛС, пожалуйста, пишите <a class="link-to-elena"
                                        href="https://author.today/u/authortoday_ks" target="_blank"
                                        rel="noopener noreferrer">
                                        <strong>Елене</strong></a> (СБ и ВС выходные
                                    дни).
                                </p>
                            </li>
                            <li class="lifehack-list-item">
                                <h3 class="question-answer-header">Лайфхак №3</h3>
                                <p>С вопросами о:</p>
                                <ul class="question-reasons-list">
                                    <li class="question-reasons-list-item">Добавлении промокодов для генерации;</li>
                                    <li class="question-reasons-list-item">Подключении Яндекс Метрики;</li>
                                    <li class="question-reasons-list-item">Покупке книг и дублях оплаты;</li>
                                    <li class="question-reasons-list-item">Прочих технических моментах, связанных
                                        исключительно с функционалом сайта...
                                    </li>
                                </ul>
                                <p>...вы можете обратиться к нам, в раздел технических вопросов. Мы будем рады помочь.
                                </p>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="question-data-list-item">
                    <button class="question-btn" :class="{ 'is-opened': orgQuestionsState[1] }" type="button"
                        @mouseenter="handleQuestionHover(1)" @mouseleave="handleQuestionHover(1)"
                        @click="openQuestionDescription(1)"><span class="question">Технические вопросы (техническая
                            поддержка)</span>
                        <div class="close-question-icon-wrapper">
                            <CloseQuestionIcon :is-hover="hoverQuestionsState[1]" />
                        </div>

                    </button>
                    <div class="question-answer">
                        <p>Все вопросы, связанные с функционалом сайта, возможными сбоями и багами.
                            Поехала вёрстка? Не хочет публиковаться книга? Не получается оформить спойлер в блоге?
                            Прошла двойная оплата ? Или, может быть, купленная ранее книга не открывается?</p>
                        <p>Всё это и многое другое — к нам. Вы можете написать нам любым удобным способом: на почту, в
                            чат или ЛС, как будет удобней. Однако, пожалуйста, не дублируйте обращение по разным
                            каналам. Это сильно замедлит его рассмотрение: модераторы вступят в жестокий бой за право
                            взять именно вашу заявку, при том выживший счастливчик будет уже очень уставшим.</p>
                    </div>
                </li>
                <li class="question-data-list-item">
                    <button class="question-btn" :class="{ 'is-opened': orgQuestionsState[2] }" type="button"
                        @mouseenter="handleQuestionHover(2)" @mouseleave="handleQuestionHover(2)"
                        @click="openQuestionDescription(2)"><span class="question">Модерация и разрешение конфликтных
                            ситуаций с
                            пользователями</span>
                        <div class="close-question-icon-wrapper">
                            <CloseQuestionIcon :is-hover="hoverQuestionsState[2]" />
                        </div>

                    </button>
                    <div class="question-answer">
                        <p>Вопросы восстановления публикаций, скрытых за нарушение правил (как блогов, так и книг),
                            модерация всего контента на сайте. Вопросы-уточнения о правилах ресурса. Вопросы,
                            возникающие в ряде конфликтных ситуаций с другими пользователями на сайте. Все эти вопросы
                            относятся к модерации.</p>
                        <p>В первую очередь, если вы видите, что какая-то публикация, комментарий или пользователь
                            (оформление профиля, к примеру), нарушают правила сайта, пожалуйста, используйте кнопку
                            «Пожаловаться». За рассмотрение жалоб отвечают другие сотрудники. Хоть с ними и нельзя
                            связаться напрямую, общий поток в этом разделе движется быстрее, так как сотрудников там
                            больше.</p>
                        <p>Если ваша публикация была скрыта, пишите напрямую сотруднику, указанному в комментарии с
                            причиной скрытия.</p>
                        <p>Если ваш вопрос в чем-то другом, вы всегда можете обратиться в чат или на почту. В вопросах,
                            связанных с модерацией, не стоит злоупотреблять возможностью написать сотрудникам в ЛС. На
                            модераторов приходится самый большой объем нагрузки на сайте. И самое большое количество
                            личных оскорблений. Всегда помните о вежливости.</p>
                    </div>
                </li>
                <li class="question-data-list-item">
                    <button class="question-btn" :class="{ 'is-opened': orgQuestionsState[3] }" type="button"
                        @mouseenter="handleQuestionHover(3)" @mouseleave="handleQuestionHover(3)"
                        @click="openQuestionDescription(3)"><span class="question">Получение роли иллюстратора на
                            АТ</span>
                        <div class="close-question-icon-wrapper">
                            <CloseQuestionIcon :is-hover="hoverQuestionsState[3]" />
                        </div>

                    </button>
                    <div class="question-answer">
                        <p>На Автор Тудей есть возможность публиковать иллюстрации. Однако в общую ленту поднимаются
                            только арты авторов с подтверждённой ролью на сайте.</p>
                        <p>Роль выдается только художникам, работающим с нуля (2Д и 3Д, материалы не имеют значения).
                            Коллажи, нейросеть и прочее в этот раздел не принимаются.</p>
                        <p>По всем связанным вопросам, а так же для получения роли художника, вы можете обратиться к
                            Юми<br />Время работы: 10:00 - 22:00 (мск)<br />График работы 2/2. См. информацию «О себе»
                        </p>
                    </div>
                </li>
                <li class="question-data-list-item">
                    <button class="question-btn" :class="{ 'is-opened': orgQuestionsState[4] }" type="button"
                        @mouseenter="handleQuestionHover(4)" @mouseleave="handleQuestionHover(4)"
                        @click="openQuestionDescription(4)"><span class="question">Организация конкурсов, раздел
                            «Мероприятия»</span>
                        <div class="close-question-icon-wrapper">
                            <CloseQuestionIcon :is-hover="hoverQuestionsState[4]" />
                        </div>

                    </button>
                    <div class="question-answer">
                        <p>Администрация Автор Тудей всегда за любую активность в рамках правил сайта. В блогах, в
                            списке закрепленных разделов, каждый пользователь может видеть раздел «Мероприятия»: список
                            крупных/интересных конкурсов и марафонов, которые получили поддержку АТ.</p>
                        <p>Кроме того, пользовательские конкурсы и связанные с ними блоги можно найти в разделе
                            «Конкурсы, марафоны, игры».</p>
                        <p>Обратите внимание, что даже с поддержкой АТ, пользовательские конкурсы остаются
                            пользовательскими, администрация АТ не вмешивается в их организацию (кроме совсем уж крайних
                            случаев) и не несёт ответственности за модерацию, жюри и призы.</p>
                        <p>Если вы хотите выступить организатором конкурса, пожалуйста, согласуйте его правила с
                            модерацией ресурса. В противном случае, конкурсный блог может быть скрыт. Конкурсы с платным
                            взносом за участие не поддерживаются администрацией и скрываются за нарушение правил.</p>
                        <p>Для добавления конкурса в раздел «Мероприятия» напишите в ЛС Марине Д.</p>
                    </div>
                </li>
            </ul>

        </div>
    </section>

</template>

<script setup>
import CloseQuestionIcon from "@/components/icons/CloseQuestionIcon.vue"

import { reactive } from 'vue';

const hoverQuestionsState = reactive([false, false, false, false, false]); //- эта переменная нужна для изменения цвета иконки крестика при ховере на кнопку вопроса.

const handleQuestionHover = (index) => {
    hoverQuestionsState[index] = !hoverQuestionsState[index]
}



const orgQuestionsState = reactive([false, false, false, false, false])

const openQuestionDescription = (index) => {
    for (let i = 0; i < orgQuestionsState.length; i++) {
        if (i !== index) {
            orgQuestionsState[i] = false;
        }
    }

    orgQuestionsState[index] = !orgQuestionsState[index];
};
</script>

<style lang="scss" scoped>
.text-wrapper {
    width: 760px;
}

.question-data-list {
    width: 100%;
}

.question-data-list-item {
    width: 100%;
    border-top: 1px solid rgb(238, 238, 238);
    border-bottom: 1px solid rgb(238, 238, 238);

}

.question-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 27px 50px 27px 0;
    border: none;
    text-align: left;
    vertical-align: middle;
    cursor: pointer;

    &:hover .close-question-icon-wrapper {
        background-color: var(--decor-color-second);
    }

    &.is-opened {
        & .close-question-icon-wrapper {
            transform: rotate(-45deg);
        }

        &+.question-answer {
            max-height: 1000px;
        }
    }
}

.question {
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
}

.close-question-icon-wrapper {
    position: relative;
    left: 50px;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: transform var(--transition);
}

.question-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height var(--transition);
}

.question-answer-header {
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    color: var(--decor-color-first);
}

.paragraf-with-margin {
    margin-bottom: 30px;
}

.question-reasons-list {
    margin-bottom: 10px;
    list-style-type: disc;
}

.question-reasons-list-item {
    margin-left: 20px;
}

.important {
    color: var(--decor-color-first);
}

.lifehack-list-item {
    margin-bottom: 30px;
}

.link-to-elena {
    color: var(--decor-color-first);
    border-bottom: 1px solid var(--decor-color-first);
}
</style>