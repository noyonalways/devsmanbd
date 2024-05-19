import { useState } from "react";
import FeaturedTabs from "./featured-tab";

const tabs = [
  {
    title: "ALL",
    content: "Content of ALL",
    images: [
      "https://via.placeholder.com/350x350?text=all1",
      "https://via.placeholder.com/350x350?text=all2",
      "https://via.placeholder.com/350x350?text=all3",
    ],
  },
  {
    title: "DESIGN",
    content: "Content of DESIGN",
    images: [
      "https://via.placeholder.com/350x350?text=design1",
      "https://via.placeholder.com/350x350?text=design2",
      "https://via.placeholder.com/350x350?text=design3",
    ],
  },
  {
    title: "DEVELOPMENT",
    content: "Content of DEVELOPMENT",
    images: [
      "https://via.placeholder.com/350x350?text=development1",
      "https://via.placeholder.com/350x350?text=development2",
      "https://via.placeholder.com/350x350?text=development3",
    ],
  },
  {
    title: "UI/UX",
    content: "Content of UI/UX",
    images: [
      "https://via.placeholder.com/350x350?text=ui/ux1",
      "https://via.placeholder.com/350x350?text=ui/ux2",
      "https://via.placeholder.com/350x350?text=ui/ux3",
    ],
  },
  {
    title: "GRAPHICS",
    content: "Content of GRAPHICS",
    images: [
      "https://via.placeholder.com/350x350?text=graphics1",
      "https://via.placeholder.com/350x350?text=graphics2",
      "https://via.placeholder.com/350x350?text=graphics3",
    ],
  },
  {
    title: "MARKETING",
    content: "Content of MARKETING",
    images: [
      "https://via.placeholder.com/350x350?text=marketing1",
      "https://via.placeholder.com/350x350?text=marketing2",
      "https://via.placeholder.com/350x350?text=marketing3",
    ],
  },
  {
    title: "SEO",
    content: "Content of SEO",
    images: [
      "https://via.placeholder.com/350x350?text=seo1",
      "https://via.placeholder.com/350x350?text=seo2",
      "https://via.placeholder.com/350x350?text=seo3",
    ],
  },
];

const Featured = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeImages = tabs[activeTab].images;

  return (
    <section>
      <FeaturedTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-3 py-3 gap-3">
          {activeImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`image ${index}`}
              className="w-full h-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
