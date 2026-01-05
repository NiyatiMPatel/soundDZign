import { testimonials } from "../constants/constants";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <h2 className="eyeshadow  position-relative section-title">
          What our students say?
        </h2>
        <div className="row testimoninal-wrapper">
          {testimonials.map(({ id, src, user_name, review }) => (
            <div className="col-12 col-lg-4" key={id}>
              <div className="card h-100 border-0 bg-transparent">
                <div className="row g-0">
                  <div className="col-12 col-md-2 col-lg-12 img-col">
                    <img src={src} alt={user_name} className="rounded" />
                  </div>
                  <div className="col-12 col-md-8 col-lg-12">
                    <div className="card-body">
                      <h5 className="card-title">{user_name}</h5>
                      <p className="card-text">{review}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
