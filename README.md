# 🎓 Frost College Website

A multi-page static website for Frost College, showcasing programs, courses, and contact information.

---
## Author information

**Name:**  William Monte
**Email:** williammonte3592@gmail.com
**Github:**https://github.com/williammonte3592-cmyk/final-project01


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

- **HTML** — Page structure and content
- **CSS** — Styling and layout (`style.css`)
- **JavaScript** — Form validation and interactivity (`script.js`)

---

## 🚀 Getting Started

No installation or build tools are required. This is a plain static website.

### Run Locally

1. Clone or download the project files
2. Make sure all files are in the **same folder**
3. Open `home.html` in your browser


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

## Contact information

for questions, feedback, or contributions, please reach out:

- **Email:** willliammonte3592@gmail.com
- **Github:** github.com/williammonte3592-cmyk



## 📝 License and copyright

**copyright © 2026 Frost College. All rights reserved.

This project is licenced under the MIT licence. See below for details:

### MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

