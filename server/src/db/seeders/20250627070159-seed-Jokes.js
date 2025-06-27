'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const jokes = [
            {
                question: 'Почему у владельца BMW всегда горит Check, но он всё равно улыбается?',
                answer: JSON.stringify([
                    'Он думает, что это фоновая подсветка',
                    'Он знает, что до сервиса ещё 300 км страсти',
                    'Он просто привык — это часть дизайна',
                ]),
                rightAnswer: 'Он просто привык — это часть дизайна',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                question: 'Как окружающие понимают, что вечер с Денисом пошёл по идеальному сценарию?',
                answer: JSON.stringify([
                    'Когда от него звучит тост',
                    'Когда начинают хлопать пробки',
                    'Когда в воздухе раздаётся тот самый звук',
                ]),
                rightAnswer: 'Когда в воздухе раздаётся тот самый звук',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                question: 'Что происходит, когда Коля зовёт хэлпера?',
                answer: JSON.stringify([
                    'Они решают всё за 5 минут и расходятся молча',
                    'Сначала 30 минут тишины, потом ещё полтора часа тишины',
                    'Они вдумчиво решают 2 часа — и это называется "повезло"',
                ]),
                rightAnswer: 'Они вдумчиво решают 2 часа — и это называется "повезло"',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                question: 'Что делает спецназ, когда видит ошибку в коде?',
                answer: JSON.stringify([
                    'Вызывает подкрепление',
                    'Штурмует функцию',
                    'Срочно отступает и вызывает сеньора',
                ]),
                rightAnswer: 'Штурмует функцию',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                question: 'Как, по мнению Саши, нужно вкатываться в айти после 30?',
                answer: JSON.stringify([
                    'Плавно, через HTML и CSS',
                    'С двух ног, желательно с разворота и без 1 ноги',
                    'Научиться дудеть на дудочке',
                ]),
                rightAnswer: 'С двух ног, желательно с разворота',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                question: 'Что общего у детства и дебага?',
                answer: JSON.stringify([
                    'Плачешь и зовёшь маму',
                    'Виноват кто-то другой',
                    'Сломалось — а ты ничего не трогал',
                ]),
                rightAnswer: 'Сломалось — а ты ничего не трогал',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                question: 'Почему обучение в Эльбрусе — как мультики из детства?',
                answer: JSON.stringify([
                    'Весело, пока не начнёшь понимать смысл',
                    'Каждый день — новая серия боли',
                    'И там, и там хочется кричать "мама!"',
                ]),
                rightAnswer: 'Каждый день — новая серия боли',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ];

        await queryInterface.bulkInsert('Jokes', jokes, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Jokes', null, {});
    },
};
