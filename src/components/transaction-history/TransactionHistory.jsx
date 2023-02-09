import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.header}>
        <tr>
          <th className={css.headerTitle}>Type</th>
          <th className={css.headerTitle}>Amount</th>
          <th className={css.headerTitle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id} className={css.transaction}>
              <td className={css.value}>{item.type}</td>
              <td className={css.value}>{item.amount}</td>
              <td className={css.value}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
