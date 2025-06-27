# 🌐 Company Website — React Project

A modern company website built with React. This project showcases a fictional business with a clear services offering, employee profiles, and standard web structure (header, hero section, offer, team, and footer).

![Screenshot](screenshot.png) <!-- Replace with actual screenshot if needed -->

🌍 Live Version
👉 [View the website on Netlify](https://company-website-react.netlify.app/)  

---

## 📦 Tech Stack

- **React**
- **CSS (modular and responsive)**
- **JavaScript (component-based structure)**
- **Mobile-first approach with media queries**

---

## 📁 Project Structure

src/
│
├── components/
│ ├── Header/
│ ├── HeroSection/
│ ├── Footer/
│ ├── EmployeesSection/
│ │ ├── EmployeesMain.jsx
│ │ ├── EmployeeCard.jsx
│ │ └── ...
│ └── OffersSection/
│ ├── OfferMain.jsx
│ ├── OfferCard.jsx
│ └── ...
│
├── data/
│ ├── employeeData.js
│ └── offerData.js
│
├── App.jsx
└── App.css


---

## ✨ Features

- 🔁 Dynamic rendering of offers and employee cards using external `.js` data files
- 🆕 "New" badge for highlighting new services
- 🎨 Clean, modern, responsive design
- 🧪 Ready-to-use unit tests (see below)

---

## 🧪 Testing

This project includes unit tests using `Jest` and `React Testing Library`.  
Example test for `EmployeeCard`:

```jsx
import { render, screen } from '@testing-library/react';
import EmployeeCard from '../components/EmployeesSection/EmployeeCard';

test('Displays employee information', () => {
  render(<EmployeeCard name="Anna Kowalska" role="Project Manager" description="Manages projects." />);
  expect(screen.getByText('Anna Kowalska')).toBeInTheDocument();
  expect(screen.getByText('Project Manager')).toBeInTheDocument();
});


To run tests:
npm test

🧑‍💻 Author
👤 Paweł Lubrycht
📧 Contact: plubrycht@gmail.com