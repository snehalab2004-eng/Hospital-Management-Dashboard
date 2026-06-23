# Hospital Management Dashboard

A comprehensive, production-ready Hospital Management Dashboard built with React 19, TypeScript, Tailwind CSS, and Bolt Database.

## Features

### Core Modules

1. **Authentication**
   - Login / Register / Forgot Password
   - Role-based access (Admin, Doctor, Receptionist)
   - Remember Me functionality
   - Form validation with React Hook Form

2. **Dashboard**
   - Welcome section with date display
   - Stats cards (Patients, Doctors, Appointments, Beds)
   - Revenue overview with charts
   - Patient trend analysis
   - Appointment statistics
   - Recent activities feed
   - Notifications

3. **Patient Management**
   - Patient list with search and filters
   - Add / Edit / Delete patients
   - Patient profile with medical history
   - Filter by age, gender, department, status

4. **Doctor Management**
   - Doctor directory with specializations
   - Add / Edit / Delete doctors
   - Doctor profiles with schedules
   - Availability status tracking

5. **Appointment Management**
   - Book appointments
   - View upcoming appointments
   - Cancel / Complete appointments
   - Filter by date, doctor, department, status

6. **Departments**
   - 6 departments: Cardiology, Neurology, Orthopedics, Pediatrics, General Medicine, Emergency
   - Doctor assignments
   - Bed occupancy tracking
   - Department statistics

7. **Billing**
   - Invoice generation
   - Payment tracking
   - Revenue cards
   - Payment status management

8. **Reports & Analytics**
   - Daily/Monthly patient charts
   - Revenue trends
   - Department-wise statistics
   - Bed occupancy visualization

9. **User Profile & Settings**
   - Edit profile
   - Change password
   - Notification preferences
   - Dark/Light mode
   - Language selector (UI)

## Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React 19, TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Routing | React Router v6 |
| Forms | React Hook Form |
| Charts | Recharts |
| Icons | Lucide React |
| Backend | Bolt Database (PostgreSQL + Auth) |
| Date Handling | date-fns |

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Bolt Database account

### Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables in `.env`
4. Run Bolt Database migrations
5. Start dev server: `npm run dev`
