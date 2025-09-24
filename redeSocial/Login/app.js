async function registrarUsuario(cpf_cliente,nome_cliente,dataNasc_cliente,cep_cliente,especificacaoEndereco_cliente,telefone_cliente,email_cliente) {
  try {
    const resposta = await fetch('http://localhost:3000/cadastroCliente', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cpf_cliente: cpf_cliente,
        nome_cliente: nome_cliente,
        dataNasc_cliente: dataNasc_cliente,
        cep_cliente: cep_cliente,
        especificacaoEndereco_cliente: especificacaoEndereco_cliente,
        telefone_cliente: telefone_cliente,
        email_cliente: email_cliente,
      })
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      console.log('✅ Usuário registrado com sucesso!');
    } else {
      switch (resposta.status) {
        case 400:
          console.warn('⚠️ Dados inválidos. Verifique se todos os campos foram preenchidos corretamente.');
          break;
        case 409:
          console.warn('❗ Esse nome de usuário já está em uso. Tente outro.');
          break;
        case 500:
          console.warn('💥 Erro interno no servidor. Tente novamente mais tarde.');
          break;
        default:
          console.warn(`❗ Erro inesperado: ${resposta.status}`);
      }

      console.debug('Detalhes do erro:', dados.mensagem || dados);
    }
  } catch (erro) {
    console.error('🚫 Erro ao tentar registrar usuário:', erro.message);
  }
}

async function registrarAnaminese(cliente_cpfCliente,esta_em_tratamento_medico,motivo_tratamento_medico,gravidez,dieta,diabetes,alergias,quais_alergias,febre_reumatica,problema_de_coagulacao,cardiaco,hemorragicos,problemas_com_anestesias,alergia_a_medicamentos,quais_medicamentos,hepatite,quanto_tempo_faz,hiv,drogas,droga_qual,fumante,ja_fumou,pressao_arterial,problema_respiratorio,qual_respiratorio,doenca_familiar,observacao,doutor_idDoutor) {
  try {
    const resposta = await fetch('http://localhost:3000/Anaminese', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cliente_cpfCliente: cliente_cpfCliente,
        esta_em_tratamento_medico: esta_em_tratamento_medico,
        motivo_tratamento_medico: motivo_tratamento_medico,
        gravidez: gravidez,
        dieta: dieta,
        diabetes: diabetes,
        alergias: alergias,
        quais_alergias: quais_alergias,
        febre_reumatica: febre_reumatica,
        problema_de_coagulacao: problema_de_coagulacao,
        cardiaco: cardiaco,
        hemorragicos: hemorragicos,
        problemas_com_anestesias: problemas_com_anestesias,
        alergia_a_medicamentos: alergia_a_medicamentos,
        quais_medicamentos: quais_medicamentos,
        hepatite: hepatite,
        quanto_tempo_faz: quanto_tempo_faz,
        hiv: hiv,
        drogas: drogas,
        droga_qual: droga_qual,
        fumante: fumante,
        ja_fumou: ja_fumou,
        pressao_arterial: pressao_arterial,
        problema_respiratorio: problema_respiratorio,
        qual_respiratorio: qual_respiratorio,
        doenca_familiar: doenca_familiar,
        observacao: observacao,
        doutor_idDoutor: doutor_idDoutor,
      })
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      console.log('✅ Usuário registrado com sucesso!');
      console.log('Detalhes:', dados);
    } else {
      switch (resposta.status) {
        case 400:
          console.warn('⚠️ Dados inválidos. Verifique se todos os campos foram preenchidos corretamente.');
          break;
        case 500:
          console.warn('💥 Erro interno no servidor. Tente novamente mais tarde.');
          break;
        default:
          console.warn(`❗ Erro inesperado: ${resposta.status}`);
      }

      console.debug('Detalhes do erro:', dados.mensagem || dados);
    }
  } catch (erro) {
    console.error('🚫 Erro ao tentar registrar usuário:', erro.message);
  }
}

async function fazerLogin(cpf_cliente, nome_cliente) {
  try {
    const resposta = await fetch('http://localhost:3000/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cpf_cliente: cpf_cliente,
        nome_cliente: nome_cliente,
      })
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      console.log('✅ Login realizado com sucesso!');
      console.log('Bem-vindo,', dados.nome); // se o backend retornar o nome
    } else {
      switch (resposta.status) {
        case 400:
          console.warn('⚠️ Requisição inválida. Verifique os dados enviados.');
          break;
        case 401:
          console.warn('🔒 Usuário ou senha incorretos.');
          break;
        case 404:
          console.warn('❌ Usuário não encontrado.');
          break;
        case 500:
          console.warn('💥 Erro interno no servidor. Tente novamente mais tarde.');
          break;
        default:
          console.warn(`❗ Erro inesperado: ${resposta.status}`);
      }

      console.debug('Detalhes do erro:', dados.mensagem || dados);
    }
  } catch (erro) {
    console.error('🚫 Erro de conexão com o servidor:', erro.message);
  }
}

async function buscarLike(cpf_cliente,nome_cliente) {
  try {
    const resposta = await fetch('http://localhost:3000/buscarSeletiva', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cpf_cliente: cpf_cliente,
        nome_cliente: nome_cliente,
      })
    });
    const dados = await resposta.json();

    if (resposta.ok) {
      dados.forEach(cliente => {
        console.log("CPF: ", cliente.cpf_cliente);
        console.log("Nome: ", cliente.nome_cliente);
        console.log("Data de nascimento: ", cliente.dataNasc_cliente);
        console.log("Cep: ", cliente.cep_cliente);
        console.log("Complemento do Endereço: ", cliente.especificacaoEndereco_cliente);
        console.log("Telefone: ", cliente.telefone_cliente);
        console.log("Email: ", cliente.email_cliente);
        console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n`)
      });
    } else {
      switch (resposta.status) {
        case 400:
          console.warn('⚠️ Dados inválidos. Verifique se todos os campos foram preenchidos corretamente.');
          break;
        case 500:
          console.warn('💥 Erro interno no servidor. Tente novamente mais tarde.');
          break;
        default:
          console.warn(`❗ Erro inesperado: ${resposta.status}`);
      }

      console.debug('Detalhes do erro:', dados.mensagem || dados);
    }
  } catch (erro) {
    console.error('🚫 Erro ao tentar registrar usuário:', erro.message);
  }
}

async function buscarEsp(cpf_cliente,nome_cliente) {
  try {
    const resposta = await fetch('http://localhost:3000/buscarCli', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cpf_cliente: cpf_cliente,
        nome_cliente: nome_cliente,
      })
    });
    const dados = await resposta.json();

    if (resposta.ok) {
      dados.forEach(cliente => {
        console.log("CPF: ", cliente.cpf_cliente);
        console.log("Nome: ", cliente.nome_cliente);
        console.log("Data de nascimento: ", cliente.dataNasc_cliente);
        console.log("Cep: ", cliente.cep_cliente);
        console.log("Complemento do Endereço: ", cliente.especificacaoEndereco_cliente);
        console.log("Telefone: ", cliente.telefone_cliente);
        console.log("Email: ", cliente.email_cliente);
        console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n`)
      });
    } else {
      switch (resposta.status) {
        case 400:
          console.warn('⚠️ Dados inválidos. Verifique se todos os campos foram preenchidos corretamente.');
          break;
        case 500:
          console.warn('💥 Erro interno no servidor. Tente novamente mais tarde.');
          break;
        default:
          console.warn(`❗ Erro inesperado: ${resposta.status}`);
      }

      console.debug('Detalhes do erro:', dados.mensagem || dados);
    }
  } catch {
    
  }
}

async function registrarDent(nome_dentista,dataNasc_dentista,especializacao,cpf_dentista,cro,telefone_dentista,email_dentista,cep_dentista,especificacaoEndereco_dentista,tipoContrato_dentista,valorCobranca_dentista,esquemaMateriais_dentista,situacao_dentista) {
  try {
    const resposta = await fetch('http://localhost:3000/cadastroDentistas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome_dentista: nome_dentista,
        dataNasc_dentista: dataNasc_dentista,
        especializacao: especializacao,
        cpf_dentista: cpf_dentista,
        cro: cro,
        telefone_dentista: telefone_dentista,
        email_dentista: email_dentista,
        cep_dentista: cep_dentista,
        especificacaoEndereco_dentista: especificacaoEndereco_dentista,
        tipoContrato_dentista: tipoContrato_dentista,
        valorCobranca_dentista: valorCobranca_dentista,
        esquemaMateriais_dentista: esquemaMateriais_dentista,
        situacao_dentista: situacao_dentista,
      })
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      console.log('✅ Usuário registrado com sucesso!');
    } else {
      switch (resposta.status) {
        case 400:
          console.warn('⚠️ Dados inválidos. Verifique se todos os campos foram preenchidos corretamente.');
          break;
        case 409:
          console.warn('❗ Esse nome de usuário já está em uso. Tente outro.');
          break;
        case 500:
          console.warn('💥 Erro interno no servidor. Tente novamente mais tarde.');
          break;
        default:
          console.warn(`❗ Erro inesperado: ${resposta.status}`);
      }

      console.debug('Detalhes do erro:', dados.mensagem || dados);
    }
  } catch (erro) {
    console.error('🚫 Erro ao tentar registrar usuário:', erro.message);
  }
}

async function menu() {
  let exit = false;

  while (!exit) {
    const option = prompt("Escolha uma opção:\n1 - Fazer login\n2 - Cadastrar novo usuário\n3 - anaminese\n4 - consulta por letra\n5 - buscar cliente\n6 - cadrastrar dentitas\n9 - Sair");

    switch (option) {
      case "1":
        const user1 = prompt("Digite o CPF");
        const pass1 = prompt("Digite o nome");
        await fazerLogin(user1, pass1);
        break;
      case "2":
        const cpf2 = prompt("Digite o cpf");
        const nome2 = prompt("Digite o nome");
        const datanasc2 = prompt("Digite a data de nascimento (ano-mes-dia)");
        const cep2 = prompt("Digite o cep");
        const especificacao = prompt("Digite o complemento");
        const telefone = prompt("Digite o telefone");
        const email = prompt("Digite o email");
        await registrarUsuario(cpf2,nome2,datanasc2,cep2,especificacao,telefone,email);
        break;
      case "3":
        const cliente_cpfCliente = prompt("digite o cpf do cliente");
        const esta_em_tratamento_medico = prompt("esta em tratamento \n'Sim', 'Não'");
        const motivo_tratamento_medico = prompt("motivo para o tratamento");
        const gravidez = prompt("gravida \n'Sim', 'Não'");
        const dieta = prompt("esta em dieta \n'Sim', 'Não'");
        const diabetes = prompt("tem diabetes \n'Sim', 'Não'");
        const alergias = prompt("tem alergia \n'Sim', 'Não'");
        const quais_alergias = prompt("quais alergias ");
        const febre_reumatica = prompt("febre reumatica \n'Sim', 'Não'");
        const problema_de_coagulacao = prompt("problema na coagulação \n'Sim', 'Não'");
        const cardiaco = prompt("problema cardiaco \n'Sim', 'Não'");
        const hemorragicos = prompt("problema hemorragico \n'Sim', 'Não'");
        const problemas_com_anestesias = prompt("problema com anestesia \n'Sim', 'Não'");
        const alergia_a_medicamentos = prompt("alergia a medicamentos \n'Sim', 'Não'");
        const quais_medicamentos = prompt("se sim com quais");
        const hepatite = prompt("hepatite \n'Sim', 'Não'");
        const quanto_tempo_faz = prompt("se sim quanto tempo faz ");
        const hiv = prompt("HIV \n'Sim', 'Não'");
        const drogas = prompt("já usou drogas \n'Sim', 'Não'");
        const droga_qual = prompt("se sim quais");
        const fumante = prompt("você é fumante \n'Sim', 'Não'");
        const ja_fumou = prompt("já fumou \n'Sim', 'Não'");
        const pressao_arterial = prompt("como tá a pressão arterial \n'Alta', 'Normal', 'Baixa'");
        const problema_respiratorio = prompt("tem problema respiratorio \n'Sim', 'Não'");
        const qual_respiratorio = prompt("quais doenças respiratorias");
        const doenca_familiar = prompt("quais doenças familiares");
        const observacao = prompt("Quais observações do status do paciente");
        const doutor_idDoutor = prompt("qual o id do doutor")
        await registrarAnaminese(cliente_cpfCliente,esta_em_tratamento_medico,motivo_tratamento_medico,gravidez,dieta,diabetes,alergias,quais_alergias,febre_reumatica,problema_de_coagulacao,cardiaco,hemorragicos,problemas_com_anestesias,alergia_a_medicamentos,quais_medicamentos,hepatite,quanto_tempo_faz,hiv,drogas,droga_qual,fumante,ja_fumou,pressao_arterial,problema_respiratorio,qual_respiratorio,doenca_familiar,observacao,doutor_idDoutor);
        console.log(cliente_cpfCliente,esta_em_tratamento_medico,motivo_tratamento_medico,gravidez,dieta,diabetes,alergias,quais_alergias,febre_reumatica,problema_de_coagulacao,cardiaco,hemorragicos,problemas_com_anestesias,alergia_a_medicamentos,quais_medicamentos,hepatite,quanto_tempo_faz,hiv,drogas,droga_qual,fumante,ja_fumou,pressao_arterial,problema_respiratorio,qual_respiratorio,doenca_familiar,observacao,doutor_idDoutor);
        break;
      case "4":
        const cpfConsultaS =  prompt("qual o pedaço do CPF  (com %)");
        const nomeConsultaS = prompt("qual o pedaço do Nome  (com %)");
        await buscarLike(cpfConsultaS,nomeConsultaS);
        break;
      case "5":
        const cpfConsultat =  prompt("Qual o CPF:");
        const nomeConsultat = prompt("Qual o Nome:");
        await buscarEsp(cpfConsultat,nomeConsultat);
        break;
      case "6":       
        const nome_dentista = prompt("Digite o nome");
        const dataNasc_dentista = prompt("Digite a data de nascimento (ano-mes-dia)");
        const especializacao = prompt("Digite a especialização do dentista");
        const cpf_dentista = prompt("Digite o cpf");
        const cro = prompt("Digite o cro");
        const telefone_dentista = prompt("Digite o telefone");
        const email_dentista = prompt("Digite o email");
        const cep_dentista = prompt("Digite o cep");
        const especificacaoEndereco_dentista = prompt("Digite o complimento do endereço");
        const tipoContrato_dentista = prompt("Digite o tipo de contrato");
        const valorCobranca_dentista = prompt("Digite o valor cobrado");
        const esquemaMateriais_dentista = prompt("Digite o esquema de materiais");
        const situacao_dentista = prompt("Digite o situação do dentista");
        await registrarDent(nome_dentista,dataNasc_dentista,especializacao,cpf_dentista,cro,telefone_dentista,email_dentista,cep_dentista,especificacaoEndereco_dentista,tipoContrato_dentista,valorCobranca_dentista,esquemaMateriais_dentista,situacao_dentista);
        break;
      case "9":
        console.log("Saindo...");
        exit = true;
        break;
      default:
        console.log("Opção inválida.");
        break;
    }
  }
}

menu();
