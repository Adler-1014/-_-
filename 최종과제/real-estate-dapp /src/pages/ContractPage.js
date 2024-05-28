import React from 'react';
import ContractForm from '../components/ContractForm';
import ContractList from '../components/ContractList';

function ContractPage() {
  return (
    <div>
      <h1>Contracts</h1>
      <ContractForm />
      <ContractList />
    </div>
  );
}

export default ContractPage;