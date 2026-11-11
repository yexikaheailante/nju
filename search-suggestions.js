import {hanInitials} from './han-initials.js?v=20261106';

const aliases = {
  '数据库导航': ['数据库', '电子资源', 'database', 'db'],
  '馆藏搜索': ['找书', '查书', 'opac'],
  '馆际互借与文献传递': ['馆际借书', '馆际互借', '文献传递', '借外校书'],
  '图书续借': ['续借', '续期'],
  '江苏省高校智盟卡': ['高校智盟卡', '智盟卡', 'jalis'],
  '研讨间预约（校内IP）': ['研讨间', '讨论室预约'],
  '科技查新/查收查引': ['查新', '查收查引', '论文查引'],
};

const normalize = value => String(value ?? '').normalize('NFKC').trim().toLowerCase();

function initials(value) {
  return [...value].map(char => {
    const offset = char.codePointAt(0) - 0x4e00;
    return hanInitials[offset] ?? (/^[a-z0-9]$/.test(char) ? char : '');
  }).join('');
}

function textRank(value, query) {
  const text = normalize(value);
  if (text === query) return 0;
  if (text.startsWith(query)) return 1;
  if (/[\p{Script=Han}]/u.test(query)) return text.includes(query) ? 3 : Infinity;
  if (/^[a-z]+$/.test(query)) {
    if (initials(text).startsWith(query)) return 2;
    if (query.length>1 && text.match(/[a-z0-9]+/g)?.some(word=>word.startsWith(query))) return 2;
  }
  return Infinity;
}

function suggestions(items, title, rank) {
  return [...new Set(items.map(item => ({name: title(item), rank: rank(item)}))
    .filter(item => Number.isFinite(item.rank)).sort((a, b) => a.rank - b.rank)
    .map(item => item.name))].slice(0, 5);
}

export function serviceMatchRank(item, query) {
  const needle = normalize(query);
  if (!needle) return Infinity;
  const alternativeNames = Object.hasOwn(aliases, item.name) ? aliases[item.name] : [];
  return Math.min(textRank(item.name, needle), ...alternativeNames.map(alias => textRank(alias, needle) + 0.5));
}

export function serviceSuggestions(items, query) {
  return suggestions(items, item => item.name, item => serviceMatchRank(item, query));
}

export function resourceSuggestions(items, query) {
  const needle = normalize(query);
  if (!needle) return [];
  return suggestions(items, item => item.title, item => {
    const ids = [item.isbn, item.doi, item.arxivId].filter(Boolean);
    return Math.min(textRank(item.title, needle), textRank(item.author, needle) + 0.5,
      ...ids.map(id => normalize(id).startsWith(needle) ? 1 : Infinity));
  });
}
