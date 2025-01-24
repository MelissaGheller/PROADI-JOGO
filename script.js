const casas = [
  { titulo: "Projeto Estagiários", conteudo: "Esse é um projeto dos estagiários do Hospital Moinhos de Vento que trabalham na área do PROADI." },
  { titulo: "PROADI", conteudo: "Texto sobre o que é o PROADI aqui." },
  { titulo: "Hospital Moinhos de Vento", conteudo: "Texto sobre o Moinhos de Vento." },
  { titulo: "PROADI + HMV", conteudo: "Texto sobre a parceria entre PROADI e Hospital Moinhos de Vento." },
  { titulo: "Administrativo 1", conteudo: "Texto sobre o que acontece na parte administrativa 1." },
  { titulo: "Administrativo 2", conteudo: "Texto sobre o que acontece na parte administrativa 2." },
  { titulo: "Administrativo 3", conteudo: "Texto sobre o que acontece na parte administrativa 3." },
  { titulo: "Administrativo 4", conteudo: "Texto sobre o que acontece na parte administrativa 4." },
  { titulo: "PROADI", conteudo: "Texto adicional sobre o PROADI." },
  { titulo: "Simulação 1", conteudo: "Texto sobre a simulação 1." },
  { titulo: "Simulação 2", conteudo: "Texto sobre a simulação 2." },
  { titulo: "Simulação 3", conteudo: "Texto sobre a simulação 3." },
];

// Adicionar 30 projetos com espaço para vídeo
for (let i = 1; i <= 30; i++) {
  casas.push({
    titulo: `Projeto ${i}`,
    conteudo: `Texto sobre o Projeto ${i}.`,
    video: true
  });
}

// Adicionar 30 "Tá certo isso?"
for (let i = 1; i <= 30; i++) {
  casas.push({
    titulo: `Tá certo isso? ${i}`,
    conteudo: `Texto explicativo para "Tá certo isso? ${i}".`
  });
}

const carta = document.getElementById("carta");
const tituloEl = document.getElementById("titulo");
const conteudoEl = document.getElementById("conteudo");
const botoesPergunta = document.getElementById("botoes-pergunta");
const videoArea = document.getElementById("video-area");
const playVideoButton = document.getElementById("play-video");
const resultadoEl = document.getElementById("resultado");

document.querySelectorAll(".casinha").forEach((casinha, index) => {
  casinha.addEventListener("click", () => abrirCarta(index));
});

function abrirCarta(index) {
  const casa = casas[index];
  tituloEl.textContent = casa.titulo;
  conteudoEl.textContent = casa.conteudo;

  if (casa.video) {
    videoArea.style.display = "block";
    playVideoButton.onclick = () => alert("Aqui você pode inserir o vídeo manualmente!");
  } else {
    videoArea.style.display = "none";
  }

  botoesPergunta.style.display = casa.tipo === "pergunta" ? "flex" : "none";
  carta.style.display = "flex";
}

function fecharCarta() {
  carta.style.display = "none";
}

function responder(resposta) {
  const index = botoesPergunta.dataset.index;
  const correta = casas[index].resposta;

  if (resposta === correta) {
    resultadoEl.textContent = "Parabéns, você acertou!";
    resultadoEl.className = "resultado sucesso";
  } else {
    resultadoEl.textContent = "Que pena, não foi dessa vez.";
    resultadoEl.className = "resultado erro";
  }

  fecharCarta();
}
