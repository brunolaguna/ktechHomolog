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
    "elementname": "convite_portas_abertas",
    "body": `${client} Olá! 😉\nVocê é nosso convidado especial para participar do evento PORTAS ABERTAS, que acontecerá dia 17/09, das 9h às 13h.\nSerá uma manhã repleta de atividades para você conhecer tudo o que a Faculdade Sírio-Libanês tem para oferecer. Confira o que te espera nesse dia:\n➡ Palestras inspiradoras com convidados do mercado\n➡ Circuito com atividades práticas dos cursos de Enfermagem, Fisioterapia e Psicologia\n➡ Bate-papo com pais\n➡ Interatividade, brindes e surpresas\nTudo isso com um delicioso café da manhã!\n\nAs vagas são limitadas. Cadastre-se e participe: https://faculdadesiriolibanes.org.br/eventos/portas-abertas\nNos vemos lá! 💙`,
  },
  {
    "elementname": "lembrete_portas_abertas",
    "body": `${client} Olá! ☺\nViemos te lembrar que o evento Portas Abertas Faculdade Sírio-Libanês está chegando e nós estamos ansiosos para te receber!\nANOTA AÍ:\nDia: 17/09/2023\nHorário: das 9h às 13h\nLocal: Sírio-Libanês Ensino e Pesquisa (Rua Prof. Daher Cutait, 69 – Bela Vista, São Paulo) \n\nSerá uma oportunidade única para você, sua família e amigos conhecerem a fundo nossa instituição, cursos e metodologia, além de poder tirar dúvidas do processo seletivo, interagir com a nossa diretoria e outros candidatos.\nSe ainda não garantiu a sua vaga, aproveite e cadastre-se já: https://faculdadesiriolibanes.org.br/eventos/portas-abertas\nVocê não pode perder! 😎`,
  },
  {
    "elementname": "amanha_portas_abertas",
    "body": `${client}, é amanhã! 🙂\nEstamos com tudo pronto para te receber no Portas Abertas Faculdade Sírio-Libanês, a partir das 9h, no Sírio-Libanês Ensino e Pesquisa (Rua Prof. Daher Cutait, 69 – Bela Vista, São Paulo).\nConfira essas dicas para garantir uma experiência incrível:\n➡ Não se esqueça, aos domingos a Av. Paulista é interditada, portanto dê preferência ao transporte público: estamos localizados à poucos metros da estação de metrô Trianon-Masp\n➡ Caso prefira vir de carro, teremos vallet no local\n➡ Não esqueça de levar um documento original com foto (RG) para seu credenciamento\n➡ Você poderá levar apenas um acompanhante\n➡ E o mais importante: não tome café da manhã, as comidinhas são por nossa conta!\nEsperamos você. Até lá! `,
  },
  {
    "elementname": "acao_100_off",
    "body": `PORTAS ABERTAS | FACULDADE SÍRIO-LIBANÊS\n${client}, temos o prazer de anunciar a participação de uma convidada especial no nosso evento: Thelma Assis. A renomada médica, apresentadora e influenciadora fará parte da nossa programação, com uma palestra pra lá de inspiradora!\nNosso encontro está marcado para: 17/09 (domingo), das 9h às 13h. \nSerá uma manhã repleta de atividades para conhecer tudo o que a Faculdade Sírio-Libanês tem para oferecer. \nE mais: teremos condições exclusivas de inscrição para os participantes do evento! \nConvide seus amigos e cadastre-se gratuitamente pelo link: https://faculdadesiriolibanes.org.br/eventos/portas-abertas\nVocê não pode perder. Até lá! 💙`,
  },
  {
    "elementname": "convidado_especial",
    "body": `PORTAS ABERTAS | FACULDADE SÍRIO-LIBANÊS\n${client}, temos o prazer de anunciar a participação de uma convidada especial no nosso evento: Thelma Assis. A renomada médica, apresentadora e influenciadora fará parte da nossa programação, com uma palestra pra lá de inspiradora!\nNosso encontro está marcado para: 17/09 (domingo), das 9h às 13h. \nSerá uma manhã repleta de atividades para conhecer tudo o que a Faculdade Sírio-Libanês tem para oferecer. \nConvide seus amigos e cadastre-se gratuitamente pelo link: https://faculdadesiriolibanes.org.br/eventos/portas-abertas\nVocê não pode perder. Até lá! 💙`,
  },
  {
    "elementname": "e_hoje",
    "body": `${client}, chegou o grande dia!\nA Faculdade Sírio-Libanês está de Portas Abertas para te receber hoje, a partir das 9h, na Rua Prof. Daher Cutait, 69 – Bela Vista, São Paulo/SP.\nChegue cedo para participar do café da manhã e aproveitar toda nossa programação.\nNos vemos já!  `,
  },
  {
    "elementname": "agradecimento_portas_abertas",
    "body": `${client}, foi um prazer ter você conosco no evento Portas Abertas!\nEsperamos que tenha sido uma manhã agradável, cheia de descobertas, aprendizados e que tenha ajudado na decisão da sua futura carreira.\n \nSe você ainda não fez sua inscrição no processo seletivo, corra e garanta sua vaga, estamos na reta final: https://faculdadesiriolibanes.org.br/como-ingressar\n \n➡️ Não esqueça de utilizar o cupom PORTASABERTAS até quarta-feira (20/09) para garantir seu benefício na taxa de inscrição.\n \nAh, se tiver 1 minutinho, responda nossa pesquisa e avalie o evento: https://forms.office.com/r/4EH5t9r6gh\n \nQueremos te ver em breve nos corredores da Faculdade Sírio-Libanês! 💙`,
  },
  {
    "elementname": "agradecimento_portas_abertas1",
    "body": `${client}, foi um prazer ter você conosco no evento Portas Abertas!\nEsperamos que tenha sido uma manhã agradável, cheia de descobertas, aprendizados e que tenha ajudado na decisão da sua futura carreira.\n \nAh, se tiver 1 minutinho, responda nossa pesquisa e avalie o evento: https://forms.office.com/r/4EH5t9r6gh\n \nQueremos te ver em breve nos corredores da Faculdade Sírio-Libanês! 💙`,
  },
  {
    "elementname": "nao_compareceu_portas_abertas",
    "body": `${client}, que pena que você não pôde participar do evento Portas Abertas!\n\nMas queremos te ver em breve nos corredores da Faculdade Sírio-Libanês. Então, não perca a oportunidade de se inscrever no nosso processo seletivo, estamos na reta final: https://faculdadesiriolibanes.org.br/como-ingressar\n💙`,
  },
  {
    "elementname": "lead_ads",
    "body": `Parece que tem alguém interessado na Faculdade Sírio-Libanês. 💙\n\nQuer um atendimento personalizado para tirar todas as suas dúvidas sobre os cursos ou sobre o processo seletivo?\n \nEstamos aqui para te ajudar!\n \n1️⃣ SIM\n \n2️⃣ NÃO`,
  },
  {
    "elementname": "bolsas",
    "body": `BOA NOTÍCIA!\n\nSua solicitação de bolsa de estudo foi recebida com sucesso. ✅\nAgora, seus documentos serão avaliados pelo nosso Comitê.\n \nNão se preocupe, vamos te procurar se houver qualquer problema com a documentação.\nMas, se estiver tudo certo, sua próxima etapa é a entrevista e você estará a um passo de ingressar na Faculdade Sírio-Libanês. 💙\n\n Até breve!`,
  },
  {
    "elementname": "incompletos_nao_pagos",
    "body": `Ei, percebemos que falta um incentivo para finalizar sua inscrição no processo seletivo da Faculdade Sírio-Libanês.\n\nPor isso, preparamos um benefício especial para você:\n \n🎟️ Use o cupom PORTASABERTAS até 26/09/2023 e ganhe R$ 100,00 de desconto na sua taxa de inscrição. Acesse: https://faculdadesiriolibanes.org.br/como-ingressar/processo-seletivo\n \n \nNão vemos a hora de ter você por aqui! 💙`
  },
  {
    "elementname": "incompleto_nao_pago",
    "body": `Ei, percebemos que falta um incentivo para finalizar sua inscrição no processo seletivo da Faculdade Sírio-Libanês.\nPor isso, preparamos um *benefício especial* para você:\n🎟️ Utilize o cupom *FSL100* até 01/10/2023 e ganhe R$ 100,00 de desconto na sua taxa de inscrição. Acesse: https://faculdadesiriolibanes.org.br/como-ingressar/processo-seletivo\n\nNão vemos a hora de ter você por aqui! 💙`
  },
  {
    "elementname": "divulgacao_bolsas",
    "body": `VOCÊ SABIA?\n\nA Faculdade Sírio-Libanês possui um programa de *Bolsas de Estudo* que oferecerá 30 bolsas *integrais* para estudantes dos cursos de Enfermagem, Fisioterapia e Psicologia. 📚\n\nQuer saber como participar?\n1️⃣ Acesse o link: https://faculdadesiriolibanes.org.br/como-ingressar/bolsa-estudo\n2️⃣ Confira os critérios de elegibilidade\n3️⃣ Faça sua solicitação de bolsa\n\nNão perca tempo! Estamos nos últimos dias de inscrição. \n\nPor aqui, queremos que verdadeiros talentos façam parte da nossa Instituição, e que a condição socioeconômica não seja um impeditivo para isso. 💙  `
  }
]

export { sirioTemplates }