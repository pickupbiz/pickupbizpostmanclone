import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import Request from './components/Workspace/Request/RequestPanel';
import Response from './components/Workspace/Response/ResponsePanel';
import Loader from './components/Loader/loader';

const App = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  //created app
  return (
    <>
    
      <Layout>
        <Request setResponse={setResponse} setLoading={setLoading} />
        <Response response={response} loading={loading} />
      </Layout>
      <Loader />
    </>
  );
};

export default App;
