# Week 2 Day 2 Tasks - Fluxify Internship

This directory contains React components demonstrating the use of **State** and **Props**.

## Components Created:
1. **Interactive Counter**: Uses `useState` to manage a counter (prevents negative values).
2. **ToggleCard**: Uses boolean state to show/hide content.
3. **ColorPicker**: Updates UI background based on button clicks.
4. **ShoppingCart System**: 
   - Demonstrates **Lifting State Up**.
   - The `ShoppingCart` (Parent) manages the `cartCount`.
   - `ProductCard` (Child) triggers updates via a handler function passed as a prop.
   - `CartSummary` (Child) displays the total count.

## How Props and State are used:
- **State**: Used to store data that changes (e.g., the number of items in the cart).
- **Props**: Used to pass the `cartCount` and the `addToCart` function from the Parent to the Child components.