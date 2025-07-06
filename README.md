# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

--------------------------------------------------------------------------------------------------------------------------




 # XMedify – Doctor Appointment Booking App

XMedify is a React-based web application that allows users to search for medical centers across the USA and book appointments. Users can choose a state and city, view hospital listings, and book free center visits by selecting available dates and time slots. All bookings are saved in localStorage for persistence.

## 🔗 Live Demo
[Click here to view the live app](https://xmedifyy-k2m5ivp1m-kanishkas-projects-95e27a37.vercel.app/my-bookings)



## 📸 Screenshots

Search Page :- 
![image](https://github.com/user-attachments/assets/f100bd9b-21e2-44ca-b65b-3c1c18e1f3bd)
![image](https://github.com/user-attachments/assets/ad9f7db6-43e0-4645-8d49-fd1df2dd49e0)
![image](https://github.com/user-attachments/assets/2ae99bc2-ac72-4100-8de3-c14c813cbef0)
![image](https://github.com/user-attachments/assets/1229b448-c680-4961-9a65-126ffc5de036)
![image](https://github.com/user-attachments/assets/31ac057c-f021-480d-ba16-d392f7048e51)
![image](https://github.com/user-attachments/assets/4f8a0030-049d-4dd0-b3db-7572211efede)
![image](https://github.com/user-attachments/assets/d58a19f2-a433-4a2a-a241-ac1da819e67e)
![image](https://github.com/user-attachments/assets/94960d31-c9cf-4a95-ab6d-2ffc5330e4e4)
![image](https://github.com/user-attachments/assets/dc0b4bf3-e805-4cdb-bb09-910ccaca85bb)

Booking Page :-
![image](https://github.com/user-attachments/assets/418c5ecf-5ad8-455b-9ca6-d2eed336478a)

My Bookings :-
![image](https://github.com/user-attachments/assets/0aaa8609-e5d9-4810-ba27-1cff795fff38)



---

## 🛠️ Tech Stack

- **Frontend**: React, HTML, CSS
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Routing**: React Router DOM
- **Carousel**: Swiper.js
- **API**: RESTful endpoints (state/city/hospital data)
- **Storage**: localStorage for data persistence

---

## ✅ Key Features

- 🔍 **Search Medical Centers**: Select a U.S. state and city to view hospital listings.
- 📋 **Listings Page**: View hospital name, address, and rating.
- 🗓️ **Booking Modal**: Choose date (within 7 days) and time slots (morning/afternoon/evening).
- 💾 **Persistent Bookings**: Appointments saved in `localStorage` under the key `bookings`.
- 📆 **My Bookings**: View all previous appointments on `/my-bookings` route.
- 📱 **Responsive Design**: Works seamlessly across devices using Figma-based layout.
- 🧪 **Test Case Ready**: All elements follow strict tag and ID structure to pass test automation.

---

## 🔗 API Endpoints

- Get all states: `https://meddata-backend.onrender.com/states`
- Get cities by state: `https://meddata-backend.onrender.com/cities/:state`
- Get hospitals: `https://meddata-backend.onrender.com/data?state=STATE&city=CITY`



## 📂 Folder Structure
src/
│
├── assets/
├── components/
│     ├── Accordion/
│     │     └── Accordion.jsx
│     ├── AutohideSnackbar/
│     │     └── AutohideSnackbar.jsx
│     ├── BookingModal/
│     │     └── BookingModal.jsx
│     ├── Calendar/
│     │     ├── DaySelector/
│     │     │     ├── DaySelector.jsx
│     │     │     ├── DaySelector.module.css
│     │     │     └── SliderButtons.jsx
│     │     ├── TimeSlotPicker/
│     │     │      └── TimeSlotPicker.jsx
│     │     └──Calendar.jsx
│     ├── Footer/
│     │     ├── Footer.jsx
│     │     └── FooterLink.jsx
│     ├── HeroSlider/
│     │     └── HeroSlider.jsx
│     ├── HospitalCard/
│     │     └── HospitalCard.jsx
│     ├── IconCard/
│     │     └── IconCard.jsx
│     ├── IconLayout/
│     │     └── HomeServices.jsx
│     ├── NavBar/
│     │     ├── NavBar.jsx
│     │     └── NavBar.module.css
│     ├── SearchBar/
│     │     └── SearchBar.jsx
│     ├── SearchHospital/
│     │     └── SearchHospital.jsx
│     └── Sections/
│           ├── Blogs/
│           │     ├── BlogCard.jsx
│           │     └── Blogs.jsx
│           ├── DownlodApp/
│           │     ├── DownlodApp.jsx
│           │     └── SmsForm.jsx
│           ├── FAQs/
│           │     └── FAQs.jsx
│           ├── Offers/
│           │     └── Offers.jsx
│           ├── OurFamilies/
│           │     └── OurFamilies.jsx
│           ├── PatientCaring/
│           │     └── PatientCaring.jsx
│           ├── Specialists/
│           │     ├── SpecialistCard.jsx
│           │     └── Specialists.jsx
│           └── Specialization
│                 └── Specialization.jsx
├── Home/
│     ├── Home.jsx
│     └── Home.module.css
├── MyBookings/
│     └── MyBookings.jsx
├── Search/
│     └── Search.jsx
├── App.js
├── index.css
├── index.js
└── style.css
