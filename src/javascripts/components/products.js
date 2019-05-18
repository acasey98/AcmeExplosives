import productsData from '../helpers/data/productsData';
import typesData from '../helpers/data/typesData';
import categoriesData from '../helpers/data/categoriesData';
import util from '../helpers/util';

const writeProducts = (products) /* should accept 'finalProductsArray' from initProducts */ => {
  let domString = '';
  products.forEach((product) => {
    domString += '<div class="col-3">';
    domString += `<div id='${product.id}' class="card p-2">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${product.name}</h5>`;
    domString += `<h5 class="card-title">Category: ${product.categoryName}</h5>`;
    domString += `<h5 class="card-title">Type: ${product.typeName}</h5>`;
    domString += `<h5 class="card-title">${product.description}</h5>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('product-cards', domString);
};

const initProducts = () => {
  categoriesData.getCategories()
    .then(resp => typesData.addTypeCategory(resp.data.categories))
  /* resp.data.categories is categoryData parameter for typesData.addTypeCategory */
    .then(resp => productsData.addProductTypeNameAndCategoryName(resp))
    .then(resp => writeProducts(resp))
    .catch(err => console.error('error from initProducts requests', err));
};

export default { initProducts };
