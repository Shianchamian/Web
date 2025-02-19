// 获取当前页面的 URL
const currentPage = window.location.pathname.split("/").pop(); // 只获取文件名

// 遍历所有导航链接，找到匹配当前页面的链接
document.querySelectorAll("nav a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active"); // 添加高亮效果
  }

  // 点击时添加一个视觉反馈
  link.addEventListener("click", function() {
    document.querySelectorAll("nav a").forEach(item => item.classList.remove("active"));
    this.classList.add("active");
  });
});

// 为每个项目添加点击事件，实现切换 active 状态
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', function() {
      // 切换 active 类，实现点击特效与详情展开
      this.classList.toggle('active');
    });
  });
  