const {
  createReport,
  getAllReport,
  getOneReport,
  deleteReport,
  updateReport,
} = require('./reports.service');

async function handlerAllReport(req, res) {
  const reports = await getAllReport();
  res.json(reports);
}

async function handlerOneReport(req, res) {
  const { id } = req.params;

  const report = await getOneReport(id);

  if (report) {
    res.status(200).json(report);
  } else {
    res.status(404).json({ message: 'informe no encontrado' });
  }
}
async function handlerDeleteReport(req, res) {
  const { id } = req.params;

  try {
    await deleteReport(id);
    res.status(200).json({ message: 'Informe eliminado' });
  } catch (error) {
    res.status(400).json({ message: 'Error al eliminar El informe' });
  } finally {
    res.end();
  }
}
async function handlerCreateReport(req, res) {
  const newReport = req.body;

  try {
    const report = await createReport(newReport);
    res.status(201).json({ message: `Informe ${report}creado con exito`, report });
  } catch (error) {
    res.status(400).json({ message: 'Error al crear El informe' });
  }
}
async function handlerUpdateReport(req, res) {
  const { id } = req.params;
  const { body } = req;

  try {
    const report = await updateReport(id, body);
    console.log(report);
    res.json({ message: `Informe ${report} actualizado con exito`, report });
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar El informe' });
  }
}

module.exports = {
  handlerAllReport,
  handlerOneReport,
  handlerDeleteReport,
  handlerCreateReport,
  handlerUpdateReport,
};
