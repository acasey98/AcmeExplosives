import axios from 'axios';

const addProductTypeNameAndCategoryName = newTypes => new Promise((resolve, reject) => {
  axios.get('../db/products.json')
    .then((resp) => {
      const { products } = resp.data;
      const productsWithCatAndType = products.map((product) => {
        const newProduct = product;
        console.error(product);
        const matchingType = newTypes.filter(x => x.id === product.type);
        const typeName = matchingType[0].name;
        const catName = matchingType[0].categoryName;
        newProduct.categoryName = catName;
        newProduct.typeName = typeName;
        return newProduct;
      });
      resolve(productsWithCatAndType);
    })
    .catch(err => reject(err));
});

export default { addProductTypeNameAndCategoryName };
