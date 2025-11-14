
# 💾 File Size Converter

<p align="center">
  <strong>A sleek, modern, and accurate utility for converting digital storage units. Demystify the difference between binary (1024) and decimal (1000) standards with a beautiful, immersive interface.</strong>
</p>

<p align="center">
  <a href="https://react.dev/" target="_blank">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  </a>
  <a href="https://tailwindcss.com/" target="_blank">
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  </a>
  <a href="./LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="License: MIT">
  </a>
</p>

<!-- TODO: Add a high-quality GIF of the application in action. -->
<!-- <p align="center">
  <img src="./public/screenshot.gif" alt="File Size Converter in action" width="700px">
</p> -->

---

## 📖 Table of Contents

- [About The Project](#-about-the-project)
- [✨ Key Features](#-key-features)
- [🛠️ Built With](#️-built-with)
- [🚀 Getting Started](#-getting-started)
- [📂 Project Structure](#-project-structure)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📧 Contact](#-contact)

## 🎯 About The Project

Ever wondered why your new 1TB hard drive only shows 931GB of usable space? Or struggled to calculate the exact storage needs for a project?

This File Size Converter was built to solve that exact problem. It provides a clear, accurate, and user-friendly tool to bridge the gap between how storage is marketed (in decimal, powers of 1000) and how it's often used by operating systems (in binary, powers of 1024).

The goal of this project is to offer a reliable utility wrapped in a modern, aesthetically pleasing design, focusing on a seamless user experience, code quality, and performance.

## ✨ Key Features

- **⚡ Instant Conversions**: Real-time calculations are performed as you type for immediate results.
- **🔄 Dual Standard System**: Effortlessly switch between **Binary (1024-based)** and **Decimal (1000-based)** standards.
- **🔁 Unit Swapping**: A dedicated button to instantly swap the 'From' and 'To' units.
- **📊 Detailed Breakdown**: Get a granular view with the total value in both **Bytes** and **Bits**.
- **🌌 Immersive UI**: A stunning, animated galaxy background provides a comfortable and unique user experience that is both functional and beautiful.
- **📱 Fully Responsive**: Flawless performance and layout on desktops, tablets, and mobile devices.
- **🔒 Pure & Private**: All calculations happen client-side within your browser. No data is ever collected or sent to a server.
- **⌨️ Developer-Friendly**: Built with a modern tech stack and clean, organized code that's easy to understand and maintain.

## 🛠️ Built With

This project leverages modern frontend technologies to deliver a fast and robust experience.

- **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/)**: A strongly typed programming language that builds on JavaScript.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
- **Pure Functions**: The core conversion logic is dependency-free, ensuring it's lightweight and portable.

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and a package manager like [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/hsinidev/file-size-converter.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd file-size-converter
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    # or
    yarn install
    ```
4.  **Run the development server:**
    ```sh
    npm run dev
    # or
    yarn dev
    ```
The application will be available at `http://localhost:5173` (or the port specified in your terminal).

## 📂 Project Structure

The codebase is organized logically to separate concerns, making it easy to navigate and maintain.

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/      # Reusable React components
│   │   ├── FileSizeConverterTool.tsx
│   │   ├── Layout.tsx
│   │   ├── Modal.tsx
│   │   └── SeoArticle.tsx
│   ├── lib/
│   │   └── conversion.ts  # Core conversion logic (pure functions)
│   ├── App.tsx            # Main application component
│   ├── index.tsx          # React entry point
│   └── types.ts           # Shared TypeScript types and enums
├── index.html
├── README.md
├── ... (config files)
```

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📧 Contact

HSINI MOHAMED - [@hsinidev](https://github.com/hsinidev) - hsini.web@gmail.com

Project Link: [https://github.com/hsinidev/file-size-converter](https://github.com/hsinidev/file-size-converter)
