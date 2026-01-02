// eslint-disable-next-line no-unused-vars
const List = ({ items, className, renderItem, clickHandler, ...props }) => {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item.id} onClick={() => clickHandler(item)}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};

export default List;
