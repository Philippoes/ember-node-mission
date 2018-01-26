export default function(server) {
  let users = server.createList('user', 10);
  let blogs = server.createList('blog', 10);

  for (let i = 0; i < blogs.length; i++) {
    blogs[i].update('author', users[i])
  }
}
