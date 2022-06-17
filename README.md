![react-version](https://img.shields.io/badge/React-v18.0.0-yellow)

# :technologist: Meu Portfólio

# Sumário

- [Case](#case)
- [Seções](#secoes)
- [Tecnologias utilizadas](#tecnologias)
- [Instruções para rodar o projeto](#instrucoes)
- [Organização e estruturação do projeto](#organizacao)
- [Desenvolvimento](#desenvolvimento)
- [Resultado](#resultado)

# Case <a name="case"></a>

Esta é a 3ª e mais recente versão do meu portfólio pessoal. Criado com o objetivo de apresentar um pouco sobre mim e meus conhecimentos. Além de mostrar meus projetos no decorrer de meus estudos.

<h4 align="center"><a href="https://portfolio-pessoal-flavi.vercel.app/">Clique para visitar o projeto</a></h4>

# 📚 Seções <a name="secoes"></a>

- **Intro:** Uma breve apresentação com meu nome e um link para meu currículo;
- **Quem sou:** Essa seção tem o objetivo de apresentar um pouco sobre mim;
- **Projetos:** Exibe alguns projetos desenvolvidos, no qual, ao clicar no respectivo projeto, abre uma página com mais informações sobre o mesmo e seu link com o código no GitHub.
- **Formação:** Nele apresento meus conhecimentos em algumas linguagens como o foco no front-end, cursos que fiz e também minhas informações acadêmicas;

# Tecnologias Utilizadas <a name="tecnologias"></a>

- [**React**](https://pt-br.reactjs.org/)
- [**React Hooks**](https://pt-br.reactjs.org/docs/hooks-intro.html)
- [**React Router Dom**](https://www.npmjs.com/package/react-router-dom)
- [**Styled Components**](https://styled-components.com/)
- [**React Icons**](https://react-icons.github.io/react-icons/)
- [**React-splide**](https://splidejs.com/integration/react-splide/)
- [**AOS - Animate on scroll library**](https://michalsnik.github.io/aos/)
- [**Firebase - Cloud Firestore**](https://firebase.google.com/?hl=pt-br)
- [**Eslint - Find and fix problems**](https://eslint.org/)

# Instruções para rodar o projeto <a name="instrucoes"></a>

### Será necessário ter instalado na sua máquina:

```
Git
React
Node v6.0.0^
```

- Clone o repositório com o comando **git clone**:

```
git clone https://github.com/Flaviane-Brum/portfolio-pessoal-v3.0.git
```

- Entre no diretório que acabou de ser criado:

```
cd portfolio
```

- Para o projeto funcionar na sua máquina, será necessário instalar suas dependências, para isso, utilize o comando **npm install**:

```
npm install
```

- Pronto, agora o projeto está pronto para ser rodado localmente, utilizando o comando **npm run dev**:

```
npm run dev
```

# Organização e estruturação do projeto <a name="organizacao"></a>

O projeto está organizado e estruturado da seguinte forma:

```
      ├── README.md
      ├── index.html
      ├── src
      |     ├── components
      |     |       ├── About
      |     |       |     ├── AboutIcon
      |     |       |     |     ├── index.jsx
      |     |       |     |     ├── styles.js
      |     |       |     ├── index.jsx
      |     |       |     ├── styles.js
      |     |       ├── Container
      |     |       |     ├── index.jsx
      |     |       |     ├── styles.js
      |     |       ├── Footer
      |     |       |     ├── index.jsx
      |     |       |     ├── styles.js
      |     |       ├── Header
      |     |       |     ├── index.jsx
      |     |       |     ├── ItemCard.jsx
      |     |       ├── helpers
      |     |       |     ├── Head
      |     |       |     |     ├── index.jsx
      |     |       |     ├── Loading
      |     |       |     |     ├── index.jsx
      |     |       |     |     ├── styles.js
      |     |       |     ├── data.js
      |     |       ├── Intro
      |     |       |     ├── index.jsx
      |     |       |     ├── styles.js
      |     |       ├── Nav
      |     |       |     ├── MenuMobile
      |     |       |     |     ├── index.jsx
      |     |       |     |     ├── styles.js
      |     |       |     ├── index.jsx
      |     |       |     ├── styles.js
      |     |       ├── NotFound
      |     |       |     ├── index.jsx
      |     |       |     ├── styles.js
      |     |       ├── Projects
      |     |       |     ├── ProjectItem
      |     |       |     |     ├── index.jsx
      |     |       |     |     ├── styles.js
      |     |       |     ├── index.jsx
      |     |       |     ├── styles.js
      |     |       ├── Skills
      |     |       |     ├── CoursesComponent
      |     |       |     |     ├── CoursesItem
      |     |       |     |     |    ├── index.jsx
      |     |       |     |     |    ├── styles.js
      |     |       |     |     ├── index.jsx
      |     |       |     |     ├── styles.js
      |     |       |     ├── EducationComponent
      |     |       |     |     ├── EducationItem
      |     |       |     |     |    ├── index.jsx
      |     |       |     |     |    ├── styles.js
      |     |       |     |     ├── index.jsx
      |     |       |     |     ├── styles.js
      |     |       |     ├── ExperienceComponent
      |     |       |     |     ├── index.jsx
      |     |       |     |     ├── styles.js
      |     |       |     ├── TecnologiesComponent
      |     |       |     |     ├── TecnologieItem
      |     |       |     |     |    ├── index.jsx
      |     |       |     |     |    ├── styles.js
      |     |       |     |     ├── index.jsx
      |     |       |     |     ├── styles.js
      |     |       |     ├── index.jsx
      |     |       |     ├── styles.js
      |     |       ├── Subtitle
      |     |       |     ├── index.jsx
      |     |       |     ├── styles.js
      |     |       ├── TypeWrapper
      |     |       |     ├── index.jsx
      |     |       |     ├── styles.js
      |     ├── contexts
      |     |       ├── ProjectContext.jsx
      |     ├── hooks
      |     |       ├── useMedia.js
      |     |       ├── useProject.js
      |     ├── pages
      |     |       ├── Home
      |     |       |     ├── index.jsx
      |     |       ├── Project
      |     |       |     ├── Features
      |     |       |     |    ├── index.jsx
      |     |       |     |    ├── styles.js
      |     |       |     ├── HeaderProject
      |     |       |     |    ├── index.jsx
      |     |       |     |    ├── styles.js
      |     |       |     ├── OtherProjects
      |     |       |     |    ├── index.jsx
      |     |       |     |    ├── styles.js
      |     |       |     ├── ProjectInfo
      |     |       |     |    ├── index.jsx
      |     |       |     |    ├── styles.js
      |     |       |     ├── ProjectSLide
      |     |       |     |    ├── index.jsx
      |     |       |     ├── Techs
      |     |       |     |    ├── index.jsx
      |     |       |     |    ├── styles.js
      |     |       |     ├── index.jsx
      |     |       |     ├── styles.js
      |     ├── services
      |     |       ├── firebase.js
      |     ├── styles
      |     |       ├── global.js
      |     ├── App.jsx
      |     ├── main.jsx
```

# Desenvolvimento <a name="desenvolvimento" ></a>

## Back-end

Para o Back-end, foi utilizado o banco de dados NoSQL [**Firebase - Cloud Firestore**](https://firebase.google.com/?hl=pt-br)

## Estilização

Para realizar a estilização, foi utilizado o framework [**Styled Components**](https://styled-components.com/).

## Icones

Os ícones utilizados foram os da biblioteca [**React Icons**](https://react-icons.github.io/react-icons/)

## Animações

Para as animações, foi utilizado a biblioteca [**AOS - Animate on scroll library**](https://michalsnik.github.io/aos/)

# Resultado <a name="resultado"></a>

## Intro

![Intro](https://user-images.githubusercontent.com/77207253/174334412-fa135cdb-19e7-4515-b9c0-c39fbfa111ac.png)

## Quem sou

![Quem sou](https://user-images.githubusercontent.com/77207253/174104725-cd5fce33-8f4b-4c64-9052-00986c953888.png)

## Projetos

![Projetos](https://user-images.githubusercontent.com/77207253/174104719-34e490a5-f2b4-4eb4-a3ad-b2af6eb341fa.png)

## Formação

![Formação](https://user-images.githubusercontent.com/77207253/174104695-b82fd4a3-ce9e-43ca-9466-0d20b567a9b5.png)

## Footer

![Contato](https://user-images.githubusercontent.com/77207253/174104687-580a609b-f46a-4f45-9443-ce2fe911e96d.png)

## Page Projeto

![Page Projeto](https://user-images.githubusercontent.com/77207253/174104709-9bf24503-e9f7-4bb4-9d8c-1f3b6bbe4a22.png)

## 🦄 Autor<br>

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Flaviane-Brum">
        <img src="https://avatars.githubusercontent.com/u/77207253?v=4" width="100px;" alt="Foto de Flaviane Brum no GitHub"/><br>
        <sub>
          <b>Flaviane Brum</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
