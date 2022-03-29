const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.map((post, index) => {
            output +=` <li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

function creatPost(post) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        posts.push(post);
        const error=false;
        if(!error){
            resolve();
        }else{
            reject(`Error:wrong data`);
        }
    },2000);
    
        
    });
}
getPosts();
creatPost({ title: 'Post Three', body: 'this is post three' })
.then(getPosts);