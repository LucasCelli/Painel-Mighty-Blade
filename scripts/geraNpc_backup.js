// Carrega as informações em JSON:
var _raca = JSON.parse(jsonRaca());
var _classe = JSON.parse(jsonClasse());

function geraSexo() {
    randomSexo = ["Masculino", "Masculino", "Feminino", "Masculino", "Masculino"];

    if (document.getElementById("selecionarSexo").value === "Masculino") {
        sexo = "Masculino";
    } else if (document.getElementById("selecionarSexo").value === "Feminino") {
        sexo = "Feminino";
    } else {
        sexo = randomSexo[(Math.random() * randomSexo.length) | 0];
    }
}

function geraNivel() {
    if (document.getElementById("selecionarNivel").value === "1") {
        npcNivel = 1;
    } else if (document.getElementById("selecionarNivel").value === "2") {
        npcNivel = 2;
    } else if (document.getElementById("selecionarNivel").value === "3") {
        npcNivel = 3;
    } else if (document.getElementById("selecionarNivel").value === "4") {
        npcNivel = 4;
    } else if (document.getElementById("selecionarNivel").value === "5") {
        npcNivel = 5;
    } else if (document.getElementById("selecionarNivel").value === "6") {
        npcNivel = 6;
    } else if (document.getElementById("selecionarNivel").value === "7") {
        npcNivel = 7;
    } else if (document.getElementById("selecionarNivel").value === "8") {
        npcNivel = 8;
    } else if (document.getElementById("selecionarNivel").value === "9") {
        npcNivel = 9;
    } else if (document.getElementById("selecionarNivel").value === "10") {
        npcNivel = 10;
    } else {
        npcNivel = Math.floor(Math.random() * 10) + 1;
    }

    document.getElementById("nivelNPC").innerHTML = npcNivel;
}

function geraRaca() {
    if (document.getElementById("selecionarRaca").value === "Aesir") {
        npcInfoRaca = _raca.listaRaca[0];
    } else if (document.getElementById("selecionarRaca").value === "Anão") {
        npcInfoRaca = _raca.listaRaca[1];
    } else if (document.getElementById("selecionarRaca").value === "Astério Parbani") {
        npcInfoRaca = _raca.listaRaca[2];
    } else if (document.getElementById("selecionarRaca").value === "Centauro") {
        npcInfoRaca = _raca.listaRaca[3];
    } else if (document.getElementById("selecionarRaca").value === "Elfo") {
        npcInfoRaca = _raca.listaRaca[4];
    } else if (document.getElementById("selecionarRaca").value === "Faen") {
        npcInfoRaca = _raca.listaRaca[5];
    } else if (document.getElementById("selecionarRaca").value === "Fauno") {
        npcInfoRaca = _raca.listaRaca[6];
    } else if (document.getElementById("selecionarRaca").value === "Fira") {
        npcInfoRaca = _raca.listaRaca[7];
    } else if (document.getElementById("selecionarRaca").value === "Humano") {
        npcInfoRaca = _raca.listaRaca[8];
    } else if (document.getElementById("selecionarRaca").value === "Juban") {
        npcInfoRaca = _raca.listaRaca[9];
    } else if (document.getElementById("selecionarRaca").value === "Levent") {
        npcInfoRaca = _raca.listaRaca[10];
    } else if (document.getElementById("selecionarRaca").value === "Mahok") {
        npcInfoRaca = _raca.listaRaca[11];
    } else if (document.getElementById("selecionarRaca").value === "Metadílio") {
        npcInfoRaca = _raca.listaRaca[12];
    } else if (document.getElementById("selecionarRaca").value === "Tailox") {
        npcInfoRaca = _raca.listaRaca[13];
    } else {
        npcInfoRaca = _raca.listaRaca[(Math.random() * _raca.listaRaca.length) | 0];
    }

    npcRaca = npcInfoRaca.raca;
    npcAtributoRaca = npcInfoRaca.atributos;
    npcAutomaticaRacaNome = npcInfoRaca.automatica.nome;
    npcAutomaticaRacaTipo = npcInfoRaca.automatica.tipo;
    npcAutomaticaRacaDesc = npcInfoRaca.automatica.descricao;
    npcHabilidade = npcInfoRaca.habilidades[(Math.random() * npcInfoRaca.habilidades.length) | 0];

    atributoHumanoF = [4, 3, 3, 3];
    atributoHumanoA = [3, 4, 3, 3];
    atributoHumanoI = [3, 3, 4, 3];
    atributoHumanoV = [3, 3, 3, 4];
    atributoHumanoList = [atributoHumanoF, atributoHumanoA, atributoHumanoI, atributoHumanoV];
    atributoHumano = atributoHumanoList[(Math.random() * atributoHumanoList.length) | 0];
    if (npcRaca === "Humano") {
        npcAtributoRaca = atributoHumano;
    }

    // Exibe no HTML as informações:
    document.getElementById("racaNPC").innerHTML = npcRaca;
    document.getElementById("atributoRacaFor").innerHTML = npcAtributoRaca[0];
    document.getElementById("atributoRacaAgi").innerHTML = npcAtributoRaca[1];
    document.getElementById("atributoRacaInt").innerHTML = npcAtributoRaca[2];
    document.getElementById("atributoRacaVon").innerHTML = npcAtributoRaca[3];
    document.getElementById("automaticaRacaNome").innerHTML = npcAutomaticaRacaNome;
    document.getElementById("automaticaRacaNomeModal").innerHTML = npcAutomaticaRacaNome;
    document.getElementById("automaticaRacaTipo").innerHTML = npcAutomaticaRacaTipo;
    document.getElementById("automaticaRacaDesc").innerHTML = npcAutomaticaRacaDesc;
    document.getElementById("habilidadeRaca").innerHTML = npcHabilidade;

    /* if (npcRaca === "Aesir") {
        imagemNPC = "<img src="imagens/aesir.png"></img>";
    } else if (npcRaca === "Anão") {
        imagemNPC = "<img src="imagens/anão.png"></img>";
    } else if (npcRaca === "Astério Parbani ♂") {
        imagemNPC = "<img src="imagens/astério-m.png"></img>";
    } else if (npcRaca === "Astério Parbani ♀") {
        imagemNPC = "<img src="imagens/astério-f.png"></img>";
    } else if (npcRaca === "Centauro") {
        imagemNPC = "<img src="imagens/centauro.png"></img>";
    } else if (npcRaca === "Elfo") {
        imagemNPC = "<img src="imagens/elfo.png"></img>";
    } else if (npcRaca === "Faen") {
        imagemNPC = "<img src="imagens/faen.png"></img>";
    } else if (npcRaca === "Fauno") {
        imagemNPC = "<img src="imagens/fauno.png"></img>";
    } else {
        imagemNPC = "<img src="imagens/fira.png"></img>";
    }
    document.getElementById("imgNPC").innerHTML = imagemNPC; */
}

function geraClasse() {
    if (document.getElementById("selecionarClasse").value === "Bardo") {
        classeInfo = _classe.listaClasse[0];
    } else if (document.getElementById("selecionarClasse").value === "Druida") {
        classeInfo = _classe.listaClasse[1];
    } else if (document.getElementById("selecionarClasse").value === "Espadachim") {
        classeInfo = _classe.listaClasse[2];
    } else if (document.getElementById("selecionarClasse").value === "Feiticeiro") {
        classeInfo = _classe.listaClasse[3];
    } else if (document.getElementById("selecionarClasse").value === "Guerreiro") {
        classeInfo = _classe.listaClasse[4];
    } else if (document.getElementById("selecionarClasse").value === "Ladino") {
        classeInfo = _classe.listaClasse[5];
    } else if (document.getElementById("selecionarClasse").value === "Paladino") {
        classeInfo = _classe.listaClasse[6];
    } else if (document.getElementById("selecionarClasse").value === "Patrulheiro") {
        classeInfo = _classe.listaClasse[7];
    } else if (document.getElementById("selecionarClasse").value === "Rúnico") {
        classeInfo = _classe.listaClasse[8];
    } else if (document.getElementById("selecionarClasse").value === "Sacerdote") {
        classeInfo = _classe.listaClasse[9];
    } else if (document.getElementById("selecionarClasse").value === "Senescal") {
        classeInfo = _classe.listaClasse[10];
    } else if (document.getElementById("selecionarClasse").value === "Xamã") {
        classeInfo = _classe.listaClasse[11];
    } else {
        classeInfo = _classe.listaClasse[(Math.random() * _classe.listaClasse.length) | 0];
    }

    npcClasse = classeInfo.classe;
    npcAtributoClasse = classeInfo.atributos;
    npcAutomaticaClasseNome = classeInfo.automatica.nome;
    npcAutomaticaClasseTipo = classeInfo.automatica.tipo;
    npcAutomaticaClasseDesc = classeInfo.automatica.descricao;
    npcHabilidadesBasicas = classeInfo.basicas;
    npcHabilidadesAvancadas = classeInfo.avancadas;
    npcHabilidadeFinal = classeInfo.final;

    // Exibe no HTML as informações:
    document.getElementById("classeNPC").innerHTML = npcClasse;
    document.getElementById("atributoClasseFor").innerHTML = npcAtributoClasse[0];
    document.getElementById("atributoClasseAgi").innerHTML = npcAtributoClasse[1];
    document.getElementById("atributoClasseInt").innerHTML = npcAtributoClasse[2];
    document.getElementById("atributoClasseVon").innerHTML = npcAtributoClasse[3];
    document.getElementById("automaticaClasse").innerHTML = npcAutomaticaClasseNome;
    document.getElementById("automaticaClasseModal").innerHTML = npcAutomaticaClasseNome;
    document.getElementById("automaticaClasseTipo").innerHTML = npcAutomaticaClasseTipo;
    document.getElementById("automaticaClasseDesc").innerHTML = npcAutomaticaClasseDesc;
}

function geraHabilidades() {
    geraNivel();
    npcHabilidade1 = classeInfo.basicas[(Math.random() * classeInfo.basicas.length) | 0];
    npcHabilidade2 = classeInfo.basicas[(Math.random() * classeInfo.basicas.length) | 0];
    npcHabilidade3 = classeInfo.basicas[(Math.random() * classeInfo.basicas.length) | 0];

    if (npcHabilidade1 === npcHabilidade2) {
        npcHabilidade1 = classeInfo.basicas[(Math.random() * classeInfo.basicas.length) | 0];
    } else if (npcHabilidade1 === npcHabilidade3) {
        npcHabilidade1 = classeInfo.basicas[(Math.random() * classeInfo.basicas.length) | 0];
    } else if (npcHabilidade2 === npcHabilidade3) {
        npcHabilidade2 = classeInfo.basicas[(Math.random() * classeInfo.basicas.length) | 0];
    }

    npcHabilidade4 = classeInfo.avancadas[(Math.random() * classeInfo.avancadas.length) | 0];
    npcHabilidade5 = classeInfo.avancadas[(Math.random() * classeInfo.avancadas.length) | 0];

    if (npcHabilidade4 === npcHabilidade5) {
        npcHabilidade5 = classeInfo.avancadas[(Math.random() * classeInfo.avancadas.length) | 0];
    }

    // Verifica o nível do personagem:
    if (npcNivel <= 2) {
        npcHabilidade2 = "-";
        npcHabilidade3 = "-";
        npcHabilidade4 = "-";
        npcHabilidade5 = "-";
    } else if (npcNivel >= 3 && npcNivel < 5) {
        npcHabilidade3 = "-";
        npcHabilidade4 = "-";
        npcHabilidade5 = "-";
    } else if (npcNivel >= 5 && npcNivel < 6) {
        npcHabilidade4 = "-";
        npcHabilidade5 = "-";
    } else if (npcNivel >= 6 && npcNivel < 8) {
        npcHabilidade5 = "-";
    } else if (npcNivel === 10) {
        npcHabilidade5 = classeInfo.final[0];
    }

    document.getElementById("habilidadeClasse1").innerHTML = npcHabilidade1;
    document.getElementById("habilidadeClasse2").innerHTML = npcHabilidade2;
    document.getElementById("habilidadeClasse3").innerHTML = npcHabilidade3;
    document.getElementById("habilidadeClasse4").innerHTML = npcHabilidade4;
    document.getElementById("habilidadeClasse5").innerHTML = npcHabilidade5;
}

function geraPontos() {
    pontosVida = 30;
    pontosMana = 30;

    if (npcClasse === "Druida" || npcClasse === "Feiticeiro" || npcClasse === "Sacerdote" || npcClasse === "Xamã") {
        pontosVida = pontosMana - 10;
        pontosMana = pontosVida + 20;
    }

    document.getElementById("pontosVida").innerHTML = pontosVida;
    document.getElementById("pontosMana").innerHTML = pontosMana;
}

function verificaSexo() {
    if (sexo === "Feminino" & npcRaca === "Anão") {
        npcRaca = "Anã";
    } else if (sexo === "Feminino" & npcRaca === "Astério Parbani") {
        npcRaca = "Astéria Parbani";
        npcAtributoRaca = [3, 2, 3, 2];
        npcAutomaticaRacaNome = "Faro";
        npcAutomaticaRacaDesc = "Você possui um faro extremamente aguçado. Você rola +1d6 quando puder fazer testes que envolvam o faro,e pode perceber,detectar,rastrear e identificar pessoas e locais através dele. O Mestre pode realizar testes para ver se você consegue farejar mesmo quando você não estiver ativamente procurando odores específicos.";
    } else if (sexo === "Feminino" & npcRaca === "Centauro") {
        npcRaca = "Centáuride";
    } else if (sexo === "Feminino" & npcRaca === "Elfo") {
        npcRaca = "Elfa";
    } else if (sexo === "Feminino" & npcRaca === "Fauno") {
        npcRaca = "Faunesa";
    } else if (sexo === "Feminino" & npcRaca === "Humano") {
        npcRaca = "Humana";
    } else if (sexo === "Feminino" & npcRaca === "Metadílio") {
        npcRaca = "Metadília";
    } else if (sexo === "Feminino" & npcRaca === "Metadílio") {
        npcRaca = "Metadília";
    } else if (sexo === "Masculino" & npcRaca === "Astéria Parbani") {
        npcRaca = "Astério Parbani";
        npcAtributoRaca = [5, 2, 2, 3];
        npcAutomaticaRacaNome = "Chifres Poderosos";
        npcAutomaticaRacaDesc = "Descrição: Você pode desferir uma marrada poderosa com seus chifres,causando dano igual à Força +4/Contusão. Qualquer alvo atingido por um ataque feito com seus chifres precisa vencer um confronto de força contra você ou será derrubado. Se o alvo for derrubado,ele ficará Atordoado por 1 turno.";
    } else {
        npcRaca = npcInfoRaca.raca;
    }

    // Classes
    if (sexo === "Feminino" & npcClasse === "Bardo") {
        npcClasse = "Barda";
    } else if (sexo === "Feminino" & npcClasse === "Druida") {
        npcClasse = "Druidisa";
    } else if (sexo === "Feminino" & npcClasse === "Feiticeiro") {
        npcClasse = "Feiticeira";
    } else if (sexo === "Feminino" & npcClasse === "Guerreiro") {
        npcClasse = "Guerreira";
    } else if (sexo === "Feminino" & npcClasse === "Ladino") {
        npcClasse = "Ladina";
    } else if (sexo === "Feminino" & npcClasse === "Paladino") {
        npcClasse = "Paladina";
    } else if (sexo === "Feminino" & npcClasse === "Patrulheiro") {
        npcClasse = "Patrulheira";
    } else if (sexo === "Feminino" & npcClasse === "Rúnico") {
        npcClasse = "Rúnica";
    } else if (sexo === "Feminino" & npcClasse === "Sacerdote") {
        npcClasse = "Sacerdotisa";
    } else if (sexo === "Feminino" & npcClasse === "Xamã") {
        npcClasse = "Xamanisa";
    } else {
        npcClasse = classeInfo.classe;
    }

    // Altera o HTML
    document.getElementById("racaNPC").innerHTML = npcRaca;
    document.getElementById("classeNPC").innerHTML = npcClasse;
    document.getElementById("atributoRacaFor").innerHTML = npcAtributoRaca[0];
    document.getElementById("atributoRacaAgi").innerHTML = npcAtributoRaca[1];
    document.getElementById("atributoRacaInt").innerHTML = npcAtributoRaca[2];
    document.getElementById("atributoRacaVon").innerHTML = npcAtributoRaca[3];
    document.getElementById("automaticaRacaNome").innerHTML = npcAutomaticaRacaNome;
    document.getElementById("automaticaRacaTipo").innerHTML = npcAutomaticaRacaTipo;
    document.getElementById("automaticaRacaDesc").innerHTML = npcAutomaticaRacaDesc;
}

function somaAtributos() {
    nivelA = [0, 0, 1, 1];
    nivelB = [0, 1, 0, 1];
    nivelC = [1, 0, 0, 1];
    nivelD = [0, 1, 1, 0];
    nivelE = [1, 0, 1, 0];
    nivelF = [1, 1, 0, 0];
    listaAtb = [nivelA, nivelB, nivelC, nivelD, nivelE, nivelF];
    somaAtbNv4 = listaAtb[(Math.random() * listaAtb.length) | 0];
    somaAtbNv7 = listaAtb[(Math.random() * listaAtb.length) | 0];
    somaAtbNv10 = listaAtb[(Math.random() * listaAtb.length) | 0];

    if (npcNivel > 3 && npcNivel < 7) {
        nivelUp = somaAtbNv4;
    } else if (npcNivel >= 7 && npcNivel < 10) {
        //nivelUp = somaAtbNv4 + somaAtbNv7;
        somaF = somaAtbNv4[0] + somaAtbNv7[0];
        somaA = somaAtbNv4[1] + somaAtbNv7[1];
        somaI = somaAtbNv4[2] + somaAtbNv7[2];
        somaV = somaAtbNv4[3] + somaAtbNv7[3];
        nivelUp = [somaF, somaA, somaI, somaV];
    } else if (npcNivel = 10) {
        somaF = somaAtbNv4[0] + somaAtbNv7[0] + somaAtbNv10[0];
        somaA = somaAtbNv4[1] + somaAtbNv7[1] + somaAtbNv10[1];
        somaI = somaAtbNv4[2] + somaAtbNv7[2] + somaAtbNv10[2];
        somaV = somaAtbNv4[3] + somaAtbNv7[3] + somaAtbNv10[3];
        nivelUp = [somaF, somaA, somaI, somaV];
    } else {
        nivelUp = [0, 0, 0, 0];
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    forca = npcAtributoRaca[0] + npcAtributoClasse[0] + nivelUp[0];
    agilidade = npcAtributoRaca[1] + npcAtributoClasse[1] + nivelUp[1];
    inteligencia = npcAtributoRaca[2] + npcAtributoClasse[2] + nivelUp[2];
    vontade = npcAtributoRaca[3] + npcAtributoClasse[3] + nivelUp[3];

    //exibe na tela onde mostra a soma dos atributos
    document.getElementById("atributoNivelFor").innerHTML = nivelUp[0];
    document.getElementById("atributoNivelAgi").innerHTML = nivelUp[1];
    document.getElementById("atributoNivelInt").innerHTML = nivelUp[2];
    document.getElementById("atributoNivelVon").innerHTML = nivelUp[3];

    //exibe a soma total dos atributos
    document.getElementById("atributoTotalFor").innerHTML = forca;
    document.getElementById("atributoTotalAgi").innerHTML = agilidade;
    document.getElementById("atributoTotalInt").innerHTML = inteligencia;
    document.getElementById("atributoTotalVon").innerHTML = vontade;
}

function geraNome() {
    _nomeMasculino = JSON.parse(listaPrimeiroNomeMasc);
    _nomeFeminino = JSON.parse(listaPrimeiroNomeFem);
    _sobrenome = JSON.parse(listaSobrenomes);

    nomeMasculino = _nomeMasculino.nome[(Math.random() * _nomeMasculino.nome.length) | 0];
    nomeFeminino = _nomeFeminino.nome[(Math.random() * _nomeFeminino.nome.length) | 0];
    sobrenome = _sobrenome.nome[(Math.random() * _sobrenome.nome.length) | 0];

    if (sexo === "Masculino") {
        nome = nomeMasculino + " " + sobrenome;
    } else {
        nome = nomeFeminino + " " + sobrenome;
    }

    document.getElementById("nomeNPC").innerHTML = nome;
    document.getElementById("titulo").innerHTML = "Painel - " + nome;
}

function geraArmadura() {
    bonusArmadura = 0;
    if (npcRaca === "Mahok") {
        bonusArmadura = 4;
    } else {
        bonusArmadura = 0;
    }
}

function geraDefesa() {
    geraArmadura();
    if (vontade > inteligencia) {
        atributomental = vontade;
    } else {
        atributomental = inteligencia;
    }

    if (npcRaca === "Metadílio" || npcRaca === "Metadília") {
        esquiva = agilidade + bonusArmadura + 6;
        bloqueio = forca + bonusArmadura + 6;
        determinacao = atributomental + 8;
    } else {
        bloqueio = forca + bonusArmadura + 5;
        esquiva = agilidade + bonusArmadura + 5;
        determinacao = atributomental + 8;
    }

    if (bloqueio > esquiva) {
        defesa = bloqueio;
    } else {
        defesa = esquiva;
    }

    document.getElementById("bloqueioTotal").innerHTML = bloqueio;
    document.getElementById("esquivaTotal").innerHTML = esquiva;
    document.getElementById("defesaTotal").innerHTML = defesa;
    document.getElementById("determinacaoTotal").innerHTML = determinacao;
}

function removerArmadura() {
    geraDefesa();
    defesa = defesa - bonusArmadura;
    document.getElementById("defesaTotal").innerHTML = defesa;
    document.getElementsByClassName("defesa")[0].style.color = "red";
}

function adicionarArmadura() {
    geraDefesa();
    defesa = defesa;
    document.getElementById("defesaTotal").innerHTML = defesa;
    document.getElementsByClassName("defesa")[0].style.color = "#FFF";
}

function atributosPadrao() {
    forcaPadrao = npcAtributoRaca[0] + npcAtributoClasse[0] + nivelUp[0];
    agilidadePadrao = npcAtributoRaca[1] + npcAtributoClasse[1] + nivelUp[1];
    inteligenciaPadrao = npcAtributoRaca[2] + npcAtributoClasse[2] + nivelUp[2];
    vontadePadrao = npcAtributoRaca[3] + npcAtributoClasse[3] + nivelUp[3];

    forca = forcaPadrao;
    agilidade = agilidadePadrao;
    inteligencia = inteligenciaPadrao;
    vontade = vontadePadrao;

    document.getElementById("atributoTotalFor").innerHTML = forca;
    document.getElementById("atributoTotalAgi").innerHTML = agilidade;
    document.getElementById("atributoTotalInt").innerHTML = inteligencia;
    document.getElementById("atributoTotalVon").innerHTML = vontade;

    document.getElementsByClassName("somaFor")[0].style.filter = "blur(0px)";
    document.getElementsByClassName("somaAgi")[0].style.filter = "blur(0px)";
    document.getElementsByClassName("somaInt")[0].style.filter = "blur(0px)";
    document.getElementsByClassName("somaVon")[0].style.filter = "blur(0px)";

    geraDefesa();
    verificaHabilidade();
}

function upaFor() {
    document.getElementById("atributoTotalFor").innerHTML = forca += 1;
    if (forca === forcaPadrao) {
        document.getElementsByClassName("somaFor")[0].style.filter = "blur(0px)";
    } else {
        document.getElementsByClassName("somaFor")[0].style.filter = "blur(2px)";
    }
    geraDefesa();
    verificaHabilidade();
}

function dimFor() {
    document.getElementById("atributoTotalFor").innerHTML = forca -= 1;
    if (forca <= 0) {
        upaFor();
    }
    if (forca === forcaPadrao) {
        document.getElementsByClassName("somaFor")[0].style.filter = "blur(0px)";
    } else {
        document.getElementsByClassName("somaFor")[0].style.filter = "blur(2px)";
    }
    geraDefesa();
    verificaHabilidade();
}

function upaAgi() {
    document.getElementById("atributoTotalAgi").innerHTML = agilidade += 1;
    if (agilidade === agilidadePadrao) {
        document.getElementsByClassName("somaAgi")[0].style.filter = "blur(0px)";
    } else {
        document.getElementsByClassName("somaAgi")[0].style.filter = "blur(2px)";
    }
    geraDefesa();
    verificaHabilidade();
}

function dimAgi() {
    document.getElementById("atributoTotalAgi").innerHTML = agilidade -= 1;
    if (agilidade <= 0) {
        upaAgi();
    }
    if (agilidade === agilidadePadrao) {
        document.getElementsByClassName("somaAgi")[0].style.filter = "blur(0px)";
    } else {
        document.getElementsByClassName("somaAgi")[0].style.filter = "blur(2px)";
    }
    geraDefesa();
    verificaHabilidade();
}

function upaInt() {
    document.getElementById("atributoTotalInt").innerHTML = inteligencia += 1;
    if (inteligencia === inteligenciaPadrao) {
        document.getElementsByClassName("somaInt")[0].style.filter = "blur(0px)";
    } else {
        document.getElementsByClassName("somaInt")[0].style.filter = "blur(2px)";
    }
    geraDefesa();
    verificaHabilidade();
}

function dimInt() {
    document.getElementById("atributoTotalInt").innerHTML = inteligencia -= 1;
    if (inteligencia <= 0) {
        upaInt();
    }
    if (inteligencia === inteligenciaPadrao) {
        document.getElementsByClassName("somaInt")[0].style.filter = "blur(0px)";
    } else {
        document.getElementsByClassName("somaInt")[0].style.filter = "blur(2px)";
    }
    geraDefesa();
    verificaHabilidade();
}

function upaVon() {
    document.getElementById("atributoTotalVon").innerHTML = vontade += 1;
    if (vontade === vontadePadrao) {
        document.getElementsByClassName("somaVon")[0].style.filter = "blur(0px)";
    } else {
        document.getElementsByClassName("somaVon")[0].style.filter = "blur(2px)";
    }
    geraDefesa();
    verificaHabilidade();
}

function dimVon() {
    document.getElementById("atributoTotalVon").innerHTML = vontade -= 1;
    if (vontade <= 0) {
        upaVon();
    }
    if (vontade === vontadePadrao) {
        document.getElementsByClassName("somaVon")[0].style.filter = "blur(0px)";
    } else {
        document.getElementsByClassName("somaVon")[0].style.filter = "blur(2px)";
    }
    geraDefesa();
    verificaHabilidade();
}

function upaDef() {
    document.getElementById("defesaTotal").innerHTML = defesa += 1;
}

function dimDef() {
    document.getElementById("defesaTotal").innerHTML = defesa -= 1;
}

function verificaHabilidade() {
    if (npcHabilidade === "Berserkir" & vontade < 4) {
        npcHabilidadeNome = "Berserkir";
        npcHabilidadeTipo = "Habilidade (Característica) – Suporte<br>Requisito: Fúria Bestial, <strong>Vontade 4</strong>";
        npcHabilidadeDescricao = "Você não atende aos requisitos para usar essa Habilidade!";
        document.getElementById("habilidadeRaca").innerHTML = "<strike>" + npcHabilidade + "</strike>";
    } else if (npcHabilidade === "Berserkir" & vontade >= 4) {
        npcHabilidadeNome = "Berserkir";
        npcHabilidadeTipo = "Habilidade (Característica) – Suporte<br>Requisito: Fúria Bestial, Vontade 4";
        npcHabilidadeDescricao = "Você é um escolhido do Urso como seu protegido, e é amparado pela resistência dele quando evoca a Fúria Bestial. Enquanto estiver em Fúria Bestial, você fica Resistente à Corte, Resistente à Perfuração e Resistente à Contusão. Você não pode estar usando armaduras ou escudos para que essa Habilidade tenha efeito, já que o Urso espera que você considere a proteção dele acima de qualquer proteção mundana.<br>Especial: Se você tiver um Espírito Animal que não seja o Urso, você não pode possuir esta Habilidade. Se você possuir esta Habilidade, você só pode escolher o Urso como seu Espírito Animal.";
        document.getElementById("habilidadeRaca").innerHTML = "Fúria Bestial e " + npcHabilidade;
    } else {
        npcHabilidadeNome = "-";
        npcHabilidadeTipo = "-";
        npcHabilidadeDescricao = "-";
    }
    document.getElementById("npcHabilidadeNome").innerHTML = npcHabilidadeNome;
    document.getElementById("npcHabilidadeTipo").innerHTML = npcHabilidadeTipo;
    document.getElementById("npcHabilidadeDescricao").innerHTML = npcHabilidadeDescricao;
}

function alteraSexo() {
    geraSexo();
    verificaSexo();
    atributosPadrao();
    somaAtributos();
    geraNome();
}

function alteraRaca() {
    geraRaca();
    verificaSexo();
    atributosPadrao();
    somaAtributos();
    geraDefesa();
    verificaHabilidade();
}

function alteraClasse() {
    geraClasse();
    verificaSexo();
    atributosPadrao();
    somaAtributos();
    geraDefesa();
    verificaHabilidade();
    geraHabilidades();
    geraPontos();
}

function alteraNivel() {
    geraNivel();
    geraHabilidades();
    geraPontos();
    somaAtributos();
}

function geraNPC() {
    geraNivel();
    geraSexo();
    geraRaca();
    geraClasse();
    verificaSexo();
    geraNome();
    somaAtributos();
    geraPontos();
    geraDefesa();
    geraHabilidades();
    verificaHabilidade();
}

// ESCONDER E EXIBIR CAIXA DE COMANDOS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function esconderBox() {
    document.getElementsByClassName("comandoBox")[0].style.visibility = "hidden";
    document.getElementsByClassName("abrirComandoBox")[0].style.visibility = "visible";
}

function exibirBox() {
    document.getElementsByClassName("comandoBox")[0].style.visibility = "visible";
    document.getElementsByClassName("abrirComandoBox")[0].style.visibility = "hidden";
}


function jsonRaca() {
    return '{"listaRaca":[{"raca":"Aesir","atributos":[4,2,3,3],"automatica":{"nome":"Vigor Nórdico","tipo":"Habilidade (Característica) – Suporte","descricao":"Você nasceu em uma região gelada,e os rigores climáticos de Eishelm tornaram você vigoroso e resiliente. Você é Resistente à Frio e não é afetado nem por efeitos de climas gelados nem por efeitos provenientes de danos por Frio (como Enregelamento)."},"habilidades":["Berserkir","Fúria Bestial","Ulfhednar","Potência","Bravura Selvagem 1","Bravura Selvagem 2","Robustez"]},{"raca":"Anão","atributos":[4,2,3,3],"automatica":{"nome":"Coração da Montanha 1","tipo":"Habilidade (Característica) – Suporte","descricao":"Sua constituição foi forjada nos subterrâneos agrestes e impiedosos,onde apenas os mais resistentes conseguem sobreviver. Você é imune a todos os venenos naturais e mágicos e rola +1d6 em testes para resistir à fadiga,doenças e quaisquer outros efeitos físicos. Além disso,sua Carga é calculada como se você tivesse Força +2."},"habilidades":["Cabeça Dura","Coração da Montanha 2","Duro como Pedra","Estabilidade","Forjado à Fogo","Nascido nas Montanhas","Raça Subterrânea"]},{"raca":"Astério Parbani","atributos":[5,2,2,3],"automatica":{"nome":"Chifres Poderosos","tipo":"Habilidade (Característica) – Suporte","descricao":"Descrição: Você pode desferir uma marrada poderosa com seus chifres,causando dano igual à Força +4/Contusão. Qualquer alvo atingido por um ataque feito com seus chifres precisa vencer um confronto de força contra você ou será derrubado. Se o alvo for derrubado,ele ficará Atordoado por 1 turno."},"habilidades":["Cabeça Dura","Competidor","Faro","Fortaleza","Imparável","Potência","Robustez"]},{"raca":"Centauro","atributos":[4,2,3,3],"automatica":{"nome":"Corpo Equino","tipo":"Habilidade (Característica) – Suporte","descricao":"Descrição: Você possui o dorso de um cavalo. Sua carga é calculada como se você tivesse duas vezes a sua Força normal,seu deslocamento é calculado como se você tivesse duas vezes sua Agilidade normal e você pode rolar +1d6 quando fizer testes de correr,saltar ou evitar ser derrubado.  Além disso,se fizer ataques desarmados com seus cascos,seu dano será Força +2/Contusão. Devido ao seu comprimento,estatura e peso,você tem dificuldades em uma série de atividades (como nadar,escalar e se segurar usando apenas os braços),realizando estas ações como se fosse Inapto,e o Mestre pode decidir que algumas atividades são impossíveis para você – como dar uma cambalhota ou subir uma escada de mão."},"habilidades":["Bravura Selvagem 1","Bravura Selvagem 2","Cabeça Dura","Patas Fortes","Potência","Raça Florestal","Robustez"]},{"raca":"Elfo","atributos":[2,4,3,3],"automatica":{"nome":"Benção de Lathellanis","tipo":"Habilidade (Característica) – Suporte","descricao":"Descrição: A proteção de Lathellanis é evidente em você,assim como uma pálida sombra da astúcia da divindade da natureza. Você é imune à todas as doenças de origem natural ou mágica,dreno de energia e efeitos que causem envelhecimento (de qualquer tipo ou origem). Além disso,Você rola +1d6 em todos os seus testes de Inteligência para perceber e rastrear alvos."},"habilidades":["Arborícola","Dom da Magia","Herança Feérica","Intelecto Élfico","Invisibilidade Natural","Luzes das Fadas","Raça Florestal"]},{"raca":"Faen","atributos":[2,4,3,2],"automatica":{"nome":"Constituição Feérica","tipo":"Habilidade (Característica) – Suporte","descricao":"Descrição: Você possui uma constituição leve e um par de asas que lhe permitem voar. Você pode voar em qualquer direção (com o dobro da sua movimentação normal) e pode parar no ar. No entanto,suas asas precisam bater continua e velozmente,e você não pode planar nem permanecer no ar por mais do que uma hora antes de ter que descansá-las por pelo menos meia hora. Enquanto está voando,o bater das suas asas produzem um zumbido característico e facilmente audível,e é impossível para você se mover em silêncio enquanto voa. Especial: O dano de qualquer manobra de Encontrão usada em voo é duplicado (mas o dano da arma que você usar no Encontrão não é alterado,nem quaisquer outros possíveis efeitos de Encontrão)."},"habilidades":["Dom da Magia","Herança Feérica","Invisibilidade Natural","Isnuu","Luzes das Fadas","Presença Real","Voador Exímio"]},{"raca":"Fauno","atributos":[3,3,3,3],"automatica":{"nome":"Patas com Cascos","tipo":"Habilidade (Característica) – Suporte","descricao":"Descrição: Você possui fortes patas munidas de cascos resistentes. Você pode rolar +1d6 quando fizer testes de correr,saltar ou desviar de obstáculos,e seu Deslocamento é aumentado em 1. Além disso,se fizer ataques desarmados com seus cascos,seu dano será Força +2/Contusão."},"habilidades":["Cascos Ágeis","Flauta de Pã","Marrada","Patas Fortes","Pintura Corporal","Raça Florestal","Sentidos de Caçador"]},{"raca":"Fira","atributos":[3,3,3,3],"automatica":{"nome":"Habitante do Deserto","tipo":"Habilidade (Característica) – Suporte","descricao":"Descrição: Você descende de um povo que enfrentou os rigores do deserto sem esmorecer. Você é Resistente a Fogo e pode passar até 5 dias sem precisar ingerir água. Além disso,você não é afetado por climas particularmente quentes ou áridos."},"habilidades":["Chamas Internas 1","Chamas Internas 2","Cavaleiro Experiente","Fulgurante","Mente Iluminada","Sopro de Fogo","Vigor do Deserto"]},{"raca":"Humano","atributos":[3,3,3,3],"automatica":{"nome":"Adaptabilidade","tipo":"Habilidade (Característica) – Suporte","descricao":"Descrição: Você se adaptou ao ambiente em que cresceu ou à atividade que escolheu – ou precisou – desempenhar. Você tem +1 em qualquer um dos seus atributos a sua escolha."},"habilidades":["Assuntos Diversos","Audácia","Barganha","Diversidade","O Dobro ou Nada","Gregário","Sorte"]},{"raca":"Juban","atributos":[4,2,3,4],"automatica":{"nome":"Corpo Pesado","tipo":"Habilidade (Característica) – Suporte","descricao":"Descrição: Você possui uma musculatura poderosa – e pesada. Você rola +1d6 em testes de para não ser derrubado e para realizar encontrões,mas é considerado Inapto em testes de natação,escalada e salto. Além disso,você precisa de uma ação de rodada completa para se levantar ao invés de uma ação de movimento,mas sua carga é calculada como se você tivesse Força +2."},"habilidades":["Fortaleza","Garras","Imparável","Mordida Poderosa","Robustez","Rugido de Ahogr","Sentidos de Caçador"]},{"raca":"Levent","atributos":[2,3,3,3],"automatica":{"nome":"Asas Pesadas","tipo":"Habilidade (Característica) – Suporte","descricao":"Descrição: Você possui grandes asas e pode voar,precisando de um espaço igual à sua envergadura para pegar impulso antes de alçar voo. Quando estiver voando,você não pode parar no ar (mas pode planar) e seu deslocamento em voo é o dobro de seu deslocamento normal. Especial: O dano de qualquer manobra de Encontrão usada em voo é duplicado (mas o dano da arma que você usar no Encontrão não é alterado,nem quaisquer outros possíveis efeitos do Encontrão). A envergadura do personagem é duas vezes a sua altura."},"habilidades":["Asas Fortes","Contato com Espíritos","Comunhão com Espíritos","Dançarino do Ar","Mente Iluminada","Movimento Brusco","Olhos de Águia"]},{"raca":"Mahok","atributos":[5,2,2,3],"automatica":{"nome":"Pele de Pedra 1","tipo":"Habilidade (Característica) – Suporte","descricao":"Descrição: Sua pele é composta por uma grossa camada de rocha que o tornam extremamente resistente e pesado. Você recebe +1d6 em todos os seus testes para evitar ser derrubado,resistir à doenças e venenos,empurrar ou segurar peso,mas é considerado Inapto em testes de escalar,saltar,correr ou se mover com agilidade. Você precisa de um turno inteiro para se levantar,ao invés de uma ação de movimento e para você é impossível nadar. Você não possui o sentido do tato,mas não sente desconforto por ambientes com condições climáticas hostis. Seus ataques desarmados causam dano igual a Força +2/Contusão e você tem Defesa +4 (Esse bônus de defesa conta como Armadura). Além disso,sua pele tem as características de uma armadura pesada,mas a conformação única da sua pele o impede de usar armaduras,e qualquer roupa precisa ser feita sob medida para você,custando duas vezes mais que o normal."},"habilidades":["Abraço de Pedra","Braços Extras 1","Braços Extras 2","Estabilidade","Gregário","Nascido nas Montanhas","Pele de Pedra 2"]},{"raca":"Metadílio","atributos":[2,4,3,3],"automatica":{"nome":"Tamanho Pequeno","tipo":"Habilidade (Característica) – Suporte","descricao":"Descrição: Você tem uma estatura baixa,o que torna difícil lhe atingir ou detectar. Você pode rolar +1d6 quando fizer testes de Furtividade. Além disso,seu bônus automático de Defesa é 6 ao invés de 5. No entanto,para você armas corporais que requerem duas mãos são grandes demais para serem usadas com eficiência,e você precisa de ambas as mãos para usar qualquer arma com FN 5 ou mais."},"habilidades":["Astuto","Balofo","Barganha","Barriga Cheia","Esconderijo Invisível","Sorte","Táticas de Guerrilha"]},{"raca":"Tailox","atributos":[2,4,3,3],"automatica":{"nome":"Pernas Vulpinas","tipo":"Habilidade (Característica) – Suporte","descricao":"Descrição: Suas pernas são flexíveis e próprias para saltar,terminando em pés pequenos dotados de solas acolchoadas que permitem que você ande quase sem fazer sons. Você rola +1d6 quando fizer testes para saltar,correr e se mover em silêncio. Além disso,você tem Deslocamento +1 e a distância dos seus saltos é aumentada em 1 metro."},"habilidades":["Astuto","Audácia","Contos da Estrada","Faro","Forma da Raposa","Raça Florestal","Visão Auditiva"]}]}';
}

function jsonClasse() {
    return '{"listaClasse":[{"classe":"Bardo", "atributos":[0, 1, 0, 1], "automatica":{"nome":"Poesia dos Bardos","tipo":"Habilidade – Suporte","descricao":"Através das inúmeras canções e poemas épicos, você conhece muitas histórias e lendas. Você pode rolar +1d6 quando fizer testes referentes à qualquer tipo de conhecimento. Se o conhecimento em questão for considerado perdido, maçante ou técnico para figurar uma canção ou poema, não há como o Bardo conseguir informações sobre o assunto."},"basicas":["Aparar","Ataque Redirecionado","Canção da Provocação","Canção Desesperadora","Canção do Triunfo","Canção Exultante","Eloquente", "Evasão", "Furtivo", "Gregário", "Grito de Guerra 1", "Grito Ensurdecedor", "Grito Estilhaçador", "Língua Afiada", "Malabarista", "Melodia Dançante", "Melodia do Enjoo", "Melodia do Repouso", "Melodia Sonífera", "Mestre das Notas", "Truque Sujo"], "avancadas":["Canção da Sereia","Canção Desconcentrante","Coração da Batalha","Grito de Guerra 2","Grito de Intimidação","Melodia da Fúria","Melodia dos Animais","Trapaceiro Impecável","Virtuoso","Vocalista"], "final":["Canção do Réquiem"]},{ "classe":"Druida", "atributos":[0, 0, 1, 1], "automatica":{ "nome":"Conhecimento Místico", "tipo":"Habilidade – Suporte", "descricao":"Você está ligado as energias místicas provenientes de forças superiores e consegue comungar com elas. Você pode ler e utilizar tomos mágicos e desenhar Selos Místicos (veja a página 36 para regras sobre magia). Você também pode entrar em um estado de transe se concentrando por 1 minuto. Enquanto continuar meditando dessa forma, você recupera uma quantidade de Pontos de Mana igual à sua Vontade a cada 10 minutos."}, "basicas":[ "Aparar Magia", "Asas Celestiais", "Benção de Ellenis", "Bestializar", "Bons Frutos", "Caminhada Mágica", "Companheiro Animal 1", "Companheiro Animal 2", "Convocar Animais", "Detectar Magia", "Entrelaçar", "Espírito Animal", "Evocar Temporal", "Fruto Revigorante", "Herbalismo", "Mover Terra", "Princípio Natural", "Rajada de Água", "Rajada de Espinhos", "Sabedoria Selvagem", "Turbilhão"], "avancadas":[ "Companheiro Animal 3", "Conjurar Abrigo", "Despertar a Flora", "Dissipar Magia", "Evocar Nevasca", "Gavinhas e Espinhos", "Olho do Furacão", "Orbe de Contenção", "Punho de Pedra", "Venefício"], "final":[ "Hierofante"] },{ "classe":"Espadachim", "atributos":[1, 1, 0, 0], "automatica":{ "nome":"Mestre de Armas 1", "tipo":"Habilidade – Suporte", "descricao":"Você é particularmente eficiente no uso de armas brancas. Sempre que realizar um ataque corporal usando uma arma, adicione 3 ao dano do ataque."}, "basicas":[ "Acrobata", "Aparar", "Ataque Aleijador", "Ataque Giratório", "Ataque Redirecionado", "Combate com Duas Armas 1", "Combate Tático", "Corte Arterial", "Dança das Espadas 1", "Desarmar Oponente", "Eloquente", "Evasão", "Falhas da Armadura", "Golpes Rápidos", "Investida Mortal", "Língua Afiada", "Movimentos Evasivos", "Panache", "Sem Escapatória", "Touché", "Truque Sujo"], "avancadas":[ "Combate com Duas Armas 2", "Coração da Batalha", "Dança das Espadas 2", "Decapitar", "Implacável", "Mestre de Armas 2", "Retalhar", "Ripostar", "Tempestade de Lâminas", "Valor da Vitória"], "final":[ "Senhor das Lâminas"] },{ "classe":"Feiticeiro", "atributos":[0, 0, 1, 1], "automatica":{ "nome":"Conhecimento Arcano", "tipo":"Habilidade – Suporte", "descricao":"Você é capaz de decifrar e canalizar os fenômenos do sobrenatural. Você pode ler e utilizar tomos mágicos e desenhar Runas Arcanas (veja a página 36 para regras sobre magia). Você também é capaz de canalizar sua energia para a conjuração de fenômenos mágicos com eficiência. Sempre que usar uma Habilidade do tipo Magia, você pode gastar Pontos de Vida ao invés de Pontos de Mana para pagar seu custo. Nesse caso, cada 2 Pontos de Vida equivalem à 1 Ponto de Mana."}, "basicas":[ "Aparar Magia", "Arco Voltaico", "Aríete Mágico", "Bola de Fogo", "Congelar", "Detectar Magia", "Eletricidade Estática", "Inflamar", "Infravisão", "Invocar Elemental 1", "Invocar Elemental 2", "Levitar", "Manto Crepitante", "Mente Disciplinada", "Parede de Gelo", "Rajada de Gelo", "Relâmpago 1", "Rajada Elemental", "Resistência Elemental", "Telecinésia", "Teleporte 1"], "avancadas":[ "Aptidão Elemental", "Dissipar Magia", "Eletrosfera", "Incandescer", "Inferno", "Invocar Elemental 3", "Prisão de Gelo", "Relâmpago 2", "Teleporte 2", "Tempestade de Gelo"], "final":[ "Maestria Elemental"] },{ "classe":"Guerreiro", "atributos":[1, 1, 0, 0], "automatica":{ "nome":"Mestre de Armas 1", "tipo":"Habilidade – Suporte", "descricao":"Você é particularmente eficiente no uso de armas brancas. Sempre que realizar um ataque corporal bem sucedido, adicione 3 ao dano do ataque."}, "basicas":[ "Anular Golpe", "Ataque do Búfalo", "Ataque Giratório", "Ataque Simultâneo", "Brigão", "Combate em Grupo", "Combate com Duas Armas 1", "Combate Pesado", "Combate Tático", "Defesa Agressiva", "Defletor", "Estabilidade", "Golpe Devastador 1", "Golpe com Escudo", "Grito de Guerra 1", "Guerreiro de Aço 1", "Investida Mortal", "Nocautear", "Parede de Escudos", "Sem Escapatória", "Transpor"], "avancadas":[ "Combate com Duas Armas 2", "Força de Explosão", "Golpe Devastador 2", "Grito de Guerra 2", "Grito de Intimidação", "Guerreiro de Aço 2", "Implacável", "Investida Forte", "Mestre de Armas 2", "Valor da Vitória"], "final":[ "Mestre de Armas 3"] },{ "classe":"Ladino", "atributos":[0, 1, 1, 0], "automatica":{ "nome":"Gatuno", "tipo":"Habilidade – Suporte", "descricao":"Você aprendeu com a dura vida nas ruas a sobreviver na selva urbana. Você nunca é considerado Inapto quando tentar furtar bolsos ou arrombar fechaduras usando um kit de arrombamento. Além disso, você rola +1d6 quando tentar escalar, se esconder e tentar passar despercebido."}, "basicas":[ "Acrobata", "Aparar", "Armadilheiro", "Ataque Aleijador", "Ataque Evasivo", "Ataque Redirecionado", "Combate com Duas Armas 1", "Contatos no Crime", "Corte Arterial", "Eloquente", "Evasão", "Falhas da Armadura", "Flanquear", "Flexível", "Furtivo", "Golpes Rápidos", "Mestre das Adagas 1", "Mestre das Adagas 2", "Movimentos Evasivos", "Malabarista", "Truque Sujo"], "avancadas":[ "Camuflagem", "Combate com Duas Armas 2", "Emboscar", "En Passant", "Explorar Surpresa", "Improvisação Ladina", "Mestre das Adagas 3", "Passo Leve", "Ripostar", "Trapaceiro Impecável"], "final":[ "Mestre Especialista"] },{ "classe":"Paladino", "atributos":[1, 0, 0, 1], "automatica":{ "nome":"Mestre de Armas 1", "tipo":"Habilidade – Suporte", "descricao":"Você é particularmente eficiente no uso de armas brancas. Sempre que realizar um ataque corporal bem sucedido, adicione 3 ao dano do ataque."}, "basicas":[ "Austeridade", "Cavaleiro Experiente", "Código da Coragem", "Código da Cortesia", "Código da Honestidade", "Código da Justiça", "Código da Lealdade", "Combate Montado", "Combate Tático", "Defletor", "Égide", "Estabilidade", "Grito de Guerra 1", "Guerreiro de Aço 1", "Justiça Final 1", "Montaria Especial 1", "Montaria Especial 2", "Motivar", "Nocautear", "Parede de Escudos", "Sem Escapatória"], "avancadas":[ "Banir", "Comando Heroico", "Coração da Batalha", "Destemor", "Grito de Guerra 2", "Guerreiro de Aço 2", "Implacável", "Justiça Final 2", "Montaria Especial 3", "Valor da Vitória"], "final":[ "Integridade"] },{ "classe":"Patrulheiro", "atributos":[0, 1, 1, 0], "automatica":{ "nome":"Arqueria", "tipo":"Habilidade – Suporte", "descricao":"Você recebe +2 em todos os seus ataques à distância (incluindo arremessos) e em testes envolvendo Arcos, Bestas, Prodds e fundas de todos os tipos. Você sabe como consertar essas armas e como fabricar a munição para elas. Especial: para consertar as armas ou fabricar a munição, você deve ter as matérias primas adequadas e as ferramentas, com isso faça um teste de Inteligência, a dificuldade é 10 (o Mestre pode aumentar a dificuldade no caso de consertos muito complexos ou de uma fabricação do zero)."}, "basicas":[ "Acrobata", "Armadilheiro", "Ataque Aleijador", "Benção de Ellenis", "Caçador de [Criatura]", "Chuva de Flechas", "Companheiro Animal 1", "Companheiro Animal 2", "Disparo Forte", "Disparo Certeiro", "Espírito Animal", "Evasão", "Falhas da Armadura", "Flechas Rápidas", "Furtivo", "Herbalismo", "Precisão", "Retesar Eficiente", "Sabedoria Selvagem", "Truque Sujo"], "avancadas":[ "Caçador de [Monstro]", "Camuflagem", "Chuva de Flechas 2", "Companheiro Animal 3", "Emboscar", "Empalar", "Matador de [Criatura]", "Olho da Águia", "Passo Leve", "Venefício"], "final":[ "Arqueria de Mestre"] },{ "classe":"Rúnico", "atributos":[1, 0, 1, 0], "automatica":{ "nome":"Conhecimento Arcano", "tipo":"Habilidade – Suporte", "descricao":"Você é capaz de decifrar e canalizar os fenômenos do sobrenatural. Você pode ler e utilizar tomos mágicos e desenhar Runas Arcanas (veja a página 36 para regras de magia). Você também é capaz de canalizar sua energia para a conjuração de fenômenos mágicos com eficiência. Sempre que usar uma Habilidade do tipo Magia, você pode gastar Pontos de Vida ao invés de Pontos de Mana para pagar seu custo. Nesse caso, cada 2 Pontos de Vida equivalem à 1 Ponto de Mana."}, "basicas":[ "Aparar Magia", "Arma Fiel", "Arma Incandescente", "Arma Gélida", "Arma Relampejante", "Armadura Fiel", "Ataque Fantasma", "Combate Tático", "Conjurar Escudo", "Desativar Item", "Detectar Magia", "Enfeitiçar Arma 1", "Enfeitiçar Armadura", "Guerreiro de Aço 1", "Mente Disciplinada", "Onda de Chamas", "Onda de Frio", "Onda de Raios", "Onda Fantasma", "Resistência Elemental"], "avancadas":[ "Aptidão Elemental", "Ataque Chocante", "Ataque Congelante", "Ataque Flamejante", "Golpe do Vento", "Dissipar Magia", "Enfeitiçar Arma 2", "Guerreiro de Aço 2", "Implacável", "Mestre de Armas 2"], "final":[ "Destruição Elemental"] }]}';
}

function jsonTesteClasse() {
    return '{"list":[{ "classe":"Paladino", "atributos":[1, 0, 0, 1], "automatica":{ "nome":"Mestre de Armas 1", "tipo":"Habilidade – Suporte", "descricao":"Você é particularmente eficiente no uso de armas brancas. Sempre que realizar um ataque corporal bem sucedido, adicione 3 ao dano do ataque."}, "basicas":[ {"Austeridade":{"tipo":"Habilidade (Característica) – Suporte","descricao":"Sua integridade e retidão são tão inabaláveis que é impossível para outros influenciarem suas decisões. Você é imune a efeitos mentais (mas não Ilusões ou efeitos de Medo) e tentativas de influenciar sua opinião com persuasão e manipulação."}}, {"Cavaleiro Experiente":{"tipo":"Habilidade (Técnica) – Suporte","descricao":"Você passou muito tempo com animais de montaria e conhece seus hábitos, características e como lidar com eles. Você recebe +1d6 em todos os seus testes referentes à criaturas com a Habilidade Montaria – incluindo cavalgar, treinar e atacar."}}, ], "avancadas":["Banir"], "final":["Integridade"] }]}';
}

listaPrimeiroNomeMasc = '{"nome":["Aaron","Abbey","Abdul","Abdullah","Abe","Abel","Abraham","Abram","Ace","Adalberto","Adam","Adan","Addyson","Aden","Adison","Adolfo","Adolph","Adrian","Agustin","Ahmad","Ahmed","Akira","Al","Alan","Albert","Alberto","Alden","Aldo","Alec","Alejandro","Alessandro","Alex","Alexander","Alexis","Alexzander","Alfonso","Alfonzo","Alfred","Alfredo","Ali","Allan","Allen","Allyson","Alonso","Alonzo","Alphonse","Alphonso","Alton","Alva","Alvaro","Alvin","Alyson","Amado","Ambrose","Amir","Amos","Anderson","Andre","Andrea","Andreas","Andres","Andrew","Andy","Angel","Angelo","Anibal","Anthony","Antione","Antoine","Anton","Antone","Antonie","Antonio","Antony","Antwan","Archie","Arden","Ariel","Arjun","Arlen","Arlie","Armand","Armando","Armani","Arnav","Arnold","Arnoldo","Arnulfo","Aron","Arron","Art","Arthur","Arturo","Asa","Ashleigh","Ashley","Aspen","Aubree","Aubrey","August","Augustine","Augustus","Aurelio","Austin","Autumn","Averi","Avery","Axel","Aydin","Bailey","Barney","Baron","Barrett","Barry","Bart","Barton","Basil","Beau","Ben","Benedict","Benito","Benjamin","Bennett","Bennie","Benny","Benton","Bernard","Bernardo","Bernie","Berry","Bert","Bertram","Bill","Billie","Billy","Blaine","Blair","Blake","Bo","Bob","Bobbie","Bobby","Booker","Boris","Boyce","Boyd","Brad","Bradford","Bradley","Bradly","Brady","Bradyn","Braiden","Brain","Branden","Brandon","Brant","Brayan","Brayden","Brendan","Brendon","Brent","Brenton","Bret","Brett","Brian","Brice","Bridger","Britt","Brock","Broderick","Brodie","Brooklyn","Brooks","Bruce","Bruno","Bryan","Bryant","Bryce","Bryon","Buck","Bud","Buddy","Buford","Burl","Burt","Burton","Buster","Byron","Cade","Cael","Caleb","Calvin","Camden","Cameron","Carey","Carl","Carley","Carlo","Carlos","Carlton","Carmelo","Carmen","Carmine","Carol","Carrol","Carroll","Carron","Carsen","Carson","Carter","Cary","Casey","Cason","Cassius","Cecil","Cedric","Cedrick","Cesar","Chad","Chadwick","Chance","Chandler","Chanel","Chang","Charlee","Charles","Charley","Charlie","Chas","Chase","Chauncey","Chaz","Chester","Chet","Chi","Chong","Chris","Christian","Christoper","Christopher","Chuck","Chung","Clair","Clarence","Clark","Claud","Claude","Claudio","Clay","Clayton","Clement","Clemente","Cleo","Cletus","Cleveland","Cliff","Clifford","Clifton","Clint","Clinton","Clyde","Cody","Colby","Cole","Coleman","Colin","Collin","Colten","Colton","Columbus","Connie","Connor","Conrad","Cooper","Cordell","Corey","Cornelius","Cornell","Cortez","Cory","Courtney","Coy","Craig","Cristian","Cristobal","Cristopher","Cruz","Cullen","Curt","Curtis","Cyril","Cyrus","Dale","Dallas","Dalton","Damari","Damian","Damien","Damion","Damon","Dan","Dana","Dane","Danial","Daniel","Danilo","Dannie","Danny","Dante","Darell","Daren","Darin","Dario","Darion","Darius","Darnell","Daron","Darrel","Darrell","Darren","Darrick","Darrin","Darron","Darryl","Darwin","Daryl","Dave","Davian","David","Davis","Dean","Deandre","Deangelo","Declan","Dee","Deegan","Del","Delbert","Delmar","Delmer","Demarcus","Demetrius","Denis","Dennis","Denny","Denver","Deon","Derek","Derick","Derrick","Deshawn","Desmond","Devin","Devon","Dewayne","Dewey","Dewitt","Dexter","Dick","Diego","Dillan","Dillon","Dino","Dion","Dirk","Domenic","Domingo","Dominic","Dominick","Dominique","Don","Donald","Dong","Donn","Donnell","Donnie","Donny","Donovan","Donte","Dorian","Dorsey","Doug","Douglas","Douglass","Doyle","Drake","Drew","Duane","Dudley","Duncan","Dustin","Dusty","Dwain","Dwayne","Dwight","Dylan","Earl","Earle","Earnest","Easton","Ed","Eddie","Eddy","Edgar","Edgardo","Edison","Edmond","Edmund","Edmundo","Eduardo","Edward","Edwardo","Edwin","Efrain","Efren","Elbert","Elden","Eldon","Eldridge","Eli","Elias","Elijah","Eliseo","Elisha","Elliot","Elliott","Ellis","Ellsworth","Elmer","Elmo","Eloy","Elroy","Elton","Elvin","Elvis","Elwood","Emanuel","Emerson","Emery","Emil","Emile","Emilio","Emmanuel","Emmett","Emmitt","Emory","Enoch","Enrique","Erasmo","Eric","Erich","Erick","Erik","Erin","Ernest","Ernesto","Ernie","Errol","Ervin","Erwin","Esteban","Ethan","Eugene","Eugenio","Eusebio","Evan","Everett","Everette","Ezekiel","Ezequiel","Ezra","Fabian","Faustino","Fausto","Federico","Felipe","Felix","Felton","Ferdinand","Fermin","Fernando","Fidel","Filiberto","Finley","Fisher","Fletcher","Florencio","Florentino","Floyd","Forest","Forrest","Foster","Frances","Francesco","Francis","Francisco","Frank","Frankie","Franklin","Franklyn","Fred","Freddie","Freddy","Frederic","Frederick","Fredric","Fredrick","Freeman","Fritz","Gabriel","Gaige","Gail","Gale","Galen","Garfield","Garland","Garret","Garrett","Garry","Garth","Gary","Gaston","Gaven","Gavin","Gayle","Gaylord","Genaro","Gene","Geoffrey","George","Gerald","Geraldo","Gerard","Gerardo","German","Gerry","Gil","Gilbert","Gilberto","Gino","Giovanni","Giovanny","Giuseppe","Glen","Glenn","Gonzalo","Gordon","Grady","Graham","Graig","Grant","Granville","Grayson","Greg","Gregg","Gregorio","Gregory","Grover","Guadalupe","Guillermo","Gus","Gustavo","Guy","Hai","Hal","Haleigh","Hank","Hans","Harlan","Harland","Harley","Harmony","Harold","Harris","Harrison","Harry","Harvey","Hassan","Hayden","Haywood","Heath","Hector","Henry","Herb","Herbert","Heriberto","Herman","Herschel","Hershel","Hilario","Hilton","Hipolito","Hiram","Hobert","Holden","Hollis","Homer","Hong","Horace","Horacio","Hosea","Houston","Howard","Hoyt","Hubert","Huey","Hugh","Hugo","Humberto","Hung","Hunter","Hyman","Ian","Ignacio","Ike","Ira","Irvin","Irving","Irwin","Isaac","Isaiah","Isaias","Isiah","Isidro","Ismael","Israel","Isreal","Issac","Ivan","Ivory","Izaiah","Jabari","Jacinto","Jack","Jackie","Jackson","Jacob","Jacques","Jae","Jagger","Jaime","Jake","Jamaal","Jamal","Jamar","Jamari","Jame","Jamel","James","Jamey","Jamie","Jamir","Jamison","Jan","Jared","Jarod","Jarred","Jarrett","Jarrod","Jarvis","Jasiah","Jason","Jasper","Javier","Jay","Jaycee","Jaydan","Jaydin","Jaydon","Jaylan","Jayleen","Jaylen","Jaylin","Jaylyn","Jaylynn","Jayson","Jazmyn","Jc","Jean","Jed","Jeff","Jefferey","Jefferson","Jeffery","Jeffrey","Jeffry","Jerald","Jeramiah","Jeramy","Jere","Jeremiah","Jeremy","Jermaine","Jerold","Jerome","Jeromy","Jerrell","Jerrod","Jerrold","Jerry","Jess","Jesse","Jessie","Jesus","Jewel","Jewell","Jim","Jimmie","Jimmy","Joan","Joaquin","Jody","Joe","Joel","Joesph","Joey","John","Johnathan","Johnathon","Johnie","Johnnie","Johnny","Johnson","Jon","Jonah","Jonas","Jonathan","Jonathon","Jordan","Jorden","Jordin","Jordon","Jordyn","Jorge","Jose","Josef","Joseph","Josh","Joshua","Josiah","Jospeh","Josue","Jovanny","Jovany","Juan","Jude","Judson","Jules","Julian","Julio","Julius","Junior","Justin","Justus","Kadin","Kadyn","Kai","Kaleb","Kali","Kamron","Kamryn","Kareem","Karl","Karma","Kasey","Kason","Kaylen","Kaylyn","Keagan","Keenan","Keith","Kelley","Kelly","Kelvin","Ken","Kendall","Kendrick","Keneth","Kenley","Kennedy","Kenneth","Kennith","Kenny","Kent","Kenton","Keon","Kermit","Kerry","Keven","Kevin","Keyon","Kieth","Kim","King","Kingston","Kinley","Kip","Kirby","Kirk","Koen","Kole","Konner","Korbin","Korey","Kory","Kraig","Kris","Kristofer","Kristopher","Kurt","Kurtis","Kyle","Kyleigh","Lacy","Lamar","Lamont","Lance","Landen","Landon","Lane","Laney","Lanny","Larry","Lauren","Laurence","Lavern","Laverne","Lawerence","Lawrence","Lawson","Lazaro","Leandro","Lee","Leif","Leigh","Leland","Lemuel","Len","Lenard","Lenny","Leo","Leon","Leonard","Leonardo","Leonel","Leopoldo","Leroy","Les","Lesley","Leslie","Lester","Levi","Lewis","Liam","Lincoln","Lindsay","Lindsey","Lino","Linwood","Lionel","Lloyd","Logan","Lon","Long","Lonnie","Lonny","Loren","Lorenzo","Lou","Louie","Louis","Lowell","Loyd","Lucas","Lucian","Luciano","Lucien","Lucio","Lucius","Luigi","Luis","Luka","Lukas","Luke","Lupe","Luther","Lyle","Lyman","Lyndon","Lynn","Lynwood","Mac","Macie","Mack","Mackenzie","Major","Makaila","Makhi","Malachi","Malcolm","Malcom","Malik","Mallory","Man","Manual","Manuel","Mara","Marc","Marcel","Marcelino","Marcellus","Marcelo","Marco","Marcos","Marcus","Maren","Margarito","Maria","Mariano","Mario","Marion","Mark","Markus","Marlin","Marlon","Marquis","Marshall","Martin","Marty","Marvin","Mary","Mason","Mateo","Mathew","Mathias","Matt","Matteo","Matthew","Matthias","Maurice","Mauricio","Mauro","Maverick","Max","Maxim","Maximo","Maxwell","Maynard","Mckinley","Mekhi","Mel","Melvin","Merle","Merlin","Merrill","Mervin","Micah","Michael","Michal","Michale","Micheal","Michel","Mickey","Miguel","Mike","Mikel","Milan","Miles","Miley","Milford","Millard","Milo","Milton","Minh","Miquel","Mitch","Mitchel","Mitchell","Modesto","Mohamed","Mohammad","Mohammed","Moises","Mollie","Monroe","Monserrat","Monte","Monty","Morgan","Morris","Morton","Mose","Moses","Moshe","Muhammad","Murray","Myles","Myron","Napoleon","Nathan","Nathanael","Nathanial","Nathaniel","Neal","Ned","Nehemiah","Neil","Nelson","Nestor","Neville","Newton","Nicholas","Nick","Nickolas","Nicky","Nico","Nicolas","Nigel","Nikhil","Noah","Noble","Noe","Noel","Nolan","Norbert","Norberto","Norman","Normand","Norris","Numbers","Octavio","Odell","Odis","Olen","Olin","Oliver","Ollie","Omar","Omer","Oren","Orlando","Orval","Orville","Oscar","Osvaldo","Oswaldo","Otha","Otis","Otto","Owen","Pablo","Palmer","Paris","Parker","Pasquale","Pat","Patricia","Patrick","Paul","Paxton","Payton","Pedro","Percy","Perry","Pete","Peter","Peyton","Phil","Philip","Phillip","Phoenix","Pierre","Porfirio","Porter","Presley","Preston","Prince","Quentin","Quincy","Quinn","Quinten","Quintin","Quinton","Raegan","Rafael","Raiden","Raleigh","Ralph","Ramiro","Ramon","Randal","Randall","Randell","Randolph","Randy","Raphael","Rashad","Raul","Ray","Rayan","Rayford","Raymon","Raymond","Raymundo","Reed","Reese","Refugio","Regan","Reggie","Reginald","Reid","Reinaldo","Renaldo","Renato","Rene","Reuben","Rex","Rey","Reyes","Reynaldo","Rhett","Ricardo","Rich","Richard","Richie","Rick","Rickey","Rickie","Ricky","Rico","Rigoberto","Riley","Rob","Robbie","Robby","Robert","Roberto","Robin","Robt","Rocco","Rocky","Rod","Roderick","Rodger","Rodney","Rodolfo","Rodrick","Rodrigo","Rogelio","Roger","Roland","Rolando","Rolf","Rolland","Roman","Romeo","Ron","Ronald","Ronnie","Ronny","Roosevelt","Rory","Rosario","Roscoe","Rosendo","Ross","Roy","Royal","Royce","Ruben","Rubin","Rudolf","Rudolph","Rudy","Rueben","Rufus","Rupert","Russ","Russel","Russell","Rusty","Ryan","Ryker","Rylan","Ryleigh","Sal","Salvador","Salvatore","Sam","Sammie","Sammy","Samual","Samuel","Sandy","Sanford","Sang","Santiago","Santino","Santo","Santos","Saul","Savion","Sawyer","Scot","Scott","Scottie","Scotty","Sean","Sebastian","Sergio","Seth","Seymour","Shad","Shamar","Shane","Shannon","Shaun","Shawn","Shayne","Shelby","Sheldon","Shelton","Sherman","Sherwood","Shirlon","Shon","Sid","Sidney","Silas","Simon","Sol","Solomon","Son","Sonny","Spencer","Stacey","Stevan","Stan","Stanford","Stanley","Stanton","Stefan","Stephan","Stephen","Sterling","Steve","Steven","Stevie","Stewart","Stuart","Sullivan","Sung","Sydney","Sylvester","Tad","Tanner","Taryn","Tatum","Taylor","Teagan","Ted","Teddy","Teodoro","Terence","Terrance","Terrell","Terrence","Terry","Thad","Thaddeus","Thanh","Theo","Theodore","Theron","Thomas","Thurman","Tim","Timmy","Timothy","Titus","Tobias","Toby","Tod","Todd","Tom","Tomas","Tommie","Tommy","Toney","Tony","Tori","Tory","Tracey","Tracy","Travis","Trent","Trenton","Trevor","Trey","Trinidad","Tristan","Troy","Truman","Tuan","Tucker","Ty","Tyler","Tyree","Tyrell","Tyron","Tyrone","Tyson","Ulysses","Val","Valentin","Valentine","Valentino","Van","Vance","Vaughn","Vern","Vernon","Vicente","Victor","Vince","Vincent","Vincenzo","Virgil","Virgilio","Vito","Von","Wade","Waldo","Walker","Wallace","Wally","Walter","Walton","Ward","Warner","Warren","Waylon","Wayne","Weldon","Wendell","Werner","Wes","Wesley","Weston","Whitney","Wilber","Wilbert","Wilbur","Wilburn","Wiley","Wilford","Wilfred","Wilfredo","Will","Willard","William","Williams","Willian","Willie","Willis","Willy","Wilmer","Wilson","Wilton","Winford","Winfred","Winston","Wm","Woodrow","Wyatt","Wym","Xavier","Xzavier","Yahir","Yong","Yosef","Young","Zachariah","Zachary","Zachery","Zack","Zackary","Zackery","Zaiden","Zain","Zane","Zavier","Zechariah","Zion"]}';

listaPrimeiroNomeFem = '{"nome":["Abbie","Abby","Ada","Adah","Adaline","Adela","Adele","Adelia","Adelina","Adeline","Adell","Adella","Adelle","Adena","Adina","Adria","Adriana","Adriane","Adrianna","Adrianne","Adrien","Adriene","Adrienne","Afton","Agatha","Agnes","Agnus","Agripina","Agueda","Agustina","Ai","Aida","Aide","Aiko","Aileen","Ailene","Aimee","Aisha","Aja","Akiko","Akilah","Alaina","Alaine","Alana","Alane","Alanna","Alayna","Alba","Alberta","Albertha","Albertina","Albertine","Albina","Alda","Alease","Alecia","Aleen","Aleida","Aleisha","Alejandra","Alejandrina","Alena","Alene","Alesha","Aleshia","Alesia","Alessandra","Aleta","Aletha","Alethea","Alethia","Alex","Alexa","Alexander","Alexandra","Alexandria","Alexia","Alexis","Alfreda","Alfredia","Ali","Alia","Alica","Alice","Alicia","Alida","Alina","Aline","Alisa","Alise","Alisha","Alishia","Alisia","Alison","Alissa","Alita","Alix","Aliza","Alla","Alleen","Allegra","Allen","Allena","Allene","Allie","Alline","Allison","Allyn","Allyson","Alma","Almeda","Almeta","Alona","Alpha","Alta","Altagracia","Altha","Althea","Alva","Alvera","Alverta","Alvina","Alyce","Alycia","Alysa","Alyse","Alysha","Alysia","Alyson","Alyssa","Amada","Amal","Amalia","Amanda","Amber","Amberly","Amee","Amelia","America","Ami","Amie","Amiee","Amina","Amira","Ammie","Amparo","Amy","An","Ana","Anabel","Analisa","Anamaria","Anastacia","Anastasia","Andera","Andra","Andre","Andrea","Andree","Andrew","Andria","Anette","Angel","Angela","Angele","Angelena","Angeles","Angelia","Angelic","Angelica","Angelika","Angelina","Angeline","Angelique","Angelita","Angella","Angelo","Angelyn","Angie","Angila","Angla","Angle","Anglea","Anh","Anika","Anisa","Anisha","Anissa","Anita","Anitra","Anja","Anjanette","Anjelica","Ann","Anna","Annabel","Annabell","Annabelle","Annalee","Annalisa","Annamae","Annamaria","Annamarie","Anne","Anneliese","Annelle","Annemarie","Annett","Annetta","Annette","Annice","Annie","Annika","Annis","Annita","Annmarie","Anthony","Antionette","Antoinette","Antonetta","Antonette","Antonia","Antonietta","Antonina","Antonio","Anya","Apolonia","April","Apryl","Ara","Araceli","Aracelis","Aracely","Arcelia","Ardath","Ardelia","Ardell","Ardella","Ardelle","Ardis","Ardith","Aretha","Argelia","Argentina","Ariana","Ariane","Arianna","Arianne","Arica","Arie","Ariel","Arielle","Arla","Arlean","Arleen","Arlena","Arlene","Arletha","Arletta","Arlette","Arlinda","Arline","Arlyne","Armanda","Armandina","Armida","Arminda","Arnetta","Arnette","Arnita","Arthur","Artie","Arvilla","Asha","Ashanti","Ashely","Ashlea","Ashlee","Ashleigh","Ashley","Ashli","Ashlie","Ashly","Ashlyn","Ashton","Asia","Asley","Assunta","Astrid","Asuncion","Athena","Aubrey","Audie","Audra","Audrea","Audrey","Audria","Audrie","Audry","Augusta","Augustina","Augustine","Aundrea","Aura","Aurea","Aurelia","Aurora","Aurore","Austin","Autumn","Ava","Avelina","Avery","Avis","Avril","Awilda","Ayako","Ayana","Ayanna","Ayesha","Azalee","Azucena","Azzie","Babara","Babette","Bailey","Bambi","Bao","Barabara","Barb","Barbar","Barbara","Barbera","Barbie","Barbra","Bari","Barrie","Basilia","Bea","Beata","Beatrice","Beatris","Beatriz","Beaulah","Bebe","Becki","Beckie","Becky","Bee","Belen","Belia","Belinda","Belkis","Bell","Bella","Belle","Belva","Benita","Bennie","Berenice","Berna","Bernadette","Bernadine","Bernarda","Bernardina","Bernardine","Berneice","Bernetta","Bernice","Bernie","Berniece","Bernita","Berry","Berta","Bertha","Bertie","Beryl","Bess","Bessie","Beth","Bethanie","Bethann","Bethany","Bethel","Betsey","Betsy","Bette","Bettie","Bettina","Betty","Bettyann","Bettye","Beula","Beulah","Bev","Beverlee","Beverley","Beverly","Bianca","Bibi","Billi","Billie","Billy","Billye","Birdie","Birgit","Blair","Blake","Blanca","Blanch","Blanche","Blondell","Blossom","Blythe","Bobbi","Bobbie","Bobby","Bobbye","Bobette","Bok","Bong","Bonita","Bonnie","Bonny","Branda","Brande","Brandee","Brandi","Brandie","Brandon","Brandy","Breana","Breann","Breanna","Breanne","Bree","Brenda","Brenna","Brett","Brian","Briana","Brianna","Brianne","Bridget","Bridgett","Bridgette","Brigette","Brigid","Brigida","Brigitte","Brinda","Britany","Britney","Britni","Britt","Britta","Brittaney","Brittani","Brittanie","Brittany","Britteny","Brittney","Brittni","Brittny","Bronwyn","Brook","Brooke","Bruna","Brunilda","Bryanna","Brynn","Buena","Buffy","Bula","Bulah","Bunny","Burma","Caitlin","Caitlyn","Calandra","Calista","Callie","Calvin","Camelia","Camellia","Cameron","Cami","Camie","Camila","Camilla","Camille","Cammie","Cammy","Candace","Candance","Candelaria","Candi","Candice","Candida","Candie","Candis","Candra","Candy","Candyce","Caprice","Cara","Caren","Carey","Cari","Caridad","Carie","Carin","Carina","Carisa","Carissa","Carita","Carl","Carla","Carlee","Carleen","Carlena","Carlene","Carletta","Carley","Carli","Carlie","Carline","Carlita","Carlos","Carlota","Carlotta","Carly","Carlyn","Carma","Carman","Carmel","Carmela","Carmelia","Carmelina","Carmelita","Carmella","Carmen","Carmina","Carmon","Carol","Carola","Carolann","Carole","Carolee","Carolin","Carolina","Caroline","Caroll","Carolyn","Carolyne","Carolynn","Caron","Caroyln","Carri","Carrie","Carrol","Carroll","Carry","Cary","Caryl","Carylon","Caryn","Casandra","Casey","Casie","Casimira","Cassandra","Cassaundra","Cassey","Cassi","Cassidy","Cassie","Cassondra","Cassy","Catalina","Catarina","Caterina","Catharine","Catherin","Catherina","Catherine","Cathern","Catheryn","Cathey","Cathi","Cathie","Cathleen","Cathrine","Cathryn","Cathy","Catina","Catrice","Catrina","Cayla","Cecelia","Cecil","Cecila","Cecile","Cecilia","Cecille","Cecily","Celena","Celesta","Celeste","Celestina","Celestine","Celia","Celina","Celinda","Celine","Celsa","Ceola","Chae","Chan","Chana","Chanda","Chandra","Chanel","Chanell","Chanelle","Chang","Chantal","Chantay","Chante","Chantel","Chantell","Chantelle","Chara","Charis","Charise","Charissa","Charisse","Charita","Charity","Charla","Charleen","Charlena","Charlene","Charles","Charlesetta","Charlette","Charlie","Charline","Charlott","Charlotte","Charlsie","Charlyn","Charmain","Charmaine","Charolette","Chasidy","Chasity","Chassidy","Chastity","Chau","Chaya","Chelsea","Chelsey","Chelsie","Cher","Chere","Cheree","Cherelle","Cheri","Cherie","Cherilyn","Cherise","Cherish","Cherly","Cherlyn","Cherri","Cherrie","Cherry","Cherryl","Chery","Cheryl","Cheryle","Cheryll","Cheyenne","Chi","Chia","Chieko","Chin","China","Ching","Chiquita","Chloe","Chong","Chris","Chrissy","Christa","Christal","Christeen","Christel","Christen","Christena","Christene","Christi","Christia","Christian","Christiana","Christiane","Christie","Christin","Christina","Christine","Christinia","Christopher","Christy","Chrystal","Chu","Chun","Chung","Ciara","Cicely","Ciera","Cierra","Cinda","Cinderella","Cindi","Cindie","Cindy","Cinthia","Cira","Clair","Claire","Clara","Clare","Clarence","Claretha","Claretta","Claribel","Clarice","Clarinda","Clarine","Claris","Clarisa","Clarissa","Clarita","Classie","Claude","Claudette","Claudia","Claudie","Claudine","Clelia","Clemencia","Clementina","Clementine","Clemmie","Cleo","Cleopatra","Cleora","Cleotilde","Cleta","Clora","Clorinda","Clotilde","Clyde","Codi","Cody","Colby","Coleen","Colene","Coletta","Colette","Colleen","Collen","Collene","Collette","Concepcion","Conception","Concetta","Concha","Conchita","Connie","Constance","Consuela","Consuelo","Contessa","Cora","Coral","Coralee","Coralie","Corazon","Cordelia","Cordia","Cordie","Coreen","Corene","Coretta","Corey","Cori","Corie","Corina","Corine","Corinna","Corinne","Corliss","Cornelia","Corrie","Corrin","Corrina","Corrine","Corrinne","Cortney","Cory","Courtney","Creola","Cris","Criselda","Crissy","Crista","Cristal","Cristen","Cristi","Cristie","Cristin","Cristina","Cristine","Cristy","Cruz","Crysta","Crystal","Crystle","Cuc","Curtis","Cyndi","Cyndy","Cynthia","Cyrstal","Cythia","Dacia","Dagmar","Dagny","Dahlia","Daina","Daine","Daisey","Daisy","Dakota","Dale","Dalene","Dalia","Dalila","Dallas","Damaris","Dan","Dana","Danae","Danelle","Danette","Dani","Dania","Danica","Daniel","Daniela","Daniele","Daniell","Daniella","Danielle","Danika","Danille","Danita","Dann","Danna","Dannette","Dannie","Dannielle","Danuta","Danyel","Danyell","Danyelle","Daphine","Daphne","Dara","Darby","Darcel","Darcey","Darci","Darcie","Darcy","Daria","Darla","Darleen","Darlena","Darlene","Darline","Darnell","Daryl","David","Davida","Davina","Dawn","Dawna","Dawne","Dayle","Dayna","Daysi","Deadra","Dean","Deana","Deandra","Deandrea","Deane","Deann","Deanna","Deanne","Deb","Debbi","Debbie","Debbra","Debby","Debera","Debi","Debora","Deborah","Debra","Debrah","Debroah","Dede","Dedra","Dee","Deeann","Deeanna","Deedee","Deedra","Deena","Deetta","Deidra","Deidre","Deirdre","Deja","Delaine","Delana","Delcie","Delena","Delfina","Delia","Delicia","Delila","Delilah","Delinda","Delisa","Dell","Della","Delma","Delmy","Delois","Deloise","Delora","Deloras","Delores","Deloris","Delorse","Delpha","Delphia","Delphine","Delsie","Delta","Demetra","Demetria","Demetrice","Demetrius","Dena","Denae","Deneen","Denese","Denice","Denise","Denisha","Denisse","Denita","Denna","Dennis","Dennise","Denny","Denyse","Deon","Deonna","Desirae","Desire","Desiree","Despina","Dessie","Destiny","Detra","Devin","Devon","Devona","Devora","Devorah","Dia","Diamond","Dian","Diana","Diane","Diann","Dianna","Dianne","Diedra","Diedre","Dierdre","Digna","Dimple","Dina","Dinah","Dinorah","Dion","Dione","Dionna","Dionne","Divina","Dixie","Dodie","Dollie","Dolly","Dolores","Doloris","Domenica","Dominga","Dominica","Dominique","Dominque","Domitila","Domonique","Dona","Donald","Donella","Donetta","Donette","Dong","Donita","Donna","Donnetta","Donnette","Donnie","Donya","Dora","Dorathy","Dorcas","Doreatha","Doreen","Dorene","Doretha","Dorethea","Doretta","Dori","Doria","Dorian","Dorie","Dorinda","Dorine","Doris","Dorla","Dorotha","Dorothea","Dorothy","Dorris","Dortha","Dorthea","Dorthey","Dorthy","Dot","Dottie","Dotty","Dovie","Dreama","Drema","Drew","Drucilla","Drusilla","Dulce","Dulcie","Dung","Dusti","Dusty","Dwana","Dyan","Earlean","Earleen","Earlene","Earlie","Earline","Earnestine","Eartha","Easter","Eboni","Ebonie","Ebony","Echo","Eda","Edda","Eddie","Edelmira","Eden","Edie","Edith","Edna","Edra","Edris","Edward","Edwina","Edyth","Edythe","Effie","Ehtel","Eileen","Eilene","Ela","Eladia","Elaina","Elaine","Elana","Elane","Elanor","Elayne","Elba","Elda","Eldora","Eleanor","Eleanora","Eleanore","Elease","Elena","Elene","Eleni","Elenor","Elenora","Elenore","Eleonor","Eleonora","Eleonore","Elfreda","Elfrieda","Elfriede","Elia","Eliana","Elicia","Elida","Elidia","Elin","Elina","Elinor","Elinore","Elisa","Elisabeth","Elise","Elisha","Elissa","Eliz","Eliza","Elizabet","Elizabeth","Elizbeth","Elizebeth","Elke","Ella","Ellamae","Ellan","Ellen","Ellena","Elli","Ellie","Ellis","Elly","Ellyn","Elma","Elmer","Elmira","Elna","Elnora","Elodia","Elois","Eloisa","Eloise","Elouise","Elsa","Else","Elsie","Elsy","Elva","Elvera","Elvia","Elvie","Elvina","Elvira","Elwanda","Elyse","Elza","Ema","Emelda","Emelia","Emelina","Emeline","Emely","Emerald","Emerita","Emiko","Emilee","Emilia","Emilie","Emily","Emma","Emmaline","Emmie","Emmy","Emogene","Ena","Enda","Enedina","Eneida","Enid","Enola","Enriqueta","Epifania","Era","Eric","Erica","Ericka","Erika","Erin","Erinn","Erlene","Erlinda","Erline","Erma","Ermelinda","Erminia","Erna","Ernestina","Ernestine","Ernesto","Eryn","Esmeralda","Esperanza","Essie","Esta","Estefana","Estela","Estell","Estella","Estelle","Ester","Esther","Estrella","Etha","Ethel","Ethelene","Ethelyn","Ethyl","Etsuko","Etta","Ettie","Eufemia","Eugena","Eugene","Eugenia","Eugenie","Eula","Eulah","Eulalia","Eun","Euna","Eunice","Eura","Eusebia","Eustolia","Eva","Evalyn","Evan","Evangelina","Evangeline","Eve","Evelia","Evelin","Evelina","Eveline","Evelyn","Evelyne","Evelynn","Evette","Evia","Evie","Evita","Evon","Evonne","Ewa","Exie","Fabiola","Fae","Fairy","Faith","Fallon","Fannie","Fanny","Farah","Farrah","Fatima","Fatimah","Faustina","Faviola","Fawn","Fay","Faye","Fe","Felecia","Felica","Felice","Felicia","Felicidad","Felicita","Felicitas","Felipa","Felisa","Felisha","Fermina","Fern","Fernanda","Fernande","Ferne","Fidela","Fidelia","Filomena","Fiona","Flavia","Fleta","Flo","Flor","Flora","Florance","Florence","Florencia","Florene","Florentina","Floretta","Floria","Florida"]}';

listaSobrenomes = '{"nome":["Ashenhawk","Frostlight","Fireland","Shadowsword","Ashlight","Songdragon","Pathwind","Kinghouse","Blueland","Wildwind","Liferock","Winterwine","Darkland","Lifesky","Bravelight","Greyrock","Campbury","Crowember","Hellspell","Hardrock","Riverbow","Woodhawk","Summersword","Ashenborn","Eyescar","Snowleaf","Hunterforged","Weakaxe","Darkbow","Whiteforged","Wintersword","Whitefox","Blindmine","Hunterblade","Sealeaf","Sorrowmeal","Poisonland","Crowmeal","Airember","Blindbow","Ashdragon","Cragsword","Hillhawk","Cursekind","Snowwind","Windscar","Blueaxe","Songsky","Pastborn","Redbread","Landborn","Poisonleaf","Frozenfox","Summerhouse","Moonkind","Bluebury","Daggerland","Greatbread","Pathsky","Fogheat","Crowlight","Kinghammer","Daggerhawk","Duststar","Blackmine","Blueforged","Endrock","Weakmine","Highaxe","Seabow","Newsword","Airheat","Icelight","Huntermark","Highhammer","Souldragon","Blindblade","Sunwind","Oldforged","Crystalsky","Summerfox","Warland","Sundragon","Moonhawk","Castlespell","Hardspell","Harddragon","Dustwater","Redborn","Bravescar","Endmeal","Campfox","Voidsword","Airwine","Crylight","Wildblade","Kinghawk","Newlight","Ashblade","Dustblade","Voidhammer","Pathbury","Frostblade","Highspell","Ravendragon","Curseleaf","Mistbow","Seakind","Kingforged","Foreststar","Bluewind","Sunsky","Castlebread","Frostborn","Frozenforged","Daggerheat","Weakland","Daggerember","Blesshawk","Pasthawk","Darkhawk","Summerhammer","Greatember","Hardhammer","Shadowheat","Sunkind","Windhammer","Endbury","Frostleaf","Crystalrock","Songblade","Greybury","Blessbread","Airwind","Greenmeal","Moonember","Dusthammer","Pathrock","Bloodscar","Highheat","Moonborn","Airforged","Blackborn","Iceland","Bravedragon","Hellstar","Freemark","Winterfox","Manwater","Soulaxe","Kingdragon","Ashenwine","Newkind","Voidborn","Cryaxe","Shadowember","Hillbury","Shadowwind","Hardember","Crystalfox","Hillblade","Highmine","Hellland","Bloodbow","Hellaxe","Staraxe","Weakmark","Icesky","Campbread","Dustlight","Firescar","Caveland","Bravemark","Daggerleaf","Mistaxe","Fireblade","Poisonbury","Wintermeal","Dustbread","Pastbread","Soulscar","Grandspell","Fogsky","Crowhouse","Riverdragon","Sorrowmine","Greybread","Oldmark","Hardscar","Fullborn","Blessblade","Hunteraxe","Highfox","Greatstar","Kingwine","Caveaxe","Campbow","Woodstar","Summerember","Moonmine","Soulleaf","Redland","Pastlight","Newscar","Sunlight","Shadowlight","Craghouse","Cragland","Mistspell","Landwater","Blueleaf","Bluehouse","Cavestar","Endforged","Curseheat","Bloodwind","Icemark","Landfox","Castlerock","Oldbury","Foghammer","Greatfox","Blackland","Hillspell","Landscar","Campblade","Shadowleaf","Hellwind","Olddragon","Highmeal","Greymark","Sorrowhouse","Blackhawk","Greywind","Blessrock","Woodaxe","Daggerspell","Seasword","Frostdragon","Winterborn","Lifebow","Blackwind","Blesswind","Fullaxe","Frozenleaf","Blessbury","Crystalsword","Shadowdragon","Icemeal","Greenblade","Wintersky","Cryhouse","Songhouse","Crowfox","Ashenland","Cragbury","Blackbread","Frostsword","Woodblade","Oldkind","Grandhammer","Cryspell","Crystalmeal","Wildborn","Camphammer","Fullheat","Frostsky","Eyebow","Landhouse","Campmark","Songhawk","Starlight","Dustheat","Greyland","Freewind","Endblade","Blindscar","Snowstar","Hellbread","Kingbury","Pastember","Crowmine","Sunmark","Paststar","Crowwater","Blindborn","Darkhammer","Greymine","Daggerforged","Seamark","Huntermeal","Cavewind","Icespell","Snowland","Braveborn","Foghawk","Ashenmine","Winterbury","Windsky","Braveember","Warborn","Lifebury","Sorrowbury","Mansky","Bluemark","Endhammer","Castlemine","Newborn","Lifeblade","Shadowhouse","Lifefox","Cursewater","Shadowborn","Wildscar","Pathhawk","Firehammer","Forestember","Ashenhammer","Ravenember","Bloodwine","Shadowwater","Dustmark","Seaheat","Grandwind","Landhawk","Starsky","Redhouse","Songhammer","Grandember","Soulland","Darkkind","Fogforged","Wildspell","Dustmeal","Hellwine","Snowspell","Bluekind","Airhammer","Campforged","Hardwind","Iceheat","Freesword","Ashleaf","Pastspell","Highleaf","Forestheat","Greybow","Iceaxe","Pathstar","Icekind","Greenbow","Greylight","Frozenmark","Highember","Greyember","Pastdragon","Poisonember","Frozenwine","Pastsword","Blindstar","Airwater","Wildmark","Hunterborn","Blackblade","Shadowhammer","Redspell","Daggerscar","Sunspell","Ravensky","Cliffland","Wilddragon","Darkstar","Hillheat","Bloodsky","Newhouse","Bloodsword","Hellsky","Mistdragon","Voidwind","Hardwine","Riverhawk","Newbury","Frozenember","Greysky","Summerrock","Hardsky","Whitedragon","Fogstar","Woodhouse","Crystalhawk","Riverkind","Greenmine","Curseblade","Cursebury","Riverlight","Forestmark","Voidrock","Hellfox","Ashenmark","Mistscar","Fullmeal","Blackscar","Poisonforged","Poisonhawk","Crybow","Crowstar","Crywind","Ashbow","Riverhouse","Greenbury","Bravebury","Braveland","Camphawk","Mistmine","Darkwater","Castlestar","Crystalmine","Campwine","Landspell","Lifeleaf","Lifeheat","Weakkind","Grandkind","Freeland","Newdragon","Highbow","Daggerrock","Ashenbow","Kinglight","Mistbury","Blueblade","Eyewind","Grandblade","Newblade","Grandlight","Caveforged","Fogscar","Soulmark","Landmeal","Blindember","Hunterdragon","Daggerstar","Cragmeal","Frostaxe","Pastkind","Braverock","Crowheat","Ashensky","Airleaf","Woodwind","Manforged","Forestleaf","Starland","Voidkind","Ashenlight","Fogbury","Poisonwater","Kingstar","Wintermark","Greenscar","Soulstar","Sorrowborn","Sunaxe","Starbread","Oldstar","Redlight","Winterheat","Moonaxe","Freespell","Ashborn","Freefox","Clifox","Sorrowmark","Weakforged","Highkind","Frozenscar","Ravenmine","Bloodrock","Oldrock","Sorrowstar","Shadowmark","Airlight","Ashmine","Darkblade","Pathmark","Ashwine","Mistsword","Pasthouse","Dustsky","Bloodspell","Songmine","Misthouse","Fullfox","Icewine","Weakborn","Grandscar","Soullight","Songmeal","Weakdragon","Kingland","Hellforged","Eyemark","Wardragon","Hillkind","Snowsword","Grandsky","Cursefox","Greenbread","Hardstar","Hardhawk","Landhammer","Snowhouse","Hunterhammer","Windhawk","Shadowfox","Soulbow","Blackforged","Bloodmark","Oldborn","Redblade","Starwine","Grandleaf","Ravenstar","Forestspell","Frostland","Whitekind","Sorrowaxe","Woodleaf","Daggerhammer","Ashbread","Greenhawk","Caveborn","Cragfox","Redheat","Redhammer","Pathbread","Poisonbread","Freeborn","Riverember","Cragforged","Ashbury","Hardaxe","Woodsword","Firebread","Grandwater","Warwater","Sorrowspell","Winterhouse","Moondragon","Frozenmeal","Blindhouse","Voidbury","Windland","Seawine","Fullwater","Firewind","Redwater","Pathmeal","Ravenwine","Hellbow","Frozenkind","Crowhawk","Hellblade","Eyeaxe","Voidhawk","Sunleaf","Ashsword","Weakbread","Eyeheat","Campleaf","Airborn","Lifemine","Oldmeal","Pathfox","Fullscar","Blindhawk","Greatwater","Crowblade","Songborn","Manbow","Greatspell","Icehawk","Greenmark","Landlight","Weakbury","Hunterstar","Moonrock","Ravenlight","Pathmine","Seascar","Icescar","Hunterfox","Kingrock","Starrock","Pathheat","Cragwater","Blastdragon","Cragbow","Greenforged","Sorrowsword","Winterhammer","Hardheat","Freehawk","Seabread","Starwind","Ashwater","Dustmine","Freedragon","Warrock","Hillbread","Lifewine","Sunscar","Shadowspell","Oldmine","Poisonaxe","Fullsword","Forestscar","Warmeal","Fireember","Iceleaf","Starhawk","Bloodmine","Blessborn","Crykind","Endwine","Endhawk","Moonwind","Cavehouse","Crymeal","Manspell","Crowscar","Ravenbury","Mistwine","Whiteland","Forestforged","Snowaxe","Woodforged","Hunterkind","Endheat","Hillscar","Campkind","Moonforged","Soulbury","Mistblade","Voidfox","Crowbury","Hunterland","Crystalbread","Forestsky","Bloodheat","Songrock","Snowmark","Forestfox","Frostbury","Shadowbow","Ashenrock","Crystallight","Bravemine","Blessspell","Frozenbury","Fogspell","Cavescar","Soulhouse","Cryhawk","Songwater","Poisonlight","Oldheat","Firedragon","Castleaxe","Dustland","Weakspell","Camprock","Greenspell","Hunterbread","Oldscar","Daggerhouse","Greatkind","Castlefox","Windkind","Airstar","Cliffsword","Frosthammer","Grandbury","Woodspell","Blastblade","Highblade","Whitebury","Forestborn","Newbread","Newwater","Ashkind","Warmine","Snowdragon","Hunterwind","Redstar","Sunsword","Blastscar","Icehammer","Oldleaf","Wildhawk","Cursedragon","Ravenborn","Fogdragon","Eyeland","Daggerwater","Airmeal","Greystar","Crystalhouse","Snowscar","Sorrowforged","Wildhammer","Voidleaf","Newember","Airaxe","Windbow","Camplight","Cliffwind","Shadowbread","Poisonborn","Snowblade","Bluehammer","Greysword","Grandhouse","Pastmine","Bluemeal","Redmine","Whitebread","Highhouse","Riverforged","Sunmine","Weakheat","Braveblade","Blasthawk","Windmark","Firestar","Fullkind","Landmark","Grandmark","Crywater","Warsword","Crystalwine","Soulsword","Voidmine","Moonmark","Blasthammer","Cliffscar","Fogfox","Castlewater","Cliffheat","Riverheat","Landmine","Forestbury","Pathaxe","Pathdragon","Firemeal","Forestbread","Crystalheat","Crywine","Blessaxe","Frozenhouse","Forestland","Crystalland","Seaember","Cliffhawk","Starbury","Poisonhammer","Landwine","Endsword","Iceborn","Bloodaxe","Hillsky","Crowforged","Craghawk","Manborn","Manaxe","Songwine","Pastwine","Crystalblade","Pathbow","Hardbow","Manwind","Daggersword","Endhouse","Snowsky","Cliffrock","Oldblade","Bravewind","Songember","Blindspell","Castlewine","Weakhawk","Curseborn","Frostbow","Greataxe","Kingwater","Wildleaf","Oldember","Ravenmark","Sunwater","Weakscar","Crowsword","Fullwind","Blinddragon","Blackmark","Daggerwind","Castleblade","Landrock","Frozenhammer","Hardforged","Seasky","Winterleaf","Freelight","Oldspell","Waraxe","Hillfox","Redsky","Wildwine","Landsword","Seameal","Hellmeal","Hardblade","Rivermark","Shadowhawk","Ashenwater","Frozenborn","Greenwater","Moonscar","Soulhammer","Windbury","Wildember","Campheat","Whiteember","Sorrowsky","Darkrock","Landblade","Cliffborn","Hardkind","Moonblade","Greenland","Redbow","Kingscar","Songmark","Blindwine","Ashenhouse","Oldsword","Warwine","Riverwind","Warlight","Winterbread","Campdragon","Kingmark","Snowrock","Cryfox","Frostheat","Highforged","Ashenkind","Eyeember","Frostspell","Freemeal","Seahawk","Highwater","Darkscar","Manleaf","Icestar","Sunbread","Ravenhouse","Winterdragon","Greatforged","Blessheat","Landdragon","Crowrock","Pastmark","Frozenbow","Fulllight","Warsky","Songscar","Manmeal","Lifescar","Whitemark","Stardragon","Crystalkind","Oldhammer","Blackdragon","Blindbury","Whitesky","Kingblade","Hillforged","Bravebread","Manhammer","Warmark","Landheat","Hillwine","Firekind","Daggerbow","Woodrock","Hellheat","Hellsword","Highsword","Greathouse","Lifehawk","Huntersword","Weaklight","Manhouse","Eyehawk","Windfox","Airmine","Braveforged","Moonhammer","Endfox","Hardmeal","Blackwater","Castlehawk","Eyewater","Shadowstar","Greenkind","Freebread","Hillrock","Woodember","Bluefox","Kingheat","Starforged","Wildbury","Hellrock","Hunterhouse","Curseaxe","Winterspell","Newhawk","Windspell","Redmark","Lifeaxe","Frozenblade","Bravesky","Greenhammer","Greenember","Cryember","Campsword","Seamine","Moonbury","Whiteborn","Greywater","Darkmark","Sunmeal","Cliffstar","Eyemine","Crystalaxe","Moonstar","Freewine","Windblade","Riverbury","Airland","Frozenspell","Pastbury","Riverborn","Firebury","Blastmark","Grandforged","Crowborn","Darkspell","Frostwine","Castleember","Bravesword","Braveleaf","Riverleaf","Starkind","Bluespell","Cragborn","Freewater","Seafox","Redmeal","Greatbury","Grandsword","Bluebow","Endborn","Poisonmeal","Blastfox","Woodkind","Castleborn","Cavewine","Winterrock","Fullember","Pastscar","Manscar","Cryheat","Hellhawk","Ashmeal","Hardborn","Hillaxe","Greyspell","Lifebread","Kingaxe","Sorrowkind","Wildbow","Freeforged","Fullbury","Bravewater","Foresthouse","Airdragon","Summerspell","Frozenlight","Blessmark","Freerock","Riverscar","Shadowbury","Blesskind","Newwine","Starsword","Frostmine","Summerborn","Frostbread","Summerblade","Blueheat","Greyfox","Sunborn","Cliffhouse","Dustwind","Bluesky","Pastheat","Sorrowhawk","Newaxe","Bluestar","Woodland","Dustborn","Hillsword","Bluewine","Mistforged","Greatbow","Frostforged","Fogwine","Freeember","Cragmark","Hellmine","Fullbread","Firefox","Cavemark","Cursehouse","Pathember","Sorrowland","Warbread","Wildsky","Airspell","Snowhawk","Blessbow","Woodbury","Bloodlight","Summerland","Cragember","Ravenwater","Shadowaxe","Forestblade","Daggerbury","Redforged","Oldhouse","Starleaf","Reddragon","Voidblade","Mistbread","Cragaxe","Greyhammer","Shadowforged","Airhouse","Pathland","Wildfox","Foresthammer","Grandheat","Grandmine","Hillmark","Summerwind","Freekind","Warhouse","Ravenblade","Castlesky","Starborn","Whitespell","Voidscar","Crystalbury","Fogland","Ravenscar","Icemine","Woodmeal","Grandbread","Endkind","Blessleaf","Woodmark","Lifemark","Fogblade","Redsword","Blindfox","Fullleaf","Wildland","Snowfox","Crystalwater","Riverwater","Greenleaf","Ravenheat","Caverock","Landwind","Castleforged","Hillwind","Blessmeal","Blastleaf","Blessember","Weakhammer","Fogaxe","Huntersky","Seawater","Forestbow","Starblade","Sorrowscar","Hellbury","Hellborn","Crowaxe","Fullspell","Voidwine","Blackrock","Cliffspell","Cursehammer","Grandstar","Hilllight","Ravenrock","Curserock","Fireborn","Ravenleaf","Newwind","Starember","Firelight","Bravespell","Cragrock","Winterhawk","Manember","Whiteaxe","Songbury","Weakstar","Songleaf","Greenfox","Poisonwine","Soulheat","Cavehammer","Newmine","Woodhammer","Crystalscar","Kingborn","Songbread","Windborn","Froststar","Airbury","Wildkind","Warbury","Highborn","Warstar","Warleaf","Riverspell","Hillwater","Airfox","Airmark","Dustspell","Cursesword","Ashenblade","Blesshouse","Moonwine","Hardlight","Whitemeal","Weakwind","Newbow","Woodheat","Eyesword","Cliffmark","Sorrowwind","Windmine","Voidspell","Greenheat","Warhammer","Shadowland","Crystalember","Mistland","Ravensword","Frostrock","Winterwater","Ravenhawk","Misthawk","Cavemeal","Summerbow","Ashforged","Summerstar","Warfox","Shadowsky","Dustleaf","Seawind","Manbury","Oldbow","Hillborn","Wildbread","Dustdragon","Manheat","Firewater","Lifespell","Ashendragon","Crystalmark","Castlekind","Bloodbury","Blastland","Kingkind","Campscar","Daggerborn","Blindsword","Ashenaxe","Fullbow","Crymark","Blastbury","Summerdragon","Forestwind","Eyekind","Moonleaf","Redhawk","Fullrock","Whitewine","Crymine","Fullland","Castlesword","Hunterleaf","Pathleaf","Snowbury","Blackmeal","Dustwine","Cragscar","Ravenland","Blesswine","Bravehammer","Ravenfox","Ashfox","Lifehouse","Blastember","Shadowrock","Hellleaf","Shadowwine","Cryland","Bloodleaf","Summerbury","Summeraxe","Blindmark","Crystalbow","Blastheat","Hillmeal","Wildhouse","Blindhammer","Greyheat","Hillember","Hellhammer","Warhawk","Voidhouse","Fogbow","Cursehawk","Greenwind","Cragdragon","Riverwine","Newstar","Daggerlight","Ashwind","Newforged","Curseember","Sunrock","Hunterwine","Starbow","Campmine","Redkind","Woodbread","Cragheat","Rivermine","Warspell","Soulbread","Dustsword","Ashscar","Greatdragon","Landleaf","Ashheat","Fogember","Freebury","Poisonkind","Bluerock","Campland","Airbow","Ashmark","Sorrowwine","Pathwine","Curseland","Castleleaf","Fulldragon","Frozenhawk","Landbread","Highscar","Weakrock","Moonsky","Pastmeal","Airblade","Icewater","Frozenwater","Newspell","Bravewine","Songspell","Oldsky","Pastforged","Frozenbread","Moonwater","Soulwine","Sorrowheat","Greenborn","Hunterspell","Shadowkind","Mistwind","Icerock","Blackember","Riverrock","Hunterscar","Manland","Pathlight","Daggerbread","Moonsword","Campborn","Cavedragon","Endmark","Frostfox","Darksword","Frostember","Crowdragon","Hellwater","Seabury","Greatrock","Blindrock","Icebread","Crystalborn","Darkheat","Darkwine","Kingbow","Cliffwine","Cliffhammer","Freehammer","Newmeal","Crowwine","Blacksky","Warbow","Fogborn","Warforged","Daggerwine","Eyeleaf","Riverhammer","Seaspell","Cursemark","Mistborn","Castlemeal","Whitehouse","Eyeborn","Shadowmeal","Starfox","Lifeforged","Blackfox","Fireleaf","Lifeborn","Blesswater","Darkaxe","Cavesword","Camphouse","Eyebury","Campwind","Firemark","Poisonsword","Crystalforged","Frozenmine","Sorrowbread","Sorrowrock","Greatsky","Starmark","Sorrowember","Blacklight","Lifewater","Redbury","Crystalspell","Summermine","Redfox","Sunhouse","Firesword","Highmark","Mistember","Manmark","Moonspell","Cragkind","Cavelight","Cliffblade","Crowbow","Seahouse","Bloodfox","Wildstar","Dustaxe","Greatmine","Firebow","Miststar","Bravebow","Blackhouse","Crystaldragon","Mandragon","Cryborn","Forestsword","Bluemine","Blastlight","Windforged","Daggerkind","Blesslight","Endmine","Sorrowbow","Fogwater","Seaforged","Endstar","Frostwater","Starstar","Eyemeal","Whitemine","Castlemark","Fogmeal","Oldhawk","Blackwine","Mistmark","Dustrock","Whiteleaf","Pathhouse","Wildaxe","Woodmine","Fogmark","Landember","Crowhammer","Bluesword","Winddragon","Foglight","Fullsky","Hardmark","Crowsky","Poisonblade","Greyborn","Summerwater","Darkfox","Helldragon","Winterlight","Poisonspell","Songkind","Greathammer","Cliffdragon","Airscar","Ashenwind","Frozenheat","Summerleaf","Icefox","Hardbread","Pastfox","Starhouse","Daggerdragon","Forestrock","Blaststar","Frostwind","Cryforged","Forestdragon","Grandmeal","Bravehawk","Airsky","Hardhouse","Blackleaf","Icesword","Campmeal","Snowwine","Frostmeal","Greyaxe","Soulwind","Sunbow","Cliffwater","Oldlight","Moonbread","Bravehouse","Dustscar","Riverblade","Newsky","Dusthawk","Soulwater","Riverstar","Cavebury","Cavefox","Blastsword","Cragblade","Winterland","Whitehawk","Warember","Bloodborn","Lifewind","Blessscar","Manhawk","Sorrowwater","Blastbow","Hunterbow","Poisondragon","Frozensky","Lifesword","Clifflight","Eyehouse","Grandaxe","Manblade","Moonmeal","Bloodland","Kingbread","Cragsky","Winterblade","Blesshammer","Sunwine","Snowbow","Sunfox","Campstar","Freeblade","Mistwater","Redaxe","Ashhammer","Snowwater","Pathscar","Crydragon","Hardleaf","Weakleaf","Pathsword","Fogrock","Freeheat","Bravekind","Eyedragon","Cavehawk","Enddragon","Riversky","Freemine","Ashstar","Endember","Snowlight","Lifemeal","Kingmeal","Oldwine","Highrock","Landbury","Highwind","Cliffforged","Weakember","Sunland","Redscar","Moonfox","Endleaf","Riversword","Newheat","Windheat","Windhouse","Weakfox","Cliffaxe","Castleland","Winterember","Pastsky","Ashenbread","Cragwind","Landsky","Lifehammer","Cryleaf","Summerwine","Oldwater","Woodwine","Newmark","Frozenwind","Greenstar","Voidbread","Ravenkind","Mistheat","Landbow","Voidheat","Dustkind","Mistsky","Oldwind","Songfox","Eyestar","Blastwind","Fireheat","Landforged","Oldbread","Hilldragon","Greatwine","Crowland","Grandland","Wildrock","Moonland","Pathborn","Cursemine","Poisonwind","Sunbury","Voidember","Icehouse","Cliffember","Ashenheat","Songforged","Pastwater","Misthammer","Crystalleaf","Winterstar","Fullhouse","Oldfox","Frosthouse","Frozenland","Darkborn","Lifestar","Eyespell","Blastmeal","Poisonhouse","Voidstar","Hunterember","Weakblade","Shadowscar","Fullhammer","Forestmeal","Warheat","Songsword","Bloodember","Whitesword","Braveheat","Blessland","Bluewater","Firehawk","Darkwind","Blindbread","Forestmine","Fullhawk","Crystar","Frozenaxe","Grandhawk","Fogmine","Hunterheat","Freesky","Snowmine","Foghouse","Ashenmeal","Bluehawk","Bloodforged","Manbread","Cursebow","Blacksword","Freescar","Greyleaf","Blastrock","Iceforged","Firerock","Poisonsky","Frostkind","Hardbury","Caveember","Windsword","Ashsky","Kingsky","Ashhouse","Weakwine","Weakhouse","Firesky","Hillland","Whitewind","Greymeal","Crowbread","Whitelight","Ravenmeal","Shadowblade","Ashland","Warscar","Curseforged","Cliffleaf","Songaxe","Pathhammer","Summermeal","Starhammer","Airkind","Greatsword","Hellember","Sunstar","Woodlight","Wildheat","Soulfox","Kingspell","Grandrock","Hardsword","Bluedragon","Blessdragon","Seaborn","Bluelight","Soulkind","Cliffmine","Fogbread","Blindsky","Cragwine","Endscar","Snowhammer","Seaaxe","Hellscar","Voidsky","Cragbread","Blindmeal","Ravenbow","Hardmine","Voidforged","Shadowmine","Pathspell","Crysky","Ashenember","Blackhammer","Sealand","Freeleaf","Highland","Grandborn","Soulborn","Pathwater","Soulrock","Voidaxe","Forestaxe","Hellkind","Pasthammer","Seastar","Cavebow","Blackbow","Fullstar","Windbread","Fullforged","Seablade","Frostscar","Starwater","Freebow","Endlight","Freehouse","Crysword","Highstar","Bloodstar","Ravenaxe","Bloodhouse","Bloodmeal","Blesssword","Blackaxe","Caveleaf","Forestlight","Weakmeal","Airbread","Soulspell","Ashenspell","Kingwind","Mansword","Frosthawk","Ashember","Newleaf","Bloodkind","Manwine","Crybury","Fullblade","Woodwater","Wildforged","Warblade","Iceember","Fogsword","Hillbow","Bloodwater","Darkbread","Greatheat","Rivermeal","Woodbow","Oldland","Windember","Caveblade","Campsky","Cragstar","Whitebow","Eyesky","Castlewind","Ashenbury","Blessmine","Cliffkind","Blastspell","Castledragon","Forestwater","Weakwater","Hellhouse","Endspell","Blindforged","Hunterhawk","Poisonheat","Curselight","Summerheat","Mistrock","Blindwater","Sorrowleaf","Soulember","Granddragon","Darkmine","Greyhouse","Highbury","Dustforged","Pastbow","Winterforged","Ravenwind","Helllight","Hillhammer","Bravestar","Pathkind","Kingfox","Cryhammer","Crowkind","Sorrowfox","Campspell","Ashenleaf","Airsword","Fullmark","Snowkind","Mistmeal","Moonlight","Ashenfox","Kingmine","Whitehammer","Summermark","Lifeland","Ashhawk","Sorrowdragon","Dustember","Soulblade","Grandbow","Songstar","Frozenrock","Cavemine","Castlebury","Crystalwind","Summerscar","Warkind","Bloodbread","Landstar","Woodsky","Wintermine","Caveheat","Blooddragon","Endland","Blastkind","Hillhouse","Starmine","Kingsword","Wildsword","Windwind","Pastleaf","Moonheat","Dusthouse","Frozendragon","Sunblade","Fogkind","Cliffmeal","Cavesky","Eyeblade","Hunterlight","Endsky","Songland","Cursebread","Daggerblade","Manfox","Braveaxe","Summersky","Fogwind","Darklight","Icebow","Darkdragon","Frozensword","Winterscar","Manstar","Highdragon","Greyhawk","Cliffbread","Firewine","Pastwind","Hunterbury","Summerkind","Wildmine","Greatblade","Woodborn","Crowwind","Whitewater","Greykind","Windrock","Sorrowlight","Greyforged","Cursescar","Ashspell","Poisonscar","Icebury","Soulforged","Snowbread","Bloodhawk","Weaksword","Manlight","Eyerock","Windlight","Greatscar","Grandwine","Greatmark","Ashenstar","Cursewine","Voidmark","Firehouse","Ravenforged","Lifeember","Airrock","Greyscar","Mistleaf","Endwind","Woodscar","Sunhammer","Blesssky","Cursemeal","Whiteheat","Oldaxe","Daggermark","Mistfox","Voidbow","Cragspell","Fireaxe","Wildmeal","Freeaxe","Manmine","Highwine","Blackstar","Poisonmark","Firemine","Blastwater","Daggermine","Snowember","Sealight","Eyebread","Weaksky","Warwind","Manrock","Cavekind","Highlight","Crowmark","Forestkind","Cursesky","Highhawk","Forestwine","Poisonfox","Riverbread","Frozenstar","Greenhouse","Bravefox","Daggerfox","Winterbow","Windwater","Castlehouse","Daggeraxe","Redrock","Icewind","Soulhawk","Blindheat","Newhammer","Greyblade","Songheat","Wildlight","Castleheat","Crowspell","Huntermine","Winterwind","Seadragon","Freestar","Blastsky","Endbow","Ravenbread","Riveraxe","Airhawk","Pastblade","Endaxe","Blessfox","Blackspell","Windaxe","Songwind","Greenwine","Greatlight","Windleaf","Riverland","Redember","Greenaxe","Lifedragon","Mankind","Bluebread","Foresthawk","Greatwind","Voiddragon","Seahammer","Pastaxe","Cryblade","Crowleaf","Lifekind","Summerforged","Eyeforged","Soulmeal","Cryscar","Craghammer","Cliffbow","Soulsky","Blasthouse","Voidlight","Starmeal","Soulmine","Dustbow","Cavespell","Moonhouse","Greathawk","Darkleaf","Fullwine","Ravenspell","Darkember","Mistlight","Blackbury","Woodfox","Ashenforged","Cursespell","Castlescar","Greatmeal","Daggermeal","Icedragon","Castlelight","Darkmeal","Blindwind","Fogleaf","Crystalstar","Redwind","Whitestar","Blindlight","Darkbury","Redleaf","Snowforged","Blastbread","Summerbread","Cavebread","Eyehammer","Bloodhammer","Highsky","Summerlight","Eyelight","Weakbow","Newland","Fullmine","Greatland","Campember","Poisonmine","Newfox","Hunterrock","Moonbow","Hardland","Winteraxe","Sunforged","Hunterwater","Whitescar","Hillstar","Frostmark","Blastforged","Redwine","Sorrowblade","Crybread","Blastmine","Whiteblade","Songbow","Hellmark","Eyefox","Winterkind","Snowmeal","Cragleaf","Wildwater","Blessstar","Ashaxe","Iceblade","Songlight","Starheat","Whiterock","Fireforged","Newrock","Kingember","Ashensword","Starscar","Greatborn","Crystalhammer","Kingleaf","Greydragon","Hardfox","Endbread","Cursewind","Ashrock","Pathblade","Bravemeal","Cavewater","Summerhawk","Hardwater","Greywine","Endwater","Poisonrock","Sunhawk","Darksky","Greendragon","Cryrock","Grandfox","Blackkind","Windmeal","Windwine","Hillleaf","Pathforged","Craglight","Eyewine","Blindleaf","Snowheat","Campwater","Greatleaf","Castlebow","Greenrock","Campaxe","Mistkind","Lifelight","Ashenscar","Dustbury","Cursestar","Hillmine","Riverfox","Blastaxe","Wooddragon","Pastrock","Sunember","Starspell","Searock","Greenlight","Darkforged","Firespell","Blastwine","Dustfox","Snowborn","Poisonstar","Sorrowhammer","Greensword","Castlehammer","Windstar","Ravenhammer","Sunheat","Voidland","Poisonbow","Blueborn","Bluescar","Darkhouse","Blessforged","Highbread","Daggersky","Voidmeal","Greensky","Blastborn","Cliffbury","Blackheat","Blueember","Pastland","Cragmine","Cliffsky","Voidwater","Bloodblade"]}';