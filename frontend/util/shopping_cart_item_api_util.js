export const createCartItem = (cartItem) => {
  return $.ajax({
    method: "POST",
    url: `/api/shopping_cart_items`,
    data: { cartItem },
  });
};

export const fetchCartItems = () => {
  return $.ajax({
    method: "GET",
    url: `/api/shopping_cart_items`
  });
};


export const updateCartItem = (cartItem) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/shopping_cart_items/${cartItem.id}`,
    data: { cartItem },
  });
};

export const deleteCartItem = (cartItemId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/shopping_cart_items/${cartItemId}`,
  });
};
