import { Card, CardContent } from "@mui/material";

function DetailsCard({ details, type }) {
  return (
    <Card
      variant="outlined"
      style={{
        backgroundColor: `${details.color.name}`,
        color: `${(['yellow', 'pink', 'white'].includes(details.color.name)) ? "black":"white"}`,
        opacity: "0.7",
        fontWeight: "bold",
      }}
    >
      <CardContent>
        <p>Type: {type}</p>
        <p>
          <b>Habitat:</b> {details.habitat.name}
        </p>
        <p>{details.flavor_text_entries[0].flavor_text}</p>
      </CardContent>
    </Card>
  );
}

export default DetailsCard;
