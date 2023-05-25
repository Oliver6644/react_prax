export default function Product() {
   const products = ["Laptop","Phone","Modem","Computer","Laptop"];
   const productList = products.map((product) => (
   <h3 key={product}>{product}</h3>
   ));
   return <div>{productList}</div>
};
