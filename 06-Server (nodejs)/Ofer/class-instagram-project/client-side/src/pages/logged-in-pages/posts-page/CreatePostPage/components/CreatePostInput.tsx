import { useState, useCallback,ChangeEvent, memo } from "react";


type CreatePostInputT = {
    type: string;
    id: string;
    htmlFor: string;
    text: string;
    setValue: (valueState: any) => void
}
function CreatePostInput({type, id,  htmlFor, text, setValue }: CreatePostInputT) {

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    }, []);


    return (
      <div>
        <label htmlFor={htmlFor} >
          {text}
        </label>
        <input  type={type} id={id} onChange={handleChange} />
      </div>
    );
  }

  export default memo(CreatePostInput);
