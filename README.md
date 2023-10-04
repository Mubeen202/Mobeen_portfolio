# Mobeen_portfolio
# Mobeen Portfolio Website

This project is a personal portfolio website built using React.js and Three.js for 3D graphics. Tailwind CSS was utilized for styling, and EmailJS was integrated for the contact form functionality.

## Technologies Used:

- **React.js:** The website is developed using React.js, a popular JavaScript library for building user interfaces.

- **Three.js:** Three.js was used for creating interactive 3D graphics and animations on the website.

- **Tailwind CSS:** Tailwind CSS, a utility-first CSS framework, was employed for designing the website's layout and components.

- **EmailJS:** EmailJS was integrated to enable the contact form, allowing visitors to send messages directly from the website.

## Project Structure:

- **`/src`:** Contains the React.js source code for the website.
  - **`/components`:** React components for different sections of the website.
  - **`/styles`:** Custom styles and Tailwind CSS classes.
  - **`/pages`:** React components representing different pages of the website.

## Getting Started:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/username/mobeen-portfolio.git
   cd mobeen-portfolio
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Development Server:**
   ```bash
   npm start
   ```

   The website will be accessible at `http://localhost:3000`.

## Contact Form Setup:

1. **EmailJS Integration:**
   - Sign up for an EmailJS account and get your Service ID and Template ID.
   - Replace the placeholders in the code with your Service ID and Template ID.

   ```javascript
   emailjs.send(
     "YOUR_SERVICE_ID",
     "YOUR_TEMPLATE_ID",
     {
       from_name: form.name,
       to_name: "Mobeen Portfolio",
       from_email: form.email,
       to_email: "your-email@example.com",
       message: form.message,
     },
     "YOUR_EMAILJS_USER_ID"
   );
   ```

2. **Configure Email Recipient:**
   - Set the `to_email` parameter to the email address where you want to receive the messages.

## Deployment:

- Deploy the website using platforms like Netlify, Vercel, or GitHub Pages. Ensure to set up environment variables for sensitive information such as EmailJS user ID and API keys.

## Contributors:

- Mobeen Sheikh (GitHub: [@mubeen202](https://github.com/mubeensh))

---

Feel free to customize the website further according to your needs. Happy coding!