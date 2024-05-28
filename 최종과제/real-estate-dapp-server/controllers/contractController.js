const RealEstateContract = artifacts.require('RealEstateContract');

exports.createContract = async (req, res) => {
  const { property, buyer, seller, price } = req.body;
  try {
    const contractInstance = await RealEstateContract.deployed();
    await contractInstance.createContract(property, buyer, seller, price, { from: req.body.account });
    res.json({ message: 'Contract created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getContract = async (req, res) => {
  const { id } = req.params;
  try {
    const contractInstance = await RealEstateContract.deployed();
    const contract = await contractInstance.getContract(id);
    res.json(contract);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.completeContract = async (req, res) => {
  const { id } = req.body;
  try {
    const contractInstance = await RealEstateContract.deployed();
    await contractInstance.completeContract(id, { from: req.body.account });
    res.json({ message: 'Contract completed successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};