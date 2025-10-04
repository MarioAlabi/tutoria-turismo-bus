export function recommendRoutesForPlace(placeId, routes) {
  return routes.filter(r => Array.isArray(r.covers) && r.covers.includes(placeId));
}
