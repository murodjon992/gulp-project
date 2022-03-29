const btn = document.querySelector('.trailers__btn')
const video = document.querySelector('.trailers__video')

const play = document.createElement('button')
document.body.insertAdjacentElement('afterend', play)
btn.addEventListener('click', function(){
    play.innerHTML = 'stop'
    video.style.position = 'fixed'
    play.style.position = 'fixed'
    video.style.top = '17%'
    play.style.top = '50%'
    video.style.left = '17.5%'
    play.style.left = '50%'
    video.style.zIndex = 95
    play.style.zIndex = 96
    
})

play.addEventListener('click', function(){
    if (video.paused) {
        video.play()
        play.innerHTML = 'stop'
    } else {
        video.pause()
        play.innerHTML = 'play'
        
    }
})