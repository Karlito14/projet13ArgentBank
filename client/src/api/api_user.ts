import { FormInputs } from '../types/types';

class ApiUser {
  url: string;

  constructor(url: string) {
    this.url = url;
  }
  
  async login(data: FormInputs) {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response
  }
}

export const user = new ApiUser('http://localhost:3001/api/v1/user/login');
