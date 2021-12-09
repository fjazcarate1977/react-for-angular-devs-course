export enum Methods {
  Delete = 'DELETE',
  Put = 'PUT'
}

export interface MovieProps {
  id: number;
  title: string;
  episode_number: string;
  description: string;
}

export interface MethodProps {
  id: number;
  method: Methods;
}
