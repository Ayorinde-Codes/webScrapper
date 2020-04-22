import Scrap from '../controllers/scrap';

        export default (app) => {

          app.get('/api', (req, res) => res.status(200).send({
            message: 'Welcome to the BookStore API!',
          }));

          app.post('/api/scrap', Scrap.Scrapper); // API route for user to signup
        };