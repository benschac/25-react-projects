import React from 'react';
import Layout from './Layout';
import CountDownClock from './CountDownClock';
import Controls from './Controls';
import './App.css'


const App = () => (
    <div className="container">
        <Layout>
            <CountDownClock />
            <Controls />
        </Layout>
    </div>
);

export default App;