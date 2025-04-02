import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardService, Card } from '../../services/card.service';

@Component({
  selector: 'app-digital-card',
  templateUrl: './digital-card.component.html',
  styleUrls: ['./digital-card.component.css']
})
export class DigitalCardComponent implements OnInit {
  cardForm: FormGroup;
  cards: Card[] = [];
  isLoading: boolean = false;
  error: string = '';
  selectedCard: Card | null = null;

  constructor(
    private fb: FormBuilder,
    private cardService: CardService
  ) {
    this.cardForm = this.fb.group({
      name: ['', [Validators.required]],
      title: [''],
      company: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      website: ['']
    });
  }

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(): void {
    this.isLoading = true;
    this.cardService.getCards().subscribe({
      next: (cards) => {
        this.cards = cards;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load cards';
        this.isLoading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.cardForm.valid) {
      this.isLoading = true;
      this.error = '';

      this.cardService.createCard(this.cardForm.value).subscribe({
        next: (card) => {
          this.cards.push(card);
          this.cardForm.reset();
          this.isLoading = false;
        },
        error: (err) => {
          this.error = 'Failed to create card';
          this.isLoading = false;
        }
      });
    }
  }

  deleteCard(id: string): void {
    if (confirm('Are you sure you want to delete this card?')) {
      this.isLoading = true;
      this.cardService.deleteCard(id).subscribe({
        next: () => {
          this.cards = this.cards.filter(card => card._id !== id);
          this.isLoading = false;
        },
        error: (err) => {
          this.error = 'Failed to delete card';
          this.isLoading = false;
        }
      });
    }
  }

  selectCard(card: Card): void {
    this.selectedCard = card;
  }

  downloadQRCode(qrCode: string, name: string): void {
    const link = document.createElement('a');
    link.download = `${name.toLowerCase().replace(/\s+/g, '-')}-qr.png`;
    link.href = qrCode;
    link.click();
  }
} 