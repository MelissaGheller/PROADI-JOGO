const casas = [
  // Casinhas gerais
  /*0*/ { titulo: "Projeto Estagiários", conteudo: "Esse é um projeto dos estagiários do Hospital Moinhos de Vento que trabalham na área do PROADI.", tipo: "descricao" },
  /*1*/ { titulo: "PROADI 1", conteudo: "Texto sobre o que é o PROADI 1.", tipo: "descricao" },
  /*2*/ { titulo: "Hospital Moinhos de Vento", conteudo: "Texto sobre o Hospital Moinhos de Vento.", tipo: "descricao" }, 
  /*3*/ { titulo: "PROADI + HMV", conteudo: "Texto sobre a parceria entre PROADI e o Hospital Moinhos de Vento.", tipo: "descricao" },
  /*4*/ { titulo: "Adm 1", conteudo: "Texto sobre as atividades administrativas relacionadas ao PROADI.", tipo: "descricao" },

  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },

  /*5*/ { titulo: "Adm 2", conteudo: "Texto sobre as atividades administrativas na parte 2.", tipo: "descricao" },
  /*6*/ { titulo: "Simulação - parte 2", conteudo: "Texto sobre a segunda parte da simulação do projeto.", tipo: "descricao" },
  /*7*/ { titulo: "Simulação - parte 1", conteudo: "Texto sobre a primeira parte da simulação do projeto.", tipo: "descricao" },
  /*8*/ { titulo: "Projetos PROADI", conteudo: "Texto geral sobre os projetos PROADI.", tipo: "descricao" },
  /*9*/ { titulo: "Adm 4", conteudo: "Texto sobre as atividades administrativas na parte 4.", tipo: "descricao" },
  /*10*/ { titulo: "Adm 3", conteudo: "Texto sobre atividades administrativas relacionadas ao PROADI.", tipo: "descricao" },
  /*11*/ { titulo: "Simulação - parte 3", conteudo: "Texto sobre a terceira parte da simulação do projeto.", tipo: "descricao" },

  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },

  // Casinhas de projeto (casinhaProjeto)
  /*12*/ { titulo: "Projeto Gestão Hospitalar RS", conteudo: "Projeto que visa otimizar processos administrativos e assistenciais nos hospitais do Rio Grande do Sul.", tipo: "descricao" },
  /*13*/ { titulo: "?", pergunta: "O projeto Gestão Hospitalar RS é focado exclusivamente na gestão financeira de hospitais?", resposta: false, explicacao: "O projeto abrange aspectos administrativos e assistenciais, não apenas financeiros.", tipo: "pergunta" },


  /*14*/ { titulo: "Projeto Lean", conteudo: "Projeto que aplica metodologias lean para reduzir desperdícios e melhorar a eficiência nos processos hospitalares.", tipo: "descricao" },
  /*15*/ { titulo: "?", pergunta: "O projeto LEANS é focado exclusivamente na gestão financeira de hospitais?", resposta: false, explicacao: "O projeto abrange aspectos administrativos e assistenciais, não apenas financeiros.", tipo: "pergunta" },

  /*16*/ { titulo: "Projeto RHP", conteudo: "Estudo sobre redes hospitalares e padrões de cuidado.", tipo: "descricao" },
  
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  
  /*17*/ { titulo: "?", pergunta: "O projeto RHP aborda padrões de cuidado em redes hospitalares?", resposta: true, explicacao: "O projeto estuda redes hospitalares e padrões de cuidado.", tipo: "pergunta" },


  /*18*/ { titulo: "Projeto Saúde em nossas Mãos", conteudo: "Projeto que promove segurança e qualidade no atendimento hospitalar.", tipo: "descricao" },

  /*19*/ { titulo: "?", pergunta: "O projeto ATS Educação capacita gestores apenas para gestão financeira?", resposta: false, explicacao: "O projeto aborda avaliação de tecnologias em saúde e não se limita à gestão financeira.", tipo: "pergunta" },

  /*20*/ { titulo: "Projeto ATS Educação", conteudo: "Projeto que capacita profissionais na utilização de evidências científicas na tomada de decisões em saúde.", tipo: "descricao" },

  /*23*/ { titulo: "?", pergunta: "O projeto Preceptoria Médica forma apenas profissionais de enfermagem?", resposta: false, explicacao: "O projeto é voltado à formação de novos médicos.", tipo: "pergunta" },

  /*22*/ { titulo: "Projeto Preceptoria Médica", conteudo: "Iniciativa que desenvolve a preceptoria médica para formação de novos profissionais.", tipo: "descricao" },


  /*19*/ { titulo: "?", pergunta: "O projeto Saúde em nossas Mãos trata de agricultura familiar?", resposta: false, explicacao: "O projeto foca na segurança e qualidade no atendimento hospitalar.", tipo: "pergunta" },

  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },

  /*24*/ { titulo: "Projeto Preceptoria MFC", conteudo: "Preceptoria voltada à Medicina de Família e Comunidade.", tipo: "descricao" },
  /*25*/ { titulo: "?", pergunta: "O projeto MFC bla bla bla?", resposta: false, explicacao: "O projeto é voltado à formação de novos médicos.", tipo: "pergunta" },

  /*26*/ { titulo: "Projeto Preceptoria Multiprofissional", conteudo: "Projeto que promove preceptoria em equipes multiprofissionais para melhorar a formação em saúde.", tipo: "descricao" },
  /*27*/ { titulo: "?", pergunta: "O projeto Preceptoria Multiprofissional envolve apenas médicos?", resposta: false, explicacao: "O projeto promove a formação em equipes multiprofissionais.", tipo: "pergunta" },

  /*28*/ { titulo: "Projeto Saúde Indígena", conteudo: "Projeto que promove ações específicas de saúde para populações indígenas, respeitando suas tradições e necessidades.", tipo: "descricao" },

  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },

  /*29*/ { titulo: "?", pergunta: "O projeto Saúde Indígena busca integrar as tradições indígenas ao atendimento em saúde?", resposta: true, explicacao: "O projeto promove ações específicas para populações indígenas, respeitando suas tradições.", tipo: "pergunta" },


  /*30*/ { titulo: "Projeto Artemis", conteudo: "Projeto voltado à transformação digital na saúde com integração de tecnologias inovadoras.", tipo: "descricao" },

  /*31*/ { titulo: "?", pergunta: "Diretrizes bla bla bla?", resposta: false, explicacao: "O estudo é direcionado para doenças crônicas, não agudas.", tipo: "pergunta" },
  /*32*/ { titulo: "Projeto Diretrizes", conteudo: "Projeto que desenvolve diretrizes clínicas baseadas em evidências para padronizar cuidados em saúde.", tipo: "descricao" },

  /*33*/ { titulo: "?", pergunta: "O Estudo CuidAR é voltado para doenças respiratórias agudas?", resposta: false, explicacao: "O estudo é direcionado para doenças crônicas, não agudas.", tipo: "pergunta" },
  /*34*/ { titulo: "Projeto Estudo CuidAR", conteudo: "Estudo sobre intervenções que melhoram a qualidade de vida de pacientes com doenças crônicas.", tipo: "descricao" },

  /*31*/ { titulo: "?", pergunta: "O projeto Artemis está relacionado à transformação digital na saúde?", resposta: true, explicacao: "O projeto Artemis promove transformação digital na saúde.", tipo: "pergunta" },

  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },

  /*19*/ { titulo: "Estudo HTLV (PRISMA)", conteudo: "alterar texto.", tipo: "descricao" },
  /*31*/ { titulo: "?", pergunta: "Estudo HTLV (PRISMA) alerar pergunta?", resposta: true, explicacao: "O projeto Artemis promove transformação digital na saúde.", tipo: "pergunta" },

  /*19*/ { titulo: "Projeto Estudo Otimo", conteudo: "alterar texto.", tipo: "descricao" },
  /*31*/ { titulo: "?", pergunta: "Estudo otimo alerar pergunta?", resposta: true, explicacao: "O projeto Artemis promove transformação digital na saúde.", tipo: "pergunta" },

  /*19*/ { titulo: "Projeto Onco-Genomas Brasil", conteudo: "Estudo sobre o perfil genético de cânceres no Brasil para avançar em tratamentos personalizados.", tipo: "descricao" },

  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },

  /*39*/ { titulo: "?", pergunta: "O projeto Onco-Genomas Brasil analisa tratamentos personalizados para câncer?", resposta: true, explicacao: "O projeto estuda o perfil genético de cânceres no Brasil.", tipo: "pergunta" },

  /*21*/ { titulo: "Projeto PhysioSync-HF Follow-UP", conteudo: "Estudo que avalia a eficácia de um sistema de monitoramento remoto em pacientes com insuficiência cardíaca.", tipo: "descricao" },

  /*40*/ { titulo: "?", pergunta: "O projeto Pós-Covid Brasil estuda apenas os impactos físicos da Covid-19?", resposta: false, explicacao: "O estudo avalia os impactos físicos, mentais e sociais.", tipo: "pergunta" },

  /*20*/ { titulo: "Projeto Pós-Covid Brasil", conteudo: "Iniciativa que investiga os impactos a longo prazo da Covid-19 na saúde dos brasileiros.", tipo: "descricao" },

  /*42*/ { titulo: "?", pergunta: "O projeto PROMOTE estuda reabilitação em ventilação mecânica?", resposta: true, explicacao: "O projeto é focado em melhorias na reabilitação para esses pacientes.", tipo: "pergunta" },

  /*22*/ { titulo: "Projeto PROMOTE", conteudo: "Pesquisa que explora melhorias em reabilitação para pacientes em ventilação mecânica prolongada.", tipo: "descricao" },



  /*41*/ { titulo: "?", pergunta: "O projeto PhysioSync-HF Follow-UP monitora pacientes com insuficiência cardíaca?", resposta: true, explicacao: "O projeto avalia um sistema de monitoramento remoto para esses pacientes.", tipo: "pergunta" },

  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },


  /*28*/ { titulo: "Projeto Rehab-VM Brasil", conteudo: "Projeto que desenvolve estratégias de reabilitação para pacientes em ventilação mecânica prolongada.", tipo: "descricao" },
  /*47*/ { titulo: "?", pergunta: "O projeto Rehab-VM Brasil é voltado à reabilitação de pacientes com doenças respiratórias leves?", resposta: false, explicacao: "O projeto foca na reabilitação de pacientes em ventilação mecânica prolongada.", tipo: "pergunta" },

  /*23*/ { titulo: "Projeto Resilient-TNK", conteudo: "Estudo que investiga novas abordagens para doenças cardiovasculares em populações de alto risco.", tipo: "descricao" },
  /*47*/ { titulo: "?", pergunta: "O Projeto TNK alterar pergunta?", resposta: false, explicacao: "O projeto foca na reabilitação de pacientes em ventilação mecânica prolongada.", tipo: "pergunta" },


  /*26*/ { titulo: "Projeto TB PED", conteudo: "Estudo voltado ao diagnóstico e tratamento da tuberculose pediátrica.", tipo: "descricao" },

  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },


  /*45*/ { titulo: "?", pergunta: "O projeto TB PED é voltado ao tratamento da tuberculose pediátrica?", resposta: true, explicacao: "O projeto foca no diagnóstico e tratamento da tuberculose pediátrica.", tipo: "pergunta" },

  /*33*/ { titulo: "Projeto TeleNordeste", conteudo: "Iniciativa que utiliza telemedicina para expandir o acesso à saúde no Nordeste do Brasil.", tipo: "descricao" },

  /*43*/ { titulo: "?", pergunta: "O projeto VigiaSUS trata de agricultura sustentável?", resposta: false, explicacao: "O projeto é focado na vigilância em saúde e monitoramento de doenças emergentes.", tipo: "pergunta" },

  /*24*/ { titulo: "Projeto VigiaSUS", conteudo: "Iniciativa para fortalecer a vigilância em saúde e monitorar doenças emergentes.", tipo: "descricao" },

  /*46*/ { titulo: "?", pergunta: "O projeto Trident é voltado a diagnósticos mais rápidos?", resposta: true, explicacao: "O projeto busca avanços tecnológicos para diagnósticos rápidos e precisos.", tipo: "pergunta" },

  /*27*/ { titulo: "Projeto Trident", conteudo: "Iniciativa que busca avanços tecnológicos para diagnósticos mais rápidos e precisos.", tipo: "descricao" },

  /*51*/ { titulo: "?", pergunta: "O projeto TeleNordeste utiliza telemedicina para ampliar o acesso à saúde?", resposta: true, explicacao: "O projeto utiliza telemedicina para expandir o acesso à saúde no Nordeste do Brasil.", tipo: "pergunta" },

];


document.querySelectorAll('.casa').forEach((casa, index) => {
  if (casa.classList.contains('casaVazia')) {
    return; // Ignora casas vazias
  }

  casa.addEventListener('click', () => {
    const dadosCasa = casas[index];
    const carta = document.getElementById('carta');
    const tituloCarta = document.getElementById('titulo');
    const conteudoCarta = document.getElementById('conteudo');
    const botoesPergunta = document.getElementById('botoes-pergunta');
    const videoArea = document.getElementById('video-area');

    if (dadosCasa.tipo === 'descricao') {
      tituloCarta.textContent = dadosCasa.titulo;
      conteudoCarta.textContent = dadosCasa.conteudo;
      botoesPergunta.style.display = 'none';
      videoArea.style.display = 'none';
    } else if (dadosCasa.tipo === 'pergunta') {
      tituloCarta.textContent = dadosCasa.titulo;
      conteudoCarta.textContent = dadosCasa.pergunta;
      botoesPergunta.style.display = 'block';
      videoArea.style.display = 'none';

      // Configura os botões de verdadeiro/falso
      window.responder = (respostaUsuario) => {
        const resultado = document.getElementById('resultado');
        if (respostaUsuario === dadosCasa.resposta) {
          resultado.textContent = `Correto! ${dadosCasa.explicacao}`;
        } else {
          resultado.textContent = `Errado. ${dadosCasa.explicacao}`;
        }
      };
    }

    carta.style.display = 'block';
  });
});

window.fecharCarta = () => {
  document.getElementById('carta').style.display = 'none';
  document.getElementById('resultado').textContent = '';
};
