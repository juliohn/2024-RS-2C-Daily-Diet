export type ItemListProps = {
  id: string;
  hour: string;
  date: string;
  title: string;
  description: string;
  status: boolean;
};

export type ItemProps = {
  item: ItemListProps;
};

export type DataListItemProps = {
  title: string;
  data: Array<ItemListProps>;
};
