document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
});

// Project filtering
function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
function showDetails(projectId) {
    const details = {
        todo: {
            title: "ToDo App",
            desc: "A simple Flask + MongoDB To-Do application allowing task filtering (completed/incomplete), secure login/register, and real-time task updates."
        },
        agrorisk: {
            title: "AgroRisk Monitor",
            desc: "A smart agriculture dashboard built using Flask and Tableau. Monitors crop disease risk and weather impact for Indian states using JSON data."
        },
        library: {
            title: "Library Management System",
            desc: "Python Tkinter + MongoDB based system for book check-ins, member management, and borrowing history. Designed for school libraries."
        },
        chatbot: {
            title: "AI Chatbot",
            desc: "An intelligent chatbot using transformer-based NLP models (Pegasus/BART) for summarization and Q&A tasks with a Flask backend."
        },
        replastix: {
            title: "RePlastix Innovations (Salesforce)",
            desc: "A Salesforce project for managing plastic recycling drives, volunteer tracking, and real-time analytics for sustainability initiatives."
        },
        acl: {
            title: "Optimizing Users, Roles & ACLs",
            desc: "A role-based access control implementation in ServiceNow using workflows, ACLs, and user-role mappings to streamline data privacy and access."
        }
    };

    document.getElementById("project-title").innerText = details[projectId].title;
    document.getElementById("project-description").innerText = details[projectId].desc;
    document.getElementById("project-list").style.display = "none";
    document.getElementById("project-details").style.display = "block";
}

function goBack() {
    document.getElementById("project-details").style.display = "none";
    document.getElementById("project-list").style.display = "grid";
}
