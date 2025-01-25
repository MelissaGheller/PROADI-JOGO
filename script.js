const casas = [
  { titulo: "Projeto Estagiários", 
    conteudo: "Esse é um projeto dos estagiários do Hospital Moinhos de Vento que trabalham na área do PROADI." }, 

  { titulo: "PROADI", 
    conteudo: "Texto sobre o que é o PROADI aqui." },

  { titulo: "Hospital Moinhos de Vento", 
    conteudo: "Texto sobre o Moinhos de Vento." },

  { titulo: "PROADI + HMV", conteudo: "Texto sobre a parceria entre PROADI e Hospital Moinhos de Vento." },

  { titulo: "Administrativo 1", conteudo: "Texto sobre o que acontece na parte administrativa 1." },

  { titulo: "Adm 2", conteudo: "Texto sobre a simulação 3." },

  { titulo: "Simulação - Parte 2", 
    conteudo: "Texto sobre a simulação 3." },

  { titulo: "Simulação - Parte 1", 
    conteudo: "Texto sobre a simulação 3." },

  { titulo: "Projeto Proadi", 
    conteudo: "Texto sobre o que acontece na parte administrativa 3." },
  { titulo: "Administrativo 4", 
    conteudo: "Texto sobre o que acontece na parte administrativa 4." },

  { titulo: "Adm 3", 
    conteudo: "Texto adicional sobre o PROADI." },

  { titulo: "Simulação - parte 3", 
    conteudo: "Texto sobre a simulação 1." },


];

const perguntas = [
  "O PROADI-SUS é uma iniciativa voltada ao fortalecimento do Sistema Único de Saúde.",
  "O Hospital Moinhos de Vento não participa de projetos do PROADI-SUS.",
  "Os projetos do PROADI-SUS incluem capacitação de profissionais de saúde.",
  "O PROADI-SUS é financiado exclusivamente por recursos públicos.",
  "Os hospitais participantes do PROADI-SUS são todos privados."
];

const respostas = [
  { correta: true, explicacao: "Isso mesmo, o PROADI-SUS fortalece o SUS por meio de projetos hospitalares." },
  { correta: false, explicacao: "Na verdade, o Hospital Moinhos de Vento participa ativamente de projetos do PROADI-SUS." },
  { correta: true, explicacao: "Isso mesmo, a capacitação de profissionais é um dos focos do PROADI-SUS." },
  { correta: false, explicacao: "O PROADI-SUS é financiado por isenção fiscal de hospitais privados." },
  { correta: true, explicacao: "Correto, todos os hospitais participantes do PROADI-SUS são privados." }
];

// Alternar projetos e "Tá certo isso?"
for (let i = 1; i <= 100; i++) {
  if (count < 5 ) {
    if (i % 2 !== 0) {
      casas.push({
       titulo: `Projeto ${i}`,
       conteudo: `Texto sobre o Projeto ${i}.`,
      video: true })
    } else{
      casas.push({
        titulo: `Tá certo isso? ${i}`,
        conteudo: perguntas[i % perguntas.length],
        tipo: "pergunta",
        resposta: respostas[i % respostas.length]
      });

    }
  }

}

const carta = document.getElementById("carta");
const tituloEl = document.getElementById("titulo");
const conteudoEl = document.getElementById("conteudo");
const botoesPergunta = document.getElementById("botoes-pergunta");
const videoArea = document.getElementById("video-area");
const resultadoEl = document.getElementById("resultado");

let perguntaAtual = null;

document.querySelectorAll(".casinha").forEach((casinha, index) => {
  casinha.addEventListener("click", () => abrirCarta(index));
});

function abrirCarta(index) {
  const casa = casas[index];
  tituloEl.textContent = casa.titulo;
  conteudoEl.textContent = casa.tipo === "pergunta" ? casa.conteudo : casa.conteudo;

  if (casa.tipo === "pergunta") {
    botoesPergunta.style.display = "flex";
    perguntaAtual = index;
  } else {
    botoesPergunta.style.display = "none";
    perguntaAtual = null;
  }

  videoArea.style.display = casa.video ? "block" : "none";
  carta.style.display = "flex";
  resultadoEl.textContent = ""; // Limpar resultado anterior
}

function fecharCarta() {
  carta.style.display = "none";
}

function responder(resposta) {
  if (perguntaAtual === null) return;

  const correta = casas[perguntaAtual].resposta.correta;
  const explicacao = casas[perguntaAtual].resposta.explicacao;

  if (resposta === correta) {
    resultadoEl.textContent = "Parabéns, você acertou!";
    resultadoEl.className = "resultado sucesso";
  } else {
    resultadoEl.textContent = `Que pena, não foi dessa vez. ${explicacao}`;
    resultadoEl.className = "resultado erro";
  }

  fecharCarta();
}
