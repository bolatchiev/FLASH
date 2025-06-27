'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Geographies', [
      {
        question: 'Только на этом континенте живут сумчатые животные:',
        answer: JSON.stringify(
        [
            'Южная Юмерика',
            'Африка',
            'Австралия',
          ],
        ),
        rightAns: 'Австралия',
      },
      {
        question: 'Название, какого государства совпадает с названием головного убора?',
        answer: JSON.stringify(
          [
            'Балаклава',
            'Панама',
            'Бермуды',
          ],
        ),
        rightAns: 'Панама',
      },
      {
        question: 'Контуры, какой страны на карте напоминают сапог?',
        answer: JSON.stringify(
          [
            'Италия',
            'Франция',
            'Португалия',
          ],
        ),
        rightAns: 'Италия',
      },
      {
        question: 'Самый большой остров:',
        answer: JSON.stringify(
          [
            'Австралия',
            'Гренландия',
            'Тасмания',
          ],
        ),
        rightAns: 'Гренландия',
      },
      {
        question: 'На территории какой страны расположено высокогорное озеро Титикака? ',
        answer: JSON.stringify(
          [
            'Парагвай',
            'Уругвай',
            'Боливия',
          ],
        ),
        rightAns: 'Боливия',
      },
      {
        question: 'Как называется жилище эскимосов?',
        answer: JSON.stringify(
          [
            'Чум',
            'Иглу',
            'Юрта',
            'Вигвам',
          ],
        ),
        rightAns: 'Иглу',
      },
      {
        question: 'Самая длинная в мире змея:',
        answer: JSON.stringify(
          [
            'Питон',
            'Анаконда',
            'Кобра',
          ],
        ),
        rightAns: 'Питон',
      },
      {
        question: 'Какая страна является родиной Олимпийских игр?',
        answer: JSON.stringify(
          [
            'Италия',
            'Турция',
            'Япония',
            'Греция',
          ],
        ),
        rightAns: 'Греция',
      },
      {
        question: 'Что означают звёзды на флаге США?',
        answer: JSON.stringify(
          [
            'Небоскребы',
            'Президентов',
            'Штаты',
            'Послов',
          ],
        ),
        rightAns: 'Штаты',
      },
      {
        question: 'На флаге этого государства изображен медицинский крест:',
        answer: JSON.stringify(
          [
            'Швейцария',
            'Великобритания',
            'Дания',
          ],
        ),
        rightAns: 'Швейцария',
      },
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Geographies', null, {});

  }
};
