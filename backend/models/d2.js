const mongoose = require('mongoose');

const shelterSchema = new mongoose.Schema(
  {

    
    library: String,
    book: String,
    card: String,
    image: String,
    readcheck: Boolean

}
);

const D2 = mongoose.model('D2', shelterSchema);

module.exports = D2;
