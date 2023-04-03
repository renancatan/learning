const axios = require('axios');

const data = {
  event: 'user_created',
  user_id: '123',
  email: 'user@example.com'
};

axios.post('http://localhost:3000/webhook', data)
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.error(err);
  });
