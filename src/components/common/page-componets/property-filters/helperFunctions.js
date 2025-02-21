// helperFunctions.js
export const sortProperties = (sortBy, properties) => {
  switch (sortBy) {
    case "latest":
      return properties.slice().sort((a, b) => b.id - a.id).slice(0, 5);
    case "cheapest":
      return properties.filter((property) => property.price >= 300000 && property.price <= 600000);
    case "expensive":
      return properties.filter((property) => property.price > 600000);
    default:
      return properties;
  }
};
