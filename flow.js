document.addEventListener("DOMContentLoaded", function() {
    const columns = document.querySelectorAll(".column");
    
    // 设置每个列的动画持续时间
    columns.forEach(column => {
        const imageCount = column.children.length;
        const animationDuration = imageCount * 3; // 每张图片3秒
        column.style.animationDuration = `${animationDuration}s`;
    });

    // 停止动画的函数
    function stopAnimation() {
        columns.forEach(column => {
            column.style.animationPlayState = 'paused';
        });
    }

    // 恢复动画的函数
    function startAnimation() {
        columns.forEach(column => {
            column.style.animationPlayState = 'running';
        });
    }

    // 监听滚动事件
    let isScrolling;
    document.addEventListener('wheel', function(event) {
        stopAnimation();
        
        columns.forEach(column => {
            column.scrollTop += event.deltaY;
        });

        // 清除之前的定时器并设置一个新的定时器来恢复动画
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
            startAnimation();
        }, 1000);
    });

    // 初始化 scrollTop 确保动画从底部开始
    columns.forEach(column => {
        column.scrollTop = column.scrollHeight;
    });

    // 设置每列的初始 scrollTop 以触发动画
    columns.forEach(column => {
        column.scrollTop = column.scrollHeight;
    });
});
