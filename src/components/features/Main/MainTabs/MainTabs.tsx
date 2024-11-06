import MainTabType from "../../../../constants/MainTabType";
import { StyledMainTabs, TabButton } from "./MainTabs.styles";

interface MainTabsProps {
  onTabChange: (type: string) => void;
  activeTab: string;
}

const MainTabs = ({ onTabChange, activeTab }: MainTabsProps) => {
  return (
    <StyledMainTabs>
      {Object.entries(MainTabType).map(([tab, tabLabel]) => (
        <TabButton
          key={tab}
          $isActive={activeTab === tab}
          onClick={() => onTabChange(tab)}
        >
          {tabLabel}
        </TabButton>
      ))}
    </StyledMainTabs>
  );
};

export default MainTabs;
