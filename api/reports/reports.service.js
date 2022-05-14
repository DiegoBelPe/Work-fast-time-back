const ReportModel = require('./reports.model');

function getAllReport() {
  return ReportModel.find();
}

async function getOneReport(id) {
  const report = await ReportModel.findById(id);
  if (!report) {
    return null;
  }
  return report;
}
async function deleteReport(id) {
  const report = await ReportModel.findByIdAndDelete(id);
  if (!report) {
    return null;
  }

  return report;
}
async function createReport(report) {
  const newReport = await new ReportModel( report );
  return newReport.save();
}
function updateReport(id, report) {
  return ReportModel.findByIdAndUpdate(id, report, { new: true });

}

module.exports = {
  getAllReport,
  getOneReport,
  deleteReport,
  createReport,
  updateReport,
};
