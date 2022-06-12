fetch(`/api/tags/${ tag }/posts`)
  .then()
  tagsRouter.get('/:tagName/posts', async (req, res, next) => {
    // read the tagname from the params
    try {
      // use our method to get posts by tag name from the db
      // send out an object to the client { posts: // the posts }
    } catch ({ name, message }) {
      // forward the name and message to the error handler
    }
  });
  postsRouter.delete('/:postId', requireUser, async (req, res, next) => {
    try {
      const post = await getPostById(req.params.postId);
  
      if (post && post.author.id === req.user.id) {
        const updatedPost = await updatePost(post.id, { active: false });
  
        res.send({ post: updatedPost });
      } else {
        // if there was a post, throw UnauthorizedUserError, otherwise throw PostNotFoundError
        next(post ? { 
          name: "UnauthorizedUserError",
          message: "You cannot delete a post which is not yours"
        } : {
          name: "PostNotFoundError",
          message: "That post does not exist"
        });
      }
  
    } catch ({ name, message }) {
      next({ name, message })
    }
  });
  
