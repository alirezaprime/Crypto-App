import { RotatingLines } from "react-loader-spinner";

import chartUp from "../../assest/chart-up.svg";
import chartDown from "../../assest/chart-down.svg";

import styles from "./TableCoin.module.css";

function TableCoin({ coins, isLoading, currency }) {
  console.log(coins);
  return (
    <div className={styles.container}>
      {isLoading ? (
        <RotatingLines strokeColor="#3874ff" strokeWidth="2" />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coine</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow coin={coin} key={coin.id} currency={currency} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoin;

const TableRow = ({
  coin: {
    image,
    name,
    symbol,
    current_price,
    price_change_percentage_24h: price_change,
  },
  currency,
}) => {
  return (
    <tr>
      <td>
        <div className={styles.symbol}>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>
        {currency === "usd" ? "$" : ""}
        {/* <span>{currency === "usd" ? "$" : ""}</span> */}
        {/* <span>{currency}</span> */}
        {current_price.toLocaleString()}
      </td>
      <td className={price_change > 0 ? styles.success : styles.error}>
        {price_change.toFixed(2)}%
      </td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} alt={name} />
      </td>
    </tr>
  );
};
