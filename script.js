url = 'https://api.github.com/users/bipin333/repos'
container = document.getElementById('project')
fetch(url).then(r => r.json()).then(datas =>{
    datas.forEach(repo =>{
        lin = document.createElement('a');
        lin.href = repo.svn_url
        lin.className = 'proje'
        tit = document.createElement('h3')
        tit.className = 'projetitle'
        tit.textContent = repo.full_name
        lin.appendChild(tit)
        container.appendChild(lin)
    })
})