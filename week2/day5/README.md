# Day 5: Team Directory App

A responsive React application that allows users to manage a team directory with real-time searching and dynamic member addition.

## Features
- **Live Search:** Filter team members by name or role instantly.
- **Dynamic Add:** Add new members via a form without page refreshes.
- **Responsive Design:** Optimized for Mobile, Tablet, and Desktop using Tailwind CSS.
- **Component Composition:** Built using 5 reusable components.

## React Concepts Used
- **State Management:** `useState` for handling members list and search terms.
- **Props:** Passing data and functions between parent and child components.
- **Lifting State Up:** Managing shared state in the `App.jsx`.
- **Conditional Rendering:** Showing messages when no search results are found.

## Reflection
This week, the hardest concept for me was mastering **Component Composition** and **Lifting State Up**. At first, I struggled to understand how to share the search term between the SearchBar and the MemberList. I worked through it by visualizing the component tree and realizing that the state must live in the closest common parent, which is the App component. Using **Controlled Inputs** also became clearer as I practiced more form validations. This project helped me see how small, reusable components make the code much cleaner and easier to debug.

## How to Run
1. Navigate to `week2/day5`
2. Run `npm install`
3. Run `npm run dev`