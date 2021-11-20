import aplhabetIMG from "../Images/LargeAlphaBet.svg";
import shape from "../Images/Shape.svg";
import stars from "../Images/stars.svg";
import lamp from "../Images/lamp.svg";
import about1img from "../Images/about1img.png";
import about2img from "../Images/about2img.png";
import about3img from "../Images/about3img.png";
import about4img from "../Images/about4img.png";
const navbarItems = [
  "Why",
  "About us",
  "Benefit",
  "Pricing",
  "Testimonial",
  "FAQ"
];

const featureStatistic = [
  {
    count: "8914+",
    description: "Customers"
  },
  {
    count: "150+",
    description: "Toys Education"
  },
  {
    count: "35K+",
    description: "Happy mommy"
  }
];
const possibilities = [
  {
    img: aplhabetIMG,
    color: "#FF7D56",
    title: "Play while Learning",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a risus sit amet justo venenatis rhoncus vel sed dolor. "
  },
  {
    img: shape,
    color: "#B2D93A",
    title: "Designed for Growing brain",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a risus sit amet justo venenatis rhoncus vel sed dolor. "
  },
  {
    img: stars,
    color: "#6ED2EF",
    title: "Created by expert",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a risus sit amet justo venenatis rhoncus vel sed dolor. "
  },
  {
    img: lamp,
    color: "#FDCF3F",
    title: "Building Children's Creativity",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a risus sit amet justo venenatis rhoncus vel sed dolor. "
  }
];
const aboutItems = [
  {
    imgURL: about1img,
    title: "Drawing Printable",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a risus sit amet justo ven."
  },
  {
    imgURL: about2img,
    title: "Crafting Printable",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a risus sit amet justo ven."
  },
  {
    imgURL: about3img,
    title: "Storytelling Printable",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a risus sit amet justo ven."
  },
  {
    imgURL: about4img,
    title: "Reading Printable",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a risus sit amet justo ven."
  }
];
export { navbarItems, featureStatistic, possibilities, aboutItems };
