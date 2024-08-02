document.addEventListener("DOMContentLoaded", function() {
    const columns = document.querySelectorAll(".column");

    // 设置每个列的动画持续时间
    columns.forEach(column => {
        const imageCount = column.querySelectorAll(".inner-column img").length;
        column.style.setProperty('--image-count', imageCount);
    });

    // 滚动事件监听器
    let isScrolling;
    document.addEventListener('wheel', function(event) {
        // 暂停动画
        columns.forEach(column => {
            column.style.animationPlayState = 'paused';
        });

        // 滚动列
        columns.forEach(column => {
            column.scrollTop += event.deltaY;
        });

        // 清除之前的定时器并设置一个新的定时器来恢复动画
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
            columns.forEach(column => {
                column.style.animationPlayState = 'running';
            });
        }, 1000);
    });

    // 初始化 scrollTop 确保动画从底部开始
    columns.forEach(column => {
        column.scrollTop = column.scrollHeight;
    });
});

