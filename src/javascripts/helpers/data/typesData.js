import axios from 'axios';

// adds the property 'categoryName' to the 'types' object array and returns the new array
const addTypeCategory = categoryData => new Promise((resolve, reject) => {
  axios.get('../db/types.json')
    .then((resp) => {
      const { types } = resp.data;
      const typesWithCategories = types.map((type) => {
        const newType = type;
        const matchingCategory = categoryData.filter(x => x.id === type.category);
        const categoryName = matchingCategory[0].name;
        newType.categoryName = categoryName;
        return newType;
      });
      // typesWithCategoryFireworks = types.filter(type => type.category === categoryData[0].id);
      // const typesWithCategoryDemo = types.filter(type => type.category === categoryData[1].id);
      // typesWithCategoryFireworks.forEach((currentType) => {
      //   currentType.categoryName = categoryData[0].name;
      // });
      // console.error(typesWithCategoryFireworks);
      // typesWithCategoryDemo.categoryName = categoryData[1].name;
      // const typesWithCategories = typesWithCategoryFireworks.concat(typesWithCategoryDemo);
      resolve(typesWithCategories);
    })
    .catch(err => reject(err));
});


export default { addTypeCategory };
