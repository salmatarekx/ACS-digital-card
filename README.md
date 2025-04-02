# ACS-digital-card
# Digital Business Card Generator

A modern web application that allows users to create and manage digital business cards with QR codes. Built with Angular for the frontend and Node.js/Express/MongoDB for the backend.

## Features

### User Authentication
- Secure user registration and login system
- JWT-based authentication
- Protected routes with authentication guards
- Form validation for login and registration

### Digital Card Management
- Create multiple digital business cards
- Store professional information including:
  - Full name
  - Professional title
  - Company name
  - Email address
  - Phone number
  - Website URL
- View all your cards in a responsive grid layout
- Delete cards when no longer needed

### QR Code Generation
- Automatic QR code generation for each card
- QR codes contain all card information
- Download QR codes as PNG files
- Hover effects on QR codes for easy download

### Modern UI/UX
- Responsive design that works on all devices
- Beautiful gradient backgrounds
- Smooth animations and transitions
- Form validation with error messages
- Loading states for better user feedback
- Clean and intuitive interface

## Tech Stack

### Frontend
- Angular 15+
- TypeScript
- Reactive Forms
- SCSS for styling
- Angular Material (optional)

### Backend
- Node.js
- Express.js
- MongoDB
- JWT for authentication
- QR Code generation

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Angular CLI
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/digital-business-card.git
cd digital-business-card
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. Create a `.env` file in the backend directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000
```

## Running the Application

1. Start both frontend and backend servers using the provided script:
```bash
chmod +x start-dev.sh
./start-dev.sh
```

Or start them separately:

2. Start the backend server:
```bash
cd backend
npm run dev
```

3. Start the frontend server:
```bash
cd frontend
ng serve
```

The application will be available at:
- Frontend: http://localhost:4200
- Backend API: http://localhost:3000

## API Endpoints

### Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user
- GET /api/auth/me - Get current user profile

### Cards
- GET /api/cards - Get all cards for the current user
- POST /api/cards - Create a new card
- DELETE /api/cards/:id - Delete a card
- GET /api/cards/:id/qr - Generate QR code for a card

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Angular](https://angular.io/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [QR Code Generator](https://www.npmjs.com/package/qrcode)
