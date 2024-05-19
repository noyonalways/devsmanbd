import PropTypes from "prop-types";

const FeaturedTabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="flex justify-center lg:justify-between flex-wrap space-y-1 md:space-y-0 ">
          {tabs?.map((tab, index) => (
            <button
              key={index}
              className={`font-medium transition-colors duration-200 text-sm md:text-base ${
                activeTab === index
                  ? "btn dark:text-white text-white font-medium text-sm md:text-base"
                  : "text-gray-500 dark:text-gray-400 px-8 py-2"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

FeaturedTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string,
      images: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  activeTab: PropTypes.number.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default FeaturedTabs;
