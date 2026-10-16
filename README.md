# Interface Clara — Recurso Educacional Aberto (REA)

## Sobre o projeto

O **Interface Clara** é um Recurso Educacional Aberto (REA) desenvolvido para apresentar, de forma simples e prática, conceitos de **Interação Humano-Computador (IHC)**, boas práticas de design de interfaces e acessibilidade digital.

A proposta é ajudar estudantes e pessoas interessadas no tema a compreender como as interfaces podem ser planejadas para serem mais claras, consistentes, fáceis de aprender e inclusivas. O conteúdo utiliza explicações, exemplos de situações cotidianas, comparações entre experiências boas e ruins e atividades para reforçar o aprendizado.

## Objetivos

- Explicar conceitos fundamentais de IHC e usabilidade.
- Apresentar boas práticas para projetar e avaliar interfaces.
- Demonstrar como hierarquia visual, cores, contraste e tipografia influenciam a leitura.
- Mostrar a importância de botões claros, feedback e navegação consistente.
- Introduzir princípios de acessibilidade digital.
- Incentivar a identificação de *dark patterns* e de práticas que prejudicam a autonomia das pessoas.
- Aplicar os conceitos estudados em uma atividade prática.

## Conteúdos desenvolvidos

O recurso está organizado em **10 módulos**:

1. **O que é Interação Humano-Computador?** — conceitos de IHC e usabilidade, considerando eficácia, eficiência, satisfação e contexto de uso.
2. **O que é uma boa interface?** — heurísticas de usabilidade e exemplos de problemas e soluções.
3. **Hierarquia visual** — organização das informações, proximidade, similaridade e uso do espaço em branco.
4. **Cores e contraste** — uso de cores para comunicar informações e melhorar a legibilidade.
5. **Tipografia em interfaces** — escolha, tamanho e organização dos textos.
6. **Botões e feedback** — clareza das ações e retorno do sistema após as interações.
7. **Navegação** — organização dos caminhos e orientação da pessoa usuária dentro de um sistema.
8. **Acessibilidade digital** — práticas para tornar interfaces mais inclusivas e utilizáveis por diferentes pessoas.
9. **Dark Patterns** — reconhecimento de padrões de design manipulativos que podem confundir ou induzir escolhas.
10. **Construindo uma interface na prática** — aplicação dos conceitos em um painel de satisfação do usuário.

## Funcionalidades implementadas

- Página inicial com apresentação do curso e acesso aos módulos.
- Navegação entre as páginas de aula e o projeto prático.
- Conteúdo organizado por objetivos de aprendizagem, explicações e exemplos.
- Comparação entre situações de interface problemáticas e alternativas melhores.
- Conceitos-chave destacados em cada módulo.
- Atividades interativas, incluindo questionários com alternativas e explicações e listas de verificação.
- Registro local do progresso das aulas concluídas.
- Estimativa de tempo de estudo por módulo e indicador de progresso.
- Área de materiais complementares e suporte a vídeos, legendas e transcrições quando esses recursos forem cadastrados.
- Projeto prático com formulário de satisfação, validação da escolha e mensagens de retorno.
- Orientações de HTML, CSS e JavaScript para construir um formulário mais acessível.
- Cuidados de acessibilidade, como rótulos associados aos campos, navegação por teclado, foco visível e região de mensagem com `aria-live`.
- Layout responsivo e identidade visual própria.

> **Observação:** os campos de vídeos, legendas, transcrições e link de publicação podem ser preenchidos conforme os materiais finais forem disponibilizados. O projeto inclui suporte a esses recursos, mas isso não significa que todos já estejam cadastrados.

## Tecnologias utilizadas

- **React** — construção da interface por componentes.
- **TypeScript** — tipagem e organização do código.
- **Vite** — ambiente de desenvolvimento e geração da versão de produção.
- **React Router DOM** — navegação entre páginas.
- **CSS** — estilos, organização visual e adaptação da interface.
- **Atkinson Hyperlegible** e **Bricolage Grotesque** — fontes utilizadas no projeto.

## Como executar o projeto localmente

É necessário ter o **Node.js** e o **npm** instalados.

1. Faça o download ou clone este repositório.
2. Abra um terminal na pasta do projeto.
3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra no navegador o endereço informado pelo Vite no terminal.

Para verificar a compilação de produção, execute:

```bash
npm run build
```

Para visualizar localmente a versão compilada:

```bash
npm run preview
```

## Organização dos arquivos

```text
src/
├── components/   # Componentes reutilizáveis da interface
├── pages/        # Página inicial, aulas e projeto prático
├── App.tsx       # Estrutura principal e rotas
├── data.ts       # Dados, textos e atividades dos módulos
├── media.ts      # Vídeos, legendas, transcrições e materiais
├── progress.ts   # Controle do progresso de aprendizagem
├── team.ts       # Informações da equipe
└── styles.css    # Estilos da aplicação

public/
└── equipe/       # Fotografias utilizadas na página da equipe
```

## Público-alvo

Estudantes, iniciantes em design e desenvolvimento de interfaces e qualquer pessoa interessada em aprender fundamentos de IHC, usabilidade e acessibilidade digital.

## Caráter aberto do recurso

O projeto foi concebido como material educativo de acesso livre, com conteúdo organizado em módulos e exemplos que podem apoiar o estudo autônomo. Para caracterizá-lo formalmente com uma licença aberta específica, a licença escolhida deve ser indicada no projeto e respeitada na redistribuição e adaptação dos materiais de terceiros.

##Trello
Link: https://trello.com/invite/b/6ad1705b01ea46dcd726c2c8/ATTI406bfa2897bd40d5b0ca6075a7c82d2e83D5A354/certificadora

## Equipe

- Rayssa Okamura
- Maria Carolyne
- Luis
- Gustavo

## Considerações finais

O **Interface Clara** reúne explicações e atividades práticas para mostrar que uma boa interface não depende apenas da aparência. Ela também precisa comunicar o que está acontecendo, prevenir erros, facilitar a navegação e considerar diferentes necessidades de uso. Ao final do percurso, a pessoa estudante é convidada a aplicar esses princípios na construção de um formulário de satisfação acessível e com mensagens claras.
