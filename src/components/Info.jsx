import {} from "react";
import "./index.css";

const Info = () => {
  const infographics = [
    {
      src: "3675421.jpg",
      alt: "Item 1",
      text: "Customer Service",
    },
    {
      src: "rb_17719.png",
      alt: "Item 1",
      text: "Save money",
    },
    {
      src: "rb_2333.png",
      alt: "Item 1",
      text: "Promotion",
    },
    {
      src: "rb_34.png",
      alt: "Item 1",
      text: "On-Time delivery",
    },
  ];

  return (
    <div className="infographics-grid">
      {infographics.map((infographics, index) => (
        <div key={index} className="infographics-item">
          <img src={infographics.src} alt={infographics.alt} />
          <p>{infographics.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Info;
