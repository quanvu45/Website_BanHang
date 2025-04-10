const mongoose = require('mongoose');
require('dotenv').config();

const Product = require('./model/Product'); // ← đường dẫn đúng

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log(' MongoDB connected. Seeding products...');

    await Product.deleteMany(); // Xoá hết dữ liệu cũ nếu có

    await Product.insertMany([
      {
        name: 'Classic White T-Shirt',
        description: '100% cotton, regular fit',
        category: 'Men > T-Shirts',
        price: 19.99,
        images: ['https://via.placeholder.com/400x400?text=White+Tee'],
        sizes: ['S', 'M', 'L', 'XL'],
        stock: { S: 10, M: 15, L: 5, XL: 2 },
        rating: 4.5,
        reviews: []
      },
      {
        name: 'Denim Jacket',
        description: 'Stylish slim fit denim',
        category: 'Women > Jackets',
        price: 49.99,
        images: ['https://via.placeholder.com/400x400?text=Denim+Jacket'],
        sizes: ['S', 'M', 'L'],
        stock: { S: 3, M: 8, L: 2 },
        rating: 4.2,
        reviews: []
      },
      {
        name: 'Black Jeans',
        description: 'Stretchable skinny jeans',
        category: 'Unisex > Jeans',
        price: 39.99,
        images: ['https://via.placeholder.com/400x400?text=Black+Jeans'],
        sizes: ['28', '30', '32', '34'],
        stock: { '28': 4, '30': 10, '32': 5, '34': 0 },
        rating: 4.6,
        reviews: []
      }
    ]);

    console.log(' Products seeded successfully!');
    process.exit();
  })
  .catch(err => console.error(' MongoDB error:', err));
