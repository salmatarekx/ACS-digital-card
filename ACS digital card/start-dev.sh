#!/bin/bash

# Start backend server
cd backend
npm install
npm run dev &

# Start frontend server
cd ../frontend
npm install
ng serve --open 