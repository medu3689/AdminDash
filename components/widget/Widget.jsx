
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  let data;

  // Temporary data
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon text-crimson bg-red-200"
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon bg-yellow-200 text-goldenrod"
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon bg-green-200 text-green-700"
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon bg-purple-200 text-purple-700"
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget flex justify-between p-4 mx-4 shadow-lg rounded-lg h-24">
      <div className="left flex flex-col justify-between">
        <span className="title font-bold text-gray-400">{data.title}</span>
        <span className="counter text-2xl font-light mb-2">{amount}</span>
        <span className="link text-sm border-b border-gray-400">{data.link}</span>
      </div>
      <div className="right flex flex-col justify-between items-end">
        <div className={`percentage text-sm flex items-center ${diff >= 0 ? 'text-green-500' : 'text-red-500'} mb-2`}>
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
