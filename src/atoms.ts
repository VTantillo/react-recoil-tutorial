import { atom, selector } from 'recoil';
import { TodoTask, ListStats } from 'models';

export const todoListState = atom({
  key: 'todoListState',
  default: [] as TodoTask[],
});

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
});

export const filteredTodoListSate = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item: TodoTask) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item: TodoTask) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(filteredTodoListSate);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item: TodoTask) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    } as ListStats;
  },
});
