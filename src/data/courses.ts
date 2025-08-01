export interface Course {
  id: string;
  date: string;
  title: string;
  semester: string;
  examTime: string;
}

export interface ProgramData {
  name: string;
  fullName: string;
  examCenter: string;
  courses: Course[];
}

export const programData: Record<string, ProgramData> = {
  bcis: {
    name: "BCIS",
    fullName: "Bachelor of Computer Information Systems",
    examCenter: "APEX College",
    courses: [
      {
        id: "bcis-1",
        date: "2025-08-01",
        title: "English I",
        semester: "I",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-2",
        date: "2025-08-02",
        title: "General Psychology",
        semester: "I",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-3",
        date: "2025-08-03",
        title: "Mathematics I",
        semester: "I",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-4",
        date: "2025-08-04",
        title: "Programming Language",
        semester: "I",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-5",
        date: "2025-08-05",
        title: "English II",
        semester: "II",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-6",
        date: "2025-08-06",
        title: "Strategic Management",
        semester: "VIII",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-7",
        date: "2025-08-07",
        title: "Computer Graphics and Image Processing",
        semester: "VI",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-8",
        date: "2025-08-08",
        title: "Internet Technology (Web Programming)",
        semester: "IV",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-9",
        date: "2025-08-09",
        title: "Data Communications and Networks",
        semester: "V",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-10",
        date: "2025-08-10",
        title: "Legal Aspects of Business and Technology",
        semester: "VIII",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-11",
        date: "2025-08-11",
        title: "Data Structure and Algorithms",
        semester: "VI",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-12",
        date: "2025-08-12",
        title: "Information System Security",
        semester: "VII",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-13",
        date: "2025-08-13",
        title: "Database Management System",
        semester: "IV",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-14",
        date: "2025-08-14",
        title: "Digital Economy",
        semester: "VIII",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-15",
        date: "2025-08-15",
        title: "IT Project Management",
        semester: "VII",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-16",
        date: "2025-08-16",
        title: "Advance Programming (JAVA)",
        semester: "V",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-17",
        date: "2025-08-17",
        title: "Fundamentals of Operations Management",
        semester: "VI",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-18",
        date: "2025-08-18",
        title: "Mathematics II",
        semester: "II",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-19",
        date: "2025-08-19",
        title: "Management of Human Resources",
        semester: "VII",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-20",
        date: "2025-08-20",
        title: "Digital Systems",
        semester: "II",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-21",
        date: "2025-08-21",
        title: "Fundamentals of Financial Management",
        semester: "V",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-22",
        date: "2025-08-22",
        title: "Electronic Commerce (Programming)",
        semester: "VI",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-23",
        date: "2025-08-23",
        title: "Principles of Marketing",
        semester: "V",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-24",
        date: "2025-08-24",
        title: "Introductory Microeconomics",
        semester: "I",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-25",
        date: "2025-08-25",
        title: "Operating System",
        semester: "V",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-26",
        date: "2025-08-27",
        title: "Fundamentals of Organizational Behaviour",
        semester: "IV",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-27",
        date: "2025-08-28",
        title: "Business Research Methods",
        semester: "VI",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-28",
        date: "2025-08-29",
        title: "Numerical Methods",
        semester: "III",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-29",
        date: "2025-08-30",
        title: "Fundamentals of Sociology",
        semester: "III",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-30",
        date: "2025-08-31",
        title: "Object Oriented Language (Java)",
        semester: "II",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-31",
        date: "2025-09-01",
        title: "Introductory Macroeconomics",
        semester: "II",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-32",
        date: "2025-09-02",
        title: "Data Analysis and Modeling",
        semester: "IV",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-33",
        date: "2025-09-03",
        title: "Principles of Management",
        semester: "I",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-34",
        date: "2025-09-04",
        title: "Financial Accounting I",
        semester: "IV",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-35",
        date: "2025-09-05",
        title: "Business Statistics",
        semester: "III",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-36",
        date: "2025-09-06",
        title: "System Analysis and Design",
        semester: "III",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bcis-37",
        date: "2025-09-07",
        title: "Computer Architecture and Microprocessor",
        semester: "III",
        examTime: "11:00 AM - 2:00 PM"
      }
    ]
  },
  bba: {
    name: "BBA",
    fullName: "Bachelor of Business Administration",
    examCenter: "Quest International College",
    courses: [
      {
        id: "bba-1",
        date: "2025-08-01",
        title: "English I/English (New)",
        semester: "I",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-2",
        date: "2025-08-02",
        title: "General Psychology",
        semester: "II",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-3",
        date: "2025-08-03",
        title: "Business Mathematics I/Basic Mathematics",
        semester: "I",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-4",
        date: "2025-08-04",
        title: "Computer and IT Applications/ IT for Business",
        semester: "I",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-5",
        date: "2025-08-05",
        title: "English II",
        semester: "II",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-6",
        date: "2025-08-06",
        title: "Strategic Management",
        semester: "VIII",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-7",
        date: "2025-08-07",
        title: "Business and Society",
        semester: "VI",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-8",
        date: "2025-08-08",
        title: "Basics of Managerial Accounting",
        semester: "V",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-9",
        date: "2025-08-09",
        title: "Introduction to International Business",
        semester: "VIII",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-10",
        date: "2025-08-10",
        title: "Legal Aspects of Business and Technology",
        semester: "VI",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-11",
        date: "2025-08-11",
        title: "Business Communication II",
        semester: "IV",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-12",
        date: "2025-08-12",
        title: "Fundamentals of Entrepreneurship",
        semester: "VII",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-13",
        date: "2025-08-13",
        title: "Essentials of e-Business",
        semester: "VIII",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-14",
        date: "2025-08-14",
        title: "Business Mathematics",
        semester: "II",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-15",
        date: "2025-08-15",
        title: "Business Environment in Nepal",
        semester: "VII",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-16",
        date: "2025-08-16",
        title: "Introduction to Management Information System",
        semester: "VI",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-17",
        date: "2025-08-17",
        title: "Fundamentals of Operations Management",
        semester: "V",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-18",
        date: "2025-08-18",
        title: "Financial Management",
        semester: "IV",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-19",
        date: "2025-08-19",
        title: "Management of Human Resources",
        semester: "V",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-20",
        date: "2025-08-20",
        title: "Financial Accounting",
        semester: "II",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-21",
        date: "2025-08-21",
        title: "Essentials of Finance",
        semester: "III",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-22",
        date: "2025-08-22",
        title: "Business Communication I",
        semester: "III",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-23",
        date: "2025-08-23",
        title: "Principles of Marketing",
        semester: "IV",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-24",
        date: "2025-08-24",
        title: "Introductory Microeconomics",
        semester: "II",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-25",
        date: "2025-08-25",
        title: "Business Communication",
        semester: "II",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-26",
        date: "2025-08-27",
        title: "Fundamentals of Organizational Behaviour",
        semester: "IV",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-27",
        date: "2025-08-28",
        title: "Business Research Methods",
        semester: "V",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-28",
        date: "2025-08-29",
        title: "Business Mathematics II",
        semester: "II",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-29",
        date: "2025-08-30",
        title: "Fundamentals of Sociology",
        semester: "III",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-30",
        date: "2025-08-31",
        title: "Introduction to Microeconomics",
        semester: "II",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-31",
        date: "2025-09-01",
        title: "Introductory Macroeconomics",
        semester: "III",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-32",
        date: "2025-09-02",
        title: "Data Analysis and Modeling/ Behavioral Science (New)",
        semester: "IV/I",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-33",
        date: "2025-09-03",
        title: "Principles of Management (Old/New)",
        semester: "I",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-34",
        date: "2025-09-04",
        title: "Financial Accounting I",
        semester: "I",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-35",
        date: "2025-09-05",
        title: "Business Statistics",
        semester: "III",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-36",
        date: "2025-09-06",
        title: "Financial Accounting II",
        semester: "II",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bba-37",
        date: "2025-09-07",
        title: "Fundamentals of Organizational Behavior",
        semester: "II",
        examTime: "11:00 AM - 2:00 PM"
      }
    ]
  },
  bhm: {
    name: "BHM",
    fullName: "Bachelor of Hotel Management",
    examCenter: "Google It",
    courses: [
      {
        id: "bhm-1",
        date: "2025-08-01",
        title: "English I (Old)/ Business Communication for Hospitality Industry (New)",
        semester: "I",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-2",
        date: "2025-08-02",
        title: "General Psychology",
        semester: "IV",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-3",
        date: "2025-08-03",
        title: "Food and Beverage Service I (Old/New)",
        semester: "I",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-4",
        date: "2025-08-04",
        title: "Fundamentals of Tourism and Hospitality (Old/New)",
        semester: "I",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-5",
        date: "2025-08-05",
        title: "English II",
        semester: "II",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-6",
        date: "2025-08-06",
        title: "Strategic Management",
        semester: "VI",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-7",
        date: "2025-08-07",
        title: "Fundamentals of Statistics",
        semester: "V",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-8",
        date: "2025-08-08",
        title: "Hospitality Accounting II",
        semester: "IV",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-9",
        date: "2025-08-09",
        title: "Tourism Business Environment",
        semester: "VI",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-10",
        date: "2025-08-10",
        title: "Basic Mathematics/Fundation of Management",
        semester: "II",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-11",
        date: "2025-08-11",
        title: "Food and Beverage Service IV (Old/New)",
        semester: "IV",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-12",
        date: "2025-08-12",
        title: "Fundamentals of Entrepreneurship",
        semester: "VI",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-13",
        date: "2025-08-13",
        title: "Food Production and Patisserie II (Old/New)",
        semester: "II",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-14",
        date: "2025-08-14",
        title: "Business Communication for the Hotel Industry",
        semester: "IV",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-15",
        date: "2025-08-15",
        title: "Tourism Economics",
        semester: "VI",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-16",
        date: "2025-08-16",
        title: "Introduction to Management Information System (Old/New)",
        semester: "III",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-17",
        date: "2025-08-17",
        title: "Room Division Management II (Old/New)",
        semester: "IV",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-18",
        date: "2025-08-18",
        title: "Food and Beverage Service II (Old/New)",
        semester: "II",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-19",
        date: "2025-08-19",
        title: "Hospitality Accounting I (Old)/ Hospitality Statistics (New)",
        semester: "III",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-20",
        date: "2025-08-20",
        title: "Food Productions and Patisserie IV (Old/New)",
        semester: "IV",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-21",
        date: "2025-08-21",
        title: "Fundamentals of Financial Management",
        semester: "V",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-22",
        date: "2025-08-22",
        title: "Food Hygiene and Nutrition (Old/New)",
        semester: "II",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-23",
        date: "2025-08-23",
        title: "Food Production and Patisserie III (Old/New)",
        semester: "III",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-24",
        date: "2025-08-24",
        title: "Accommodation Operation I (Old/New)",
        semester: "I",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-25",
        date: "2025-08-25",
        title: "Hospitality Marketing (Old/New)",
        semester: "V/IV",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-26",
        date: "2025-08-27",
        title: "Room Division Management I (Old/New)",
        semester: "III",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-27",
        date: "2025-08-28",
        title: "Business Research Methods",
        semester: "V",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-28",
        date: "2025-08-29",
        title: "Accommodation Operation II (Old/New)",
        semester: "II",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-29",
        date: "2025-08-30",
        title: "Fundamentals of Sociology",
        semester: "III",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-30",
        date: "2025-08-31",
        title: "Hospitality Accounting and Costing",
        semester: "IV",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-31",
        date: "2025-09-01",
        title: "Hospitality Human Resource Management",
        semester: "V",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-32",
        date: "2025-09-02",
        title: "Food and Beverage Service III (Old/New)",
        semester: "III",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-33",
        date: "2025-09-03",
        title: "Principles of Management",
        semester: "II",
        examTime: "11:00 AM - 2:00 PM"
      },
      {
        id: "bhm-34",
        date: "2025-09-04",
        title: "Food Production and Patisserie I (Old/New)",
        semester: "I",
        examTime: "11:00 AM - 2:00 PM"
      }
    ]
  }
}; 