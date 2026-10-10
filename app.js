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
  searches: {
    dashboard: '',
    projects: '',
    costs: '',
    reports: ''
  }
};

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

function updateProfile() {
  profileName.textContent = currentUser.name;
  profileRole.textContent = currentUser.role;
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

function statusClass(status) {
  return String(status).toLowerCase().replace(/\s+/g, '-');
}

function searchMatch(project, term) {
  const text = `${project.name} ${project.client} ${project.location} ${project.type} ${project.status}`.toLowerCase();
  return text.includes(String(term || '').toLowerCase());
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
  const days = [24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7];
  const events = [
    { day: 25, project: projectById(5), lane: 1 },
    { day: 30, project: projectById(1), lane: 2 },
    { day: 4, project: projectById(2), lane: 1 },
    { day: 6, project: projectById(4), lane: 2 }
  ].filter(event => projectRows.some(project => project.id === event.project.id));

  return `
    <div class="calendar-board">
      <div class="calendar-weekdays">
        ${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => `<span>${day}</span>`).join('')}
      </div>
      <div class="calendar-grid">
        ${days.map((day, index) => `
          <article class="calendar-day">
            <strong>${day}</strong>
            ${events.filter(event => event.day === day).map(event => `
              <button class="calendar-event lane-${event.lane}" data-route="project-detail" data-id="${event.project.id}" type="button">${event.project.name}</button>
            `).join('')}
          </article>
        `).join('')}
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

function statCard(title, value) {
  return `
    <article class="stat-card">
      <span class="folder-icon"></span>
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
      <div class="avatar-photo small"></div>
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

function overviewReports() {
  return `
    ${reportStatGrid()}
    <section class="report-card-grid">
      <article class="report-card"><h3>Project Progress Report</h3>${reportBars()}</article>
      <article class="report-card"><h3>Cost Allocation Report</h3><div class="donut-row"><div class="donut"></div><ul><li>Design ${money(categoryTotal('Design'))}</li><li>Manufacturing ${money(categoryTotal('Manufacturing'))}</li><li>Installation ${money(categoryTotal('Installation'))}</li></ul></div></article>
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
  return `
    ${reportStatGrid()}
    <div class="report-filters">
      ${searchBox('reports')}
      <select><option>Status</option></select>
      <select><option>Client</option></select>
      <select><option>Current Phase</option></select>
      <select><option>Sort by</option></select>
    </div>
    <article class="report-card wide">
      <h3>Project Progress Report</h3>
      <table class="data-table inline-table">
        <thead><tr><th>Project</th><th>Client</th><th>Progress</th><th>Status</th><th>Current Phase</th><th>Start Date</th><th>Deadline</th><th>Actions</th></tr></thead>
        <tbody>
          ${projects.filter(project => searchMatch(project, state.searches.reports)).map(project => `<tr><td>${project.name}</td><td>${project.client}</td><td>${progressMarkup(project.progress, true)}</td><td><span class="status-chip ${statusClass(project.status)}">${project.status}</span></td><td>${project.phase}</td><td>${project.start}</td><td>${project.deadline}</td><td>${actionButton('open-project-detail', 'Open', project.id)}</td></tr>`).join('')}
        </tbody>
      </table>
    </article>
    <section class="triple-grid">
      <article class="report-card"><h3>Project Completion Status</h3><div class="donut-row"><div class="donut"></div><ul><li>Ongoing ${projects.filter(project => project.status === 'Ongoing').length}</li><li>Completed ${projects.filter(project => project.status === 'Completed').length}</li><li>Delayed ${projects.filter(project => project.status === 'Delayed').length}</li></ul></div></article>
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
      <article class="report-card"><h3>Cost Distribution</h3><div class="donut-row"><div class="donut"></div><ul><li>Manufacturing ${compactMoney(categoryTotal('Manufacturing'))}</li><li>Installation ${compactMoney(categoryTotal('Installation'))}</li><li>Design ${compactMoney(categoryTotal('Design'))}</li></ul></div></article>
      <article class="report-card"><h3>Budget vs. Actual Spending</h3><div class="column-chart">${projects.slice(0, 5).map(project => `<span style="--h:${Math.max(18, Math.round((projectExpenseTotal(project.id) / Math.max(project.budget, 1)) * 100))}%"></span>`).join('')}</div></article>
      <article class="report-card wide"><h3>Project Cost Breakdown</h3>${reportCostTable()}</article>
      <article class="report-card"><h3>Cost Trend</h3><div class="trend-line"></div></article>
      <article class="report-card"><h3>Cost by Project</h3>${costBreakdownByProject()}</article>
    </section>
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

function reportsView() {
  const body = state.reportTab === 'overview' ? overviewReports() : state.reportTab === 'progress' ? progressReports() : costReports();

  return `
    ${pageHead('Project and cost insights', 'Reports', '<button class="date-button" type="button"><i class="bx bx-calendar"></i> January 1, 2026-December 31, 2026</button><button class="brown-button" data-action="export-report" type="button"><i class="bx bx-download"></i> Exports</button>')}
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
    type: 'Fit-out',
    progress: 0,
    phase: 'Design',
    status: 'Ongoing',
    start: 'Oct 10, 2026',
    deadline: 'Dec 31, 2026',
    budget: 0,
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
          <label>Budget<input name="budget" type="number" min="0" value="${project.budget}" required /></label>
          <label>Progress<input name="progress" type="number" min="0" max="100" value="${project.progress}" required /></label>
        </div>
        <div class="drawer-row">
          <label>Phase<input name="phase" value="${project.phase}" required /></label>
          <label>Status<select name="status"><option ${project.status === 'Ongoing' ? 'selected' : ''}>Ongoing</option><option ${project.status === 'Pending' ? 'selected' : ''}>Pending</option><option ${project.status === 'Completed' ? 'selected' : ''}>Completed</option><option ${project.status === 'Delayed' ? 'selected' : ''}>Delayed</option></select></label>
        </div>
        <div class="drawer-row">
          <label>Start Date<input name="start" value="${project.start}" required /></label>
          <label>Deadline<input name="deadline" value="${project.deadline}" required /></label>
        </div>
        <label>Scope of Work<textarea name="scope" required>${project.scope}</textarea></label>
        <label>Furniture / Interior Requirements<textarea name="requirements" required>${project.requirements}</textarea></label>
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
        <label>Project<select name="projectId">${projectOptions(assignment.projectId)}</select></label>
        <label>Team Member<select name="userId">${assignableUserOptions(assignment.userId)}</select></label>
        <label>Assignment Role<input name="role" value="${assignment.role}" required /></label>
        <button class="drawer-submit" type="submit">SEND ASSIGNMENT</button>
      </form>
    </aside>
  `;
}

function taskDrawer() {
  const isEdit = state.drawer.mode === 'edit';
  const task = isEdit ? tasks.find(item => item.id === Number(state.drawer.id)) : {
    projectId: state.drawer.projectId || projects[0].id,
    detail: '',
    owner: 'Kim Sohee',
    deadline: 'Oct 30, 2026',
    status: 'Pending'
  };

  return `
    <aside class="expense-drawer side-drawer" aria-label="${isEdit ? 'Edit task' : 'Create task'}">
      <button class="drawer-close" data-action="close-drawer" type="button">x</button>
      <h2>${isEdit ? 'EDIT TASK' : 'CREATE TASK'}</h2>
      <form data-form="task">
        <input type="hidden" name="id" value="${isEdit ? task.id : ''}" />
        <label>Project<select name="projectId">${projectOptions(task.projectId)}</select></label>
        <label>Task Details<input name="detail" value="${task.detail}" required /></label>
        <div class="drawer-row">
          <label>Owner<select name="owner">${userOptions(task.owner)}</select></label>
          <label>Deadline<input name="deadline" value="${task.deadline}" required /></label>
        </div>
        <label>Status<select name="status"><option ${task.status === 'Pending' ? 'selected' : ''}>Pending</option><option ${task.status === 'Ongoing' ? 'selected' : ''}>Ongoing</option><option ${task.status === 'Completed' ? 'selected' : ''}>Completed</option></select></label>
        <button class="drawer-submit" type="submit">${isEdit ? 'SAVE TASK' : 'CREATE TASK'}</button>
      </form>
    </aside>
  `;
}

function expenseDrawer() {
  const isEdit = state.drawer.mode === 'edit';
  const expense = isEdit ? expenses.find(item => item.id === Number(state.drawer.id)) : {
    projectId: state.drawer.projectId || projects[0].id,
    category: 'Design',
    amount: '',
    date: 'Oct 10, 2026',
    ref: '',
    note: ''
  };

  return `
    <aside class="expense-drawer side-drawer" aria-label="${isEdit ? 'Edit expense' : 'Add project expense'}">
      <button class="drawer-close" data-action="close-drawer" type="button">x</button>
      <h2>${isEdit ? 'EDIT PROJECT EXPENSE' : 'ADD PROJECT EXPENSE'}</h2>
      <form data-form="expense">
        <input type="hidden" name="id" value="${isEdit ? expense.id : ''}" />
        <label>Project<select name="projectId">${projectOptions(expense.projectId)}</select></label>
        <label>Expense Category<select name="category"><option ${expense.category === 'Design' ? 'selected' : ''}>Design</option><option ${expense.category === 'Manufacturing' ? 'selected' : ''}>Manufacturing</option><option ${expense.category === 'Installation' ? 'selected' : ''}>Installation</option><option ${expense.category === 'Other' ? 'selected' : ''}>Other</option></select></label>
        <label>Amount<input name="amount" type="number" min="0" value="${expense.amount}" required /></label>
        <div class="drawer-row">
          <label>Expense Date<input name="date" value="${expense.date}" required /></label>
          <label>Ref NO<input name="ref" value="${expense.ref}" /></label>
        </div>
        <label>Note<textarea name="note">${expense.note}</textarea></label>
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
  state.currentView = view;
  updateProfile();
  viewRoot.innerHTML = views[view]();
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.view === activeNavFor(view));
  });
  viewRoot.scrollTop = 0;
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
    name: formData.get('name').trim(),
    client: formData.get('client').trim(),
    location: formData.get('location').trim(),
    type: formData.get('type').trim(),
    budget: Number(formData.get('budget')),
    progress: Number(formData.get('progress')),
    phase: formData.get('phase').trim(),
    status: formData.get('status'),
    start: formData.get('start').trim(),
    deadline: formData.get('deadline').trim(),
    scope: formData.get('scope').trim(),
    requirements: formData.get('requirements').trim()
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
    detail: formData.get('detail').trim(),
    owner: formData.get('owner').trim(),
    deadline: formData.get('deadline').trim(),
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
  const role = formData.get('role').trim();
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
    date: formData.get('date').trim(),
    ref: formData.get('ref').trim(),
    note: formData.get('note').trim()
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
  const summary = [
    'Simbulan Project Report',
    `Projects: ${projects.length}`,
    `Completed: ${projects.filter(project => project.status === 'Completed').length}`,
    `Ongoing: ${projects.filter(project => project.status === 'Ongoing').length}`,
    `Delayed: ${projects.filter(project => project.status === 'Delayed').length}`,
    `Budget: ${money(totalBudget())}`,
    `Expenses: ${money(totalExpenses())}`
  ].join('\n');

  const blob = new Blob([summary], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'simbulan-report.txt';
  link.click();
  URL.revokeObjectURL(url);
  toast('Report exported');
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
  updateProfile();
  loginError.textContent = '';
  loginScreen.classList.add('hidden');
  workspace.classList.remove('hidden');
  render('dashboard');
});

document.querySelector('#toggle-password').addEventListener('click', event => {
  const password = document.querySelector('#password');
  const isHidden = password.type === 'password';
  password.type = isHidden ? 'text' : 'password';
  event.currentTarget.innerHTML = `<i class="bx ${isHidden ? 'bx-hide' : 'bx-show'}"></i>`;
  event.currentTarget.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
});

document.querySelector('#main-nav').addEventListener('click', event => {
  const button = event.target.closest('.nav-item');
  if (button) {
    state.drawer = null;
    render(button.dataset.view);
  }
});

viewRoot.addEventListener('change', event => {
  const search = event.target.closest('[data-search]');
  const taskCheckbox = event.target.closest('[data-action="toggle-task"]');
  const assignmentUser = event.target.closest('form[data-form="assignment"] select[name="userId"]');

  if (search) {
    state.searches[search.dataset.search] = search.value;
    render(state.currentView);
  }

  if (taskCheckbox) {
    const id = Number(taskCheckbox.dataset.id);
    tasks = tasks.map(task => task.id === id ? { ...task, status: taskCheckbox.checked ? 'Completed' : 'Ongoing' } : task);
    render(state.currentView);
  }

  if (assignmentUser) {
    const roleInput = assignmentUser.closest('form').querySelector('input[name="role"]');
    roleInput.value = userById(assignmentUser.value).role;
  }
});

viewRoot.addEventListener('submit', event => {
  const form = event.target.closest('form[data-form]');
  if (!form) return;

  event.preventDefault();
  const formData = new FormData(form);

  if (form.dataset.form === 'project') saveProject(formData);
  if (form.dataset.form === 'task') saveTask(formData);
  if (form.dataset.form === 'assignment') saveAssignment(formData);
  if (form.dataset.form === 'expense') saveExpense(formData);

  state.drawer = null;
  render(state.currentView);
});

viewRoot.addEventListener('click', event => {
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
  if (action === 'delete-project') {
    if (projects.length === 1) {
      toast('Keep at least one project');
      render(state.currentView);
      return;
    }
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
  if (action === 'export-report') {
    exportReport();
    return;
  }

  render(state.currentView);
});

document.querySelector('#logout-button').addEventListener('click', () => {
  workspace.classList.add('hidden');
  loginScreen.classList.remove('hidden');
});
