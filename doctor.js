const WorkingHours = require("./workingHours");

class Doctor {
  constructor(id, crm, name, specialties, phone) {
    this.id = id;
    this.crm = crm;
    this.name = name;
    this.specialties = specialties;
    this.phone = phone;
    this.workingHours = new WorkingHours();
  }

  addWorkingHours(day, timeSlot) {
    this.workingHours.addWorkingHours(day, timeSlot);
  }

  removeWorkingHours(day, timeSlot) {
    this.workingHours.removeWorkingHours(day, timeSlot);
  }
}

module.exports = Doctor;
