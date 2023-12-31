import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";

const DetailPage = () => {
  let { id } = useParams();

  const { data } = useFetch(`https://fakestoreapi.com/products/${id}`);
  console.log(data);
  const { title, price, description, category, image, rating } = data;
  const [counterStock, setCounterStock] = useState(0);
  const [isFav, setIsFav] = useState(false);

  const handleCounterUp = () => {
    setCounterStock(counterStock + 1);
  };

  const handleCounterDown = () => {
    setCounterStock(counterStock > 0 ? counterStock - 1 : 0);
  };

  const handleIsFav = () => {
    setIsFav(!isFav);
  };

  return (
    <main className="h-[1400px]">
      <div className="flex flex-col items-center m-10 text-center relative">
        <img className="w-72" src={image} alt={title} />
        <div className="flex flex-col h-screen items-center m-10">
          <h1 className="font-Montserrat text-3xl hover:bg-black hover:text-white mt-20">
            {title}
          </h1>

          <span className="my-10 text-3xl font-Montserrat text-sky-500">{`$ ${price}`}</span>
          <p className="my-20 font-Montserrat text-lg">{description}</p>
          <div className="flex justify-around w-screen">
            <label className="font-Montserrat" htmlFor="quantity">
              Select Quantity
            </label>
            <input
              className="w-20 font-Montserrat"
              type="number"
              name="stock"
              id="stock"
              value={counterStock}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              onClick={handleCounterUp}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              onClick={handleCounterDown}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          <div className="flex justify-around items-center w-screen my-20">
            <label className="font-Montserrat" htmlFor="size">
              Select Size
            </label>
            {["women's clothing", "men's clothing"].includes(category) && (
              <select
                className="h-10 w-20 font-Montserrat"
                name="talle"
                id="talle"
              >
                <option
                  className="focus:bg-sky-600 text-xl font-Montserrat "
                  value="SM"
                >
                  SM
                </option>
                <option
                  className="focus:bg-sky-600 text-xl font-Montserrat"
                  value="M"
                >
                  M
                </option>
                <option
                  className="focus:bg-sky-600 text-xl font-Montserrat"
                  value="L"
                >
                  L
                </option>
                <option
                  className="focus:bg-sky-600 text-xl font-Montserrat"
                  value="XL"
                >
                  XL
                </option>
                <option
                  className="focus:bg-sky-600 text-xl font-Montserrat"
                  value="XXL"
                >
                  XXL
                </option>
              </select>
            )}
          </div>
          <div className="flex items-center justify-around w-full">
            <button className="bg-sky-500 text-white w-40 my-6 h-10 rounded-xl font-Montserrat hover:bg-slate-300 ">
              Add to Cart
            </button>

            <button type="button" onClick={handleIsFav}>
              {isFav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10 text-pink-500"
                >
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailPage;

// useEffect(() => {
//   fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
//     res.json().then((data) => {
//       setData(data);
//       console.log(data);
//     })
//   );
// }, [id]);
