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

  # The form helper requires a persisted record, so create the post
  # before rendering its collaborative editor.
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
