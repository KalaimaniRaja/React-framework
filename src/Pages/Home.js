import React, { useEffect } from "react";
import Table from "../Components/Table";

const handleEdit = (item) => () => {
  // write your logic
  alert(JSON.stringify(item));
};

export const tableConstants = (handleEdit) => {
  return [
    {
      title: "ID",
      render: (rowData) => {
        return <span>{rowData.id}</span>;
      },
    },
    {
      title: "Name",
      render: (rowData) => {
        return <span>{rowData.name}</span>;
      },
    },
    {
      title: "Username",
      render: (rowData) => {
        return <span>{rowData.username}</span>;
      },
    },
    {
      title: "Email",
      render: (rowData) => {
        return <span>{rowData.email}</span>;
      },
    },
    {
      title: "Phone",
      render: (rowData) => {
        return <span>{rowData.phone}</span>;
      },
    },
    {
      title: "Website",
      render: (rowData) => {
        return <span>{rowData.website}</span>;
      },
    },
  ];
};

export const data = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    website: "ramiro.info",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    phone: "493-170-9623 x156",
    website: "kale.biz",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    website: "demarco.info",
  },
];

export const data2 = [
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    website: "ramiro.info",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    phone: "493-170-9623 x156",
    website: "kale.biz",
  },
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    website: "demarco.info",
  },
];
const Home = () => {
  console.log(tableConstants());
  const [isDark, setIsDark] = useEffect(false);
  const [bordered, setBordered] = useEffect(true);
  const [striped, setStriped] = useEffect(false);
  const [hoverable, setHoverable] = useEffect(false);

  return (
    <React.Fragment>
      <Table cols={tableConstants(handleEdit)} data={data} />
      <Table cols={tableConstants(handleEdit)} data={data} isDark />
      <Table cols={tableConstants(handleEdit)} data={data2} bordered={false} />
      <Table cols={tableConstants(handleEdit)} data={data} striped />
      <Table cols={tableConstants(handleEdit)} data={data2} hoverable />
    </React.Fragment>
  );
};

export default Home;
