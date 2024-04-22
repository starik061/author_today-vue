<template>
    <section class="write-to-us-section">
        <div class="main-container text-wrapper">
            <h2 class="support-page-section-header section-header">Напишите нам прямо здесь:</h2>
            <p class="support-description-text">Проверяйте тему обращения и указанные ссылки.<br />
                Все обращения рассматриваются в порядке общей очереди. Если<br />требуется ответ, вы получите его в
                течение
                1-2 суток.<br />
                <strong>Внимание! Служба поддержки НЕ решает вопросы коммерческого<br />отдела!</strong>
            </p>

            <div class=" form-container">
                <Vueform>
                    <SelectElement name="support-subject" :native="true" :items="[
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
                    <TextElement name="problem-link" label="Ссылка на проблему, если нужна"
                        placeholder="https://author.today/..." before="Проверьте ссылку. Чем она точнее, тем лучше" />
                    <TextElement name="at-profile-link" label="Ваш профиль на Автор Тудей"
                        placeholder="https://author.today/u/..."
                        before="для обратной связи и уточняющих вопросов, если они понадобятся" rules="required"
                        :messages="{ required: 'Обязательное поле' }" />
                    <TextareaElement name="problem-description" label="Описание проблемы"
                        before="Пожалуйста, как можно подробней опишите ваш вопрос или проблему. Это поможет быстрее её решить"
                        autogrow="false" rows="3" rules="required"
                        :messages="{ required: 'Пожалуйста, заполните все обязательные поля' }" />
                    <MultifileElement name="multifile" label="Скриншот (jpg или png)"
                        before="Прикрепите скриншот, если это необходимо (до 10 файлов, макс. размер 30Мб)."
                        :file="{ rules: 'max:30720' }" accept=".jpg,.png" rules="required|max:10" />
                    <ButtonElement name="submit-btn" :loading="false" submits="true"
                        description="<p>Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c <a href='#'>политикой конфиденциальности</a></p>">
                        Отправить
                    </ButtonElement>
                </Vueform>
            </div>
        </div>
    </section>

</template>

<script setup>

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
</style>