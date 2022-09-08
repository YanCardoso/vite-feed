import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, content, pubDate }) {
  const [comment, setComment] = useState([1, 2]);

  const pubDateFormat = format(pubDate, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const dateElementRelativeToNow = formatDistanceToNow(pubDate, {
    locale: ptBR,
    addSuffix: "há",
  });

  function handleCreateComment() {
    event.preventDefault();
    setComment([...comment, comment.length + 1]);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={pubDateFormat} dateTime={pubDateFormat}>
          {dateElementRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p>
                <a>{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comment.map((comment) => {
          return <Comment content={comment} />;
        })}
      </div>
    </article>
  );
}
