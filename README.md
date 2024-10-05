# eatweb mock data backend

## endpoints:

### products
- GET /products (get products by name, category, offset, limit)
- GET /products/:id (get one product)
- GET /products/company/:companyId (get products by company id products, offset, limit)

### reviews
- GET /company/:id/reviews (get company reviews, offset, limit)

### company
- GET /company/:id (get company info)

### user profile
- GET /user/me (get user info)
- GET /user/me/favorites (get user favorite products, offset, limit)
- GET /user/me/cart (get user products in cart)
- GET /user/me/purchased (get user purchased products)
