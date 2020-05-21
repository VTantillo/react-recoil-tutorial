export interface TodoTask {
  id: number;
  text: string;
  isComplete: boolean;
}

export interface ListStats {
  totalNum: number;
  totalCompletedNum: number;
  totalUncompletedNum: number;
  percentCompleted: number;
}
