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
                    href="https://author.today/u/authortoday_ks" target="_blank" rel="noopener noreferrer">
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
            <p class="paragraf-with-margin">Все вопросы, связанные с функционалом сайта, возможными сбоями и
              багами.<br />
              Поехала вёрстка? Не хочет публиковаться книга? Не получается оформить спойлер в блоге?<br />
              Прошла двойная оплата ? Или, может быть, купленная ранее книга не открывается?</p>
            <p>Всё это и многое другое — к нам. Вы можете написать нам любым удобным способом: на почту, в
              чат или ЛС, как будет удобней. Однако, пожалуйста, <strong>не дублируйте обращение по разным
                каналам</strong>. Это сильно замедлит его рассмотрение: модераторы вступят в жестокий
              бой за право
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
            <p class="paragraf-with-margin">Вопросы восстановления публикаций, скрытых за нарушение правил
              (как блогов, так и книг),
              модерация всего контента на сайте. Вопросы-уточнения о правилах ресурса. Вопросы,
              возникающие в ряде конфликтных ситуаций с другими пользователями на сайте. Все эти вопросы
              относятся к модерации.</p>
            <p class="paragraf-with-margin">В первую очередь, если вы видите, что какая-то публикация,
              комментарий или пользователь
              (оформление профиля, к примеру), нарушают правила сайта, <strong class="important">пожалуйста,
                используйте кнопку
                «Пожаловаться»</strong>. За рассмотрение жалоб отвечают другие сотрудники. Хоть с ними и нельзя
              связаться напрямую, общий поток в этом разделе движется быстрее, так как сотрудников там
              больше.</p>
            <p class="paragraf-with-margin">Если ваша публикация была скрыта, пишите напрямую сотруднику,
              указанному в комментарии с
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
            <p class="paragraf-with-margin">На Автор Тудей есть возможность публиковать иллюстрации. Однако в общую
              ленту поднимаются
              только арты авторов с подтверждённой ролью на сайте.</p>
            <p class="paragraf-with-margin">Роль выдается только художникам, работающим с нуля (2Д и 3Д, материалы не
              имеют значения).
              Коллажи, нейросеть и прочее в этот раздел не принимаются.</p>
            <p>По всем связанным вопросам, а так же для получения роли художника, вы можете обратиться к
              <a class="link-to-elena" href="https://author.today/Account/Login?ReturnUrl=%2Fpm#450598" target="_blank"
                rel="noopener noreferrer">
                <strong>Юми</strong></a><br />Время работы: 10:00 - 22:00 (мск)<br />График работы 2/2. См.
              информацию «О себе»
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
            <p class="paragraf-with-margin">Администрация Автор Тудей всегда за любую активность в рамках правил сайта.
              В блогах, в
              списке закрепленных разделов, каждый пользователь может видеть раздел «Мероприятия»: список
              крупных/интересных конкурсов и марафонов, которые получили поддержку АТ.</p>
            <p class="paragraf-with-margin">Кроме того, пользовательские конкурсы и связанные с ними блоги можно найти в
              разделе
              «<a class="link-to-elena" href="https://author.today/discussions/blogs/contests" target="_blank"
                rel="noopener noreferrer">
                <strong>Конкурсы, марафоны, игры</strong></a>».</p>
            <p class="paragraf-with-margin">Обратите внимание, что даже с поддержкой АТ, пользовательские конкурсы
              остаются
              пользовательскими, администрация АТ не вмешивается в их организацию (кроме совсем уж крайних
              случаев) и не несёт ответственности за модерацию, жюри и призы.</p>
            <p class="paragraf-with-margin">Если вы хотите выступить организатором конкурса, пожалуйста, согласуйте его
              правила с
              модерацией ресурса. В противном случае, конкурсный блог может быть скрыт. Конкурсы с платным
              взносом за участие не поддерживаются администрацией и скрываются за нарушение правил.</p>
            <p>Для добавления конкурса в раздел «Мероприятия» напишите в ЛС <a class="link-to-elena"
                href="https://author.today/Account/Login?ReturnUrl=%2Fpm#209324" target="_blank"
                rel="noopener noreferrer">
                <strong>Марине Д</strong></a>.</p>
          </div>
        </li>
      </ul>

      <div class="faq-image-container"><img src="/public/faq-section-image.jpg" width="500px" height="500px"
          alt="декоративное изображение раздела FAQ"></div>

    </div>

    <div class="main-container section-immitation">
      <h2 class="support-page-section-header section-header">Часто задаваемые вопросы</h2>
      <p class="center-text">Ниже собран список вопросов, с которыми мы встречаемся чаще всего. Это общие вопросы,
        не требующие индивидуального<br /> рассмотрения проблемы и плотного общения с сотрудником службы поддержки,
        проверки
        вашего профиля и других моментов.<br />
        <strong class="important">Пожалуйста, загляните в этот список прежде, чем написать нам. Возможно, ваш вопрос уже
          решен.</strong>
      </p>
    </div>

    <div class="main-container text-wrapper">
      <ul>
        <li class="question-data-list-item" v-for="(faqQuestion, faqQuestionIdx ) in faqQuestionsData"
          :key="faqQuestion + faqQuestionIdx">
          <button class="question-btn" :class="{ 'is-opened': faqQuestionsState[faqQuestionIdx] }" type="button"
            @mouseenter="handleFaqQuestionHover(faqQuestionIdx)" @mouseleave="handleFaqQuestionHover(faqQuestionIdx)"
            @click="openFaqQuestionDescription(faqQuestionIdx)"><span class="question">{{ faqQuestion.question }}</span>
            <div class="close-question-icon-wrapper">
              <CloseQuestionIcon :is-hover="hoverFaqQuestionsState[faqQuestionIdx]" />
            </div>
          </button>
          <div class="question-answer">
            <div v-html="faqQuestion.answerHTML"></div>
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
const orgQuestionsState = reactive([false, false, false, false, false])//- эта переменная нужна для изменения состояния раздела ответа на вопрос - скрыт/раскрыт.

const openQuestionDescription = (index) => {
  for (let i = 0; i < orgQuestionsState.length; i++) {
    if (i !== index) {
      orgQuestionsState[i] = false;
    }
  }

  orgQuestionsState[index] = !orgQuestionsState[index];
};
//--------------------------------------------------------

const faqQuestionsData = [
  { question: "Мне не понравилась книга, верните деньги", answerHTML: "К сожалению, возврат средств в данном случае невозможен: ни Автор, ни сотрудники Автор Тудей не могут гарантировать, что вам понравится купленная книга. Несоответствие личному вкусу читателя не является нарушением правил площадки." },
  {
    question: "Мне написали негативный отзыв. Удалите и забаньте читателя", answerHTML: "Не существует книги, которая нравится всем без исключения. При открытой публикации текста, пожалуйста, будьте готовы в том числе к негативным отзывам и критике. Если читательский отзыв не содержит перехода на личности и других нарушений правил, у модерации нет причин принимать какие-либо меры. Помните, что автор всегда может отключить или ограничить возможность оставить комментарий к публикации.Кроме того, у каждого автора есть возможность самостоятельно модерировать комментарии, однако, не стоит ею злоупотреблять."
  },
  {
    question: "Как оплатить книгу из-за рубежа?", answerHTML: "Всю актуальную информацию о возможности покупки для иностранных граждан вы можете узнать в справке АТ: Покупка книг для иностранных граждан Запуск новой платежной системы Следите за новостями проекта.Когда появится новая информация, мы обновим эту статью и опубликуем соответствующий блог."
  },
  {
    question: "Как мне начать публикацию своих произведений?", answerHTML: "Для публикации своих книг на АТ достаточно просто зарегистрироваться на сайте. Чтобы начать публикацию, нужно нажать на кнопку «Добавить» в правом верхнем углу ПК-версии сайта и выбрать нужный пункт.Обратите внимание, что мобильная версия сайта и мобильное приложение ориентированы в первую очередь на читателя.Мы не рекомендуем публиковать произведения с мобильных устройств(но это можно сделать через раздел «Произведения» в личном кабинете). Читайте подробнее в справочной информации: Публикация на Author.Today"
  },
  { question: "Я опубликовал произведение у вас. Могу ли опубликовать его на другом сайте?", answerHTML: "АТ никак не ограничивает авторов в публикации произведений на других ресурсах. Автор может выкладывать свои тексты на любых площадках по своему желанию и усмотрению, в том числе на коммерческой основе. Исключение - договор на эксклюзив." },
  {
    question: "Что такое Эксклюзив и как его получить?", answerHTML: "Эксклюзив на АТ — это способ поддержать автора некоторыми бонусами в обмен на уникальный контент, который привлечет на ресурс новых читателей. В первую очередь, статус дает автору низкую комиссию с продажи книги — всего 15%.Статус «Эксклюзив» может быть присвоен новой платной книге в процессе, не публиковавшейся ранее и не размещённой на других ресурсах.Служба поддержки не решает вопросы, связанные с выдачей эксклюзива.Если вы коммерческий автор и ваша книга подходит под требования выше, заявку на эксклюзив можно отправить в настройках книги, вкладка «Продажи»."
  },
  {
    question: "Я опубликовал новую главу, но дата обновления на странице книги не изменилась. Баг?", answerHTML: "Чтобы книга получила статус обновления и попала в виджет «Последние обновления», необходимо опубликовать фрагмент нового текста объемом от 15 000 знаков с пробелами. На странице редактирования текста (там, где вы добавляете новые главы) есть счетчик, который показывает, сколько знаков осталось до получения статуса.Важно: если вы удаляли или скрывали уже опубликованный текст, его объем будет суммироваться с минимальными 15 000 знаков."
  },
  {
    question: "Как подключить награды?", answerHTML: "На АТ есть возможность получить ограниченный коммерческий статус — возможность получать награды без возможности продажи книг.Заявку можно подать в личном кабинете, в разделе «Коммерческий статус».Не забудьте указать в комментарии к заявке, что необходимо подключить только награды.Иначе заявка будет рассматриваться как заявка на полный коммерческий статус.Служба поддержки не решает вопросы, связанные с коммерческим статусом."
  },
  {
    question: "Как начать продавать свои книги на Author.Today?", answerHTML: "Возможность подать заявку на коммерческий статус появляется сразу после того как вы начнёте публикацию любого своего произведения на нашем сайте. Подробнее о коммерческом статусе вы можете узнать здесь: https://help.author.today/knowledge_base/category/59010 Каждая заявка рассматривается индивидуально, поэтому при её заполнении, пожалуйста, сообщайте всю информацию о ваших публикациях и изданных книгах.Вы также можете задать в комментарии к заявке все интересующие вас вопросы.Через некоторое время(обычно в течение 1- 2 дней) вам ответит специалист коммерческого отдела личным сообщением на сайте или письмом на привязанную к аккаунту почту.  Служба поддержки не решает вопросы, связанные с коммерческим статусом."
  },
  {
    question: "Оплата одной книги прошла несколько раз. Как вернуть лишние платежи?", answerHTML: "Мы ежедневно проверяем дубли платежей. Если у вас была двойная или более оплата одной книги, вы получите уведомление в ЛС на сайте, в котором мы сообщим вам об успешном возврате, либо предложим компенсацию.Обычно уведомление приходит в течение суток или на следующий день."
  },
  {
    question: "Купил книгу, но не могу её прочесть. Что мне делать?", answerHTML: "Для начала сохранять спокойствие: вас не пытаются обмануть или ограбить. Задержка с открытием доступа к произведению может происходить по ряду технических причин, как с нашей стороны, так и со стороны банка или платёжной системы. Если вы столкнулись с такой проблемой, пожалуйста, обратитесь к технической поддержке.Обязательно укажите:Ссылку на книгу, с которой возникла проблема;  Выписку по операции, подтверждающую оплату произведения(её можно запросить у банка/ оператора онлайн).Мы проверим заказ."
  },
  {
    question: "Не могу скачать книгу, хотя доступ оплачен. Что мне делать?", answerHTML: "Автор самостоятельно настраивает возможность скачивания произведения. Администрация и сотрудники АТ никак не влияют на это решение. Если скачивание книги ограничено или вовсе запрещено, на её странице всегда есть соответствующее предупреждение: «Только чтение на сайте».Для платной книги это предупреждение дублируется ещё дважды на разных этапах оплаты.Если для вас важна возможность скачивания, пожалуйста, будьте внимательнее."
  },
  {
    question: "Я купил книгу и читал её, но сейчас снова требуется оплата. Что мне делать?", answerHTML: "Для начала сохранять спокойствие: вас не пытаются обмануть или ограбить. Покупка книги на АТ оплачивается один раз, доступ сохраняется на всё время существования сайта, если пользователь не нарушает правила.Чаще всего доступ «теряется» по одной из причин:    Автор установил стоимость произведения ПОСЛЕ того, как пользователь его прочитал.То есть, пользователь не покупал книгу, она была полностью в открытом доступе.Это легко проверить в списке покупок.Пользователь случайно создал второй аккаунт, для которого книга не была куплена(так случается, например, при входе через соцсеть, когда аккаунт зарегистрирован на другую почту).Если вы столкнулись с подобной проблемой, пожалуйста, обратитесь к специалистам технической поддержки.Обязательно укажите ссылку на книгу, с которой возникла проблема, и(по возможности) чек, подтверждающий покупку.Мы проверим заказ."
  },
  {
    question: "Автор удалил мой комментарий и добавил меня в ЧС. Что делать?", answerHTML: "Да, так бывает.Каждый автор может самостоятельно модерировать комментарии к своим произведениям.Это не нарушает правил ресурса.Кроме того, каждый пользователь сайта может использовать функционал игнор- листа на свое усмотрение.И это тоже не является нарушением правил ресурса.Однако оскорбления, провокации и переходы на личности в комментариях к удалению(в причине удаления) строго запрещены.В этом случае, используйте кнопку «Пожаловаться» на соседний комментарий и не забудьте описать в жалобе ситуацию.Модератор рассмотрит и примет меры, если они будут необходимы."
  },
  {
    question: "Я недавно зарегистрировался и хочу написать комментарий, но не могу. Что мне делать?", answerHTML: "В рамках защиты от ботов, накрутки и спама каждый новый пользователь должен набрать минимум 100 единиц репутации. Это откроет доступ к основным активностям на сайте.Набрать репутацию можно следующими способами:     1 час чтения на сайте или в приложении = 20 очков репутации;    Покупка книги = 50 очков репутации.      Подробнее: Репутация пользователя и Комментарии и репутация"
  }]

const faqQuestionsState = reactive([]);
faqQuestionsState.length = faqQuestionsData.length;
faqQuestionsState.fill(false);

const hoverFaqQuestionsState = reactive([]);
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
.faq-section {
  padding: 90px 0;
}

.text-wrapper {
  width: 760px;
  padding: 0;
}

.section-header {
  margin-bottom: 10px;
  text-align: center;
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

::v-deep .important {
  color: var(--decor-color-first);
}

.lifehack-list-item {
  &:not(:last-child) {
    margin-bottom: 30px;
  }
}

.link-to-elena {
  color: var(--decor-color-first);
  border-bottom: 1px solid var(--decor-color-first);
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

::v-deep .center-text {
  text-align: center;
}

.section-immitation {
  padding: 60px 0;
}
</style>