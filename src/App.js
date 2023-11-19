// App.js

import React from 'react';
import { Routes, Route,useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/index';
import Sidebar from './components/Sidebar';
import FormContainer from './components/FormContainer';


const App = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    // Navigate to the next step
    navigate('/document-collection');
  };

  return (
    <Provider store={store}>
    
        <div className='main-container'>
          {/* Sidebar component */}
          <Sidebar />

          {/* Content area */}
          <div className='right-side'>
            <h6>Preview</h6>
            <p>You will be able to customize the fields in the later stage</p>
            <Routes>
              Use :step as a parameter in the route path
              <Route
              path="/"
              element={<FormContainer />} 
            />
          
              <Route path="/:step" element={<FormContainer />} />
            </Routes>
          </div>
        </div>
    </Provider>
  );
};

export default App;
