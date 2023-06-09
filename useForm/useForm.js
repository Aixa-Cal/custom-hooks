import { useState } from "react";

export const useForm = (initialForm = {}) => {

    // {
    //     username: '',
    //     email: '',
    //     password: '',
    //   }

    const [formState, setFormState] = useState(initialForm);
    
      const { username, email, password } = formState;
    
      const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
          ...formState,
          [name]: value,
        });
      };

      const deleteForm = () => {
        setFormState(initialForm);
      }

    return{
        formState,
        formState,
        onInputChange,
        deleteForm,
    }
}
