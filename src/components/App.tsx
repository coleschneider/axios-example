import * as React from 'react';

import axios from 'axios';
const baseRequest = axios.create({
  baseURL: 'https://api.vericred.com',
  headers: {
    'Vericred-Api-Key': 'asdas',
  },
});
class App extends React.Component {
  async componentDidMount() {
    const res = await baseRequest.get('/providers', {
      params: {
        search_term: 'someterm',
        page: 's',
      },
    });

    console.log(res.data);
  }

  render() {
    return <div>hello</div>;
  }
}

export default App;
