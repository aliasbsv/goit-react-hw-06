import { FaUserCircle } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import css from "./Contact.module.css";
const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <div className="profile">
        <p className={css.name}>
          <FaUserCircle /> {name}
        </p>
        <p className={css.number}>
          <AiFillPhone /> {number}
        </p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </>
  );
};
export default Contact;
