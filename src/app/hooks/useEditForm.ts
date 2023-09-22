import { ChangeEventHandler, useState } from 'react';

export const useEditForm = () => {
  const [editData, setEditData] = useState<{ [key: string]: string }>({});
  const formFields = Object.entries(editData).map((item) => {
    const [name, value] = item;
    return { name, value };
  });

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setEditData((prev) => {
      const newData = Object.assign({}, prev);
      newData[name] = value;
      return newData;
    });
  };

  return {
    editData,
    setEditData,
    formFields,
    changeHandler,
  };
};
