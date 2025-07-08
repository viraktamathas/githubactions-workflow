document.addEventListener('DOMContentLoaded', function() {
    const getStartedBtn = document.getElementById('get-started');
    
    getStartedBtn.addEventListener('click', function() {
        alert('Welcome to githubactions-workflow! Let\'s get started.');
    });
    
    console.log('githubactions-workflow loaded successfully!');
});