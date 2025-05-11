
# 📘 Cypress University Playground

Welcome to the **Cypress University** repo — a practical reference and hands-on **playground for mastering Cypress**. This project is built to help QA engineers, developers, and learners explore end-to-end (E2E) testing using Cypress, complete with integrated reporting and test filtering tools.

---

## 🧪 Purpose

This repository serves as:

* A **learning hub** for Cypress best practices.
* A **reference project** to understand E2E test structuring.
* A **playground** where you can practice and build your own Cypress test suites.
* A demo for **custom reporting and test filtering** using powerful open-source tools.

---

## 📦 Dependencies

The project uses the following tools to enhance the testing experience:

### ✅ Dev Dependencies

| Package                        | Version | Purpose                                             |
| ------------------------------ | ------- | --------------------------------------------------- |
| `cypress`                      | ^14.3.3 | Core testing framework                              |
| `mochawesome`                  | ^7.1.3  | Generates detailed and visually rich test reports   |
| `mochawesome-merge`            | ^5.0.0  | Merges multiple test results into one               |
| `mochawesome-report-generator` | ^6.2.0  | Converts merged JSON results into final HTML report |

### 🔌 Runtime Dependencies

| Package                        | Version | Purpose                                                  |
| ------------------------------ | ------- | -------------------------------------------------------- |
| `@cypress/grep`                | ^4.1.0  | Enables test filtering by tags or titles                 |
| `cypress-mochawesome-reporter` | ^3.8.2  | Connects Cypress with Mochawesome for advanced reporting |

---

## 🚀 How to Use

1. **Install dependencies:**

```bash
npm install
```

2. **Run tests:**

```bash
npx cypress open
# or for headless:
npx cypress run
```

3. **Generate merged report:**

```bash
npx mochawesome-merge cypress/reports/*.json > merged-report.json
npx mochawesome-report-generator merged-report.json
```

---

## 📚 Learn More

* [Cypress Docs](https://docs.cypress.io/)
* [Mochawesome](https://github.com/adamgruber/mochawesome)
* [@cypress/grep](https://github.com/cypress-io/cypress-grep)

---

## 🤝 Contributing

Feel free to fork this repository, try out the tests, or even add your own examples as you learn.

