import { records } from "../data/Mockdata";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

const Leaderboard = () => {
  const filters = records.sort((a, b) => {
    if (a.edits > b.edits) {
      return -1; //{1, 2, 3, 4, 4}
    } else if (a.edits < b.edits) {
      return 1;
    } else return 0;
  });

  const nonZeroFilters = filters.filter((filter) => filter.edits > 0);
  return (
    <Container className="p-5">
      <Table striped bordered hover variant="dark" size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Edits</th>
          </tr>
        </thead>
        <tbody>
          {nonZeroFilters.map(({ id, name, edits }) => (
            <tr key={id}>
              <td>
                <p>{name}</p>
              </td>
              <td>
                <p>{edits}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Leaderboard;
