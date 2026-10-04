const Address = require("./address");
const Consulta = require("./consulta");
const Diagnosis = require("./diagnosis");
const Doctor = require("./doctor");
const EmergencyContact = require("./emergencyContact");
const Exame = require("./exame");
const MedicalRecord = require("./medicalRecord");
const Medication = require("./medication");
const Paciente = require("./paciente");
const Treatment = require("./treatment");

const emergencyContact = new EmergencyContact("Maria Silva", "(11) 88888-8888");

const address = new Address(
  "Rua das Flores",
  "123",
  "São Paulo",
  "São Paulo",
  "(11) 11111-1111",
);

const paciente1 = new Paciente(
  "1",
  "123.456.789-00",
  "João Silva",
  "1990-01-01",
  "Masculino",
  "0+",
  "Nenhuma",
  address,
  "(11) 99999-9999",
  "joao.silva@email.com",
  emergencyContact,
);

const medico1 = new Doctor(
  "101",
  "CRM/SP 123456",
  "Dr. Carlos",
  ["Cardiologia", "Clínica Geral"],
  "(11) 77777-7777",
);

const consulta1 = new Consulta(
  "201",
  "2023-10-15",
  paciente1,
  medico1,
  "Dor no peito",
  "Agendada",
  "Paciente relatou dor no peito após esforço físico.",
);

const exame1 = new Exame(
  "301",
  "Hemograma",
  "Normal",
  "2023-10-10",
  "Laboratório X",
  "Dr. Ana",
  paciente1,
);

const prontuario1 = new MedicalRecord();

paciente1.agendarConsulta(consulta1);
paciente1.adicionarExame(exame1);
prontuario1.addDiagnosis(new Diagnosis("Hipertensão"));
prontuario1.addTreatment(new Treatment("Redução no consumo de sal"));
prontuario1.addMedication(new Medication("Captopril", "25 mg"));
paciente1.adicionarAoHistorico(prontuario1);

console.log(consulta1);
