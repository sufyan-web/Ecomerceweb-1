

export default function ProductCard() {
    const products = [
        {
          discount: "-40%",
          img: "https://images.unsplash.com/photo-1580910051072-2cb8e0d1f724?fit=crop&w=500&h=500",
          title: "HAVIT HV-G92 Gamepad",
          newPrice: 120,
          oldPrice: 160,
          stars: 4.5
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
          img: "https://images.unsplash.com/photo-1555617980-c841e9e2e7b8?fit=crop&w=500&h=500",
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
          img: "https://images.unsplash.com/photo-1580795478584-9c3d99b7f4f7?fit=crop&w=500&h=500",
          title: "Portable Speaker",
          newPrice: 45,
          oldPrice: 50,
          stars: 4.6
        },
        {
          discount: "-25%",
          img: "https://images.unsplash.com/photo-1615637598251-8bb9a627f391?fit=crop&w=500&h=500",
          title: "Smart Watch",
          newPrice: 150,
          oldPrice: 200,
          stars: 4.8
        }
      ];
      
  return (
    products.map((product)=>{
        return(
          
             <div className="group border-2 flex gap-4 flex-col relative bg-[#F5F5F5] w-64 h-[350px]">
      <div className="discount absolute top-3 left-3 bg-primary w-14 h-6 rounded flex items-center text-xs justify-center text-white ">
        {product.discount}
      </div>

      <div className="">
        <img
          src={product.img}
          alt="product img"
          className="m-auto group-hover:scale-110 transition-all duration-300"
        />
      </div>

      <h3 className="font-medium group-hover:text-primary transition-all duration-300">
        {product.title}
      </h3>

      <p>
        <span>{product.newPrice}</span> <span>{product.oldPrice}</span>
      </p>

      <p>{product.stars}</p>
    </div>
        )
    })
   
  );
}