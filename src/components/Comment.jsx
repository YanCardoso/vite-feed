import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
export function Comment({ content, onDeleteComment }) {

  function deleteComment() {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/yancardoso.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Yan Cardoso</strong>
              <time dateTime="2022-05-11 00:46:37">Cerca de 1h atrás</time>
            </div>
            <button onClick={deleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
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
