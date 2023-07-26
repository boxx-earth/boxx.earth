import { PartyPopper, ConfettiBall } from './Emojis'

type HistoryItem = {
  id: number;
  content: string;
  date: string;
  datetime: string;
  icon?: React.ElementType;
}

export const history: HistoryItem[] = [
  {
    id: 1,
    content: 'boxx合同会社設立',
    date: '2023年6月',
    datetime: '2023-06-02',
    icon: ConfettiBall,
  },
  {
    id: 2,
    content: 'boxx webサイトを公開',
    date: '2023年7月',
    datetime: '2023-07-31',
    icon: PartyPopper,
  },
  {
    id: 3,
    content: 'boxxアプリをリリース（予定）',
    date: '2023年8月',
    datetime: '2023-08-12',
  },
]
