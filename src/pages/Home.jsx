import { Box, Grid, IconButton, Card, CardHeader } from "@mui/material";
import {
  HomeOutlined,
  GroupOutlined,
  InsertCommentOutlined,
  EmailOutlined,
} from "@mui/icons-material";
import PerfectScroll from "react-perfect-scrollbar";
import { Link } from "react-router-dom";

import { DashboardLayout } from "../components";
import { SidebarListItems } from "../mocks";

const Home = () => {
  return (
    <DashboardLayout>
      <PerfectScroll>
        <Box border={1} p={1} borderColor="white" borderRadius={5}>
          <Grid container spacing={2}>
            {SidebarListItems.map((item, index) => (
              <Grid item xs={4}>
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
