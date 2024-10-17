**Sauce Demo Login and Add to Cart Test Script**
<br/>
*Required Packages:*
<br/>
* Node.js
* Cypress
* TypeScript
<br/>

**Clone the github repo**

Clone the github repo by running the below command on the terminal.

```
git clone https://github.com/MirIhtsham/SauceDemo.git
```

**Installation:**

Install Node.js from the official website (https://nodejs.org/) if you haven't already.

Open a terminal in your project directory and run the following command to initialize a new npm project:

```
npm init -y
```

Install Cypress and TypeScript:

```
npm install cypress  --save-dev
```

```
npm install typescript  --save-dev
```

Running Tests:

**Headless Mode:**

```
npm run login_and_add_to_cart_tests_headless
```

This will run the tests in the background without opening a browser window.

**Headed Mode:**
```
npm run login_and_add_to_cart_tests_headed
```

This will run the tests while opening a browser window to visually see the actions.

**Limitations:**
* **Login Session Handling:** The Sauce Demo website seems to have an issue where it loses login data after redirecting to the main landing page. This may require further investigation or workarounds.
* **Initial Product Listing 404 Error:** Cypress might encounter a temporary 404 error when navigating to the product listing page for the first time. This is likely because the page loads asynchronously. The tests use * failOnStatusCode: false to bypass this initial error and wait for the page to load correctly.