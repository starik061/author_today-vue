<template>
    <li class="question-data-list-item">
        <button class="question-btn" :class="{ 'is-opened': props.isAnswerOpened }" type="button"
            @mouseenter="handleQuestionHover()" @mouseleave="handleQuestionHover" @click="handleQuestionBtnClick"><span
                class="question">
                <slot name="question"></slot>
            </span>
            <div class="close-question-icon-wrapper">
                <CloseQuestionIcon :is-hover="isQuestionHovered" />
            </div>
        </button>
        <div class="question-answer"
            :class="{ 'faq': props.questionType === 'faq', 'org': props.questionType === 'org' }">
            <slot name="answer"></slot>
        </div>
    </li>
</template>

<script setup>
import CloseQuestionIcon from "@/components/icons/CloseQuestionIcon.vue"

import { ref } from 'vue';

const props = defineProps({
    isAnswerOpened: {
        type: Boolean,
        default: false
    },
    questionType: {
        type: String,
        required: true
    }
});

//- В этой части кода задается состояние и логика изменения стилей иконки при ховере на вопрос.
const isQuestionHovered = ref(false);

const handleQuestionHover = () => {
    isQuestionHovered.value = !isQuestionHovered.value
}
//-----------------------------------------------------------------

//- В этой части кода эмитируем событие клика на кнопку вопроса для дальнейшего открытия ответа.
const emit = defineEmits(['openAnswer'])

const handleQuestionBtnClick = () => {
    emit("openAnswer", props.isAnswerOpened)
}
</script>
