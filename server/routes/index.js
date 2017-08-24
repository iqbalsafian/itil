import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express'
  });
});

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

  router.use('/api', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  }));
// });

export default router;
