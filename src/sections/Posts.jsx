import { posts } from "../constants/constants";

const Posts = () => {
  return (
    <section id="posts">
      <div className="container">
        <h2 className="eyeshadow eyeshadow-yellow position-relative section-title">
          Latest Posts
        </h2>
        <div className="row posts-wrapper">
          {posts.map(({ id, src, title, tag }) => (
            <div className="col-12 col-md-6 col-lg-4 post-column" key={id}>
              <div className="card h-100 position-relative">
                <img
                  src={src}
                  loading="lazy"
                  className="card-img-top"
                  alt={title}
                />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                </div>
                <div className="card-tag">{tag}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-wrapper text-end">
          <button>All Posts</button>
        </div>
      </div>
    </section>
  );
};

export default Posts;
