function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

function copyEmail() {
    const email = 'pokunz215@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        alert('Email copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy email: ', err);
    });
}