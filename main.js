const header = document.getElementById('header');

if (header) {
    const handleScroll = () => {
        header.classList.toggle('shrink', window.scrollY > 100);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
}