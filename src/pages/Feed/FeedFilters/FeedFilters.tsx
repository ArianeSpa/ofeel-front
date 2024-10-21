// == Import: lcoal
import { Button, Flex } from "@/components";
import { ObjectOf } from "@/utils/common";
import {
  FeedFilterButton,
  FeedFiltersEnum,
} from "../FeedFilterButton/FeedFilterButton";
import { useWindowSize } from "@/hooks/window.hook";

type FeedFiltersProps = {
  hasOneFilter: boolean;
  selectedFilters: ObjectOf<boolean>;
  handleSelectedFilters: (value: FeedFiltersEnum) => void;
  resetFilters: () => void;
};
export const FeedFilters: React.FC<FeedFiltersProps> = ({
  hasOneFilter,
  selectedFilters,
  handleSelectedFilters,
  resetFilters,
}) => {
  const { isSmartphone } = useWindowSize();
  return (
    <Flex gap={4} justifyContent="flex-end">
      {hasOneFilter && (
        <Button onClick={resetFilters}>
          {isSmartphone ? "Effacer" : "Effacer les filtres"}
        </Button>
      )}
      {Object.values(FeedFiltersEnum).map((filter) => (
        <FeedFilterButton
          key={filter}
          selectedFilters={selectedFilters}
          value={filter}
          onClick={handleSelectedFilters}
        />
      ))}
    </Flex>
  );
};
