import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, content, pubDate }) {
  const [comment, setComment] = useState([
    "Muito bom! Nice trabalho",
    "Simplesmente incrível",
  ]);
  const [newCommentText, setNewCommentText] = useState("");

  const pubDateFormat = format(pubDate, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const dateElementRelativeToNow = formatDistanceToNow(pubDate, {
    locale: ptBR,
    addSuffix: "há",
  });

  function handleCreateComment() {
    event.preventDefault();
    setComment([...comment, newCommentText]);
    setNewCommentText("");
  }

  function newTextComment() {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentId) {
    const newListComments = comment.filter((comment) => {
      return comment !== commentId;
    });

    setComment(newListComments);
  }

  function newCommentInvalid() {
    event.target.setCustomValidity("Campo obrigatório")
  }

  const isNewCommentEmpty = newCommentText.length === 0;

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
        <textarea
          value={newCommentText}
          onChange={newTextComment}
          onInvalid={newCommentInvalid}
          placeholder="Deixe um comentário"
          required
        />
        <footer>
          <button disabled={isNewCommentEmpty} type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comment.map((comment) => {
          return <Comment onDeleteComment={deleteComment} content={comment} />;
        })}
      </div>
    </article>
  );
}
