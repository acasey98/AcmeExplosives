import axios from 'axios';

const getCategories = () => axios.get('../db/categories.json'); // axios navigates from index.html

export default { getCategories };
