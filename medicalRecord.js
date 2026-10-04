const Diagnosis = require("./diagnosis");
const Medication = require("./medication");
const Treatment = require("./treatment");

class MedicalRecord {
  constructor() {
    this.diagnoses = [];
    this.treatments = [];
    this.medications = [];
  }

  addDiagnosis(diagnosis) {
    if (!(diagnosis instanceof Diagnosis)) {
      throw new Error("Invalid diagnosis object");
    }
    this.diagnoses.push(diagnosis);
  }

  addTreatment(treatment) {
    if (!(treatment instanceof Treatment)) {
      throw new Error("Invalid treatment object");
    }
    this.treatments.push(treatment);
  }

  addMedication(medication) {
    if (!(medication instanceof Medication)) {
      throw new Error("Invalid medication object");
    }
    this.medications.push(medication);
  }

  equals(otherRecord) {
    if (!(otherRecord instanceof MedicalRecord)) {
      return false;
    }

    return (
      this.diagnoses.length === otherRecord.diagnoses.length &&
      this.treatments.length === otherRecord.treatments.length &&
      this.medications.length === otherRecord.medications.length &&
      this.diagnoses.every((diagnosis, index) =>
        diagnosis.equals(otherRecord.diagnoses[index]),
      ) &&
      this.treatments.every((treatment, index) =>
        treatment.equals(otherRecord.treatments[index]),
      ) &&
      this.medications.every((medication, index) =>
        medication.equals(otherRecord.medications[index]),
      )
    );
  }
}

module.exports = MedicalRecord;
