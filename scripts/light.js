function lightMode() {
  // All
  document.body.classList.toggle('light-mode')
  document.querySelector('.fa-sun').classList.toggle('fa-moon')
  document.querySelectorAll('.line').forEach(line => line.classList.toggle('light-mode'))
  document
    .querySelectorAll('.custom-shape-divider-bottom-1619735001 .shape-fill')
    .forEach(shape => shape.classList.toggle('light-mode'))
  // About
  document.querySelectorAll('.about-p').forEach(p => p.classList.toggle('light-mode'))
  document.querySelectorAll('.p-icon').forEach(icon => icon.classList.toggle('light-mode'))
  document.querySelectorAll('.bullet').forEach(bullet => bullet.classList.toggle('light-mode'))
  document.querySelectorAll('.tech-used-link').forEach(link => link.classList.toggle('light-mode'))
  document.querySelectorAll('.tech-used-list').forEach(list => list.classList.toggle('light-mode'))
  document.querySelector('.paragraph .about-header').classList.toggle('light-mode')
  document.querySelector('.paragraph .working-on-header').classList.toggle('light-mode')
  // Blog
  // maybe need to make a promise here to wait for the blog to load first?
  document.querySelectorAll('.devArticle').forEach(blog => blog.classList.toggle('light-mode'))
  // Projects
  document
    .querySelectorAll('.project-tile .project-image')
    .forEach(project => project.classList.toggle('light-mode'))
  document.querySelector('.project-tile .project-name0').classList.toggle('light-mode')
  document.querySelector('.project-tile .project-name1').classList.toggle('light-mode')
  document.querySelector('.project-tile .project-name2').classList.toggle('light-mode')
  document.querySelector('.project-tile .project-name3').classList.toggle('light-mode')
  document.querySelector('.project-tile .project-name4').classList.toggle('light-mode')
  document.querySelector('.project-tile .project-name5').classList.toggle('light-mode')
  // Contact
}
