import { TodoModel } from 'interfaces/redux/todos';
import React, { ChangeEvent, useRef, useCallback, useState } from 'react';

interface Response {
  handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  data: TodoModel;
}

export const useTodo = ({ id, name, description, price, amount }: TodoModel): Response => {
  const [data, setData] = useState<TodoModel>({
    id,
    name,
    description,
    price,
    amount,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return {
    handleInputChange,
    data,
  };
};
