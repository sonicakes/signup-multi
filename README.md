# 👻 Frightbook App Signup Form
## A Multi-Step Form Built with Material UI (MUI) and React Hook Form (RHF)

This project implements a custom-themed, multi-step registration wizard that respects dark/light mode of user's device and uses integrated form validation.

At the end of the sign up flow, the collected values are printed in the console.

The intended purpose is to sign up for imaginary portal Frightbook which is like Facebook for monsters. Its description can be found here: XXX


---

## 🎨 Thematic Design: A Ghoulish Aesthetic

The application uses a specific Halloween-inspired theme to create a unique user experience:

* **Color Palette:** Used burnt orange (light mode) & light orange (dark mode) as primary, dark & light foresty/grass greens for secondary to bring Halloween mood to life. Colors are fun but also AA & AAA compliant.
* **Typography:** 
    * **Heading h1:** Set to **'Barrio'** for a messed type/written children scary look. Google font.
    * **Body Text:** Set to **'Merriweather', serif** for clear readability against dark backgrounds. Google font.
* **Responsive Typography:** Uses MUI's `responsiveFontSizes` utility to ensure large headers shrink proportionally on mobile devices, maintaining readability and screen efficiency.

---

## ✨ Key Features

* **Multi-Step Navigation:** Structured into distinct, validated steps (Account, Identity, Organization, Team, Legal, and Review).
* **Dynamic Dark/Light Mode:** Includes a custom hook to manage color modes throughout the application.
* **Form Validation:** Uses RHF's context to ensure fields are valid before allowing step progression.
* **Custom UI Components:**
    * **Chip Input (Tags):** The team invitation step uses a dynamic input field to convert entered emails into removable MUI chips (pills).
* **Final Review before submission:** Provides a dedicated review screen for the final submission summary & ability to go back & edit when needed.


---

## 🐛 Known buggies that need fixing  

The following things I noticed during testing but sadly ran out of time to fix 'em 😢⏳

1. **Validation for email chips inside Team Invites is incomplete & breaks if one of the email is invalid:** If every email is a valid email it works. SOZ it would be a priority bug to look at.
2. **Add 'close' or 'exit' btn on Thank you screen:** Tooltip for Organization step is not visible or clickable on mobile. Even though the info is not critical, its a bug.
3. **Add 'close' or 'exit' btn on Thank you screen:** Currently just stuck there, would be good to have a way out - either navigating to product website, external party website or even a btn that resets the form & starts the signup again.
4. **When the form submits and we see TY screen, it would be good to scroll to the top fo the screen**, since we land where we were before - at the end of the Review step, which is kind of related to one of my improvements below (about collapsible/accordion style review that does not have long scroll).

---

## 📋 Future Improvements (Laundry List)

The following features are planned for future development:

1. **Password Strength Indicator:** 
- A color-coded LinearProgress bar that fills up (e.g., changing from Red/Weak to Yellow/Medium to Green/Strong).
- Dynamic Helper Text that changes words like "Weak," "Fair," or "Excellent" based on the calculated score.
2. **Replace subtitle text with Tooltips:** I've started doing that with Organization step - need to be consistent throughout the steps.
3.  **Button NEXT should be disabled until all validation rules are fulfilled:** Cxxxxx.
4. **Sections in Summary Review step could be collapsed/expanded as desired in Accordion style -  I find the summary scroll is annoying:** .....
5. **Better representation of steps - using circular 1-2-3-4 instead of Linear bar is clearer & keeps steps in mind** ...
6. **Implement incremental personalization:** 
- E.g. when user selects their role as Vampire, the avatar would replace 'Signup Form' header in the top middle of the form & display picture of a vampire.
- As we progress further into the steps, personalisation levels would also increase. Selecting a primary use case (howling at the moon, for instance, would render a background of wolves & moon. Or maybe not - since the werewolves might be triggered & start changing?...🤷)
- Drilling into personalization even further, we could provide conditional fields based on the previous step (e.g. Primary role = Witch, in the next step we could ask if their coven needs a special discount on brooms & cauldrons from our Partner at 'Brooms & Co' if they invite 5+ team members to join)
7. **Add confirm pswd field** ...
8. **For price tier selection, include cards-like elements that have description etc. so that user knows what they are signing up for** ...
9. **Include animation on transition from step to step - slide or similar** ...
10. **Include animation on success/TY screen - checkbox animated** ...


---

## 💻 Tech Stack

* **Framework:** React
* **Styling & Components:** Material UI (MUI v5+)
* **Form Management:** React Hook Form (RHF)
* **State Management:** React Hooks (`useState`, `useMemo`, `useCallback`)

---

##⚙️ Setup and Installation

1.  **Clone the Repository:**
    ```bash
    git clone [your-repo-link]
    cd [your-repo-name]
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the Project:**
    ```bash
    npm run dev
    # or
    yarn start
    ```
    The application will open in your browser at `http://localhost:5173`.

---
## 💡 Feedback & Contributions

Got an idea for a spookier feature? Found a creepy crawly bug? I welcome contributions.
1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

---
## 📜 Resources

* **Fonts:** Loaded via Google Fonts (Merriweather, Barrio, Creepster).
* **Icons:** Provided by Material UI Icons.
* **Logo:** made from text with Creepster font.
* **Imagery:** Background 'ghosties' img - downloaded from Adobe stock as part of subscription - unlimited license for private/commercial use.  [See ghosties url & info](https://stock.adobe.com/au/images/white-ghost-seamless-pattern-isolated-on-white-background-vector-halloween-illustration/635714364?prev_url=detail)

### Thank You

Thank you for exploring the Frighbook Signup Flow! I hope you find this implementation useful or at least not super boring.

***Happy Halloween - keep it Frightful and Delightful!* 🎃👻🧟** 
