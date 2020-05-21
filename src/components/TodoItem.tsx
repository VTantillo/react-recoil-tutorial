import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { todoListState } from 'atoms/todo-list';
import { replaceItemAtIndex, deleteItemAtIndex } from 'utils';

const ItemWrapper = styled.div``;

interface ItemProps {
  item: any;
}
export default function TodoItem(props: ItemProps) {
  const [todoList, setTodoList] = useRecoilState<any[]>(todoListState);
  const index = todoList.findIndex((listItem) => listItem === props.item);

  function editItemText(event: any) {
    const newList = replaceItemAtIndex(todoList, index, {
      ...props.item,
      text: event.target.value,
    });

    setTodoList(newList);
  }

  function toggleItemCompletion() {
    const newList = replaceItemAtIndex(todoList, index, {
      ...props.item,
      isComplete: !props.item.isComplete,
    });

    setTodoList(newList);
  }

  function deleteItem() {
    const newList = deleteItemAtIndex(todoList, index);
    setTodoList(newList);
  }

  return (
    <ItemWrapper>
      <input type="text" value={props.item.text} onChange={editItemText} />
      <input type="checkbox" checked={props.item.isComplete} onChange={toggleItemCompletion} />
      <button onClick={deleteItem}>x</button>
    </ItemWrapper>
  );
}
