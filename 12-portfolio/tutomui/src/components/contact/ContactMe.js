import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

const ContactMe = (props) => {
  return (
    <Container maxWidth="lg" >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h4" gutterBottom component="div">
          Contact Me
        </Typography>
      </Box>
    </Container>
  );
};

export default ContactMe;
