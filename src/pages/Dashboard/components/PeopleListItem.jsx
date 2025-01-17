import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PeopleListItem(props) {
  const { person } = props;

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      <div>
        {person.wage && <p>Wage: £{person.wage}</p>}
        {person.wage && <button>Edit</button>}
      </div>

      <Link to={`/view/${person.login.uuid}`}>Go to my profile</Link>
    </li>
  );
}

export default PeopleListItem;
PeopleListItem.propTypes = {
  person: PropTypes.object,
};
