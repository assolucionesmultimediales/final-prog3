# Examen final Programación 3 - Julio 2025
Profesor: Lic. Leandro Amaro García.

## Consigna

El proyecto consiste en el armado de una Trivia (encuesta), obteniendo las preguntas y sus respuestas desde el backend. Cada pregunta esta asociada a un `step` de la trivia, al terminar la trivia el usuario es redirigido al resumen, mostrando para cada pregunta, si la respuesta elegida es correcta o no.

Utilizar como BASE_URL: 

` https://maimo-prog-2023-exam-dic-backend.vercel.app `


### 1) contexts/AppContext (3 puntos)

a) Completar las funciones `getQuestions` y `getAnsewers(questionId: string)`
Las mismas serán utilizadas para obtener las questions generales y las answers de cada cuestion cuando se requiera. Utilizar try/catch y axios.get()

- `getQuestions` (endpoint /questions). Guarda en el state **questions**. Además inicializar el state **userAnswers** agregando luego de la llamada de axios el siguiente código: ` setUserAnswers(
        response.data.questions.map((item) => {
          return { title: 'No answer' };
        })
      ); `


- `getAnswers` (endpoint /questions/[id]). Guarda en el state **actualQuestionAnswers**. Dado un questionId, obtiene las aswers correspondientes a esa question.

Utilizar el seteo de loadings e inicializar los states antes de cada llamada de axios.


b) Completar las funciones `handleSetAnswer` y `handleResume` (Luego de avanzar con punto 2)

- `handleSetAnswer` utiliza la funcion `insertInArray` en src/utils para guardar la respuesta en la posicion correcta del array (state) **userAnswers**. La función `insertInArray` devuelve un array que debe ser almacenado mediante setUserAnswers.

- `handleResume` retorna un array con objetos de la siguiente forma: `{ question, answer }`. Utilizar map(item, index) para recorrer el state **questions**, encontrando cada answer de la siguiente forma: `answer: userAnswers[index]`

### 2) containers/QuestionContainer (2 puntos)
- Utilizar questionData para mostrar el title y category de cada question
- Recorrer actualQuestionAnswers con map para mostrar el componente Answer, pasandole en la propiedad data el objeto de la answer.
- Completar la lógica del boton de Next Question. Si el state **step** es menor o igual a (questions.lenght - 1), handleSetStep deber recibir `resume` sino `next`. Para el label del boton debe decir `Go to resume` o `Next Question`. Utilizar if ternario.

### 3) components/Answer (1.5 puntos)
- Modificar el componente Answer para que obtenga del context la función handleSetAnswer y mediante el onClick del boton envie la data recibida por props.

### 4) containers/ResumeContainer (1.5 puntos)
Utilizar la funcion handleResume del context para recorrer el array que devuelve y mostrar el título de la question, el titulo de la answer y si es correcta o no. Recordar ejecutarla handleResume().map().

### 5) About (1 punto)
- Crear la page about.js
- Crear containers/AboutContainer
- Cargar en el container la info del alumno correctamente maquetada con jerarquias utilizando divs, headings, paragraphs, ul, etc.
- Vincular la pagina /about en la home en el link About Student. Utilizar Link from next/link

### 6) Estilos CSS - (1 punto)
Se puede utilizar tanto Tailwind CSS como CSS modules. 
Maquetar y estilar los archivos dados de manera que el sitio tenga integridad visual y funcional. Utilizar CSS Grid y/o CSS Flex.


## Tiempo de resolución
2.5 hrs.

## Importante
- No está permitido el uso de ChatGPT, Copilot o similares. Esta permitido el uso de documentación propia del alumno y búquedas en Internet.
- No utilizar las flechas del navegador
- Utilizar ESLint y cada archivo formateado.
- No dejar console logs, warnings o errores en la consola.

## Entrega
- Borrar la carpeta node modules
- Enviar un zip del proyecto via Slack



## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Demo

![](demo/demoFinalQuiz.gif)