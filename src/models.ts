export interface TodoList {
  stats: TodoListStats;
  items: TodoItem[];
}

export interface TodoItem {
  id: number;
  text: string;
  isCompleted: boolean;
}

export interface TodoListStats {
  totalItems: number;
  itemsCompleted: number;
  itemsUncompleted: number;
  percentCompleted: number;
}
