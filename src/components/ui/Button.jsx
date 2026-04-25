import { Link } from 'react-router-dom';

export default function Button({ children, href, to, primary, ...props }) {
  const baseStyle = "px-6 py-3 rounded-lg font-medium transition-all duration-200 inline-block text-center";
  const styles = primary 
    ? "bg-primary text-white hover:bg-primary-hover shadow-md hover:shadow-lg"
    : "bg-white text-text-primary border border-gray-200 hover:bg-gray-50";
  
  if (to) {
    return <Link to={to} className={`${baseStyle} ${styles}`} {...props}>{children}</Link>;
  }
  if (href) {
    return <a href={href} className={`${baseStyle} ${styles}`} {...props}>{children}</a>;
  }
  return <button className={`${baseStyle} ${styles}`} {...props}>{children}</button>;
}