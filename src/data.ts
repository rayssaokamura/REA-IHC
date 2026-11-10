export interface QuizActivity {
  kind: "quiz";
  prompt: string;
  options: { text: string; correct: boolean; explanation: string }[];
}
export interface ChecklistActivity {
  kind: "checklist";
  prompt: string;
  items: string[];
}
export type Activity = QuizActivity | ChecklistActivity;

export interface CourseModule {
  number: number;
  slug: string;
  title: string;
  short: string;
  intro: string;
  videoMin: number;
  studyMin: number;
  objectives: string[];
  sections: { heading: string; body: string }[];
  comparison: { bad: { label: string; points: string[] }; good: { label: string; points: string[] } };
  keyConcept: { term: string; text: string };
  activity: Activity;
}

export const COURSE = {
  name: "Interface Clara",
  tagline: "Recurso Educacional Aberto sobre Interação Humano-Computador (IHC) e boas práticas de design ",
  responsible: "",
  email: "esparzaokamura@gmail.com", 
  license: "",
};

const base = { videoMin: 6, studyMin: 15 };

export const MODULES: CourseModule[] = [
  {
    ...base, number: 1, slug: "o-que-e-ihc", title: "O que é Interação Humano-Computador?",
    short: "Como pessoas interagem com sistemas digitais e o que é usabilidade.",
    intro: "Toda vez que você paga uma conta pelo celular ou procura um horário de ônibus, está interagindo com um sistema. A IHC estuda essa relação para que ela seja simples, eficiente e agradável.",
    objectives: ["Explicar o que é IHC com suas palavras.", "Definir usabilidade segundo a ISO 9241-11.", "Diferenciar eficácia, eficiência e satisfação.", "Reconhecer o papel do contexto de uso."],
    sections: [
      { heading: "Uma área que une várias outras", body: "A Interação Humano-Computador reúne computação, ergonomia, psicologia cognitiva e design. Ela olha para o sistema, mas principalmente para quem o usa: o que a pessoa sabe, o que quer fazer e em que situação está." },
      { heading: "Usabilidade segundo a ISO 9241-11", body: "A norma define usabilidade como o quanto um produto pode ser usado por determinadas pessoas para alcançar objetivos com eficácia, eficiência e satisfação, em um contexto específico. Ou seja: não existe interface “usável” de forma absoluta — depende de quem, para quê e onde." },
      { heading: "Eficácia, eficiência e satisfação", body: "Eficácia: a pessoa consegue concluir a tarefa? Eficiência: quanto esforço, tempo ou cliques foram necessários? Satisfação: como ela se sentiu durante e depois do uso?" },
      { heading: "O contexto muda tudo", body: "O mesmo aplicativo de banco pode ser fácil em casa e difícil no ônibus, com uma mão só, sob sol forte e com pressa. Projetar bem é considerar esses cenários reais." },
    ],
    comparison: {
      bad: { label: "Experiência ruim", points: ["Porta com puxador, mas que precisa ser empurrada.", "Aplicativo que esconde o botão de pagar em um menu.", "Mensagem de erro genérica: “Falha na operação”."] },
      good: { label: "Experiência boa", points: ["Porta com placa lisa onde se empurra.", "Ação principal visível na tela inicial.", "Mensagem clara: “Saldo insuficiente. Valor máximo: R$ 120,00”."] },
    },
    keyConcept: { term: "Usabilidade", text: "Eficácia + eficiência + satisfação, para pessoas reais, com objetivos reais, em um contexto real." },
    activity: {
      kind: "quiz", prompt: "Uma pessoa conseguiu transferir dinheiro, mas levou 8 minutos e ficou irritada. Qual aspecto da usabilidade falhou?",
      options: [
        { text: "Eficácia", correct: false, explanation: "A tarefa foi concluída, então a eficácia foi atendida." },
        { text: "Eficiência e satisfação", correct: true, explanation: "Exatamente: o objetivo foi alcançado, mas com esforço excessivo (eficiência) e frustração (satisfação)." },
        { text: "Nenhum, pois a transferência deu certo", correct: false, explanation: "Concluir a tarefa não basta: a ISO 9241-11 também considera esforço e satisfação." },
      ],
    },
  },
  {
    ...base, number: 2, slug: "boa-interface", title: "O que é uma boa interface?",
    short: "Cinco heurísticas de Jakob Nielsen para avaliar interfaces.",
    intro: "Heurísticas são regras práticas que ajudam a encontrar problemas de usabilidade sem precisar de laboratório. Vamos conhecer cinco das dez propostas por Jakob Nielsen.",
    objectives: ["Reconhecer cinco heurísticas de Nielsen.", "Identificar problemas em telas reais.", "Propor soluções baseadas nas heurísticas."],
    sections: [
      { heading: "Visibilidade do estado do sistema", body: "O sistema deve sempre informar o que está acontecendo. Barras de progresso, indicadores de “salvando…” e confirmações evitam que a pessoa fique sem saber se a ação funcionou." },
      { heading: "Correspondência com o mundo real", body: "Use palavras, ícones e conceitos familiares. Uma lixeira para excluir e uma lupa para buscar funcionam porque remetem a objetos conhecidos." },
      { heading: "Controle e liberdade do usuário", body: "Pessoas erram. Ofereça saídas claras: desfazer, cancelar, voltar." },
      { heading: "Consistência e padronização", body: "O mesmo elemento deve ter a mesma aparência e o mesmo comportamento em todo o sistema, seguindo convenções que as pessoas já conhecem." },
      { heading: "Prevenção de erros", body: "Melhor que uma boa mensagem de erro é impedir o erro: desabilitar datas inválidas em um calendário, pedir confirmação antes de ações destrutivas." },
    ],
    comparison: {
      bad: { label: "Problema", points: ["Arquivo enviado sem nenhum aviso de progresso.", "E-mail excluído sem opção de desfazer.", "Campo de data aceita 31/02."] },
      good: { label: "Solução", points: ["Barra mostrando “Enviando… 60%”.", "Aviso “E-mail excluído. Desfazer”.", "Calendário que só permite datas válidas."] },
    },
    keyConcept: { term: "Heurística", text: "Uma regra prática de avaliação. Não substitui testes com pessoas, mas encontra muitos problemas cedo e com baixo custo." },
    activity: {
      kind: "quiz", prompt: "Um site de passagens permite escolher a data de volta anterior à de ida e só avisa no final. Qual heurística foi mais violada?",
      options: [
        { text: "Prevenção de erros", correct: true, explanation: "Correto. O sistema deveria impedir datas de volta anteriores à ida já no calendário." },
        { text: "Correspondência com o mundo real", correct: false, explanation: "A linguagem e os ícones não são o problema aqui; o problema é permitir uma escolha inválida." },
        { text: "Consistência e padronização", correct: false, explanation: "Não há inconsistência visual descrita; a falha é não evitar o erro." },
      ],
    },
  },
  {
    ...base, number: 3, slug: "hierarquia-visual", title: "Hierarquia visual",
    short: "Gestalt, espaço em branco e organização de informações.",
    intro: "Antes de ler, nossos olhos escaneiam a tela procurando padrões. A hierarquia visual organiza esse caminho para que o importante seja visto primeiro.",
    objectives: ["Aplicar proximidade, similaridade e região comum.", "Usar espaço em branco de forma intencional.", "Reorganizar uma tela com hierarquia clara."],
    sections: [
      { heading: "Hierarquia de títulos e textos", body: "Tamanho, peso e posição indicam importância. Um título claro, seguido de subtítulos e textos menores, permite entender a página em segundos." },
      { heading: "Proximidade", body: "Elementos próximos parecem relacionados. Em um formulário, o rótulo deve ficar colado ao seu campo e afastado do campo seguinte." },
      { heading: "Espaço em branco", body: "Espaço vazio não é desperdício: ele separa grupos, dá respiro e direciona o olhar." },
      { heading: "Similaridade e região comum", body: "Elementos com a mesma cor ou forma parecem ter a mesma função. Uma borda ou fundo compartilhado (um card) agrupa conteúdos relacionados." },
    ],
    comparison: {
      bad: { label: "Desorganizada", points: ["Todos os textos com o mesmo tamanho.", "Campos espaçados igualmente, sem grupos.", "Botões de funções diferentes com a mesma aparência."] },
      good: { label: "Bem estruturada", points: ["Título destacado e subtítulos claros.", "Campos agrupados: “Dados pessoais”, “Endereço”.", "Ação principal destacada, secundária discreta."] },
    },
    keyConcept: { term: "Gestalt", text: "Princípios que descrevem como percebemos elementos como grupos: proximidade, similaridade, região comum e outros." },
    activity: {
      kind: "quiz", prompt: "Num formulário, o rótulo “E-mail” está à mesma distância do campo de e-mail e do campo de senha abaixo. O que melhorar?",
      options: [
        { text: "Aumentar o tamanho da fonte do rótulo", correct: false, explanation: "Tamanho não resolve a ambiguidade de qual campo o rótulo descreve." },
        { text: "Aproximar o rótulo do seu campo e afastar o próximo grupo", correct: true, explanation: "Isso aplica o princípio da proximidade: o que está perto é percebido como relacionado." },
        { text: "Trocar a cor do campo de senha", correct: false, explanation: "Cor pode ajudar, mas a causa é o espaçamento; corrija a proximidade primeiro." },
      ],
    },
  },
  {
    ...base, number: 4, slug: "cores-e-contraste", title: "Cores e contraste",
    short: "WCAG 2.2 AA e por que a cor não deve comunicar sozinha.",
    intro: "Um texto bonito que ninguém consegue ler não cumpre sua função. Contraste adequado beneficia todas as pessoas — especialmente quem tem baixa visão ou daltonismo, ou quem usa o celular sob o sol.",
    objectives: ["Conhecer as razões mínimas de contraste da WCAG 2.2 AA.", "Evitar comunicar informação apenas pela cor.", "Verificar contraste com ferramentas."],
    sections: [
      { heading: "Contraste entre texto e fundo", body: "O contraste é medido por uma razão entre a luminância das cores, de 1:1 (nenhum contraste) a 21:1 (preto no branco)." },
      { heading: "Recomendações WCAG 2.2 nível AA", body: "Texto comum: mínimo 4,5:1. Texto grande (a partir de 24 px, ou 18,66 px em negrito): mínimo 3:1. Componentes gráficos e bordas de controles necessários para entender a interface: mínimo 3:1." },
      { heading: "Cor para comunicar estados", body: "Vermelho para erro e verde para sucesso são convenções úteis — mas devem vir acompanhadas de texto ou ícone. Pessoas com daltonismo podem não distinguir essas cores." },
      { heading: "Ferramentas", body: "Verificadores de contraste, como o da WebAIM, e as ferramentas de desenvolvedor dos navegadores calculam a razão automaticamente." },
    ],
    comparison: {
      bad: { label: "Inadequado", points: ["Texto cinza-claro sobre branco (≈ 2:1).", "Campo com erro indicado só pela borda vermelha.", "Gráfico com linhas verde e vermelha sem legenda."] },
      good: { label: "Adequado", points: ["Texto cinza-escuro sobre branco (≥ 7:1).", "Borda vermelha + ícone + “Informe um e-mail válido”.", "Linhas com padrões diferentes e rótulos diretos."] },
    },
    keyConcept: { term: "4,5:1 e 3:1", text: "Os dois números-chave do nível AA: 4,5:1 para texto comum; 3:1 para texto grande e componentes visuais essenciais." },
    activity: {
      kind: "quiz", prompt: "Um botão “Enviar” tem texto de 16 px com contraste de 3,2:1 em relação ao fundo. Ele atende à WCAG 2.2 AA?",
      options: [
        { text: "Sim, pois é maior que 3:1", correct: false, explanation: "3:1 vale para texto grande. Texto de 16 px é texto comum e precisa de 4,5:1." },
        { text: "Não, pois texto comum precisa de pelo menos 4,5:1", correct: true, explanation: "Correto. Escureça o fundo ou ajuste a cor do texto até atingir 4,5:1." },
        { text: "Depende apenas da cor da marca", correct: false, explanation: "A identidade visual deve se adaptar aos critérios de contraste, não o contrário." },
      ],
    },
  },
  {
    ...base, number: 5, slug: "tipografia", title: "Tipografia em interfaces",
    short: "Hierarquia tipográfica, títulos semânticos e clamp().",
    intro: "Grande parte de qualquer interface é texto. Escolher e organizar bem a tipografia torna a leitura mais rápida e a estrutura compreensível também para leitores de tela.",
    objectives: ["Montar uma hierarquia tipográfica clara.", "Usar títulos h1 a h6 de forma semântica.", "Criar tamanhos fluidos com clamp() e bom line-height."],
    sections: [
      { heading: "Hierarquia tipográfica", body: "Defina poucos níveis bem diferentes entre si: título da página, títulos de seção, subtítulos e texto corrido. Diferenças sutis demais confundem." },
      { heading: "Títulos semânticos h1 a h6", body: "Use um único h1 por página e siga a ordem sem pular níveis. Leitores de tela permitem navegar pelos títulos — eles funcionam como um sumário." },
      { heading: "Tamanho e espaçamento entre linhas", body: "Texto corrido costuma ficar confortável entre 16 e 20 px, com line-height entre 1,5 e 1,7. Linhas muito longas (mais de ~80 caracteres) cansam a leitura." },
      { heading: "Tipografia responsiva com clamp()", body: "font-size: clamp(2rem, 5vw, 3.5rem) define um mínimo, um valor fluido e um máximo. O título cresce com a tela, sem ficar ilegível no celular nem gigante no monitor." },
    ],
    comparison: {
      bad: { label: "Mal estruturada", points: ["Títulos feitos com <div> em negrito.", "Pula de h1 para h4.", "Texto de 13 px com linhas coladas."] },
      good: { label: "Bem estruturada", points: ["h1 → h2 → h3 em ordem.", "Títulos com tamanho fluido via clamp().", "Texto de 18 px com line-height 1,6."] },
    },
    keyConcept: { term: "Semântica", text: "A aparência de um título é CSS; o significado é HTML. Leitores de tela dependem do significado." },
    activity: {
      kind: "quiz", prompt: "Qual estrutura de títulos é a mais adequada para uma página de aula?",
      options: [
        { text: "h1 título da aula → h2 seções → h3 subtópicos", correct: true, explanation: "Correto: um h1 e níveis em ordem formam um sumário navegável." },
        { text: "Vários h1, um para cada seção", correct: false, explanation: "Vários h1 dificultam entender qual é o tema principal da página." },
        { text: "h3 para tudo, porque o tamanho fica bonito", correct: false, explanation: "Escolha o nível pelo significado e ajuste o tamanho com CSS." },
      ],
    },
  },
  {
    ...base, number: 6, slug: "botoes-e-feedback", title: "Botões e feedback",
    short: "Estados de interação, área de toque e regiões ARIA live.",
    intro: "Um bom botão parece clicável, mostra o que vai acontecer e avisa o resultado. Sem feedback, a pessoa clica de novo, desiste ou fica insegura.",
    objectives: ["Projetar todos os estados de um botão.", "Respeitar a área mínima de interação.", "Anunciar mudanças com ARIA live."],
    sections: [
      { heading: "Botão ou decoração?", body: "Elementos interativos precisam parecer interativos (affordance). Evite deixar textos decorativos com aparência de botão — e botões com aparência de texto comum." },
      { heading: "Estados de interação", body: "Repouso, hover (ponteiro sobre), foco (teclado), pressionado, carregamento, sucesso e erro. Cada estado deve ser perceptível sem depender só da cor." },
      { heading: "Tamanho do alvo", body: "A WCAG 2.2 (critério 2.5.8, nível AA) pede alvos de pelo menos 24 × 24 px CSS, com exceções — por exemplo, quando há espaçamento suficiente ao redor ou o link está dentro de um texto. Para toque, alvos maiores (≈ 44 px) são mais confortáveis." },
      { heading: "Regiões ARIA live", body: "aria-live=\"polite\" anuncia a mudança quando o leitor de tela terminar o que está lendo — ideal para confirmações. \"assertive\" interrompe imediatamente — reserve para erros críticos. aria-atomic=\"true\" faz com que a mensagem inteira seja lida, não só o trecho alterado." },
    ],
    comparison: {
      bad: { label: "Sem feedback", points: ["Botão não muda ao receber foco.", "Clique sem nenhuma resposta visível.", "Ícone de 16 px sem área extra de toque."] },
      good: { label: "Com feedback", points: ["Contorno de foco bem visível.", "“Enviando…” e depois “Mensagem enviada”, anunciados via aria-live.", "Área de toque de 44 × 44 px."] },
    },
    keyConcept: { term: "aria-live", text: "Avisa tecnologias assistivas sobre mudanças dinâmicas na página. Use polite na maior parte dos casos." },
    activity: {
      kind: "checklist", prompt: "Pense em um botão “Salvar” de algum sistema que você usa. Quais estados ele apresenta?",
      items: ["Repouso claramente identificável", "Hover (muda ao passar o ponteiro)", "Foco visível ao navegar com Tab", "Pressionado", "Carregamento (“Salvando…”)", "Sucesso confirmado", "Erro explicado"],
    },
  },
  {
    ...base, number: 7, slug: "navegacao", title: "Navegação",
    short: "Menus, breadcrumbs, links versus botões e previsibilidade.",
    intro: "Boa navegação responde a três perguntas: onde estou, o que posso fazer aqui e como volto. Esta própria plataforma é um exemplo — observe o menu e a trilha no topo das aulas.",
    objectives: ["Organizar menus e páginas.", "Usar breadcrumbs e o elemento nav.", "Escolher corretamente entre link e botão."],
    sections: [
      { heading: "Menus e organização das páginas", body: "Agrupe conteúdos pelo modelo mental de quem visita, não pela estrutura interna da organização. Poucos itens, com nomes claros." },
      { heading: "Breadcrumbs", body: "A trilha “Início › Módulos › Módulo 7” mostra onde a pessoa está e permite voltar a qualquer nível com um clique." },
      { heading: "Links ou botões?", body: "Links levam a outro lugar (outra página ou seção). Botões executam ações (enviar, abrir menu, marcar como concluída). Usar o elemento certo garante o comportamento esperado com teclado e leitores de tela." },
      { heading: "O elemento nav", body: "Envolver menus em <nav> com um rótulo (aria-label=\"Principal\") permite que leitores de tela listem e pulem direto para as navegações." },
      { heading: "Reconhecer em vez de lembrar", body: "Mostre opções em vez de exigir que a pessoa memorize caminhos. Menus visíveis, item ativo destacado e títulos consistentes reduzem a carga de memória." },
    ],
    comparison: {
      bad: { label: "Pessoa perdida", points: ["Menu escondido sem indicação.", "Página atual não destacada.", "“Voltar” só pelo botão do navegador."] },
      good: { label: "Pessoa orientada", points: ["Menu visível com item ativo destacado.", "Breadcrumbs no topo.", "Links “Aula anterior” e “Próxima aula”."] },
    },
    keyConcept: { term: "Previsibilidade", text: "Elementos iguais no mesmo lugar, com o mesmo nome, em todas as páginas." },
    activity: {
      kind: "quiz", prompt: "Um elemento abre um menu suspenso na mesma página. Ele deve ser um link ou um botão?",
      options: [
        { text: "Link (<a>)", correct: false, explanation: "Links levam a outro destino. Abrir um menu é uma ação na página atual." },
        { text: "Botão (<button>)", correct: true, explanation: "Correto: é uma ação. Com aria-expanded, o botão também informa se o menu está aberto." },
        { text: "Tanto faz", correct: false, explanation: "Faz diferença: teclado, leitores de tela e expectativas de comportamento mudam conforme o elemento." },
      ],
    },
  },
  {
    ...base, number: 8, slug: "acessibilidade", title: "Acessibilidade digital",
    short: "Teclado, foco visível, texto alternativo, legendas e eMAG.",
    intro: "Acessibilidade é garantir que pessoas com deficiência, idosas, com conexões lentas ou em situações temporárias consigam usar o que construímos. Ela é parte do projeto desde o início.",
    objectives: ["Reconhecer barreiras de acesso comuns.", "Aplicar boas práticas de teclado, foco e textos alternativos.", "Avaliar uma interface com uma lista de verificação."],
    sections: [
      { heading: "Barreiras reais", body: "Pessoas cegas usam leitores de tela; pessoas com mobilidade reduzida podem usar só o teclado; pessoas surdas dependem de legendas; pessoas com deficiência cognitiva se beneficiam de linguagem simples." },
      { heading: "Teclado e foco visível", body: "Tudo que funciona com mouse deve funcionar com Tab, Shift+Tab, Enter e Espaço. O foco precisa ser sempre visível — nunca remova o contorno sem oferecer outro destaque." },
      { heading: "Textos alternativos", body: "Imagens informativas precisam de alt descrevendo a informação. Imagens decorativas recebem alt vazio (alt=\"\") para serem ignoradas." },
      { heading: "Linguagem simples, legendas e transcrições", body: "Frases curtas e palavras comuns ajudam todo mundo. Vídeos precisam de legendas e, idealmente, de transcrição em texto." },
      { heading: "Estrutura semântica e eMAG", body: "Títulos, listas, landmarks (header, nav, main, footer) e rótulos de formulário dão estrutura à página. O eMAG, modelo do governo brasileiro baseado nas WCAG, reúne recomendações práticas." },
    ],
    comparison: {
      bad: { label: "Com barreiras", points: ["Menu que só abre com mouse.", "Imagem de gráfico sem descrição.", "Vídeo sem legendas."] },
      good: { label: "Acessível", points: ["Menu operável por teclado com foco visível.", "Gráfico com alt e resumo em texto.", "Vídeo com legendas e transcrição."] },
    },
    keyConcept: { term: "Desenho inclusivo", text: "Soluções pensadas para necessidades específicas costumam melhorar a experiência de todas as pessoas." },
    activity: {
      kind: "checklist", prompt: "Lista de verificação: avalie uma página que você usa com frequência.",
      items: ["Consigo usar tudo apenas com o teclado", "O foco é sempre visível", "Imagens informativas têm texto alternativo", "Os títulos seguem uma ordem lógica", "Campos de formulário têm rótulos visíveis", "O texto tem contraste suficiente", "Vídeos têm legendas", "A linguagem é simples e direta", "Funciona com zoom de 200% sem perder conteúdo"],
    },
  },
  {
    ...base, number: 9, slug: "dark-patterns", title: "Dark Patterns",
    short: "Padrões manipulativos e alternativas éticas.",
    intro: "Dark patterns são escolhas de design feitas para levar as pessoas a decisões que não tomariam livremente. Elas podem até gerar resultados de curto prazo, mas destroem a confiança.",
    objectives: ["Identificar Roach Motel, Confirmshaming, Misdirection e Forced Continuity.", "Explicar o dano de cada padrão.", "Propor alternativas transparentes."],
    sections: [
      { heading: "Roach Motel", body: "Fácil entrar, difícil sair: a assinatura é feita em um clique, mas o cancelamento exige ligação em horário comercial. Alternativa ética: cancelar deve ser tão simples quanto assinar." },
      { heading: "Confirmshaming", body: "Mensagens que constrangem: “Não, prefiro continuar desinformado”. Alternativa ética: “Não, obrigado”." },
      { heading: "Misdirection", body: "O visual desvia a atenção: o botão “Aceitar tudo” é grande e colorido; “Recusar” é um link cinza minúsculo. Alternativa ética: opções com o mesmo peso visual." },
      { heading: "Forced Continuity", body: "O período gratuito vira cobrança sem aviso claro. Alternativa ética: avisar antes da cobrança e oferecer cancelamento simples." },
    ],
    comparison: {
      bad: { label: "Manipulador", points: ["“Não, prefiro pagar mais caro.”", "Cancelamento só por telefone.", "Cobrança automática sem aviso."] },
      good: { label: "Ético", points: ["“Não, obrigado.”", "Botão “Cancelar assinatura” na conta.", "E-mail 3 dias antes da cobrança."] },
    },
    keyConcept: { term: "Autonomia", text: "Uma interface ética facilita a decisão da pessoa — inclusive quando a decisão é dizer não." },
    activity: {
      kind: "quiz", prompt: "Um pop-up oferece desconto com os botões “Quero economizar!” (grande, verde) e “não gosto de ofertas” (pequeno, cinza). Quais padrões aparecem?",
      options: [
        { text: "Confirmshaming e Misdirection", correct: true, explanation: "Correto: o texto da recusa constrange (confirmshaming) e o peso visual desigual desvia a atenção (misdirection)." },
        { text: "Roach Motel", correct: false, explanation: "Roach Motel envolve dificuldade para sair de um serviço, o que não é o caso aqui." },
        { text: "Nenhum, é só marketing", correct: false, explanation: "A forma de apresentar as opções manipula a decisão; por isso é um dark pattern." },
      ],
    },
  },
  {
    ...base, number: 10, slug: "construindo-uma-interface", title: "Construindo uma interface na prática",
    short: "Atividade prática: um formulário de satisfação acessível.",
    intro: "Hora de aplicar tudo: semântica, hierarquia, contraste, estados, feedback e acessibilidade em um pequeno formulário de satisfação com três opções.",
    objectives: ["Estruturar um formulário com fieldset e legend.", "Estilizar estados de hover e foco.", "Validar e anunciar o resultado com aria-live=\"polite\"."],
    sections: [
      { heading: "Estrutura semântica", body: "Use <form>, um <fieldset> com <legend> fazendo a pergunta e três <input type=\"radio\"> com o mesmo name, cada um com seu <label>. Assim só uma opção pode ser escolhida e leitores de tela anunciam a pergunta." },
      { heading: "Organização visual e estados", body: "Apresente as opções lado a lado em áreas grandes e clicáveis. Mostre hover, foco visível e a opção selecionada com borda e cor — nunca só com cor." },
      { heading: "Validação e mensagem de retorno", body: "Ao enviar, verifique se há uma opção marcada. Se não houver, explique o erro. Se houver, mostre “Obrigado pelo seu feedback”. Coloque as mensagens em uma região aria-live=\"polite\" para que sejam anunciadas." },
    ],
    comparison: {
      bad: { label: "Frágil", points: ["Três <div> clicáveis sem rótulo.", "Envia vazio sem avisar.", "Agradecimento só visual."] },
      good: { label: "Robusto", points: ["Radios com label dentro de fieldset.", "Erro claro ao enviar vazio.", "Mensagem anunciada por aria-live."] },
    },
    keyConcept: { term: "Progressive enhancement", text: "Comece pelo HTML semântico; depois adicione CSS e JavaScript. A base continua funcionando." },
    activity: {
      kind: "quiz", prompt: "Por que usar input type=\"radio\" e não checkbox para as três opções?",
      options: [
        { text: "Porque radio permite escolher só uma opção do grupo", correct: true, explanation: "Correto: radios com o mesmo name são mutuamente exclusivos, como pede a pergunta." },
        { text: "Porque checkbox não é acessível", correct: false, explanation: "Checkboxes são acessíveis, mas permitem várias escolhas — não é o caso aqui." },
        { text: "Porque radio é mais bonito", correct: false, explanation: "A aparência se ajusta com CSS; a escolha é pelo comportamento." },
      ],
    },
  },
];

export const getModule = (slug: string) => MODULES.find((m) => m.slug === slug);
