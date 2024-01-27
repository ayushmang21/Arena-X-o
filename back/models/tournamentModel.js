const {model, Schema} = require('../connection');

const mySchema = new Schema({
    game : String,
    entry_type : String,
    tournament_type : String,
    prize : Number,
    team_size : String,
    region : String,
    platform : String,
    date_time : Date,
    caption : String,
});

module.exports = model('tournaments', mySchema);