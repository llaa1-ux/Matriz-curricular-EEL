const preRequisitos = {
    // 2º Período
    "CÁLCULO DIFERENCIAL E INTEGRAL I": ["INTRODUÇÃO AO CÁLCULO DIFERENCIAL E INTEGRAL"],
    "FÍSICA GERAL I": ["GEOMETRIA DESCRITIVA", "INTRODUÇÃO AO CÁLCULO DIFERENCIAL E INTEGRAL"],
    "FÍSICA EXPERIMENTAL I": ["FÍSICA GERAL I"],
    "ÁLGEBRA LINEAR I": ["GEOMETRIA ANALÍTICA"],
    "TOPOGRAFIA": ["GEOMETRIA ANALÍTICA", "GEOMETRIA DESCRITIVA"],
    "DESENHO TÉCNICO": ["GEOMETRIA DESCRITIVA"],

    // 3º Período
    "CÁLCULO DIFERENCIAL E INTEGRAL II": ["GEOMETRIA ANALÍTICA", "CÁLCULO DIFERENCIAL E INTEGRAL I"],
    "FÍSICA GERAL II": ["FÍSICA GERAL I"],
    "ESTATÍSTICA E PROBABILIDADE": ["CÁLCULO DIFERENCIAL E INTEGRAL I"],
    "MATERIAIS DE CONSTRUÇÃO CIVIL I": ["INTRODUÇÃO A ENGENHARIA CIVIL"],
    "CÁLCULO NUMÉRICO": ["INTRODUÇÃO A COMPUTAÇÃO", "CÁLCULO DIFERENCIAL E INTEGRAL I"],
    "DESENHO ASSISTIDO POR COMPUTADOR": ["DESENHO TÉCNICO"],

    // 4º Período
    "CÁLCULO DIFERENCIAL E INTEGRAL III": ["CÁLCULO DIFERENCIAL E INTEGRAL II"],
    "FÍSICA GERAL III": ["FÍSICA GERAL II"],
    "MECÂNICA DOS SÓLIDOS I": ["FÍSICA GERAL II", "CÁLCULO DIFERENCIAL E INTEGRAL II"],
    "MATERIAIS DE CONSTRUÇÃO CIVIL II": ["MATERIAIS DE CONSTRUÇÃO CIVIL I"],
    "GEOLOGIA APLICADA": ["TOPOGRAFIA"],
    "DESENHO ARQUITETÔNICO": ["DESENHO ASSISTIDO POR COMPUTADOR"],
    "ENGENHARIA ECONÔMICA": ["ESTATÍSTICA E PROBABILIDADE"],

    // 5º Período
    "FENÔMENOS DE TRANSPORTE": ["CÁLCULO DIFERENCIAL E INTEGRAL II", "FÍSICA GERAL II"],
    "MECÂNICA DOS SOLOS I": ["GEOLOGIA APLICADA"],
    "MECÂNICA DOS SÓLIDOS II": ["MECÂNICA DOS SÓLIDOS I"],
    "TECNOLOGIA DE CONSTRUÇÃO CIVIL I": ["MATERIAIS DE CONSTRUÇÃO CIVIL II"],
    "LABORATÓRIO DE MECÂNICA DOS SOLOS I": ["GEOLOGIA APLICADA"],
    "TEORIA DAS ESTRUTURAS I": ["MECÂNICA DOS SÓLIDOS I"],

    // 6º Período
    "HIDRÁULICA": ["FENÔMENOS DE TRANSPORTE"],
    "ESTRADAS": ["TOPOGRAFIA", "MECÂNICA DOS SOLOS I"],
    "MECÂNICA DOS SÓLIDOS III": ["MECÂNICA DOS SÓLIDOS II"],
    "TECNOLOGIA DE CONSTRUÇÃO CIVIL II": ["TECNOLOGIA DE CONSTRUÇÃO CIVIL I"],
    "MECÂNICA DOS SOLOS II": ["MECÂNICA DOS SOLOS I"],
    "TEORIA DAS ESTRUTURAS II": ["TEORIA DAS ESTRUTURAS I"],
    "LABORATÓRIO DE MECÂNICA DOS SOLOS II": ["MECÂNICA DOS SOLOS I"],

    // 7º Período
    "HIDROLOGIA": ["GEOLOGIA APLICADA"],
    "FUNDAÇÕES I": ["MECÂNICA DOS SOLOS II"],
    "TECNOLOGIA DE CONSTRUÇÃO CIVIL III": ["TECNOLOGIA DE CONSTRUÇÃO CIVIL II"],
    "ESTRUTURAS DE CONCRETO ARMADO I": ["MECÂNICA DOS SÓLIDOS III", "TEORIA DAS ESTRUTURAS II"],
    "ELETRICIDADE APLICADA": ["FÍSICA GERAL III"],
    "PAVIMENTAÇÃO": ["ESTRADAS", "MECÂNICA DOS SOLOS II"],
    "HIDRÁULICA EXPERIMENTAL": ["HIDRÁULICA"],
    "ADMINISTRAÇÃO APLICADA À CONSTRUÇÃO CIVIL": ["ENGENHARIA ECONÔMICA"],

    // 8º Período
    "FUNDAÇÕES II": ["FUNDAÇÕES I"],
    "INSTALAÇÕES HIDRO-SANITÁRIAS": ["HIDRÁULICA"],
    "ESTRUTURAS DE CONCRETO ARMADO II": ["ESTRUTURAS DE CONCRETO ARMADO I"],
    "INSTALAÇÕES ELÉTRICAS PREDIAIS": ["ELETRICIDADE APLICADA"],
    "SISTEMA DE DRENAGEM URBANA": ["TOPOGRAFIA", "HIDROLOGIA", "PAVIMENTAÇÃO"],
    "SISTEMAS DE ABASTECIMENTO DE ÁGUA": ["HIDRÁULICA"],
    "TRANSPORTES I": ["TECNOLOGIA DE CONSTRUÇÃO CIVIL II"],

    // 9º Período
    "TRANSPORTES II": ["TRANSPORTES I"],
    "SISTEMA DE ESGOTAMENTO SANITÁRIO": ["SISTEMA DE DRENAGEM URBANA", "SISTEMAS DE ABASTECIMENTO DE ÁGUA"],
    "SEGURANÇA DO TRABALHO": ["TECNOLOGIA DE CONSTRUÇÃO CIVIL I"],
    "ESTRUTURAS METÁLICAS": ["MATERIAIS DE CONSTRUÇÃO CIVIL II", "TEORIA DAS ESTRUTURAS II"],
    "ESTRUTURAS DE MADEIRA": ["TEORIA DAS ESTRUTURAS II"],
    "ESTRUTURAS DE CONCRETO PROTENDIDO": ["ESTRUTURAS DE CONCRETO ARMADO II"],

    // 10º Período
    "ENGENHARIA AMBIENTAL": ["HIDROLOGIA", "SISTEMA DE ESGOTAMENTO SANITÁRIO"],
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

    const gradePrincipal = document.querySelector('.grade-curricular');
    const disciplinasDaGrade = gradePrincipal.querySelectorAll('.materia');
    
    disciplinasDaGrade.forEach(disciplina => {
        disciplina.addEventListener('mouseover', () => {
            if (!disciplinaClicada) {
                applyHighlights(disciplina);
            }
        });

        disciplina.addEventListener('mouseout', () => {
            if (!disciplinaClicada) {
                clearHighlights();
            }
        });
    });

    todasAsDisciplinas.forEach(disciplina => {
        disciplina.addEventListener('click', (event) => {
            event.stopPropagation();
            if (disciplinaClicada === disciplina) {
                clearHighlights();
                disciplinaClicada = null;
            } else {
                applyHighlights(disciplina);
                disciplinaClicada = disciplina;
            }
        });
    });

    document.body.addEventListener('click', (event) => {
        const targetIsMateria = event.target.closest('.materia');
        if (!targetIsMateria) {
            clearHighlights();
            disciplinaClicada = null;
        }
    });

});
