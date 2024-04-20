<template>
    <section class="about-us-section">
        <div class="main-container">
            <h2 class="support-page-section-header section-header">О нас</h2>
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

            <b class="appeal"><span>Главное, о чем мы просим помнить — не важно, к кому именно вы обращаетесь на сайте,
                    —
                    мы
                    живые.</span></b>
        </div>
    </section>

</template>

<script setup>

</script>

<style lang="scss" scoped>
.about-us-section {
    padding: 120px 0 30px;
}

.section-header {
    margin-bottom: 45px;
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

.appeal {
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
</style>