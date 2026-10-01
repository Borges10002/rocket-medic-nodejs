class WorkingHours {
  constructor() {
    this.hours = [];
  }

  addHour(day, timeSlot) {
    this.hours.push({ day, timeSlot });
  }

  removeHour(day, timeSlot) {
    this.hours = this.hours.filter(
      (hour) => !(hour.day === day && hour.timeSlot === timeSlot),
    );
  }

  equals(other) {
    if (this.hours.length !== other.hours.length) {
      return false;
    }

    return this.hours.every(
      (hour, index) =>
        hour.day === other.hours[index].day &&
        hour.timeSlot === other.hours[index].timeSlot,
    );
  }

  listHours() {
    return this.hours;
  }
}

module.exports = WorkingHours;
