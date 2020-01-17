import PropTypes from "prop-types";
import { languagePrecedence } from "../store/display/selectors";

export const languageProps = PropTypes.shape(languagePrecedence.reduce((props, language) => (props[language] = PropTypes.string), {}));

export const stringOrLanguageProps = PropTypes.oneOfType([
  PropTypes.string,
  languageProps
]);

export const linkProps = PropTypes.shape({
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
});
