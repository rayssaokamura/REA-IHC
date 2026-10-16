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
  }
];

export interface UpcomingModuleCard {
  number: number;
  slug: string;
  title: string;
  short: string;
}

// Os módulos 4 a 10 aparecem apenas como cards informativos, sem conteúdo de aula.
export const UPCOMING_MODULES: UpcomingModuleCard[] = [
  { number: 4, slug: "cores-e-contraste", title: "Cores e contraste", short: "WCAG 2.2 AA e por que a cor não deve comunicar sozinha." },
  { number: 5, slug: "tipografia", title: "Tipografia em interfaces", short: "Hierarquia tipográfica, títulos semânticos e clamp()." },
  { number: 6, slug: "botoes-e-feedback", title: "Botões e feedback", short: "Estados de interação, área de toque e regiões ARIA live." },
  { number: 7, slug: "navegacao", title: "Navegação", short: "Menus, breadcrumbs, links versus botões e previsibilidade." },
  { number: 8, slug: "acessibilidade", title: "Acessibilidade digital", short: "Teclado, foco visível, texto alternativo, legendas e eMAG." },
  { number: 9, slug: "dark-patterns", title: "Dark Patterns", short: "Padrões manipulativos e alternativas éticas." },
  { number: 10, slug: "construindo-uma-interface", title: "Construindo uma interface na prática", short: "Atividade prática: um formulário de satisfação acessível." },
];
