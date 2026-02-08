# Design Guide: Electric Black Portfolio

This guide provides instructions for an AI agent to implement the visual and structural layout of the portfolio website. The goal is a high-end, professional, and minimalist aesthetic suitable for a Senior Cloud & FinOps Consultant.

---

## 🎨 Core Aesthetic: Sophisticated Slate
The theme relies on calm contrast, editorial typography, and the depth of midnight blue tones.

### Color Tokens
- **Base Background**: `#0B0F19` (Midnight Slate) - Use for the main viewport.
- **Surface Background**: `#0F172A` (Deep Slate) - Use for cards and elevated sections.
- **Primary Accent**: `#3B82F6` (Cyber Blue) - Use for CTAs and highlights.
- **Secondary Accent**: `#1E40AF` (Deep Blue) - Use for gradients.
- **Primary Text**: `#F8FAFC` (Ghost White) - For headings.
- **Secondary Text**: `#94A3B8` (Steel Silver) - For body content.

### Typography
- **Headings**: `Fraunces` (Serif). High contrast, elegant.
- **Body**: `Inter` (Sans-serif). Clean, functional.

---

## 📐 Layout Principles

1. **Strict Minimalism**: Remove all unnecessary borders. Use negative space (whitespace) to create hierarchy.
2. **Radial Depth**: Instead of flat backgrounds, use very large, subtle radial gradients (10% opacity blue) behind key sections to create a sense of "ambient light."
3. **Typography-First**: Use a premium sans-serif (Inter or Outfit). Large, bold headings for impact; tracking (letter-spacing) should be slightly increased for headers.
4. **Interactive Micro-glows**: Interactive elements should have a soft blue outer glow (`box-shadow`) on hover/active states, rather than harsh color changes.

---

## 🧱 Component Blueprint

### 1. Hero Section
- **Layout**: Centered or left-aligned with significant top padding (20vh+).
- **Typography**: The tagline ("Scalable Infrastructure. FinOps Mindset.") should be in a massive, bold font.
- **Visuals**: A very subtle blue glow centered behind the tagline to draw the eye. No loud animations.

### 2. Tech Stack (Expertise)
- **Layout**: A clean grid or set of cards with `#0A0A0A` background.
- **Details**: Icons should be monochrome white or blue-tinted. Keep descriptions extremely concise.
- **Focus**: Group by **Cloud (GCP/AWS/Terraform)** and **Fullstack (Typescript/Python)**.

### 3. About Section
- **Layout**: Split layout (40/60 or 50/50).
- **Style**: Text-heavy but broken into short, readable paragraphs using `leading-relaxed`.
- **Interests**: Use minimalist custom icons for Traveling, Golf, Running, and Coding. Tint them blue.

### 4. Interactive Elements
- **Buttons**: Outline buttons (white or blue) with a fill animation on hover.
- **Links**: Thin underline that expands on hover, or a simple color shift to Electric Blue.

---

## 🛠 Technical Implementation Hints

- **CSS Variables**: Define all colors in `:root` for easy switching.
- **Blur Effects**: Use `backdrop-filter: blur(8px)` for navbars or floating elements to maintain the "glass" look on the black background.
- **Gradients**: 
  ```css
  background: radial-gradient(circle at center, rgba(59, 130, 246, 0.05) 0%, transparent 70%);
  ```

---

## 🤖 Agent Commands
When modifying files:
1. **Prioritize Performance**: Use lean CSS (Vanilla or Tailwind) without heavy libraries.
2. **Consistency Check**: Ensure every component adheres to the `#000000` background and high-contrast text.
3. **Professional Tone**: Keep UI animations short (200-300ms) and purposeful.
