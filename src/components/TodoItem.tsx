import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { todoListState } from 'atoms';
import { replaceItemAtIndex, deleteItemAtIndex } from 'utils';
import { TodoTask } from 'models';

const ItemWrapper = styled.div`
  height: 30px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  input[type='text'] {
    border: none;
  }

  input[type='checkbox'] {
    height: 20px;
    width: 20px;
  }

  button {
    margin-left: 8px;
  }
`;

interface ItemProps {
  item: TodoTask;
}
export default function TodoItem(props: ItemProps) {
  const [todoList, setTodoList] = useRecoilState<TodoTask[]>(todoListState);
  const index = todoList.findIndex((listItem) => listItem === props.item);

  function editItemText(event: any) {
    const newList = replaceItemAtIndex(todoList, index, {
      ...props.item,
      text: event.target.value,
    } as TodoTask);

    setTodoList(newList);
  }

  function toggleItemCompletion() {
    const newList = replaceItemAtIndex(todoList, index, {
      ...props.item,
      isComplete: !props.item.isComplete,
    } as TodoTask);

    setTodoList(newList);
  }

  function deleteItem() {
    const newList = deleteItemAtIndex(todoList, index);
    setTodoList(newList);
  }

  return (
    <ItemWrapper>
      <input type="checkbox" checked={props.item.isComplete} onChange={toggleItemCompletion} />
      <input type="text" value={props.item.text} onChange={editItemText} />
      <button onClick={deleteItem}>x</button>
    </ItemWrapper>
  );
}
