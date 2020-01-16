import React from 'react';
import PropTypes from 'prop-types';
import { formatDistance } from 'date-fns';
import { formatLongDate } from '../../utils/time/time';

const ProjectListItem = ({
  id,
  name,
  isArchived,
  timeSpentInMilliseconds,
  dateCreated,
}) => (
  <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>{formatDistance(new Date(0), new Date(timeSpentInMilliseconds))}</td>
    <td>{isArchived}</td>
    <td>{formatLongDate(dateCreated)}</td>
  </tr>
);

ProjectListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  isArchived: PropTypes.bool.isRequired,
  timeSpentInMilliseconds: PropTypes.number.isRequired,
};
export default ProjectListItem;