const _products = [
    {
        id: 1,
        title: 'ipad 4 Mini',
        price: 500.01,
        inventory: 2 //限制库存量
    },
    {
        id: 2, 
        title: "H&M T-Shirt White", 
        price: 10.99, 
        inventory: 10
    },
    {
        id: 3, 
        title: "Charli XCX - Sucker CD", 
        price: 19.99, 
        inventory: 5
    }
];
export default {
    getProducts(cb){ //传一个回调函数过来cb
        setTimeout(()=>{
            cb(_products)  //传products数据
        },1000)
    },
    buyProducts(product, cb, errorCb){ //cb是买完之后回调一下给你
        setTimeout(() => {
            (Math.random() > 0.3)?cb() : errorCb()
        }, 1000);
    }
}