# Week 2 Day 1 - React Setup & JSX

## Full Name
**Clenia**

## Screenshot
![Profile Cards Screenshot](./screenshot.png)
*(Ongeraho screenshot yawe hanyuma ushyingire muri folder iyi)*

## Explanation of Conditional Rendering

In this project, conditional rendering is used in two places:

1. **Badge Component**: The `Available for hire` badge only appears when the `isAvailable` prop is `true`. If `isAvailable` is `false`, the component returns `null` and nothing is rendered. This is done using an `if` statement that checks the prop value.

2. **SkillsList Component**: When the `skills` array is empty or doesn't exist, the component shows a yellow warning message saying "No items found". If there are skills, it renders a list of badges using the `.map()` method. This is done with a simple `if` condition that returns different JSX based on the array length.

## How to run this project

```bash
npm install
npm run dev