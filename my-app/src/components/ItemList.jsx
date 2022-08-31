import Item from "./Item";
import { useEffect, useState } from "react";
import { Data } from "../components/utils/Data";
import GetProducts from "../utils/GetProducts";

const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    GetProducts(Data)
      .then((result) => setProducts(result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {products.map((item) => (
        <div key={item.id} className="col">
          <Item
            title={item.title}
            picureURL={item.picureURL}
            price={item.price}
            stock={item.stock}
          />
        </div>
      ))}
    </>
  );
};

export default ItemList;