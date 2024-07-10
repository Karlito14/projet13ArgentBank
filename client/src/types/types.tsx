export interface Feature {
  image: string;
  title: string;
  text: string;
}

export interface FormInputs {
  email: string;
  password: string;
  remember?: boolean;
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
  id: string;
}
