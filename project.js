document.addEventListener('DOMContentLoaded', function() {
    const projectNames = document.querySelectorAll('#project-names li');
    const projectDisplay = document.getElementById('project-display');

    projectNames.forEach(function(project) {
        project.addEventListener('mouseover', function() {
            const imageSrc = this.getAttribute('data-image');
            projectDisplay.src = imageSrc;
            projectDisplay.style.display = 'block'; // 确保图片显示
        });

        project.addEventListener('mouseout', function() {
            projectDisplay.style.display = 'none'; // 鼠标移开时隐藏图片
        });
    });
});
