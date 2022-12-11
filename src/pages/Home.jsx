import { Box, Grid, IconButton, Card, CardHeader } from "@mui/material";
import PerfectScroll from "react-perfect-scrollbar";
import { Link } from "react-router-dom";

import { DashboardLayout } from "../components";
import { SidebarListItems } from "../__mocks__";

const Home = () => {
  return (
    <DashboardLayout>
      <PerfectScroll>
        <Box border={1} borderColor="white" borderRadius={5}>
          <Grid container spacing={{ xs: 1.5, sm: 2 }}>
            {SidebarListItems.map((item, index) => (
              <Grid key={index} item xs={12} md={6} lg={4}>
                <Link to={item.path}>
                  <Card>
                    <CardHeader
                      avatar={<IconButton>{item.icon}</IconButton>}
                      title={item.text}
                      subheader={item.subTitle}
                    />
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </PerfectScroll>
    </DashboardLayout>
  );
};

export default Home;
