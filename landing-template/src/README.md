# Знакомство с библиотекой styled-component

Источник: https://www.styled-components.com/

## Шаблонные строки
Перед началом напомню о шаблонных строках в ES6.
```js
let string = `Some text in this string`.
```
Шаблонная строка начинается с символа ``` ` ``` обратной кавычки. В неё также можно вставлять JS код, используя внутри строки вставку из символов ```${}```, где внутри фигурных скобок должен быть JS код:
```js
let string = `Sum of ${1} and ${2} would be ${1 + 2}`.
```
```js
let a = 2,
    b = 3,
    string = `Sum of ${a} and ${b} would be ${a + b}`.
```

## Начнем

JSX позволяет совмещать HTML и JS в одном JSX(JS) файле, а библиотека styled-component позволяет добавлять туда еще и CSS.

Нам для работы нужен элемент ```styled``` из этой библиотеки. Импортируем в начале файла:
```js
import styled from 'styled-component'
```

Применение простое:
 - задаем стили компонента
 - применяем компонент
 
Порядок не важен, но для структуры кода я задаю стили в конце.

### Задаем стиль (обращаю внимание, что кавычки обратные, как в шаблонных строках, потому что это они и есть):
```js
let Element = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  ... another CSS code
`
```

### Применяем компонент со стилем в JSX:
```js
let element = <Element/>
```

# Параметры
Основная фишка styled-components заключается в том, что в стили можно передавать параметры как JS код передается в шаблонную строку:
```js
let element = <Element background={`white`} />

let Element = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.background};
`
```
