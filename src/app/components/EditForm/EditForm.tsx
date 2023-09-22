import { ChangeEventHandler, MouseEventHandler } from 'react';
import styles from './EditForm.module.scss';

type TFormProps = {
  formFields: ReadonlyArray<{ name: string; value: string }>;
  // eslint-disable-next-line no-unused-vars
  changeHandler: ChangeEventHandler<HTMLInputElement>;
  submitHandler: MouseEventHandler<HTMLButtonElement>;
  closeHandler: () => void;
};

export const EditForm = ({
  formFields,
  changeHandler,
  submitHandler,
  closeHandler,
}: TFormProps) => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        {formFields.map((field) => (
          <div className={styles.inputGroup} key={field.name}>
            <label className={styles.label}>{field.name}</label>
            <input
              className={styles.input}
              name={field.name}
              value={field.value}
              onChange={changeHandler}
              disabled={field.name === 'id'}
            />
          </div>
        ))}
        <button className={styles.button} onClick={submitHandler}>
          Обновить
        </button>
        <div className={styles.close} onClick={closeHandler} />
      </form>
    </div>
  );
};
