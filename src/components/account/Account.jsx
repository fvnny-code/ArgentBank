import {Link} from 'react-router-dom';
import "./Account.css";

export default function Account({title, amount, description, linkPath, button}) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-content-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className=" account-content-wrapper cta">
        <Link to={linkPath} className="account-button-link">
        <button className="transaction-button ">{button}</button>
        </Link>
      </div>
    </section>
  );
}
