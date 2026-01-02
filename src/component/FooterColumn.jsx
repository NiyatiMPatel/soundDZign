import List from "./List";

const FooterColumn = ({ title, items, renderItem }) => (
  <div className="col-12 col-md-3">
    <h6 className="footer-title">{title}</h6>
    <List items={items} className="footer-list" renderItem={renderItem} />
  </div>
);
export default FooterColumn;
