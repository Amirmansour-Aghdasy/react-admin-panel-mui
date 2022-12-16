import { useEffect } from "react";

import {
  Box,
  Grid,
  Card,
  Button,
  CardHeader,
  ButtonGroup,
} from "@mui/material";
import {
  AddCircleOutlineOutlined,
  DeleteOutlineOutlined,
  ModeEditOutlineOutlined,
} from "@mui/icons-material";

import { DashboardLayout, User } from "../components";
import {
  useUsersState,
  useUsersDispatch,
} from "../contexts/users/UsersContext";
import { ActionTypes } from "./../contexts/users/reducer";
import { handleLoadUsers } from "./../services/api";

const Users = () => {
  const { users } = useUsersState();
  const dispatch = useUsersDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch({
        type: ActionTypes.LOAD_USERS,
        payload: await handleLoadUsers({ params: { _page: 1, _limit: 20 } }),
      });
      console.log(users);
    };
    fetchData();
  }, []);

  return (
    <DashboardLayout>
      <Box>
        <Card display="flex" justifycontent="space-between" alignitems="center">
          <CardHeader
            action={
              <ButtonGroup variant="outlined" sx={{ mt: 1.5 }}>
                <Button color="success" onClick={() => {}}>
                  <AddCircleOutlineOutlined />
                </Button>
                <Button color="error" onClick={() => {}}>
                  <DeleteOutlineOutlined />
                </Button>
                <Button color="warning" onClick={() => {}}>
                  <ModeEditOutlineOutlined />
                </Button>
              </ButtonGroup>
            }
            title="بخش کاربران"
            subheader="مشاهده و مدیریت تعداد کل کاربران عادی و ویژه"
          />
        </Card>
        <Grid container spacing={1} mt={1}>
          {users ? users.map((user) => <User user={user} />) : "LOADING..."}
        </Grid>
      </Box>
    </DashboardLayout>
  );
};

export default Users;
