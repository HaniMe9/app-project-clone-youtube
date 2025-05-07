import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>404</h1>
      <p style={styles.text}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" style={styles.link}>
        Go back to Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20vh',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '6rem',
    color: '#ff4d4d',
  },
  text: {
    fontSize: '1.5rem',
    margin: '20px 0',
  },
  link: {
    fontSize: '1rem',
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default NotFoundPage;
