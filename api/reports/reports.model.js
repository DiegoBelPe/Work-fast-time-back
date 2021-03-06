const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
);

module.exports = mongoose.model('Report', ReportSchema);
