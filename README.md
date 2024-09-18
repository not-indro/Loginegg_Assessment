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

After exploring Frontegg, here are three improvements I'd suggest:
Sure, after trying out Frontegg, here are three things I'd suggest improving:

1. **Add Video Setup Guides for Non-Tech Founders**

   A non-technical founder would found the setup process a bit tricky. Having easy-to-follow video tutorials would make it so much simpler for people like me to get started without getting bogged down by technical steps.

2. **Provide Clear Guidance on Using the Admin Portal After Integration**

   Once someone newbie got through the initial setup, he/she is not sure what to do next with the admin portal. A straightforward guide on how to manage users, set permissions, invite team members, and use other features would be super helpful.

3. **Simplify and Clarify the Documentation**

   I noticed the documentation was a bit confusing and hard to navigate at times. Making it more user-friendly and easier to understand would really help users find what they need without getting frustrated.

**Question 6:**
---

**a. When I receive my invite email to my application, it redirects me to "localhost:3000"—but I didn't set this. How can I change it?**

**Answer:**

Ah, that's a common one! When you create a new application in Frontegg, it automatically sets the app's URL to `localhost:3000` by default. To change this to your actual app's URL, you can do the following:

- Log in to the Frontegg portal and head over to the **Applications** section.
- Click on your application.
- You'll see a field labeled **App URL**. Just update that to the correct URL for your app.

Once you've updated it, any invite emails sent out will direct users to the right place.

---

**b. Why don't I see the 'Users' page on my admin portal?**

**Answer:**

If you're not seeing the 'Users' page, it might just be that it's not enabled yet. To turn it on:

- Go to the **Builder** section in the Frontegg portal.
- Click on the **Admin Portal** settings.
- Look for the **Users** page option and make sure it's toggled on.

**Bonus:** *I now see the page but not the "Invite User" button. Why is that?*

**Answer:**

The "Invite User" button will only show up if you have the right permissions. Make sure that your user account has the **Admin** role assigned in your tenant. Without admin privileges, that button won't appear.

---

**c. For some reason, I don't have the Google login option—why is that?**

**Answer:**

You'll need to enable Google login in your application's settings. Here's how you can do it:

- In the Frontegg portal, navigate to the **Builder** section.
- Go to the **Login Box** settings.
- Under **Social Logins**, you'll find the option to enable **Google**. Just switch it on.

After that, the Google login button should appear on your application's login page.

---

**d. Can you explain what refresh tokens are and why we need them?**

**Answer:**

Sure thing! Refresh tokens are like a backup key that lets your app get a new access token without making the user log in again. Access tokens (like JWTs) are designed to expire after a short period for security reasons. When they do expire, the refresh token allows the app to request a new access token seamlessly, so the user doesn't notice any interruption.

**Bonus:** *Why am I getting a 401 error when I try to log in? What does it mean?*

**Answer:**

A 401 error means "Unauthorized," which usually indicates that your app isn't recognizing your credentials. This can happen if your access token has expired or is invalid, or if the authentication headers are missing or incorrect. To fix this, make sure you're properly logged in and that your access token is valid and included in your requests.

**Bonus:** *What's the difference between a JWT token and a refresh token? How do they work together?*

**Answer:**

Great question! A **JWT (JSON Web Token)** is a short-lived token that carries information about the user and is used to authenticate requests to the server. A **refresh token** is a long-lived token that can be used to obtain a new JWT when the old one expires.

Here's how they work together:

1. When you log in, you receive both a JWT and a refresh token.
2. The JWT is used to authenticate your requests until it expires.
3. When the JWT expires, your app uses the refresh token to get a new JWT without requiring you to log in again.

This system keeps your app secure while providing a smooth experience for the user.

---

**e. Is there an API I can use to change a user's active tenant? How should I use it?**

**Answer:**

Yes, you can change a user's active tenant using the **"Update User's Active Tenant"** API provided by Frontegg. Here's what you need to do:

- Make a **PUT** request to the specific endpoint detailed in the API documentation.
- In your request, include the user's ID and the ID of the tenant you want to set as active.
- Ensure you have the necessary permissions to perform this action.

**Bonus:** *Is there a way to do this through the SDK?*

**Answer:**

Absolutely! The Frontegg SDK includes methods that allow you to manage tenants programmatically. You'll want to check the SDK documentation for your specific programming language to see how to implement this.

---

**f. Is there a way to block users with a certain email from signing up to a tenant? If yes, how?**

**Answer:**

Yes, you can block users from specific email addresses or domains by setting up **Security Rules** in Frontegg. Here's how you can do it:

- In the Frontegg portal, navigate to the **Security** section and select **Security Rules**.
- Click on **Add Rule** to create a new rule.
- Define the conditions to block the specific emails or domains you're concerned about (e.g., `*@example.com`).
- Set the action to **Block** or **Deny** sign-ups that match your rule.

This will prevent users with those email addresses from signing up to your tenant.

---