export interface Feature {
  image: string;
  title: string;
  text: string;
}

export interface FormInputsSignin {
  email: string;
  password: string;
  remember?: boolean;
  generic?: string;
}

export interface FormInputsSignup {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  generic?: string;
}

export interface TokenState {
  value: string;
}

export interface UserState {
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
  id?: string;
}

export interface UpdateUser {
  firstName: string;
  lastName: string;
}

export interface AccountInterface {
  account: string;
  amount: number;
  transactions: number;
}
