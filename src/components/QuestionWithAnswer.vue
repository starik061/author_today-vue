<template>
    <li class="question-data-list-item">
        <button class="question-btn" :class="{ 'is-opened': faqQuestionsState[faqQuestionIdx] }" type="button"
            @mouseenter="handleFaqQuestionHover(faqQuestionIdx)" @mouseleave="handleFaqQuestionHover(faqQuestionIdx)"
            @click="openFaqQuestionDescription(faqQuestionIdx)"><span class="question">
                <slot name="question"></slot>
            </span>
            <div class="close-question-icon-wrapper">
                <CloseQuestionIcon :is-hover="hoverFaqQuestionsState[faqQuestionIdx]" />
            </div>
        </button>
        <div class="question-answer">
            <slot name="answer"></slot>
        </div>
    </li>
</template>

<script setup>
import CloseQuestionIcon from "@/components/icons/CloseQuestionIcon.vue"

import { reactive } from 'vue';
import faqQuestionsData from "@/data/faqQuestionsData.json"

const faqQuestionsState = reactive([]); //- эта переменная нужна для изменения цвета иконки крестика при ховере на кнопку вопроса (в разделе часто задаваемых вопросов).
faqQuestionsState.length = faqQuestionsData.length;
faqQuestionsState.fill(false);

const hoverFaqQuestionsState = reactive([]); //- эта переменная нужна для изменения состояния раздела ответа на вопрос - скрыт/раскрыт(в разделе часто задаваемых вопросов).
hoverFaqQuestionsState.length = faqQuestionsData.length;
hoverFaqQuestionsState.fill(false);

const handleFaqQuestionHover = (index) => {
    hoverFaqQuestionsState[index] = !hoverFaqQuestionsState[index]
}

const openFaqQuestionDescription = (index) => {
    for (let i = 0; i < faqQuestionsState.length; i++) {
        if (i !== index) {
            faqQuestionsState[i] = false;
        }
    }

    faqQuestionsState[index] = !faqQuestionsState[index];
};
</script>

<style lang="scss" scoped></style>