<template>
    <form class="support-request-form" :class="{ 'isLoading': isLoading }" @submit.prevent="sendsupportRequestDataToDB"
        novalidate>
        <div class="form-overlay" v-if="isLoading">
            <PulseLoader color="rgb(4, 145, 206)" size="15px" />
        </div>
        <label class="support-request-form-label">
            <p>Тема обращения</p>
            <div class="select-wrapper">
                <select class="support-request-form-field" name="problemName" v-model="formData.problemName">
                    <option value="Я автор. Техническая проблема">Я автор. Техническая проблема</option>
                    <option value="Я читатель. Техническая проблема">Я читатель. Техническая проблема</option>
                    <option value="Нарушение правил сайта">Нарушение правил сайта</option>
                    <option value="Проблема оплаты">Проблема оплаты</option>
                    <option value="Пропал доступ к купленной книге">Пропал доступ к купленной книге</option>
                    <option value="Не могу войти в аккаунт">Не могу войти в аккаунт</option>
                    <option value="Мой аккаунт пустой">Мой аккаунт пустой</option>
                    <option value="Предложение по работе сайта">Предложение по работе сайта</option>
                    <option value="Другое">Другое</option>
                </select>
            </div>
        </label>

        <label class="support-request-form-label with-description">
            <p>Ссылка на проблему, если
                нужна</p>
            <p class="support-request-form-input-description">Проверьте ссылку. Чем она точнее, тем лучше</p>
            <input class="support-request-form-field with-description"
                :class="{ 'error-border-color': supportRequestFormErrors.problemLinkFormatError }" name="problemLink"
                v-model="formData.problemLink" type="url" placeholder="https://author.today/..."
                @input="resetInputError('problemLinkFormatError')">
        </label>
        <p class="input-error-message" v-if="supportRequestFormErrors.problemLinkFormatError">Укажите, пожалуйста,
            корректный URL</p>

        <label class="support-request-form-label with-description">
            <p>Ваш профиль на Автор Тудей</p>
            <p class="support-request-form-input-description">Для обратной связи и уточняющих вопросов, если они
                понадобятся
            </p>
            <input class="support-request-form-field"
                :class="{ 'error-border-color': supportRequestFormErrors.profileLinkFormatError || supportRequestFormErrors.requiredProfileLinkError }"
                name="profileLink" type="url" placeholder="https://author.today/u/..." v-model="formData.profileLink"
                @input="resetInputError('profileLinkFormatError', 'requiredProfileLinkError')">
        </label>
        <p class="input-error-message" v-if="supportRequestFormErrors.requiredProfileLinkError">
            Пожалуйста, заполните все обязательные поля</p>
        <p class="input-error-message" v-if="supportRequestFormErrors.profileLinkFormatError">
            Укажите, пожалуйста,
            корректный URL</p>

        <label class="support-request-form-label with-description">
            <p>Описание проблемы</p>
            <p class="support-request-form-input-description">Пожалуйста, как можно подробней опишите ваш вопрос или
                проблему. Это поможет быстрее её решить
            </p>
            <textarea class="support-request-form-field"
                :class="{ 'error-border-color': supportRequestFormErrors.requiredDescriptionError }"
                name="problemDescription" v-model="formData.problemDescription"
                @input="resetInputError(undefined, 'requiredDescriptionError')"></textarea>
        </label>
        <p class="input-error-message" v-if="supportRequestFormErrors.requiredDescriptionError">
            Пожалуйста, заполните все обязательные поля</p>

        <div><label class="support-request-form-label with-description file-input-wrapper">
                <p>Скриншот (jpg или png)</p>
                <p class="support-request-form-input-description">Прикрепите скриншот, если это необходимо (до 10
                    файлов,
                    макс. размер 30Мб).</p>
                <div class="support-form-btn input-file-immitator">Загрузить файлы</div>
                <input class="visually-hidden" name="problemImages" type="file" accept=".jpg, .png" multiple
                    @change="validateSupportRequestFiles">
            </label></div>
        <p class="input-error-message" v-if="supportRequestFormErrors.fileSizeError">
            Размер одного или нескольких файлов превышает 30 Мб</p>
        <p class="input-error-message" v-if="supportRequestFormErrors.fileQuantityError">
            Количество загружаемых изображений превышает допустимое число (10 шт.)</p>
        <p class="input-error-message" v-if="supportRequestImages.length > 0">
            Прикреплено: {{ supportRequestImages.length }} изображения</p>

        <div class="form-message" :class="{
            'successfull-sending': formMessage === 'Ваш запрос успешно отправлен'
        }" v-if="isFormMessageshown">{{
            formMessage }}</div>
        <div class="center-text"><button class="support-form-btn" type="submit">Отправить</button>
            <p class="policy-paragraf">Нажимая на кнопку, вы даете согласие на обработку персональных данных и
                соглашаетесь c <a class='link-decor-color-first' href='https://author.today/pages/confidental'
                    target='_blank' rel='noopener noreferrer'>политикой<br />
                    конфиденциальности</a></p>
        </div>
    </form>
</template>

<script setup>
import { ref, reactive } from 'vue';

import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

//- В этой части кода валидируется и обрабатываются данные формы отправки запроса в поддержку.
let isLoading = ref(false);
let isFormMessageshown = ref(false);
let formMessage = ref("");

const supportRequestFormErrors = reactive({
    fileSizeError: false,
    fileQuantityError: false,
    requiredProfileLinkError: false,
    profileLinkFormatError: false,
    problemLinkFormatError: false,
    requiredDescriptionError: false
})

const supportRequestImages = reactive([]);

function resetInputError(formatError, errorOfRequired) {
    if (formatError) {
        supportRequestFormErrors[formatError] = false;
    }
    if (errorOfRequired) {
        supportRequestFormErrors[errorOfRequired] = false;
    }

    isFormMessageshown.value = false;
    formMessage.value = "";
};

function validateUrlField(fieldParams) {
    // Регулярное выражение для проверки URL
    const urlPattern = /^(https?:\/\/(?:www\.|(?!www))[^\s.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})$/;

    if (fieldParams.required) {
        if (!fieldParams.value) {
            supportRequestFormErrors[fieldParams.requiredErrorName] = true;
            supportRequestFormErrors[fieldParams.formatRequiredErrorName] = false;
        } else if (fieldParams.formatRequired) {
            supportRequestFormErrors[fieldParams.formatRequiredErrorName] = false;

            if (!urlPattern.test(fieldParams.value)) {
                supportRequestFormErrors[fieldParams.formatRequiredErrorName] = true;
            }
        }
    } else if (fieldParams.value) {
        if (!urlPattern.test(fieldParams.value)) {
            supportRequestFormErrors[fieldParams.formatRequiredErrorName] = true;
        }
    }
}

function validateProblemDescription(value) {
    supportRequestFormErrors.requiredDescriptionError = false;
    if (!value) {
        supportRequestFormErrors.requiredDescriptionError = true;
    }
}

function validateSupportRequestFiles(event) {
    supportRequestFormErrors.fileQuantityError = false;
    supportRequestFormErrors.fileSizeError = false;

    const files = event.target.files;

    if (files.length > 10) {
        supportRequestFormErrors.fileQuantityError = true;
        return
    }

    for (const file of files) {
        if (file.size > 30 * 1024 * 1024) {
            supportRequestFormErrors.fileSizeError = true;
            return
        }
    }
    supportRequestImages.splice(0);
    supportRequestImages.push(...files);
}

function validateSupportRequestForm(data) {
    validateUrlField({ required: false, formatRequired: true, formatRequiredErrorName: "problemLinkFormatError", value: data.problemLink })// Валидация ссылки на проблему

    validateUrlField({ required: true, requiredErrorName: "requiredProfileLinkError", formatRequired: true, formatRequiredErrorName: "profileLinkFormatError", value: data.profileLink })// Валидация ссылки на профиль

    validateProblemDescription(data.problemDescription) // Валидация поля описания проблемы

    const errorsValuesArray = Object.values(supportRequestFormErrors);
    if (errorsValuesArray.includes(true)) {
        // console.table(supportRequestFormErrors)
        isFormMessageshown.value = true;
        formMessage.value = "Проверьте правильность заполнения полей формы";
        isLoading.value = false;
        throw new Error("Форма не прошла валидацию!")
    }
}
//-----------------------------------------------------------------

//- В этой части кода происходит работа c хранилищем файлов и базой данных Firebase.
import { firestoreDatabase, firebaseImageStorage } from '/firebase';
import { collection, doc, setDoc } from "firebase/firestore";
import { ref as firebaseStorageRef, uploadBytes, getDownloadURL } from "firebase/storage";

const formData = reactive({
    problemName: "Нарушение правил сайта",
    problemLink: "",
    profileLink: "",
    problemDescription: "",
    imageLinks: []
})

async function sendImagesToStorage(images) {
    try {
        const uploadPromises = images.map((image) => {
            const uniqueImageName = `${Date.now()}-${image.name}`;
            const storageRef = firebaseStorageRef(firebaseImageStorage, `supportRequestImages/${uniqueImageName}`);
            return uploadBytes(storageRef, image);
        });

        const uploadResults = await Promise.all(uploadPromises);

        const urlPromises = uploadResults.map((uploadResult) => {
            return getDownloadURL(firebaseStorageRef(firebaseImageStorage, uploadResult.metadata.fullPath));
        });

        const urls = await Promise.all(urlPromises);

        formData.imageLinks.push(...urls);

    } catch (error) {
        isFormMessageshown.value = true;
        formMessage.value = "Ошибка при отправке изображений";
        formData.imageLinks.length = 0;
        isLoading.value = false;
    }
}

async function sendsupportRequestDataToDB() {
    isLoading.value = true;
    isFormMessageshown.value = false;
    formMessage.value = "";
    supportRequestFormErrors.requiredProfileLinkError = false;
    supportRequestFormErrors.profileLinkFormatError = false;
    supportRequestFormErrors.problemLinkFormatError = false;
    supportRequestFormErrors.requiredDescriptionError = false;

    validateSupportRequestForm(formData);

    try {
        if (supportRequestImages && supportRequestImages?.length > 0) {
            await sendImagesToStorage(supportRequestImages);
        }

        // Добавляем новый документ-запрос в поддержку в базу данных
        const supportRequestsRef = doc(collection(firestoreDatabase, "supportRequests"));
        await setDoc(supportRequestsRef, formData);

        // Обнуляем все после успешной отправки
        formData.problemName = "Нарушение правил сайта";
        formData.problemLink = "";
        formData.profileLink = "";
        formData.problemDescription = "";
        formData.imageLinks = [];

        supportRequestImages.length = 0;

        isFormMessageshown.value = true;
        formMessage.value = "Ваш запрос успешно отправлен";

        setTimeout(() => {
            isFormMessageshown.value = false;
            formMessage.value = "";
        }, 3000);

    } catch (error) {
        isFormMessageshown.value = true;
        formMessage.value = "Ошибка при отправке запроса в поддержку";
    }

    isLoading.value = false;
};
</script>

<style lang="scss" scoped>
.support-request-form {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;

    &.isLoading {
        pointer-events: none;
        opacity: 0.5;
    }
}

.form-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 150px;
    pointer-events: none;
}

.support-request-form-label {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: 5px;
    margin-bottom: 25px;
    font-size: 20px;
    font-weight: 300;
    line-height: 31px;

    &.with-description>p {
        margin-bottom: 36px;
    }

    &.file-input-wrapper {
        align-items: flex-start;
    }
}

.select-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;

    &::before {
        content: "";
        width: 20px;
        height: 58px;
        position: absolute;
        right: 1px;
        top: 1px;
        bottom: 0;
        pointer-events: none;
        z-index: 2;
        background-color: rgb(255, 255, 255);
    }

    &::after {
        content: "";
        display: flex;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 6px 5px 0 5px;
        border-color: var(--bg-color-black) transparent transparent transparent;
        position: absolute;
        right: 20px;
        top: 29px;
        bottom: 0;
        pointer-events: none;
        z-index: 3;
    }
}

.support-request-form-input-description {
    position: absolute;
    top: 36px;
    left: 0;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.55;
    color: var(--text-color-placeholder);
    opacity: 0.8;
}

.support-request-form-field {
    display: block;
    height: 60px;
    padding: 0 20px;
    font-size: 16px;
    font-family: "TildaSans", Arial, sans-serif;
    font-weight: 400;
    border: 1px solid rgb(0, 0, 0);
    border-radius: 0;
    outline: none;

    &::placeholder {
        color: var(--text-color-placeholder);
        opacity: 0.55;
    }
}

select.support-request-form-field {
    padding-left: 16px;
}

textarea.support-request-form-field {
    height: 102px;
    padding: 20px 20px 0;
}

.form-message {
    margin: 10px 0 40px 0;
    padding: 15px;
    font-size: 20px;
    font-weight: 300;
    line-height: 31px;
    color: var(--text-color-first);
    text-align: center;
    background-color: var(--form-error-color);

    &.successfull-sending {
        background-color: var(--form-success-color);
    }
}

.input-error-message {
    position: relative;
    top: -20px;
    color: var(--form-error-color);
    font-size: 13px;
}

.error-border-color {
    border-color: var(--form-error-color);
}

.support-form-btn {
    padding: 20px 60px;
    border: none;
    color: var(--text-color-first);
    background-color: var(--decor-color-first);
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
}

.input-file-immitator {
    font-weight: 400;
    line-height: 38px;
    padding: 0 20px;
}

.policy-paragraf {
    margin-top: 30px;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.55;
}
</style>