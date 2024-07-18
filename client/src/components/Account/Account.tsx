import { AccountInterface } from '../../types/types';
import style from './account.module.scss';

export const Account = (props: { account: Readonly<AccountInterface> }) => {
  return (
    <div className={style.container}>
      <div className={style.container__content}>
        <h3 className={style.container__content__title}>{props.account.account} (x{props.account.transactions})</h3>
        <p className={style.container__content__amount}>${props.account.amount}</p>
        <p className={style.container__content__balance}>Available Balance</p>
      </div>
      <div className={style.container__action}>
        <button className={style.container__action__button}>View Transactions</button>
      </div>
    </div>
  );
};
