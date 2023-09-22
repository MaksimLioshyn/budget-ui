'use client';
import { EditForm } from '@/app/components/EditForm/EditForm';
import { Table } from '@/app/components/Table/Table';
import { useEditForm } from '@/app/hooks/useEditForm';
import { ENDPOINT_URLS } from '@/app/libs/constants/endpointUrls';
import { TCodeType } from '@/app/libs/types/response';
import { MouseEventHandler, useEffect, useState } from 'react';

type TCodesProps = {
  data: ReadonlyArray<TCodeType>;
};

const cellNames = {
  '0': 'id',
  '1': 'код',
  '2': 'описание',
  '3': '',
};

const getTableData = (data: ReadonlyArray<TCodeType>) => {
  return data.map((codeItem) => ({
    id: `${codeItem.id}`,
    name: codeItem.name,
    description: codeItem.description,
  }));
};

export const CodesTable = ({ data }: TCodesProps) => {
  const { editData, setEditData, formFields, changeHandler } = useEditForm();
  const [showForm, setShowForm] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [renderData, setRenderData] = useState(getTableData(data));
  const columnCount = Object.keys(cellNames).length;

  useEffect(() => {
    const getCodes = async () => {
      const response = await fetch(`/api/${ENDPOINT_URLS.CODES_ALL}`);
      const { result } = await response.json();
      setRenderData(getTableData(result));
    };
    if (isSuccess) {
      getCodes();
    }
  }, [isSuccess]);

  const editHandler = (input: { [key: string]: string }) => {
    setEditData(input);

    setIsSuccess(false);
    setShowForm(true);
  };

  const setData = async () => {
    const url = '/api/Codes/update-code';
    const data = Object.keys(editData).length ? editData : null;

    if (!data) return;

    try {
      const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setIsSuccess(response.ok);
      closeModal();
    } catch (error) {
      setIsSuccess(false);
    }
  };

  const closeModal = () => {
    setEditData({});
    setShowForm(false);
  };

  const submitHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setData();
  };

  return (
    <>
      <Table
        data={renderData}
        cellNames={cellNames}
        columnsCount={columnCount}
        isEditable
        buttonHandler={editHandler}
      />
      {showForm && (
        <EditForm
          formFields={formFields}
          changeHandler={changeHandler}
          submitHandler={submitHandler}
          closeHandler={closeModal}
        />
      )}
    </>
  );
};
