/** @format */

const Acronym = (name) => {
	return name
		.split(/\s/)
		.reduce((response, word) => (response += word.slice(0, 1)), "");
};
export default Acronym;
