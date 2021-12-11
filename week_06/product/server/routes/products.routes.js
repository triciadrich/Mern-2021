const ProductController = require('../controllers/product.controller');

module.exports = function(app){
  app.get("/api/products", ProductController.findAllProducts);
  app.post("/api/product", ProductController.createProduct);
  app.get("/api/products/:id", ProductController.findOneProduct);
  app.put("/api/products/edit/:id", ProductController.updateProduct)
}