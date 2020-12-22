const dropdownMenu = () => {
    const clubsDropdown = document.getElementById('clubs-dropdown');

    document.addEventListener('click', (event) => {
        if (event.target.matches('#clubs-btn') && clubsDropdown.style.display === 'none'){
            clubsDropdown.style.display = 'block'
        } else {
            clubsDropdown.style.display = 'none'
        }
    });
    
};

export default dropdownMenu;