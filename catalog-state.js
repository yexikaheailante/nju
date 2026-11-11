import {validateConfig} from './service-content.js?v=20261106';

function externalUrl(value) {
  try {
    const url = new URL(value);
    return ['http:', 'https:'].includes(url.protocol) && !url.username && !url.password ? url.href : null;
  } catch {
    return null;
  }
}

export function applyCatalogConfig(catalog, sourceGroups, config) {
  validateConfig(config);
  const hidden = new Set(Array.isArray(config.hidden) ? config.hidden : []);
  const builtIn = new Set(catalog.map(service => service.id));
  const names = new Set(catalog.map(service => service.name));
  const apps = [];
  for (const [id, item] of Object.entries(config.apps || {})) {
    const url = externalUrl(item?.url);
    if (!/^[a-zA-Z0-9_-]{1,100}$/.test(id) || builtIn.has(id) || !url ||
        typeof item.name !== 'string' || names.has(item.name) ||
        typeof item.primary !== 'string' || typeof item.category !== 'string') continue;
    const {name, primary, category} = item;
    names.add(name);
    apps.push({
      id, name, primary, category, placements: [{primary, category}], target: 'service/'+id,
      audiences: Array.isArray(item.audiences) ? item.audiences : [],
      description: config.services[id]?.intro || '', externalUrl: url,
      originalLink: {url}, source: '南京大学图书馆',
    });
  }
  const visible = [...catalog, ...apps].filter(service => !hidden.has(service.id));
  const byId = new Map(visible.map(service => [service.id, service]));
  const order = Array.isArray(config.hallOrder) ? config.hallOrder : [];
  const sorted = [...new Set(order)].map(id => byId.get(id)).filter(Boolean);
  const groups = [...sourceGroups];
  for (const service of apps) {
    if (hidden.has(service.id)) continue;
    const {primary, category: name} = service;
    if (groups.some(group => group.primary === primary && group.name === name)) continue;
    const lastGroup = groups.findLastIndex(group => group.primary === primary);
    groups.splice(lastGroup === -1 ? groups.length : lastGroup + 1, 0, {primary, name, items: []});
  }
  return {catalog: [...sorted, ...visible.filter(service => !sorted.includes(service))], groups, hidden};
}
