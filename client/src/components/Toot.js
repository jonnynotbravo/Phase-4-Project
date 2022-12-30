const Toot = ({toot, user, deleteToot}) => {

  const handleDelete = () => {
    deleteToot(toot.id);
  };

  const renderedTags = toot.toot_tags.map(tag => {return <span key={tag.id} className="tag">{tag.tag_label}</span>})

  return (
    <div id="toot-card">
      <h3>{toot.user.username}</h3>
      <p>{toot.content}</p>
      {renderedTags}
      <p>💕 {toot.likes}</p>
      {user.id === toot.user.id ? (
        <button onClick={handleDelete}>❌</button>
      ) : null}
    </div>
  );
};

export default Toot;
