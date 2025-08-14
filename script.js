const preRequisitos = {
    // 2º Período
    "CÁLCULO DIFERENCIAL E INTEGRAL I": ["INTRODUÇÃO AO CÁLCULO DIFERENCIAL E INTEGRAL"],
    "FÍSICA GERAL I": ["INTRODUÇÃO AO CÁLCULO DIFERENCIAL E INTEGRAL"],
    "FÍSICA EXPERIMENTAL I": ["FÍSICA GERAL I"],
    "ÁLGEBRA LINEAR": ["INTRODUÇÃO AO CÁLCULO DIFERENCIAL E INTEGRAL"],
    "LABORATÓRIO DE CIRCUITOS LÓGICOS": ["CIRCUITOS LÓGICOS"],
    "TÉCNICAS DE PROGRAMAÇÃO": ["INTRODUÇÃO À PROGRAMAÇÃO"],

    // 3º Período
    "CÁLCULO DIFERENCIAL E INTEGRAL II": ["CÁLCULO DIFERENCIAL E INTEGRAL I"],
    "FÍSICA GERAL II": ["FÍSICA GERAL I"],
    "ESTATÍSTICA E PROBABILIDADE": ["CÁLCULO DIFERENCIAL E INTEGRAL I"],
    "CÁLCULO NUMÉRICO": ["CÁLCULO DIFERENCIAL E INTEGRAL I"],
    "EQUAÇÕES DIFERENCIAIS ORDINÁRIAS": ["CÁLCULO DIFERENCIAL E INTEGRAL I"],

    // 4º Período
    "CÁLCULO DIFERENCIAL E INTEGRAL III": ["CÁLCULO DIFERENCIAL E INTEGRAL II"],
    "FENÔMENOS DE TRANSPORTE": ["FÍSICA GERAL II"],
    "ANÁLISE DE SINAIS E SISTEMAS": ["EQUAÇÕES DIFERENCIAIS ORDINÁRIAS"],
    "CIRCUITOS ELÉTRICOS I": ["EQUAÇÕES DIFERENCIAIS ORDINÁRIAS"],
    "LABORATÓRIO DE CIRCUITOS ELÉTRICOS I": ["CIRCUITOS ELÉTRICOS I"],
    "MATERIAIS ELÉTRICOS": ["QUÍMICA GERAL"],

    // 5º Período
    "ELETROMAGNETISMO I": ["CÁLCULO DIFERENCIAL E INTEGRAL III", "CÁLCULO NUMÉRICO"],
    "LABORATÓRIO DE ELETROMAGNETISMO I": ["ELETROMAGNETISMO I"],
    "PROCESSAMENTO DIGITAL DE SINAIS": ["ANÁLISE DE SINAIS E SISTEMAS"],
    "LABORATÓRIO DE PROCESSAMENTO DIGITAL DE SINAIS": ["PROCESSAMENTO DIGITAL DE SINAIS"],
    "CIRCUITOS ELÉTRICOS II": ["CIRCUITOS ELÉTRICOS I"],
    "LABORATÓRIO DE CIRCUITOS ELÉTRICOS II": ["CIRCUITOS ELÉTRICOS II"],
    "ELETRÔNICA I": ["CIRCUITOS ELÉTRICOS I"],
    "LABORATÓRIO DE ELETRÔNICA I": ["ELETRÔNICA I"],

    // 6º Período
    "ELETROMAGNETISMO II": ["ELETROMAGNETISMO I"],
    "SISTEMAS ELÉTRICOS": ["CÁLCULO NUMÉRICO", "CIRCUITOS ELÉTRICOS II"],
    "LABORATÓRIO DE SISTEMAS ELÉTRICOS": ["SISTEMAS ELÉTRICOS"],
    "CONTROLADORES LÓGICOS PROGRAMÁVEIS": ["CIRCUITOS LÓGICOS"],
    "INSTALAÇÕES ELÉTRICAS PREDIAIS": ["DESENHO TÉCNICO PARA ENGENHARIA ELÉTRICA"],
    "ELETRÔNICA II": ["CIRCUITOS ELÉTRICOS II", "ELETRÔNICA I"],
    "LABORATÓRIO DE ELETRÔNICA II": ["ELETRÔNICA II"],

    // 7º Período
    "CONVERSÃO ELETROMECÂNICA": ["ELETROMAGNETISMO II", "CIRCUITOS ELÉTRICOS II"],
    "ANÁLISE DE SISTEMAS ELÉTRICOS": ["SISTEMAS ELÉTRICOS"],
    "TEORIA DE CONTROLE": ["ANÁLISE DE SINAIS E SISTEMAS"],
    "ELETRÔNICA DE POTÊNCIA": ["ELETRÔNICA II"],
    "LABORATÓRIO DE ELETRÔNICA DE POTÊNCIA": ["ELETRÔNICA DE POTÊNCIA"],
    "AUTOMAÇÃO INDUSTRIAL": ["CONTROLADORES LÓGICOS PROGRAMÁVEIS"],
    
    // 8º Período
    "MÁQUINAS ELÉTRICAS": ["CONVERSÃO ELETROMECÂNICA"],
    "LABORATÓRIO DE MÁQUINAS ELÉTRICAS": ["MÁQUINAS ELÉTRICAS"],
    "INSTALAÇÕES ELÉTRICAS INDUSTRIAIS": ["CONTROLADORES LÓGICOS PROGRAMÁVEIS", "INSTALAÇÕES ELÉTRICAS PREDIAIS"],
    "LABORATÓRIO DE INSTALAÇÕES ELÉTRICAS INDUSTRIAIS": ["INSTALAÇÕES ELÉTRICAS INDUSTRIAIS"],

    // 9º Período
    "QUALIDADE E REGULAÇÃO DE ENERGIA ELÉTRICA": ["ANÁLISE DE SISTEMAS ELÉTRICOS", "ELETRÔNICA DE POTÊNCIA"],
    "ENERGIA EÓLICA": ["INTRODUÇÃO A ENERGIAS RENOVÁVEIS"],
    "ENERGIA SOLAR": ["INTRODUÇÃO A ENERGIAS RENOVÁVEIS"],

    // Ênfases - Habilitação em Eletrotécnica
    "OPERAÇÃO E CONTROLE DE SISTEMAS ELÉTRICOS": ["ANÁLISE DE SISTEMAS ELÉTRICOS"],
    "COMPATIBILIDADE ELETROMAGNÉTICA": ["MATERIAIS ELÉTRICOS", "ELETROMAGNETISMO I"],
    "GERAÇÃO DE ENERGIA ELÉTRICA": ["ANÁLISE DE SISTEMAS ELÉTRICOS", "MÁQUINAS ELÉTRICAS"],
    "DISTRIBUIÇÃO DE ENERGIA ELÉTRICA": ["ANÁLISE DE SISTEMAS ELÉTRICOS"],
    "EFICIÊNCIA E PLANEJAMENTO ENERGÉTICO": ["MÁQUINAS ELÉTRICAS", "INSTALAÇÕES ELÉTRICAS INDUSTRIAIS"],
    "TRANSMISSÃO DE ENERGIA ELÉTRICA": ["DISTRIBUIÇÃO DE ENERGIA ELÉTRICA"],
    "TRANSITÓRIOS ELETROMAGNÉTICOS": ["CÁLCULO NUMÉRICO", "ANÁLISE DE SINAIS E SISTEMAS"],
    "PROTEÇÃO DE SISTEMAS ELÉTRICOS": ["ANÁLISE DE SISTEMAS ELÉTRICOS"],
    "EQUIPAMENTOS ELÉTRICOS": ["INSTALAÇÕES ELÉTRICAS INDUSTRIAIS"],

    // Ênfases - Habilitação em Controle e Automação Industrial
    "REDES INDUSTRIAIS": ["CIRCUITOS LÓGICOS", "TÉCNICAS DE PROGRAMAÇÃO"],
    "ACIONAMENTOS ELÉTRICOS": ["TEORIA DE CONTROLE", "ELETRÔNICA DE POTÊNCIA", "MÁQUINAS ELÉTRICAS"],
    "REDES DE COMPUTADORES": ["CIRCUITOS LÓGICOS", "TÉCNICAS DE PROGRAMAÇÃO"],
    "CONVERSORES ESTÁTICOS DE POTÊNCIA": ["LABORATÓRIO DE PROCESSAMENTO DIGITAL DE SINAIS", "ELETRÔNICA DE POTÊNCIA"],
    "MICROCONTROLADORES": ["CIRCUITOS LÓGICOS", "TÉCNICAS DE PROGRAMAÇÃO"],
    "INFORMÁTICA INDUSTRIAL": ["AUTOMAÇÃO INDUSTRIAL", "TÓPICOS ESPECIAIS"],
    "INSTRUMENTAÇÃO INDUSTRIAL": ["ELETRÔNICA II", "AUTOMAÇÃO INDUSTRIAL"],
    "TÓPICOS AVANÇADOS EM CONTROLE": ["TEORIA DE CONTROLE"]
};

document.addEventListener('DOMContentLoaded', () => {
    const todasAsDisciplinas = document.querySelectorAll('.materia');
    let disciplinaClicada = null;

    function clearHighlights() {
        todasAsDisciplinas.forEach(d => {
            d.classList.remove('selecionada');
            d.classList.remove('pre-requisito');
        });
    }

    function applyHighlights(disciplina) {
        clearHighlights();
        
        disciplina.classList.add('selecionada');
        
        const nomeDaMateria = disciplina.getAttribute('data-disciplina');
        const preRequisitosArray = preRequisitos[nomeDaMateria];

        if (preRequisitosArray && preRequisitosArray.length > 0) {
            preRequisitosArray.forEach(preRequisitoNome => {
                const preRequisitoElemento = document.querySelector(`[data-disciplina="${preRequisitoNome}"]`);
                if (preRequisitoElemento) {
                    preRequisitoElemento.classList.add('pre-requisito');
                }
            });
        }
    }

    // 1. Lógica para a grade principal (mouseover/mouseout)
    const gradePrincipal = document.querySelector('.grade-curricular');
    const disciplinasDaGrade = gradePrincipal.querySelectorAll('.materia');
    
    disciplinasDaGrade.forEach(disciplina => {
        disciplina.addEventListener('mouseover', () => {
            // Só aplica o destaque do hover se nenhuma disciplina de baixo estiver clicada
            if (!disciplinaClicada) {
                applyHighlights(disciplina);
            }
        });

        disciplina.addEventListener('mouseout', () => {
            // Só limpa o destaque do hover se nenhuma disciplina de baixo estiver clicada
            if (!disciplinaClicada) {
                clearHighlights();
            }
        });
    });

    // 2. Lógica de clique para TODAS as matérias
    todasAsDisciplinas.forEach(disciplina => {
        disciplina.addEventListener('click', (event) => {
            event.stopPropagation();
            
            // Se a matéria clicada já for a selecionada, desmarca.
            if (disciplinaClicada === disciplina) {
                clearHighlights();
                disciplinaClicada = null;
            } else {
                // Aplica o destaque na nova matéria clicada
                applyHighlights(disciplina);
                disciplinaClicada = disciplina;
            }
        });
    });

    // 3. Listener global para limpar o destaque ao clicar em qualquer lugar que não seja uma matéria
    document.body.addEventListener('click', (event) => {
        const targetIsMateria = event.target.closest('.materia');
        if (!targetIsMateria) {
            clearHighlights();
            disciplinaClicada = null;
        }
    });

});
