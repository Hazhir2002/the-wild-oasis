import { UpdateSettingsForm } from "../features";
import { Heading, Row } from "../ui";

export function Settings() {
  return (
    <Row type="vertical">
      <Heading as="h1">Update hotel settings</Heading>
      <UpdateSettingsForm />
    </Row>
  );
}
