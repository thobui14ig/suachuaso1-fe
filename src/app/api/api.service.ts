import { Injectable } from '@angular/core';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
        baseURL: 'https://chungta.vanhanhhethong.com/api',
        timeout: 10000,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
  }

  get<T>(url: string): Promise<AxiosResponse<T>> {
    return this.instance.get<T>(url);
  }

  post<T>(url: string, data?: any): Promise<AxiosResponse<T>> {
    return this.instance.post<T>(url, data);
  }

  delete<T>(url: string): Promise<AxiosResponse<T>> {
    return this.instance.delete<T>(url);
  }

  patch<T>(url: string, data?: any): Promise<AxiosResponse<T>> {
    return this.instance.patch<T>(url, data);
  }

  put<T>(url: string, data?: any): Promise<AxiosResponse<T>> {
    return this.instance.put<T>(url, data);
  }
}
