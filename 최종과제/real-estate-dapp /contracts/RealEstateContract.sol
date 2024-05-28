// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RealEstateContract {
    struct Contract {
        uint id;
        string property;
        string buyer;
        string seller;
        uint price;
        bool completed;
    }

    uint public nextId;
    mapping(uint => Contract) public contracts;

    event ContractCreated(uint id, string property, string buyer, string seller, uint price);
    event ContractCompleted(uint id);

    function createContract(string memory _property, string memory _buyer, string memory _seller, uint _price) public {
        contracts[nextId] = Contract(nextId, _property, _buyer, _seller, _price, false);
        emit ContractCreated(nextId, _property, _buyer, _seller, _price);
        nextId++;
    }

    function completeContract(uint _id) public {
        Contract storage realEstateContract = contracts[_id];
        require(!realEstateContract.completed, "Contract already completed.");
        realEstateContract.completed = true;
        emit ContractCompleted(_id);
    }

    function getContract(uint _id) public view returns (uint, string memory, string memory, string memory, uint, bool) {
        Contract storage realEstateContract = contracts[_id];
        return (realEstateContract.id, realEstateContract.property, realEstateContract.buyer, realEstateContract.seller, realEstateContract.price, realEstateContract.completed);
    }
}