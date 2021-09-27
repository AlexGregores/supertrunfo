var carta1 = {
    nome: "Mumm-Ra",
    imagem:"https://www.meugamer.com/wp-content/uploads/2018/02/thundercats-mumm-ra-statue-sideshow-200497-14.jpg",
    atributos : {
        ataque:7,
        defesa:7,
        magia:9
  }
};


var carta2 = {
    nome: "Lion",
    imagem:"https://i1.wp.com/heroisx.com/wp-content/uploads/2018/05/Lion-O-Thundercats-realista-real.jpg?fit=848%2C1200&ssl=1",
    atributos: {
        ataque:9,
        defesa:8,
        magia:7,
   }
};
var carta3 = {
    nome: "Panthro",
    imagem:"https://inspirarte.art.br/cdn/posts/ec4c0da536d443b9b0de0e10c91cc1fef930f9cb2cde4861ab409a570406f381.jpg",
    atributos: {
        ataque:9,
        defesa:7,
        magia:4,
   }
};
var carta4 = {
    nome: "Cheetara",
    imagem:"https://cdna.artstation.com/p/assets/images/images/013/894/034/large/arthur-tavares-cheetara2.jpg?1541548648&dl=1",
    atributos: {
        ataque:8,
        defesa:9,
        magia:5,
   }
};
var carta5 = {
    nome: "Tygra",
    imagem:"https://i.pinimg.com/originals/78/92/13/7892138dbe63cbf3bd431aea753b2f0e.jpg",
    atributos: {
        ataque:8,
        defesa:9,
        magia:3,
   }
};
var carta6 = {
    nome: "Snarf",
    imagem:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5dde4a6f-a930-4308-8d23-f5f7813336a9/d2kncjs-9bcde8ad-fcdd-4437-97fc-3a88a85495e5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVkZGU0YTZmLWE5MzAtNDMwOC04ZDIzLWY1Zjc4MTMzMzZhOVwvZDJrbmNqcy05YmNkZThhZC1mY2RkLTQ0MzctOTdmYy0zYTg4YTg1NDk1ZTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bt5VyIfLAI9VXMfaXy9wyRMMu-YgALzc1U8bwvcWhFo",
    atributos: {
        ataque:5,
        defesa:5,
        magia:2,
   }
};
var carta7 = {
    nome: "Jaga",
    imagem:"https://i.pinimg.com/originals/a5/73/a8/a573a866e082564cb232ebb7f00d5c32.jpg",
    atributos: {
        ataque:9,
        defesa:7,
        magia:9,
   }
};
var cartas =  [carta1,carta2,carta3,carta4,carta5,carta6,carta7];
var cartaMaquina;
var cartaJogador;
var cartas = [cartaPaulo, cartaRafa, cartaGui];
// 0          1           2

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  console.log("chamou");
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
