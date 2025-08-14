// Objeto com a lógica de pré-requisitos.
// Agora, os valores são arrays para suportar múltiplos pré-requisitos.
const preRequisitos = {
    "CÁLCULO DIFERENCIAL E INTEGRAL I": ["INTRODUÇÃO AO CÁLCULO DIFERENCIAL E INTEGRAL"],
    "FÍSICA GERAL I": ["INTRODUÇÃO AO CÁLCULO DIFERENCIAL E INTEGRAL"],
    "FÍSICA EXPERIMENTAL I": ["FÍSICA GERAL I"],
    "ÁLGEBRA LINEAR": ["INTRODUÇÃO AO CÁLCULO DIFERENCIAL E INTEGRAL"],
    "LABORATÓRIO DE CIRCUITOS LÓGICOS": ["CIRCUITOS LÓGICOS"],
    "TÉCNICAS DE PROGRAMAÇÃO": ["INTRODUÇÃO À PROGRAMAÇÃO"],

    "CÁLCULO DIFERENCIAL E INTEGRAL II": ["CÁLCULO DIFERENCIAL E INTEGRAL I"],
    "FÍSICA GERAL II": ["FÍSICA GERAL I"],
    "ESTATÍSTICA E PROBABILIDADE": ["CÁLCULO DIFERENCIAL E INTEGRAL I"],
    "CÁLCULO NUMÉRICO": ["CÁLCULO DIFERENCIAL E INTEGRAL I"],
    "EQUAÇÕES DIFERENCIAIS ORDINÁRIAS": ["CÁLCULO DIFERENCIAL E INTEGRAL I"],

    "CÁLCULO DIFERENCIAL E INTEGRAL III": ["CÁLCULO DIFERENCIAL E INTEGRAL II"],
    "FENÔMENOS DE TRANSPORTE": ["FÍSICA GERAL II"],
    "ANÁLISE DE SINAIS E SISTEMAS": ["EQUAÇÕES DIFERENCIAIS ORDINÁRIAS"],
    "CIRCUITOS ELÉTRICOS I": ["EQUAÇÕES DIFERENCIAIS ORDINÁRIAS"],
    "LABORATÓRIO DE CIRCUITOS ELÉTRICOS I": ["CIRCUITOS ELÉTRICOS I"],
    "MATERIAIS ELÉTRICOS": ["QUÍMICA GERAL"],

    "ELETROMAGNETISMO I": ["CÁLCULO DIFERENCIAL E INTEGRAL III", "CÁLCULO NUMÉRICO"],
    "LABORATÓRIO DE ELETROMAGNETISMO I": ["ELETROMAGNETISMO I"],
    "PROCESSAMENTO DIGITAL DE SINAIS": ["ANÁLISE DE SINAIS E SISTEMAS"],
    "LABORATÓRIO DE PROCESSAMENTO DIGITAL DE SINAIS": ["PROCESSAMENTO DIGITAL DE SINAIS"],
    "CIRCUITOS ELÉTRICOS II": ["CIRCUITOS ELÉTRICOS I"],
    "LABORATÓRIO DE CIRCUITOS ELÉTRICOS II": ["CIRCUITOS ELÉTRICOS II"],
    "ELETRÔNICA I": ["CIRCUITOS ELÉTRICOS I"],
    "LABORATÓRIO DE ELETRÔNICA I": ["ELETRÔNICA I"],

    "ELETROMAGNETISMO II": ["ELETROMAGNETISMO I"],
    "SISTEMAS ELÉTRICOS": ["CÁLCULO NUMÉRICO", "CIRCUITOS ELÉTRICOS II"],
    "LABORATÓRIO DE SISTEMAS ELÉTRICOS": ["SISTEMAS ELÉTRICOS"],
    "CONTROLADORES LÓGICOS PROGRAMÁVEIS": ["CIRCUITOS LÓGICOS"],
    "INSTALAÇÕES ELÉTRICAS PREDIAIS": ["DESENHO TÉCNICO PARA ENGENHARIA ELÉTRICA"],
    "ELETRÔNICA II": ["CIRCUITOS ELÉTRICOS I", "ELETRÔNICA I"],
    "LABORATÓRIO DE ELETRÔNICA II": ["ELETRÔNICA II"],

    "CONVERSÃO ELETROMECÂNICA": ["ELETROMAGNETISMO II", "CIRCUITOS ELÉTRICOS II"],
    "ANÁLISE DE SISTEMAS ELÉTRICOS": ["SISTEMAS ELÉTRICOS"],
    "TEORIA DE CONTROLE": ["ANÁLISE DE SINAIS E SISTEMAS"],
    "ELETRÔNICA DE POTÊNCIA": ["ELETRÔNICA II"],
    "LABORATÓRIO DE ELETRÔNICA DE POTÊNCIA": ["ELETRÔNICA DE POTÊNCIA"],
    "AUTOMAÇÃO INDUSTRIAL": ["CONTROLADORES LÓGICOS PROGRAMÁVEIS"],

    "MÁQUINAS ELÉTRICAS": ["CONVERSÃO ELETROMECÂNICA"],
    "LABORATÓRIO DE MÁQUINAS ELÉTRICAS": ["MÁQUINAS ELÉTRICAS"],
    "INSTALAÇÕES ELÉTRICAS INDUSTRIAIS": ["CONTROLADORES LÓGICOS PROGRAMÁVEIS", "INSTALAÇÕES ELÉTRICAS PREDIAIS"],
    "LABORATÓRIO DE INSTALAÇÕES ELÉTRICAS INDUSTRIAIS": ["INSTALAÇÕES ELÉTRICAS INDUSTRIAIS"],

    "QUALIDADE E REGULAÇÃO DE ENERGIA ELÉTRICA": ["ANÁLISE DE SISTEMAS ELÉTRICOS", "ELETRÔNICA DE POTÊNCIA"],
    "ENERGIA EÓLICA": ["INTRODUÇÃO A ENERGIAS RENOVÁVEIS"],
    "ENERGIA SOLAR": ["INTRODUÇÃO A ENERGIAS RENOVÁVEIS"],

    // Ênfases
    "OPERAÇÃO E CONTROLE DE SISTEMAS ELÉTRICOS": ["ANÁLISE DE SISTEMAS ELÉTRICOS"],
    "COMPATIBILIDADE ELETROMAGNÉTICA": ["MATERIAIS ELÉTRICOS", "ELETROMAGNETISMO I"],
    "GERAÇÃO DE ENERGIA ELÉTRICA": ["ANÁLISE DE SISTEMAS ELÉTRICOS", "MÁQUINAS ELÉTRICAS"],
    "DISTRIBUIÇÃO DE ENERGIA ELÉTRICA": ["ANÁLISE DE SISTEMAS ELÉTRICOS"],
    "EFICIÊNCIA E PLANEJAMENTO ENERGÉTICO": ["MÁQUINAS ELÉTRICAS", "INSTALAÇÕES ELÉTRICAS INDUSTRIAIS"],
    "TRANSMISSÃO DE ENERGIA ELÉTRICA": ["DISTRIBUIÇÃO DE ENERGIA ELÉTRICA"],
    "TRANSITÓRIOS ELETROMAGNÉTICOS": ["CÁLCULO NUMÉRICO", "ANÁLISE DE SINAIS E SISTEMAS"],
    "PROTEÇÃO DE SISTEMAS ELÉTRICOS": ["ANÁLISE DE SINAIS E SISTEMAS"],
    "EQUIPAMENTOS ELÉTRICOS": ["INSTALAÇÕES ELÉTRICAS INDUSTRIAIS"],

    "REDES INDUSTRIAIS": ["CIRCUITOS LÓGICOS", "TÉCNICAS DE PROGRAMAÇÃO"],
    "ACIONAMENTOS ELÉTRICOS": ["TEORIA DE CONTROLE", "ELETRÔNICA DE POTÊNCIA", "MÁQUINAS ELÉTRICAS"],
    "REDES DE COMPUTADORES": ["CIRCUITOS LÓGICOS", "TÉCNICAS DE PROGRAMAÇÃO"],
    "CONVERSORES ESTÁTICOS DE POTÊNCIA": ["LABORATÓRIO DE PROCESSAMENTO DIGITAL DE SINAIS", "ELETRÔNICA DE POTÊNCIA"],
    "MICROCONTROLADORES": ["CIRCUITOS LÓGICOS", "TÉCNICAS DE PROGRAMAÇÃO"],
    "INFORMÁTICA INDUSTRIAL": ["AUTOMAÇÃO INDUSTRIAL", "TÓPICOS ESPECIAIS-ELETROTÉCNICA"], // Ajustado
    "INSTRUMENTAÇÃO INDUSTRIAL": ["ELETRÔNICA II", "AUTOMAÇÃO INDUSTRIAL"],
    "TÓPICOS AVANÇADOS EM CONTROLE": ["TEORIA DE CONTROLE"],
};

document.addEventListener('DOMContentLoaded', () => {
    const disciplinas = document.querySelectorAll('.materia');

    disciplinas.forEach(disciplina => {
        disciplina.addEventListener('click', () => {
            // Remove os destaques de todas as disciplinas antes de começar
            disciplinas.forEach(d => {
                d.classList.remove('selecionada');
                d.classList.remove('pre-requisito');
            });

            // Adiciona o destaque à disciplina clicada
            const disciplinaClicada = disciplina;
            disciplinaClicada.classList.add('selecionada');

            // Pega o nome da disciplina a partir do atributo data-disciplina
            const nomeDaMateria = disciplinaClicada.getAttribute('data-disciplina');
            const preRequisitosDaMateria = preRequisitos[nomeDaMateria];

            // Se a disciplina tiver pré-requisitos, encontre e destaque-os
            if (preRequisitosDaMateria) {
                preRequisitosDaMateria.forEach(preRequisitoNome => {
                    // Encontra o elemento do pré-requisito pelo atributo data-disciplina
                    const preRequisitoElemento = document.querySelector(`[data-disciplina="${preRequisitoNome}"]`);
                    if (preRequisitoElemento) {
                        preRequisitoElemento.classList.add('pre-requisito');
                    }
                });
            }
        });
    });
});