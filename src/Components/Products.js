import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Products = () => {
  const productsArr = [
    {
      id: "a1",
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      name: "John",
      profession: "frontend",
      email: "a@gmail.com",
    },
    {
      id: "a2",
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      name: "Doe",
      profession: "data engineer",
      email: "b@GiMailShirt.com",
    },
    {
      id: "a3",
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      name: "Michael",
      profession: "analyst",
      email: "c@GiMailShirt.com",
    },
    {
      id: "a4",
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      name: "Richard",
      profession: 'backend',
      email: "d@GiMailShirt.com",
    },
    {
      id: "a5",
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      name: "Marris",
      profession: "frontend",
      email: "a@gmail.com",
    },
    {
      id: "a6",
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      name: "HARRIS",
      profession: "data engineer",
      email: "b@GiMailShirt.com",
    },
  ];

  const [filterData, setFilterData] = useState(productsArr);
  const [selectedProduct, setSelectedProduct] = useState(null); // To track the magnified product

  function deleteData(id) {
    const newData = filterData.filter((item) => item.id !== id);
    setFilterData(newData);
  }

  function handleDetailsClick(product) {
    setSelectedProduct(product); // Set the selected product to magnify
  }

  return (
    <div className="p-4">
      {selectedProduct && (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6" style={{ width: '600px', height: '320px' }}>
          <div className="flex items-center">
            <img
              className="w-32 h-32 border bg-blue-100 rounded-full"
              src={selectedProduct.imageUrl}
              alt={selectedProduct.name}
            />
            <div className="ml-6">
              <h1 className="text-2xl font-semibold">{selectedProduct.name}</h1>
              <h4 className="text-gray-600">{selectedProduct.profession}</h4>
              <h6 className="text-gray-500">Email - {selectedProduct.email}</h6>
            </div>
          </div>
          <div className="mt-4 text-center">
            <button
              className="bg-red-500 text-white w-[100px] rounded-lg"
              onClick={() => setSelectedProduct(null)} // Close magnified view
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filterData.map((item) => (
          <div key={item.id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between" style={{ width: '560px', height: '300px' }}>
            <div className="flex items-center">
              <img
                className="w-24 h-24 border bg-blue-100 rounded-full"
                src={item.imageUrl}
                alt={item.name}
              />
              <div className="ml-6">
                <h1 className="text-xl font-semibold">{item.name}</h1>
                <h4 className="text-gray-600">{item.profession}</h4>
                <h6 className="text-gray-500">Email - {item.email}</h6>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <Button className="bg-white text-black border border-gray-400 w-[100px] rounded-lg" onClick={() => deleteData(item.id)}>
                Block
              </Button>
              <button className="bg-black text-white w-[100px] rounded-lg" onClick={() => handleDetailsClick(item)}>
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
