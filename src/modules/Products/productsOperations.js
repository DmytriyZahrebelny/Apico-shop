import * as productsActions from './productsActions';
import * as Api from '../../api/Api';

export const fetchProducts = () => async (dispatch) => {
  try {
    const res = await Api.AdminProducts.fetchProducts();

    dispatch(productsActions.fetchProducts(res));
  } catch(err) {
    console.log(err);
  }
}