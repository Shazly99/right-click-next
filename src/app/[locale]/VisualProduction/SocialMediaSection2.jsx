import React from "react";
 
const SocialMediaSection2 = () => {
  const sections = [
    {
      title: "Motion Video Production",
      items: [
        "Dynamic Visual Content: Create eye-catching animations and graphics that captivate your audience.",
        "Perfect for Digital Campaigns: Enhance your brand’s visibility on social media, presentations, and websites.",
        "Make a Memorable Impact: Stand out with impactful visuals in a fast-paced digital world.",
      ],
    },
    {
      title: "Reels Production",
      items: [
        "Create Social Media-Friendly Content: Craft short, engaging videos tailored for platforms like Instagram.",
        "Showcase Products and Moments: Connect with a digital-savvy audience and highlight your brand personality.",
        "Boost Brand Visibility: Keep your brand in the spotlight with a modern touch to your online presence.",
      ],
    },
    {
      title: "Graphic Design for Video",
      items: [
        "Enhance Video Appeal: Our graphic design team creates polished elements like branded title screens, overlays, and animations.",
        "Maintain Brand Consistency: Custom-designed graphics that match your brand’s image for a cohesive appearance.",
        "Add a Professional Touch: High-quality graphics make your videos more effective and visually appealing.",
      ],
    },
  ];

  return (
    <div className="social-media-section">
      {sections.map((section, index) => (
        <div key={index} className="card">
          <h3>{section.title}</h3>
          <ul>
            {section.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaSection2;
