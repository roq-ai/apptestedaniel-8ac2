const mapping: Record<string, string> = {
  brokerages: 'brokerage',
  properties: 'property',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
