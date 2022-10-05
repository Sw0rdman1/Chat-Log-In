import { Form } from "react-final-form";
import UsernameInput from "./UsernameInput";
import PasswordInput from "./PasswordInput";

export default function LogInForm() {
   const onSubmit = (e) => {};

   const validate = (e) => {
      const errors = {};

      if (e.username && e.username.length < 5) {
         errors.username = "Minimum 5 characters";
      }

      if (e.password1 && e.password1.length < 8) {
         errors.password1 = "Minimum 8 characters";
      }

      return errors;
   };

   return (
      <div className="login-div">
         <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
               <form
                  onSubmit={handleSubmit}
                  className="log-in-container"
               >
                  <h1>Welcome</h1>

                  <UsernameInput
                     labelName="Username"
                     placeholder="admin"
                     fieldName="username"
                  />
                  <PasswordInput />

                  <div class="tacbox">
                     <input
                        id="checkbox"
                        type="checkbox"
                     />
                     <label for="checkbox">
                        {" "}
                        I agree to these <a href="#">Terms and Conditions</a>.
                     </label>
                  </div>

                  <button type="submit">Log In</button>
                  <a
                     className="forgot-password"
                     href="#"
                  >
                     Forgot password?
                  </a>
               </form>
            )}
         />
      </div>
   );
}
