import { FormInputs } from '../types/types';

class ApiUser {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  async login(data: FormInputs) {
    const response = await fetch(`${this.url}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('error login');
    }
  }

  async getUser(token: string) {
    const response = await fetch(`${this.url}/profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('error user');
    }
  }
}

export const userApi = new ApiUser('http://localhost:3001/api/v1/user');
