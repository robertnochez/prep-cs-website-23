import React from "react";
import "./../App.css";

import { Icon, Table } from "semantic-ui-react";

// function calendarRows(props) {
//   map((row) => {
//     return (
//       <Table.Row>
//         <Table.Cell collapsing>row.</Table.Cell>
//       </Table.Row>
//     );
//   });
// }

class Calendar extends React.Component {
  render() {
    const calendarRows = this.props.data.map((row) => {
      return (
        <Table.Row>
          <Table.Cell collapsing>{row.lessonNumber}</Table.Cell>
          <Table.Cell>{row.topic}</Table.Cell>
          <Table.Cell>
            <Icon name="folder" />
            <a href={row.folderLocation} download={row.folderName}>
              {row.folderName}
            </a>
          </Table.Cell>
          <Table.Cell>{row.additionalInfo}</Table.Cell>
        </Table.Row>
      );
    });

    return (
      <div>
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
          <Table.Body>{calendarRows}</Table.Body>
        </Table>
      </div>
    );
  }
}

export default Calendar;
