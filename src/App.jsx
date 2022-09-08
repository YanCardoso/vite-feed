import { Header } from "./components/Header.jsx";

import "./styles/global.css";
import styles from "./App.module.css";

import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/yancardoso.png",
      name: "Yan Cardoso",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: `Fala galeraa 👋` },
      { type: "link", content: `👉 jane.design/doctorcare` },
      {
        type: "paragraph",
        content: `Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
      no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀`,
      },
      { type: "link", content: `#novoprojeto #nlw #rocketseat` },
    ],
    pubDate: new Date("2022-05-03 23:00:23"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/nextjs.png",
      name: "Joao das neves",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: `Bom dia galera!!! 👋` },
      { type: "link", content: `👉 jane.design/doctorcare` },
      {
        type: "paragraph",
        content: `Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
      no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀`,
      },
      { type: "link", content: `#novoprojeto #nlw #rocketseat ` },
    ],
    pubDate: new Date("2022-02-01 13:00:23"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/nextjs.png",
      name: "Carlos",
      role: "Product Engineer",
    },
    content: [
      { type: "paragraph", content: `Bom dia galera!!! 👋` },
      { type: "link", content: `👉 jane.design/doctorcare` },
      {
        type: "paragraph",
        content: `É um projeto que fiz
      no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀`,
      },
      { type: "link", content: `#novoprojeto #nlw #rocketseat ` },
    ],
    pubDate: new Date("2022-02-01 13:00:23"),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                pubDate={post.pubDate}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
