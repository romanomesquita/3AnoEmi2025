let senhaAtual = 0;
  let fila = [];

  function gerarSenha() {
    senhaAtual++;
    fila.push(senhaAtual);
    alert("Senha gerada: " + senhaAtual.toString().padStart(3, '0'));
  }

  function chamarSenha() {
    if (fila.length === 0) {
      alert("Nenhuma senha na fila!");
      return;
    }

    const senha = fila.shift();
    document.getElementById('senhaAtual').textContent = senha.toString().padStart(3, '0');
  }