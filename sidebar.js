document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', function(event) {
        event.preventDefault();  // 阻止链接的默认跳转行为
        const submenu = this.nextElementSibling;
        if (submenu.style.display === "none" || !submenu.style.display) {
            submenu.style.display = "block";
        } else {
            submenu.style.display = "none";
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var sidebarLinks = document.querySelectorAll('.sidebar a');  // 获取所有侧边栏的链接
    var currentUrl = window.location.href;  // 获取当前页面的URL

    sidebarLinks.forEach(function(link) {
        if (currentUrl.includes(link.getAttribute('href'))) {
            link.classList.add('active');  // 如果URL包含链接的href属性，添加active类
        } else {
            link.classList.remove('active');  // 否则，移除active类
        }
    });
});
