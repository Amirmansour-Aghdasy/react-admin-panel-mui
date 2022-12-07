import {
  HomeOutlined,
  GroupOutlined,
  EmailOutlined,
  InsertCommentOutlined,
  ShoppingCartOutlined,
  ArticleOutlined,
} from "@mui/icons-material";

//* Sidebar List Items => Used in The Sidebar & Home Components.
export const SidebarListItems = [
  {
    path: "/",
    icon: <HomeOutlined />,
    text: "صفحه اصلی",
    subTitle: "ناحیه اصلی مدیریتی ( دسترسی سریع )",
  },
  {
    path: "/users",
    icon: <GroupOutlined />,
    text: "کاربران",
    subTitle: "اطلاعات کل کاربران سایت",
  },
  {
    path: "/products",
    icon: <ShoppingCartOutlined />,
    text: "محصولات سایت",
    subTitle: "موجودی کل محصولات موجود"
  },
  {
    path: "/articles",
    icon: <ArticleOutlined />,
    text: "مقالات وبلاگ ",
    subTitle: "تعداد کل مقالات آموزشی وبلاگ"
  },
  {
    path: "/comments",
    icon: <InsertCommentOutlined />,
    text: "دیدگاه کاربران",
    subTitle: "تمام دیدگاه های پست ها و محصولات"
  },
  {
    path: "/emails",
    icon: <EmailOutlined />,
    text: "ایمیل های دریافتی",
    subTitle: "صندوق ورودی کل ایمیل های سایت"
  },
];
