import React from "react";
import "./../App.css";

import { Link } from "react-router-dom";
import { Icon, Table } from "semantic-ui-react";

class Calendar extends React.Component {
  render() {
    const calendarRows = this.props.data.map((row) => {
      return (
        <Table.Row disabled={row.disabled}>
          <Table.Cell collapsing>{row.lessonNumber}</Table.Cell>
          <Table.Cell>
            {row.disabled ? (
              row.topic
            ) : (
              <>
                <Link to={row.path}>{row.topic}</Link>
              </>
            )}
          </Table.Cell>
          <Table.Cell>
            <Icon name="folder" />
            {row.disabled ? (
              row.folderName
            ) : (
              <>
                <a href={row.folderLocation} download>
                  {row.folderName}
                </a>
              </>
            )}
          </Table.Cell>
          <Table.Cell>{row.additionalInfo}</Table.Cell>
        </Table.Row>
      );
    });

    return (
      <Table
        celled
        striped
        selectable
        sortable
        stackable
        textAlign={"left"}
        verticalAlign={"center"}
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={2}>Lesson Number</Table.HeaderCell>
            <Table.HeaderCell width={8}>
              Lesson Topic and Information
            </Table.HeaderCell>
            <Table.HeaderCell width={3}>
              <Icon name="folder" /> Folder Download
            </Table.HeaderCell>
            <Table.HeaderCell width={3}>
              Additional Information / Notes
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {/* Insert rows mapped from JSON file into the table body.  */}
        <Table.Body>{calendarRows}</Table.Body>
      </Table>
    );
  }
}

export default Calendar;
