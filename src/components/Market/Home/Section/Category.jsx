import React from "react";
import { Link } from "react-router-dom";

const Category = ({ items }) => {
  if (items.category === "Books") {
    items.image =
      "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2tzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60";
  }

  if (items.category === "Phones & Tablets")
    items.image =
      "https://images.unsplash.com/photo-1625467096769-fefb5ebdb54c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBob25lJTIwYW5kJTIwdGFibGV0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60";

  if (items.category === "Appliances")
    items.image =
      "https://images.unsplash.com/photo-1626143508000-4b5904e5e84a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFwcGxpYW5jZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60";

  if (items.category === "electronics")
    items.image =
      "https://media.istockphoto.com/id/1440854098/photo/scandinavian-style-modern-living-room-with-entertainment-center.webp?b=1&s=170667a&w=0&k=20&c=H3FbGTnaqUYjA-CE_TPf-Mtvsa04e5VhlSklNEDbwGg=";

  if (items.category === "Supermarket")
    items.image =
      "https://images.unsplash.com/photo-1506617420156-8e4536971650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN1cGVybWFya2V0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60";

  if (items.category === "Health & Beauty")
    items.image =
      "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYwfHxoZWFsdGglMjBhbmQlMjBiZWF1dHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60";

  if (items.category === "Home & office")
    items.image =
      "https://images.unsplash.com/photo-1516315720917-231ef9acce48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGhvbWUlMjBhbmQlMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60";

  if (items.category === "Power")
    items.image =
      "https://media.istockphoto.com/id/1198444825/photo/charging-of-smart-phone-from-power-bank.webp?b=1&s=170667a&w=0&k=20&c=jkV-ICWcWo-WUlzc7mrLnyGwL41aQBGmxi6g9ohhM1o=";

  if (items.category === "Computing")
    items.image =
      "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60";

  if (items.category === "Ladies Fashion")
    items.image =
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWVuJ3MlMjBmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60";

  if (items.category === "Men's Fashion")
    items.image =
      "https://images.unsplash.com/photo-1543322748-33df6d3db806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVuJ3MlMjBmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60";

  if (items.category === "Gaming")
    items.image =
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FtaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60";

  if (items.category === "Baby Products")
    items.image =
      "https://media.istockphoto.com/id/625379326/photo/organic-cosmetic-children-for-bath-on-wooden-bakground-close-up.webp?b=1&s=170667a&w=0&k=20&c=Zsrhv2BInxdUvtgXg8PFo6ZxRbc5GZd5A4G-8F_3zfk=";

  return (
    <Link
      to={`/shop/product/category/${items.category}`}
      className="mx-2 md:mx-3"
    >
      <div className="w-32 relative overflow-hidden  object-cover hover:scale-110 hover:delay-100  bg-slate-200 rounded-xl cursor-pointer">
        <img
          src={items.image}
          alt=""
          className="object-cover overflow-hidden h-36 md:h-40"
        />
        <h1 className="text-sm absolute bottom-1 bg-slate-400 text-white font-bold px-2 rounded-xl hover:text-white hover:bg-blue-400">
          {items.category}
        </h1>
      </div>
    </Link>
  );
};

export default Category;
