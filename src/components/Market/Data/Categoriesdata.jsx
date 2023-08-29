import { apiPrivate as api } from "../../../utils/api";

const data = [
  {
    id: 1,
    title: "Phone & Tablets",
    image:
      "https://images.unsplash.com/photo-1625467096769-fefb5ebdb54c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBob25lJTIwYW5kJTIwdGFibGV0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 2,
    title: "Appliances",
    image:
      "https://images.unsplash.com/photo-1626143508000-4b5904e5e84a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFwcGxpYW5jZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 3,
    title: "Electronics",
    image:
      "https://media.istockphoto.com/id/1440854098/photo/scandinavian-style-modern-living-room-with-entertainment-center.webp?b=1&s=170667a&w=0&k=20&c=H3FbGTnaqUYjA-CE_TPf-Mtvsa04e5VhlSklNEDbwGg=",
  },
  {
    id: 4,
    title: "Supermarket",
    image:
      "https://images.unsplash.com/photo-1506617420156-8e4536971650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN1cGVybWFya2V0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 5,
    title: "Health & Beauty",
    image:
      "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYwfHxoZWFsdGglMjBhbmQlMjBiZWF1dHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 6,
    title: "Home & Office",
    image:
      "https://images.unsplash.com/photo-1516315720917-231ef9acce48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGhvbWUlMjBhbmQlMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 7,
    title: "Power",
    image:
      "https://media.istockphoto.com/id/1198444825/photo/charging-of-smart-phone-from-power-bank.webp?b=1&s=170667a&w=0&k=20&c=jkV-ICWcWo-WUlzc7mrLnyGwL41aQBGmxi6g9ohhM1o=",
  },
  {
    id: 8,
    title: "Computing",
    image:
      "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 9,
    title: "Ladies Fashion",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWVuJ3MlMjBmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 10,
    title: "Men's Fashion",
    image:
      "https://images.unsplash.com/photo-1543322748-33df6d3db806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVuJ3MlMjBmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 11,
    title: "Gaming",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FtaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 12,
    title: "Baby Products",
    image:
      "https://media.istockphoto.com/id/625379326/photo/organic-cosmetic-children-for-bath-on-wooden-bakground-close-up.webp?b=1&s=170667a&w=0&k=20&c=Zsrhv2BInxdUvtgXg8PFo6ZxRbc5GZd5A4G-8F_3zfk=",
  },
  {
    id: 13,
    title: "Books",
    image:
      "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2tzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
  },
];

export default data;

export const Categories = async () => {
  const response = await api.get("/category");
  const result = await response.data;

  return result;
};
