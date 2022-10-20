var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let products =[
    {
    name:"CARIBBEAN",
    model:" Dark Blue Classic",
    amount:"₹11,090.00",
    image:"https://india.ray-ban.com/pub/media/catalog/product/cache/31cc5ad256d13496e740487cbcf523ed/8/0/8056597242745_1.jpg"
  },
  {
    name:"RB4125M SCUDERIA FERRARI",
    model:"Green Classic G-15",
    amount:"₹₹11,360.00",
    image:"https://india.ray-ban.com/pub/media/catalog/product/cache/31cc5ad256d13496e740487cbcf523ed/8/0/8056597216531_1_1.jpg"
  },
  {
    name:"AVIATOR CLASSIC",
    model:" Y-78 blue",
    amount:"₹14,690.00",
    image:"https://india.ray-ban.com/pub/media/catalog/product/cache/31cc5ad256d13496e740487cbcf523ed/0/r/0rb30259196s258_1.jpg"
  },
  {
    name:"RB3449",
    model:"Copper Mirror",
    amount:"₹11,790.00",
    image:"https://india.ray-ban.com/pub/media/catalog/product/cache/31cc5ad256d13496e740487cbcf523ed/8/0/8053672508093_1_4.jpg"
  },
  ]
  
if(req.session.login){
  res.render('index', { products});
}else{
  res.redirect("/")
}
});

module.exports = router;
