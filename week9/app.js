<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student Management Portal</title>

  <link href=  "mongodb://vakkalagaddagreeshma2006_db_user:2aQWkPnjqQSy78R5@ac-d0zyata-shard-00-00.eglbcrr.mongodb.net:27017,ac-d0zyata-shard-00-01.eglbcrr.mongodb.net:27017,ac-d0zyata-shard-00-02.eglbcrr.mongodb.net:27017/?ssl=true&replicaSet=atlas-nijcph-shard-0&authSource=admin&appName=Cluster0";
 rel="stylesheet">

  <style>
    :root {
      --primary: #4f46e5;
      --primary-hover: #4338ca;
      --bg-gray: #f9fafb;
      --text-main: #1f2937;
      --border: #e5e7eb;
    }

    body {
      font-family: 'Inter', sans-serif;
      background-color: var(--bg-gray);
      color: var(--text-main);
      margin: 0;
      padding: 0;
      display: flex;
      min-height: 100vh;
    }

    .sidebar {
      width: 260px;
      background: white;
      border-right: 1px solid var(--border);
      display: flex;
      flex-direction: column;
      padding: 24px;
    }

    .sidebar h2 {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary);
      margin-bottom: 32px;
    }

    .sidebar a {
      display: flex;
      align-items: center;
      padding: 12px 16px;
      color: #4b5563;
      text-decoration: none;
      border-radius: 8px;
      margin-bottom: 8px;
      font-weight: 500;
      transition: all 0.2s;
    }

    .sidebar a:hover,
    .sidebar a.active {
      background: #f3f4f6;
      color: var(--primary);
    }

    .main-content {
      flex: 1;
      padding: 40px;
      overflow-y: auto;
    }

    .main-content h1 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 32px;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 24px;
      margin-bottom: 40px;
    }

    .stat-card {
      background: white;
      padding: 24px;
      border-radius: 12px;
      border: 1px solid var(--border);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    }

    .stat-card h3 {
      font-size: 0.875rem;
      color: #6b7280;
      margin-bottom: 8px;
      text-transform: uppercase;
    }

    .stat-card p {
      font-size: 1.875rem;
      font-weight: 700;
      color: var(--primary);
      margin: 0;
    }

    .quick-actions {
      display: flex;
      gap: 16px;
      margin-bottom: 40px;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 500;
      text-decoration: none;
      transition: all 0.2s;
    }

    .btn-primary {
      background: var(--primary);
      color: white;
    }

    .btn-primary:hover {
      background: var(--primary-hover);
    }

    .btn-secondary {
      background: white;
      color: var(--text-main);
      border: 1px solid var(--border);
    }

    .btn-secondary:hover {
      background: #f9fafb;
    }

    .recent-activity {
      background: white;
      border-radius: 12px;
      border: 1px solid var(--border);
      padding: 24px;
    }
  </style>
</head>

<body>

  <div class="sidebar">
    <h2>Student Portal</h2>

    <a href="/dashboard" class="active">Dashboard</a>
    <a href="/students">Students</a>
  </div>

  <div class="main-content">

    <h1>Welcome Back, Admin</h1>

    <div class="stats-grid">

      <div class="stat-card">
        <h3>Total Students</h3>
        <p><%= totalStudents %></p>
      </div>

      <div class="stat-card">
        <h3>Total Courses</h3>
        <p>12</p>
      </div>

      <div class="stat-card">
        <h3>System Status</h3>
        <p>Active</p>
      </div>

    </div>

    <div class="quick-actions">
      <a href="/students/add" class="btn btn-primary">
        Add Student
      </a>

      <a href="/students" class="btn btn-secondary">
        View All Students
      </a>
    </div>

    <div class="recent-activity">
      <h3>Recent Activity</h3>

      <p style="color: #6b7280; margin-top: 8px;">
        No new notifications
      </p>
    </div>

  </div>

  <script>
    const activeLink = document.querySelector(
      `.sidebar a[href="${window.location.pathname}"]`
    );

    if (activeLink) {
      document
        .querySelectorAll('.sidebar a')
        .forEach(a => a.classList.remove('active'));

      activeLink.classList.add('active');
    }
  </script>

</body>
</html>
