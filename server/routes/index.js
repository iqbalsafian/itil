import express from 'express';
import isEmpty from 'lodash/isEmpty';
import Validator from 'validator';
import knex from 'knex';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import config from '../config'

import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express'
  });
});

router.post('/api/login', (req, res, next) => {
  const { email, password } = req.body;

  User.query({where: { email }})
    .fetch().then(user => {
      if (user) {
        if (bcrypt.compareSync(password, user.get('password_digest'))) {
          const token = jwt.sign({
            id: user.get('id'),
            email: user.get('email')
          }, config.jwtSecret);
          res.status(200).json({token});
        } else {
          res.status(401).json({ errors: { form: 'Invalid credentials' }})
        }
      } else {
        res.status(401).json({ errors: { form: 'Invalid credentials' }})
      }
    })
})

// router.get('/api', (req, res, next) => {
  var schema = buildSchema(`
    type Query {
      hello: String
    }
  `)

  var root = {
    hello: () => {
      return 'Hello world!'
    }
  }

  router.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  }));
// });

export default router;
