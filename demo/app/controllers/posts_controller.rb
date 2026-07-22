class PostsController < ApplicationController
  def index
    @posts = Post.order(updated_at: :desc)
  end

  def show
    @post = Post.find(params[:id])
  end

  def new
    @post = Post.new
  end

  # Collaboration needs a persisted record (the document key comes from it), so
  # a post is created with just a title and edited collaboratively from then on.
  def create
    @post = Post.new(params.expect(post: [:title]))
    if @post.save
      redirect_to edit_post_path(@post)
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @post = Post.find(params[:id])
  end
end
