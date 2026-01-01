import { lazy, Suspense } from "react";

const Hero = lazy(() => import("./sections/Hero"));
const Topics = lazy(() => import("./sections/Topics"));
const Statistics = lazy(() => import("./sections/Statistics"));
const Posts = lazy(() => import("./sections/Posts"));
const Testimonials = lazy(() => import("./sections/Testimonials"));
const Footer = lazy(() => import("./sections/Footer"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
      <Topics />
      <Statistics />
      <Posts />
      <Testimonials />
      <Footer />
    </Suspense>
  );
};

export default App;
