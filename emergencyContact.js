class EmergencyContact {
  constructor(name, phone) {
    this.name = name;
    this.phoneNumber = phone;
  }

  equals(otherContact) {
    return (
      this.name === otherContact.name &&
      this.phoneNumber === otherContact.phoneNumber
    );
  }
}

module.exports = EmergencyContact;
