import React from 'react';

function ContractList() {
  // This would typically fetch and display a list of contracts from the backend
  const contracts = [
    { id: 1, property: 'Property 1', buyer: 'Buyer 1', seller: 'Seller 1', price: 1000 },
    { id: 2, property: 'Property 2', buyer: 'Buyer 2', seller: 'Seller 2', price: 2000 }
  ];

  return (
    <div>
      <h2>Contract List</h2>
      <ul>
        {contracts.map(contract => (
          <li key={contract.id}>
            {contract.property} - {contract.buyer} - {contract.seller} - {contract.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContractList;