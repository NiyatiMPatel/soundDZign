import topic_1 from "../assets/topic-1.png";
import topic_2 from "../assets/topic-2.png";
import topic_3 from "../assets/topic-3.png";
import topic_4 from "../assets/topic-4.png";
import topic_5 from "../assets/topic-5.png";
import topic_6 from "../assets/topic-6.png";
import StudentIcon from "../assets/student-icon.svg?react";
import VideoIcon from "../assets/video-icon.svg?react";
import post_1 from "../assets/blog-1.png";
import post_2 from "../assets/blog-2.png";
import post_3 from "../assets/blog-3.png";
import user_1 from "../assets/user-1.png";
import user_2 from "../assets/user-2.png";
import user_3 from "../assets/user-3.png";
import FbIcon from "../assets/fb-icon.svg?react";
import TwitterIcon from "../assets/twitter-icon.svg?react";
import InstaIcon from "../assets/insta-icon.svg?react";

// NAVBAR MENU START //
export const navLinks = [
 { name: 'About', href: '#hero' },
 { name: 'Course Details', href: '#topics' },
 { name: 'Blog', href: '#posts' },
 { name: 'Testimonials', href: '#testimonials' },
];
// NAVBAR MENU END //

// TOPICS SECTION CONTENT START //
export const topics = [
 {
  id: "topic-1",
  title: "What are frequencies?",
  src: topic_1
 },
 {
  id: "topic-2",
  title: "Using DAW",
  src: topic_2
 },
 {
  id: "topic-3",
  title: "Vocals Processing",
  src: topic_3
 },
 {
  id: "topic-4",
  title: "Mixing",
  src: topic_4
 },
 {
  id: "topic-5",
  title: "Mixing Console",
  src: topic_5
 },
 {
  id: "topic-6",
  title: "Mastering",
  src: topic_6
 },
]
// TOPICS SECTION CONTENT END //

// STATISTICS SECTION CONTENT START //
export const statistics = [
 {
  id: "stats-1",
  Icon: StudentIcon,
  stats_no: "23,000+",
  stats_title: "Students"
 },
 {
  id: "stats-2",
  Icon: VideoIcon,
  stats_no: "26Hrs",
  stats_title: "Video Content"
 }
]
// STATISTICS SECTION CONTENT END //

// POSTS SECTION CONTENT START //
export const posts = [
 {
  id: "post-1",
  src: post_1,
  title: "How To Use Drum Machine in Logic Pro X",
  tag: "DAW"
 },
 {
  id: "post-2",
  src: post_2,
  title: "How To Mix Guitars Effectively",
  tag: "Mixing"
 },
 {
  id: "post-3",
  src: post_3,
  title: "The Real Power of Harmonies in Music Production",
  tag: "Vox"
 },
]
// POSTS SECTION CONTENT END //

// TESTIMONIAL SECTION CONTENT START //
export const testimonials = [
 {
  id: "testimonial-1",
  user_name: "Peter Adaams",
  review: "This is a great course. I got to learn a lot.",
  src: user_1,
 },
 {
  id: "testimonial-2",
  user_name: "Robert Fox",
  review: "I got to learn a lot about Music Production with this course. Thanks :)",
  src: user_2,
 },
 {
  id: "testimonial-3",
  user_name: "Emily Smith",
  review: "Awesome! Great job!!",
  src: user_3,
 },
]
// TESTIMONIAL SECTION CONTENT END //

// SOCIAL MEDIA START //
export const social_media = [
 {
  id: "facebook",
  Icon: FbIcon,
  link: "#",
 },
 {
  id: "twitter",
  Icon: TwitterIcon,
  link: "#",
 },
 {
  id: "instagram",
  Icon: InstaIcon,
  link: "#",
 },
]
// SOCIAL MEDIA END //

// FOOTER LINKS START //
export const footer_data = {
 quickLinks: [
  { id: 'blog', label: 'Blog', href: '#' },
  { id: 'privacy', label: 'Privacy Policy', href: '#' },
 ],
 contacts: [
  { id: 'email', label: 'contact@email.com', href: 'mailto:contact@email.com' },
  { id: 'phone', label: '+1 999 999 999', href: 'tel:+19999999999' },
 ]
};
// FOOTER LINKS END //