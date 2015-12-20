import Model from '../models/players';

export default {
  create(player) {
    return new Promise((resolve, reject) => {
      let model = new Model(player);
      model.save(() => {
        resolve();
      });
    });
  },
  get(id) {
    return new Promise((resolve, reject) => {
      Model.findById(id, (err, player) => {
        if (err) reject(err);
        resolve(player);
      });
    });
  },
  all() {
    return new Promise((resolve, reject) => {
      Model.find((err, players) => {
        if (err) reject(err);
        resolve(players);
      });
    });
  },
  del(id) {
    return new Promise((resolve, reject) => {
      Model.findById(id, (err, player) => {
        if (err) reject(err);
        Model.remove({ _id: player._id }, (err) => {
          if (err) reject(err);
          resolve(player);
        });
      });
    });
  }
};