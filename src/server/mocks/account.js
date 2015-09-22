module.exports = function(app) {
  var express = require('express');
  var accountsRouter = express.Router();

  accountsRouter.get('/', function(req, res) {
    res.send({
      'accounts': [
        {
          "id": "1",
          "name": "Jack Francis"
        },
        {
          "id": "2",
          "name": "Jason Hansen"
        }
      ]
    });
  });

  accountsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  accountsRouter.get('/:id', function(req, res) {
    res.send({
      'accounts': {
        id: req.params.id
      }
    });
  });

  accountsRouter.put('/:id', function(req, res) {
    res.send({
      'accounts': {
        id: req.params.id
      }
    });
  });

  accountsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/accounts', accountsRouter);
};
