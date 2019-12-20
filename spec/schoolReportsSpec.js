var reportModule = require('../src/schoolReports.js');
var Report = reportModule.Report;

describe('school report', function() {
  it('returns empty string for no input', function() {
    var schoolReport = new Report;
    expect(schoolReport.calculate('')).toEqual('');
  });

  it('returns "green: 1" for input of "green"', function() {
    var schoolReport = new Report;
    expect(schoolReport.calculate('green')).toEqual('green: 1');
  });

  it('returns "green: 2" for input of "green, green"', function() {
    var schoolReport = new Report;
    expect(schoolReport.calculate('green, green')).toEqual('green: 2');
  });
});
