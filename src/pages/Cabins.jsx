import { AddCabin, CabinTable, CabinTableOperations } from "../features";
import { Heading, Row } from "../ui";

export function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>

      <Row type="vertical">
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}
