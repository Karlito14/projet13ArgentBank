import { Account } from "../Account/Account";

const ACCOUNTS = [
  {
    account: 'Argent Bank Checking',
    amount: 2082.79,
    transactions: 8349,
  },
  {
    account: 'Argent Bank Savings',
    amount: 10928.42,
    transactions: 8349,
  },
  {
    account: 'Argent Bank Credit Card',
    amount: 184.30,
    transactions: 8349,
  },
];

export const AccountList = () => {
    return ACCOUNTS.map((account, index) => <Account account={account} key={index} />)
};
