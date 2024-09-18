   ## Installation

   1. Clone the repository:
      ```bash
      git clone https://github.com/<your-username>/Loginegg_Assessment.git
      ```

   2. Navigate to the project directory:
      ```bash
      cd Loginegg_Assessment
      ```

   3. Install dependencies:
      ```bash
      npm install
      ```

   4. Create an `.env.local` file in the root directory and configure the environment variables (add your Frontegg API details, if applicable):
      ```bash
      NEXT_PUBLIC_FRONTEGG_CLIENT_ID=<your-client-id>
      NEXT_PUBLIC_FRONTEGG_API_KEY=<your-api-key>
      ```

   5. Run the development server:
      ```bash
      npm start
      ```

   6. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.


**Question 5:**

*After going through the Frontegg customer journey and integration, take some time to explore the Frontegg portal, admin portal, and available features. Please suggest three items you would improve in that experience.*

**Answer:**

After exploring the Frontegg platform, here are three improvements I would suggest:

1. **Include CORS Error Troubleshooting in the Quickstart Tutorial:**

   During the integration process, I encountered a CORS (Cross-Origin Resource Sharing) error that prevented me from logging in. This issue wasn't addressed in the quickstart tutorial, and I had to search online and check the developer console to diagnose it. Including a section in the tutorial that covers common errors like CORS issues would greatly enhance the user experience. Providing direct links to the relevant support documentation, such as the [CORS error page](https://support.frontegg.com/hc/en-us/articles/5264971544733-Why-am-I-receiving-CORS-errors-when-trying-to-load-my-app), would help users troubleshoot effectively.

2. **Add Guidance on Configuring the Admin Portal After Integration:**

   Once the initial integration is complete, it's not immediately clear how to proceed with configuring the admin portal and managing users. It would be helpful if the integration quickstart included a link or a next step that directs users to documentation on configuring the portal, such as the [Managing Users](https://docs-beta.frontegg.com/guides/admin-portal/workspace/managing-users-admin-portal) guide. This would assist developers in understanding how to utilize the Builder features to set up user permissions, invite other users, access audit logs, and create machine-to-machine tokens.

3. **Consolidate Documentation Sites for Clarity:**

   I noticed that there are two documentation websites: [docs-beta.frontegg.com](https://docs-beta.frontegg.com) and [docs.frontegg.com](https://docs.frontegg.com). This can be confusing, as the content and updates may not be synchronized between them. Consolidating the documentation into a single, up-to-date site or clearly indicating which one contains the most current information would improve navigation and reduce confusion for users seeking assistance.

---

**Question 6:**

*Answer some of the common questions we get from users:*

**a. For some reason, when I get my invite email to my application, it redirects me to "localhost:3000"—but I didn't set this. How can I change it?**

**Answer:**

When you create a new application in Frontegg, the default **App URL** is set to `localhost:3000` unless you specify otherwise. To change this, navigate to your application settings in the Frontegg portal:

1. Go to the **Applications** section.
2. Select your application.
3. Update the **App URL** field to your desired URL.

By setting the correct App URL, invite emails will redirect users to the appropriate location.

---

**b. Why don't I see the 'Users' page on my admin portal (in the app settings button)?**

**Answer:**

The 'Users' page may not be visible because it hasn't been enabled in your admin portal configuration. To enable it:

1. Go to the **Builder** section in the Frontegg portal.
2. Navigate to the **Admin Portal** settings.
3. Enable the **Users** page by toggling it on.

For detailed instructions, please refer to our [Managing Users documentation](https://docs.frontegg.com/guides/admin-portal/workspace/managing-users-admin-portal).

**Bonus:** *I now see the page but I don't see the "Invite User" button, why is that?*

**Answer:**

The "Invite User" button is only visible to users who have the appropriate permissions. Ensure that your logged-in user account has the **Admin** role assigned on your tenant. Users without the necessary role won't see the option to invite new users.

---

**c. For some reason, I don't have the Google login—why is that?**

**Answer:**

The Google login option needs to be enabled in your application's authentication settings. To do this:

1. Go to the **Builder** section in the Frontegg portal.
2. Navigate to the **Login Box** settings.
3. Under **Social Logins**, enable the **Google** option.

Once enabled, the Google login button will appear on your application's login page.

---

**d. Explain what refresh tokens are and why we need them.**

**Answer:**

Refresh tokens are long-lived credentials used to obtain new access tokens without requiring the user to re-authenticate. Access tokens (often JWTs) have short lifespans for security reasons. When an access token expires, the refresh token allows the application to request a new access token, ensuring a seamless user experience without frequent logins.

**Bonus:** *Why am I getting a 401 error when I open my application to login? What does it mean?*

**Answer:**

A 401 error indicates that the request lacks valid authentication credentials—it's an "Unauthorized" error. This can happen if:

- Your access token is expired or invalid.
- The authentication headers are missing or incorrect.

To resolve this, ensure that:

- You are properly logged in.
- Your access token is valid and included in the request headers.

For more troubleshooting steps, please refer to our [401 Error Troubleshooting Guide](https://support.frontegg.com/hc/en-us/articles/5425090458653-Why-do-I-get-401-error-on-refresh-requests).

**Bonus:** *Explain the difference between a JWT token and a refresh token. How do they work together?*

**Answer:**

- **JWT (JSON Web Token):** A JWT is an access token that contains user identity and authorization information. It's used to authenticate and authorize API requests. JWTs are stateless and have a short lifespan to minimize security risks if compromised.

- **Refresh Token:** A refresh token is a long-lived token used to obtain new JWT access tokens after they expire. It is securely stored and not sent with each API request.

**How They Work Together:**

1. Upon successful authentication, the user receives both a JWT access token and a refresh token.
2. The JWT is used for authenticated API requests until it expires.
3. When the JWT expires, the application uses the refresh token to request a new JWT without requiring the user to log in again.
4. This process repeats, enhancing security while providing a seamless experience.

---

**e. Can you please point out which API I can use to change the user's active tenant? How should one use it?**

**Answer:**

To change a user's active tenant, you can use the **"Update User's Active Tenant" API** provided by Frontegg. Here's how:

1. **API Endpoint:** Refer to the [Update User's Active Tenant API documentation](https://docs.frontegg.com/reference/userscontrollerv1_updateusertenant) for the specific endpoint and request structure.
2. **Usage:**
   - Make a **PUT** request to the API endpoint.
   - Include the user's ID and the tenant ID you wish to set as active in the request body.
   - Ensure you have the necessary authentication and permissions to perform this action.

**Bonus:** *Is there a way to do this through the SDK?*

**Answer:**

Yes, you can perform this action using the Frontegg SDK, which provides convenient methods to interact with Frontegg APIs in your application code. Check the SDK documentation specific to your programming language for functions related to tenant management and how to update a user's active tenant.

---

**f. Is there a way to block users with a certain email from signing up to a tenant? If yes, how?**

**Answer:**

Yes, you can block users from specific email addresses or domains using **Security Rules** in Frontegg. Here's how:

1. **Navigate to Security Rules:**
   - In the Frontegg portal, go to the **Security** section.
   - Select **Security Rules**.

2. **Create a New Rule:**
   - Click on **Add Rule**.
   - Define the conditions to block emails from specific addresses or domains (e.g., *@example.com*).

3. **Set the Action:**
   - Choose the action to **Block** or **Deny** sign-ups that match the rule.

For detailed steps and options, please refer to the [Security Rules documentation](https://docs.frontegg.com/docs/security-rules).

---

By addressing these questions comprehensively and providing clear, step-by-step instructions, users can better understand how to navigate and utilize the Frontegg platform effectively.
