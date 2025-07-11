export interface Transaction {
  id: string;
  userId: string;
  fundId: number;
  amount: number;
  type: 'SUBSCRIBE' | 'CANCEL';
  date: string;
}
