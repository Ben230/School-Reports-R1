function Report() {
  this.greenCounter = 0;
};

Report.prototype.calculate = function(grade) {
  if (grade === "green") {
    this.greenCounter += 1;
  } else {
    return '';
  }

  return 'green: ' + this.greenCounter;

};

module.exports.Report = Report;
