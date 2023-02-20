import React, { useState } from "react";
import Table from "../components/table";
import StarRating from "../components/ratings";
import ImageSlider from "../components/imageSlider";

const handleEdit = (item) => () => {
  // write your logic
  alert(JSON.stringify(item));
};

export const tableConstants = () => {
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

const SliderData = [
  {
    name: "car",
    image:
      "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    name: "lake",

    image:
      "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
  },
  {
    name: "scenary",

    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
  {
    name: "bridge",

    image:
      "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
  },
  {
    name: "pyramid",

    image:
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
];

const Home = () => {
  console.log(tableConstants());
  const [isDark, setIsDark] = useState(true);
  const [bordered, setBordered] = useState(true);
  const [striped, setStriped] = useState(true);
  const [hoverable, setHoverable] = useState(true);

  const ratingEvent = (e) => {
    console.log("rating clicked", e);
  };

  return (
    <React.Fragment>
      <ImageSlider slides={SliderData} />
      <StarRating name="controlled" onChange={ratingEvent} />
      <StarRating name="read-only" value={4} />

      <Table cols={tableConstants()} data={data} />
      <Table cols={tableConstants()} data={data} isDark={isDark} />
      <Table cols={tableConstants()} data={data2} bordered={bordered} />
      <Table cols={tableConstants()} data={data} striped={striped} />
      <Table cols={tableConstants()} data={data2} hoverable={hoverable} />
    </React.Fragment>
  );
};

export default Home;
