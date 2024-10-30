import MainTabType from "../../../../constants/MainTabType";
import { StyledMainTabs, TabButton } from "./MainTabs.styles";
import { useTabStore } from "../../../../store/useMainFilterStore";

const MainTabs = () => {
  const { selectedTab, setSelectedTab } = useTabStore();

  return (
    <StyledMainTabs>
      {Object.entries(MainTabType).map(([tab, tabLabel]) => (
        <TabButton
          key={tab}
          isActive={selectedTab === tab}
          onClick={() => setSelectedTab(tab)}
        >
          {tabLabel}
        </TabButton>
      ))}
    </StyledMainTabs>
  );
};

export default MainTabs;
