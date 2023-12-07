async function fetchGitHubRepos(username) {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    return await response.json(); // This should be an array of repository objects
}

function createRepoContainer(repo) {
    const container = document.createElement('div');
    container.classList.add('repo-container');


    const title = document.createElement('h2');
    title.textContent = repo.name;
    container.appendChild(title);


    const description = document.createElement('p');
    description.textContent = repo.description;
    container.appendChild(description);

    // if the user clicks on the repo container, open the repo in a new tab
    container.addEventListener('click', () => {
        window.open(repo.html_url, '_blank');
    });



    return container;
}

async function displayRepos(username) {
    const repos = await fetchGitHubRepos(username);
    const grid = document.querySelector('.project-grid');

    repos.forEach(repo => {
        const repoContainer = createRepoContainer(repo);
        grid.appendChild(repoContainer);
    });
}

displayRepos('NC1107'); // Replace with your actual GitHub username
