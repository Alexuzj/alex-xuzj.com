document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.magnifier-container');
    const image = document.querySelector('.journey-image');
    
    // 创建放大镜元素
    const magnifier = document.createElement('div');
    magnifier.classList.add('magnifier');
    container.appendChild(magnifier);
    
    // 创建放大镜中的图片
    const magnifierImage = document.createElement('img');
    magnifierImage.src = image.src;
    magnifier.appendChild(magnifierImage);
    
    container.addEventListener('mousemove', function (e) {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // 显示放大镜
        magnifier.style.display = 'block';
        
        // 移动放大镜位置
        magnifier.style.left = `${x - magnifier.offsetWidth / 2}px`;
        magnifier.style.top = `${y - magnifier.offsetHeight / 2}px`;
        
        // 移动放大镜中的图片位置
        magnifierImage.style.left = `-${x * 2 - magnifier.offsetWidth / 2}px`;
        magnifierImage.style.top = `-${y * 2 - magnifier.offsetHeight / 2}px`;
    });
    
    container.addEventListener('mouseleave', function () {
        // 隐藏放大镜
        magnifier.style.display = 'none';
    });
});
