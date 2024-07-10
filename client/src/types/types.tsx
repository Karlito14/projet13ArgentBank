export interface Feature {
  image: string;
  title: string;
  text: string;
}

export type FormInputs = {
  email: string;
  password: string;
  remember?: boolean;
  generic?: string;
};
