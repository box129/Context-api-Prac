# 🧾 Multi-Step Form (React + TypeScript + Context API)

A simple multi-step user registration form built with **React**, **TypeScript**, and the **Context API**.  
The project demonstrates how to manage global form state, handle input validation, and navigate between form steps without external state management libraries.

This project was created to practice:
- Context API for shared global state
- TypeScript generics and type safety
- Enums for form step management


## 🧰 Tech Stack
- React (with Hooks)
- TypeScript
- Context API
- Vite (or CRA, depending on what you used)
- CSS / Tailwind (if applicable)


## 🚀 Features
- Three-step registration flow:
  - Step 1: Personal Info
  - Step 2: Account Info
  - Step 3: Summary and Submit
- Global form state management using Context API
- Step tracking using TypeScript Enums
- Type-safe form updates with generics
- Simple field validation


## 📁 Folder Structure
src/
│
├── context/
│   └── FormContext.tsx
├── pages/
│   ├── step1.tsx
│   ├── step2.tsx
│   └── step3.tsx
├── typesAndHooks/
│   └── FormTypesAndHooks.ts
├── App.tsx
└── main.tsx


## ⚙️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/multistep-form.git


cd '.\context api prac\'

npm install

npm run dev


---

### 💡 7. Learning Goals
This section makes your project *portfolio-friendly*.

```markdown
## 💡 What I Learned
- How to use the Context API for global form management
- How to define and use Enums in TypeScript
- How to pass typed data between React components
- How to handle multi-step navigation in React


## 🌟 Future Improvements
- Add persistent form data with localStorage
- Integrate a progress bar or step indicator
- Include custom input validation
- Connect to a backend API for actual registration



## 🧑‍💻 Author
**Seun Olarewaju**

- Portfolio: [your-portfolio-link](#)
- Twitter: [@your-handle](#)
- LinkedIn: [Your Name](#)
