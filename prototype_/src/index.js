import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';


ReactDOM.render(<App />, document.getElementById('root'));

/*
new Promise((resolve, reject) => { 
    return reject(new Error('no bears'));
    setTimeout(() => {
        
        resolve('bears,beets,almonds');
    }, 2000);
})
    .then(quote => {
        console.log(quote);
        
    })
    .catch(error=>console.log('error',error))

*/