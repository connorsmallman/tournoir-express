import mongoose from 'mongoose';

let Schema = mongoose.Schema({
	playerName: String,
});

export default mongoose.model('Players', Schema, 'players');