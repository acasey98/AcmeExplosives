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
    // domString += `<h5 class="card-title">${}</h5>`;
    // domString += `<button class="btn btn-warning see-pins">${} Pins</button>`;
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
    .then((typesWithCategories) => {
      productsData.addProductTypeNameAndCategoryName(typesWithCategories);
    })
    .then((finalProductsArray) => {
      // console.error(finalProductsArray);
      writeProducts(finalProductsArray);
    })
    .catch(err => console.error('error from initTypes requests', err));
};

export default { initProducts };
