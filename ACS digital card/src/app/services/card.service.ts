import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export interface Card {
  _id: string;
  name: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  qrCode: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private apiUrl = 'http://localhost:3000/api/cards';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  createCard(cardData: Omit<Card, '_id' | 'qrCode' | 'createdAt' | 'updatedAt'>): Observable<Card> {
    return this.http.post<Card>(this.apiUrl, cardData, { headers: this.getHeaders() });
  }

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  getCard(id: string): Observable<Card> {
    return this.http.get<Card>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  updateCard(id: string, cardData: Partial<Card>): Observable<Card> {
    return this.http.patch<Card>(`${this.apiUrl}/${id}`, cardData, { headers: this.getHeaders() });
  }

  deleteCard(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
} 