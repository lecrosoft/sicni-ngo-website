import { useState } from "react";
import { StyledParagraph } from "../GeneralStyles/Headings/Headings.styles";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: "Our Vision",
      content:
        "To create a transformative platform for developing exceptional African leaders who are capable of fostering growth, equity, and sustainable development across the continent.",
    },
    {
      id: 1,
      label: "Our Mission",
      content:
        "To identify and empower credible and committed Africans by providing them with the necessary skills, exposure, and opportunities to assume leadership positions for the benefit of their communities and nations.",
    },

    { id: 2, label: "Excellence", content: "This is the content for Tab 3." },
  ];

  return (
    <div className="w-full mx-auto mt-10">
      {/* Tabs Header */}
      <div className="flex pb-4 border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-1/3 py-2 text-center font-medium transition-all duration-300 
              ${
                activeTab === tab.id
                  ? "  bg-secondary text-white rounded-[2rem]"
                  : "text-gray-500 hover:text-blue-500"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-2">
        <StyledParagraph>{tabs[activeTab].content}</StyledParagraph>
      </div>
    </div>
  );
};

export default TabComponent;
