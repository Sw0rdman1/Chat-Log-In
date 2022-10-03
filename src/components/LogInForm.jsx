import { Form } from "react-final-form";
import UsernameInput from "./UsernameInput";
import PasswordInput from "./PasswordInput";

export default function LogInForm() {
   const onSubmit = () => {
      console.log("onSubmit");
   };

   const validate = () => {
      console.log("validate");
   };

   return (
      <div className="log-in-container">
         <h1>Welcome</h1>
         <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
               <form
                  className="login-form"
                  onSubmit={handleSubmit}
               >
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
               </form>
            )}
         />
      </div>
   );
}
