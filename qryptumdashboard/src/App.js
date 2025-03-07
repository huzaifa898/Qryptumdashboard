import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard } from './components/dashboard';
import { FileUpload } from './components/fileupload';
import { Metadata } from './components/Metadata';
import { Scanning } from './components/scanning';
import { Confirmation } from './components/confirmation';
import { PaymentConfirmed } from './components/paymentconfirmed';
import Datacontract from './components/datacontract';
import Parmeters from './components/parmeters'; // Corrected import statement
import EncryptionSecurity from './components/encryptionsecurity'; // Corrected import statement
import PreviewMint from './components/previewmint'; // Corrected import statement
import MintConfirmed from './components/mintconfirmed'; // Corrected import statement

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/upload" element={<FileUpload />} />
        <Route path="/metadata" element={<Metadata />} />
        <Route path="/scanning" element={<Scanning />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/payment-confirmed" element={<PaymentConfirmed />} />
        <Route path="/datacontract" element={<Datacontract />} />
        <Route path="/parmeters" element={<Parmeters />} />
        <Route path="/encryption-security" element={<EncryptionSecurity />} />
        <Route path="/previewmint" element={<PreviewMint />} /> {/* Corrected route name */}
        <Route path="/mintconfirmed" element={<MintConfirmed />} />
      </Routes>
    </Router>
  );
}

export default App;