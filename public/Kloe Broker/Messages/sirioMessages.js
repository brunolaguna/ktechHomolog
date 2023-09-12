const client = '{Cliente}'
const eventName = '{Nome do evento}'

var sirioTemplates = [
  {
    "elementname": "ficha_abandonada",
    "body": `📢 COMUNICADO FACULDADE SÍRIO-LIBANÊS 📢 \nParabéns, ${client}! \nVocê iniciou sua inscrição no nosso processo seletivo e deu o primeiro passo em direção ao seu futuro acadêmico e profissional. \nMas percebemos que ainda não concluiu sua inscrição e, para garantir sua vaga, é necessário completar o formulário de inscrição com todos os seus dados e realizar o pagamento da taxa. \nSe ainda tem dúvida, vamos te lembrar os #5motivos que traduzem nossa excelência: \n➡️ Atividades práticas em ambientes reais;\n➡️ Visitas técnicas a diferentes serviços de saúde; \n➡️ Estrutura moderna, com tecnologia avançada; \n➡️ Mentoria com experts em suas áreas; \n➡️ Programa de empreendedorismo e internacionalização. \nPor isso, não perca essa oportunidade. Atente-se ao período de inscrições e conclua seu formulário agora mesmo pelo link: https://faculdadesiriolibanes.org.br/como-ingressar \nSe preferir, responda essa mensagem que teremos uma equipe pronta para te ajudar. \nEsperamos por você em breve na Faculdade Sírio-Libanês!`,
  },
  {
    "elementname": "inscrito_incompleto",
    "body": `📢 COMUNICADO FACULDADE SÍRIO-LIBANÊS 📢 \nParabéns, ${client}! \nVocê iniciou sua inscrição no nosso processo seletivo e deu o primeiro passo em direção ao seu futuro acadêmico e profissional.\nMas percebemos que ainda não concluiu sua inscrição e, para garantir sua vaga, é necessário completar o formulário de inscrição com todos os seus dados e realizar o pagamento da taxa.\nSe ainda tem dúvida, vamos te lembrar os #5motivos que traduzem nossa excelência:\n➡️ Atividades práticas em ambientes reais;\n➡️ Visitas técnicas a diferentes serviços de saúde;\n➡️ Estrutura moderna, com tecnologia avançada;\n➡️ Mentoria com experts em suas áreas;\n➡️ Programa de empreendedorismo e internacionalização.\nPor isso, não perca essa oportunidade. Atente-se ao período de inscrições e conclua seu formulário agora mesmo. Basta acessar nosso site, clicar em “Inscreva-se” e inserir seus dados: https://faculdadesiriolibanes.org.br/como-ingressar Se preferir, responda essa mensagem que teremos uma equipe pronta para te ajudar.\nEsperamos por você em breve na Faculdade Sírio-Libanês!`,
  },
  {
    "elementname": "inscrito_nao_pago",
    "body": `📢 COMUNICADO FACULDADE SÍRIO-LIBANÊS 📢 \nParabéns, ${client}! Você iniciou sua inscrição no nosso processo seletivo e deu o primeiro passo em direção ao seu futuro acadêmico e profissional.\nMas ainda não identificamos o pagamento da sua taxa de inscrição. Ele é necessário para garantir a sua vaga.\nPara escolher a forma de pagamento mais conveniente para você, acesse nosso site, clique em “Inscreva-se” e insira seus dados para ser redirecionado à etapa de pagamento: https://faculdadesiriolibanes.org.br/como-ingressar\nSe ainda ficou alguma dúvida, vamos te lembrar os #5motivos que traduzem nossa excelência:\n➡️ Atividades práticas em ambientes reais;\n➡️ Visitas técnicas a diferentes serviços de saúde;\n➡️ Estrutura moderna, com tecnologia avançada;\n➡️ Mentoria com experts em suas áreas;\n➡️ Programa de empreendedorismo e internacionalização.\nNão perca essa oportunidade. Atente-se ao período de inscrições e conclua seu pagamento. Se preferir, responda essa mensagem que teremos uma equipe pronta para te ajudar.\nEsperamos por você em breve na Faculdade Sírio-Libanês!`,
  },
  {
    "elementname": "pos_evento",
    "body": `Olá!\n\nSomos da Faculdade Sírio Libanês!\nFicamos muito felizes com a sua presença no ${eventName}. 😍🤩\n\nFoi ótimo compartilhar um pouco sobre a Faculdade Sírio-Libanês com você. \nDesejamos que esse seja só o início de uma longa jornada juntos!\n\nSe você já decidiu qual carreira deseja seguir conosco, aproveite as inscrições abertas no processo seletivo. Acesse: https://faculdadesiriolibanes.org.br/como-ingressar\n \nPossui alguma dúvida sobre a faculdade ou sobre os nossos cursos?\nMande um oi pra gente 😃\n\nEsperamos te ver em breve em nossos corredores!`,
  },
  {
    "elementname": "convite_portas_abertas",
    "body": `Olá! 😉\nVocê é nosso convidado especial para participar do evento PORTAS ABERTAS, que acontecerá dia 17/09, das 9h às 13h.\nSerá uma manhã repleta de atividades para você conhecer tudo o que a Faculdade Sírio-Libanês tem para oferecer. Confira o que te espera nesse dia:\n➡ Palestras inspiradoras com convidados do mercado\n➡ Circuito com atividades práticas dos cursos de Enfermagem, Fisioterapia e Psicologia\n➡ Bate-papo com pais\n➡ Interatividade, brindes e surpresas\nTudo isso com um delicioso café da manhã!\n\nAs vagas são limitadas. Cadastre-se e participe: https://faculdadesiriolibanes.org.br/eventos/portas-abertas\nNos vemos lá! 💙`,
  },
  {
    "elementname": "lembrete_portas_abertas",
    "body": `Olá! ☺\nViemos te lembrar que o evento Portas Abertas Faculdade Sírio-Libanês está chegando e nós estamos ansiosos para te receber!\nANOTA AÍ:\nDia: 17/09/2023\nHorário: das 9h às 13h\nLocal: Sírio-Libanês Ensino e Pesquisa (Rua Prof. Daher Cutait, 69 – Bela Vista, São Paulo) \n\nSerá uma oportunidade única para você, sua família e amigos conhecerem a fundo nossa instituição, cursos e metodologia, além de poder tirar dúvidas do processo seletivo, interagir com a nossa diretoria e outros candidatos.\nSe ainda não garantiu a sua vaga, aproveite e cadastre-se já: https://faculdadesiriolibanes.org.br/eventos/portas-abertas\nVocê não pode perder! 😎`,
  },
  {
    "elementname": "amanha_portas_abertas",
    "body": `É amanhã! 🙂\nEstamos com tudo pronto para te receber no Portas Abertas Faculdade Sírio-Libanês, a partir das 9h, no Sírio-Libanês Ensino e Pesquisa (Rua Prof. Daher Cutait, 69 – Bela Vista, São Paulo).\nConfira essas dicas para garantir uma experiência incrível:\n➡ Não se esqueça, aos domingos a Av. Paulista é interditada, portanto dê preferência ao transporte público: estamos localizados à poucos metros da estação de metrô Trianon-Masp\n➡ Caso prefira vir de carro, teremos vallet no local\n➡ Não esqueça de levar um documento original com foto (RG) para seu credenciamento\n➡ Você poderá levar apenas um acompanhante\n➡ E o mais importante: não tome café da manhã, as comidinhas são por nossa conta!\nEsperamos você. Até lá! `,
  }
]

export { sirioTemplates }