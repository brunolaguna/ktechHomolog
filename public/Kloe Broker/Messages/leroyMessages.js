const address = '{Endereço}'
const amount = '{Quantidade}'
const agent = `{Agente}`
const client = '{Cliente}'
const date = '{Data}'
const hour = '{Hora(s)}'
const link = '{Link}'
const orderNumber = '{Pedido}'
const protocolNumber = `{Protocolo}`
const servico_instalacao = '{Servico_instalacao}'
const solicitacao = '{Solicitação}'
const store = '{Loja}'
const trys = `{Tentativas}`
const weekday = '{Dia da semana}'
const phoneNumber = `{Número de telefone}`
const contact = `{Contato}`

var leroyTemplates = [
  {
    "elementname": "agendada_entrega1",
    "body": `Olá, ${client} estou passando para lembrar que seu pedido nº ${orderNumber} está com entrega agendada para dia ${date}. Acompanhe a sua entrega através do rastreamento: ${link}`,
    "namespace": "f994ee77-c816-4dd5-8797-0aedf55b5dfb"
  },
  {
    "elementname": "reembolso_pedido",
    "body": `Olá ${client}, tudo bem? \nPara darmos continuidade ao processo de reembolso, precisamos de alguns dados para efetuarmos o seu reembolso.\nBanco para depósito:\nAgência:\nConta:\nAgência:\nTipo de Conta: ( ) Corrente; ( ) Poupança:\nNome completo do titular da conta (titular da conta deve ser o mesmo titular da compra):\nEm anexo - Comprovante bancário (documento que contenha agência, conta e nome do titular da conta/compra).`,
    "namespace": "cdd386e5-1acd-423a-9c87-8338b9a66314"
  },
  {
    "elementname": "protocolo_solicitacao",
    "body": `Olá ${client}! Informamos que a sua solicitação Protocolo n ° ${orderNumber}, já está em andamento e assim que tivermos um posicionamento, entraremos em contato por telefone, WhatsApp ou e-mail.`,
    "namespace": "01074406-48da-4a4a-9ac8-e537e0843325"
  },
  {
    "elementname": "cliente_ausente",
    "body": `Tentamos efetuar sua entrega hoje, mas sem sucesso, nosso motorista informou que não tinha ninguém no local. Iremos efetuar uma nova tentativa de entrega dia ${date}.`,
    "namespace": "073eaaa1-f84c-4aa8-bf61-6a68f3274635"
  },
  {
    "elementname": "tentativa_entrega",
    "body": `Olá ${client}! Tentamos efetuar sua entrega do seu pedido n° ${orderNumber} hoje, mas sem sucesso, nosso motorista informou que não tinha ninguém no local. Iremos efetuar uma nova tentativa de entrega dia ${date}.`,
    "namespace": "9d3a65e0-0502-4e9a-b5ba-25fe3f73df00"
  },
  {
    "elementname": "horario_atendimento",
    "body": "⚠️ Nosso horário de atendimento no WhatsApp, Televendas e na Central de Atendimento é das 8:00 às 19:00 de segunda à sábado, exceto feriados. ⚠️\nMas não se preocupe, você poderá realizar suas compras, acompanhar pedido em andamento ou consultar informações sobre o funcionamento das nossas lojas em nosso site https://www.leroymerlin.com.br/.",
    "namespace": "a4292bb9-4f3b-49bd-9ef6-91c628cd9ba2"
  },
  {
    "elementname": "confirmacao_instalacao",
    "body": `Olá ${client}, tudo bem? Sou da Leroy Merlin! Posso confirmar seu serviço de instalação conosco?`,
    "namespace": "dc8b0d8d-1c7d-4177-b182-dccbaf820d99"
  },
  {
    "elementname": "contato_finalizado",
    "body": "O seu contato foi finalizado. Mas fique tranquilo, sempre que precisar estamos à disposição para atendê-lo. A Leroy Merlin agradece!",
    "namespace": "9b422d8b-a34a-4ce4-9b08-bff0206c0a5a"
  },
  {
    "elementname": "instalacao_confirmacao", // Atencao!!
    "body": `Olá ${client}, tudo bem? Sou da Leroy Merlin! Posso confirmar seu serviço de instalação ${servico_instalacao} conosco?`,
    "namespace": "a31442ce-bdba-4243-99fd-2e4d4a020a57"
  },
  {
    "elementname": "pedido_reagendamento_entrega1",
    "body": `Olá ${client}, tudo bem? \nTivemos um imprevisto com o seu pedido ${orderNumber}. \nMas não se preocupe, a nova data de entrega será até o dia ${date}. Acesse o link de rastreio e acompanhe a sua entrega. ${link}`,
    "namespace": "75d0081c-4dbc-45e4-92b2-1056cb86bd0f"
  },
  {
    "elementname": "saudacao",
    "body": `Olá ${client}, Bem-vindo à Leroy Merlin. Eu sou ${agent} e estou aqui para te ajudar!`,
    "namespace": "7b361da4-1363-48e0-98b3-1299725f042d"
  },
  {
    "elementname": "horario_atendimento_encerrado",
    "body": "Olá, eu sou o assistente virtual da Leroy Merlin o nosso horario de atendimento foi encerrado. Podemos retomar o contato assim que estivermos disponíveis? \nDigite 1 Para receber o nosso contato \nDigite 2 para finalizar esse atendimento.",
    "namespace": "e46b78e3-602c-458d-beb3-da4a405e4c38"
  },
  {
    "elementname": "retorno_pedido_base",
    "body": `Olá ${client}, tudo bem? \nNão encontramos ninguém no local de entrega e o pedido retornou para a nossa base. \nIremos realizar mais ${trys} tentativas, e gostaríamos de saber qual o melhor dia. \nAguardamos o seu retorno!`,
    "namespace": "c5dee8f4-29e6-4af2-9f6a-7e9e8bfd2ab5"
  },
  {
    "elementname": "protocolo_",
    "body": `Olá ${client}, tudo bem? \nMeu nome é ${agent} e gostaria de falar sobre o protocolo ${protocolNumber}. \nAguardamos o seu retorno, estamos à disposição para melhor atendê-la (o).`,
    "namespace": "822a1fdd-3aa6-4d0d-900f-2781c0dc5e4d"
  },
  {
    "elementname": "cadastro_pendente1",
    "body": `Olá ${client}! Aqui é da Leroy Merlin, tudo bem? \nVerificamos que você possui um cadastro pendente para se tornar um parceiro INSTALA. \nCaso ainda tenha interesse em continuar o cadastro, acesse o Portal do Prestador e dê sequência na documentação pendente. ${orderNumber}`,
    "namespace": "6957cd07-8811-45df-92a5-31614de83418"
  },
  {
    "elementname": "confirmacao_de_entrega",
    "body": `Gostaríamos de saber se o seu pedido ${orderNumber} já foi entregue?`,
    "namespace": "08bcf265-6661-469c-9a89-eeb08af08135"
  },
  {
    "elementname": "status_entrega",
    "body": `Olá ${client}! Gostaríamos de saber se o seu pedido n° ${orderNumber} já foi entregue?`,
    "namespace": "c7b97222-65cb-4c69-937b-e3cb5c27bdcb"
  },
  {
    "elementname": "imprevisto_entrega1",
    "body": `Olá ${client}, tudo bem? \nTivemos um imprevisto com o seu pedido ${orderNumber}. \nMas não se preocupe, a nova data de entrega será ${date}.`,
    "namespace": "71e041f3-840d-4b30-b6a5-7fc190a54628"
  },
  {
    "elementname": "inatividade",
    "body": "Oi, ainda está por aí?! \nSe estiver envie uma mensagem, caso contrário o contato será encerrado dentro de 2 minutos. Mas fique tranquilo, sempre que precisar estamos à disposição para atendê-lo.",
    "namespace": "df652a28-0100-447e-ac4c-c0b8ae879ae4"
  },
  {
    "elementname": "caso_em_tratativa",
    "body": `Informamos que a sua solicitação ${solicitacao}, já está em andamento e assim que tivermos um posicionamento, entraremos em contato por telefone, WhatsApp ou E-mail.`,
    "namespace": "63290548-a599-460f-9306-5cf3f154216f"
  },
  {
    "elementname": "recebimento_pedido",
    "body": `Olá ${client}, tudo bem? \nEstamos no local para finalizar a entrega do seu pedido ${orderNumber}.\nGostaríamos de saber se tem alguém que possa receber?`,
    "namespace": "1d3e6f67-de59-4ad8-8376-4bc906517f08"
  },
  {
    "elementname": "troca_devolucao_pedido",
    "body": `Olá ${client}, tudo bem? \nPoderia nos encaminhar fotos/vídeos do produto avariado? \nAguardamos o seu retorno para podermos dar continuidade ao seu pedido de troca/devolução.`,
    "namespace": "b327c02e-ed38-4cc4-97de-e7a4d453280a"
  },
  {
    "elementname": "link_acompanhamento_marketplace",
    "body": `Olá ${client}, tudo bem? \nTivemos um imprevisto com o seu pedido ${orderNumber}. \nMas não se preocupe, a nova data de entrega será até o dia ${date}. Acesse o link de rastreio e acompanhe a sua entrega. ${link}`,
    "namespace": "86c78e6c-ee54-4bd9-ae6b-5c842d4e8a93"
  },
  {
    "elementname": "continue_from_optin",
    "body": "Olá, você entrou em contato por um de nossos canais de atendimento. Para dar continuidade agora, responda à essa mensagem.",
    "namespace": "40fb8703-dd4a-40c3-ab7c-6313827ba65c"
  },
  {
    "elementname": "pedido_reagendamento_entrega",
    "body": `Olá ${client}, tudo bem? \nTivemos um imprevisto com o seu pedido ${orderNumber} \nMas não se preocupe, a nova data de entrega será até o dia ${date}.`,
    "namespace": "ba1a118e-d758-4a42-a3e0-8fbdf83caf85"
  },
  {
    "elementname": "entrega_agendada",
    "body": `Olá ${client}, estou passando para lembrar que seu pedido nº ${orderNumber} está com entrega agendada para dia ${date}. Você poderá receber? Como esta é uma mensagem automática, peço que responda apenas Sim ou Não. \nMas fique tranquilo, caso não consiga receber faremos a entrega no próximo dia útil.`,
    "namespace": "60055f28-74de-45cb-ad18-454f02fd5c27"
  },
  {
    "elementname": "compreendido",
    "body": "Obrigada pela compreensão! Retomaremos o contato durante o horario de atendimento.",
    "namespace": "f701c67e-4ab7-48f2-b928-5b450bd75dbb"
  },
  {
    "elementname": "pedido_retirada",
    "body": `Olá ${client}, seu pedido ${orderNumber} já está disponível para retirada! \nPara retirá-lo basta comparecer na loja ${store}, endereço: ${address}`,
    "namespace": "28c19e2a-a096-4dd5-bf01-30c138ccb3e2"
  },
  {
    "elementname": "reagendamento_entrega",
    "body": `Olá ${client}, tudo bem? Recebemos sua solicitação referente ao pedido ${orderNumber}. A nova data de entrega será ${date}. Atenciosamente.`,
    "namespace": "b28a8aff-6dce-4fbe-ac4f-b9d1063c1169"
  },
  {
    "elementname": "continuacao_atendimento",
    "body": `Olá ${client}, aqui é ${agent}. Podemos continuar seu atendimento aqui pelo WhatsApp.`,
    "namespace": "071fd265-c913-43c9-8dd5-5a6ceeeaa750"
  },
  {
    "elementname": "imprevisto_pedido",
    "body": `Olá ${client}, tudo bem? \nTivemos um imprevisto com o seu pedido 🙁 \nMas não se preocupe, a nova data de entrega será ${date}.`,
    "namespace": "6bff4b41-669d-43ba-acc6-ece5c39d952e"
  },
  {
    "elementname": "link_acompanhamento_marketplace1",
    "body": `Olá ${client}, tudo bem? \nTivemos um imprevisto com o seu pedido ${orderNumber}. \nMas não se preocupe, a nova data de entrega será até o dia ${date}.`,
    "namespace": "2fe98e86-f412-412a-9466-386b9d92097d"
  },
  {
    "elementname": "finalizacao_atendimento",
    "body": `Até logo ${client} foi um prazer atendê-lo. A Leroy Merlin agradece o seu contato! \nPor gentileza, peço que aguarde para avaliar o meu atendimento.`,
    "namespace": "dd2880a6-c7ff-4af8-98e8-ceaa2d577c0c"
  },
  {
    "elementname": "acompanhamento_pedido",
    "body": `Olá ${client}, seu pedido ${orderNumber} já está à caminho da sua residência! \nA data de entrega prevista é para o dia: ${date} \nAcompanhe a sua entrega através do rastreamento: ${link} `,
    "namespace": "452b6077-1323-4fe7-b0e9-5be73ee2e96e"
  },
  {
    "elementname": "data_pedido",
    "body": `Olá ${client}, tudo bem? Recebemos sua solicitação referente o pedido${orderNumber}. A nova data de entrega será ${date}.`,
    "namespace": "671719f8-1d29-4c92-be8f-ee1178f865d8"
  },
  {
    "elementname": "continue_from_livechat",
    "body": `Olá ${client}, aqui é ${agent}. Podemos continuar o seu atendimento aqui pelo WhatsApp?`,
    "namespace": "b710e91f-fdfa-41e7-b260-29a4072f28a1"
  },
  {
    "elementname": "agendada_entrega",
    "body": `Olá ${client}, estou passando para lembrar que seu pedido nº ${orderNumber} está com entrega agendada para dia ${date}. Você poderá receber? Como esta é uma mensagem automática, peço que responda apenas *Sim* ou *Não*. \nMas fique tranquilo, caso não consiga receber faremos a entrega no próximo dia útil.`,
    "namespace": "44bbfe79-aef2-4d60-ab3d-6711d9abcc68"
  },
  {
    "elementname": "pedido",
    "body": `Olá ${client} tudo bem? \nMeu nome é ${agent} e gostaria de falar sobre seu pedido ${orderNumber}. \nAguardamos o seu retorno, estamos a disposição para melhor atendê-la (o).`,
    "namespace": "e37820c4-1841-4107-9720-b6d7fb34e7e0"
  },
  {
    "elementname": "fora_de_horario",
    "body": "Olá, tudo bem? \nIdentificamos que você entrou em contato fora do nosso Horário de Atendimento, em que podemos auxiliar em sua compra?",
    "namespace": "50878b72-f6a7-4c7a-8171-7fa54b79f39d"
  },
  {
    "elementname": "coleta_pedido",
    "body": `Olá ${client}, meu nome é ${agent} e gostaria de falar sobre a coleta do seu pedido. Agendamos com a transportadora a coleta no dia ${date} em horário comercial.`,
    "namespace": "a7901931-7250-4564-9eb7-0ab08632593f"
  },
  {
    "elementname": "pontos_expiram",
    "body": `Olá ${client}! \nSeus ${amount} pontos Leroy Merlin Com Você expiram neste mês. Vá até uma de nossas lojas ou acesse nosso site / app e troque por DESCONTO agora mesmo!`,
    "namespace": "ca61f0d9-f3c9-4dba-8a24-fb39051cc48d"
  },
  {
    "elementname": "cadastro_instala1",
    "body": `Olá ${client}! \nAqui é da Leroy Merlin, tudo bem? \nVerificamos que você possui um cadastro pendente para se tornar um parceiro INSTALA. Caso ainda tenha interesse em continuar o cadastro, acesse o Portal do Prestador e dê sequência na documentação pendente. ${link}`,
    "namespace": "9fe280e2-f39f-40cd-a4eb-8c1609a72dd5"
  },
  {
    "elementname": "pedido_agendamento",
    "body": `Olá, ${client} estou passando para lembrar que seu pedido nº ${orderNumber} está com entrega agendada para dia ${date}.`,
    "namespace": "e0fc2958-9243-4f59-a2a9-318aa415da80"
  },
  {
    "elementname": "convite_instala",
    "body": `*CONVITE LEROY MERLIN INSTALA*\nEstamos em busca de parceiros, venha nos conhecer!\n*São alguns dos benefícios do Leroy Merlin Instala:*\nCadastro e oferta de serviços gratuitas pelo app;\nPossibilidade de ter um aumento de renda;\nAutonomia para definir os dias e períodos em que irá trabalhar;\nGaranta o seu crescimento profissional se associando à marca.\n*HORÁRIOS E DATAS*\n${date} ${weekday}\n${amount} turma (s)\n${hour} e ${hour}\n*ENDEREÇO*\n${address}`,
    "namespace": "b713e3ae-eda5-464f-a4bc-82f67abf8323"
  },
  {
    "elementname": "convite_instala_2",
    "body": `Esta é uma oportunidade única para o seu negócio!\n\n*LEROY MERLIN INSTALA*\n\nEstamos em busca de parceiros, venha nos conhecer!\nSão alguns dos benefícios do Leroy Merlin Instala:\nCadastro e oferta de serviços gratuitos pelo app;\nPossibilidade de ter um aumento de renda;\nAutonomia para definir os dias e períodos em que irá trabalhar;\nGaranta o seu crescimento profissional se associando à marca LEROY MERLIN\n \n*Para mais informações entre em contato: ${phoneNumber} ${contact}*\n \n*Não perca essa oportunidade!*\n \n${date} \n${hour}\n${address}`,
    "namespace": "9ebe7041-2370-420e-85dc-48b7dd5e668a"
  }
]

export { leroyTemplates }