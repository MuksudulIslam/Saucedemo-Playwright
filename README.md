# **Saucedemo Playwright Automation**

## **Project Description**

This project automates a basic end-to-end user flow on the public demo website **[https://www.saucedemo.com/](https://www.saucedemo.com/)** using **Playwright with JavaScript** and the **Page Object Model (POM)** structure.

The automated scenario covers:

1. Logging in with valid credentials
2. Adding a selected product to the cart
3. Verifying the product name in the cart
4. Logging out from the application

This project is designed to be simple, modular, and easy to run for educational or testing purposes.


## **Scenarios Covered**

### **Scenario: Add Product to Cart & Logout**

* Navigate to Saucedemo login page
* Log in using valid standard user credentials
* Select a product from the inventory page
* Add the product to the cart
* Open cart page and verify product name
* Logout from the application

## **Tools and Technologies**

| Tool / Technology           | Purpose                                        |
| --------------------------- | ---------------------------------------------- |
| **Playwright**              | Browser automation & testing                   |
| **JavaScript (Node.js)**    | Programming language used for test development |
| **Page Object Model (POM)** | Maintainable test structure                    |
| **VS Code**                 | Recommended code editor                        |
| **Git & GitHub**            | Version control and project hosting            |

## **Framework Used**

The project is built using:

### **Playwright Test Runner + Page Object Model (POM)**

* Separates test logic from UI interactions
* Reusable page classes
* Cleaner and scalable structure

## **File Structure**

```
Saucedemo-Playwright/
├── pages/
│   ├── CartPage.js
│   ├── InventoryPage.js
│   ├── LoginPage.js
│   └── LogoutPage.js
│
├── tests/
│   └── saucedemo.spec.js
│
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
└── playwright.config.js
```

**Explanation:**

* **pages/** → Contains all Page Object Model files
* **tests/** → Main test specifications
* **playwright.config.js** → Playwright configuration
* **package.json** → Dependencies & scripts

## **How to Run This Project**

### **1. Clone the Repository**

```bash
git clone https://github.com/MuksudulIslam/Saucedemo-Playwright.git
cd Saucedemo-Playwright
```

### **2. Install Dependencies**

```bash
npm install
```

### **3. Install Playwright Browsers**

```bash
npx playwright install
```

### **4. Run the Test**

```bash
npx playwright test --headed
```
## Demonstration

![b97ad1a9-5295-4e75-bc17-7b2f4a3f4167-attachment](https://github.com/user-attachments/assets/4af935ff-256c-4feb-9cd8-3e23e6633d93)

## Allure Report

<img width="1905" height="962" alt="image" src="https://github.com/user-attachments/assets/06200657-1d6f-4df0-b3db-dadf63b4971b" />

## About the QA
### Muksudul Islam
#### Software Engineer (QA) | HealthTech | Passionate about testing, tools, and UI quality.

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/Muksudulislam/) [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MuksudulIslam) [![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/8801758933196)
