# Домашнее задание к лекции «Object, Reflection и Proxy»

[![Build status](https://ci.appveyor.com/api/projects/status/j4ykfso7t2d3uvxi?svg=true)](https://ci.appveyor.com/project/stormozov/object-reflection-proxy-2)

**Важно**: каждая задача выполняется в виде отдельного проекта с собственным GitHub репозиторием.

**Важно**: код должен проходить ESLint без ошибок

**Важно**: тесты должны обеспечивать 100% покрытие тестируемых функций по строкам

**Важно**: решения должны быть построены на базе [шаблона Webpack](https://github.com/netology-code/ajs-homeworks/blob/master/ci-template).

В личном кабинете на сайте [netology.ru](http://netology.ru/) в поле комментария к домашней работе вставьте ссылки на ваш GitHub-проекты.

---

## Destructuring

### Легенда

При выборе конкретного персонажа на поле необходимо во время боя на экране отображать доступные варианты спец.атак для этого персонажа. Это вам и предстоит сделать.

### Описание

Вам необходимо для панели выбора варианта атаки вытащить id, иконку и описание из объекта:
```javascript
const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    }, 
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...'
      // <- обратите внимание, описание "засекречено"
    }
  ]	
}
```

Но для некоторых (ещё недоступных) атак описание является засекреченным и не отображается:

```javascript
{
  id: 9,
  name: 'Нокаутирующий удар',
  icon: 'http://...'
}
```

Напишите функцию с аргументом-деструктором, которая извлекает массив с нужными полями (`id`, `name`, `description`, `icon`) из объекта, а если значения для поля `description` нет - устанавливает default'ное значение в 'Описание недоступно'. Функция должна возвращать извлечённый массив из объектов с четыремя полями.

Не забудьте написать unit-тесты, которые обеспечивают 100% покрытие функции, которую вы тестируете.