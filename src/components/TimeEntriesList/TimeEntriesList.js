import React, { Component } from "react";
import TimeEntryListItem from "./TimeEntryListItem";

class TimeEntriesList extends Component {
  componentDidMount() {
    this.props.loadTimeEntries();
  }

  render() {
    const entries = this.props.entries.map(entry => (
      <TimeEntryListItem
        id={entry.id}
        key={entry.id}
        activity={entry.description}
        project={entry.project.name}
        startDate={entry.startDate}
        endDate={entry.endDate}
      />
    ));
    return (
      <div className="container">
        <table className="table is-fullwidth is-striped is-narrow">
          <thead>
            <tr>
              <th>Id</th>
              <th>Activity</th>
              <th>Project</th>
              <th>Start date</th>
              <th>End date</th>
              <th>Time spent</th>
            </tr>
          </thead>
          <tbody>{entries}</tbody>
        </table>
      </div>
    );
  }
}

export default TimeEntriesList;