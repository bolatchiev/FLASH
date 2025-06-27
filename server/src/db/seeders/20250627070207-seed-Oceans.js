'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert(
      'Elbrus',
      [
        {
          question: 'Что делает useState в React?',
          answer: JSON.stringify({
            A: 'Собирает стили',
            B: 'Хранит и обновляет состояние',
            C: 'Рендерит HTML',
            D: 'Обновляет сервер',
          }),
          rigthAns: 'B',
        },
        {
          question: 'Что такое JSX?',
          answer: JSON.stringify({
            A: 'HTML внутри JavaScript',
            B: 'CSS синтаксис',
            C: 'Тип данных',
            D: 'Альтернатива JSON',
          }),
          rigthAns: 'A',
        },
        {
          question: 'Какой хук нужен для эффекта при монтировании компонента?',
          answer: JSON.stringify({
            A: 'useMount',
            B: 'useLoad',
            C: 'useEffect',
            D: 'useTrigger',
          }),
          rigthAns: 'C',
        },
        {
          question: 'Что делает Express?',
          answer: JSON.stringify({
            A: 'Работает с HTML',
            B: 'Создаёт сервер на Node.js',
            C: 'Управляет стилями',
            D: 'Генерирует таблицы',
          }),
          rigthAns: 'B',
        },
        {
          question: 'Что делает `res.send()` в Express?',
          answer: JSON.stringify({
            A: 'Получает данные',
            B: 'Останавливает сервер',
            C: 'Отправляет ответ клиенту',
            D: 'Удаляет базу',
          }),
          rigthAns: 'C',
        },
        {
          question: 'Что такое Virtual DOM?',
          answer: JSON.stringify({
            A: 'Настоящий DOM',
            B: 'Массив HTML',
            C: 'Виртуальная копия DOM',
            D: 'Файл JSON',
          }),
          rigthAns: 'C',
        },
        {
          question: 'Какой метод Express обрабатывает GET-запрос?',
          answer: JSON.stringify({
            A: 'app.read()',
            B: 'app.get()',
            C: 'app.query()',
            D: 'app.post()',
          }),
          rigthAns: 'B',
        },
        {
          question: 'Что такое middleware в Express?',
          answer: JSON.stringify({
            A: 'CSS-фреймворк',
            B: 'База данных',
            C: 'Функция обработки запроса',
            D: 'Оболочка для HTML',
          }),
          rigthAns: 'C',
        },
        {
          question: 'React — это...',
          answer: JSON.stringify({
            A: 'Фреймворк',
            B: 'Библиотека',
            C: 'CMS',
            D: 'API',
          }),
          rigthAns: 'B',
        },
        {
          question: 'Что делает `express.json()`?',
          answer: JSON.stringify({
            A: 'Стирает данные',
            B: 'Преобразует HTML',
            C: 'Парсит JSON из тела запроса',
            D: 'Сохраняет JSON-файл',
          }),
          rigthAns: 'C',
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
