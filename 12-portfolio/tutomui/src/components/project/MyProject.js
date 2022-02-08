import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

const MyProject = (props) => {
  return (
    <Container maxWidth="lg" >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h4" gutterBottom component="div">
          My Project
        </Typography>
      </Box>
    </Container>
  );
};

export default MyProject;
