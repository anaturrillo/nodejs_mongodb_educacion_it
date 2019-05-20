module.exports = (db) => (user, callback) => {
  const userToInsert = {...user, _id: user.email};

  return db.collection('users')
    .insertOne(userToInsert)
    .then(function (e) {
      callback()
    })
    .catch(function (error) {
      callback(error)
    })
};