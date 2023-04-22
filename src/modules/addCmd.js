import postComment from './postCmds.js';
import displayComments from './displayCmds.js';

const addComment = async (itemId, username, comment) => {
  const newComment = {
    item_id: itemId,
    username,
    comment,
  };
  await postComment(newComment);
  await displayComments(itemId);
};

export default addComment;
