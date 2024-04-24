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

<style lang="scss" scoped>
.question-data-list-item {
    width: 100%;
    border-bottom: 1px solid rgb(238, 238, 238);

    &:first-child {
        border-top: 1px solid rgb(238, 238, 238);
    }
}

.question-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 23px 50px 23px 0;
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
            margin-bottom: 38px;
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
    transition: max-height var(--transition), margin var(--transition);
}

.question-answer-header {
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    color: var(--decor-color-first);
}

.question-reasons-list-item {
    margin-left: 20px;
}

.lifehack-list-item {
    &:not(:last-child) {
        margin-bottom: 30px;
    }
}

// ___________________________
.faq-image-container {
    width: 100%;
    padding: 75px 0;
    text-align: center;

    & img {
        display: inline-block;
    }
}

.section-immitation {
    padding: 60px 0;
}

.paragraf-with-margin {
    margin-bottom: 30px;
}

.question-reasons-list {
    margin-bottom: 10px;
    list-style: disc inside;
}

.important {
    color: var(--decor-color-first);
}

.link-decor-color-first {
    color: var(--decor-color-first);
    border-bottom: 1px solid var(--decor-color-first);
}

.ordered-list-with-links {
    list-style: inside;
    list-style-type: decimal;
    color: var(--decor-color-first);

    &.no-decor-color {
        color: black;
    }
}
</style>