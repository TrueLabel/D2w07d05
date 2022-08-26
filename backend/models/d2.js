const mongoose = require('mongoose');

const shelterSchema = new mongoose.Schema(
  {

    readcheck: Boolean,
    category: String,
    book: String,
    card: String

}
);

const D2 = mongoose.model('D2', shelterSchema);

module.exports = D2;
