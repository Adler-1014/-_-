document.addEventListener("DOMContentLoaded", () => {
  const homePage = document.getElementById("home-page");
  const contractPage = document.getElementById("contract-page");
  const userPage = document.getElementById("user-page");
  const contractForm = document.getElementById("contract-form");
  const contractList = document
    .getElementById("contract-list")
    .querySelector("ul");

  // Dummy contract data
  const contracts = [
    {
      id: 1,
      property: "Property 1",
      buyer: "Buyer 1",
      seller: "Seller 1",
      price: 1000,
    },
    {
      id: 2,
      property: "Property 2",
      buyer: "Buyer 2",
      seller: "Seller 2",
      price: 2000,
    },
  ];

  // Display contracts
  const displayContracts = () => {
    contractList.innerHTML = "";
    contracts.forEach((contract) => {
      const li = document.createElement("li");
      li.textContent = `${contract.property} - ${contract.buyer} - ${contract.seller} - $${contract.price}`;
      contractList.appendChild(li);
    });
  };

  displayContracts();

  // Handle form submission
  contractForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newContract = {
      id: contracts.length + 1,
      property: contractForm.property.value,
      buyer: contractForm.buyer.value,
      seller: contractForm.seller.value,
      price: contractForm.price.value,
    };
    contracts.push(newContract);
    displayContracts();
    contractForm.reset();
  });

  // Navigation
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const page = event.target.getAttribute("data-page");
      homePage.classList.remove("active");
      contractPage.classList.remove("active");
      userPage.classList.remove("active");
      if (page === "home") homePage.classList.add("active");
      if (page === "contract") contractPage.classList.add("active");
      if (page === "user") userPage.classList.add("active");
    });
  });
});
