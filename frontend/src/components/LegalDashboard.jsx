import { Link } from "react-router-dom";
import { FaUsers, FaBriefcase, FaBook, FaCalendarAlt } from "react-icons/fa"; // Importing icons from react-icons
import styles from "../assets/css/legaldashboard.module.css"; // Importing the CSS module for styling

const LegalAidDashboard = () => {
  return (
    <div className={styles.dashboard}>
      <header className={styles.dashboardHeader}>
        <h1>Legal Aid Provider Dashboard</h1>
      </header>
      <div className={styles.dashboardSections}>
        <div className={styles.dashboardSection}>
          <FaUsers size={50} color="#4A90E2" />
          <Link to="/client-requests" className={styles.dashboardLink}>
            Client Management
          </Link>
        </div>
        <div className={styles.dashboardSection}>
          <FaBriefcase size={50} color="#4A90E2" />
          <Link to="/case-requests" className={styles.dashboardLink}>
            Case Management
          </Link>
        </div>
        <div className={styles.dashboardSection}>
          <FaBook size={50} color="#4A90E2" />
          <Link to="/resource-center" className={styles.dashboardLink}>
            Resource Center
          </Link>
        </div>
        <div className={styles.dashboardSection}>
          <FaCalendarAlt size={50} color="#4A90E2" />
          <Link to="/calendar" className={styles.dashboardLink}>
            Working Calendar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LegalAidDashboard;
