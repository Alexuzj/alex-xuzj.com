document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.querySelector('.menu-toggle');
    var submenu = document.querySelector('.submenu');

    toggle.addEventListener('click', function(event) {
        event.preventDefault(); // 防止页面滚动或其他默认动作
        var displayStyle = submenu.style.display;
        submenu.style.display = displayStyle === 'block' ? 'none' : 'block';
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

