import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {

    const [blogs,setBlogs] =useState([])

    useEffect(()=>{
        fetch("blogs.json")
        .then(res=>res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3 bg-orange-400">
            <h1 className="text-4xl font-bold">Blogs: {blogs.length}</h1>

            <div>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog> )
                }
            </div>
        </div>
    );
};

export default Blogs;