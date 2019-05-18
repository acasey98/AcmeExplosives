import axios from 'axios';

const addProductTypeNameAndCategoryName = newTypes => new Promise((resolve, reject) => {
  axios.get('../db/products.json')
    .then((resp) => {
      const { products } = resp.data;
      const productsWithCatAndType = products.map((product) => {
        const productVal = Object.values(product);
        const currentProduct = productVal[0];
        const newProduct = currentProduct;
        // const RightArray = Objects.value(resp.data.products[0])
        const matchingType = newTypes.filter(x => x.id === currentProduct.type);
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
