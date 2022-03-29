export type User = {
  id: number;
  name: string;
  email: string; 
  address: {
    city: string;
  }
};
export type ITodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}