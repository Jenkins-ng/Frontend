const data = [
  {
    id: 1,
    catergory: "Phone & Tablets",
    image:
      "https://images.unsplash.com/photo-1625467096769-fefb5ebdb54c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBob25lJTIwYW5kJTIwdGFibGV0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    description: "This is a phone and tablet catergory",
    price: "23,000",
    title: "phones and tablets",
    rating: 5,
  },
  {
    id: 2,
    category: "Appliances",
    image:
      "https://images.unsplash.com/photo-1626143508000-4b5904e5e84a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFwcGxpYW5jZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    description: "This is a phone and tablet catergory",
    price: "23,000",
    title: "phones and tablets",
    rating: 5,
  },
  {
    id: 3,
    category: "Electronics",
    image:
      "https://media.istockphoto.com/id/1440854098/photo/scandinavian-style-modern-living-room-with-entertainment-center.webp?b=1&s=170667a&w=0&k=20&c=H3FbGTnaqUYjA-CE_TPf-Mtvsa04e5VhlSklNEDbwGg=",
    description: "This is a phone and tablet catergory",
    price: "23,000",
    title: "phones and tablets",
    rating: 5,
  },
  {
    id: 4,
    category: "Supermarket",
    image:
      "https://images.unsplash.com/photo-1506617420156-8e4536971650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN1cGVybWFya2V0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    description: "This is a phone and tablet catergory",
    price: "23,000",
    title: "phones and tablets",
    rating: 5,
  },
  {
    id: 5,
    category: "Health & Beauty",
    image:
      "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYwfHxoZWFsdGglMjBhbmQlMjBiZWF1dHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    description: "This is a phone and tablet catergory",
    price: "23,000",
    title: "phones and tablets",
    rating: 5,
  },
  {
    id: 6,
    category: "Home & Office",
    image:
      "https://images.unsplash.com/photo-1516315720917-231ef9acce48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGhvbWUlMjBhbmQlMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    description: "This is a phone and tablet catergory",
    price: "23,000",
    title: "phones and tablets",
    rating: 5,
  },
  {
    id: 7,
    category: "Power",
    image:
      "https://media.istockphoto.com/id/1198444825/photo/charging-of-smart-phone-from-power-bank.webp?b=1&s=170667a&w=0&k=20&c=jkV-ICWcWo-WUlzc7mrLnyGwL41aQBGmxi6g9ohhM1o=",
    description: "This is a phone and tablet catergory",
    price: "23,000",
    title: "phones and tablets",
    rating: 5,
  },
  {
    id: 8,
    category: "Computing",
    image:
      "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    description: "This is a phone and tablet catergory",
    price: "23,000",
    title: "phones and tablets",
    rating: 5,
  },
  {
    id: 9,
    category: "Women's Fashion",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWVuJ3MlMjBmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    description: "This is a phone and tablet catergory",
    price: "23,000",
    title: "phones and tablets",
    rating: 5,
  },
  {
    id: 10,
    category: "Men's Fashion",
    image:
      "https://images.unsplash.com/photo-1543322748-33df6d3db806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVuJ3MlMjBmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    description: "This is a phone and tablet catergory",
    price: "23,000",
    title: "phones and tablets",
    rating: 5,
  },
  {
    id: 11,
    category: "Gaming",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FtaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    description: "This is a phone and tablet catergory",
    price: "23,000",
    title: "phones and tablets",
    rating: 5,
  },
  {
    id: 12,
    category: "Baby Products",
    image:
      "https://media.istockphoto.com/id/625379326/photo/organic-cosmetic-children-for-bath-on-wooden-bakground-close-up.webp?b=1&s=170667a&w=0&k=20&c=Zsrhv2BInxdUvtgXg8PFo6ZxRbc5GZd5A4G-8F_3zfk=",
    description: "This is a phone and tablet catergory",
    price: "23,000",
    title: "phones and tablets",
    rating: 5,
  },
  {
    id: 13,
    category: "Books",
    image:
      "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2tzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    description: "This is a phone and tablet catergory",
    price: "23,000",
    title: "phones and tablets",
    rating: 5,
  },
];

export default data;
