<template>
    <section class="write-to-us-section" id="write-us">
        <div class="main-container text-wrapper">
            <h2 class="support-page-section-header section-header">Напишите нам прямо здесь:</h2>
            <p class="support-description-text">Проверяйте тему обращения и указанные ссылки.<br />
                Все обращения рассматриваются в порядке общей очереди. Если<br />требуется ответ, вы получите его в
                течение
                1-2 суток.<br />
                <strong>Внимание! Служба поддержки НЕ решает вопросы коммерческого<br />отдела!</strong>
            </p>
        </div>
        <div class=" form-container">

            <Vueform ref="form$">
                <SelectElement class="hide-select-before" name="support-subject" :native="true" :items="[
                    'Я автор. Техническая проблема',
                    'Я читатель. Техническая проблема',
                    'Нарушение правил сайта',
                    'Проблема оплаты',
                    'Пропал доступ к купленной книге',
                    'Не могу войти в аккаунт',
                    'Мой аккаунт пустой',
                    'Предложение по работе сайта',
                    'Другое'
                ]" label="Тема обращения" default="Нарушение правил сайта" />

                <TextElement name="problem-link" label="Ссылка на проблему, если нужна" input-type="url"
                    placeholder="https://author.today/..." before="Проверьте ссылку. Чем она точнее, тем лучше"
                    :rules="['nullable', 'url',]" :messages="{
                        url: 'Укажите, пожалуйста, корректный URL'
                    }" @input="resetElementValidators('problem-link')" />

                <TextElement name="at-profile-link" label="Ваш профиль на Автор Тудей" input-type="url"
                    placeholder="https://author.today/u/..."
                    before="для обратной связи и уточняющих вопросов, если они понадобятся" :rules="['required', 'url']"
                    :messages="{ 'required': 'Обязательное поле', 'url': 'Укажите, пожалуйста, корректный URL' }"
                    @input="resetElementValidators('at-profile-link')" />

                <TextareaElement name="problem-description" label="Описание проблемы"
                    before="Пожалуйста, как можно подробней опишите ваш вопрос или проблему. Это поможет быстрее её решить"
                    :autogrow="false" :rows="3" rules="required"
                    :messages="{ required: 'Пожалуйста, заполните все обязательные поля' }"
                    @input="resetElementValidators('problem-description')" />

                <MultifileElement name="multifile" label="Скриншот (jpg или png)"
                    before="Прикрепите скриншот, если это необходимо (до 10 файлов, макс. размер 30Мб)."
                    :file="{ rules: 'max:30720' }" accept=".jpg,.png" rules="max:10"
                    @change="validateMultiFileElement('multifile')" />

                <div class="validation-error-container" v-if="hasErrrors">Пожалуйста, заполните все обязательные поля
                </div>

                <ButtonElement class="center-form-elements submit-btn" name="submit-btn" :loading="false"
                    :submits="true" @click="handleClick"
                    description="<p>Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c <a href='https://author.today/pages/confidental' target='_blank' rel='noopener noreferrer'>политикой<br /> конфиденциальности</a></p>">
                    Отправить
                </ButtonElement>
            </Vueform>
        </div>
    </section>

</template>

<script setup>
import { ref } from 'vue';

const form$ = ref(null);
const hasErrrors = ref(false);

const validateMultiFileElement = (elementName) => {
    form$.value.el$(elementName).validate()
}

const resetElementValidators = (element) => {
    form$.value.el$(element).resetValidators()
}

const resetAllValidators = () => {
    form$.value.resetValidators()
}

const handleClick = async () => {
    resetAllValidators();

    await form$.value.validate()

    if (form$.value.hasErrors) {
        hasErrrors.value = true;
    }
}
</script>

<style lang="scss" scoped>
.write-to-us-section {
    padding: 105px 0;
}

.section-header {
    margin-bottom: 32px;
}

.text-wrapper {
    text-align: center;
    line-height: 33px;
}

strong {
    font-weight: 700;
    color: var(--decor-color-first);
}

.support-description-text {
    margin-bottom: 90px;
}

.form-container {
    width: 760px;
    margin: 0 auto;
}

.center-form-elements {
    text-align: center;
}

.validation-error-container {
    grid-column-start: 1;
    grid-column-end: span 12;
    background-color: rgb(249, 93, 81);
    color: var(--text-color-first);
    text-align: center;
    padding: 18px;
    font-size: 20px;
    font-weight: 300;
    line-height: 31px;
}
</style>