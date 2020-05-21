import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { todoListState } from 'atoms/todo-list';

const CreatorWrapper = styled.div``;

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = React.useState<string>('');
  const setTodoList = useSetRecoilState<any[]>(todoListState);

  function addItem() {
    setTodoList((oldTodoList: any[]) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  }

  function onChange(event: any) {
    setInputValue(event.target.value);
  }

  return (
    <CreatorWrapper>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </CreatorWrapper>
  );
}

let id = 0;
function getId() {
  return id++;
}
