document.addEventListener("DOMContentLoaded", function() {
    const columns = document.querySelectorAll(".column");
    columns.forEach(column => {
        const imageCount = column.children.length;
        const animationDuration = imageCount * 5; // 每张图片5秒
        column.style.animationDuration = `${animationDuration}s`;
    });
});
