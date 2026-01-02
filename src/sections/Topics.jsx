import { useState } from "react";
import List from "../component/List";
import { topics } from "../constants/constants";
const Topics = () => {
  const [topic, setTopic] = useState(topics[0].src);

  const clickHandler = (item) => {
    setTopic(item.src);
  };

  return (
    <section id="topics">
      <div className="container">
        <h2 className="eyeshadow position-relative section-title">
          What will you learn?
        </h2>
        <div className="row topic-content justify-content-between position-relative">
          <div className="col-12 col-md-5">
            <List
              items={topics}
              className="topics-list"
              renderItem={(item) => item.title}
              clickHandler={clickHandler}
            />
          </div>
          <div className="col-12 col-md-6 d-none d-md-block">
            <img
              className="w-100 topic-image"
              loading="lazy"
              src={topic}
              alt={topic}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topics;
