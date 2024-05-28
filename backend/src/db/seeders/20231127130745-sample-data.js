const db = require('../models');
const Users = db.users;

const Brands = db.brands;

const Categories = db.categories;

const Products = db.products;

const Subcategories = db.subcategories;

const BrandsData = [
  {
    name: 'Apple',

    description: 'Innovative tech products',
  },

  {
    name: 'Nike',

    description: 'Sportswear and equipment',
  },

  {
    name: 'Samsung',

    description: 'Electronics and appliances',
  },

  {
    name: 'Adidas',

    description: 'Sportswear and accessories',
  },
];

const CategoriesData = [
  {
    name: 'Electronics',

    description: 'Devices and gadgets',
  },

  {
    name: 'Clothing',

    description: 'Apparel and accessories',
  },

  {
    name: 'Home & Kitchen',

    description: 'Household items and appliances',
  },

  {
    name: 'Books',

    description: 'Printed and digital books',
  },
];

const ProductsData = [
  {
    name: 'iPhone 13',

    description: 'Latest Apple smartphone',

    price: 999.99,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Galaxy S21',

    description: 'Latest Samsung smartphone',

    price: 799.99,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'MacBook Pro',

    description: 'High-performance laptop from Apple',

    price: 1299.99,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Air Max 270',

    description: 'Popular Nike running shoes',

    price: 150,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const SubcategoriesData = [
  {
    name: 'Smartphones',

    description: 'Mobile phones and accessories',

    // type code here for "relation_one" field
  },

  {
    name: 'Laptops',

    description: 'Portable computers and accessories',

    // type code here for "relation_one" field
  },

  {
    name: "Men's Clothing",

    description: 'Apparel for men',

    // type code here for "relation_one" field
  },

  {
    name: "Women's Clothing",

    description: 'Apparel for women',

    // type code here for "relation_one" field
  },
];

// Similar logic for "relation_many"

async function associateProductWithBrand() {
  const relatedBrand0 = await Brands.findOne({
    offset: Math.floor(Math.random() * (await Brands.count())),
  });
  const Product0 = await Products.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Product0?.setBrand) {
    await Product0.setBrand(relatedBrand0);
  }

  const relatedBrand1 = await Brands.findOne({
    offset: Math.floor(Math.random() * (await Brands.count())),
  });
  const Product1 = await Products.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Product1?.setBrand) {
    await Product1.setBrand(relatedBrand1);
  }

  const relatedBrand2 = await Brands.findOne({
    offset: Math.floor(Math.random() * (await Brands.count())),
  });
  const Product2 = await Products.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Product2?.setBrand) {
    await Product2.setBrand(relatedBrand2);
  }

  const relatedBrand3 = await Brands.findOne({
    offset: Math.floor(Math.random() * (await Brands.count())),
  });
  const Product3 = await Products.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Product3?.setBrand) {
    await Product3.setBrand(relatedBrand3);
  }
}

async function associateProductWithSubcategory() {
  const relatedSubcategory0 = await Subcategories.findOne({
    offset: Math.floor(Math.random() * (await Subcategories.count())),
  });
  const Product0 = await Products.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Product0?.setSubcategory) {
    await Product0.setSubcategory(relatedSubcategory0);
  }

  const relatedSubcategory1 = await Subcategories.findOne({
    offset: Math.floor(Math.random() * (await Subcategories.count())),
  });
  const Product1 = await Products.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Product1?.setSubcategory) {
    await Product1.setSubcategory(relatedSubcategory1);
  }

  const relatedSubcategory2 = await Subcategories.findOne({
    offset: Math.floor(Math.random() * (await Subcategories.count())),
  });
  const Product2 = await Products.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Product2?.setSubcategory) {
    await Product2.setSubcategory(relatedSubcategory2);
  }

  const relatedSubcategory3 = await Subcategories.findOne({
    offset: Math.floor(Math.random() * (await Subcategories.count())),
  });
  const Product3 = await Products.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Product3?.setSubcategory) {
    await Product3.setSubcategory(relatedSubcategory3);
  }
}

async function associateSubcategoryWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Subcategory0 = await Subcategories.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Subcategory0?.setCategory) {
    await Subcategory0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Subcategory1 = await Subcategories.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Subcategory1?.setCategory) {
    await Subcategory1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Subcategory2 = await Subcategories.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Subcategory2?.setCategory) {
    await Subcategory2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Subcategory3 = await Subcategories.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Subcategory3?.setCategory) {
    await Subcategory3.setCategory(relatedCategory3);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Brands.bulkCreate(BrandsData);

    await Categories.bulkCreate(CategoriesData);

    await Products.bulkCreate(ProductsData);

    await Subcategories.bulkCreate(SubcategoriesData);

    await Promise.all([
      // Similar logic for "relation_many"

      await associateProductWithBrand(),

      await associateProductWithSubcategory(),

      await associateSubcategoryWithCategory(),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('brands', null, {});

    await queryInterface.bulkDelete('categories', null, {});

    await queryInterface.bulkDelete('products', null, {});

    await queryInterface.bulkDelete('subcategories', null, {});
  },
};
