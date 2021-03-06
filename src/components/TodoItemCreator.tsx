import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { todoListState } from 'atoms';

import { TodoTask } from 'models';

const CreatorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  input {
    width: 180px;
    height: 18px;
  }
`;

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = React.useState<string>('');
  const setTodoList = useSetRecoilState<TodoTask[]>(todoListState);

  function addItem() {
    setTodoList((oldTodoList: TodoTask[]) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      } as TodoTask,
    ]);
    setInputValue('');
  }

  function onChange(event: any) {
    if (event.keyCode === 13) {
      addItem();
    }

    setInputValue(event.target.value);
  }

  return (
    <CreatorWrapper>
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            addItem();
          }
        }}
      />
      <button onClick={addItem}>Add</button>
    </CreatorWrapper>
  );
}

let id = 0;
function getId() {
  return id++;
}
