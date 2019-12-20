function Report() {
  this.greenCounter = 0;
};

Report.prototype.calculate = function(grades) {
  if (grades === '') {
    return ''
  } else {
    const gradesArr = grades.split(', ');

    for (var i=0;i<gradesArr.length;i++){
      if (gradesArr[i] === 'green') {
        this.greenCounter += 1;
      }
    }


    return 'green: ' + this.greenCounter;
  }


};

module.exports.Report = Report;
