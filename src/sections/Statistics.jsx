import { statistics } from "../constants/constants";
const Statistics = () => {
  return (
    <section id="statistics">
      <div className="container">
        <div className="row justify-content-around align-items-center stats-content position-relative">
          {/* eslint-disable-next-line no-unused-vars */}
          {statistics.map(({ id, Icon, stats_no, stats_title }) => (
            <div
              className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center"
              key={id}
            >
              <Icon width={100} height={100} />
              <h2 className="stats_count">{stats_no}</h2>
              <p className="stats_title">{stats_title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
