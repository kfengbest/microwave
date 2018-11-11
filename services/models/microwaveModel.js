var mongoose = require('mongoose');

const Schema = mongoose.Schema;
const microwaveModelSchema = new Schema({
    id: { type: String   },
    name: { type: String }
});

module.exports = mongoose.model('microwaveModel', microwaveModelSchema);
