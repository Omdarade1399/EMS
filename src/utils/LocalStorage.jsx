import { useEffect } from "react";

const employees = [
  {
    "id": 1,
    "firstName": "Rohan",
    "email": "employee1@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "new": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "activeTask": true,
        "newTask": false,
        "completedTask": false,
        "failedTask": false,
        "taskTitle": "Develop Feature X",
        "taskDescription": "Implement the core functionality for feature X in the project.",
        "taskDate": "2024-11-10",
        "category": "Development"
      },
      {
        "activeTask": false,
        "newTask": true,
        "completedTask": false,
        "failedTask": false,
        "taskTitle": "Design Homepage",
        "taskDescription": "Create a responsive design for the homepage.",
        "taskDate": "2024-11-12",
        "category": "Design"
      },
      {
        "activeTask": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false,
        "taskTitle": "Write Unit Tests",
        "taskDescription": "Write unit tests for the user authentication module.",
        "taskDate": "2024-11-07",
        "category": "Testing"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Sneha",
    "email": "employee2@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "new": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "activeTask": false,
        "newTask": true,
        "completedTask": false,
        "failedTask": false,
        "taskTitle": "Market Research",
        "taskDescription": "Conduct market research for the upcoming product launch.",
        "taskDate": "2024-11-15",
        "category": "Research"
      },
      {
        "activeTask": true,
        "newTask": false,
        "completedTask": false,
        "failedTask": false,
        "taskTitle": "Bug Fixing",
        "taskDescription": "Resolve bugs reported in the mobile application.",
        "taskDate": "2024-11-08",
        "category": "Development"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Vikram",
    "email": "employee3@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "new": 0,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "activeTask": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false,
        "taskTitle": "Prepare Documentation",
        "taskDescription": "Prepare technical documentation for the API endpoints.",
        "taskDate": "2024-11-06",
        "category": "Documentation"
      },
      {
        "activeTask": false,
        "newTask": false,
        "completedTask": false,
        "failedTask": true,
        "taskTitle": "Client Presentation",
        "taskDescription": "Prepare and deliver a presentation for the new client proposal.",
        "taskDate": "2024-11-05",
        "category": "Design"
      },
      {
        "activeTask": true,
        "newTask": false,
        "completedTask": false,
        "failedTask": false,
        "taskTitle": "Optimize Database",
        "taskDescription": "Optimize database queries for better performance.",
        "taskDate": "2024-11-09",
        "category": "Development"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Priya",
    "email": "employee4@example.com",
    "password": "123",
    "taskCount": {
      "active": 0,
      "new": 1,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "activeTask": false,
        "newTask": true,
        "completedTask": false,
        "failedTask": false,
        "taskTitle": "UI Testing",
        "taskDescription": "Conduct UI testing for the new admin dashboard.",
        "taskDate": "2024-11-13",
        "category": "Testing"
      },
      {
        "activeTask": false,
        "newTask": false,
        "completedTask": false,
        "failedTask": true,
        "taskTitle": "Write Blog Post",
        "taskDescription": "Draft a blog post on best coding practices.",
        "taskDate": "2024-11-07",
        "category": "Documentation"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Arjun",
    "email": "employee5@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "new": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "activeTask": true,
        "newTask": false,
        "completedTask": false,
        "failedTask": false,
        "taskTitle": "Frontend Development",
        "taskDescription": "Develop the new user profile page using React.",
        "taskDate": "2024-11-11",
        "category": "Development"
      },
      {
        "activeTask": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false,
        "taskTitle": "Conduct Interviews",
        "taskDescription": "Interview candidates for the open developer positions.",
        "taskDate": "2024-11-06",
        "category": "Research"
      },
      {
        "activeTask": false,
        "newTask": true,
        "completedTask": false,
        "failedTask": false,
        "taskTitle": "SEO Optimization",
        "taskDescription": "Improve SEO for the company website.",
        "taskDate": "2024-11-14",
        "category": "Design"
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "firstName": "Rajesh",
    "email": "admin1@example.com",
    "password": "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees))
  localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"))
  const admin = JSON.parse(localStorage.getItem("admin"))

  return {employees, admin}
}