import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/yancardoso.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Yan Cardoso</strong>
              <time dateTime="2022-05-11 00:46:37">Cerca de 1h atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            nesciunt iusto provident quos. Accusamus dolor cupiditate, delectus
            praesentium eaque officia excepturi voluptates possimus, quod magni
            fugiat alias quo voluptatem harum.
          </p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>04</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
