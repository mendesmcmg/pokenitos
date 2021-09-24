import { Card, CardContent } from "@mui/material";

function DetailsCard({ details }) {
  return (
    <Card variant="outlined" style={{backgroundColor: `${details.color.name}`, color: 'white', opacity: '0.7', fontWeight: 'bold'}}>
      <CardContent>
        <p><b>Habitat:</b> {details.habitat.name}</p>
        <p>{details.flavor_text_entries[0].flavor_text}</p>
      </CardContent>
    </Card>
  );
}

export default DetailsCard;
