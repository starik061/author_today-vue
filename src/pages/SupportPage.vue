<template>
  <!-- ----------------- -->
  <header :style="{ backgroundColor: isOpaque ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.5)' }">
    <div class="main-container">
      <nav>
        <a href="https://author.today/"><img class="logo" src="../../public/author_today-logo.png"
            alt="Author Today logo" /></a>
        <ul class="nav-list">
          <li class="nav-list_item"><a class="nav-link" href="#faq">ЧаВо</a></li>
          <li class="nav-list_item"><a class="nav-link" href="#specialists">Специалисты</a></li>
          <li class="nav-list_item"><a class="nav-link" href="#write-us">Написать нам</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <!-- ----------------- -->
  <section class="main-banner">
    <div class="main-container">
      <div class="main-banner__content-wrapper ">
        <h1 class="main-banner__header">Служба поддержки Author.Today</h1>
        <p class="main-banner__text">Помогаем авторам и читателям решать вопросы, связанные с сайтом;
          справляться с
          разными
          трудностями от проблем
          с публикацией до исправления технических ошибок.</p>
        <p class="main-banner__text">В самых запущенных случаях для борьбы с троллями, ботами, спамерами и
          прочими
          нарушителями на волю вырывается
          Иннокентий.<br />Бойтесь Иннокентия!</p>

        <div class="main-banner__link-wrapper"><a class="main-banner__link" href="#write-us">Написать нам</a><a
            class="main-banner__link secondary" href="#faq">ЧаВо</a>
        </div>
      </div>
    </div>
  </section>
  <!-- ----------------- -->
  <section class="about-us-section">
    <div class="main-container">
      <h2 class="support-page-section-header about-us-section-header">О нас</h2>
      <p class="paragraf">На Автор Тудей существует несколько основных направлений поддержки
        пользователей:
      </p>
      <ul class="list">
        <li class="list-item">Служба поддержки;</li>
        <li class="list-item">Модерация;</li>
        <li class="list-item">Коммерческий отдел;</li>
        <li class="list-item">Отдел сотрудничества и организации мероприятий;</li>
        <li class="list-item">Технический отдел;</li>
        <li class="list-item">Рекламный отдел.</li>
      </ul>
      <div class="support-description">
        <p class="support-description--item">Служба поддержки — один из трёх отделов, контактирующий с
          пользователями.
          На АТ есть множество
          способов
          обратиться к нам напрямую, на почту или в чат. Каждый день мы отвечаем на сотни вопросов, помогаем
          разобраться с интерфейсом, разрешить недопонимания, подсказываем нюансы работы площадки,
          восстанавливаем
          доступы к аккаунтам и ловим «сбежавшие» библиотеки... Однако, наши возможности не безграничны.
        </p>
        <div class="support-description--item">
          <p>В структуре Автор Тудей не просто так создано столько направлений.
            Служба поддержки просто
            физически
            не может закрыть их все. Надеемся, эта страница поможет вам лучше понять нашу работу и ускорит
            решение любых возникших вопросов, связанных с Автор Тудей.</p>
          <p>Ниже вы найдёте много полезной информации, включая список наших сотрудников по направлениям, в
            которых они работают, а также ЧаВо.</p>
        </div>
      </div>
      <b class="about-us-appeal"><span>Главное, о чем мы просим помнить — не важно, к кому именно вы обращаетесь на
          сайте,
          —
          мы
          живые.</span></b>
    </div>
  </section>
  <!-- ----------------- -->
  <section class="what-that-mean-section">
    <div class="main-container">
      <h2 class="support-page-section-header what-that-mean-section-header">Что это значит?</h2>
      <p class="paragraf">Что нас не надо оскорблять, нам не надо хамить. Пожалуйста, оставьте негатив за рамками
        чата: какой бы
        справедливой (по вашему мнению) ни была бы ваша ярость, конструктивный разговор возможен лишь в вежливой
        спокойной обстановке. Мы работаем, чтобы сделать АТ уютным, удобным ресурсом. И для вас. И для нас.</p>
    </div>
  </section>
  <!-- ----------------- -->
  <section class="commercial-author-section">
    <div class="main-container commercial-author-content-wrapper">
      <div class="content-element img-wrapper"> <img src="/public/commercial_author-section-img.png"
          alt="decorative image">
      </div>
      <div class="content-element">
        <h2 class="support-page-section-header commercial-author-section-header">Коммерческий автор?</h2>
        <p class="other-department-text">Возможно, твой вопрос предназначен другому отделу</p>
        <p class="commercial-author-text-content with-margin">Авторы часто не обращают внимания на различия в работе
          разных
          отделов Автор
          Тудей. Вопрос задается в
          первое
          попавшееся окно по принципу «лишь бы спросить». Из-за этого нам часто приходится перенаправлять
          пользователей к другим специалистам, что может существенно замедлить рассмотрение вопроса (у каждого
          отдела
          свой поток и своя очередь заявок).</p>
        <p class="commercial-author-text-content">Если ваш вопрос связан с продажами произведения, эксклюзивом или
          коммерческим
          статусом, пожалуйста,
          посмотрите информацию <a href="#specialists"> <strong>ниже</strong></a> прежде, чем задать его нам.
        </p>
      </div>
    </div>
  </section>
  <div class="decor-section-bottom-triangle decor-section-bottom-triangle "></div>
  <!-- ----------------- -->
  <section class="communication-guide-section">
    <div class="main-container">
      <h2 class="support-page-section-header communication-guide-section-header">Как общаться со службой
        поддержки?<br />
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
              мат и переход на личности. Не надо так. <strong class="black-bold-text">Мы тоже люди.</strong></p>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <div class="decor-section-bottom-triangle--grey"></div>
  <!-- ----------------- -->
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
    <div class="form-container">
      <SupportRequestForm />
    </div>
  </section>
  <!-- ----------------- -->
  <section class="no-wait-section">
    <div class="main-container">
      <div class="no-wait-section-content-wrapper">
        <b class="no-wait-appeal">Не хотите ждать ответа на почту или предпочитаете обращаться напрямую к
          специалисту?</b>
        <ol class="no-wait-instruction-list">
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
  <!-- ----------------- -->
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
        <li class="specialist-list-item"
          v-for="(supportSpecialistInfo, supportSpecialistInfoIdx) of supportSpecialistsData"
          :key="supportSpecialistInfo + supportSpecialistInfoIdx">
          <a class="specialist-list-item-link" :href="supportSpecialistInfo.link" target="_blank"
            rel="noopener noreferrer">
            <h3 class="specialist-name">{{ supportSpecialistInfo.name }}</h3>
            <p class="specialist-job-title">{{ supportSpecialistInfo.role }}</p>
            <ul>
              <li>{{ supportSpecialistInfo.working_hours }}</li>
              <li>{{ supportSpecialistInfo.working_shedule }}</li>
              <li v-if="supportSpecialistInfo.about_info">См. информацию «О себе»</li>
              <p class="write-to-private">Написать ЛС</p>
            </ul>
          </a>
        </li>
      </ul>
    </div>
  </section>
  <!-- ----------------- -->
  <section class="faq-section">
    <div class="main-container faq-section-text-wrapper">
      <ul>
        <QuestionWithAnswer v-for="(orgQuestion, orgQuestionIdx) in orgQuestionsData"
          :key="orgQuestion + orgQuestionIdx" :isAnswerOpened="orgQuestionsState[orgQuestionIdx]"
          @openAnswer="handleOpenAnswer($event, orgQuestionIdx, 'org')" questionType="org">
          <template v-slot:question>
            {{ orgQuestion.question }}
          </template>
          <template v-slot:answer>
            <div v-html="orgQuestion.answerHTML"></div>
          </template>
        </QuestionWithAnswer>
      </ul>

      <div class="faq-image-container"><img src="/public/faq-section-image.jpg" width="500px" height="500px"
          alt="декоративное изображение раздела FAQ"></div>
    </div>

    <div class="main-container section-immitation" id="faq">
      <h2 class="support-page-section-header faq-section-section-header">Часто задаваемые вопросы</h2>
      <p class="center-text">Ниже собран список вопросов, с которыми мы встречаемся чаще всего. Это общие вопросы,
        не требующие индивидуального<br /> рассмотрения проблемы и плотного общения с сотрудником службы поддержки,
        проверки
        вашего профиля и других моментов.<br />
        <strong class="important">Пожалуйста, загляните в этот список прежде, чем написать нам. Возможно, ваш вопрос уже
          решен.</strong>
      </p>
    </div>

    <div class="main-container faq-section-text-wrapper">
      <ul>
        <QuestionWithAnswer v-for="(faqQuestion, faqQuestionIdx) in faqQuestionsData"
          :key="faqQuestion + faqQuestionIdx" :isAnswerOpened="faqQuestionsState[faqQuestionIdx]"
          @openAnswer="handleOpenAnswer($event, faqQuestionIdx, 'faq')" questionType="faq">
          <template v-slot:question>
            {{ faqQuestion.question }}
          </template>
          <template v-slot:answer>
            <div v-html="faqQuestion.answerHTML"></div>
          </template>
        </QuestionWithAnswer>
      </ul>
    </div>
  </section>
  <!-- ----------------- -->
  <footer>
    <div class="main-container">
      <p class="footer-text">Служба поддержки работает для вас.<br />
        Мы растём каждый день, учимся решать самые сложные вопросы, чтобы сделать Author Today уютным и удобным
        сайтом самиздата. Эта страничка тоже будет расширяться и пополняться.</p>
      <p class="footer-text">Спасибо, что помогаете нам становиться лучше :)</p>
    </div>
  </footer>
  <!-- ----------------- -->
  <ScrollToTopButton v-if="!isOpaque" @click="scrollToTop" />
</template>

<script setup>
import ScrollToTopButton from '@/components/ScrollToTopButton.vue'
import QuestionWithAnswer from '@/components/QuestionWithAnswer.vue'
import SupportRequestForm from '@/components/SupportRequestForm.vue'

import faqQuestionsData from "@/data/faqQuestionsData.json"
import orgQuestionsData from "@/data/orgQuestionsData.json"
import supportSpecialistsData from "@/data/supportSpecialistsData.json"

import { ref, reactive, onMounted, onUnmounted } from 'vue';

//- В этой части кода мы определяем будет ли цвет фона хэдэра иметь прозрачность или нет. 
const isOpaque = ref(true);
const aboutUsSection = ref(null);

const handleScroll = () => {
  if (aboutUsSection.value) {
    const headerBottom = document.querySelector('header').getBoundingClientRect().bottom;
    const aboutUsTop = aboutUsSection.value.getBoundingClientRect().top;

    // Обновляем значение, если нижняя точка header ниже или равна верхней точке секции "About Us"
    isOpaque.value = headerBottom <= aboutUsTop;
  }
};

onMounted(() => {
  aboutUsSection.value = document.querySelector('.about-us-section');
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
//-----------------------------------------------------------------

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

//- В этой части кода задается состояние и логика открытия ответа при клике на вопрос.
const orgQuestionsState = reactive([]); // эта переменная нужна для изменения цвета иконки крестика при ховере на кнопку вопроса (в разделе организационных вопросов).
orgQuestionsState.length = orgQuestionsData.length;
orgQuestionsState.fill(false);

const faqQuestionsState = reactive([]); // эта переменная нужна для изменения цвета иконки крестика при ховере на кнопку вопроса (в разделе часто задаваемых вопросов).
faqQuestionsState.length = orgQuestionsData.length;
faqQuestionsState.fill(false);

function toggleHeight(index, type) {
  const element = document.querySelectorAll(`.question-answer.${type}`)[index];
  if (element.style.height != 0 && element.style.height != "0px") {
    element.style.height = 0;
  } else {
    element.style.height = element.scrollHeight + 'px';
    // Обнуляем высоту всех ответов
    const answersArray = document.querySelectorAll(`.question-answer.${type}`);
    answersArray.forEach((el) => { if (el !== element) { el.style.height = 0 } });
  }
}

function handleOpenAnswer(isPreviouslyOpened, index, type) {
  toggleHeight(index, type);

  if (type == "org") {
    orgQuestionsState.fill(false);
    if (!isPreviouslyOpened) { orgQuestionsState[index] = true; }
  }
  if (type == "faq") {
    faqQuestionsState.fill(false);
    if (!isPreviouslyOpened) { faqQuestionsState[index] = true; }
  }
}
</script>

<style>
/* Header styles */
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: var(--bg-color-black);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.logo {
  display: block;
  width: 180px;
  height: auto;
}

.nav-list {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 30px;
  flex-wrap: wrap;
}

.nav-link {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-color-first);
}

/* Main banner styles */
.main-banner {
  position: relative;
  height: 100vh;
  background-image: url(/public/main-banner.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bg-color-black);
    opacity: 0.4;
  }
}

.main-banner__content-wrapper {
  position: relative;
  z-index: 2;
  width: 660px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  & .main-banner__text:first-of-type {
    margin-bottom: 28px;
  }

  & .main-banner__text:last-of-type {
    margin-bottom: 85px;
  }

  .main-banner__header {
    margin-bottom: 20px;
    font-size: 38px;
    font-weight: 600;
    line-height: 34px;
    letter-spacing: 1px;
    color: var(--text-color-first);
  }
}

.main-banner__text {
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
  color: var(--text-color-second);
}

.main-banner__link-wrapper {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
}

.main-banner__link {
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 62px;
  font-size: 16px;
  font-weight: 700;
  text-wrap: nowrap;
  color: var(--text-color-first);
  border: 2px solid var(--decor-color-first);

  &.secondary {
    border-color: var(--decor-color-second);
  }
}

/* About us section styles */
.about-us-section {
  padding: 120px 0 30px;
}

.about-us-section-header {
  margin-bottom: 42px;
}

.paragraf {
  margin: 0 0 35px;
}

.list {
  margin-bottom: 120px;
}

.list-item {
  position: relative;
  list-style: none;
  padding-left: 20px;
  line-height: 33px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 7px;
    height: 7px;
    background-color: black;
    border-radius: 50%;
  }
}

.support-description {
  display: flex;
  gap: 40px;
  flex-wrap: nowrap;
  margin-bottom: 88px;
}

.support-description--item {
  flex-basis: calc(50% - 20px);
  display: flex;
  flex-direction: column;
  justify-content: space-between
}

.about-us-appeal {
  display: inline-block;
  width: 100%;
  font-weight: 700;
  text-align: center;
  color: rgb(255, 111, 22);

  & span {
    display: inline-block;
    width: 50%;
  }
}

/* 'What that mean' section styles */
.what-that-mean-section {
  padding: 122px 0 60px;
}

.what-that-mean-section-header {
  margin-bottom: 42px;
}

.paragraf {
  width: 83%;
  line-height: 1.8;
}

/* 'Commercial author' section styles */
.commercial-author-section {
  padding-top: 98px;
}

.commercial-author-content-wrapper {
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: flex-start;
}

.content-element {
  flex-basis: calc(50% - 20px);
  flex-shrink: 0;
  flex-grow: 0;
}

.img-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.commercial-author-section-header {
  margin-bottom: 35px;
}

.other-department-text {
  margin-bottom: 34px;
  font-size: 22px;
  line-height: 32px;
  color: rgb(163, 163, 163);
}

.commercial-author-text-content {
  line-height: 28px;

  &.with-margin {
    margin-bottom: 30px;
  }

  & a {
    color: var(--decor-color-first);
    border-bottom: 1px solid var(--decor-color-first);
  }
}

.decor-section-bottom-triangle {
  position: relative;
  width: 100%;
  height: 8vw;
  background-color: var(--bg-color-grey);

  &::after {
    content: "";
    position: absolute;
    top: -1px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(255, 255, 255);
    clip-path: polygon(50% 100%, 0 0, 100% 0);
  }
}

/* 'Communication guide' section styles */
.communication-guide-section {
  padding-top: 135px;
  background-color: var(--bg-color-grey);
}

.communication-guide-section-header {
  margin-bottom: 90px;
  text-align: center;
}

.communication-rules-list {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding-bottom: 80px;
}

.communication-rules-list-item {
  flex-basis: calc(50% - 20px);
  display: flex;
  gap: 30px;
  padding: 27px 30px 40px;
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
  margin-bottom: 14px;
  font-size: 22px;
  font-weight: 600;
  color: var(--decor-color-first);
}

.black-bold-text {
  color: var(--bg-color-black);
}

.decor-section-bottom-triangle--grey {
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

/* 'Write to us' section styles */
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
  margin-bottom: 110px;
}

.form-container {
  width: 760px;
  margin: 0 auto;
}

/* 'No wait instruction' section styles */
.no-wait-section {
  padding: 90px 0;
}

.no-wait-section-content-wrapper {
  max-width: 880px;
  margin: 0 auto;
  padding: 60px;
  background-color: var(--bg-color-no-wait-section);
}

.no-wait-appeal {
  display: inline-block;
  margin-bottom: 35px;
  font-size: 22px;
  font-weight: 600;
  line-height: 26px;
}

.no-wait-instruction-list {
  margin-left: 20px;
  margin-bottom: 10px;
}

.paragraf-with-important {
  margin-bottom: 25px;
}

.important {
  color: var(--decor-color-first);
}

/* 'Support specialists' section styles */
.support-specialists-section {
  padding: 135px 0 60px;
}

.instruction-text {
  margin-bottom: 90px;
  line-height: 27px;
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

/* 'FAQ' section styles */
.faq-section {
  padding: 90px 0;
}

.faq-section-text-wrapper {
  width: 760px;
  padding: 0;
}

.faq-section-section-header {
  margin-bottom: 10px;
  text-align: center;
}

.question-data-list {
  width: 100%;
}

.faq-image-container {
  width: 100%;
  padding: 165px 0 75px;
  text-align: center;

  & img {
    display: inline-block;
  }
}

.section-immitation {
  padding: 60px 0;
}

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
      height: auto;
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
  height: 0;
  margin-bottom: 0;
  overflow: hidden;
  transition: height var(--transition), margin var(--transition);
}

.question-answer-header {
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: var(--decor-color-first);
}

.question-reasons-list-item {
  margin-left: 2px;
}

.lifehack-list-item {
  &:not(:last-child) {
    margin-bottom: 30px;
  }
}

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

/* Footer styles */
footer {
  padding: 60px 0;
  text-align: center;
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
  color: var(--text-color-first);
  background-color: var(--bg-color-footer);
}

.footer-text:first-child {
  margin-bottom: 25px;
}
</style>
