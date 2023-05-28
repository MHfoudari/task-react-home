import "./App.css";
import image from "./image_1322693248.webp";
import products from "./products";
function App() {
  const productlist = products.map((product) => {});
  return (
    <>
      <h1 className="stylecauseIcan"> Pharmacy </h1>
      <h2 className="stylecauseIcan">
        This is the best pharmacy you'll ever gonna see
      </h2>

      <img src={image} className="imageclass" height="350px" />
      <h1 className="textstyle">{products[0].name} </h1>
      <h1 className="textstyle">{products[0].price}</h1>
      <img src={products[0].pic} className="imageclass" height="300px" />
      <h1 className="textstyle">{products[1].name} </h1>
      <h1 className="textstyle">{products[1].price}</h1>
      <img src={products[1].pic} className="imageclass" />

      {productlist}
    </>
  );
}

export default App;
