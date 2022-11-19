import Post from "./Post.js";

class PostService {
    async create(post){
            const newPost = await Post.create(post)
            return newPost;
    }

    async getAll(){
        const allPosts = await Post.find();
        return allPosts;
    }
    async getOne(id){
        if (!id){
            throw new Error('ID not found')
        }
        const onePost = await Post.findById(id);
        return onePost;
    }
    async update(post){
        if(!post._id){
            throw new Error('ID not found')
        }
        const upPost = await Post.findByIdAndUpdate(add._id, add, {new: true})
        return upPost;
    }
    async delete(id){
        if (!id){
            throw new Error('ID not found')
        }
        const delPost = await Post.findByIdAndDelete(id);
        return delPost;
    }
}
export default new PostService();