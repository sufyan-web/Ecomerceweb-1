import React from 'react'

function CopyCard() {
    const products = [
        {
          discount: "-40%",
          img: "https://images.unsplash.com/photo-1649875951914-61057a5df533?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "HAVIT HV-G92 Gamepad",
          newPrice: 120,
          oldPrice: 160,
          stars: 2
        },
        {
          discount: "-20%",
          img: "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?fit=crop&w=500&h=500",
          title: "Wireless Mouse",
          newPrice: 20,
          oldPrice: 25,
          stars: 4.2
        },
        {
          discount: "-30%",
          img: "https://plus.unsplash.com/premium_photo-1682436737554-1fab23f246cf?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Gaming Headset",
          newPrice: 70,
          oldPrice: 100,
          stars: 4.7
        },
        {
          discount: "-15%",
          img: "https://images.pexels.com/photos/3945682/pexels-photo-3945682.jpeg?fit=crop&w=500&h=500",
          title: "Mechanical Keyboard",
          newPrice: 85,
          oldPrice: 100,
          stars: 4.3
        },
        {
          discount: "-10%",
          img: "https://images.unsplash.com/photo-1675319245480-215961c129f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Portable Speaker",
          newPrice: 45,
          oldPrice: 50,
          stars: 4.6
        },
        {
          discount: "-25%",
          img: "https://images.unsplash.com/photo-1461141346587-763ab02bced9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
          title: "Smart Watch",
          newPrice: 150,
          oldPrice: 200,
          stars: 4.8
        }
      ];
  return (
    <div className="container mx-auto p-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {products.map((product, index) => (
      <div
        key={index}
        className="group border rounded-lg overflow-hidden shadow-lg bg-white transition transform hover:scale-105"
      >
        <div className="relative">
          <img
            src={product.img}
            alt="product img"
            className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <span className="bg-[#DB4444] absolute top-3 left-3 bg-primary text-xs font-bold py-1 px-2 rounded text-white">
            {product.discount}
          </span>
        </div>

        <div className="p-4 flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary">
            {product.title}
          </h3>
          
          <div className="flex items-center gap-2 text-gray-500">
            <span className="text-xl font-bold text-black">${product.newPrice}</span>
            <span className="text-sm line-through">${product.oldPrice}</span>
          </div>

          <div className="flex items-center text-yellow-500">
            {'⭐'.repeat(Math.floor(product.stars))}
            <span className="ml-2 text-sm text-gray-600">{product.stars.toFixed(1)}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default CopyCard