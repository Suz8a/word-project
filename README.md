## Demo link
- [Mi proyecto subido en github pages](https://suz8a.github.io/word-project/)

- [Mock up en adobe XD](https://xd.adobe.com/view/0800f466-acad-4bb7-8251-606bb865f6ef-5d53/)

Nota: Por cuestiones de prueba, las palabras a acompletar se imprimen en consola.

## Requerimientos
> NodeJs

> NPM

## Ejecución
Posicionarse en el directorio del proyecto y ejecutar los comandos
```
npm install
npm start
``` 
Despues abrir el navegador y escribir en la barra de busqueda `localhost:3000`

## Arquitectura

Se realizó una arquitectura basada en [atomic design](https://xd.adobe.com/ideas/process/ui-design/atomic-design-principles-methodology-101/), donde:

 - Atomos &#8594; Elements
 - Moleculas &#8594; Components
 - Organismos &#8594; Modules
 - Template &#8594; Layout
 - Pages &#8594; Pages

teniendo como extra las carpetas:
- api &#8594; Donde se encuentran todas las peticiones a la api
- assets &#8594; Recursos utilizados en el proyecto 
- utils &#8594; Conjunto de funciones utilizadas para realizar diferentes procedimientos repetitivos
- store &#8594; Donde se encuentran los reducers y actions para manejo de estado

se hizo uso de:

- ReactJS
- Typescript
- Redux
- Axios
- React icons
- Styled components

Api utilizada: [Random Words with Pronunciation](https://rapidapi.com/mcnaveen/api/random-words-with-pronunciation)

