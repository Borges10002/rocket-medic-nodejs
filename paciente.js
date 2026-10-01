class Paciente {
  constructor(
    id,
    documentoIdentificacao,
    nome,
    dataNascimento,
    genero,
    tipoSanguineo,
    alergias,
    endereco,
    telefone,
    email,
    contatoEmergencia,
  ) {
    this.id = id;
    this.documentoIdentificacao = documentoIdentificacao;
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.genero = genero;
    this.tipoSanguineo = tipoSanguineo;
    this.alergias = alergias;
    this.endereco = endereco;
    this.telefone = telefone;
    this.email = email;
    this.contatoEmergencia = contatoEmergencia;
    this.historicoMedico = [];
    this.consultas = [];
    this.exames = [];
  }

  agendarConsulta(consulta) {
    this.consultas.push(consulta);
  }

  adicionarExame(exame) {
    this.exames.push(exame);
  }

  adicionarAoHistorico(registro) {
    this.historicoMedico.push(registro);
  }
}

module.exports = Paciente;
