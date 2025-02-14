import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";

import { Select } from "./Select";

SortBy.propTypes = {
  options: PropTypes.array,
};

export function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      type="white"
      value={sortBy}
      onChange={handleChange}
    />
  );
}
