import PropTypes from "prop-types";

Empty.propTypes = {
  resource: PropTypes.string.isRequired,
};

export function Empty({ resource }) {
  return <p>No {resource} could be found.</p>;
}
