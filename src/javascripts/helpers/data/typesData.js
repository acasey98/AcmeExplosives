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
      resolve(typesWithCategories);
    })
    .catch(err => reject(err));
});


export default { addTypeCategory };
