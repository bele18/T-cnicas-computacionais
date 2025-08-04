export const perguntas = [
    {
        enunciado: "você prefere romances ambientados em época atual ou no passado?",
        alternativas: [
            {
                texto: "atual", 
                afirmacao: ["romances atuais, são obras literárias que se passam no tempo presente, com personagens, cenários e conflitos típicos do mundo atual.",
                    "Alguns exemplos de romances atuais populares incluem: É Assim que Acaba e Verity da Colleen Hoover, A Hipótese do Amor e Amor, Teoricamente da Ali Hazelwood, Leitura de Verão da Emily Henry."
                ],
                próxima: 1,
            },
            {
                texto: "Passado",
                afirmacao: ["Romances históricos são obras de ficção que se passam em períodos do passado, utilizando elementos históricos como cenário e contexto para a trama",
                    "Exemplos de romances históricos: Guerra e Paz, Ivanhoe, Orgulho e Preconceito, O Morro dos Ventos Uivantes"
                ],
                próxima: 2,
            }
        ]
    },
    {
        enunciado: "em romance atual, qual estilo você prefere?",
        alternativas: [
            {
                texto: "leve e divertido",
                afirmacao: ["Comédia romantica",
                    "Ex: Simplesmente acontece, Como eu era antes de você",

                ],
                próxima: 3,
            },
            {
                texto: "Intenso e dramático",
                afirmacao: ["Acharemos o romance ideial, vá para 3"
                ], 
                próxima: 4,
            }
        ]
    },
    {
        enunciado: "Você gosta de histórias com conflitos familiares ou sociais?",
        alternativas: [
            {
                texto: "sim.",
                afirmacao: ["Romance dramático com temas sociais (ex: A culpa é das Estrelas)"
                ],
                próxima: 3,
            },
            {
                texto: "Não.",
                afirmacao: ["vá para 4"
                ],
                próxima: 4,
            }
        ]
    },
    {
        enunciado: "Prefere finais felizes ou finais abertos?",
        alternativas: [
            {
                texto: "Finais felizes",
                afirmacao: ["5 livros de romance com final feliz para aquecer o seu coração.",
                            "Quase casados, Confissões de uma terapeuta, O diário de Bridget Jones,Um amor de cinema, Casório?!"
                ],
                próxima: 5,
            },
            {
                texto: "finais abertos",
                afirmacao: ["3 livros de romance com final aberto para você.",
                    "Morro dos ventos, A sombra do vento, A insustentável leveza do Ser.",
                    "Caso não se interesse por nenhum desses, vá para 5"
                ],
                próxima: 6,
            }
        ]
    },
    {
        enunciado: "Para romances fantasia / paranormal",
        alternativas: [
            {
                texto: "Vampiros ou lobisomens.",
                afirmacao: "Diário de um vampiro,  Crepúsculo, shadowhunters."
                
            },
            {
                texto: "Anjos / seres celestiais ou fantasia romantica.",
                afirmacao: "Acotar, Rainha vermelha, Anjo Mecanico, A batalha do Apocalipse, Trono de vidro. "
            }
        ]
    },
];



