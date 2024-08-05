document.addEventListener('DOMContentLoaded', function() {
    const projectLinks = document.querySelectorAll('#project-names a'); // 选择 a 标签而不是 li
    const projectDisplay = document.getElementById('project-display');

    projectLinks.forEach(function(projectLink) {
        projectLink.addEventListener('mouseover', function() {
            const imageSrc = this.getAttribute('data-image');
            projectDisplay.src = imageSrc;
            projectDisplay.style.display = 'block'; // 确保图片显示
        });

        projectLink.addEventListener('mouseout', function() {
            projectDisplay.style.display = 'none'; // 鼠标移开时隐藏图片
        });

        // 无需阻止默认点击行为，以允许链接跳转
    });
});
