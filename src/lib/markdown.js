const c = string => `\`${string}\``;
const link = (text, href) => `[${text}](${href})`;
const sub = string => `<sub>${string}</sub>`;
const sup = string => `<sup>${string}</sup>`;
const strong = string => `**${string}**`;

export {
	c,
	link,
	sub,
	sup,
	strong,
};
