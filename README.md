# EBAC - Eplay

<!-- Link para página do projeto -->
> Visite o e-commerce clicando [aqui](https://zkd-eplay.netlify.app/ "Visitar E-commerce").

### Sobre o projeto:

#### Aviso ⚠️
> Antes de começar a descrever sobre o projeto, **deixo claro** que todos os meus repositórios que iniciam com o nome **"EBAC"**, eu desenvolvi o código desses repositórios junto as aulas que faço no curso ***Full-Stack Java*** na plataforma da **EBAC** ***(Escola Britânica de Artes Criativa & Tecnologia)***. Então, se você entrar em um repositório que **não contenha** o título **EBAC**, se trata de uma criação própria minha, e se entrar em um repositório que **possuí/contenha** o nome **EBAC**, o código dele foi desenvolvido com as experiências e conhecimentos que meus professores passavam enquanto eu assistia as aulas do meu curso e desenvolvia o código junto com eles.

Nesse projeto foi criado um **E-commerce** de games, onde existe as páginas de **_Home_**, **_Categories_**, **_Product_** e **_Checkout_**, cada uma delas com suas devidas características, a **Home** sendo a página inicial, **Categories** sendo a página de categorias dos jogos, **Product** sendo a página de um determinado jogo em sí e **Checkout** sendo a página para finalizar um pedido de compra.
Caso ainda não tenha visto a página, clique [aqui](https://zkd-eplay.netlify.app/ "Visitar E-commerce").

***
 ### Algumas das tecnologias usadas:
 * HTML
 * Syled Components
 * TypeScript
 * Babel
 * React
 * ESLint
 * Prettier
 * EditorConfig
 * Redux
 * Redux Toolkit
 * React Router DOM
 * Formik
 * Yup
---
### Sobre as Tecnologias:

#### HTML
O ***HTML***(HyperText Markup Language) é uma linguagem utilizada para construir a estrutura da uma página, como links, textos, fomulários e etc. Ele faz isso através de **Tags** que são envolvidas por **<>**. O navegador utiliza essa linguagem para interpretar a ***estrutura e semântica*** da página, a **semântica** está relacionada as divisões da página, como por exemplo as tags ***header(cabeçalho), main(principal), section(seção) e footer(rodapé***), cada uma dessas tags, ajuda o navegador interpretar onde fica cada elemento da página. Já a **estrutura**, são os elementos presentes na página que estão ligados com a semântica, por exemplo um título **H1** que é o título principal de uma página.

#### Styled Components
O **_Styled Components_** é uma biblioteca para React e React Native que permite criar estilos de forma dinâmica utilizando JavaScript. Ele usa tagged template literals para estilizar componentes diretamente dentro do JavaScript, eliminando a necessidade de arquivos CSS separados. Com Styled Components, cada estilo é encapsulado em um componente, mantendo a coesão e facilitando a manutenção. Ele também oferece benefícios como escopo automático de CSS, permitindo que estilos não vazem para outros componentes, e a capacidade de utilizar lógica JavaScript para definir estilos condicionais. Isso torna a estilização mais intuitiva e modular, promovendo a reutilização de estilos e a manutenção de um código mais limpo e organizado. Caso queira ver, ler ou estudar sobre essa ferramenta, clique [aqui](https://styled-components.com/ "Documentação do Styled Components").

#### TypeScript 
O _**TypeScript**_ é uma linguagem de programação de código aberto desenvolvida pela Microsoft que adiciona **_tipagem estática_** ao JavaScript. Ele permite que os desenvolvedores definam tipos explícitos para variáveis, parâmetros de funções e retornos de funções, resultando em código mais previsível e fácil de depurar. TypeScript **transpila** para JavaScript puro, garantindo compatibilidade com todos os navegadores e ambientes JavaScript. Além disso, oferece suporte a recursos modernos de JavaScript, como classes e módulos, e é altamente integrado com editores de código, proporcionando autocompletar e verificação de tipos em tempo real. Ao utilizar TypeScript, equipes de desenvolvimento podem criar bases de código mais robustas e escaláveis, mantendo a flexibilidade do JavaScript. Caso queira ver, ler ou estudar sobre essa ferramenta, clique [aqui](https://www.typescriptlang.org/ "Documentação do TypeScript").

#### Babel
O **_Babel_** é uma ferramenta essencial no ecossistema JavaScript, especialmente para desenvolvedores que trabalham com as _versões mais **recentes** do JavaScript_. Desenvolvido para **transpilar** código JavaScript moderno para uma **versão compatível** com navegadores mais antigos, Babel permite que os desenvolvedores utilizem as últimas funcionalidades da linguagem sem se preocupar com a compatibilidade.
Uma das principais vantagens do Babel é sua capacidade de converter sintaxe ECMAScript 2015+ em uma versão de JavaScript que pode ser executada em qualquer navegador. Isso inclui a conversão de novas funcionalidades, como arrow functions, classes, e template literals, para uma sintaxe mais antiga e amplamente suportada.
Além disso, Babel é altamente configurável e extensível. Ele utiliza plugins para transformar o código, permitindo que os desenvolvedores escolham exatamente quais funcionalidades desejam transpilar. Isso torna o Babel uma ferramenta flexível que pode ser adaptada às necessidades específicas de cada projeto.
Outra característica importante do Babel é sua integração com outras ferramentas de desenvolvimento, como Webpack e Gulp. Isso facilita a inclusão do Babel no fluxo de trabalho de desenvolvimento, garantindo que o código seja automaticamente _"transpilado"_ durante o processo de build. Caso queira ver, ler ou estudar sobre essa ferramenta, clique [aqui](https://babeljs.io/ "Documentação do Babel").

#### React
O **_React_** é uma _**biblioteca JavaScript**_ desenvolvida pelo **Facebook**, amplamente utilizada para a criação de interfaces de usuário (UIs). Ela facilita a construção de UIs interativas e eficientes, permitindo que os desenvolvedores criem _componentes reutilizáveis_ que gerenciam seu próprio estado.
Uma das principais vantagens do React é sua abordagem declarativa, que simplifica a criação de views para cada estado da aplicação. Quando os dados mudam, o React _**atualiza** e **renderiza**_ de forma eficiente apenas os componentes necessários, melhorando o desempenho da aplicação.
Além disso, React é baseado em componentes, o que significa que você pode criar componentes encapsulados que gerenciam seu próprio estado e, em seguida, combiná-los para formar UIs complexas. Isso torna o código mais modular e fácil de manter. O React trabalha com uma sintaxe própria chamada **JSX**. Esta sintaxe junta o _JavaScript_
com _XML_, que é basicamente uma **estrutura de tags**, parecida com o **HTML**. Os 
componentes React são basicamente **funções JavaScript** que **retornam** uma **estrutura de tags**, 
também chamada de **Elemento React**.
O fluxo de dados no React é **unidirecional**, o que significa que os dados fluem de **cima** para **baixo** na _hierarquia de componentes_. Isso torna mais fácil entender como os dados estão sendo manipulados e como a UI está sendo atualizada. Além disso, o React pode ser usado para desenvolver aplicações móveis através do React Native, permitindo que você utilize a mesma base de código para múltiplas plataformas. Caso queira ver, ler ou estudar sobre essa ferramenta, clique [aqui](https://react.dev/ "Documentação do React").


#### ESLint
O **_ESLint_** é uma ferramenta de **linting** para JavaScript que ajuda a _identificar_ e _corrigir problemas_ no código. Desenvolvido como um projeto open source, ESLint analisa estaticamente o código para encontrar erros e inconsistências, promovendo melhores práticas de programação e garantindo a qualidade do código.
Uma das principais vantagens do ESLint é sua **alta configurabilidade**. Ele permite que os desenvolvedores _personalizem as regras_ de linting de acordo com as necessidades específicas do projeto. Isso é feito através de _plugins_, _parsers_ e _configurações compartilháveis_, que podem ser adicionados para estender a funcionalidade do ESLint. Por exemplo, você pode configurar regras para evitar variáveis não utilizadas ou para garantir que todas as variáveis estejam definidas antes de serem usadas.
Além disso, ESLint é integrado na maioria dos editores de texto, o que facilita a detecção e correção de problemas em tempo real enquanto você escreve o código. Ele também pode ser integrado em pipelines de integração contínua, garantindo que o código seja verificado automaticamente antes de ser mesclado no repositório principal.
Outra característica importante do ESLint é sua capacidade de corrigir automaticamente muitos dos problemas que encontra.  Isso economiza tempo e esforço dos desenvolvedores, permitindo que eles se concentrem em aspectos mais complexos do desenvolvimento. Caso queira ver, ler ou estudar sobre essa ferramenta, clique [aqui](https://eslint.org/ "Documentação do ESLint").

#### Prettier
O **_Prettier_** é uma ferramenta de formatação de código que ajuda a manter um estilo de código consistente em projetos JavaScript, TypeScript, CSS, HTML, entre outros. Ele é um formatador de código opinativo que aplica regras de estilo definidas para garantir que todo o código siga o mesmo padrão de formatação. Prettier se integra facilmente com vários editores de código, como VSCode, e pode ser configurado para formatar o código automaticamente ao salvar os arquivos. Além de melhorar a legibilidade do código, Prettier também elimina debates sobre estilo de código dentro das equipes de desenvolvimento, permitindo que os desenvolvedores se concentrem mais na lógica e funcionalidades do código. Caso queira ver, ler ou estudar sobre essa ferramenta, clique [aqui](https://prettier.io/ "Documentação do Prettier").

#### EditorConfig
O **_EditorConfig_** é uma ferramenta que ajuda a manter um estilo de codificação consistente entre diferentes editores e IDEs. Ele utiliza um arquivo de configuração .editorconfig que define regras de formatação, como indentação, espaçamento, estilo de linhas finais, e mais, que são aplicadas automaticamente em qualquer editor compatível. Isso é particularmente útil em equipes de desenvolvimento, onde diferentes desenvolvedores podem usar diferentes ferramentas. Com EditorConfig, você garante que o código escrito por todos os membros da equipe siga as mesmas convenções, independentemente do editor que utilizam. Caso queira ver, ler ou estudar sobre essa ferramenta, clique [aqui](https://editorconfig.org/ "Documentação do EditorConfig").

#### Redux
O **_Redux_** é uma biblioteca para gerenciamento de estado em aplicações JavaScript, principalmente usadas com React, embora possa ser utilizada com outras bibliotecas e frameworks. Ele proporciona um contêiner previsível para o estado do aplicativo, permitindo que você escreva aplicativos que se comportam de forma consistente em diferentes ambientes (cliente, servidor e nativo) e são fáceis de testar. A estrutura do Redux gira em torno de três princípios principais: o único store de estado, o estado é somente leitura e mudanças são feitas com ações puras. Caso queira ver, ler ou estudar sobre essa ferramenta, clique [aqui](https://redux.js.org/ "Documentação do Redux").

#### Redux Toolkit
O **_Redux Toolkit_** é um conjunto de ferramentas oficial do Redux que simplifica a utilização do Redux e vem com práticas recomendadas e abstrações eficientes. Ele fornece funções utilitárias como createSlice, configureStore, e createAsyncThunk, que ajudam a reduzir o código boilerplate e tornar a configuração do Redux mais intuitiva e poderosa. Juntos, Redux e Redux Toolkit ajudam a manter o estado do aplicativo gerenciado de forma clara, previsível e eficiente, facilitando a escalabilidade e manutenção de aplicações grandes e complexas. Caso queira ver, ler ou estudar sobre essa ferramenta, clique [aqui](https://redux-toolkit.js.org/ "Documentação do Redux Toolkit").

#### React Router DOM
O **_React Router Dom_** é uma biblioteca de roteamento para aplicações React que permite a navegação entre diferentes componentes e páginas de forma fácil e declarativa. Ele usa uma abordagem baseada em componentes para definir rotas e gerenciar a navegação no lado do cliente. Com React Router Dom, você pode criar uma aplicação de página única (SPA) onde a navegação é gerida sem recarregar a página inteira. As principais funcionalidades incluem BrowserRouter e HashRouter para definir o tipo de histórico a ser usado, Route para definir a relação entre um caminho da URL e um componente específico, Link e NavLink para criar links de navegação, Switch para renderizar exclusivamente o primeiro componente <Route> que corresponder à localização atual, e hooks como useParams, useLocation, useHistory, e useRouteMatch que fornecem acesso aos parâmetros de rota e ao histórico de navegação. Isso facilita a criação de uma navegação fluida e dinâmica em aplicações React. Caso queira ver, ler ou estudar sobre essa ferramenta, clique [aqui](https://reactrouter.com/en/main "Documentação do React Router").

#### Formik
O **_Formik_** é uma biblioteca para construção de formulários em React, que simplifica a gestão de estados, validação, e submissão de formulários. Ele fornece um conjunto de componentes e hooks que ajudam a criar formulários de forma declarativa e a gerenciar o estado do formulário sem esforço. Com Formik, você pode definir campos, validações e lógicas de envio de maneira concisa e organizada. Ele suporta validação síncrona e assíncrona, e é altamente personalizável, permitindo que você use suas próprias lógicas de validação e componentes personalizados. Isso resulta em formulários mais robustos, limpos e fáceis de manter. Caso queira ver, ler ou estudar sobre essa ferramenta, clique [aqui](https://formik.org/ "Documentação do Formik").

#### Yup
O **_Yup_** é uma biblioteca de validação de esquemas em JavaScript que permite a definição de esquemas para validar e transformar valores de objetos. É frequentemente usada com Formik para validar formulários, mas pode ser usada independentemente em qualquer aplicação JavaScript. Com Yup, você pode criar esquemas de validação detalhados e específicos para suas necessidades, utilizando métodos encadeados para definir regras de validação como tipo de dados, formatos, tamanhos, padrões e muito mais. Ele também suporta validações assíncronas e customizadas, tornando-o extremamente flexível e poderoso para garantir que os dados em sua aplicação sejam corretos e seguros. Caso queira ver, ler ou estudar sobre essa ferramenta, clique [aqui](https://yup-docs.vercel.app/ "Documentação do Yup").

---
