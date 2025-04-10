// modules.js
const sqlModules = [
    {
      title: "Introduction",
      topics: [
        {
          desc: "Create new database",
          code: `CREATE DATABASE nama_database;`
        }
      ]
    },
    {
      title: "Basic Database and Table",
      topics: [
        {
          desc: "Create new database",
          code: `CREATE DATABASE nama_database;`
        },
        {
          desc: "Using database",
          code: `USE nama_database;`
        },
        {
          desc: "Create new table",
          code: `CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2),
    category VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`
        }
      ]
    }
    // Tambahkan bagian lain seperti CRUD, Join, dsb.
  ];
  
  function generateModules() {
    const container = document.getElementById("modules");
  
    sqlModules.forEach((modul, index) => {
      const stack = document.createElement("div");
      stack.classList.add("stack");
  
      stack.innerHTML = `
        <input type="checkbox" id="faq${index}" />
        <label for="faq${index}">
          <h2>${index}</h2>
          <h3>${modul.title}</h3>
        </label>
        <div class="content">
          <br><hr>
          ${modul.topics.map(topic => `
            <p class="desc">${topic.desc}</p>
            <div class="code-background">
              <button class="copy-btn" onclick="copyToClipboard(this)">
                <i class="far fa-copy"></i>
              </button>
              <pre><code>${topic.code}</code></pre>
            </div>
          `).join("")}
        </div>
      `;
  
      container.appendChild(stack);
    });
  }
  
  generateModules();
  