const { requireUser } = require('./utils');

postsRouter.post('/', requireUser, async (req, res, next) => {
  res.send({ message: 'under construction' });
});
const { requireUser } = require('./utils');

postsRouter.post('/', requireUser, async (req, res, next) => {
  const { title, content, tags = "" } = req.body;

  const tagArr = tags.trim().split(/\s+/)
  const postData = {};

  // only send the tags if there are some to send
  if (tagArr.length) {
    postData.tags = tagArr;
  }

  try {
    // add authorId, title, content to postData object
    // const post = await createPost(postData);
    // this will create the post and the tags for us
    // if the post comes back, res.send({ post });
    // otherwise, next an appropriate error object 
  } catch ({ name, message }) {
    next({ name, message });
  }
});
postsRouter.patch('/:postId', requireUser, async (req, res, next) => {
    const { postId } = req.params;
    const { title, content, tags } = req.body;
  
    const updateFields = {};
  
    if (tags && tags.length > 0) {
      updateFields.tags = tags.trim().split(/\s+/);
    }
  
    if (title) {
      updateFields.title = title;
    }
  
    if (content) {
      updateFields.content = content;
    }
  
    try {
      const originalPost = await getPostById(postId);
  
      if (originalPost.author.id === req.user.id) {
        const updatedPost = await updatePost(postId, updateFields);
        res.send({ post: updatedPost })
      } else {
        next({
          name: 'UnauthorizedUserError',
          message: 'You cannot update a post that is not yours'
        })
      }
    } catch ({ name, message }) {
      next({ name, message });
    }
  });
  postsRouter.get('/', async (req, res, next) => {
    try {
      const allPosts = await getAllPosts();
  
      const posts = allPosts.filter(post => {
        // keep a post if it is either active, or if it belongs to the current user
      });
  
      res.send({
        posts
      });
    } catch ({ name, message }) {
      next({ name, message });
    }
  });
  const posts = allPosts.filter(post => {
    // the post is active, doesn't matter who it belongs to
    if (post.active) {
      return true;
    }
  
    // the post is not active, but it belogs to the current user
    if (req.user && post.author.id === req.user.id) {
      return true;
    }
  
    // none of the above are true
    return false;
  });
  if (someConditional) {
    return true;
  } else {
    return false;
  }
  
  // is the same as:
  
  return someConditional;
