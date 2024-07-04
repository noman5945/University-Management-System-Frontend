import { FacultyDashboard } from "../pages/Faculty/FacultyDashboard";
import { OfferedCourses } from "../pages/Faculty/OfferedCourses";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "Offered Course",
    path: "offered-course",
    element: <OfferedCourses />,
  },
];
