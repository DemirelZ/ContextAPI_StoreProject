import { useContext } from "react";
import { BasketContext } from "../context/basketContexts";

const Checkout = () => {
  const  context = useContext(BasketContext);

  //  console.log(context);

  const sum = context.basket.reduce((sum,a)=> sum+(a.price*a.amount),0)
  const formattedSum = sum.toFixed(2);

  return (
    <div className="text-center my-5">
    {/* septte ürün yoksa */}
    {context.basket.length === 0 && (
      <h3 className="text-center my-5">
        Sepete ürün ekleyiniz...
      </h3>
    )}

    {/* sepette ürün varsa */}
    {context.basket.length > 0 && <h3 className="border py-3"> Toplam {formattedSum} $ </h3>}

    {context.basket?.map((i) => (
      <div className="d-flex justify-content-between align-items-center p-3 gap-3">
        <img
          className="object-fit-contain rounded"
          src={i.image}
          height={100}
        />
        <h4>{i.title.slice(0, 15) + '...'}</h4>
        <h3>${(i.price * i.amount).toFixed(2)}</h3>
        <h3>Miktar: {i.amount}</h3>

        <div className="d-flex gap-1">
          <button onClick={() => context.addToBasket(i)}>+</button>
          <button onClick={() => context.removeFromBasket(i.id)}>
            -
          </button>
        </div>
      </div>
    ))}
  </div>
  );
};

export default Checkout;
