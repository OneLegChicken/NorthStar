const icons = {
  panel: '<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M9 4v16M14 8h3M14 12h3"/>',
  chevrons: '<path d="m8 9 4-4 4 4M8 15l4 4 4-4"/>',
  'chevron-down': '<path d="m7 10 5 5 5-5"/>',
  grid: '<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/>',
  server: '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01M11 7.5h6M11 16.5h6"/>',
  route: '<circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.5 6H14a4 4 0 0 1 4 4v5.5M15.5 18H10a4 4 0 0 1-4-4V8.5"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M9.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM17 3.2a4 4 0 0 1 0 7.7M21 21v-2a4 4 0 0 0-3-3.9"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/>',
  briefcase: '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/>',
  radio: '<circle cx="12" cy="12" r="2.5"/><path d="M5.5 5.5a9.2 9.2 0 0 0 0 13M18.5 5.5a9.2 9.2 0 0 1 0 13M2.5 2.5a13.5 13.5 0 0 0 0 19M21.5 2.5a13.5 13.5 0 0 1 0 19"/>',
  copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
  shuffle: '<path d="m18 14 4 4-4 4M18 2l4 4-4 4M2 18h2.5a6 6 0 0 0 4.6-2.2l5.8-7.6A6 6 0 0 1 19.5 6H22M2 6h2.5a6 6 0 0 1 4.6 2.2l1 1.3M14 14.5l1.5 1.9a6 6 0 0 0 4 1.6H22"/>',
  chart: '<path d="M3 3v18h18M7 14l4-4 4 3 6-7"/><path d="M17 6h4v4"/>',
  activity: '<path d="M3 12h4l3-8 4 16 3-8h4"/>',
  archive: '<rect x="3" y="4" width="18" height="5" rx="1.5"/><path d="M5 9v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9M10 13h4"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8.3 8.3 0 0 1-1.6.9l-.3 1.8h-2.8l-.3-1.8a8.3 8.3 0 0 1-1.6-.9l-1.7.7-1.4-2.4 1.4-1.1a7 7 0 0 1 0-1.9l-1.4-1.1 1.4-2.4 1.7.7a8.3 8.3 0 0 1 1.6-.9l.3-1.8h2.8l.3 1.8a8.3 8.3 0 0 1 1.6.9l1.7-.7 1.4 2.4-1.4 1.1a7 7 0 0 1 0 1.9Z" transform="translate(-1 -1) scale(1.08)"/>',
  search: '<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.5 4.5"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4"/>',
  moon: '<path d="M20.8 14.2A8.5 8.5 0 0 1 9.8 3.2 8.8 8.8 0 1 0 20.8 14.2Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  more: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  alert: '<path d="M10.3 3.8 2.5 17.3A2 2 0 0 0 4.2 20h15.6a2 2 0 0 0 1.7-2.7L13.7 3.8a2 2 0 0 0-3.4 0ZM12 9v4m0 3h.01"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 1 1 8 0v3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  cpu: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 9h6v6H9zM9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4"/>',
  database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
  refresh: '<path d="M20 7v5h-5M4 17v-5h5"/><path d="M5.6 9a7 7 0 0 1 11.6-2L20 12M4 12l2.8 5a7 7 0 0 0 11.6-2"/>',
  close: '<path d="m18 6-12 12M6 6l12 12"/>',
  filter: '<path d="M4 6h16M7 12h10m-7 6h4"/>',
  external: '<path d="M14 3h7v7M10 14 21 3"/><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/>',
  key: '<circle cx="8" cy="15" r="4"/><path d="m10.8 12.2 8-8 2 2-2 2 2 2-2 2-2-2-3.2 3.2"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  wallet: '<rect x="3" y="5" width="18" height="15" rx="2"/><path d="M3 8h18M16 14h.01M6 5V3h12v2"/>',
  moreCircle: '<circle cx="12" cy="12" r="9"/><path d="M8 12h.01M12 12h.01M16 12h.01"/>',
};

const icon = (name, className = '') => `<span class="icon ${className}" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${icons[name] || icons.grid}</svg></span>`;
document.querySelectorAll('[data-icon]').forEach((node) => { node.innerHTML = icon(node.dataset.icon).replace(/^<span[^>]*>|<\/span>$/g, ''); });

const state = {
  view: 'overview',
  period: '24h',
  query: '',
  theme: (()=>{try{return localStorage.getItem('northstar-theme')||'light';}catch{return 'light';}})(),
  nodes: [
    { id: 'node-1', name: 'frankfurt-01', region: 'Frankfurt, DE', ip: '185.218.124.16', status: 'Online', load: 41, traffic: '3.8 TB', users: 1428, latency: '24 ms', uptime: '32d 06h', version: 'v1.8.4', flag: '🇩🇪' },
    { id: 'node-2', name: 'amsterdam-01', region: 'Amsterdam, NL', ip: '45.92.12.104', status: 'Online', load: 68, traffic: '2.9 TB', users: 1102, latency: '31 ms', uptime: '18d 11h', version: 'v1.8.4', flag: '🇳🇱' },
    { id: 'node-3', name: 'singapore-01', region: 'Singapore, SG', ip: '103.156.72.9', status: 'Online', load: 57, traffic: '2.1 TB', users: 904, latency: '86 ms', uptime: '12d 03h', version: 'v1.8.3', flag: '🇸🇬' },
    { id: 'node-4', name: 'london-01', region: 'London, UK', ip: '89.34.96.201', status: 'Degraded', load: 83, traffic: '1.7 TB', users: 681, latency: '48 ms', uptime: '9d 15h', version: 'v1.8.4', flag: '🇬🇧' },
    { id: 'node-5', name: 'toronto-01', region: 'Toronto, CA', ip: '192.99.14.82', status: 'Online', load: 36, traffic: '1.4 TB', users: 602, latency: '62 ms', uptime: '25d 02h', version: 'v1.8.4', flag: '🇨🇦' },
    { id: 'node-6', name: 'tokyo-01', region: 'Tokyo, JP', ip: '103.23.44.81', status: 'Online', load: 49, traffic: '1.2 TB', users: 518, latency: '92 ms', uptime: '7d 20h', version: 'v1.8.4', flag: '🇯🇵' },
    { id: 'node-7', name: 'new-york-02', region: 'New York, US', ip: '66.42.78.214', status: 'Offline', load: 0, traffic: '846 GB', users: 445, latency: '—', uptime: '—', version: 'v1.8.2', flag: '🇺🇸' },
    { id: 'node-8', name: 'stockholm-01', region: 'Stockholm, SE', ip: '185.42.12.74', status: 'Online', load: 61, traffic: '1.1 TB', users: 394, latency: '38 ms', uptime: '19d 08h', version: 'v1.8.4', flag: '🇸🇪' },
    { id: 'node-9', name: 'paris-01', region: 'Paris, FR', ip: '51.158.32.90', status: 'Online', load: 44, traffic: '998 GB', users: 360, latency: '27 ms', uptime: '16d 17h', version: 'v1.8.4', flag: '🇫🇷' },
    { id: 'node-10', name: 'warsaw-01', region: 'Warsaw, PL', ip: '91.211.88.31', status: 'Online', load: 52, traffic: '913 GB', users: 328, latency: '36 ms', uptime: '22d 01h', version: 'v1.8.4', flag: '🇵🇱' },
    { id: 'node-11', name: 'istanbul-01', region: 'Istanbul, TR', ip: '185.87.68.20', status: 'Online', load: 72, traffic: '882 GB', users: 301, latency: '57 ms', uptime: '11d 04h', version: 'v1.8.4', flag: '🇹🇷' },
    { id: 'node-12', name: 'sydney-01', region: 'Sydney, AU', ip: '103.152.88.19', status: 'Online', load: 47, traffic: '810 GB', users: 284, latency: '119 ms', uptime: '14d 22h', version: 'v1.8.3', flag: '🇦🇺' },
    { id: 'node-13', name: 'dallas-01', region: 'Dallas, US', ip: '45.77.91.26', status: 'Online', load: 33, traffic: '792 GB', users: 263, latency: '71 ms', uptime: '20d 12h', version: 'v1.8.4', flag: '🇺🇸' },
    { id: 'node-14', name: 'mumbai-01', region: 'Mumbai, IN', ip: '103.12.88.114', status: 'Online', load: 69, traffic: '746 GB', users: 241, latency: '103 ms', uptime: '8d 02h', version: 'v1.8.4', flag: '🇮🇳' },
    { id: 'node-15', name: 'los-angeles-01', region: 'Los Angeles, US', ip: '45.32.72.118', status: 'Offline', load: 0, traffic: '642 GB', users: 216, latency: '—', uptime: '—', version: 'v1.8.3', flag: '🇺🇸' },
  ],
  users: [
    { id: 'u-1', name: 'Sarah Chen', email: 'sarah.chen@example.com', plan: 'Pro · 500 GB', node: 'frankfurt-01', usage: '386 GB', quota: '500 GB', status: 'Active', expires: 'Nov 18, 2026', initials: 'SC', color: 'purple' },
    { id: 'u-2', name: 'Mateo Silva', email: 'mateo.silva@example.com', plan: 'Starter · 150 GB', node: 'amsterdam-01', usage: '124 GB', quota: '150 GB', status: 'Active', expires: 'Nov 22, 2026', initials: 'MS', color: 'coral' },
    { id: 'u-3', name: 'Priya Kapoor', email: 'priya.k@example.com', plan: 'Pro · 500 GB', node: 'singapore-01', usage: '301 GB', quota: '500 GB', status: 'Active', expires: 'Dec 01, 2026', initials: 'PK', color: 'blue' },
    { id: 'u-4', name: 'Noah Williams', email: 'noah.w@example.com', plan: 'Business · 1 TB', node: 'london-01', usage: '892 GB', quota: '1 TB', status: 'Expiring', expires: 'Nov 02, 2026', initials: 'NW', color: 'green' },
    { id: 'u-5', name: 'Emma Laurent', email: 'emma.l@example.com', plan: 'Pro · 500 GB', node: 'frankfurt-01', usage: '244 GB', quota: '500 GB', status: 'Active', expires: 'Dec 09, 2026', initials: 'EL', color: 'purple' },
    { id: 'u-6', name: 'Omar Hassan', email: 'omar.h@example.com', plan: 'Starter · 150 GB', node: 'toronto-01', usage: '83 GB', quota: '150 GB', status: 'Active', expires: 'Dec 12, 2026', initials: 'OH', color: 'blue' },
  ],
  inbounds: [
    { id: 'ib-1', name: 'VLESS · Reality', protocol: 'VLESS / REALITY', port: '443', nodes: '12 nodes', users: '5,108', status: 'Online' },
    { id: 'ib-2', name: 'Hysteria 2', protocol: 'HYSTERIA2', port: '8443', nodes: '8 nodes', users: '2,406', status: 'Online' },
    { id: 'ib-3', name: 'Shadowsocks', protocol: 'SHADOWSOCKS', port: '8388', nodes: '6 nodes', users: '1,982', status: 'Online' },
    { id: 'ib-4', name: 'WireGuard', protocol: 'WIREGUARD', port: '51820', nodes: '4 nodes', users: '834', status: 'Online' },
    { id: 'ib-5', name: 'Trojan · TLS', protocol: 'TROJAN', port: '2053', nodes: '3 nodes', users: '417', status: 'Degraded' },
  ],
  plans: [
    { id: 'p-1', name: 'Starter', quota: '150 GB / month', devices: '3 devices', users: '2,840', period: '30 days', status: 'Active' },
    { id: 'p-2', name: 'Pro', quota: '500 GB / month', devices: '8 devices', users: '2,160', period: '30 days', status: 'Active' },
    { id: 'p-3', name: 'Business', quota: '1 TB / month', devices: '20 devices', users: '814', period: '30 days', status: 'Active' },
    { id: 'p-4', name: 'Legacy Unlimited', quota: 'Unlimited', devices: '5 devices', users: '186', period: '30 days', status: 'Paused' },
  ],
  tunnels: [
    { id: 't-1', name: 'eu-west → eu-central', route: 'Amsterdam → Frankfurt', latency: '18 ms', traffic: '1.2 TB', status: 'Online' },
    { id: 't-2', name: 'apac-relay-01', route: 'Tokyo → Singapore', latency: '43 ms', traffic: '624 GB', status: 'Online' },
    { id: 't-3', name: 'north-america-01', route: 'Toronto → New York', latency: '—', traffic: '218 GB', status: 'Offline' },
  ],
  resellers: [
    { id: 'r-1', name: 'Cloudwave Partners', email: 'ops@cloudwave.io', users: '418', used: '68%', status: 'Active' },
    { id: 'r-2', name: 'Northbridge Digital', email: 'team@northbridge.dev', users: '266', used: '52%', status: 'Active' },
    { id: 'r-3', name: 'Orbit Networks', email: 'support@orbitnet.co', users: '184', used: '92%', status: 'Review' },
  ],
  templates: [
    { id: 'tp-1', name: 'VLESS Reality · Default', protocol: 'VLESS / REALITY', inbound: 'VLESS · Reality', nodes: '12 nodes', users: '4,920', status: 'Active' },
    { id: 'tp-2', name: 'Hysteria · Low latency', protocol: 'HYSTERIA2', inbound: 'Hysteria 2', nodes: '8 nodes', users: '2,406', status: 'Active' },
    { id: 'tp-3', name: 'Shadowsocks · Legacy', protocol: 'SHADOWSOCKS', inbound: 'Shadowsocks', nodes: '6 nodes', users: '1,982', status: 'Active' },
  ],
  routing: [
    { id: 'rt-1', name: 'Direct domestic traffic', rules: '12 rules', match: 'geoip:private, local domains', outbound: 'DIRECT', status: 'Active' },
    { id: 'rt-2', name: 'Block known trackers', rules: '8 rules', match: 'category:tracking', outbound: 'BLOCK', status: 'Active' },
    { id: 'rt-3', name: 'Default route', rules: '1 rule', match: 'match all', outbound: 'PROXY', status: 'Active' },
  ],
  backups: [
    { id: 'backup-1', name: 'backup-2026-10-31-0200', date: 'Today, 02:00 AM', size: '124.8 MB', type: 'Scheduled' },
    { id: 'backup-2', name: 'backup-2026-10-30-0200', date: 'Oct 30, 02:00 AM', size: '124.2 MB', type: 'Scheduled' },
    { id: 'backup-3', name: 'backup-2026-10-29-0200', date: 'Oct 29, 02:00 AM', size: '123.9 MB', type: 'Scheduled' },
    { id: 'backup-4', name: 'backup-before-restore', date: 'Oct 27, 11:42 AM', size: '122.4 MB', type: 'Pre-restore' },
  ],
};

const config = {
  nodes: { title: 'Nodes', crumb: 'Nodes', desc: 'Manage the servers that make up your fleet.', action: 'Add node', actionType: 'node', entity: 'nodes', stats: [['Total nodes', '15', 'Across 9 regions'], ['Connected', '13', '86.7% availability'], ['Avg. CPU load', '55%', 'Across connected nodes'], ['Traffic today', '28.3 TB', '↑ 8.4% vs. yesterday']], columns: [['name','Node'],['region','Region'],['ip','Public address'],['status','Status'],['load','CPU load'],['traffic','Traffic'],['users','Users']] },
  users: { title: 'Users', crumb: 'Users', desc: 'Accounts, access limits and subscription status.', action: 'New user', actionType: 'user', entity: 'users', stats: [['Total users','6,120','All accounts'],['Active','6,000','98% of users'],['Online now','5,014','Seen in last 90 sec'],['Expiring soon','42','Within 7 days']], columns: [['name','User'],['email','Email'],['plan','Plan'],['node','Home node'],['usage','Usage'],['status','Status'],['expires','Expires']] },
  inbounds: { title: 'Inbounds', crumb: 'Inbounds', desc: 'Protocols and entry points available across your nodes.', action: 'Add inbound', actionType: 'inbound', entity: 'inbounds', stats: [['Configured','6','Across your fleet'],['Healthy','5','One needs attention'],['Connected users','10.7k','Across all protocols'],['Templates','3','Reusable configs']], columns: [['name','Inbound'],['protocol','Protocol'],['port','Port'],['nodes','Nodes'],['users','Users'],['status','Status']] },
  plans: { title: 'Plans', crumb: 'Plans', desc: 'Set usage, device and time limits for customer accounts.', action: 'Create plan', actionType: 'plan', entity: 'plans', stats: [['Plans','4','3 active'],['Subscribers','6,000','Across all plans'],['Monthly recurring','$18,420','Sample estimate'],['Renewals this week','126','Next 7 days']], columns: [['name','Plan'],['quota','Data allowance'],['devices','Devices'],['period','Billing cycle'],['users','Subscribers'],['status','Status']] },
  tunnels: { title: 'Tunnels', crumb: 'Tunnels', desc: 'Private routes between relay and origin nodes.', action: 'Create tunnel', actionType: 'tunnel', entity: 'tunnels', stats: [['Configured','4','Across 3 regions'],['Online','3','One route is offline'],['Median latency','31 ms','Across healthy tunnels'],['Traffic today','2.1 TB','Tunnelled traffic']], columns: [['name','Tunnel'],['route','Route'],['latency','Latency'],['traffic','Traffic'],['status','Status']] },
  resellers: { title: 'Resellers', crumb: 'Resellers', desc: 'Partner accounts and their customer allocation.', action: 'Add reseller', actionType: 'reseller', entity: 'resellers', stats: [['Partners','12','2 pending review'],['Managed users','2,184','36% of all users'],['Capacity used','64%','Across active partners'],['Revenue this month','$6,940','Sample estimate']], columns: [['name','Partner'],['email','Contact'],['users','Managed users'],['used','Capacity used'],['status','Status']] },
  templates: { title: 'Templates', crumb: 'Templates', desc: 'Reusable node configurations for protocols and routing.', action: 'New template', actionType: 'template', entity: 'templates', stats: [['Templates','3','Ready to deploy'],['Nodes using them','15','Across all regions'],['Users covered','9,308','Across all configs'],['Pending changes','0','Everything is synced']], columns: [['name','Template'],['protocol','Protocol'],['inbound','Inbound'],['nodes','Nodes'],['users','Users'],['status','Status']] },
  routing: { title: 'Routing', crumb: 'Routing', desc: 'Rules that direct traffic to the right outbound.', action: 'Add rule', actionType: 'routing', entity: 'routing', stats: [['Rule sets','3','Applied fleet-wide'],['Rules','21','Across active sets'],['Blocked today','18.2k','Known trackers'],['Sync status','Synced','All nodes up to date']], columns: [['name','Rule set'],['rules','Rules'],['match','Match'],['outbound','Outbound'],['status','Status']] },
};

const contentArea = document.getElementById('contentArea');
const overlayRoot = document.getElementById('overlayRoot');
const toastRegion = document.getElementById('toastRegion');
const periodPoints = {
  '24h': { labels: ['00:00','04:00','08:00','12:00','16:00','20:00','Now'], a: [28,36,31,54,48,78,71], b: [18,22,20,33,37,46,42], caption: 'Last 24 hours' },
  '7d': { labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], a: [35,42,39,62,56,77,71], b: [18,28,23,35,31,49,42], caption: 'Last 7 days' },
  '30d': { labels: ['Oct 1','Oct 6','Oct 11','Oct 16','Oct 21','Oct 26','Today'], a: [23,36,32,50,48,74,71], b: [14,18,22,29,26,39,42], caption: 'Last 30 days' },
};

function statusPill(value) {
  const map = { Online:'online', Active:'online', Synced:'online', Degraded:'warning', Expiring:'warning', Review:'warning', Offline:'offline', Paused:'neutral' };
  return `<span class="status-pill status-${map[value] || 'neutral'}">${value}</span>`;
}
function initials(name) { return name.split(/[\s-]+/).slice(0,2).map(s => s[0]).join('').toUpperCase(); }
function formatCell(row, key) {
  const value = row[key] ?? '—';
  if (key === 'name' && row.region) return `<div class="table-person"><span class="mini-avatar ${row.status==='Offline'?'coral':''}">${row.flag || initials(String(value))}</span><div><div class="table-primary">${value}</div><div class="table-secondary">${row.region}</div></div></div>`;
  if (key === 'name' && row.email) return `<div class="table-person"><span class="mini-avatar ${row.color || ''}">${row.initials || initials(String(value))}</span><div><div class="table-primary">${value}</div><div class="table-secondary">${row.email}</div></div></div>`;
  if (key === 'name' && row.protocol) return `<div><div class="table-primary">${value}</div><div class="table-secondary">${row.protocol}</div></div>`;
  if (key === 'name' && row.route) return `<div><div class="table-primary">${value}</div><div class="table-secondary">${row.route}</div></div>`;
  if (key === 'status') return statusPill(String(value));
  if (key === 'load') {
    const fill = Number(value) > 80 ? 'var(--orange)' : 'var(--accent)';
    return `<div class="table-load"><span>${value}%</span><div class="mini-track"><span style="width:${value}%;background:${fill}"></span></div></div>`;
  }
  if (key === 'used') return `<span>${value}</span>`;
  if (key === 'email') return `<span class="muted">${value}</span>`;
  return `<span>${value}</span>`;
}
function tableMarkup(rows, columns, tableId) {
  const safeRows = rows.map(row => `<tr data-row-id="${row.id}" data-status="${row.status || ''}" data-search="${Object.values(row).join(' ').toLowerCase()}">${columns.map(([key]) => `<td>${formatCell(row,key)}</td>`).join('')}<td class="action-cell"><button class="table-action" data-row-detail="${row.id}" data-entity="${tableId}" aria-label="Open ${String(row.name || row.email || tableId)} details">${icon('more')}</button></td></tr>`).join('');
  return `<div class="data-table-wrap"><table><thead><tr>${columns.map(([,label]) => `<th>${label}</th>`).join('')}<th aria-label="Actions"></th></tr></thead><tbody>${safeRows}<tr class="filtered-empty" hidden><td colspan="${columns.length+1}" class="table-empty">No matching records found.</td></tr></tbody></table></div>`;
}
function metricCard(label,value,sub,iconName,tone='') {
  return `<article class="metric-card"><div class="metric-top"><span class="metric-label">${label}</span><span class="metric-icon ${tone}">${icon(iconName)}</span></div><div class="metric-value">${value}</div><div class="metric-foot">${sub}</div></article>`;
}
function pointPath(points, x0=38, y0=18, w=620, h=116) {
  return points.map((v,i)=>`${i?'L':'M'} ${(x0+i*w/(points.length-1)).toFixed(1)} ${(y0+h-v*h/100).toFixed(1)}`).join(' ');
}
function makeChart(period='24h', showSecondary=true) {
  const s = periodPoints[period] || periodPoints['24h'];
  const path = pointPath(s.a);
  const area = `${path} L 658 134 L 38 134 Z`;
  const second = pointPath(s.b);
  return `<div class="chart-wrap"><svg viewBox="0 0 680 164" role="img" aria-label="Traffic trend over ${s.caption.toLowerCase()}"><defs><linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#7166ef" stop-opacity=".17"/><stop offset="1" stop-color="#7166ef" stop-opacity="0"/></linearGradient></defs><line class="chart-grid-line" x1="38" y1="18" x2="658" y2="18"/><line class="chart-grid-line" x1="38" y1="47" x2="658" y2="47"/><line class="chart-grid-line" x1="38" y1="76" x2="658" y2="76"/><line class="chart-grid-line" x1="38" y1="105" x2="658" y2="105"/><text class="chart-label" x="2" y="21">80 MB/s</text><text class="chart-label" x="2" y="50">60 MB/s</text><text class="chart-label" x="2" y="79">40 MB/s</text><text class="chart-label" x="2" y="108">20 MB/s</text><path class="chart-area" d="${area}"/><path class="chart-line" d="${path}"/>${showSecondary?`<path class="chart-line secondary" d="${second}"/>`:''}<circle class="chart-marker" cx="658" cy="${(134-s.a[s.a.length-1]*1.16).toFixed(1)}" r="4"/>${s.labels.map((l,i)=>`<text class="chart-label" x="${(38+i*620/(s.labels.length-1)).toFixed(1)}" y="155" text-anchor="${i===0?'start':i===s.labels.length-1?'end':'middle'}">${l}</text>`).join('')}</svg></div>`;
}
function header(title,crumb,desc,action='',actionType='') {
  const date = new Intl.DateTimeFormat('en-GB',{weekday:'long',day:'numeric',month:'short',year:'numeric'}).format(new Date()).toUpperCase();
  return `<div class="page-heading"><div class="heading-copy"><p class="eyebrow">${crumb === 'Overview' ? date : 'MANAGE YOUR FLEET'}</p><h1>${title}</h1><p class="page-subtitle">${desc}</p></div><div class="heading-actions">${crumb==='Overview'?`<span class="live-indicator"><span></span>Sample telemetry</span><select class="select-control" id="periodSelect" aria-label="Choose reporting period"><option value="24h" ${state.period==='24h'?'selected':''}>Last 24 hours</option><option value="7d" ${state.period==='7d'?'selected':''}>Last 7 days</option><option value="30d" ${state.period==='30d'?'selected':''}>Last 30 days</option></select><button class="button" data-action="export">${icon('download')}Export</button><button class="button button-primary" data-action="add" data-type="node">${icon('plus')}Add node</button>`:`<span class="live-indicator"><span></span>Sample workspace</span><button class="button" data-action="export">${icon('download')}Export</button>${action?`<button class="button button-primary" data-action="add" data-type="${actionType}">${icon('plus')}${action}</button>`:''}`}</div></div>`;
}
function renderOverview() {
  const today = new Date().toLocaleDateString('en-US',{month:'short',day:'numeric'});
  return `${header('Fleet overview','Overview','See the health of your servers, customer accounts and network traffic.')}
    <p class="demo-note">${icon('shield')} Demo data for a Northstar control panel prototype · refreshed moments ago</p>
    <div class="metric-grid">
      ${metricCard('Total users','6,120','<span class="trend-up">+4.8%</span><span class="separator">·</span>vs. last month','users','')}
      ${metricCard('Online users','5,014','<span class="trend-up">81.9%</span><span class="separator">·</span>active now','activity','green')}
      ${metricCard('Active accounts','6,000','<span>98.0%</span><span class="separator">·</span>of all users','check','blue')}
      ${metricCard('Connected nodes','13 / 15','<span class="trend-up">86.7%</span><span class="separator">·</span>availability','server','')}
      ${metricCard('Inbounds','6','<span>5 healthy</span><span class="separator">·</span>1 needs review','radio','orange')}
      ${metricCard('Templates','3','<span>Synced</span><span class="separator">·</span>all nodes','copy','blue')}
      ${metricCard('Traffic today','28.32 TB',`<span class="trend-up">↑ 8.4%</span><span class="separator">·</span>${today}`,'chart','green')}
    </div>
    <div class="dashboard-grid grid-two">
      <section class="card server-health-card"><div class="card-header"><div class="server-heading"><span class="metric-icon">${icon('server')}</span><div><div class="card-heading"><h2>Panel server</h2></div><div class="server-host">control-01 · Ubuntu 24.04 · eu-central</div></div></div><span class="status-pill status-online">Healthy</span></div><div class="card-content"><div class="health-grid">
        <div class="health-stat"><div class="health-label"><span>CPU load</span>${icon('cpu')}</div><div class="health-value">15.3<small>%</small></div><div class="progress-track"><div class="progress-fill" style="width:15.3%"></div></div></div>
        <div class="health-stat"><div class="health-label"><span>Memory</span>${icon('layers')}</div><div class="health-value">20.8<small>%</small></div><div class="progress-track"><div class="progress-fill green" style="width:20.8%"></div></div></div>
        <div class="health-stat"><div class="health-label"><span>Disk used</span>${icon('database')}</div><div class="health-value">38.4<small> / 120 GB</small></div><div class="progress-track"><div class="progress-fill orange" style="width:32%"></div></div></div>
        <div class="health-stat"><div class="health-label"><span>Uptime</span>${icon('clock')}</div><div class="health-value">32<small> days</small></div><div class="health-foot"><span>Last restart</span><strong>Sep 29, 08:41</strong></div></div>
      </div></div></section>
      <section class="card fleet-status-card"><div class="card-header"><div class="card-heading"><h2>Fleet health</h2><p>CPU utilization across active nodes</p></div><a href="#nodes" class="table-link" data-view-link="nodes">View all ${icon('arrow')}</a></div><div class="card-content"><div class="fleet-status-list">${state.nodes.slice(0,4).map(n=>`<div class="fleet-node"><div class="node-identity"><span class="node-mark">${icon('server')}</span><div class="node-name-wrap"><div class="node-name">${n.name}</div><div class="node-region">${n.flag} ${n.region}</div></div></div><div class="mini-track"><span style="width:${n.load}%;${n.load>80?'background:var(--orange)':''}"></span></div><div class="node-percent">${n.load}%</div></div>`).join('')}</div><div class="health-foot"><span>13 of 15 nodes connected</span><strong>Avg. load 55%</strong></div></div></section>
    </div>
    <div class="dashboard-grid grid-chart">
      <section class="card chart-card"><div class="card-header"><div class="card-heading"><h2>Fleet throughput</h2><p>Inbound and outbound traffic · ${periodPoints[state.period].caption}</p></div><div class="chart-controls"><div class="chart-legend"><span class="legend-item"><i class="legend-dot"></i>Inbound</span><span class="legend-item"><i class="legend-dot secondary"></i>Outbound</span></div><button class="icon-only-small" title="More chart options">${icon('more')}</button></div></div><div class="card-content">${makeChart(state.period)}<div class="chart-foot"><span>Current <strong>71.4 MB/s in</strong> <span class="separator">·</span> <strong>42.1 MB/s out</strong></span><span>Peak <strong>78.2 MB/s</strong></span></div></div></section>
      <section class="card"><div class="card-header"><div class="card-heading"><h2>Traffic by region</h2><p>Share of total · ${periodPoints[state.period].caption}</p></div><button class="icon-only-small" title="More traffic options">${icon('more')}</button></div><div class="card-content"><div class="traffic-legend">${[['frankfurt-01','3.8 TB',31,'#6659e8'],['amsterdam-01','2.9 TB',24,'#8b7cf4'],['singapore-01','2.1 TB',17,'#53b89a'],['london-01','1.7 TB',14,'#efa54d'],['Other regions','1.8 TB',14,'#bbc0cd']].map(([name,size,pct,color])=>`<div class="traffic-row"><span class="traffic-swatch" style="background:${color}"></span><span class="traffic-name">${name}</span><span class="traffic-size">${size} <b>${pct}%</b></span><div class="traffic-bar"><span style="width:${pct}%;background:${color}"></span></div></div>`).join('')}</div><div class="health-foot"><span>Across 13 connected nodes</span><strong>12.3 TB total</strong></div></div></section>
    </div>
    <div class="dashboard-grid grid-table">
      <section class="card table-card"><div class="card-header"><div class="card-heading"><h2>Node status</h2><p>Recent health checks from your fleet</p></div><div class="table-toolbar"><label class="table-search">${icon('search')}<input type="search" placeholder="Filter nodes" data-inline-filter="nodes" aria-label="Filter nodes" /></label><a href="#nodes" class="table-link" data-view-link="nodes">All nodes ${icon('arrow')}</a></div></div>${tableMarkup(state.nodes.slice(0,5),[['name','Node'],['status','Status'],['load','CPU'],['latency','Latency'],['traffic','Traffic']],'nodes')}</section>
      <section class="card"><div class="card-header"><div class="card-heading"><h2>Top users by usage</h2><p>Highest consumption this cycle</p></div><button class="icon-only-small" title="More user options">${icon('more')}</button></div><div class="card-content"><div class="users-list">${state.users.slice(0,4).map(u=>`<div class="user-row"><div class="user-main"><span class="mini-avatar ${u.color}">${u.initials}</span><div class="user-meta"><strong>${u.name}</strong><span>${u.plan}</span></div></div><div class="user-usage">${u.usage}<small>of ${u.quota}</small></div></div>`).join('')}</div></div><a class="card-footer-link" href="#users" data-view-link="users">View all users ${icon('arrow')}</a></section>
    </div>`;
}

function getEntityValue(row,key) { return String(row[key]??''); }
function renderEntity(view) {
  const c = config[view];
  const rows = state[c.entity] || [];
  const dataRows = rows.map(row=>({ ...row }));
  return `${header(c.title,c.crumb,c.desc,c.action,c.actionType)}
    <div class="page-summary-row">${c.stats.map(([label,value,foot])=>`<div class="summary-tile"><span>${label}</span><strong>${value}</strong><small>${foot}</small></div>`).join('')}</div>
    <section class="card data-page-card"><div class="card-header"><div class="card-heading"><h2>All ${c.title.toLowerCase()}</h2><p>${dataRows.length?`Showing ${dataRows.length} sample records · Aggregate metrics shown above`:'No records yet'}</p></div><div class="data-toolbar"><label class="table-search">${icon('search')}<input type="search" data-inline-filter="${view}" placeholder="Search ${c.title.toLowerCase()}" aria-label="Search ${c.title.toLowerCase()}" /></label><select class="select-control" aria-label="Filter by status"><option>All status</option><option>Online</option><option>Degraded</option><option>Offline</option><option>Active</option></select><button class="button" data-action="filter">${icon('filter')}Filters</button></div></div>${tableMarkup(dataRows,c.columns,c.entity)}</section>`;
}
function renderEvents() {
  return `${header('Events','Events','A timeline of changes and important activity across your fleet.')}
    <div class="page-summary-row"><div class="summary-tile"><span>Events today</span><strong>248</strong><small>Since 00:00 UTC</small></div><div class="summary-tile"><span>Warnings</span><strong>3</strong><small>Need a closer look</small></div><div class="summary-tile"><span>Webhooks</span><strong>4 / 4</strong><small>All endpoints healthy</small></div><div class="summary-tile"><span>Delivery success</span><strong>99.8%</strong><small>Past 24 hours</small></div></div>
    <section class="card"><div class="card-header"><div class="card-heading"><h2>Recent activity</h2><p>Latest events from your workspace</p></div><button class="button">${icon('filter')}Filter events</button></div><div class="card-content"><div class="event-list">${[['Node unavailable','new-york-02 missed its last health check and is currently offline.','2 min ago','warning','alert'],['Usage threshold reached','noah.w@example.com has used 89% of the monthly quota.','18 min ago','warning','alert'],['User created','Jordan Lee was added to the Pro plan by Alex Morgan.','42 min ago','good','users'],['Inbound configuration synced','VLESS · Reality was synced to 13 connected nodes.','1 hr ago','info','check'],['Backup completed','Scheduled database backup finished successfully.','3 hr ago','good','archive']].map(e=>`<div class="event-item"><span class="event-icon ${e[3]==='warning'?'warning':e[3]==='info'?'info':''}">${icon(e[4])}</span><div class="event-copy"><strong>${e[0]}</strong><p>${e[1]}</p></div><span class="event-time">${e[2]}</span></div>`).join('')}</div></div></section>`;
}
function renderTraffic() {
  return `${header('Traffic','Traffic','Monitor bandwidth usage, throughput and consumption across nodes.')}
    <div class="page-summary-row"><div class="summary-tile"><span>Traffic today</span><strong>28.32 TB</strong><small>↑ 8.4% vs. yesterday</small></div><div class="summary-tile"><span>Inbound rate</span><strong>71.4 MB/s</strong><small>Peak 78.2 MB/s</small></div><div class="summary-tile"><span>Outbound rate</span><strong>42.1 MB/s</strong><small>Peak 51.8 MB/s</small></div><div class="summary-tile"><span>Monthly total</span><strong>842.6 TB</strong><small>68% of forecast</small></div></div>
    <div class="dashboard-grid grid-chart"><section class="card chart-card"><div class="card-header"><div class="card-heading"><h2>Bandwidth over time</h2><p>Aggregate traffic · ${periodPoints[state.period].caption}</p></div><select class="select-control" id="periodSelect" aria-label="Choose reporting period"><option value="24h" ${state.period==='24h'?'selected':''}>Last 24 hours</option><option value="7d" ${state.period==='7d'?'selected':''}>Last 7 days</option><option value="30d" ${state.period==='30d'?'selected':''}>Last 30 days</option></select></div><div class="card-content">${makeChart(state.period)}<div class="chart-foot"><span>Inbound <strong>71.4 MB/s</strong></span><span>Outbound <strong>42.1 MB/s</strong></span><span>Peak <strong>78.2 MB/s</strong></span></div></div></section><section class="card"><div class="card-header"><div class="card-heading"><h2>Usage by node</h2><p>Top regions this period</p></div></div><div class="card-content"><div class="traffic-legend">${state.nodes.slice(0,5).map((n,i)=>`<div class="traffic-row"><span class="traffic-swatch" style="background:${['#6659e8','#8b7cf4','#53b89a','#efa54d','#5698df'][i]}"></span><span class="traffic-name">${n.name}</span><span class="traffic-size">${n.traffic}</span><div class="traffic-bar"><span style="width:${[92,72,56,45,38][i]}%;background:${['#6659e8','#8b7cf4','#53b89a','#efa54d','#5698df'][i]}"></span></div></div>`).join('')}</div></div></section></div>
    <section class="card" style="margin-top:13px"><div class="card-header"><div class="card-heading"><h2>Traffic by node</h2><p>Usage and current health</p></div><button class="button" data-action="export">${icon('download')}Export CSV</button></div>${tableMarkup(state.nodes,[['name','Node'],['status','Status'],['traffic','Traffic this cycle'],['load','CPU load'],['users','Active users']],'nodes')}</section>`;
}
function renderBackups() {
  return `${header('Backups','Backups','Protect your configuration and move it safely between servers.','Create backup','backup')}
    <div class="page-summary-row"><div class="summary-tile"><span>Latest backup</span><strong>Today · 02:00</strong><small>Completed successfully</small></div><div class="summary-tile"><span>Scheduled backups</span><strong>Daily</strong><small>Keep last 14 archives</small></div><div class="summary-tile"><span>Storage used</span><strong>1.7 GB</strong><small>Of 10 GB available</small></div><div class="summary-tile"><span>Restore points</span><strong>14</strong><small>Pre-restore snapshots protected</small></div></div>
    <section class="card data-page-card"><div class="card-header"><div class="card-heading"><h2>Backup archive</h2><p>Logical database exports · credentials are included in protected archives</p></div><button class="button">${icon('settings')}Schedule settings</button></div><div class="data-table-wrap"><table><thead><tr><th>Archive</th><th>Created</th><th>Size</th><th>Type</th><th>Status</th><th></th></tr></thead><tbody>${state.backups.map(b=>`<tr><td><div class="table-primary">${b.name}</div></td><td>${b.date}</td><td>${b.size}</td><td>${b.type}</td><td>${statusPill('Online')}</td><td><button class="table-action" data-action="backup-download" aria-label="Download backup">${icon('download')}</button></td></tr>`).join('')}</tbody></table></div></section>`;
}
function renderSettings() {
  return `${header('Settings','Settings','Control access, security and how your panel behaves.')}
    <div class="settings-grid">${[['General','Workspace name, locale, time zone and defaults','settings'],['Security','Trusted proxies, login limits and allowlists','shield'],['Administrators','Operator accounts and access roles','users'],['API tokens','Scoped keys for integrations and automation','key'],['Webhooks','Event subscribers, signing secrets and delivery logs','activity'],['Subscriptions','Customer links, branding and update intervals','globe'],['Panel updates','Release channel, automatic checks and update history','refresh'],['License','Plan status, installation identity and transfers','lock']].map((x,i)=>`<button class="card settings-card" data-settings="${i}"><span class="metric-icon ${i%3===0?'':i%3===1?'blue':'green'}">${icon(x[2])}</span><span><h2>${x[0]}</h2><p>${x[1]}</p></span><span class="icon-end">${icon('arrow')}</span></button>`).join('')}</div>`;
}
function renderView() {
  document.documentElement.dataset.theme = state.theme;
  const current = state.view;
  document.getElementById('breadcrumbCurrent').textContent = ({overview:'Overview',traffic:'Traffic',events:'Events',backups:'Backups',settings:'Settings'})[current] || (config[current]?.crumb || 'Overview');
  if(current==='overview') contentArea.innerHTML = renderOverview();
  else if(config[current]) contentArea.innerHTML = renderEntity(current);
  else if(current==='events') contentArea.innerHTML = renderEvents();
  else if(current==='traffic') contentArea.innerHTML = renderTraffic();
  else if(current==='backups') contentArea.innerHTML = renderBackups();
  else if(current==='settings') contentArea.innerHTML = renderSettings();
  else contentArea.innerHTML = `${header('Coming soon',current,'This workspace view is ready for your next configuration step.')}<div class="empty-panel">This section is part of the panel roadmap. Choose a live section from the navigation to continue.</div>`;
  document.querySelectorAll('.nav-item[data-view]').forEach(el=>el.classList.toggle('active',el.dataset.view===current));
  document.getElementById('themeToggle').querySelector('.icon').innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${icons[state.theme==='light'?'moon':'sun']}</svg>`;
}

function openDialog(content, className='') {
  overlayRoot.innerHTML = `<div class="dialog-backdrop" data-close-overlay style="position:fixed;inset:0"></div><section class="dialog ${className}" role="dialog" aria-modal="true">${content}</section>`;
  const first = overlayRoot.querySelector('input,button,select');
  if(first) setTimeout(()=>first.focus(),10);
}
function closeDialog() { overlayRoot.innerHTML=''; }
function toast(message, tone='success') {
  const id = `toast-${Date.now()}`;
  toastRegion.insertAdjacentHTML('beforeend',`<div class="toast" id="${id}">${icon(tone==='success'?'check':'alert')}<span>${message}</span></div>`);
  setTimeout(()=>document.getElementById(id)?.remove(),3300);
}
function addDialog(type) {
  const formMap = {
    node: {title:'Add a node',subtitle:'Connect a server to your workspace.',fields:[['Node name','name','Enter a unique node name'],['Public address','address','Hostname or IP address'],['Region','region','City, country'],['Agent port','port','Default 7432','number']]},
    user: {title:'Create a user',subtitle:'Set up a customer account and initial access plan.',fields:[['Full name','name','Customer name'],['Email address','email','name@example.com','email'],['Plan','plan','Pro · 500 GB'],['Device limit','devices','8 devices','number']]},
    inbound: {title:'Create an inbound',subtitle:'Configure a protocol entry point for your fleet.',fields:[['Inbound name','name','For example, VLESS · Reality'],['Protocol','protocol','VLESS / REALITY'],['Port','port','443','number'],['Template','template','Default template']]},
    plan: {title:'Create a plan',subtitle:'Set the usage and device limits for a subscription.',fields:[['Plan name','name','Plan name'],['Data allowance','quota','500 GB / month'],['Device limit','devices','8 devices','number'],['Billing period','period','30 days']]},
    tunnel: {title:'Create a tunnel',subtitle:'Connect a relay node to an origin node.',fields:[['Tunnel name','name','Tunnel name'],['Relay node','relay','Select relay node'],['Origin node','origin','Select origin node'],['Port range','ports','443, 8443']]},
    reseller: {title:'Add a reseller',subtitle:'Create a partner account with managed user capacity.',fields:[['Partner name','name','Company or partner name'],['Contact email','email','team@example.com','email'],['User limit','limit','250 users','number'],['Role','role','Reseller']]},
    template: {title:'Create a template',subtitle:'Package reusable protocol settings for your nodes.',fields:[['Template name','name','Template name'],['Protocol','protocol','VLESS / REALITY'],['Inbound','inbound','Select an inbound'],['Node group','group','All connected nodes']]},
    routing: {title:'Add a routing rule',subtitle:'Define how matching traffic should be handled.',fields:[['Rule name','name','Rule name'],['Match type','match','Domain, IP or category'],['Match value','value','For example, geoip:private'],['Outbound','outbound','DIRECT']]},
    backup: {title:'Create a backup',subtitle:'Save a protected snapshot of your panel data.',fields:[['Archive name','name','backup-YYYY-MM-DD'],['Passphrase (optional)','passphrase','Encrypt this archive','password']]},
  };
  const submitLabels = {node:'Add node',user:'Create user',inbound:'Add inbound',plan:'Create plan',tunnel:'Create tunnel',reseller:'Add reseller',template:'Create template',routing:'Add rule',backup:'Create backup'};
  const f=formMap[type] || formMap.node;
  const fields = f.fields.map(([label,name,placeholder,inputType])=>`<div class="form-field ${f.fields.length===2?'full':''}"><label for="field-${name}">${label}</label>${name==='plan'||name==='protocol'||name==='role'||name==='template'||name==='inbound'||name==='group'||name==='relay'||name==='origin'||name==='outbound'?`<select id="field-${name}" name="${name}"><option value="${placeholder}">${placeholder}</option>${(name==='plan'?['Starter · 150 GB','Business · 1 TB']:name==='protocol'?['Hysteria 2','Shadowsocks','WireGuard']:name==='inbound'?state.inbounds.map(x=>x.name):name==='template'?['Default template','Low latency']:[]).map(v=>`<option>${v}</option>`).join('')}</select>`:`<input id="field-${name}" name="${name}" type="${inputType||'text'}" placeholder="${placeholder}" ${inputType==='number'?`min="1" value="${name==='port'?(type==='node'?'7432':placeholder):'8'}"`:''} ${name==='name'||name==='email'?'required':''}/>`}</div>`).join('');
  openDialog(`<div class="dialog-header"><div><h2>${f.title}</h2><p>${f.subtitle}</p></div><button class="icon-only-small" data-close-overlay aria-label="Close dialog">${icon('close')}</button></div><form id="createForm"><div class="dialog-body"><div class="form-grid">${fields}</div>${type==='backup'?'<p class="form-help" style="margin:12px 0 0">A backup includes account credentials. Store the archive securely.</p>':''}</div><div class="dialog-footer"><button type="button" class="button" data-close-overlay>Cancel</button><button type="submit" class="button button-primary">${icon('plus')}${submitLabels[type]||'Save changes'}</button></div><input type="hidden" name="entityType" value="${type}" /></form>`);
}
function detailDialog(entity,id) {
  const rows=state[entity]||[]; const row=rows.find(r=>r.id===id); if(!row) return;
  const type=entity==='nodes'?'Node':entity==='users'?'User':entity.slice(0,-1).replace(/^./,m=>m.toUpperCase());
  const entries=Object.entries(row).filter(([k])=>k!=='id'&&k!=='color'&&k!=='initials').slice(0,8);
  openDialog(`<div class="dialog-header"><div><h2>${type} details</h2><p>${row.name||row.email||row.id}</p></div><button class="icon-only-small" data-close-overlay aria-label="Close details">${icon('close')}</button></div><div class="dialog-body"><div class="detail-grid">${entries.map(([k,v])=>`<div class="detail-cell"><small>${k.replace(/([A-Z])/g,' $1').replace(/^./,c=>c.toUpperCase())}</small><strong>${v}</strong></div>`).join('')}</div></div><div class="dialog-footer"><button class="button" data-close-overlay>Close</button>${entity==='users'?`<button class="button button-danger" data-toggle-user="${row.id}">${row.status==='Paused'?'Reactivate':'Pause account'}</button>`:''}<button class="button button-primary" data-close-overlay>Edit ${type.toLowerCase()}</button></div>`);
}
function openSearch() {
  const views=[['Overview','overview','Fleet health, traffic and top users','grid'],['Nodes','nodes','Servers and health checks','server'],['Users','users','Customer accounts and subscriptions','users'],['Plans','plans','Usage allowances and billing','layers'],['Inbounds','inbounds','Protocols and entry points','radio'],['Tunnels','tunnels','Private routes between nodes','route'],['Traffic','traffic','Bandwidth and data usage','chart'],['Events','events','Activity and notifications','activity'],['Backups','backups','Restore points and database exports','archive'],['Settings','settings','Security, roles and panel options','settings']];
  openDialog(`<input class="global-search-input" id="globalSearch" type="search" placeholder="Search pages, users and nodes..." autocomplete="off"/><div class="search-results" id="searchResults"></div><div class="dialog-key-help"><span>Navigate <kbd>↑</kbd> <kbd>↓</kbd> · Select <kbd>↵</kbd></span><span>Close <kbd>Esc</kbd></span></div>`,'search-dialog');
  const input=document.getElementById('globalSearch');
  const draw=()=>{
    const q=input.value.toLowerCase().trim();
    const matches=views.filter(v=>`${v[0]} ${v[2]}`.toLowerCase().includes(q)).map(v=>({label:v[0],detail:v[2],icon:v[3],view:v[1]}));
    const records=[...state.nodes.map(n=>({label:n.name,detail:`Node · ${n.region}`,icon:'server',view:'nodes'})),...state.users.map(u=>({label:u.name,detail:`User · ${u.email}`,icon:'users',view:'users'}))].filter(x=>`${x.label} ${x.detail}`.toLowerCase().includes(q));
    const all=[...matches.map(x=>({...x,group:'Pages'})),...records.map(x=>({...x,group:'Records'}))];
    document.getElementById('searchResults').innerHTML=all.length?all.map((r,i)=>`<button class="search-result ${i===0?'selected':''}" data-result-view="${r.view}"><span class="metric-icon">${icon(r.icon)}</span><span><strong>${r.label}</strong><small>${r.detail}</small></span>${i===0?'<kbd>↵</kbd>':''}</button>`).join(''):`<div class="search-empty">No matches for “${input.value}”</div>`;
  };
  draw(); input.addEventListener('input',draw);
}
function exportCurrent() {
  const c=config[state.view];
  const rows=c?state[c.entity]:state.nodes;
  const columns=c?c.columns.map(([key,label])=>[key,label]):[['name','Name'],['region','Region'],['status','Status'],['traffic','Traffic']];
  const csv=[columns.map(([,label])=>label).join(','),...rows.map(row=>columns.map(([key])=>`"${String(getEntityValue(row,key)).replaceAll('"','""')}"`).join(','))].join('\r\n');
  const blob=new Blob([csv],{type:'text/csv;charset=utf-8'}); const link=document.createElement('a'); link.href=URL.createObjectURL(blob); link.download=`northstar-${state.view}-${new Date().toISOString().slice(0,10)}.csv`; link.click(); setTimeout(()=>URL.revokeObjectURL(link.href),1000); toast('Your CSV export is ready.');
}
function switchView(view) {
  state.view=view; closeDialog(); renderView(); document.querySelector('.sidebar').classList.remove('mobile-open'); document.getElementById('mobileScrim').classList.remove('active'); window.scrollTo({top:0,behavior:'smooth'});
}

document.body.addEventListener('click',(event)=>{
  const nav=event.target.closest('[data-view]');
  if(nav){switchView(nav.dataset.view);return;}
  const link=event.target.closest('[data-view-link]');
  if(link){event.preventDefault();switchView(link.dataset.viewLink);return;}
  if(event.target.closest('#openSearch')){openSearch();return;}
  if(event.target.closest('#themeToggle')){state.theme=state.theme==='light'?'dark':'light';try{localStorage.setItem('northstar-theme',state.theme);}catch{}renderView();return;}
  if(event.target.closest('#mobileMenu')){document.querySelector('.sidebar').classList.add('mobile-open');document.getElementById('mobileScrim').classList.add('active');return;}
  if(event.target.closest('#mobileScrim')){document.querySelector('.sidebar').classList.remove('mobile-open');document.getElementById('mobileScrim').classList.remove('active');return;}
  if(event.target.closest('#collapseSidebar')){document.querySelector('.sidebar').classList.toggle('collapsed');document.querySelector('.main-shell').classList.toggle('sidebar-collapsed');return;}
  if(event.target.closest('#notificationButton')){openDialog(`<div class="dialog-header"><div><h2>Notifications</h2><p>Updates from your fleet</p></div><button class="icon-only-small" data-close-overlay aria-label="Close notifications">${icon('close')}</button></div><div class="notification-item"><span class="status-dot" style="background:var(--orange)"></span><p><strong>new-york-02</strong> missed its last check-in.<small>2 minutes ago</small></p></div><div class="notification-item"><span class="status-dot" style="background:var(--orange)"></span><p><strong>London inbound</strong> latency is above its normal range.<small>18 minutes ago</small></p></div><div class="notification-item"><span class="status-dot"></span><p>Scheduled backup completed successfully.<small>3 hours ago</small></p></div>`);return;}
  if(event.target.closest('#profileButton')||event.target.closest('#topProfileButton')){openDialog(`<div class="dialog-header"><div><h2>Alex Morgan</h2><p>Super administrator · alex@northstar.example</p></div><button class="icon-only-small" data-close-overlay aria-label="Close profile">${icon('close')}</button></div><div class="dialog-body"><div class="settings-card card"><span class="metric-icon">${icon('shield')}</span><span><h2>Account security</h2><p>Two-factor authentication is enabled.</p></span></div></div><div class="dialog-footer"><button class="button" data-close-overlay>Close</button><button class="button button-primary" data-close-overlay>Account settings</button></div>`);return;}
  if(event.target.closest('[data-action="add"]')){addDialog(event.target.closest('[data-action="add"]').dataset.type);return;}
  if(event.target.closest('[data-action="export"]')){exportCurrent();return;}
  if(event.target.closest('[data-action="filter"]')){toast('Filters are ready for this sample view.','info');return;}
  if(event.target.closest('[data-action="backup-download"]')){const payload=JSON.stringify({product:'Northstar demo',exportedAt:new Date().toISOString(),sample:true,records:{nodes:state.nodes,users:state.users,inbounds:state.inbounds}},null,2);const blob=new Blob([payload],{type:'application/json'});const link=document.createElement('a');link.href=URL.createObjectURL(blob);link.download='northstar-demo-backup.json';link.click();setTimeout(()=>URL.revokeObjectURL(link.href),1000);toast('Demo backup downloaded as JSON.');return;}
  const detail=event.target.closest('[data-row-detail]');
  if(detail){detailDialog(detail.dataset.entity,detail.dataset.rowDetail);return;}
  const toggleUser=event.target.closest('[data-toggle-user]');
  if(toggleUser){const user=state.users.find(u=>u.id===toggleUser.dataset.toggleUser);if(user){user.status=user.status==='Paused'?'Active':'Paused';closeDialog();renderView();toast(`${user.name} is now ${user.status.toLowerCase()}.`);}return;}
  const result=event.target.closest('[data-result-view]');
  if(result){switchView(result.dataset.resultView);return;}
  if(event.target.closest('[data-close-overlay]')){closeDialog();return;}
  const setting=event.target.closest('[data-settings]');
  if(setting){const labels=['General','Security','Administrators','API tokens','Webhooks','Subscriptions','Panel updates','License'];toast(`${labels[Number(setting.dataset.settings)]} settings selected.`,'info');return;}
  if(event.target.closest('#workspaceSwitch')){toast('You are viewing the Production workspace.','info');return;}
});

document.body.addEventListener('input',(event)=>{
  const input=event.target.closest('[data-inline-filter]'); if(!input)return;
  const table=input.closest('.card')?.querySelector('tbody'); if(!table)return;
  const q=input.value.toLowerCase(); let visible=0;
  table.querySelectorAll('tr[data-search]').forEach(row=>{const match=row.dataset.search.includes(q);row.hidden=!match;if(match)visible++;});
  const empty=table.querySelector('.filtered-empty');if(empty)empty.hidden=visible!==0;
});
document.body.addEventListener('change',(event)=>{
  if(event.target.id==='periodSelect'){state.period=event.target.value;renderView();}
  if(event.target.matches('.data-page-card select[aria-label="Filter by status"]')){
    const table=event.target.closest('.card').querySelector('tbody');
    const query=event.target.closest('.card').querySelector('[data-inline-filter]')?.value.toLowerCase()||'';
    let visible=0; const status=event.target.value;
    table.querySelectorAll('tr[data-search]').forEach(row=>{const match=row.dataset.search.includes(query)&&(status==='All status'||row.dataset.status===status);row.hidden=!match;if(match)visible++;});
    const empty=table.querySelector('.filtered-empty');if(empty)empty.hidden=visible!==0;
  }
});
document.body.addEventListener('submit',(event)=>{
  if(event.target.id!=='createForm')return;
  event.preventDefault(); const form=new FormData(event.target); const type=form.get('entityType'); const name=String(form.get('name')||'').trim();
  if(!name){toast('Please add a name before saving.','info');return;}
  if(type==='node'){
    const region=String(form.get('region')||'New region');
    state.nodes.unshift({id:`node-${Date.now()}`,name,region,ip:String(form.get('address')||'Pending connection'),status:'Pending setup',load:0,traffic:'0 GB',users:0,latency:'—',uptime:'—',version:'—',flag:'🌐'});
    toast(`${name} was added. Complete the node setup to connect it.`);
  } else if(type==='user'){
    const email=String(form.get('email')||'new.user@example.com');
    state.users.unshift({id:`u-${Date.now()}`,name,email,plan:String(form.get('plan')||'Pro · 500 GB'),node:state.nodes[0]?.name||'Unassigned',usage:'0 GB',quota:'500 GB',status:'Active',expires:'Dec 01, 2026',initials:initials(name),color:'purple'});
    toast(`${name} was added as a new user.`);
  } else if(type==='inbound'){
    state.inbounds.unshift({id:`ib-${Date.now()}`,name,protocol:String(form.get('protocol')||'VLESS / REALITY'),port:String(form.get('port')||'443'),nodes:'0 nodes',users:'0',status:'Pending setup'});
    toast(`${name} was added. Assign it to a template to deploy.`);
  } else if(type==='plan'){
    state.plans.unshift({id:`p-${Date.now()}`,name,quota:String(form.get('quota')||'500 GB / month'),devices:`${form.get('devices')||'8'} devices`,users:'0',period:String(form.get('period')||'30 days'),status:'Active'});
    toast(`${name} plan was created.`);
  } else if(type==='tunnel'){
    state.tunnels.unshift({id:`t-${Date.now()}`,name,route:`${form.get('relay')||'Relay'} → ${form.get('origin')||'Origin'}`,latency:'—',traffic:'0 GB',status:'Pending setup'});
    toast(`${name} tunnel was created. Configure its route to connect it.`);
  } else if(type==='reseller'){
    state.resellers.unshift({id:`r-${Date.now()}`,name,email:String(form.get('email')||'partner@example.com'),users:'0',used:'0%',status:'Active'});
    toast(`${name} was added as a reseller.`);
  } else if(type==='template'){
    state.templates.unshift({id:`tp-${Date.now()}`,name,protocol:String(form.get('protocol')||'VLESS / REALITY'),inbound:String(form.get('inbound')||'Default inbound'),nodes:String(form.get('group')||'All connected nodes'),users:'0',status:'Active'});
    toast(`${name} template was created.`);
  } else if(type==='routing'){
    state.routing.unshift({id:`rt-${Date.now()}`,name,rules:'1 rule',match:String(form.get('value')||'match all'),outbound:String(form.get('outbound')||'DIRECT'),status:'Active'});
    toast(`${name} rule set was added.`);
  } else if(type==='backup'){
    const created=new Date();
    state.backups.unshift({id:`backup-${Date.now()}`,name,date:`Today, ${created.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'})}`,size:'125.1 MB',type:'Manual'});
    toast(`${name} backup was created in this demo.`);
  } else {
    toast(`${name} was saved to this demo workspace.`);
  }
  closeDialog();renderView();
});
document.addEventListener('keydown',(event)=>{
  if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'){event.preventDefault();openSearch();}
  if(event.key==='Escape'){closeDialog();document.querySelector('.sidebar').classList.remove('mobile-open');document.getElementById('mobileScrim').classList.remove('active');}
  if(overlayRoot.querySelector('#globalSearch')&&event.key==='Enter'){
    const selected=overlayRoot.querySelector('.search-result.selected')||overlayRoot.querySelector('.search-result');
    if(selected){event.preventDefault();switchView(selected.dataset.resultView);}
  }
  if(overlayRoot.querySelector('#globalSearch')&&['ArrowDown','ArrowUp'].includes(event.key)){
    event.preventDefault();const rows=[...overlayRoot.querySelectorAll('.search-result')];if(!rows.length)return;let i=rows.findIndex(r=>r.classList.contains('selected'));rows[i]?.classList.remove('selected');i=(i+(event.key==='ArrowDown'?1:-1)+rows.length)%rows.length;rows[i].classList.add('selected');
  }
});

renderView();
document.querySelectorAll('.nav-item[data-view]').forEach(el=>{const label=el.querySelector('span:not(.icon)')?.textContent.trim();if(label){el.setAttribute('aria-label',label);el.title=label;}});
