let articleid="";
const container = document.querySelector('.table table-bordered');
const searchForm = document.querySelector('.search');

const renderPosts = async (term) => {
    let uri = 'http://localhost:3000/posts?_sort=likes&_order=desc';
    if (term) {
        uri += `&q=${term}`;
    }
    const res = await fetch(uri);
    const posts = await res.json();
    let template = '';
    posts.forEach(post => {
        template += `
        <tbody>
        <tr>
        <td>${post.id}</td>
        <td>${post.title}</td>
        <td>${post.icon}</td>
        <td>${post.body.slice(0, 200)}</td>
        <td>
        <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
        <a class="edit" type="button" title="Edit" data-toggle="tooltip" onClick ="openModel(${post.id})"><i class="material-icons">&#xE254;</i></a>
        <a class="delete" type="button" title="Delete" data-toggle="tooltip" onClick="deleteBlog(${post.id})"><i class="material-icons">&#xE872;</i></a>
        </td>
        </tr>
        </tbody>
        `
    })

    container.innerHTML = template;
}
const deleteBlog=async(blogid)=>
{
    await fetch(`http://localhost:3000/posts/${blogid}`,{
        method:"DELETE",
    });
}
const modelBox=document.getElementById("modelbox");
const form=document.getElementById("newform");
modelBox.style.display="none";
const openModel=async(blogid)=>
{
    const response= await fetch(`http://localhost:3000/posts/${blogid}`);
        const post=await response.json();
    
        modelBox.style.display="block";
        form.icon.value=post.icon;
        form.title.value=post.title;
        form.body.value=post.body;
        articleid=post.id;
}
const updateBlog=async()=>
{
    const getData={
        icon:form.icon.value,
        title:form.title.value,
        body:form.body.value,
    }
    const response= await fetch(`http://localhost:3000/posts/${articleid}`,
    {
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(getData),
    });
    alert("Updated Successfully");
}
searchForm.addEventListener('submit', e => {
    e.preventDefault();
    renderPosts(searchForm.term.value.trim())
})
window.addEventListener('DOMContentLoaded', () => renderPosts());