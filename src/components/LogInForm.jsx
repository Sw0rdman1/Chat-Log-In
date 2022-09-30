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

               <button type="submit">Submit</button>
            </form>
         )}
      />
   );
}
