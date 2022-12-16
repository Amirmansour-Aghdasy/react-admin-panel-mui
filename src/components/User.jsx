import { useState } from "react";

import {
  Grid,
  Card,
  Badge,
  Avatar,
  Button,
  Collapse,
  CardHeader,
  CardContent,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const ExpandMoreParent = styled((props) => {
  const { expand, ...other } = props;
  return <Button {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      marginTop: 1.5,
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const User = ({ user }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Grid key={user.id} item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ width: "100%", height: "100%" }}>
        <CardHeader
          avatar={
            <StyledBadge
              overlap="circular"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
            >
              <Avatar alt="" src={user.avatar} sx={{ width: 50, height: 50 }} />
            </StyledBadge>
          }
          action={
            <ExpandMoreParent
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMore />
            </ExpandMoreParent>
          }
          sx={{ p: 2 }}
          title={user.name}
          subheader={user.username}
        />
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent sx={{ p: 2 }}></CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};

export default User;
