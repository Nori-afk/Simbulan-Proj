const users = [
  {
    id: 1,
    name: 'Kim Sohee',
    role: 'Project Manager',
    username: 'kim',
    email: 'kim@simbulan.com',
    password: 'Simbulan2026'
  },
  {
    id: 2,
    name: 'Anton Lee',
    role: 'Designer',
    username: 'anton',
    email: 'anton@simbulan.com',
    password: 'Simbulan2026'
  },
  {
    id: 3,
    name: 'Park Won-bin',
    role: 'Installer',
    username: 'park',
    email: 'park@simbulan.com',
    password: 'Simbulan2026'
  }
];

let currentUser = users[0];

let projects = [
  {
    id: 1,
    name: 'Hotel Renovation',
    client: 'ABC Hotel',
    location: 'Baliuag',
    type: 'Hospitality',
    progress: 78,
    phase: 'Installation',
    status: 'Ongoing',
    start: 'Sep 1, 2026',
    deadline: 'Nov 30, 2026',
    budget: 5000000,
    scope: 'Interior renovation of guest-facing areas, including layout review, millwork, seating, lighting coordination, and final installation support.',
    requirements: 'Custom reception counter, lounge seating, beds, paneling, storage cabinetry, dining furniture, and site-ready installation materials.'
  },
  {
    id: 2,
    name: 'Office B Fit-out',
    client: 'XYZ Corp',
    location: 'Taguig',
    type: 'Fit-out',
    progress: 60,
    phase: 'Manufacturing',
    status: 'Ongoing',
    start: 'Oct 1, 2026',
    deadline: 'Dec 15, 2026',
    budget: 5200000,
    scope: 'Workplace fit-out for executive offices, pantry, meeting rooms, and modular workstation zones.',
    requirements: 'Workstations, conference tables, storage systems, acoustic panels, pantry cabinetry, and loose furniture.'
  },
  {
    id: 3,
    name: 'Restaurant C',
    client: 'Food Group Inc.',
    location: 'Quezon City',
    type: 'Hospitality',
    progress: 100,
    phase: 'Turnover',
    status: 'Completed',
    start: 'Jul 15, 2026',
    deadline: 'Sep 30, 2026',
    budget: 4500000,
    scope: 'Dining room and bar interior build-out with seating, service counters, and decorative storage.',
    requirements: 'Booth seating, dining chairs, cafe tables, bar counter, shelving, and accent wall panels.'
  },
  {
    id: 4,
    name: 'Condo D',
    client: 'Prime Estates',
    location: 'Pasay',
    type: 'Residential',
    progress: 42,
    phase: 'Design',
    status: 'Ongoing',
    start: 'Oct 5, 2026',
    deadline: 'Dec 8, 2026',
    budget: 3000000,
    scope: 'Model unit interior with living, dining, bedroom, storage, and display areas.',
    requirements: 'Closets, sofa, dining set, bed frame, TV console, side tables, and decorative shelving.'
  },
  {
    id: 5,
    name: 'Retail Store E',
    client: 'Style Co.',
    location: 'Alabang',
    type: 'Commercial',
    progress: 70,
    phase: 'Manufacturing',
    status: 'Delayed',
    start: 'Aug 15, 2026',
    deadline: 'Oct 25, 2026',
    budget: 2800000,
    scope: 'Retail fixtures, display counters, checkout area, stockroom racks, and fitting-room accents.',
    requirements: 'Display tables, wall racks, checkout counter, mirrors, product shelves, and storage racks.'
  }
];

let tasks = [
  { id: 1, projectId: 1, detail: 'Review furniture requirements', owner: 'Kim Sohee', deadline: 'Oct 12, 2026', status: 'Ongoing' },
  { id: 2, projectId: 1, detail: 'Confirm material palette', owner: 'Client', deadline: 'Oct 13, 2026', status: 'Pending' },
  { id: 3, projectId: 2, detail: 'Submit workstation revision', owner: 'Anton Lee', deadline: 'Oct 15, 2026', status: 'Ongoing' },
  { id: 4, projectId: 3, detail: 'Prepare turnover checklist', owner: 'Anton Lee', deadline: 'Oct 18, 2026', status: 'Completed' },
  { id: 5, projectId: 4, detail: 'Approve final furniture list', owner: 'Park Won-bin', deadline: 'Oct 20, 2026', status: 'Pending' },
  { id: 6, projectId: 5, detail: 'Resolve display rack delay', owner: 'Kim Sohee', deadline: 'Oct 22, 2026', status: 'Ongoing' }
];

let expenses = [
  { id: 1, projectId: 1, category: 'Design', amount: 500000, date: 'Oct 02, 2026', ref: 'DES-1001', note: 'Design services' },
  { id: 2, projectId: 1, category: 'Manufacturing', amount: 2600000, date: 'Oct 04, 2026', ref: 'MFG-1001', note: 'Custom furniture production' },
  { id: 3, projectId: 1, category: 'Installation', amount: 1000000, date: 'Oct 08, 2026', ref: 'INS-1001', note: 'Site installation' },
  { id: 4, projectId: 2, category: 'Manufacturing', amount: 1800000, date: 'Oct 06, 2026', ref: 'MFG-1002', note: 'Workstation batch' },
  { id: 5, projectId: 3, category: 'Installation', amount: 700000, date: 'Sep 20, 2026', ref: 'INS-1002', note: 'Final install' },
  { id: 6, projectId: 4, category: 'Design', amount: 220000, date: 'Oct 07, 2026', ref: 'DES-1002', note: 'Model unit design' },
  { id: 7, projectId: 5, category: 'Manufacturing', amount: 1700000, date: 'Oct 09, 2026', ref: 'MFG-1003', note: 'Display fixtures' }
];

let assignments = [
  { id: 1, projectId: 1, userId: 2, role: 'Designer', status: 'Pending' },
  { id: 2, projectId: 1, userId: 3, role: 'Installer', status: 'Accepted' },
  { id: 3, projectId: 2, userId: 2, role: 'Designer', status: 'Rejected' },
  { id: 4, projectId: 5, userId: 3, role: 'Installer', status: 'Pending' }
];

const state = {
  currentView: 'dashboard',
  selectedProjectId: 1,
  reportTab: 'overview',
  taskFilter: 'All',
  drawer: null,
  calendarMonth: 9,
  calendarYear: 2026,
  reportFrom: '2026-01-01',
  reportTo: '2026-12-31',
  reportDatesOpen: false,
  reportFilters: { status: '', client: '', phase: '', sort: '' },
  searches: {
    dashboard: '',
    projects: '',
    costs: '',
    reports: ''
  }
};

const STORAGE_KEY = 'simbulan-data-v1';
const SESSION_KEY = 'simbulan-session';
let saveFailed = false;

function saveData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ projects, tasks, expenses, assignments }));
    saveFailed = false;
  } catch (error) {
    // Storage is full or blocked: keep working in memory and tell the user once.
    if (!saveFailed) toast('Changes could not be saved on this device');
    saveFailed = true;
  }
}

function loadData() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const lists = saved && [saved.projects, saved.tasks, saved.expenses, saved.assignments];
    // Damaged or incomplete saved data is ignored so the app still opens with the starting records.
    if (!lists || !lists.every(Array.isArray) || !saved.projects.length) return;
    [projects, tasks, expenses, assignments] = lists;
  } catch (error) {
    // Unreadable storage: fall back to the starting records.
  }
}

function storeSession(remember) {
  try {
    sessionStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(SESSION_KEY);
    (remember ? localStorage : sessionStorage).setItem(SESSION_KEY, String(currentUser.id));
  } catch (error) {
    // Without storage the user simply signs in again after a refresh.
  }
}

function clearSession() {
  try {
    sessionStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(SESSION_KEY);
  } catch (error) {
    // Nothing stored, nothing to clear.
  }
}

function restoreSession() {
  let id = null;
  try {
    id = sessionStorage.getItem(SESSION_KEY) || localStorage.getItem(SESSION_KEY);
  } catch (error) {
    return;
  }
  const user = users.find(item => String(item.id) === id);
  if (!user) return;
  currentUser = user;
  loginScreen.classList.add('hidden');
  workspace.classList.remove('hidden');
  render('dashboard');
}

loadData();

const viewRoot = document.querySelector('#view-root');
const loginScreen = document.querySelector('#login-screen');
const workspace = document.querySelector('#workspace');
const loginForm = document.querySelector('#login-form');
const loginError = document.querySelector('#login-error');
const profileName = document.querySelector('#profile-name');
const profileRole = document.querySelector('#profile-role');

function money(value) {
  return `PHP ${Number(value || 0).toLocaleString('en-US')}`;
}

function compactMoney(value) {
  return `PHP ${(Number(value || 0) / 1000000).toFixed(value >= 10000000 ? 1 : 2)}M`;
}

function nextId(items) {
  return items.length ? Math.max(...items.map(item => item.id)) + 1 : 1;
}

function projectById(id) {
  return projects.find(project => project.id === Number(id)) || projects[0];
}

function userById(id) {
  return users.find(user => user.id === Number(id)) || users[0];
}

function isManager() {
  return currentUser.role === 'Project Manager';
}

function assignableUsers() {
  return users.filter(user => user.role !== 'Project Manager');
}

function assignmentsForProject(projectId) {
  return assignments.filter(assignment => assignment.projectId === Number(projectId));
}

function assignmentsForCurrentUser() {
  return assignments.filter(assignment => assignment.userId === currentUser.id);
}

function visibleTasks() {
  const rows = isManager() ? tasks : tasks.filter(task => task.owner === currentUser.name);
  return rows.filter(task => state.taskFilter === 'All' || task.status === state.taskFilter);
}

function userInitials(name) {
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

function updateProfile() {
  profileName.textContent = currentUser.name;
  profileRole.textContent = currentUser.role;
  const initials = userInitials(currentUser.name);
  const ta = document.querySelector('#topbar-avatar');
  const da = document.querySelector('#dropdown-avatar');
  const dn = document.querySelector('#dropdown-name');
  const dr = document.querySelector('#dropdown-role');
  const de = document.querySelector('#dropdown-email');
  const du = document.querySelector('#dropdown-username');
  if (ta) ta.textContent = initials;
  if (da) da.textContent = initials;
  if (dn) dn.textContent = currentUser.name;
  if (dr) dr.textContent = currentUser.role;
  if (de) de.textContent = currentUser.email;
  if (du) du.textContent = currentUser.username;
}

function expensesFor(projectId) {
  return expenses.filter(expense => expense.projectId === Number(projectId));
}

function projectExpenseTotal(projectId) {
  return expensesFor(projectId).reduce((sum, expense) => sum + Number(expense.amount), 0);
}

function totalBudget() {
  return projects.reduce((sum, project) => sum + Number(project.budget), 0);
}

function totalExpenses() {
  return expenses.reduce((sum, expense) => sum + Number(expense.amount), 0);
}

function categoryTotal(category) {
  return expenses
    .filter(expense => expense.category === category)
    .reduce((sum, expense) => sum + Number(expense.amount), 0);
}

function averageProgress() {
  return Math.round(projects.reduce((sum, project) => sum + Number(project.progress), 0) / Math.max(projects.length, 1));
}

// Views are built with innerHTML, so typed text is stored HTML-escaped to keep it from being read as markup.
function cleanText(value) {
  return String(value || '').trim().replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}

function plainText(value) {
  return String(value).replace(/&(amp|lt|gt|quot|#39);/g, (m, name) => ({ amp: '&', lt: '<', gt: '>', quot: '"', '#39': "'" }[name]));
}

function statusClass(status) {
  return String(status).toLowerCase().replace(/\s+/g, '-');
}

function searchMatch(project, term) {
  const text = `${project.name} ${project.client} ${project.location} ${project.type} ${project.status}`.toLowerCase();
  return text.includes(cleanText(term).toLowerCase());
}

function parseProjectDate(str) {
  const months = { Jan:0, Feb:1, Mar:2, Apr:3, May:4, Jun:5, Jul:6, Aug:7, Sep:8, Oct:9, Nov:10, Dec:11 };
  const m = String(str).match(/(\w+)\s+(\d+),\s+(\d+)/);
  if (!m) return null;
  return new Date(Number(m[3]), months[m[1]], Number(m[2]));
}

function dateToIso(text) {
  const date = new Date(text);
  if (!text || Number.isNaN(date.getTime())) return '';
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function isoToDisplay(iso, day = 'numeric') {
  return isoToDate(iso).toLocaleDateString('en-US', { month: 'short', day, year: 'numeric' });
}

function dateField(name, iso, id = '') {
  return `
    <div class="date-field">
      <button class="date-trigger" type="button">
        <span class="${iso ? '' : 'cs-placeholder'}">${iso ? isoToDisplay(iso) : 'Select date'}</span>
        <i class="bx bx-calendar"></i>
      </button>
      <input type="hidden" name="${name}" ${id ? `id="${id}"` : ''} value="${iso}" />
    </div>
  `;
}

function customSelect(name, items, selected, placeholder = '') {
  const match = items.find(i => String(i.value) === String(selected));
  const sel = match || (placeholder ? null : items[0]);
  return `
    <div class="custom-select" data-cs-name="${name}" data-cs-label="${placeholder}">
      <button class="cs-trigger" type="button">
        <span class="${sel ? '' : 'cs-placeholder'}">${sel ? sel.label : placeholder}</span>
        <i class="bx bx-chevron-down"></i>
      </button>
      <div class="cs-options hidden">
        ${items.map(i => `
          <button class="cs-option ${String(i.value) === String(selected) ? 'selected' : ''}" data-cs-value="${i.value}" type="button">${i.label}</button>
        `).join('')}
      </div>
      <input type="hidden" name="${name}" value="${sel ? sel.value : ''}" />
    </div>
  `;
}

function projectItems() {
  return projects.map(p => ({ value: String(p.id), label: p.name }));
}

function userItems(all = true) {
  const list = all ? users : assignableUsers();
  return list.map(u => ({ value: all ? u.name : String(u.id), label: `${u.name} - ${u.role}` }));
}

function statusItems() {
  return ['Ongoing', 'Pending', 'Completed', 'Delayed'].map(s => ({ value: s, label: s }));
}

function taskStatusItems() {
  return ['Pending', 'Ongoing', 'Completed'].map(s => ({ value: s, label: s }));
}

function categoryItems() {
  return ['Design', 'Manufacturing', 'Installation', 'Other'].map(c => ({ value: c, label: c }));
}

function progressMarkup(value, compact = false) {
  return `<div class="progress ${compact ? 'compact' : ''}"><div class="progress-bar"><i style="width:${value}%"></i></div><span>${value}%</span></div>`;
}

function pageHead(kicker, title, actions = '') {
  return `
    <div class="page-head">
      <div>
        <p class="page-kicker">${kicker}</p>
        <h1 class="page-title">${title}</h1>
      </div>
      <div class="head-actions">${actions}</div>
    </div>
  `;
}

function searchBox(view, placeholder = 'Search a Project') {
  return `
    <label class="search-box">
      <span><i class="bx bx-search"></i></span>
      <input data-search="${view}" type="search" value="${state.searches[view] || ''}" placeholder="${placeholder}" />
    </label>
  `;
}

function actionButton(action, label, id = '') {
  return `<button class="table-action" data-action="${action}" ${id ? `data-id="${id}"` : ''} type="button">${label}</button>`;
}

function kpiCard(title, leftValue, leftLabel, rightValue, rightLabel) {
  return `
    <article class="kpi-card">
      <button class="card-arrow" data-view="reports" type="button" aria-label="Open reports"><i class="bx bx-expand-up-right"></i></button>
      <h3>${title}</h3>
      <div class="kpi-split">
        <div><strong>${leftValue}</strong><i class="green-line"></i><small>${leftLabel}</small></div>
        <div><strong>${rightValue}</strong><i class="orange-line"></i><small>${rightLabel}</small></div>
      </div>
    </article>
  `;
}

function calendarBoard(projectRows = projects) {
  const month = state.calendarMonth;
  const year = state.calendarYear;
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  const events = [];
  projectRows.forEach(p => {
    const s = parseProjectDate(p.start);
    const d = parseProjectDate(p.deadline);
    if (s && s.getMonth() === month && s.getFullYear() === year) {
      events.push({ day: s.getDate(), project: p, lane: '' });
    }
    if (d && d.getMonth() === month && d.getFullYear() === year) {
      events.push({ day: d.getDate(), project: p, lane: 'lane-2' });
    }
  });

  tasks.filter(t => projectRows.some(p => p.id === t.projectId)).forEach(t => {
    const d = parseProjectDate(t.deadline);
    if (d && d.getMonth() === month && d.getFullYear() === year) {
      events.push({ day: d.getDate(), project: projectById(t.projectId), lane: '', label: t.detail });
    }
  });

  const now = new Date();
  const todayDay = now.getMonth() === month && now.getFullYear() === year ? now.getDate() : 0;
  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push('<article class="calendar-day empty"></article>');
  for (let d = 1; d <= daysInMonth; d++) {
    const dayEvents = events.filter(e => e.day === d);
    cells.push(`
      <article class="calendar-day ${d === todayDay ? 'today' : ''}">
        <strong>${d}</strong>
        ${dayEvents.map(e => `
          <button class="calendar-event ${e.lane}" data-route="project-detail" data-id="${e.project.id}" type="button">${e.label || e.project.name}</button>
        `).join('')}
      </article>
    `);
  }

  return `
    <div class="calendar-board">
      <div class="calendar-nav">
        <span>${monthNames[month]} ${year}</span>
        <button class="calendar-today" data-action="calendar-today" type="button">Today</button>
        <button data-action="prev-month" type="button" aria-label="Previous month"><i class="bx bx-chevron-left"></i></button>
        <button data-action="next-month" type="button" aria-label="Next month"><i class="bx bx-chevron-right"></i></button>
      </div>
      <div class="calendar-weekdays">
        ${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => `<span>${day}</span>`).join('')}
      </div>
      <div class="calendar-grid">
        ${cells.join('')}
      </div>
    </div>
  `;
}

function valueCard(title, value, note, action = 'reports') {
  return `
    <article class="kpi-card value-card">
      <button class="card-arrow" data-view="${action}" type="button" aria-label="Open ${title}"><i class="bx bx-expand-up-right"></i></button>
      <h3>${title}</h3>
      <strong>${value}</strong>
      <small>${note}</small>
    </article>
  `;
}

function statCardIcon(title) {
  const icons = {
    'Total Projects': 'bx-folder-open',
    'Delayed Projects': 'bx-error-circle',
    'Ongoing Projects': 'bx-loader-circle',
    'Completed Projects': 'bx-check-circle',
    'Total Project Costs': 'bx-wallet',
    'Actual Cost': 'bx-receipt',
    'Remaining Budget': 'bx-coin-stack',
    'Budget Utilization': 'bx-pie-chart-alt-2'
  };
  return icons[title] || 'bx-bar-chart';
}

function statCard(title, value) {
  return `
    <article class="stat-card">
      <span class="stat-icon"><i class="bx ${statCardIcon(title)}"></i></span>
      <div><strong>${title}</strong><b>${value}</b></div>
    </article>
  `;
}

function assignmentActions(assignment, context = 'queue') {
  const canRespond = assignment.userId === currentUser.id && assignment.status === 'Pending';
  const controls = context === 'team' ? [] : [
    actionButton('open-project-detail', 'Open', assignment.projectId)
  ];

  if (canRespond) {
    controls.push(actionButton('accept-assignment', 'Accept', assignment.id));
    controls.push(actionButton('reject-assignment', 'Reject', assignment.id));
  }

  if (isManager()) {
    controls.push(actionButton('remove-assignment', 'Remove', assignment.id));
  }

  return controls.length ? `<div class="assignment-actions">${controls.join('')}</div>` : '';
}

function assignmentCard(assignment, compact = false, context = 'queue') {
  const project = projectById(assignment.projectId);
  const user = userById(assignment.userId);
  const title = context === 'team' ? user.name : isManager() ? user.name : project.name;
  const detail = context === 'team'
    ? `${assignment.role} - ${user.role}`
    : isManager()
    ? `${project.name} - ${assignment.role}`
    : `${assignment.role} - ${project.phase}`;

  return `
    <article class="assignment-card ${compact ? 'compact' : ''}">
      <div class="avatar-photo small">${userInitials(user.name)}</div>
      <div class="assignment-main">
        <strong>${title}</strong>
        <span>${detail}</span>
      </div>
      <span class="status-chip ${statusClass(assignment.status)}">${assignment.status}</span>
      ${assignmentActions(assignment, context)}
    </article>
  `;
}

function assignmentInbox(compact = false) {
  const allRows = isManager() ? assignments : assignmentsForCurrentUser();
  const rows = compact ? allRows.filter(assignment => assignment.status === 'Pending') : allRows;
  const title = compact
    ? isManager() ? 'Pending Team Responses' : 'Project Invitations'
    : isManager() ? 'Assignment Responses' : 'Project Assignments';
  const empty = compact
    ? isManager() ? 'No pending team responses.' : 'No pending project invitations.'
    : isManager() ? 'No project assignments yet.' : 'No project assignments yet.';

  return `
    <section class="assignment-inbox ${compact ? 'compact' : ''}">
      <div class="panel-title"><h2>${title}</h2><button data-view="projects" type="button">Projects</button></div>
      <div class="assignment-list">
        ${rows.length ? rows.slice(0, compact ? 3 : rows.length).map(assignment => assignmentCard(assignment, compact)).join('') : `<p class="empty-panel">${empty}</p>`}
      </div>
    </section>
  `;
}

function dashboard() {
  const completed = projects.filter(project => project.status === 'Completed').length;
  const ongoing = projects.filter(project => project.status === 'Ongoing').length;
  const delayed = projects.filter(project => project.status === 'Delayed').length;
  const myTasks = tasks.filter(task => task.owner === currentUser.name && task.status !== 'Completed');
  const pendingTasks = tasks.filter(task => (isManager() || task.owner === currentUser.name) && task.status === 'Pending').length;
  const openTasks = tasks.filter(task => (isManager() || task.owner === currentUser.name) && task.status !== 'Completed').length;
  const utilization = Math.round((totalExpenses() / Math.max(totalBudget(), 1)) * 100);
  const visibleProjects = projects.filter(project => searchMatch(project, state.searches.dashboard));

  return `
    ${pageHead('Manage and track your projects', 'PROJECT DASHBOARD', searchBox('dashboard'))}
    <section class="metric-grid dashboard-metrics">
      ${kpiCard('Project Status', completed, 'Completed', ongoing, 'In Progress')}
      ${valueCard('Budget Used', `${utilization}%`, `${money(totalExpenses())} spent`, 'costs')}
      ${valueCard('Pending Tasks', pendingTasks, `${openTasks} open assignments`, 'tasks')}
      ${kpiCard('Risk Watch', delayed, 'Delayed', projects.length - delayed, 'On Track')}
    </section>
    <section class="dashboard-board">
      <div class="calendar-panel">
        <div class="panel-title"><h2>Project Calendar</h2><button data-view="projects" type="button">View all</button></div>
        ${calendarBoard(visibleProjects)}
      </div>
      <aside class="task-panel">
        <div class="panel-title"><h2>${currentUser.name} Tasks</h2><button data-view="tasks" type="button">Open</button></div>
        <div class="pink-task-list">
          ${myTasks.length ? myTasks.slice(0, 5).map(task => `
            <article>
              <button data-action="complete-task" data-id="${task.id}" aria-label="Complete task" type="button"></button>
              <strong>${task.detail}</strong>
              <span>${projectById(task.projectId).name}</span>
            </article>
          `).join('') : '<p class="empty-panel">No assigned tasks right now.</p>'}
        </div>
        ${assignmentInbox(true)}
      </aside>
    </section>
  `;
}

function projectKpis() {
  const completed = projects.filter(project => project.status === 'Completed').length;
  const ongoing = projects.filter(project => project.status === 'Ongoing').length;
  const delayed = projects.filter(project => project.status === 'Delayed').length;

  return `
    <section class="metric-grid cards-3">
      ${kpiCard('Project Load', projects.length, 'Total', ongoing, 'Ongoing')}
      ${kpiCard('Delivery Status', completed, 'Completed', delayed, 'Delayed')}
      ${valueCard('Average Progress', `${averageProgress()}%`, 'Across all projects', 'reports')}
    </section>
  `;
}

function projectTable() {
  const rows = projects.filter(project => searchMatch(project, state.searches.projects));

  return `
    <div class="table-panel">
      <table class="data-table project-table">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Client</th>
            <th>Type</th>
            <th>Progress</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map(project => `
            <tr class="clickable-row" data-route="project-detail" data-id="${project.id}">
              <td><button class="link-cell" data-route="project-detail" data-id="${project.id}" type="button">${project.name}</button></td>
              <td>${project.client}</td>
              <td>${project.type}</td>
              <td>${project.progress}%</td>
              <td><span class="status-chip ${statusClass(project.status)}">${project.status}</span></td>
              <td class="actions-cell">
                ${actionButton('open-project-detail', 'Open', project.id)}
                ${isManager() ? `${actionButton('edit-project', 'Edit', project.id)}${actionButton('delete-project', 'Delete', project.id)}` : ''}
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function projectsView() {
  const actions = isManager()
    ? `${searchBox('projects')}<button class="gold-button" data-action="new-project" type="button"><i class="bx bx-plus"></i> Create New Project</button>`
    : searchBox('projects');

  return `
    ${pageHead('Manage and track your projects', 'PROJECTS', actions)}
    ${projectKpis()}
    ${projectTable()}
    ${drawerMarkup()}
  `;
}

function projectDetail() {
  const project = projectById(state.selectedProjectId);
  const projectTasks = tasks.filter(task => task.projectId === project.id && (isManager() || task.owner === currentUser.name));
  const projectAssignments = assignmentsForProject(project.id);
  const managerActions = isManager()
    ? `${actionButton('assign-member', 'Assign Member', project.id)}${actionButton('new-task-for-project', 'Add Task', project.id)}${actionButton('edit-project', 'Edit Project', project.id)}`
    : '';

  return `
    <div class="detail-top">
      <button class="back-link" data-view="projects" type="button">Back To Projects</button>
      <div class="detail-actions">
        ${managerActions}
      </div>
    </div>
    <section class="project-detail-head">
      <div>
        <h1>${project.name}</h1>
        <div class="tag-row">
          <span>Client: ${project.client}</span>
          <span>Location: ${project.location}</span>
          <span>Project Type: ${project.type}</span>
        </div>
      </div>
      <div class="timeline-box">
        <strong>Start: ${project.start}</strong>
        <strong>Target: ${project.deadline}</strong>
        <small>Overall Progress</small>
        ${progressMarkup(project.progress, true)}
      </div>
    </section>
    <section class="dotted-grid">
      <article>
        <h3>Scope of Work</h3>
        <p>${project.scope}</p>
      </article>
      <article>
        <h3>Furniture / Interior Requirements</h3>
        <p>${project.requirements}</p>
      </article>
    </section>
    <section class="assigned-team">
      <div class="panel-title">
        <h2>Assigned Team</h2>
        ${isManager() ? `<button data-action="assign-member" data-id="${project.id}" type="button">Assign Member</button>` : '<button data-view="tasks" type="button">View Task</button>'}
      </div>
      <div class="assignment-grid">
        ${projectAssignments.length ? projectAssignments.map(assignment => assignmentCard(assignment, false, 'team')).join('') : '<p class="empty-panel">No team members assigned yet.</p>'}
      </div>
    </section>
    <section class="detail-subtable">
      <div class="panel-title"><h2>Project Tasks</h2>${isManager() ? `<button data-action="new-task-for-project" data-id="${project.id}" type="button">Create Task</button>` : ''}</div>
      <div class="table-panel">
        <table class="data-table">
          <thead><tr><th>Task</th><th>Owner</th><th>Deadline</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            ${projectTasks.map(task => taskRow(task, false)).join('')}
          </tbody>
        </table>
      </div>
    </section>
    ${drawerMarkup()}
  `;
}

function taskRow(task, showProject = true) {
  return `
    <tr>
      <td>${task.detail}</td>
      ${showProject ? `<td>${projectById(task.projectId).name}</td>` : ''}
      <td>${task.owner}</td>
      <td>${task.deadline}</td>
      <td><span class="status-chip ${statusClass(task.status)}">${task.status}</span></td>
      <td class="actions-cell">
        ${task.status !== 'Completed' ? actionButton('complete-task', 'Done', task.id) : actionButton('reopen-task', 'Reopen', task.id)}
        ${isManager() ? `${actionButton('edit-task', 'Edit', task.id)}${actionButton('delete-task', 'Delete', task.id)}` : ''}
      </td>
    </tr>
  `;
}

function tasksView() {
  const filtered = visibleTasks();
  const tabs = ['All', 'Pending', 'Ongoing', 'Completed'];
  const actions = `
    <div class="filter-tabs">${tabs.map(tab => `<button class="${state.taskFilter === tab ? 'active' : ''}" data-task-filter="${tab}" type="button">${tab}</button>`).join('')}</div>
    ${isManager() ? '<button class="gold-button" data-action="new-task" type="button"><i class="bx bx-plus"></i> Create Task</button>' : ''}
  `;

  return `
    ${pageHead('Manage and track your projects', isManager() ? 'Tasks' : 'My task', actions)}
    ${assignmentInbox()}
    <div class="table-panel task-table-panel">
      <table class="data-table task-table">
        <thead><tr><th></th><th>Task</th><th>Project</th><th>Owner</th><th>Deadline</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>
          ${filtered.map(task => `
            <tr>
              <td><input data-action="toggle-task" data-id="${task.id}" type="checkbox" ${task.status === 'Completed' ? 'checked' : ''} /></td>
              <td>${task.detail}</td>
              <td>${projectById(task.projectId).name}</td>
              <td>${task.owner}</td>
              <td>${task.deadline}</td>
              <td><span class="status-chip ${statusClass(task.status)}">${task.status}</span></td>
              <td class="actions-cell">
                ${isManager() ? `${actionButton('edit-task', 'Edit', task.id)}${actionButton('delete-task', 'Delete', task.id)}` : actionButton(task.status === 'Completed' ? 'reopen-task' : 'complete-task', task.status === 'Completed' ? 'Reopen' : 'Done', task.id)}
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    ${drawerMarkup()}
  `;
}

function costKpis() {
  const used = Math.round((totalExpenses() / Math.max(totalBudget(), 1)) * 100);
  const remaining = totalBudget() - totalExpenses();

  return `
    <section class="metric-grid cards-3 cost-cards">
      ${valueCard('Approved Budget', compactMoney(totalBudget()), `${projects.length} active project records`, 'costs')}
      ${valueCard('Actual Cost', compactMoney(totalExpenses()), `${used}% budget utilization`, 'reports')}
      ${valueCard('Remaining Budget', compactMoney(remaining), remaining >= 0 ? 'Within approved allocation' : 'Over approved allocation', 'reports')}
    </section>
  `;
}

function costTable() {
  const rows = projects.filter(project => searchMatch(project, state.searches.costs));

  return `
    <div class="table-panel">
      <table class="data-table cost-table">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Client</th>
            <th>Type</th>
            <th>Budget</th>
            <th>Expenses</th>
            <th>Utilization</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map(project => {
            const spent = projectExpenseTotal(project.id);
            const utilization = Math.round((spent / Math.max(project.budget, 1)) * 100);
            return `
              <tr class="clickable-row" data-route="cost-detail" data-id="${project.id}">
                <td><button class="link-cell" data-route="cost-detail" data-id="${project.id}" type="button">${project.name}</button></td>
                <td>${project.client}</td>
                <td>${project.type}</td>
                <td>${compactMoney(project.budget)}</td>
                <td>${compactMoney(spent)}</td>
                <td>${utilization}%</td>
                <td>${spent <= project.budget ? 'Within Budget' : 'Over Budget'}</td>
                <td class="actions-cell">
                  ${isManager() ? actionButton('new-expense-for-project', 'Add Cost', project.id) : ''}
                  ${actionButton('open-cost-detail', 'View', project.id)}
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function costsView() {
  return `
    ${pageHead('Manage and track your projects', 'Cost Allocation', `${searchBox('costs')}${isManager() ? '<button class="gold-button" data-action="new-expense" type="button"><i class="bx bx-plus"></i> Add Expenses</button>' : ''}`)}
    ${costKpis()}
    ${costTable()}
    ${drawerMarkup()}
  `;
}

function costDetail() {
  const project = projectById(state.selectedProjectId);
  const projectExpenses = expensesFor(project.id);
  const spent = projectExpenseTotal(project.id);

  return `
    <div class="detail-top">
      <button class="back-link" data-view="costs" type="button">Back To Cost</button>
      ${isManager() ? actionButton('new-expense-for-project', 'Add Expense', project.id) : ''}
    </div>
    <section class="project-detail-head cost-detail-head">
      <div>
        <h1>${project.name}</h1>
        <div class="tag-row">
          <span>Client: ${project.client}</span>
          <span>Location: ${project.location}</span>
          <span>Project Type: ${project.type}</span>
        </div>
      </div>
    </section>
    <section class="dotted-grid cost-info-grid">
      <article>
        ${isManager() ? `<button class="edit-link inner-edit" data-action="edit-project" data-id="${project.id}" type="button">edit</button>` : ''}
        <h3>Information</h3>
        <dl>
          <div><dt>Budget</dt><dd>${money(project.budget)}</dd></div>
          <div><dt>Total Expenses</dt><dd>${money(spent)}</dd></div>
          <div><dt>Remaining</dt><dd>${money(project.budget - spent)}</dd></div>
          <div><dt>Utilization</dt><dd>${Math.round((spent / Math.max(project.budget, 1)) * 100)}%</dd></div>
        </dl>
      </article>
      <article>
        <h3>Cost Distribution</h3>
        <dl>
          <div><dt>Design</dt><dd>${money(projectExpenses.filter(expense => expense.category === 'Design').reduce((sum, expense) => sum + expense.amount, 0))}</dd></div>
          <div><dt>Manufacturing</dt><dd>${money(projectExpenses.filter(expense => expense.category === 'Manufacturing').reduce((sum, expense) => sum + expense.amount, 0))}</dd></div>
          <div><dt>Installation</dt><dd>${money(projectExpenses.filter(expense => expense.category === 'Installation').reduce((sum, expense) => sum + expense.amount, 0))}</dd></div>
          <div><dt>Other</dt><dd>${money(projectExpenses.filter(expense => expense.category === 'Other').reduce((sum, expense) => sum + expense.amount, 0))}</dd></div>
        </dl>
      </article>
    </section>
    <section class="expense-records">
      <h2>Expense Records</h2>
      <div class="table-panel">
        <table class="data-table">
          <thead><tr><th>Date</th><th>Category</th><th>Description</th><th>Amount</th><th>Actions</th></tr></thead>
          <tbody>
            ${projectExpenses.map(expense => `
              <tr>
                <td>${expense.date}</td>
                <td>${expense.category}</td>
                <td>${expense.note}</td>
                <td>${money(expense.amount)}</td>
                <td class="actions-cell">${isManager() ? `${actionButton('edit-expense', 'Edit', expense.id)} ${actionButton('delete-expense', 'Delete', expense.id)}` : ''}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </section>
    ${drawerMarkup()}
  `;
}

function reportTabs() {
  const tabs = [
    ['overview', 'Overview'],
    ['progress', 'Project Progress'],
    ['cost', 'Cost Breakdown']
  ];

  return `<div class="report-tabs">${tabs.map(([id, label]) => `<button class="${state.reportTab === id ? 'active' : ''}" data-report-tab="${id}" type="button">${label}</button>`).join('')}</div>`;
}

function reportStatGrid() {
  return `
    <section class="stat-grid">
      ${statCard('Total Projects', projects.length)}
      ${statCard('Delayed Projects', projects.filter(project => project.status === 'Delayed').length)}
      ${statCard('Ongoing Projects', projects.filter(project => project.status === 'Ongoing').length)}
      ${statCard('Completed Projects', projects.filter(project => project.status === 'Completed').length)}
    </section>
  `;
}

function reportBars() {
  return `
    <div class="mini-bars">
      ${projects.map(project => `<div><label>${project.name}</label><span><i style="width:${project.progress}%"></i></span><b>${project.progress}%</b></div>`).join('')}
    </div>
  `;
}

function donutChart(segments, centerLabel) {
  const total = segments.reduce((s, seg) => s + seg.value, 0) || 1;
  let cumulative = 0;
  const stops = segments.map(seg => {
    const start = cumulative;
    cumulative += (seg.value / total) * 100;
    return `${seg.color} ${start}% ${cumulative}%`;
  }).join(', ');
  return `
    <div class="donut-row">
      <div class="donut" style="background:conic-gradient(${stops})"><span class="donut-center">${centerLabel}</span></div>
      <ul>${segments.map(seg => `<li>${seg.label}</li>`).join('')}</ul>
    </div>
  `;
}

function overviewReports() {
  const utilization = Math.round((totalExpenses() / Math.max(totalBudget(), 1)) * 100);

  return `
    <section class="stat-grid">
      ${statCard('Total Projects', projects.length)}
      ${statCard('Ongoing Projects', projects.filter(project => project.status === 'Ongoing').length)}
      ${statCard('Actual Cost', money(totalExpenses()))}
      ${statCard('Budget Utilization', `${utilization}%`)}
    </section>
    <section class="report-card-grid">
      <article class="report-card"><h3>Project Progress Report</h3>${reportBars()}</article>
      <article class="report-card"><h3>Cost Allocation Report</h3>${donutChart([
        { value: categoryTotal('Design'), label: 'Design ' + money(categoryTotal('Design')), color: 'var(--brown)' },
        { value: categoryTotal('Manufacturing'), label: 'Manufacturing ' + money(categoryTotal('Manufacturing')), color: '#bda176' },
        { value: categoryTotal('Installation'), label: 'Installation ' + money(categoryTotal('Installation')), color: '#e4d5c7' }
      ], compactMoney(totalExpenses()))}</article>
      <article class="report-card"><h3>Budget Utilization Report</h3><div class="column-chart">${projects.map(project => `<span style="--h:${Math.max(18, Math.round((projectExpenseTotal(project.id) / Math.max(project.budget, 1)) * 100))}%"></span>`).join('')}</div></article>
      <article class="report-card"><h3>Cost Breakdown</h3>${costBreakdownBars()}</article>
    </section>
    ${reportCostTable()}
  `;
}

function costBreakdownBars() {
  const max = Math.max(categoryTotal('Design'), categoryTotal('Manufacturing'), categoryTotal('Installation'), 1);
  return `
    <div class="mini-bars">
      ${['Design', 'Manufacturing', 'Installation'].map(category => `<div><label>${category}</label><span><i style="width:${Math.round((categoryTotal(category) / max) * 100)}%"></i></span><b>${compactMoney(categoryTotal(category))}</b></div>`).join('')}
    </div>
  `;
}

function reportCostTable() {
  return `
    <div class="table-panel">
      <table class="data-table">
        <thead><tr><th>Project</th><th>Client</th><th>Budget</th><th>Design Cost</th><th>Manufacturing Cost</th><th>Installation Cost</th><th>Total Cost</th><th>Status</th></tr></thead>
        <tbody>
          ${projects.map(project => {
            const projectExpenses = expensesFor(project.id);
            const design = projectExpenses.filter(expense => expense.category === 'Design').reduce((sum, expense) => sum + expense.amount, 0);
            const manufacturing = projectExpenses.filter(expense => expense.category === 'Manufacturing').reduce((sum, expense) => sum + expense.amount, 0);
            const installation = projectExpenses.filter(expense => expense.category === 'Installation').reduce((sum, expense) => sum + expense.amount, 0);
            return `<tr><td>${project.name}</td><td>${project.client}</td><td>${money(project.budget)}</td><td>${money(design)}</td><td>${money(manufacturing)}</td><td>${money(installation)}</td><td>${money(projectExpenseTotal(project.id))}</td><td><span class="status-chip ${statusClass(project.status)}">${project.status}</span></td></tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function progressReports() {
  const filters = state.reportFilters;
  const rows = projects.filter(project => searchMatch(project, state.searches.reports)
    && (!filters.status || project.status === filters.status)
    && (!filters.client || plainText(project.client) === filters.client)
    && (!filters.phase || project.phase === filters.phase));
  if (filters.sort === 'name') rows.sort((a, b) => a.name.localeCompare(b.name));
  if (filters.sort === 'progress') rows.sort((a, b) => b.progress - a.progress);
  if (filters.sort === 'deadline') rows.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
  const clients = [...new Set(projects.map(project => project.client))];

  return `
    ${reportStatGrid()}
    <div class="report-filters">
      ${searchBox('reports')}
      ${customSelect('f-status', [{ value: '', label: 'Status' }, ...statusItems()], filters.status)}
      ${customSelect('f-client', [{ value: '', label: 'Client' }, ...clients.map(client => ({ value: client, label: client }))], cleanText(filters.client))}
      ${customSelect('f-phase', [{ value: '', label: 'Current Phase' }, ...['Design','Manufacturing','Installation','Turnover'].map(p => ({ value: p, label: p }))], filters.phase)}
      ${customSelect('f-sort', [{ value: '', label: 'Sort by' }, { value: 'name', label: 'Name' }, { value: 'progress', label: 'Progress' }, { value: 'deadline', label: 'Deadline' }], filters.sort)}
    </div>
    <div class="table-panel" style="margin-bottom:18px">
      <h3 style="margin:0 0 14px;font-size:15px;padding:20px 20px 0">Project Progress Report</h3>
      <table class="data-table inline-table">
        <thead><tr><th>Project</th><th>Client</th><th>Progress</th><th>Status</th><th>Current Phase</th><th>Start Date</th><th>Deadline</th><th>Actions</th></tr></thead>
        <tbody>
          ${rows.length ? '' : '<tr><td colspan="8">No projects match these filters.</td></tr>'}
          ${rows.map(project => `<tr><td>${project.name}</td><td>${project.client}</td><td>${progressMarkup(project.progress, true)}</td><td><span class="status-chip ${statusClass(project.status)}">${project.status}</span></td><td>${project.phase}</td><td>${project.start}</td><td>${project.deadline}</td><td>${actionButton('open-project-detail', 'Open', project.id)}</td></tr>`).join('')}
        </tbody>
      </table>
    </div>
    <section class="triple-grid">
      <article class="report-card"><h3>Project Completion Status</h3>${donutChart([
        { value: projects.filter(p => p.status === 'Ongoing').length, label: 'Ongoing ' + projects.filter(p => p.status === 'Ongoing').length, color: 'var(--brown)' },
        { value: projects.filter(p => p.status === 'Completed').length, label: 'Completed ' + projects.filter(p => p.status === 'Completed').length, color: '#bda176' },
        { value: projects.filter(p => p.status === 'Delayed').length, label: 'Delayed ' + projects.filter(p => p.status === 'Delayed').length, color: '#e4d5c7' }
      ], projects.length + ' Total')}</article>
      <article class="report-card"><h3>Progress by Project</h3>${reportBars()}</article>
      <article class="report-card"><h3>Ongoing Projects</h3><div class="gantt">${projects.map(project => `<span style="--x:${project.progress / 2}%;--w:${Math.max(24, project.progress / 2)}%"></span>`).join('')}</div></article>
    </section>
  `;
}

function costReports() {
  const utilization = Math.round((totalExpenses() / Math.max(totalBudget(), 1)) * 100);

  return `
    <section class="stat-grid cost-stats">
      ${statCard('Total Project Costs', money(totalBudget()))}
      ${statCard('Actual Cost', money(totalExpenses()))}
      ${statCard('Remaining Budget', money(totalBudget() - totalExpenses()))}
      ${statCard('Budget Utilization', `${utilization}%`)}
    </section>
    <section class="report-card-grid cost-report-grid">
      <article class="report-card"><h3>Cost Distribution</h3>${donutChart([
        { value: categoryTotal('Manufacturing'), label: 'Manufacturing ' + compactMoney(categoryTotal('Manufacturing')), color: 'var(--brown)' },
        { value: categoryTotal('Installation'), label: 'Installation ' + compactMoney(categoryTotal('Installation')), color: '#bda176' },
        { value: categoryTotal('Design'), label: 'Design ' + compactMoney(categoryTotal('Design')), color: '#e4d5c7' }
      ], compactMoney(totalExpenses()))}</article>
      <article class="report-card"><h3>Budget vs. Actual Spending</h3><div class="column-chart">${projects.slice(0, 5).map(project => `<span style="--h:${Math.max(18, Math.round((projectExpenseTotal(project.id) / Math.max(project.budget, 1)) * 100))}%"></span>`).join('')}</div></article>
      <article class="report-card wide"><h3>Project Cost Breakdown</h3>${reportCostTable()}</article>
      <article class="report-card"><h3>Cost Trend</h3><div class="trend-line">${costTrendSvg()}</div></article>
      <article class="report-card"><h3>Cost by Project</h3>${costBreakdownByProject()}</article>
    </section>
  `;
}

function costTrendSvg() {
  const from = isoToDate(state.reportFrom);
  const to = isoToDate(state.reportTo);
  const today = new Date();
  const shortDay = date => date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  let points = [];
  for (let cursor = new Date(from.getFullYear(), from.getMonth() + 1, 0); ; cursor = new Date(cursor.getFullYear(), cursor.getMonth() + 2, 0)) {
    if (cursor >= to) {
      points.push({ date: to, label: to.toLocaleDateString('en-US', { month: 'short' }) });
      break;
    }
    points.push({ date: cursor, label: cursor.toLocaleDateString('en-US', { month: 'short' }) });
  }
  if (points.length === 1) points = [{ date: from, label: shortDay(from) }, { date: to, label: shortDay(to) }];
  const step = Math.ceil(points.length / 12);
  points = points.filter((point, index) => index % step === 0 || index === points.length - 1);

  // Planned spend assumes each project's budget is used evenly between its start and deadline.
  const plannedBy = date => projects.reduce((sum, project) => {
    const start = new Date(project.start);
    const deadline = new Date(project.deadline);
    const share = deadline > start ? Math.min(1, Math.max(0, (date - start) / (deadline - start))) : 1;
    return sum + project.budget * (Number.isNaN(share) ? 1 : share);
  }, 0);
  const spentBy = date => expenses.reduce((sum, expense) => new Date(expense.date) <= date ? sum + Number(expense.amount) : sum, 0);

  const months = points.map(point => point.label);
  const budgetData = points.map(point => plannedBy(point.date));
  const actualData = points.map((point, index) => index === 0 || points[index - 1].date < today ? spentBy(point.date) : null);
  const max = Math.max(...budgetData, ...actualData.filter(v => v !== null), 1);
  const w = 400;
  const h = 120;
  const pad = 30;
  const plotW = w - pad * 2;
  const plotH = h - pad;

  function toX(i) { return pad + (i / (months.length - 1)) * plotW; }
  function toY(v) { return h - pad - (v / max) * plotH; }

  const budgetPoints = budgetData.map((v, i) => `${toX(i)},${toY(v)}`).join(' ');
  const actualFiltered = actualData.filter(v => v !== null);
  const actualPoints = actualFiltered.map((v, i) => `${toX(i)},${toY(v)}`).join(' ');

  const labels = months.map((m, i) => `<text x="${toX(i)}" y="${h - 6}" text-anchor="middle" fill="#827a73" font-size="9" font-weight="700">${m}</text>`).join('');

  return `
    <svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
      <polyline points="${budgetPoints}" fill="none" stroke="#604233" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="${actualPoints}" fill="none" stroke="#d1ad6b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${budgetData.map((v, i) => `<circle cx="${toX(i)}" cy="${toY(v)}" r="3" fill="#604233"/>`).join('')}
      ${actualFiltered.map((v, i) => `<circle cx="${toX(i)}" cy="${toY(v)}" r="3" fill="#d1ad6b"/>`).join('')}
      ${labels}
      <text x="${w - pad}" y="14" text-anchor="end" fill="#604233" font-size="8" font-weight="800">Budget</text>
      <text x="${w - pad}" y="24" text-anchor="end" fill="#d1ad6b" font-size="8" font-weight="800">Actual</text>
    </svg>
  `;
}

function costBreakdownByProject() {
  const max = Math.max(...projects.map(project => projectExpenseTotal(project.id)), 1);
  return `
    <div class="mini-bars">
      ${projects.map(project => `<div><label>${project.name}</label><span><i style="width:${Math.round((projectExpenseTotal(project.id) / max) * 100)}%"></i></span><b>${compactMoney(projectExpenseTotal(project.id))}</b></div>`).join('')}
    </div>
  `;
}

function isoToDate(iso) {
  const [year, month, day] = iso.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function longDate(iso) {
  return isoToDate(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

// No progress history is stored, so a range ending in the past shows progress estimated linearly from the start date.
function projectAsOf(project, start, deadline, to) {
  if (!start || !deadline) return project;
  const today = new Date();
  const latest = today < deadline ? today : deadline;
  if (to >= latest || latest <= start) return project;
  const progress = Math.round(project.progress * Math.max(0, (to - start) / (latest - start)));
  const phase = progress < 50 ? 'Design' : progress < 75 ? 'Manufacturing' : 'Installation';
  return { ...project, progress, phase, status: 'Ongoing' };
}

// Report helpers read the global projects/expenses, so swap in the date-filtered rows while fn runs.
function withReportRange(fn) {
  const from = isoToDate(state.reportFrom);
  const to = isoToDate(state.reportTo);
  const allProjects = projects;
  const allExpenses = expenses;
  // Rows whose dates cannot be parsed stay visible instead of silently dropping out of the report.
  const parsed = value => {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
  };
  projects = allProjects.filter(project => {
    const start = parsed(project.start);
    const deadline = parsed(project.deadline);
    return (!start || start <= to) && (!deadline || deadline >= from);
  }).map(project => projectAsOf(project, parsed(project.start), parsed(project.deadline), to));
  const ids = new Set(projects.map(project => project.id));
  expenses = allExpenses.filter(expense => {
    const date = parsed(expense.date);
    return ids.has(expense.projectId) && (!date || (date >= from && date <= to));
  });
  try {
    return fn();
  } finally {
    projects = allProjects;
    expenses = allExpenses;
  }
}

function reportDatePicker() {
  const popover = state.reportDatesOpen ? `
    <div class="date-popover">
      <label>From${dateField('reportFrom', state.reportFrom, 'report-from')}</label>
      <label>To${dateField('reportTo', state.reportTo, 'report-to')}</label>
      <p id="report-date-error" class="date-error" role="alert"></p>
      <div class="date-popover-actions">
        <button class="table-action" data-action="reset-report-dates" type="button">Reset</button>
        <button class="brown-button" data-action="apply-report-dates" type="button">Apply</button>
      </div>
    </div>` : '';

  return `
    <div class="date-range">
      <button class="date-button" data-action="toggle-report-dates" type="button"><i class="bx bx-calendar"></i> ${longDate(state.reportFrom)} - ${longDate(state.reportTo)}</button>
      ${popover}
    </div>`;
}

function reportsView() {
  const body = withReportRange(() => {
    if (!projects.length) return '<p class="empty-panel">No projects fall within the selected dates.</p>';
    return state.reportTab === 'overview' ? overviewReports() : state.reportTab === 'progress' ? progressReports() : costReports();
  });

  return `
    ${pageHead('Project and cost insights', 'Reports', `${reportDatePicker()}<button class="brown-button" data-action="export-report" type="button"><i class="bx bx-download"></i> Exports</button>`)}
    ${reportTabs()}
    ${body}
  `;
}

function drawerMarkup() {
  if (!state.drawer) return '';
  const drawer = state.drawer.type === 'project'
    ? projectDrawer()
    : state.drawer.type === 'task'
      ? taskDrawer()
      : state.drawer.type === 'expense'
        ? expenseDrawer()
        : state.drawer.type === 'assignment'
          ? assignmentDrawer()
          : '';
  if (!drawer) return '';
  return `<div class="modal-backdrop" data-action="close-drawer"></div>${drawer}`;
}

function projectDrawer() {
  const isEdit = state.drawer.mode === 'edit';
  const project = isEdit ? projectById(state.drawer.id) : {
    name: '',
    client: '',
    location: '',
    type: '',
    progress: '',
    phase: '',
    status: '',
    start: '',
    deadline: '',
    budget: '',
    scope: '',
    requirements: ''
  };

  return `
    <aside class="expense-drawer side-drawer" aria-label="${isEdit ? 'Edit project' : 'Create project'}">
      <button class="drawer-close" data-action="close-drawer" type="button">x</button>
      <h2>${isEdit ? 'EDIT PROJECT' : 'CREATE NEW PROJECT'}</h2>
      <form data-form="project">
        <input type="hidden" name="id" value="${isEdit ? project.id : ''}" />
        <label>Project Name<input name="name" value="${project.name}" required /></label>
        <label>Client<input name="client" value="${project.client}" required /></label>
        <div class="drawer-row">
          <label>Location<input name="location" value="${project.location}" required /></label>
          <label>Type<input name="type" value="${project.type}" required /></label>
        </div>
        <div class="drawer-row">
          <label>Budget (₱)<input name="budget" type="number" min="0" value="${project.budget}" required /></label>
          <label>Progress (%)<input name="progress" type="number" min="0" max="100" value="${project.progress}" required /></label>
        </div>
        <div class="drawer-row">
          <label>Phase<input name="phase" value="${project.phase}" required /></label>
          <label>Status${customSelect('status', statusItems(), project.status, 'Select status')}</label>
        </div>
        <div class="drawer-row">
          <label>Start Date${dateField('start', dateToIso(project.start))}</label>
          <label>Deadline${dateField('deadline', dateToIso(project.deadline))}</label>
        </div>
        <label>Scope of Work<textarea name="scope" required>${project.scope}</textarea></label>
        <label>Furniture / Interior Requirements<textarea name="requirements" required>${project.requirements}</textarea></label>
        <p class="drawer-error" role="alert"></p>
        <button class="drawer-submit" type="submit">${isEdit ? 'SAVE PROJECT' : 'CREATE PROJECT'}</button>
      </form>
    </aside>
  `;
}

function projectOptions(selectedId) {
  return projects.map(project => `<option value="${project.id}" ${Number(selectedId) === project.id ? 'selected' : ''}>${project.name}</option>`).join('');
}

function userOptions(selectedName = currentUser.name) {
  return users.map(user => `<option value="${user.name}" ${selectedName === user.name ? 'selected' : ''}>${user.name} - ${user.role}</option>`).join('');
}

function assignableUserOptions(selectedId) {
  return assignableUsers().map(user => `<option value="${user.id}" ${Number(selectedId) === user.id ? 'selected' : ''}>${user.name} - ${user.role}</option>`).join('');
}

function assignmentDrawer() {
  const defaultUser = assignableUsers()[0]?.id || users[0].id;
  const selectedUserId = state.drawer.userId || defaultUser;
  const assignment = {
    projectId: state.drawer.projectId || projects[0].id,
    userId: selectedUserId,
    role: state.drawer.role || userById(selectedUserId).role
  };

  return `
    <aside class="expense-drawer side-drawer" aria-label="Assign member">
      <button class="drawer-close" data-action="close-drawer" type="button">x</button>
      <h2>ASSIGN TEAM MEMBER</h2>
      <form data-form="assignment">
        <label>Project${customSelect('projectId', projectItems(), String(assignment.projectId))}</label>
        <label>Team Member${customSelect('userId', userItems(false), String(assignment.userId))}</label>
        <label>Assignment Role<input name="role" value="${assignment.role}" required /></label>
        <button class="drawer-submit" type="submit">SEND ASSIGNMENT</button>
      </form>
    </aside>
  `;
}

function taskDrawer() {
  const isEdit = state.drawer.mode === 'edit';
  const task = isEdit ? tasks.find(item => item.id === Number(state.drawer.id)) : {
    projectId: state.drawer.projectId || '',
    detail: '',
    owner: '',
    deadline: '',
    status: ''
  };

  return `
    <aside class="expense-drawer side-drawer" aria-label="${isEdit ? 'Edit task' : 'Create task'}">
      <button class="drawer-close" data-action="close-drawer" type="button">x</button>
      <h2>${isEdit ? 'EDIT TASK' : 'CREATE TASK'}</h2>
      <form data-form="task">
        <input type="hidden" name="id" value="${isEdit ? task.id : ''}" />
        <label>Project${customSelect('projectId', projectItems(), String(task.projectId), 'Select project')}</label>
        <label>Task Details<input name="detail" value="${task.detail}" required /></label>
        <div class="drawer-row">
          <label>Owner${customSelect('owner', userItems(true), task.owner, 'Select owner')}</label>
          <label>Deadline${dateField('deadline', dateToIso(task.deadline))}</label>
        </div>
        <label>Status${customSelect('status', taskStatusItems(), task.status, 'Select status')}</label>
        <p class="drawer-error" role="alert"></p>
        <button class="drawer-submit" type="submit">${isEdit ? 'SAVE TASK' : 'CREATE TASK'}</button>
      </form>
    </aside>
  `;
}

function expenseDrawer() {
  const isEdit = state.drawer.mode === 'edit';
  const expense = isEdit ? expenses.find(item => item.id === Number(state.drawer.id)) : {
    projectId: state.drawer.projectId || '',
    category: '',
    amount: '',
    date: '',
    ref: '',
    note: ''
  };

  return `
    <aside class="expense-drawer side-drawer" aria-label="${isEdit ? 'Edit expense' : 'Add project expense'}">
      <button class="drawer-close" data-action="close-drawer" type="button">x</button>
      <h2>${isEdit ? 'EDIT PROJECT EXPENSE' : 'ADD PROJECT EXPENSE'}</h2>
      <form data-form="expense">
        <input type="hidden" name="id" value="${isEdit ? expense.id : ''}" />
        <label>Project${customSelect('projectId', projectItems(), String(expense.projectId), 'Select project')}</label>
        <label>Expense Category${customSelect('category', categoryItems(), expense.category, 'Select category')}</label>
        <label>Amount (₱)<input name="amount" type="number" min="0" value="${expense.amount}" required /></label>
        <div class="drawer-row">
          <label>Expense Date${dateField('date', dateToIso(expense.date))}</label>
          <label>Ref NO<input name="ref" value="${expense.ref}" /></label>
        </div>
        <label>Note<textarea name="note">${expense.note}</textarea></label>
        <p class="drawer-error" role="alert"></p>
        <button class="drawer-submit" type="submit">${isEdit ? 'SAVE EXPENSE' : 'ADD EXPENSE'}</button>
      </form>
    </aside>
  `;
}

const views = {
  dashboard,
  projects: projectsView,
  'project-detail': projectDetail,
  tasks: tasksView,
  costs: costsView,
  'cost-detail': costDetail,
  reports: reportsView
};

function activeNavFor(view) {
  if (view === 'project-detail') return 'projects';
  if (view === 'cost-detail') return 'costs';
  return view;
}

function render(view = state.currentView) {
  // Re-rendering the same view must not replay the fade-in or jump the scroll position.
  closeDatePicker();
  saveData();
  const sameView = view === state.currentView && viewRoot.childElementCount > 0;
  const scrollTop = viewRoot.scrollTop;
  state.currentView = view;
  updateProfile();
  viewRoot.classList.toggle('no-fade', sameView);
  viewRoot.innerHTML = views[view]();
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.view === activeNavFor(view));
  });
  viewRoot.scrollTop = sameView ? scrollTop : 0;
}

function toast(message) {
  const oldToast = document.querySelector('.toast');
  if (oldToast) oldToast.remove();
  const node = document.createElement('div');
  node.className = 'toast';
  node.textContent = message;
  document.body.appendChild(node);
  window.setTimeout(() => node.remove(), 2200);
}

function authenticate(login, password) {
  const normalized = login.trim().toLowerCase();
  return users.find(user => (normalized === user.email || normalized === user.username) && password === user.password);
}

function saveProject(formData) {
  const id = Number(formData.get('id'));
  const payload = {
    name: cleanText(formData.get('name')),
    client: cleanText(formData.get('client')),
    location: cleanText(formData.get('location')),
    type: cleanText(formData.get('type')),
    budget: Number(formData.get('budget')),
    progress: Number(formData.get('progress')),
    phase: cleanText(formData.get('phase')),
    status: formData.get('status'),
    start: isoToDisplay(formData.get('start')),
    deadline: isoToDisplay(formData.get('deadline')),
    scope: cleanText(formData.get('scope')),
    requirements: cleanText(formData.get('requirements'))
  };

  if (id) {
    projects = projects.map(project => project.id === id ? { ...project, ...payload } : project);
    toast('Project updated');
  } else {
    projects = [{ id: nextId(projects), ...payload }, ...projects];
    toast('Project created');
  }
}

function saveTask(formData) {
  const id = Number(formData.get('id'));
  const payload = {
    projectId: Number(formData.get('projectId')),
    detail: cleanText(formData.get('detail')),
    owner: formData.get('owner').trim(),
    deadline: isoToDisplay(formData.get('deadline')),
    status: formData.get('status')
  };

  if (id) {
    tasks = tasks.map(task => task.id === id ? { ...task, ...payload } : task);
    toast('Task updated');
  } else {
    tasks = [{ id: nextId(tasks), ...payload }, ...tasks];
    toast('Task created');
  }
}

function saveAssignment(formData) {
  const projectId = Number(formData.get('projectId'));
  const userId = Number(formData.get('userId'));
  const role = cleanText(formData.get('role'));
  const existing = assignments.find(assignment => assignment.projectId === projectId && assignment.userId === userId);

  if (existing) {
    assignments = assignments.map(assignment => assignment.id === existing.id ? { ...assignment, role, status: 'Pending' } : assignment);
    toast('Assignment resent');
  } else {
    assignments = [{ id: nextId(assignments), projectId, userId, role, status: 'Pending' }, ...assignments];
    toast('Assignment sent');
  }
}

function saveExpense(formData) {
  const id = Number(formData.get('id'));
  const payload = {
    projectId: Number(formData.get('projectId')),
    category: formData.get('category'),
    amount: Number(formData.get('amount')),
    date: isoToDisplay(formData.get('date'), '2-digit'),
    ref: cleanText(formData.get('ref')),
    note: cleanText(formData.get('note'))
  };

  if (id) {
    expenses = expenses.map(expense => expense.id === id ? { ...expense, ...payload } : expense);
    toast('Expense updated');
  } else {
    expenses = [{ id: nextId(expenses), ...payload }, ...expenses];
    toast('Expense added');
  }
}

function exportReport() {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
    <div class="modal-backdrop" data-export-close></div>
    <div class="export-modal">
      <button class="drawer-close" data-export-close type="button">&times;</button>
      <h3>Export Report</h3>
      <p>Choose your preferred format</p>
      <div class="export-modal-buttons">
        <button class="export-btn-pdf" data-export-type="pdf" type="button"><i class="bx bx-file"></i> Export as PDF</button>
        <button class="export-btn-csv" data-export-type="csv" type="button"><i class="bx bx-spreadsheet"></i> Export as CSV</button>
      </div>
    </div>
  `;
  document.body.appendChild(wrapper);
  wrapper.addEventListener('click', e => {
    if (e.target.closest('[data-export-close]')) { wrapper.remove(); return; }
    const type = e.target.closest('[data-export-type]')?.dataset.exportType;
    if (type !== 'pdf' && type !== 'csv') return;
    wrapper.remove();
    withReportRange(() => {
      if (!projects.length) {
        toast('Nothing to export for the selected dates');
        return;
      }
      try {
        if (type === 'pdf') exportPDF();
        else exportCSV();
      } catch (error) {
        console.error(error);
        toast('Export failed. Please try again.');
      }
    });
  });
}

function exportPDF() {
  const dateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const html = `<!doctype html><html><head><meta charset="UTF-8"><title>Simbulan Report</title>
<style>body{font-family:'Plus Jakarta Sans',Arial,sans-serif;padding:40px;color:#232222}
h1{font-size:22px;margin:0 0 4px}p.sub{color:#827a73;font-size:12px;margin:0 0 24px}
h2{font-size:15px;margin:28px 0 10px;color:#604233;border-bottom:1px solid #e4d8ca;padding-bottom:6px}
table{width:100%;border-collapse:collapse;font-size:12px}th,td{padding:9px 12px;border-bottom:1px solid #e4d8ca;text-align:left}
th{background:#f4f0eb;font-weight:800;color:#604233}.cards{display:flex;gap:16px;margin-bottom:8px}
.cards div{flex:1;padding:14px;border:1px solid #e4d8ca;border-radius:8px}.cards strong{display:block;font-size:20px}
.cards small{color:#827a73;font-size:11px}@media print{body{padding:20px}}</style></head><body>
<h1>SIMBULAN PROJECT REPORT</h1><p class="sub">Generated on ${dateStr}</p>
<div class="cards">
<div><strong>${projects.length}</strong><small>Total Projects</small></div>
<div><strong>${projects.filter(p=>p.status==='Completed').length}</strong><small>Completed</small></div>
<div><strong>${projects.filter(p=>p.status==='Ongoing').length}</strong><small>Ongoing</small></div>
<div><strong>${projects.filter(p=>p.status==='Delayed').length}</strong><small>Delayed</small></div>
</div>
<h2>Project Overview</h2>
<table><thead><tr><th>Project</th><th>Client</th><th>Status</th><th>Progress</th><th>Budget</th><th>Expenses</th></tr></thead><tbody>
${projects.map(p=>`<tr><td>${p.name}</td><td>${p.client}</td><td>${p.status}</td><td>${p.progress}%</td><td>${money(p.budget)}</td><td>${money(projectExpenseTotal(p.id))}</td></tr>`).join('')}
</tbody></table>
<h2>Financial Summary</h2>
<table><thead><tr><th>Item</th><th>Amount</th></tr></thead><tbody>
<tr><td>Total Budget</td><td>${money(totalBudget())}</td></tr>
<tr><td>Total Expenses</td><td>${money(totalExpenses())}</td></tr>
<tr><td>Remaining Budget</td><td>${money(totalBudget()-totalExpenses())}</td></tr>
<tr><td>Budget Utilization</td><td>${Math.round((totalExpenses()/Math.max(totalBudget(),1))*100)}%</td></tr>
</tbody></table>
<script>window.onload=function(){window.print()}<\/script></body></html>`;
  const win = window.open('', '_blank');
  if (!win) {
    toast('Allow pop-ups to export the PDF');
    return;
  }
  win.document.write(html);
  win.document.close();
  toast('PDF report ready to print');
}

function exportCSV() {
  const headers = ['Project Name','Client','Location','Type','Status','Phase','Progress','Start Date','Deadline','Budget','Expenses','Utilization'];
  const rows = projects.map(p => {
    const spent = projectExpenseTotal(p.id);
    return [p.name, p.client, p.location, p.type, p.status, p.phase, p.progress + '%', p.start, p.deadline, p.budget, spent, Math.round((spent/Math.max(p.budget,1))*100) + '%'];
  });
  const csv = [headers, ...rows].map(r => r.map(c => `"${plainText(c).replace(/"/g, '""')}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'simbulan-report.csv';
  a.click();
  URL.revokeObjectURL(url);
  toast('CSV report exported');
}

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(loginForm);
  const user = authenticate(formData.get('email'), formData.get('password'));

  if (!user) {
    loginError.textContent = 'Use kim, anton, or park with password Simbulan2026.';
    return;
  }

  currentUser = user;
  storeSession(loginForm.querySelector('.check input').checked);
  updateProfile();
  loginError.textContent = '';
  loginScreen.classList.add('hidden');
  workspace.classList.remove('hidden');
  render('dashboard');
});

const passwordInput = document.querySelector('#password');
const passwordToggle = document.querySelector('#toggle-password');

function updatePasswordIcon() {
  const isEmpty = !passwordInput.value;
  if (isEmpty) passwordInput.type = 'password';
  const isHidden = passwordInput.type === 'password';
  passwordToggle.innerHTML = `<i class="bx ${isEmpty ? 'bx-lock-alt' : isHidden ? 'bx-hide' : 'bx-show'}"></i>`;
  passwordToggle.disabled = isEmpty;
  passwordToggle.setAttribute('aria-label', isHidden ? 'Show password' : 'Hide password');
}

passwordInput.addEventListener('input', updatePasswordIcon);

passwordToggle.addEventListener('click', () => {
  passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
  updatePasswordIcon();
});

updatePasswordIcon();

document.querySelector('#main-nav').addEventListener('click', event => {
  const button = event.target.closest('.nav-item');
  if (button) {
    state.drawer = null;
    state.reportDatesOpen = false;
    render(button.dataset.view);
  }
});

viewRoot.addEventListener('change', event => {
  const search = event.target.closest('[data-search]');
  const taskCheckbox = event.target.closest('[data-action="toggle-task"]');
  if (search) {
    state.searches[search.dataset.search] = search.value;
    render(state.currentView);
  }

  if (taskCheckbox) {
    const id = Number(taskCheckbox.dataset.id);
    tasks = tasks.map(task => task.id === id ? { ...task, status: taskCheckbox.checked ? 'Completed' : 'Ongoing' } : task);
    render(state.currentView);
  }
});

const datePicker = { node: null, field: null, year: 0, month: 0 };

function closeDatePicker() {
  datePicker.node?.remove();
  datePicker.node = null;
  datePicker.field = null;
}

function drawDatePicker() {
  const { node, field, year, month } = datePicker;
  const selected = field.querySelector('input').value;
  const todayIso = dateToIso(new Date());
  const offset = new Date(year, month, 1).getDay();
  const days = [];
  for (let i = 0; i < 42; i++) {
    const date = new Date(year, month, 1 - offset + i);
    const iso = dateToIso(date);
    const classes = ['dp-day'];
    if (date.getMonth() !== month) classes.push('muted');
    if (iso === todayIso) classes.push('today');
    if (iso === selected) classes.push('selected');
    days.push(`<button class="${classes.join(' ')}" data-dp-day="${iso}" type="button">${date.getDate()}</button>`);
  }
  const title = new Date(year, month, 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  node.innerHTML = `
    <div class="dp-head">
      <strong>${title}</strong>
      <div>
        <button data-dp-nav="-1" type="button" aria-label="Previous month"><i class="bx bx-chevron-left"></i></button>
        <button data-dp-nav="1" type="button" aria-label="Next month"><i class="bx bx-chevron-right"></i></button>
      </div>
    </div>
    <div class="dp-week">${['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => `<span>${day}</span>`).join('')}</div>
    <div class="dp-grid">${days.join('')}</div>
    <div class="dp-foot">
      <button data-dp-clear type="button">Clear</button>
      <button data-dp-day="${todayIso}" type="button">Today</button>
    </div>
  `;
}

function openDatePicker(field) {
  closeDatePicker();
  const value = field.querySelector('input').value;
  const base = value ? isoToDate(value) : new Date();
  const node = document.createElement('div');
  node.className = 'dp';
  document.body.appendChild(node);
  Object.assign(datePicker, { node, field, year: base.getFullYear(), month: base.getMonth() });
  drawDatePicker();

  // Fixed to the viewport so a scrolling modal cannot clip it; flips above the field when there is no room below.
  const trigger = field.getBoundingClientRect();
  const box = node.getBoundingClientRect();
  let top = trigger.bottom + 6;
  if (top + box.height > window.innerHeight - 8) top = trigger.top - box.height - 6;
  node.style.top = `${Math.max(8, top)}px`;
  node.style.left = `${Math.max(8, Math.min(trigger.left, window.innerWidth - box.width - 8))}px`;
}

function setDateField(field, iso) {
  const input = field.querySelector('input');
  const label = field.querySelector('.date-trigger span');
  input.value = iso;
  label.textContent = iso ? isoToDisplay(iso) : 'Select date';
  label.classList.toggle('cs-placeholder', !iso);
  input.dispatchEvent(new Event('input', { bubbles: true }));
}

document.addEventListener('click', event => {
  const trigger = event.target.closest('.date-trigger');
  if (trigger) {
    const field = trigger.closest('.date-field');
    if (datePicker.field === field) closeDatePicker();
    else openDatePicker(field);
    return;
  }
  if (!datePicker.node) return;
  if (!event.target.closest('.dp')) {
    closeDatePicker();
    return;
  }

  const nav = event.target.closest('[data-dp-nav]');
  const day = event.target.closest('[data-dp-day]');
  if (nav) {
    const next = new Date(datePicker.year, datePicker.month + Number(nav.dataset.dpNav), 1);
    datePicker.year = next.getFullYear();
    datePicker.month = next.getMonth();
    drawDatePicker();
  } else if (day || event.target.closest('[data-dp-clear]')) {
    const field = datePicker.field;
    closeDatePicker();
    setDateField(field, day ? day.dataset.dpDay : '');
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeDatePicker();
});

window.addEventListener('resize', closeDatePicker);
window.addEventListener('scroll', event => {
  if (datePicker.node && !datePicker.node.contains(event.target)) closeDatePicker();
}, true);

function drawerFormProblem(form, formData) {
  const emptySelect = [...form.querySelectorAll('.custom-select')].find(el => !el.querySelector('input[type="hidden"]').value);
  if (emptySelect) return { field: emptySelect, message: `${emptySelect.dataset.csLabel || 'Select an option'}.` };

  const emptyDate = [...form.querySelectorAll('.date-field')].find(el => !el.querySelector('input').value);
  if (emptyDate) {
    const label = emptyDate.closest('label').childNodes[0].textContent.trim().toLowerCase();
    return { field: emptyDate, message: `Choose the ${label}.` };
  }

  const blank = [...form.querySelectorAll('input[required]:not([type="hidden"]), textarea[required]')].find(el => !el.value.trim());
  if (blank) return { field: blank, message: 'Fill in all required fields.' };

  if (form.dataset.form === 'project' && formData.get('deadline') < formData.get('start')) {
    return { field: form.querySelector('[name="deadline"]'), message: 'The deadline must be on or after the start date.' };
  }
  return null;
}

viewRoot.addEventListener('submit', event => {
  const form = event.target.closest('form[data-form]');
  if (!form) return;

  event.preventDefault();
  const formData = new FormData(form);
  const problem = drawerFormProblem(form, formData);
  form.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));
  if (problem) {
    problem.field?.classList.add('invalid');
    const errorNode = form.querySelector('.drawer-error');
    if (errorNode) errorNode.textContent = problem.message;
    else toast(problem.message);
    return;
  }

  if (form.dataset.form === 'project') saveProject(formData);
  if (form.dataset.form === 'task') saveTask(formData);
  if (form.dataset.form === 'assignment') saveAssignment(formData);
  if (form.dataset.form === 'expense') saveExpense(formData);

  state.drawer = null;
  render(state.currentView);
});

viewRoot.addEventListener('input', event => {
  const drawerForm = event.target.closest('form[data-form]');
  event.target.closest('.date-field')?.classList.remove('invalid');
  if (drawerForm) {
    event.target.classList.remove('invalid');
    const errorNode = drawerForm.querySelector('.drawer-error');
    if (errorNode) errorNode.textContent = '';
    return;
  }
  if (!event.target.closest('.date-popover')) return;
  document.querySelector('#report-date-error').textContent = '';
});

viewRoot.addEventListener('click', event => {
  if (state.reportDatesOpen && !event.target.closest('.date-range')) {
    state.reportDatesOpen = false;
    document.querySelector('.date-popover')?.remove();
  }

  const csTrigger = event.target.closest('.cs-trigger');
  const csOption = event.target.closest('.cs-option');

  if (!event.target.closest('.custom-select')) {
    document.querySelectorAll('.custom-select.open').forEach(el => {
      el.classList.remove('open');
      el.querySelector('.cs-options').classList.add('hidden');
    });
  }

  if (csTrigger) {
    event.preventDefault();
    event.stopPropagation();
    const csEl = csTrigger.closest('.custom-select');
    const opts = csEl.querySelector('.cs-options');
    document.querySelectorAll('.custom-select.open').forEach(el => {
      if (el !== csEl) { el.classList.remove('open'); el.querySelector('.cs-options').classList.add('hidden'); }
    });
    csEl.classList.toggle('open');
    opts.classList.toggle('hidden');
    opts.classList.remove('drop-up');
    if (csEl.classList.contains('open')) {
      const bounds = (csEl.closest('.expense-drawer') || viewRoot).getBoundingClientRect();
      const box = opts.getBoundingClientRect();
      const trigger = csTrigger.getBoundingClientRect();
      if (box.bottom > bounds.bottom && trigger.top - bounds.top > bounds.bottom - trigger.bottom) opts.classList.add('drop-up');
    }
    return;
  }

  if (csOption) {
    event.preventDefault();
    event.stopPropagation();
    const csEl = csOption.closest('.custom-select');
    const val = csOption.dataset.csValue;
    csEl.querySelector('.cs-trigger span').textContent = csOption.textContent;
    csEl.querySelector('.cs-trigger span').classList.remove('cs-placeholder');
    csEl.classList.remove('invalid');
    const errorNode = csEl.closest('form')?.querySelector('.drawer-error');
    if (errorNode) errorNode.textContent = '';
    csEl.querySelector('input[type="hidden"]').value = val;
    csEl.querySelectorAll('.cs-option').forEach(o => o.classList.remove('selected'));
    csOption.classList.add('selected');
    csEl.classList.remove('open');
    csEl.querySelector('.cs-options').classList.add('hidden');
    if (csEl.closest('.report-filters')) {
      state.reportFilters[csEl.dataset.csName.replace('f-', '')] = val;
      render('reports');
      return;
    }
    if (csEl.dataset.csName === 'userId') {
      const form = csEl.closest('form');
      const roleInput = form?.querySelector('input[name="role"]');
      if (roleInput) roleInput.value = userById(val).role;
    }
    return;
  }

  const viewButton = event.target.closest('[data-view]');
  const routeButton = event.target.closest('[data-route]');
  const reportButton = event.target.closest('[data-report-tab]');
  const filterButton = event.target.closest('[data-task-filter]');
  const actionButton = event.target.closest('[data-action]');
  const isInteractiveClick = Boolean(event.target.closest('button, a, input, select, textarea'));
  const routeControl = event.target.closest('button[data-route], a[data-route]');

  if (viewButton) {
    event.preventDefault();
    state.drawer = null;
    render(viewButton.dataset.view);
    return;
  }

  if (routeButton && (!isInteractiveClick || routeControl)) {
    event.preventDefault();
    if (routeButton.dataset.id) state.selectedProjectId = Number(routeButton.dataset.id);
    render(routeButton.dataset.route);
    return;
  }

  if (reportButton) {
    state.reportTab = reportButton.dataset.reportTab;
    render('reports');
    return;
  }

  if (filterButton) {
    state.taskFilter = filterButton.dataset.taskFilter;
    render('tasks');
    return;
  }

  if (!actionButton) return;

  const action = actionButton.dataset.action;
  const id = Number(actionButton.dataset.id);

  if (action === 'toggle-task') return;
  if (action === 'prev-month') {
    state.calendarMonth--;
    if (state.calendarMonth < 0) { state.calendarMonth = 11; state.calendarYear--; }
  }
  if (action === 'next-month') {
    state.calendarMonth++;
    if (state.calendarMonth > 11) { state.calendarMonth = 0; state.calendarYear++; }
  }
  if (action === 'calendar-today') {
    state.calendarMonth = new Date().getMonth();
    state.calendarYear = new Date().getFullYear();
  }
  if (action === 'new-project') state.drawer = { type: 'project', mode: 'new' };
  if (action === 'edit-project') state.drawer = { type: 'project', mode: 'edit', id };
  if (action === 'assign-member') state.drawer = { type: 'assignment', mode: 'new', projectId: id };
  if (action === 'new-task') state.drawer = { type: 'task', mode: 'new' };
  if (action === 'new-task-for-project') state.drawer = { type: 'task', mode: 'new', projectId: id };
  if (action === 'edit-task') state.drawer = { type: 'task', mode: 'edit', id };
  if (action === 'new-expense') state.drawer = { type: 'expense', mode: 'new' };
  if (action === 'new-expense-for-project') state.drawer = { type: 'expense', mode: 'new', projectId: id };
  if (action === 'edit-expense') state.drawer = { type: 'expense', mode: 'edit', id };
  if (action === 'open-project-detail') {
    state.selectedProjectId = id;
    render('project-detail');
    return;
  }
  if (action === 'open-cost-detail') {
    state.selectedProjectId = id;
    render('cost-detail');
    return;
  }
  if (action === 'close-drawer') state.drawer = null;
  if (action === 'complete-task') {
    tasks = tasks.map(task => task.id === id ? { ...task, status: 'Completed' } : task);
    toast('Task completed');
  }
  if (action === 'reopen-task') {
    tasks = tasks.map(task => task.id === id ? { ...task, status: 'Ongoing' } : task);
    toast('Task reopened');
  }
  if (action === 'accept-assignment') {
    assignments = assignments.map(assignment => assignment.id === id ? { ...assignment, status: 'Accepted' } : assignment);
    toast('Assignment accepted');
  }
  if (action === 'reject-assignment') {
    assignments = assignments.map(assignment => assignment.id === id ? { ...assignment, status: 'Rejected' } : assignment);
    toast('Assignment rejected');
  }
  if (action === 'remove-assignment') {
    assignments = assignments.filter(assignment => assignment.id !== id);
    toast('Assignment removed');
  }
  if (action === 'delete-project' || action === 'delete-task' || action === 'delete-expense') {
    if (action === 'delete-project' && projects.length === 1) {
      toast('Keep at least one project');
      return;
    }
    const expense = expenses.find(item => item.id === id);
    const message = action === 'delete-project'
      ? `Delete "${projectById(id).name}"? Its tasks, expenses and team assignments will be removed too.`
      : action === 'delete-task'
        ? `Delete the task "${tasks.find(task => task.id === id)?.detail}"?`
        : `Delete this ${money(expense?.amount)} ${expense?.category} expense?`;
    confirmDialog('Delete', message, 'Delete', () => {
      deleteRecord(action, id);
      render(state.currentView);
    });
    return;
  }
  if (action === 'export-report') {
    exportReport();
    return;
  }
  if (action === 'toggle-report-dates') state.reportDatesOpen = !state.reportDatesOpen;
  if (action === 'reset-report-dates') {
    state.reportFrom = '2026-01-01';
    state.reportTo = '2026-12-31';
    state.reportDatesOpen = false;
  }
  if (action === 'apply-report-dates') {
    const fromInput = document.querySelector('#report-from');
    const toInput = document.querySelector('#report-to');
    const from = fromInput.value;
    const to = toInput.value;
    const problem = !from ? [fromInput, 'Choose a start date.']
      : !to ? [toInput, 'Choose an end date.']
      : from > to ? [toInput, 'The end date must be on or after the start date.']
      : null;
    fromInput.closest('.date-field').classList.remove('invalid');
    toInput.closest('.date-field').classList.remove('invalid');
    if (problem) {
      problem[0].closest('.date-field').classList.add('invalid');
      document.querySelector('#report-date-error').textContent = problem[1];
      return;
    }
    state.reportFrom = from;
    state.reportTo = to;
    state.reportDatesOpen = false;
  }

  render(state.currentView);
});

function deleteRecord(action, id) {
  if (action === 'delete-project') {
    projects = projects.filter(project => project.id !== id);
    tasks = tasks.filter(task => task.projectId !== id);
    expenses = expenses.filter(expense => expense.projectId !== id);
    assignments = assignments.filter(assignment => assignment.projectId !== id);
    state.selectedProjectId = projects[0]?.id || 0;
    toast('Project deleted');
  }
  if (action === 'delete-task') {
    tasks = tasks.filter(task => task.id !== id);
    toast('Task deleted');
  }
  if (action === 'delete-expense') {
    expenses = expenses.filter(expense => expense.id !== id);
    toast('Expense deleted');
  }
}

function confirmDialog(title, message, confirmLabel, onConfirm) {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
    <div class="modal-backdrop" data-confirm-cancel></div>
    <div class="export-modal">
      <h3>${title}</h3>
      <p>${message}</p>
      <div class="export-modal-buttons">
        <button class="export-btn-pdf" data-confirm-ok type="button">${confirmLabel}</button>
        <button class="export-btn-csv" data-confirm-cancel type="button">Cancel</button>
      </div>
    </div>
  `;
  document.body.appendChild(wrapper);
  wrapper.addEventListener('click', e => {
    if (e.target.closest('[data-confirm-cancel]')) wrapper.remove();
    if (e.target.closest('[data-confirm-ok]')) { wrapper.remove(); onConfirm(); }
  });
}

function performLogout() {
  clearSession();
  workspace.classList.add('hidden');
  loginScreen.classList.remove('hidden');
  loginForm.reset();
  updatePasswordIcon();
  loginError.textContent = '';
  document.querySelector('#profile-dropdown').classList.add('hidden');
}

function showLogoutConfirm() {
  document.querySelector('#profile-dropdown').classList.add('hidden');
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
    <div class="modal-backdrop" data-logout-cancel></div>
    <div class="export-modal">
      <h3>Log out</h3>
      <p>Are you sure you want to log out of your account?</p>
      <div class="export-modal-buttons">
        <button class="export-btn-pdf" data-logout-confirm type="button"><i class="bx bx-log-out"></i> Log out</button>
        <button class="export-btn-csv" data-logout-cancel type="button">Cancel</button>
      </div>
    </div>
  `;
  document.body.appendChild(wrapper);
  wrapper.addEventListener('click', e => {
    if (e.target.closest('[data-logout-cancel]')) { wrapper.remove(); return; }
    if (e.target.closest('[data-logout-confirm]')) { wrapper.remove(); performLogout(); }
  });
}

document.querySelector('#logout-button').addEventListener('click', () => {
  showLogoutConfirm();
});

document.querySelector('#profile-trigger').addEventListener('click', (event) => {
  if (event.target.closest('#dropdown-logout')) return;
  event.stopPropagation();
  document.querySelector('#profile-dropdown').classList.toggle('hidden');
});

document.querySelector('#dropdown-logout').addEventListener('click', () => {
  showLogoutConfirm();
});

document.addEventListener('click', (event) => {
  const dropdown = document.querySelector('#profile-dropdown');
  if (!dropdown.classList.contains('hidden') && !event.target.closest('#profile-trigger')) {
    dropdown.classList.add('hidden');
  }
});

document.querySelector('.login-options button').addEventListener('click', () => {
  toast('Ask your Project Manager to reset your password');
});

restoreSession();
