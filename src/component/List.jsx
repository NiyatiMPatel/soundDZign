const List = ({ items, className, renderItem, ...props }) => {
  return (
    <ul className={className} {...props}>
      {items.map((item) => (
        <li key={item.id}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};

export default List;
