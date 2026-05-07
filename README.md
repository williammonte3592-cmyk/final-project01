# 🎓 Frost College Website

A multi-page static website for Frost College, showcasing programs, courses, and contact information.

---

## 📁 Project Structure

```
frost-college/
├── home.html          # Homepage / landing page
├── programs.html      # Programs and courses page
├── contact.html       # Contact page
├── style.css          # Global stylesheet
├── script.js          # JavaScript functionality
├── logo.svg           # College logo
├── about.jpg          # About section image
└── README.md          # Project documentation
```

---

## 📄 Pages

| Page | File | Description |
|------|------|-------------|
| Home | `home.html` | Landing page with hero section |
| Programs | `programs.html` | Courses and programs offered |
| Contact | `contact.html` | Contact form and information |

---

## ✨ Features

- **Responsive Navigation** — Links to all pages with active page highlighting
- **Course Listings** — Cards for Computer Science, Business Administration, and Law
- **Programs Section** — Three schools: Law & Governance, Business & Economics, Computing & Technology
- **Comment / Enquiry Form** — Validated form with name, email, and message fields
- **Scroll Animations** — Fade-in effects on course and program cards as they enter the viewport
- **Footer** — Copyright information

---

## 🛠️ Technologies Used

- **HTML5** — Page structure and content
- **CSS3** — Styling and layout (`style.css`)
- **Vanilla JavaScript** — Form validation and interactivity (`script.js`)

---

## 🚀 Getting Started

No installation or build tools are required. This is a plain static website.

### Run Locally

1. Clone or download the project files
2. Make sure all files are in the **same folder**
3. Open `home.html` in your browser

```bash
# Option 1: Double-click home.html in your file explorer

# Option 2: Use VS Code Live Server extension
# Right-click home.html → "Open with Live Server"
```

---

## 📋 Form Validation

The comment form on the Programs page validates the following before submission:

- ✅ Name field must not be empty
- ✅ Email must be a valid format (e.g. `user@example.com`)
- ✅ Comment/message must not be empty

A success or error message is displayed for 4 seconds after submission.

---

## 🏫 Schools Offered

### School of Law and Governance
- Bachelor of Laws
- Bachelor of Science in International Relations
- Master of Laws

### School of Business and Economics
- Bachelor of Business Administration
- Bachelor of Science in Economics
- Master of Business Administration

### School of Computing and Technology
- Bachelor of Science in Software Engineering
- Bachelor of Science in Cybersecurity
- Bachelor of Science in Computer Engineering

---

## 🔗 Linking Files

Ensure the following links are present in every HTML file:

```html
<!-- In <head> -->
<link rel="stylesheet" href="style.css">

<!-- Before </body> -->
<script src="script.js"></script>
```

---

## 📌 Known Issues / To Do

- [ ] Add a working backend for form submissions
- [ ] Make the layout fully mobile responsive
- [ ] Add a gallery or campus photos section
- [ ] Add individual program detail pages
- [ ] Implement a hamburger menu for mobile navigation

---

## 📝 License

© 2026 Frost College. All rights reserved.
