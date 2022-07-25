import React from 'react';
import './App.css';
import ModalComponent from './components/rate-modal-component/rate-modal-component';

function App() {
  return (
    <div className="App">
      <ModalComponent />
      <button onClick={() => { localStorage.removeItem('rateReview'); window.location.reload(); }}>Dataları temizle ve modalı göster</button>
    </div>
  );
}

export default App;
