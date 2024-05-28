import React, { useState } from 'react';

function ContractForm() {
  const [form, setForm] = useState({
    property: '',
    buyer: '',
    seller: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    console.log('Form submitted:', form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Property:</label>
        <input type="text" name="property" value={form.property} onChange={handleChange} />
      </div>
      <div>
        <label>Buyer:</label>
        <input type="text" name="buyer" value={form.buyer} onChange={handleChange} />
      </div>
      <div>
        <label>Seller:</label>
        <input type="text" name="seller" value={form.seller} onChange={handleChange} />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" name="price" value={form.price} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContractForm;